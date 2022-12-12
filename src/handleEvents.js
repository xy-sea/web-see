import ErrorStackParser from 'error-stack-parser';
import { record } from 'rrweb';
import { EVENTTYPES, HTTP_CODE, STATUS_CODE } from '../common';
import { transportData, breadcrumb, resourceTransform, httpTransform, options } from '../core';
import {
  getTimestamp,
  parseUrlToObj,
  unknownToString,
  getResource,
  on,
  _global,
  _support,
  zip,
  generateUUID,
  getWebVitals,
  openWhiteScreen,
} from '../utils';
const HandleEvents = {
  // 处理xhr、fetch回调
  handleHttp(data, type) {
    const isError =
      data.status === 0 ||
      data.status === HTTP_CODE.BAD_REQUEST ||
      data.status > HTTP_CODE.UNAUTHORIZED;
    const result = httpTransform(data);

    // 添加用户行为，去掉自身上报的接口行为
    if (!data.url.includes(options.dsn)) {
      breadcrumb.push({
        type,
        category: breadcrumb.getCategory(type),
        data: Object.assign({}, result),
        status: isError ? STATUS_CODE.ERROR : STATUS_CODE.OK,
        time: data.time,
      });
    }

    if (isError) {
      // 上报接口错误
      transportData.send({ ...result, type, status: STATUS_CODE.ERROR });
    }
  },
  handleError(ev) {
    try {
      const target = ev.target;
      if (!target || (ev.target && !ev.target.localName)) {
        // vue和react捕获的报错使用ev解析，异步错误使用ev.error解析
        let stackFrame = ErrorStackParser.parse(!target ? ev : ev.error)[0];
        let { fileName, columnNumber, lineNumber } = stackFrame;
        let errorData = {
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
        return transportData.send(errorData);
      }

      // 资源加载报错
      if (target.localName) {
        // 提取资源加载的信息
        const data = resourceTransform(target);
        breadcrumb.push({
          ...data,
          type: EVENTTYPES.RESOURCE,
          category: breadcrumb.getCategory(EVENTTYPES.RESOURCE),
          status: STATUS_CODE.ERROR,
          time: getTimestamp(),
        });
        return transportData.send({
          ...data,
          type: EVENTTYPES.RESOURCE,
          status: STATUS_CODE.ERROR,
        });
      }
    } catch (er) {
      console.error('web-see: handleError错误解析异常:', er);
    }
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
        to: parsedTo ? parsedTo : '/',
      },
      time: getTimestamp(),
      status: STATUS_CODE.OK,
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
        to,
      },
      time: getTimestamp(),
      status: STATUS_CODE.OK,
    });
  },
  handleUnhandleRejection(ev) {
    try {
      let stackFrame = ErrorStackParser.parse(ev.reason)[0];
      let { fileName, columnNumber, lineNumber } = stackFrame;
      let data = {
        type: EVENTTYPES.UNHANDLEDREJECTION,
        status: STATUS_CODE.ERROR,
        time: getTimestamp(),
        message: unknownToString(ev.reason.message || ev.reason.stack),
        fileName,
        line: lineNumber,
        column: columnNumber,
      };

      breadcrumb.push({
        type: EVENTTYPES.UNHANDLEDREJECTION,
        category: breadcrumb.getCategory(EVENTTYPES.UNHANDLEDREJECTION),
        data: Object.assign({}, data),
        time: getTimestamp(),
        status: STATUS_CODE.ERROR,
      });
      transportData.send(data);
    } catch (er) {
      console.error('web-see: handleUnhandleRejection错误解析异常:', er);
    }
  },
  handlePerformance() {
    // 获取FCP、LCP、TTFB、FID等指标
    getWebVitals(res => {
      // name指标名称、rating 评级、value数值
      let { name, rating, value } = res;
      transportData.send({
        type: EVENTTYPES.PERFORMANCE,
        status: STATUS_CODE.OK,
        time: getTimestamp(),
        name,
        rating,
        value,
      });
    });

    let observer = new PerformanceObserver(list => {
      for (const long of list.getEntries()) {
        // 上报长任务详情
        transportData.send({
          type: EVENTTYPES.PERFORMANCE,
          name: 'long_task',
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
  handleScreen() {
    try {
      // 存储录屏信息
      let events = [];
      // 调用stopFn停止录像
      // let stopFn = record({
      record({
        emit(event, isCheckout) {
          if (isCheckout) {
            // 此段时间内发生错误，上报录屏信息
            if (_support.hasError) {
              let recordScreenId = _support.recordScreenId;
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
      console.err('录屏报错:', err);
    }
  },
  handleWhiteScreen() {
    openWhiteScreen(res => {
      // 上报白屏检测信息
      transportData.send({
        type: EVENTTYPES.WHITESCREEN,
        time: getTimestamp(),
        ...res,
      });
    }, options);
  },
};
export { HandleEvents };
