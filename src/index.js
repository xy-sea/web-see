export * from './handleEvents';
export * from './load';
export * from './replace';
import { setupReplace } from './load';
import { initOptions, log } from '../core';
import { _global, getFlag, setFlag } from '../utils';
import { SDK_VERSION, SDK_NAME, EVENTTYPES } from '../shared';
import { HandleEvents } from './handleEvents';

function webInit(options = {}) {
  if (!options.dsn || !options.apikey) {
    return console.error(`web-see 缺少必须配置项：${!options.dsn ? 'dsn' : 'apikey'} `);
  }
  if (!('fetch' in _global) || options.disabled) return;
  // 初始化配置
  initOptions(options);
  setupReplace();
}

const install = function (Vue, options = {}) {
  if (getFlag(EVENTTYPES.VUE)) return;
  setFlag(EVENTTYPES.VUE, true);
  let handler = Vue.config.errorHandler;
  Vue.config.errorHandler = function (err, vm, info) {
    HandleEvents.handleError(err);
    if (handler) handler.apply(null, [err, vm, info]);
  };
  init(options);
};

function init(options = {}) {
  webInit(options);
}

/**
 * react在ErrorBoundary中上报错误
 * 例如：componentDidCatch(error, errorInfo) {
 *        // error的错误信息和vue中errorHandler中的信息一致
 *        webSee.errorBoundaryReport(error)
 *      }
 * */
function errorBoundary(err) {
  if (getFlag(EVENTTYPES.REACT)) return;
  setFlag(EVENTTYPES.REACT, true);
  HandleEvents.handleError(err);
}

export default {
  SDK_VERSION,
  SDK_NAME,
  init,
  install,
  errorBoundary,
  log
};
