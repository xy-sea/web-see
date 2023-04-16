import { setFlag, _support } from './global';
import { InitOptions } from '@websee/types';
import { EVENTTYPES } from '@websee/common';

/**
 * 返回包含id、class、innerTextde字符串的标签
 * @param target html节点
 */
export function htmlElementAsString(target: HTMLElement): string {
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'body') {
    return '';
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
export function parseUrlToObj(url: string) {
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

export function setSilentFlag(paramOptions: InitOptions): void {
  setFlag(EVENTTYPES.XHR, !!paramOptions.silentXhr);
  setFlag(EVENTTYPES.FETCH, !!paramOptions.silentFetch);
  setFlag(EVENTTYPES.CLICK, !!paramOptions.silentClick);
  setFlag(EVENTTYPES.HISTORY, !!paramOptions.silentHistory);
  setFlag(EVENTTYPES.ERROR, !!paramOptions.silentError);
  setFlag(EVENTTYPES.HASHCHANGE, !!paramOptions.silentHashchange);
  setFlag(EVENTTYPES.UNHANDLEDREJECTION, !!paramOptions.silentUnhandledrejection);
  setFlag(EVENTTYPES.WHITESCREEN, !paramOptions.silentWhiteScreen);
}

// 对每一个错误详情，生成唯一的编码
export function getErrorUid(input: string): string {
  return window.btoa(encodeURIComponent(input));
}

export function hashMapExist(hash: string): boolean {
  const exist = _support.errorMap.has(hash);
  if (!exist) {
    _support.errorMap.set(hash, true);
  }
  return exist;
}
