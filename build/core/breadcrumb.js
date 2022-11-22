import { BREADCRUMBTYPES, BREADCRUMBCATEGORYS } from '../shared';
import { validateOption, getTimestamp, slientConsoleScope, _support } from '../utils';
export class Breadcrumb {
  constructor() {
    this.maxBreadcrumbs = 20;
    this.beforePushBreadcrumb = null;
    this.stack = [];
  }
  /**
   * 添加用户行为栈
   *
   * ../param {BreadcrumbPushData} data
   * ../memberof Breadcrumb
   */
  push(data) {
    if (typeof this.beforePushBreadcrumb === 'function') {
      let result = null;
      // 如果用户输入console，并且logger是打开的会造成无限递归，
      // 应该加入一个开关，执行这个函数前，把监听console的行为关掉
      const beforePushBreadcrumb = this.beforePushBreadcrumb;
      slientConsoleScope(() => {
        result = beforePushBreadcrumb(this, data);
      });
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
    // make sure xhr fetch is behind button click
    this.stack.sort((a, b) => a.time - b.time);

    console.log('this.stack', this.stack);
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
      case BREADCRUMBTYPES.XHR:
      case BREADCRUMBTYPES.FETCH:
        return BREADCRUMBCATEGORYS.HTTP;
      case BREADCRUMBTYPES.CLICK:
      case BREADCRUMBTYPES.ROUTE:
      case BREADCRUMBTYPES.TAP:
      case BREADCRUMBTYPES.TOUCHMOVE:
        return BREADCRUMBCATEGORYS.USER;
      case BREADCRUMBTYPES.CUSTOMER:
      case BREADCRUMBTYPES.CONSOLE:
        return BREADCRUMBCATEGORYS.DEBUG;
      case BREADCRUMBTYPES.APP_ON_LAUNCH:
      case BREADCRUMBTYPES.APP_ON_SHOW:
      case BREADCRUMBTYPES.APP_ON_HIDE:
      case BREADCRUMBTYPES.PAGE_ON_SHOW:
      case BREADCRUMBTYPES.PAGE_ON_HIDE:
      case BREADCRUMBTYPES.PAGE_ON_SHARE_APP_MESSAGE:
      case BREADCRUMBTYPES.PAGE_ON_SHARE_TIMELINE:
      case BREADCRUMBTYPES.PAGE_ON_TAB_ITEM_TAP:
        return BREADCRUMBCATEGORYS.LIFECYCLE;
      case BREADCRUMBTYPES.UNHANDLEDREJECTION:
      case BREADCRUMBTYPES.CODE_ERROR:
      case BREADCRUMBTYPES.RESOURCE:
      case BREADCRUMBTYPES.VUE:
      case BREADCRUMBTYPES.REACT:
      default:
        return BREADCRUMBCATEGORYS.EXCEPTION;
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
