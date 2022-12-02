import { EVENTTYPES, BREADCRUMBTYPES } from '../common';
import { validateOption, getTimestamp, _support } from '../utils';
export class Breadcrumb {
  constructor() {
    this.maxBreadcrumbs = 20;
    this.beforePushBreadcrumb = null;
    this.stack = [];
  }
  /**
   * 添加用户行为栈
   */
  push(data) {
    if (typeof this.beforePushBreadcrumb === 'function') {
      // 执行用户自定义的hook
      let result = this.beforePushBreadcrumb(this, data);
      if (!result) return;
      this.immediatePush(result);
      return;
    }
    this.immediatePush(data);
  }
  immediatePush(data) {
    data.time || (data.time = getTimestamp());
    if (this.stack.length >= this.maxBreadcrumbs) {
      this.shift();
    }
    this.stack.push(data);
    this.stack.sort((a, b) => a.time - b.time);
  }
  shift() {
    return this.stack.shift() !== undefined;
  }
  clear() {
    this.stack = [];
  }
  getStack() {
    return this.stack;
  }
  getCategory(type) {
    switch (type) {
      // 接口请求
      case EVENTTYPES.XHR:
      case EVENTTYPES.FETCH:
        return BREADCRUMBTYPES.HTTP;

      // 用户点击
      case EVENTTYPES.CLICK:
        return BREADCRUMBTYPES.CLICK;

      // 路由变化
      case EVENTTYPES.HISTORY:
      case EVENTTYPES.HASHCHANGE:
        return BREADCRUMBTYPES.ROUTE;

      // 加载资源
      case EVENTTYPES.RESOURCE:
        return BREADCRUMBTYPES.RESOURCE;

      // Js代码报错
      case EVENTTYPES.UNHANDLEDREJECTION:
      case EVENTTYPES.ERROR:
        return BREADCRUMBTYPES.CODEERROR;

      // 用户自定义
      default:
        return BREADCRUMBTYPES.CUSTOM;
    }
  }
  bindOptions(options = {}) {
    // maxBreadcrumbs 用户行为存放的最大容量
    // beforePushBreadcrumb 添加用户行为前的处理函数
    const { maxBreadcrumbs, beforePushBreadcrumb } = options;
    validateOption(maxBreadcrumbs, 'maxBreadcrumbs', 'number') && (this.maxBreadcrumbs = maxBreadcrumbs);
    validateOption(beforePushBreadcrumb, 'beforePushBreadcrumb', 'function') && (this.beforePushBreadcrumb = beforePushBreadcrumb);
  }
}
const breadcrumb = _support.breadcrumb || (_support.breadcrumb = new Breadcrumb());
export { breadcrumb };
