import {
  _global,
  replaceAop,
  variableTypeDetection,
  getTimestamp,
  on,
  fromHttpStatus,
} from '../../utils/src';
import { voidFun, HttpData } from '../../types/src';
import { HTTPTYPE, EMethods, EVENTTYPES, STATUS_CODE, HTTP_CODE } from '../../common/src';

class XhrPlugin {
  constructor() {}
  apply(publish) {
    xhrReplace.call(this, publish);
  }
  core(data) {
    xhrReplace.call(this, data);
  }
}

function xhrReplace(this: any, publish: any): void {
  if (!('XMLHttpRequest' in _global)) {
    return;
  }
  const { options, transportData } = this;

  // 判断当前接口是否为需要过滤掉的接口
  function isFilterHttpUrl(url: string): boolean {
    return options.filterXhrUrlRegExp && options.filterXhrUrlRegExp.test(url);
  }

  const originalXhrProto = XMLHttpRequest.prototype;
  replaceAop(originalXhrProto, 'open', (originalOpen: voidFun) => {
    return function (...args: any[]): void {
      this.websee_xhr = {
        method: variableTypeDetection.isString(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1],
        sTime: getTimestamp(),
        type: HTTPTYPE.XHR,
      };
      originalOpen.apply(this, args);
    };
  });
  replaceAop(originalXhrProto, 'send', (originalSend: voidFun) => {
    return function (...args: any[]): void {
      const { method, url } = this.websee_xhr;
      // 监听loadend事件，接口成功或失败都会执行
      on(this, 'loadend', function () {
        // isSdkTransportUrl 判断当前接口是否为上报的接口
        // isFilterHttpUrl 判断当前接口是否为需要过滤掉的接口
        if (
          (method === EMethods.Post && transportData.isSdkTransportUrl(url)) ||
          isFilterHttpUrl(url)
        )
          return;
        const { responseType, response, status } = this;
        this.websee_xhr.requestData = args[0];
        const eTime = getTimestamp();
        // 设置该接口的time，用户用户行为按时间排序
        this.websee_xhr.time = this.websee_xhr.sTime;
        this.websee_xhr.Status = status;
        if (['', 'json', 'text'].indexOf(responseType) !== -1) {
          // 用户设置handleHttpStatus函数来判断接口是否正确，只有接口报错时才保留response
          if (options.handleHttpStatus && typeof options.handleHttpStatus == 'function') {
            this.websee_xhr.response = response && JSON.parse(response);
          }
        }
        // 接口的执行时长
        this.websee_xhr.elapsedTime = eTime - this.websee_xhr.sTime;
        // 执行之前注册的xhr回调函数
        publish(EVENTTYPES.XHR, this.websee_xhr);
      });
      originalSend.apply(this, args);
    };
  });
}

// 处理xhr、fetch回调
function handleHttp(data: HttpData, type: EVENTTYPES): void {
  const { options, transportData, breadcrumb } = this;

  const result = httpTransform(data, options);
  // 添加用户行为，去掉自身上报的接口行为
  if (!data.url.includes(options.dsn)) {
    breadcrumb.push({
      type,
      category: breadcrumb.getCategory(type),
      data: result,
      status: result.status,
      time: data.time,
    });
  }

  if (result.status === 'error') {
    // 上报接口错误
    transportData.send({ ...result, type, status: STATUS_CODE.ERROR });
  }
}

// 处理接口的状态
function httpTransform(data: HttpData, options): HttpData {
  let message: any = '';
  const { elapsedTime, time, method, type, Status, response, requestData } = data;
  let status: STATUS_CODE;
  if (Status === 0) {
    status = STATUS_CODE.ERROR;
    message =
      elapsedTime <= options.overTime * 1000
        ? `请求失败，Status值为:${Status}`
        : '请求失败，接口超时';
  } else if ((Status as number) < HTTP_CODE.BAD_REQUEST) {
    status = STATUS_CODE.OK;
    if (options.handleHttpStatus && typeof options.handleHttpStatus == 'function') {
      if (options.handleHttpStatus(data)) {
        status = STATUS_CODE.OK;
      } else {
        status = STATUS_CODE.ERROR;
        message = `接口报错，报错信息为：${
          typeof response == 'object' ? JSON.stringify(response) : response
        }`;
      }
    }
  } else {
    status = STATUS_CODE.ERROR;
    message = `请求失败，Status值为:${Status}，${fromHttpStatus(Status as number)}`;
  }
  message = `${data.url}; ${message}`;
  return {
    url: data.url,
    time,
    status,
    elapsedTime,
    message,
    requestData: {
      httpType: type,
      method,
      data: requestData || '',
    },
    response: {
      Status,
      data: status == STATUS_CODE.ERROR ? response : null,
    },
  };
}
