import { ERRORTYPES, globalVar } from '../shared';
import { getLocationHref, getTimestamp, Severity, fromHttpStatus, SpanStatus, interceptStr } from '../utils';
import { getRealPath } from './errorId';

// 处理接口的状态
export function httpTransform(data) {
  // message 接口失败的原因
  let message = '';
  const { elapsedTime, time, method, traceId, type, status } = data;
  const name = `${type}--${method}`;
  if (status === 0) {
    message = elapsedTime <= globalVar.crossOriginThreshold ? 'http请求失败，失败原因：跨域限制或域名不存在' : 'http请求失败，失败原因：超时';
  } else {
    message = fromHttpStatus(status);
  }
  message = message === SpanStatus.Ok ? message : `${message} ${getRealPath(data.url)}`;
  return {
    type: ERRORTYPES.FETCH_ERROR,
    url: getLocationHref(),
    time,
    elapsedTime,
    level: Severity.Low,
    message,
    name,
    request: {
      httpType: type,
      traceId,
      method,
      url: data.url,
      data: data.reqData || ''
    },
    response: {
      status,
      data: data.responseText
    }
  };
}
const resourceMap = {
  img: '图片',
  script: 'js脚本'
};
export function resourceTransform(target) {
  return {
    type: ERRORTYPES.RESOURCE_ERROR,
    url: getLocationHref(),
    message: '资源地址: ' + (interceptStr(target.src, 120) || interceptStr(target.href, 120)),
    level: Severity.Low,
    time: getTimestamp(),
    name: `${resourceMap[target.localName] || target.localName}加载失败`
  };
}
