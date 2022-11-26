import { toStringValidateOption, validateOption, _support, setSilentFlag } from '../utils';
import { breadcrumb } from './breadcrumb';
import { transportData } from './transportData';
export class Options {
  constructor() {
    this.beforeAppAjaxSend = () => {};
    this.throttleDelayTime = 0;
  }
  bindOptions(options = {}) {
    const { beforeAppAjaxSend, filterXhrUrlRegExp, throttleDelayTime } = options;
    validateOption(beforeAppAjaxSend, 'beforeAppAjaxSend', 'function') && (this.beforeAppAjaxSend = beforeAppAjaxSend);
    // browser hooks
    validateOption(throttleDelayTime, 'throttleDelayTime', 'number') && (this.throttleDelayTime = throttleDelayTime);
    toStringValidateOption(filterXhrUrlRegExp, 'filterXhrUrlRegExp', '[object RegExp]') && (this.filterXhrUrlRegExp = filterXhrUrlRegExp);
  }
}
const options = _support.options || (_support.options = new Options());

export function initOptions(paramOptions = {}) {
  // setSilentFlag 给全局添加已设置的标识，防止重复设置
  setSilentFlag(paramOptions);
  // 设置用户行为的配置项
  breadcrumb.bindOptions(paramOptions);
  // transportData 配置上报的信息
  transportData.bindOptions(paramOptions);
  // 绑定其他配置项
  options.bindOptions(paramOptions);
}
export { options };
