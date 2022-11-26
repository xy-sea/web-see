/* eslint-disable */

import { EVENTTYPES } from '../shared';
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
 * 将地址字符串转换成对象，例如
 * 输入：parseUrlToObj('https://github.com/clouDr-f2e/monitor/blob/master/docs/guide.md?token=123&name=11')
 * 输出：{
 *   "host": "github.com",
 *   "path": "/clouDr-f2e/monitor/blob/master/docs/guide.md",
 *   "protocol": "https",
 *   "relative": "/clouDr-f2e/monitor/blob/master/docs/guide.md?token=123&name=11"
 *  }
 *
 * @returns 返回一个对象
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
    relative: match[5] + query + fragment // everything minus origin
  };
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
}
