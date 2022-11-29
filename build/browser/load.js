import { HandleEvents } from './handleEvents';
import { htmlElementAsString, getTimestamp } from '../utils';
import { EVENTTYPES, STATUS_CODE } from '../shared';
import { breadcrumb } from '../core';
import { addReplaceHandler } from './replace';
export function setupReplace() {
  // 验证ok ✔
  addReplaceHandler({
    callback: (data) => {
      HandleEvents.handleHttp(data, EVENTTYPES.XHR);
    },
    type: EVENTTYPES.XHR
  });
  // 验证ok ✔
  addReplaceHandler({
    callback: (data) => {
      HandleEvents.handleHttp(data, EVENTTYPES.FETCH);
    },
    type: EVENTTYPES.FETCH
  });
  addReplaceHandler({
    callback: (error) => {
      HandleEvents.handleError(error);
    },
    type: EVENTTYPES.ERROR
  });
  // 验证ok ✔
  addReplaceHandler({
    callback: (data) => {
      HandleEvents.handleHistory(data);
    },
    type: EVENTTYPES.HISTORY
  });
  // 验证ok ✔
  addReplaceHandler({
    callback: (data) => {
      HandleEvents.handleUnhandleRejection(data);
    },
    type: EVENTTYPES.UNHANDLEDREJECTION
  });
  // 验证ok ✔
  addReplaceHandler({
    callback: (data) => {
      // 获取html信息
      const htmlString = htmlElementAsString(data.data.activeElement);
      if (htmlString) {
        breadcrumb.push({
          type: EVENTTYPES.CLICK,
          status: STATUS_CODE.OK,
          category: breadcrumb.getCategory(EVENTTYPES.CLICK),
          data: htmlString,
          time: getTimestamp()
        });
      }
    },
    type: EVENTTYPES.CLICK
  });
  // 验证ok ✔
  addReplaceHandler({
    callback: (e) => {
      HandleEvents.handleHashchange(e);
    },
    type: EVENTTYPES.HASHCHANGE
  });
  // 获取性能指标
  addReplaceHandler({
    callback: () => {
      HandleEvents.handlePerformance();
    },
    type: EVENTTYPES.PERFORMANCE
  });
  // 录屏
  addReplaceHandler({
    callback: () => {
      HandleEvents.handleScreen();
    },
    type: EVENTTYPES.RECORDSCREEN
  });
}
