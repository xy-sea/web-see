import { getFlag, getFunctionName, nativeTryCatch, setFlag } from '../utils';
const handlers = {};

// subscribeEvent 设置标识，并将处理的方法放置到handlers中，{ xhr: [ funtion ] }
export function subscribeEvent(handler) {
  if (!handler || getFlag(handler.type)) return false;
  setFlag(handler.type, true);
  handlers[handler.type] = handlers[handler.type] || [];
  handlers[handler.type].push(handler.callback);
  return true;
}
export function triggerHandlers(type, data) {
  if (!type || !handlers[type]) return;
  // 获取对应事件的回调函数并执行，回调函数为addReplaceHandler事件中定义的事件
  handlers[type].forEach((callback) => {
    nativeTryCatch(
      () => {
        callback(data);
      },
      (e) => {
        console.error(`web-see 重写事件triggerHandlers的回调函数发生错误\nType:${type}\nName: ${getFunctionName(callback)}\nError: ${e}`);
      }
    );
  });
}
