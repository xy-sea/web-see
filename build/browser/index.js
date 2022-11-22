export * from './handleEvents';
export * from './load';
export * from './replace';
import { setupReplace } from './load';
import { initOptions, log } from '../core';
import { _global } from '../utils';
import { SDK_VERSION, SDK_NAME } from '../shared';

function webInit(options = {}) {
  if (!('XMLHttpRequest' in _global) || options.disabled) return;
  // 初始化配置
  initOptions(options);
  setupReplace();
}
function init(options = {}) {
  webInit(options);
}
export { SDK_VERSION, SDK_NAME, init, log };
