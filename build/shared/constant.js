/**
 * 上报错误类型
 */
export const ERRORTYPES = {
  UNKNOWN: 'UNKNOWN',
  UNKNOWN_FUNCTION: 'UNKNOWN_FUNCTION',
  JAVASCRIPT_ERROR: 'JAVASCRIPT_ERROR',
  LOG_ERROR: 'LOG_ERROR',
  FETCH_ERROR: 'HTTP_ERROR',
  VUE_ERROR: 'VUE_ERROR',
  REACT_ERROR: 'REACT_ERROR',
  RESOURCE_ERROR: 'RESOURCE_ERROR',
  PROMISE_ERROR: 'PROMISE_ERROR',
  ROUTE_ERROR: 'ROUTE_ERROR'
};

export const CompositeEvents = {
  ...ERRORTYPES
};
/**
 * 用户行为栈事件类型
 */
export const BREADCRUMBTYPES = {
  ROUTE: 'Route',
  CLICK: 'UI.Click',
  CONSOLE: 'Console',
  XHR: 'Xhr',
  FETCH: 'Fetch',
  UNHANDLEDREJECTION: 'Unhandledrejection',
  VUE: 'Vue',
  REACT: 'React',
  RESOURCE: 'Resource',
  CODE_ERROR: 'Code Error',
  CUSTOMER: 'Customer',
  APP_ON_SHOW: 'App On Show',
  APP_ON_LAUNCH: 'App On Launch',
  APP_ON_HIDE: 'App On Hide',
  PAGE_ON_SHOW: 'Page On Show',
  PAGE_ON_HIDE: 'Page On Hide',
  PAGE_ON_UNLOAD: 'Page On Unload',
  PAGE_ON_SHARE_APP_MESSAGE: 'Page On Share App Message',
  PAGE_ON_SHARE_TIMELINE: 'Page On Share Timeline',
  PAGE_ON_TAB_ITEM_TAP: 'Page On Tab Item Tap',
  TAP: 'UI.Tap',
  TOUCHMOVE: 'UI.Touchmove'
};

/**
 * 用户行为整合类型
 */
export const BREADCRUMBCATEGORYS = {
  HTTP: 'http',
  USER: 'user',
  DEBUG: 'console',
  EXCEPTION: 'exception',
  LIFECYCLE: 'lifecycle'
};
/**
 * 事件类型
 */
export const EVENTTYPES = {
  XHR: 'xhr',
  FETCH: 'fetch',
  CONSOLE: 'console',
  DOM: 'dom',
  HISTORY: 'history',
  ERROR: 'error',
  HASHCHANGE: 'hashchange',
  UNHANDLEDREJECTION: 'unhandledrejection',
  MITO: 'mito',
  VUE: 'Vue',
  MINI_ROUTE: 'miniRoute',
  MINI_PERFORMANCE: 'miniPerformance',
  MINI_MEMORY_WARNING: 'miniMemoryWarning',
  MINI_NETWORK_STATUS_CHANGE: 'miniNetworkStatusChange',
  MINI_BATTERY_INFO: 'miniBatteryInfo'
};
export const HTTPTYPE = {
  XHR: 'xhr',
  FETCH: 'fetch'
};

export const HTTP_CODE = {
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  500: 'INTERNAL_EXCEPTION',
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_EXCEPTION: 500
};
export const ERROR_TYPE_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

// globalVar 作用是什么？
const globalVar = {
  isLogAddBreadcrumb: true,
  // 接口超时时长
  crossOriginThreshold: 10000
};
export { globalVar };
