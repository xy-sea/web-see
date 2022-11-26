import ErrorStackParser from 'error-stack-parser';
import { EVENTTYPES, ERRORTYPES, ERROR_TYPE_RE, HTTP_CODE, STATUS_CODE } from '../shared';
import { transportData, breadcrumb, resourceTransform, httpTransform } from '../core';
import { getLocationHref, getTimestamp, parseUrlToObj, Severity, unknownToString } from '../utils';
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
  handleError(ev) {
    try {
      const target = ev.target;
      // Vue.config.errorHandler捕获的报错 or 异步错误
      if (!target || (ev.target && !ev.target.localName)) {
        // errorHandler捕获的报错使用ev解析，异步错误使用ev.error解析
        let stackFrame = ErrorStackParser.parse(!target ? ev : ev.error)[0];
        let { fileName, columnNumber, lineNumber } = stackFrame;
        let errorData = {
          type: EVENTTYPES.ERROR,
          status: STATUS_CODE.ERROR,
          message: ev.message,
          fileName,
          line: lineNumber,
          column: columnNumber
        };
        breadcrumb.push({
          type: EVENTTYPES.ERROR,
          // 用户行为类型
          category: breadcrumb.getCategory(EVENTTYPES.ERROR),
          data: errorData,
          time: getTimestamp(),
          status: STATUS_CODE.ERROR
        });
        return transportData.send(errorData);
      }

      // 资源加载报错 验证ok ✔
      if (target.localName) {
        // 资源加载错误 提取有用数据
        const data = resourceTransform(target);
        breadcrumb.push({
          ...data,
          type: EVENTTYPES.RESOURCE,
          // 用户行为类型 Resource
          category: breadcrumb.getCategory(EVENTTYPES.RESOURCE),
          status: STATUS_CODE.ERROR,
          time: getTimestamp()
        });
        return transportData.send({
          ...data,
          type: EVENTTYPES.RESOURCE,
          status: STATUS_CODE.ERROR
        });
      }
    } catch (er) {
      console.error('错误代码解析异常:', er);
    }
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
    console.log('stackFrame', stackFrame);

    let { fileName, columnNumber, lineNumber } = stackFrame;
    let data = {
      type: EVENTTYPES.UNHANDLEDREJECTION,
      status: STATUS_CODE.ERROR,
      time: getTimestamp(),
      message: unknownToString(ev.reason),
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
