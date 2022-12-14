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
  ROUTE_ERROR: 'ROUTE_ERROR',
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
  CUSTOM: 'Custom',
};

/**
 * 状态
 */
export const STATUS_CODE = {
  ERROR: 'error',
  OK: 'ok',
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
  REACT: 'react',
  CUSTOM: 'custom',
  PERFORMANCE: 'performance',
  RECORDSCREEN: 'recordScreen',
  WHITESCREEN: 'whiteScreen',
};

export const HTTPTYPE = {
  XHR: 'xhr',
  FETCH: 'fetch',
};

export const HTTP_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const EMethods = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
};
