import { UAParser } from 'ua-parser-js';
import { variableTypeDetection } from './is';
import { generateUUID } from './helpers';
export const isBrowserEnv = variableTypeDetection.isWindow(typeof window !== 'undefined' ? window : 0);
// 获取全局变量
export function getGlobal() {
  if (isBrowserEnv) return window;
}
const _global = getGlobal();
const _support = getGlobalSupport();
const uaResult = new UAParser().getResult();

// 某段时间代码是否报错
_support.hasError = false;

// 存储录屏的信息
_support.events = [];
// 本次录屏的id
_support.recordScreenId = generateUUID();

// 获取设备信息
_support.deviceInfo = {
  // 浏览器版本号 107.0.0.0
  browser_version: uaResult.browser.version,
  // Chrome
  browser: uaResult.browser.name,
  // 电脑系统 10
  os_version: uaResult.os.version,
  // Windows
  os: uaResult.os.name,
  ua: uaResult.ua,
  device: uaResult.device.model ? uaResult.device.model : 'Unknow',
  // pc
  device_type: uaResult.device.type ? uaResult.device.type : 'Pc'
};

_support.replaceFlag = _support.replaceFlag || {};
let replaceFlag = _support.replaceFlag;
export function setFlag(replaceType, isSet) {
  if (replaceFlag[replaceType]) return;
  replaceFlag[replaceType] = isSet;
}
export function getFlag(replaceType) {
  return replaceFlag[replaceType] ? true : false;
}
// 获取全部变量__webSee__的引用地址
export function getGlobalSupport() {
  _global.__webSee__ = _global.__webSee__ || {};
  return _global.__webSee__;
}
export function supportsHistory() {
  const chrome = _global.chrome;
  const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
  const hasHistoryApi = 'history' in _global && !!_global.history.pushState && !!_global.history.replaceState;
  return !isChromePackagedApp && hasHistoryApi;
}

export { _global, _support };
