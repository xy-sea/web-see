import ErrorStackParser from 'error-stack-parser';
import { record } from 'rrweb';
import { openWhiteScreen, getResource, getWebVitals } from './index';
import { transportData, breadcrumb, resourceTransform, httpTransform, options } from './index';
import { EVENTTYPES, STATUS_CODE } from '@websee/common';
import {
  getErrorUid,
  hashMapExist,
  getTimestamp,
  parseUrlToObj,
  unknownToString,
  on,
  _global,
  _support,
  zip,
  generateUUID,
} from '@websee/utils';
import { ErrorTarget, RouteHistory, HttpData } from '@websee/types';

const HandleEvents = {
  // 处理xhr、fetch回调
  handleHttp(data: HttpData, type: EVENTTYPES): void {
    const result = httpTransform(data);
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
  },
  handleError(ev: ErrorTarget): void {
    try {
      const target = ev.target;
      if (!target || (ev.target && !ev.target.localName)) {
        // vue和react捕获的报错使用ev解析，异步错误使用ev.error解析
        const stackFrame = ErrorStackParser.parse(!target ? ev : ev.error)[0];
        const { fileName, columnNumber, lineNumber } = stackFrame;
        const errorData = {
          type: EVENTTYPES.ERROR,
          status: STATUS_CODE.ERROR,
          time: getTimestamp(),
          message: ev.message,
          fileName,
          line: lineNumber,
          column: columnNumber,
        };
        breadcrumb.push({
          type: EVENTTYPES.ERROR,
          category: breadcrumb.getCategory(EVENTTYPES.ERROR),
          data: errorData,
          time: getTimestamp(),
          status: STATUS_CODE.ERROR,
        });
        const hash: string = getErrorUid(
          `${EVENTTYPES.ERROR}-${ev.message}-${fileName}-${columnNumber}`
        );
        // 开启repeatCodeError第一次报错才上报
        if (!options.repeatCodeError || (options.repeatCodeError && !hashMapExist(hash))) {
          return transportData.send(errorData);
        }
      }

      // 资源加载报错
      if (target?.localName) {
        // 提取资源加载的信息
        const data = resourceTransform(target);
        breadcrumb.push({
          type: EVENTTYPES.RESOURCE,
          category: breadcrumb.getCategory(EVENTTYPES.RESOURCE),
          status: STATUS_CODE.ERROR,
          time: getTimestamp(),
          data,
        });
        return transportData.send({
          ...data,
          type: EVENTTYPES.RESOURCE,
          status: STATUS_CODE.ERROR,
        });
      }
    } catch (er) {
      // console.error('web-see: handleError错误解析异常:', er);
    }
  },
  handleHistory(data: RouteHistory): void {
    const { from, to } = data;
    // 定义parsedFrom变量，值为relative
    const { relative: parsedFrom } = parseUrlToObj(from);
    const { relative: parsedTo } = parseUrlToObj(to);
    breadcrumb.push({
      type: EVENTTYPES.HISTORY,
      category: breadcrumb.getCategory(EVENTTYPES.HISTORY),
      data: {
        from: parsedFrom ? parsedFrom : '/',
        to: parsedTo ? parsedTo : '/',
      },
      time: getTimestamp(),
      status: STATUS_CODE.OK,
    });
  },
  handleHashchange(data: HashChangeEvent): void {
    const { oldURL, newURL } = data;
    const { relative: from } = parseUrlToObj(oldURL);
    const { relative: to } = parseUrlToObj(newURL);
    breadcrumb.push({
      type: EVENTTYPES.HASHCHANGE,
      category: breadcrumb.getCategory(EVENTTYPES.HASHCHANGE),
      data: {
        from,
        to,
      },
      time: getTimestamp(),
      status: STATUS_CODE.OK,
    });
  },
  handleUnhandleRejection(ev: PromiseRejectionEvent): void {
    try {
      const stackFrame = ErrorStackParser.parse(ev.reason)[0];
      const { fileName, columnNumber, lineNumber } = stackFrame;
      const message = unknownToString(ev.reason.message || ev.reason.stack);
      const data = {
        type: EVENTTYPES.UNHANDLEDREJECTION,
        status: STATUS_CODE.ERROR,
        time: getTimestamp(),
        message,
        fileName,
        line: lineNumber,
        column: columnNumber,
      };

      breadcrumb.push({
        type: EVENTTYPES.UNHANDLEDREJECTION,
        category: breadcrumb.getCategory(EVENTTYPES.UNHANDLEDREJECTION),
        time: getTimestamp(),
        status: STATUS_CODE.ERROR,
        data,
      });
      const hash: string = getErrorUid(
        `${EVENTTYPES.UNHANDLEDREJECTION}-${message}-${fileName}-${columnNumber}`
      );
      // 开启repeatCodeError第一次报错才上报
      if (!options.repeatCodeError || (options.repeatCodeError && !hashMapExist(hash))) {
        transportData.send(data);
      }
    } catch (er) {
      // console.error('web-see: handleUnhandleRejection错误解析异常:', er);
    }
  },
  handlePerformance(): void {
    try {
      // 获取FCP、LCP、TTFB、FID等指标
      getWebVitals((res: any) => {
        // name指标名称、rating 评级、value数值
        const { name, rating, value } = res;
        transportData.send({
          type: EVENTTYPES.PERFORMANCE,
          status: STATUS_CODE.OK,
          time: getTimestamp(),
          name,
          rating,
          value,
        });
      });
    } catch (err) {
      // console.err('性能指标获取错误:' + err);
    }

    const observer = new PerformanceObserver(list => {
      for (const long of list.getEntries()) {
        // 上报长任务详情
        transportData.send({
          type: EVENTTYPES.PERFORMANCE,
          name: 'longTask',
          longTask: long,
          time: getTimestamp(),
          status: STATUS_CODE.OK,
        });
      }
    });
    observer.observe({ entryTypes: ['longtask'] });

    on(_global, 'load', function () {
      // 上报资源列表
      transportData.send({
        type: EVENTTYPES.PERFORMANCE,
        name: 'resource_list',
        time: getTimestamp(),
        status: STATUS_CODE.OK,
        resourceList: getResource(),
      });

      // 上报内存情况, safari、firefox不支持该属性
      if (performance.memory) {
        transportData.send({
          type: EVENTTYPES.PERFORMANCE,
          name: 'memory',
          time: getTimestamp(),
          status: STATUS_CODE.OK,
          memory: {
            jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
            totalJSHeapSize: performance.memory.totalJSHeapSize,
            usedJSHeapSize: performance.memory.usedJSHeapSize,
          },
        });
      }
    });
  },
  handleScreen(): void {
    try {
      // events存储录屏信息
      let events: any[] = [];
      // 调用stopFn停止录像
      // let stopFn = record({
      record({
        emit(event, isCheckout) {
          if (isCheckout) {
            // 此段时间内发生错误，上报录屏信息
            if (_support.hasError) {
              const recordScreenId = _support.recordScreenId;
              _support.recordScreenId = generateUUID();
              transportData.send({
                type: EVENTTYPES.RECORDSCREEN,
                recordScreenId,
                time: getTimestamp(),
                status: STATUS_CODE.OK,
                events: zip(events),
              });
              events = [];
              _support.hasError = false;
            } else {
              // 不上报，清空录屏
              events = [];
              _support.recordScreenId = generateUUID();
            }
          }
          events.push(event);
        },
        recordCanvas: true,
        // 默认每10s重新制作快照
        checkoutEveryNms: 1000 * options.recordScreentime,
      });
    } catch (err) {
      // console.err('录屏报错:' + err);
    }
  },
  handleWhiteScreen(): void {
    try {
      openWhiteScreen((res: any) => {
        // 上报白屏检测信息
        transportData.send({
          type: EVENTTYPES.WHITESCREEN,
          time: getTimestamp(),
          ...res,
        });
      }, options);
    } catch (err) {
      // console.err('白屏检测错误:' + err);
    }
  },
};
export { HandleEvents };
