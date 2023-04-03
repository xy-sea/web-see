import { fromHttpStatus, interceptStr, getTimestamp } from '../utils';
import { options } from './options';
import { HTTP_CODE, STATUS_CODE } from '../common';
import { HttpData, ResouceError, ResourceTarget } from '../types';

// 处理接口的状态
export function httpTransform(data: HttpData): HttpData {
  let message: any = '';
  const { elapsedTime, time, method, type, Status, response, requestData } = data;
  let status: STATUS_CODE;
  if (Status === 0) {
    status = STATUS_CODE.ERROR;
    message =
      elapsedTime <= options.overTime * 1000
        ? `请求失败，Status值为:${Status}`
        : '请求失败，接口超时';
  } else if ((Status as number) < HTTP_CODE.BAD_REQUEST) {
    status = STATUS_CODE.OK;
    if (options.handleHttpStatus && typeof options.handleHttpStatus == 'function') {
      if (options.handleHttpStatus(response)) {
        status = STATUS_CODE.OK;
      } else {
        status = STATUS_CODE.ERROR;
        message = '接口报错，详情见response';
      }
    }
  } else {
    status = STATUS_CODE.ERROR;
    message = fromHttpStatus(Status as number);
  }
  message = `${data.url}; ${message}`;
  return {
    url: data.url,
    time,
    status,
    elapsedTime,
    message,
    requestData: {
      httpType: type,
      method,
      data: requestData || '',
    },
    response: {
      Status,
      data: status == STATUS_CODE.ERROR ? response : null,
    },
  };
}
const resourceMap = {
  img: '图片',
  script: 'js脚本',
};
export function resourceTransform(target: ResourceTarget): ResouceError {
  return {
    time: getTimestamp(),
    message: (interceptStr(target.src, 120) || interceptStr(target.href, 120)) + '; 资源加载失败',
    name: `${resourceMap[target.localName] || target.localName}`,
  };
}
