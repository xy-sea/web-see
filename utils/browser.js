import pako from 'pako';
import { Base64 } from 'js-base64';
import { EVENTTYPES } from '../common';
import { setFlag } from './global';

export function getResource() {
  if (performance.getEntriesByType) {
    const entries = performance.getEntriesByType('resource');
    // 过滤掉非静态资源的 fetch、 xmlhttprequest、beacon
    let list = entries.filter((entry) => {
      return ['fetch', 'xmlhttprequest', 'beacon'].indexOf(entry.initiatorType) === -1;
    });

    if (list.length) {
      list = JSON.parse(JSON.stringify(list));
      list.forEach((entry) => {
        entry.isCache = isCache(entry);
      });
    }
    return list;
  }
}

// 判断资料是否来自缓存
export function isCache(entry) {
  return entry.transferSize === 0 || (entry.transferSize !== 0 && entry.encodedBodySize === 0);
}

/**
 * 返回包含id、class、innerTextde字符串的标签
 * @param target html节点
 */
export function htmlElementAsString(target) {
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'body') {
    return null;
  }
  let classNames = target.classList.value;

  classNames = classNames !== '' ? ` class='${classNames}'` : '';
  const id = target.id ? ` id="${target.id}"` : '';
  const innerText = target.innerText;
  return `<${tagName}${id}${classNames !== '' ? classNames : ''}>${innerText}</${tagName}>`;
}
/**
 * 将地址字符串转换成对象，
 * 输入：'https://github.com/xy-sea/web-see?token=123&name=11'
 * 输出：{
 *  "host": "github.com",
 *  "path": "/xy-sea/web-see",
 *  "protocol": "https",
 *  "relative": "/xy-sea/web-see?token=123&name=11"
 * }
 */
export function parseUrlToObj(url) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || '';
  const fragment = match[8] || '';
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    relative: match[5] + query + fragment
  };
}

// 压缩
export function zip(data) {
  if (!data) return data;
  // 判断数据是否需要转为JSON
  const dataJson = typeof data !== 'string' && typeof data !== 'number' ? JSON.stringify(data) : data;
  // 使用Base64.encode处理字符编码，兼容中文
  const str = Base64.encode(dataJson);
  let binaryString = pako.gzip(str);
  let arr = Array.from(binaryString);
  let s = '';
  arr.forEach((item) => {
    s += String.fromCharCode(item);
  });
  return Base64.btoa(s);
}

export function setSilentFlag(paramOptions = {}) {
  // 默认会监控xhr，为true时，当silentXhr为true时将不再监控
  setFlag(EVENTTYPES.XHR, !!paramOptions.silentXhr);
  setFlag(EVENTTYPES.FETCH, !!paramOptions.silentFetch);
  setFlag(EVENTTYPES.CLICK, !!paramOptions.silentClick);
  setFlag(EVENTTYPES.HISTORY, !!paramOptions.silentHistory);
  setFlag(EVENTTYPES.ERROR, !!paramOptions.silentError);
  setFlag(EVENTTYPES.HASHCHANGE, !!paramOptions.silentHashchange);
  setFlag(EVENTTYPES.UNHANDLEDREJECTION, !!paramOptions.silentUnhandledrejection);
  setFlag(EVENTTYPES.PERFORMANCE, !!paramOptions.silentPerformance);
  setFlag(EVENTTYPES.RECORDSCREEN, !paramOptions.silentRecordScreen);
}

// firstScreenPaint为首屏加载时间
let firstScreenPaint = 0;
// 页面是否渲染完成
let isOnLoaded = false;
let timer;
let observer;

// 定时器循环监听dom的变化，当document.readyState === 'complete'时，停止监听
function checkDOMChange(callback) {
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(() => {
    if (document.readyState === 'complete') {
      isOnLoaded = true;
    }
    if (isOnLoaded) {
      // 取消监听
      observer && observer.disconnect();
      // document.readyState === 'complete'时，计算首屏渲染时间
      firstScreenPaint = getRenderTime();
      entries = null;
      callback && callback(firstScreenPaint);
    } else {
      checkDOMChange(callback);
    }
  });
}
function getRenderTime() {
  let startTime = 0;
  entries.forEach((entry) => {
    if (entry.startTime > startTime) {
      startTime = entry.startTime;
    }
  });
  // performance.timing.navigationStart 页面的起始时间
  return startTime - performance.timing.navigationStart;
}
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
// dom 对象是否在屏幕内
function isInScreen(dom) {
  const rectInfo = dom.getBoundingClientRect();
  if (rectInfo.left < viewportWidth && rectInfo.top < viewportHeight) {
    return true;
  }
  return false;
}
let entries = [];

// 外部通过callback 拿到首屏加载时间
export function observeFirstScreenPaint(callback) {
  const ignoreDOMList = ['STYLE', 'SCRIPT', 'LINK'];
  observer = new MutationObserver((mutationList) => {
    checkDOMChange(callback);
    const entry = { children: [] };
    for (const mutation of mutationList) {
      if (mutation.addedNodes.length && isInScreen(mutation.target)) {
        for (const node of mutation.addedNodes) {
          // 忽略掉以上标签的变化
          if (node.nodeType === 1 && !ignoreDOMList.includes(node.tagName) && isInScreen(node)) {
            entry.children.push(node);
          }
        }
      }
    }

    if (entry.children.length) {
      entries.push(entry);
      entry.startTime = new Date().getTime();
    }
  });
  observer.observe(document, {
    childList: true, // 监听添加或删除子节点
    subtree: true, // 监听整个子树
    characterData: true, // 监听元素的文本是否变化
    attributes: true // 监听元素的属性是否变化
  });
}
