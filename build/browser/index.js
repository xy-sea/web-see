export * from './handleEvents';
export * from './load';
export * from './replace';
import { setupReplace } from './load';
import { initOptions, log } from '../core';
import { _global, getFlag, setFlag } from '../utils';
import { SDK_VERSION, SDK_NAME, EVENTTYPES } from '../shared';
import { HandleEvents } from './handleEvents';

function webInit(options = {}) {
  if (!('XMLHttpRequest' in _global) || options.disabled) return;
  // 初始化配置
  initOptions(options);
  setupReplace();
}

const install = function (Vue, options = {}) {
  if (getFlag(EVENTTYPES.VUE)) return;
  setFlag(EVENTTYPES.VUE, true);
  // 添加errorHandler
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

export default {
  SDK_VERSION,
  SDK_NAME,
  init,
  install,
  log
};
