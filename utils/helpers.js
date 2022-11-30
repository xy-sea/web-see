import { nativeToString, variableTypeDetection } from './is';
export function getLocationHref() {
  if (typeof document === 'undefined' || document.location == null) return '';
  return document.location.href;
}
/**
 * 添加事件监听器
 *
 * ../export
 * ../param {{ addEventListener: Function }} target
 * ../param {keyof TotalEventName} eventName
 * ../param {Function} handler
 * ../param {(boolean | Object)} opitons
 * ../returns
 */
export function on(target, eventName, handler, opitons = false) {
  target.addEventListener(eventName, handler, opitons);
}
/**
 *
 * 重写对象上面的某个属性
 * ../param source 需要被重写的对象
 * ../param name 需要被重写对象的key
 * ../param replacement 以原有的函数作为参数，执行并重写原有函数
 * ../param isForced 是否强制重写（可能原先没有该属性）
 * ../returns void
 */
export function replaceAop(source, name, replacement, isForced = false) {
  if (source === undefined) return;
  if (name in source || isForced) {
    const original = source[name];
    const wrapped = replacement(original);
    if (typeof wrapped === 'function') {
      source[name] = wrapped;
    }
  }
}
/**
 * 用&分割对象，返回a=1&b=2
 * ../param obj 需要拼接的对象
 */
export function splitObjToQuery(obj) {
  return Object.entries(obj).reduce((result, [key, value], index) => {
    if (index !== 0) {
      result += '&';
    }
    const valueStr = variableTypeDetection.isObject(value) || variableTypeDetection.isArray(value) ? JSON.stringify(value) : value;
    result += `${key}=${valueStr}`;
    return result;
  }, '');
}
export const defaultFunctionName = '<anonymous>';
/**
 * 需要获取函数名，匿名则返回<anonymous>
 * ../param {unknown} fn 需要获取函数名的函数本体
 * ../returns 返回传入的函数的函数名
 */
export function getFunctionName(fn) {
  if (!fn || typeof fn !== 'function') {
    return defaultFunctionName;
  }
  return fn.name || defaultFunctionName;
}
/**
 * 函数节流
 * fn 需要节流的函数
 * delay 节流的时间间隔
 * 返回一个包含节流功能的函数
 */
export const throttle = (fn, delay) => {
  let canRun = true;
  return function (...args) {
    if (!canRun) return;
    fn.apply(this, args);
    canRun = false;
    setTimeout(() => {
      canRun = true;
    }, delay);
  };
};

// 获取当前的时间戳
export function getTimestamp() {
  return Date.now();
}

// 获取当天的日期 2022-11-08
export function getYMDHMS() {
  const datetime = new Date();
  const year = datetime.getFullYear(),
    month = ('0' + (datetime.getMonth() + 1)).slice(-2),
    date = ('0' + datetime.getDate()).slice(-2);
  return `${year}-${month}-${date}`;
}

export function typeofAny(target) {
  // return typeof target === type;
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
export function toStringAny(target, type) {
  return nativeToString.call(target) === type;
}

// 验证选项的类型
export function validateOption(target, targetName, expectType) {
  if (!target) return false;
  if (typeofAny(target) === expectType) return true;
  console.error(`web-see: ${targetName}期望传入${expectType}类型，目前是${typeofAny(target)}类型`);
}

export function generateUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
export function unknownToString(target) {
  if (variableTypeDetection.isString(target)) {
    return target;
  }
  if (variableTypeDetection.isUndefined(target)) {
    return 'undefined';
  }
  return JSON.stringify(target);
}

export function interceptStr(str, interceptLength) {
  if (variableTypeDetection.isString(str)) {
    return str.slice(0, interceptLength) + (str.length > interceptLength ? `:截取前${interceptLength}个字符` : '');
  }
  return '';
}
