import { fromHttpStatus, interceptStr, getTimestamp } from '../utils';
import { options } from './options';

// 处理接口的状态
export function httpTransform(data) {
  let message = '';
  const { elapsedTime, time, method, type, status } = data;
  const name = `${type}--${method}`;
  if (status === 0) {
    message =
      elapsedTime <= options.overTime * 1000
        ? 'http请求失败，失败原因：跨域限制或接口不存在'
        : 'http请求失败，失败原因：接口超时';
  } else {
    message = fromHttpStatus(status);
  }
  message = `${data.url}; ${message}`;
  return {
    url: data.url,
    time,
    elapsedTime,
    message,
    name,
    request: {
      httpType: type,
      method,
      data: data.reqData || '',
    },
    response: {
      status,
      // data: data.responseText
    },
  };
}
const resourceMap = {
  img: '图片',
  script: 'js脚本',
};
export function resourceTransform(target) {
  return {
    time: getTimestamp(),
    message: (interceptStr(target.src, 120) || interceptStr(target.href, 120)) + '; 资源加载失败',
    name: `${resourceMap[target.localName] || target.localName}`,
  };
}
