import { BREADCRUMBTYPES, ERRORTYPES, ERROR_TYPE_RE, HTTP_CODE } from '../shared';
import { transportData, breadcrumb, resourceTransform, httpTransform, options } from '../core';
import { getLocationHref, getTimestamp, isError, parseUrlToObj, extractErrorStack, unknownToString, Severity } from '../utils';
const HandleEvents = {
  /**
   * 处理xhr、fetch回调
   */
  handleHttp(data, type) {
    const isError = data.status === 0 || data.status === HTTP_CODE.BAD_REQUEST || data.status > HTTP_CODE.UNAUTHORIZED;
    // httpTransform 处理接口的状态
    const result = httpTransform(data);
    breadcrumb.push({
      type,
      // 用户行为类别
      category: breadcrumb.getCategory(type),
      data: Object.assign({}, result),
      // 等级程度枚举
      level: Severity.Info,
      time: data.time
    });
    if (isError) {
      breadcrumb.push({
        type,
        category: breadcrumb.getCategory(BREADCRUMBTYPES.CODE_ERROR),
        data: Object.assign({}, result),
        level: Severity.Error,
        time: data.time
      });
      // 接口上报直接上报
      transportData.send(result);
    }
  },
  /**
   * 处理window的error的监听回到
   */
  handleError(errorEvent) {
    const target = errorEvent.target;
    if (target.localName) {
      // 资源加载错误 提取有用数据
      const data = resourceTransform(errorEvent.target);
      breadcrumb.push({
        type: BREADCRUMBTYPES.RESOURCE,
        // category 用户行为类型
        category: breadcrumb.getCategory(BREADCRUMBTYPES.RESOURCE),
        data,
        level: Severity.Error
      });
      return transportData.send(data);
    }
    // code error
    const { message, filename, lineno, colno, error } = errorEvent;
    let result;
    if (error && isError(error)) {
      result = extractErrorStack(error, Severity.Normal);
    }
    // 处理SyntaxError，stack没有lineno、colno
    result || (result = HandleEvents.handleNotErrorInstance(message, filename, lineno, colno));
    result.type = ERRORTYPES.JAVASCRIPT_ERROR;
    breadcrumb.push({
      type: BREADCRUMBTYPES.CODE_ERROR,
      category: breadcrumb.getCategory(BREADCRUMBTYPES.CODE_ERROR),
      data: Object.assign({}, result),
      level: Severity.Error
    });
    transportData.send(result);
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
      type: BREADCRUMBTYPES.ROUTE,
      category: breadcrumb.getCategory(BREADCRUMBTYPES.ROUTE),
      data: {
        from: parsedFrom ? parsedFrom : '/',
        to: parsedTo ? parsedTo : '/'
      },
      level: Severity.Info
    });
    // 自定义的onRouteChange
    const { onRouteChange } = options;
    if (onRouteChange) {
      onRouteChange(from, to);
    }
  },
  handleHashchange(data) {
    const { oldURL, newURL } = data;
    const { relative: from } = parseUrlToObj(oldURL);
    const { relative: to } = parseUrlToObj(newURL);
    breadcrumb.push({
      type: BREADCRUMBTYPES.ROUTE,
      category: breadcrumb.getCategory(BREADCRUMBTYPES.ROUTE),
      data: {
        from,
        to
      },
      level: Severity.Info
    });
    const { onRouteChange } = options;
    if (onRouteChange) {
      onRouteChange(from, to);
    }
  },
  handleUnhandleRejection(ev) {
    let data = {
      type: ERRORTYPES.PROMISE_ERROR,
      message: unknownToString(ev.reason),
      url: getLocationHref(),
      name: ev.type,
      time: getTimestamp(),
      level: Severity.Low
    };
    if (isError(ev.reason)) {
      data = Object.assign(Object.assign({}, data), extractErrorStack(ev.reason, Severity.Low));
    }
    breadcrumb.push({
      type: BREADCRUMBTYPES.UNHANDLEDREJECTION,
      category: breadcrumb.getCategory(BREADCRUMBTYPES.UNHANDLEDREJECTION),
      data: Object.assign({}, data),
      level: Severity.Error
    });
    transportData.send(data);
  }
};
export { HandleEvents };
