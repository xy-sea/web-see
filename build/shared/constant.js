/**
 * 错误类型
 */
export const ERRORTYPES = {
  UNKNOWN: 'UNKNOWN',
  UNKNOWN_FUNCTION: 'UNKNOWN_FUNCTION',
  JAVASCRIPT_ERROR: 'JAVASCRIPT_ERROR',
  LOG_ERROR: 'LOG_ERROR',
  FETCH_ERROR: 'HTTP_ERROR',
  VUE_ERROR: 'VUE_ERROR',
  REACT_ERROR: 'REACT_ERROR',
  RESOURCE_ERROR: 'Resource_Error',
  PROMISE_ERROR: 'PROMISE_ERROR',
  ROUTE_ERROR: 'ROUTE_ERROR'
};

/**
 * 事件类型
 */
export const BREADCRUMBTYPES = {
  HTTP: 'Http',
  CLICK: 'Click',
  RESOURCE: 'Resource_Error',
  CODEERROR: 'Code_Error',
  ROUTE: 'Route',
  CUSTOM: 'Customer'
};

// 状态
export const STATUS_CODE = {
  ERROR: 'error',
  OK: 'ok'
};

/**
 * 事件类型
 */
export const EVENTTYPES = {
  XHR: 'xhr',
  FETCH: 'fetch',
  CLICK: 'click',
  HISTORY: 'history',
  ERROR: 'error',
  HASHCHANGE: 'hashchange',
  UNHANDLEDREJECTION: 'unhandledrejection',
  RESOURCE: 'resource',
  DOM: 'dom',
  VUE: 'vue',
  CUSTOM: 'customer',

  MITO: 'mito',
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
