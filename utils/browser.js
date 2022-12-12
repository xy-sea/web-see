import pako from 'pako';
import { Base64 } from 'js-base64';
import { EVENTTYPES } from '../common';
import { setFlag } from './global';

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
    relative: match[5] + query + fragment,
  };
}

// 压缩
export function zip(data) {
  if (!data) return data;
  // 判断数据是否需要转为JSON
  const dataJson =
    typeof data !== 'string' && typeof data !== 'number' ? JSON.stringify(data) : data;
  // 使用Base64.encode处理字符编码，兼容中文
  const str = Base64.encode(dataJson);
  let binaryString = pako.gzip(str);
  let arr = Array.from(binaryString);
  let s = '';
  arr.forEach(item => {
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
  setFlag(EVENTTYPES.WHITESCREEN, !paramOptions.silentWhiteScreen);
}
