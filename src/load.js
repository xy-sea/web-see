import { HandleEvents } from './handleEvents';
import { htmlElementAsString, getTimestamp } from '../utils';
import { EVENTTYPES, STATUS_CODE } from '../common';
import { breadcrumb } from '../core';
import { addReplaceHandler } from './replace';
export function setupReplace() {
  // 白屏检测
  addReplaceHandler({
    callback: () => {
      HandleEvents.handleWhiteScreen();
    },
    type: EVENTTYPES.WHITESCREEN,
  });
  // 重写XMLHttpRequest
  addReplaceHandler({
    callback: data => {
      HandleEvents.handleHttp(data, EVENTTYPES.XHR);
    },
    type: EVENTTYPES.XHR,
  });
  // 重写fetch
  addReplaceHandler({
    callback: data => {
      HandleEvents.handleHttp(data, EVENTTYPES.FETCH);
    },
    type: EVENTTYPES.FETCH,
  });
  // 捕获错误
  addReplaceHandler({
    callback: error => {
      HandleEvents.handleError(error);
    },
    type: EVENTTYPES.ERROR,
  });
  // 监听history模式路由的变化
  addReplaceHandler({
    callback: data => {
      HandleEvents.handleHistory(data);
    },
    type: EVENTTYPES.HISTORY,
  });
  // 添加handleUnhandleRejection事件
  addReplaceHandler({
    callback: data => {
      HandleEvents.handleUnhandleRejection(data);
    },
    type: EVENTTYPES.UNHANDLEDREJECTION,
  });
  // 监听click事件
  addReplaceHandler({
    callback: data => {
      // 获取html信息
      const htmlString = htmlElementAsString(data.data.activeElement);
      if (htmlString) {
        breadcrumb.push({
          type: EVENTTYPES.CLICK,
          status: STATUS_CODE.OK,
          category: breadcrumb.getCategory(EVENTTYPES.CLICK),
          data: htmlString,
          time: getTimestamp(),
        });
      }
    },
    type: EVENTTYPES.CLICK,
  });
  // 监听hashchange
  addReplaceHandler({
    callback: e => {
      HandleEvents.handleHashchange(e);
    },
    type: EVENTTYPES.HASHCHANGE,
  });
  // 获取性能指标
  addReplaceHandler({
    callback: () => {
      HandleEvents.handlePerformance();
    },
    type: EVENTTYPES.PERFORMANCE,
  });
  // 前端录屏
  addReplaceHandler({
    callback: () => {
      HandleEvents.handleScreen();
    },
    type: EVENTTYPES.RECORDSCREEN,
  });
}
