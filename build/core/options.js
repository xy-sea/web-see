import { generateUUID, toStringValidateOption, validateOption, _support, setSilentFlag } from '../utils';
import { breadcrumb } from './breadcrumb';
import { transportData } from './transportData';
export class Options {
  constructor() {
    this.beforeAppAjaxSend = () => {};
    this.traceIdFieldName = 'Trace-Id';
    this.throttleDelayTime = 0;
    this.maxDuplicateCount = 2;
    this.enableTraceId = false;
  }
  bindOptions(options = {}) {
    const { beforeAppAjaxSend, enableTraceId, filterXhrUrlRegExp, traceIdFieldName, throttleDelayTime, includeHttpUrlTraceIdRegExp, maxDuplicateCount, onRouteChange } = options;
    validateOption(beforeAppAjaxSend, 'beforeAppAjaxSend', 'function') && (this.beforeAppAjaxSend = beforeAppAjaxSend);
    // browser hooks
    validateOption(onRouteChange, 'onRouteChange', 'function') && (this.onRouteChange = onRouteChange);
    validateOption(enableTraceId, 'enableTraceId', 'boolean') && (this.enableTraceId = enableTraceId);
    validateOption(traceIdFieldName, 'traceIdFieldName', 'string') && (this.traceIdFieldName = traceIdFieldName);
    validateOption(throttleDelayTime, 'throttleDelayTime', 'number') && (this.throttleDelayTime = throttleDelayTime);
    validateOption(maxDuplicateCount, 'maxDuplicateCount', 'number') && (this.maxDuplicateCount = maxDuplicateCount);
    toStringValidateOption(filterXhrUrlRegExp, 'filterXhrUrlRegExp', '[object RegExp]') && (this.filterXhrUrlRegExp = filterXhrUrlRegExp);
    toStringValidateOption(includeHttpUrlTraceIdRegExp, 'includeHttpUrlTraceIdRegExp', '[object RegExp]') && (this.includeHttpUrlTraceIdRegExp = includeHttpUrlTraceIdRegExp);
  }
}
const options = _support.options || (_support.options = new Options());
export function setTraceId(httpUrl, callback) {
  const { includeHttpUrlTraceIdRegExp, enableTraceId } = options;
  if (enableTraceId && includeHttpUrlTraceIdRegExp && includeHttpUrlTraceIdRegExp.test(httpUrl)) {
    const traceId = generateUUID();
    callback(options.traceIdFieldName, traceId);
  }
}
/**
 * init core methods
 * @param paramOptions
 */
export function initOptions(paramOptions = {}) {
  // setSilentFlag 给 全局添加已设置的标识
  setSilentFlag(paramOptions);
  // 设置用户行为的配置项
  breadcrumb.bindOptions(paramOptions);
  // transportData 配置上报的信息
  transportData.bindOptions(paramOptions);
  // 绑定其他配置项
  options.bindOptions(paramOptions);
}
export { options };
