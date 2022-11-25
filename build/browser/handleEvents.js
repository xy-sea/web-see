import ErrorStackParser from 'error-stack-parser';
import { EVENTTYPES, ERRORTYPES, ERROR_TYPE_RE, HTTP_CODE, STATUS_CODE } from '../shared';
import { transportData, breadcrumb, resourceTransform, httpTransform } from '../core';
import { getLocationHref, getTimestamp, parseUrlToObj, unknownToString, Severity } from '../utils';
const HandleEvents = {
  /**
   * 处理xhr、fetch回调
   */
  handleHttp(data, type) {
    const isError = data.status === 0 || data.status === HTTP_CODE.BAD_REQUEST || data.status > HTTP_CODE.UNAUTHORIZED;
    // httpTransform 处理接口的状态
    const result = httpTransform(data);
    // 添加用户行为
    breadcrumb.push({
      // type：事件类型
      type,
      // category：用户行为类别
      category: breadcrumb.getCategory(type),
      data: Object.assign({}, result),
      // 状态，两种情况：error\ok
      status: isError ? STATUS_CODE.ERROR : STATUS_CODE.OK,
      time: data.time
    });
    if (isError) {
      // 上报接口错误
      transportData.send({ ...result, type, status: STATUS_CODE.ERROR });
    }
  },
  /**
   * 处理window的error的监听回到
   */
  handleError(errorEvent) {
    const target = errorEvent.target;

    // 资源加载报错 验证ok ✔
    if (target.localName) {
      // 资源加载错误 提取有用数据
      const data = resourceTransform(target);
      breadcrumb.push({
        type: EVENTTYPES.RESOURCE,
        // 用户行为类型 Resource
        category: breadcrumb.getCategory(EVENTTYPES.RESOURCE),
        data,
        status: STATUS_CODE.ERROR,
        time: getTimestamp()
      });
      return transportData.send(data);
    }

    // js代码报错
    let stackFrame = ErrorStackParser.parse(errorEvent.error)[0];
    let { fileName, columnNumber, lineNumber } = stackFrame;
    let errorData = {
      message: errorEvent.message,
      fileName,
      line: lineNumber,
      column: columnNumber
    };
    breadcrumb.push({
      type: EVENTTYPES.ERROR,
      // 用户行为类型 Resource
      category: breadcrumb.getCategory(EVENTTYPES.ERROR),
      data: errorData,
      time: getTimestamp(),
      status: STATUS_CODE.ERROR
    });
    transportData.send(errorData);
  },
  handleNotErrorInstance(message, filename, lineno, colno) {
    let name = ERRORTYPES.UNKNOWN;
    const url = filename || getLocationHref();
    let msg = message;
    const matches = message.match(ERROR_TYPE_RE);
    if (matches[1]) {
      name = matches[1];
      msg = matches[2];
    }
    const element = {
      url,
      func: ERRORTYPES.UNKNOWN_FUNCTION,
      args: ERRORTYPES.UNKNOWN,
      line: lineno,
      col: colno
    };
    return {
      url,
      name,
      message: msg,
      level: Severity.Normal,
      time: getTimestamp(),
      stack: [element]
    };
  },
  handleHistory(data) {
    const { from, to } = data;
    // 定义parsedFrom变量，值为relative
    const { relative: parsedFrom } = parseUrlToObj(from);
    const { relative: parsedTo } = parseUrlToObj(to);
    breadcrumb.push({
      type: EVENTTYPES.HISTORY,
      category: breadcrumb.getCategory(EVENTTYPES.HISTORY),
      data: {
        from: parsedFrom ? parsedFrom : '/',
        to: parsedTo ? parsedTo : '/'
      },
      time: getTimestamp(),
      status: STATUS_CODE.OK
    });
  },
  handleHashchange(data) {
    const { oldURL, newURL } = data;
    const { relative: from } = parseUrlToObj(oldURL);
    const { relative: to } = parseUrlToObj(newURL);
    breadcrumb.push({
      type: EVENTTYPES.HASHCHANGE,
      category: breadcrumb.getCategory(EVENTTYPES.HASHCHANGE),
      data: {
        from,
        to
      },
      time: getTimestamp(),
      status: STATUS_CODE.OK
    });
  },
  handleUnhandleRejection(ev) {
    let stackFrame = ErrorStackParser.parse(ev.reason)[0];
    let { fileName, columnNumber, lineNumber } = stackFrame;
    let data = {
      type: EVENTTYPES.UNHANDLEDREJECTION,
      message: unknownToString(ev.reason),
      url: getLocationHref(),
      name: ev.type,
      fileName,
      line: lineNumber,
      column: columnNumber
    };

    breadcrumb.push({
      type: EVENTTYPES.UNHANDLEDREJECTION,
      category: breadcrumb.getCategory(EVENTTYPES.UNHANDLEDREJECTION),
      data: Object.assign({}, data),
      time: getTimestamp(),
      status: STATUS_CODE.ERROR
    });
    transportData.send(data);
  }
};
export { HandleEvents };
