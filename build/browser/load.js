import { HandleEvents } from './handleEvents';
import { htmlElementAsString, Severity } from '../utils';
import { EVENTTYPES, BREADCRUMBTYPES } from '../shared';
import { breadcrumb } from '../core';
import { addReplaceHandler } from './replace';
export function setupReplace() {
  // 验证ok ✔
  addReplaceHandler({
    callback: (data) => {
      HandleEvents.handleHttp(data, BREADCRUMBTYPES.XHR);
    },
    type: EVENTTYPES.XHR
  });
  // 验证ok ✔
  addReplaceHandler({
    callback: (data) => {
      HandleEvents.handleHttp(data, BREADCRUMBTYPES.FETCH);
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
          type: BREADCRUMBTYPES.CLICK,
          category: breadcrumb.getCategory(BREADCRUMBTYPES.CLICK),
          data: htmlString,
          level: Severity.Info
        });
      }
    },
    type: EVENTTYPES.DOM
  });
  // 验证ok ✔
  addReplaceHandler({
    callback: (e) => {
      HandleEvents.handleHashchange(e);
    },
    type: EVENTTYPES.HASHCHANGE
  });
}
