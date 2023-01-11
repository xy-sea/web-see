import {
  _global,
  on,
  getTimestamp,
  replaceAop,
  throttle,
  getLocationHref,
  isExistProperty,
  variableTypeDetection,
  supportsHistory,
} from '../utils';
import { transportData, options, triggerHandlers, subscribeEvent } from '../core';
import { EVENTTYPES, HTTPTYPE, EMethods } from '../common';

// 判断当前接口是否为需要过滤掉的接口
function isFilterHttpUrl(url) {
  return options.filterXhrUrlRegExp && options.filterXhrUrlRegExp.test(url);
}
function replace(type) {
  switch (type) {
    case EVENTTYPES.WHITESCREEN:
      whiteScreen();
      break;
    case EVENTTYPES.XHR:
      xhrReplace();
      break;
    case EVENTTYPES.FETCH:
      fetchReplace();
      break;
    case EVENTTYPES.ERROR:
      listenError();
      break;
    case EVENTTYPES.HISTORY:
      historyReplace();
      break;
    case EVENTTYPES.UNHANDLEDREJECTION:
      unhandledrejectionReplace();
      break;
    case EVENTTYPES.CLICK:
      domReplace();
      break;
    case EVENTTYPES.HASHCHANGE:
      listenHashchange();
      break;
    case EVENTTYPES.PERFORMANCE:
      listenPerformance();
      break;
    case EVENTTYPES.RECORDSCREEN:
      recordScreen();
      break;
    default:
      break;
  }
}
export function addReplaceHandler(handler) {
  if (!subscribeEvent(handler)) return;
  replace(handler.type);
}
function xhrReplace() {
  if (!('XMLHttpRequest' in _global)) {
    return;
  }
  const originalXhrProto = XMLHttpRequest.prototype;
  replaceAop(originalXhrProto, 'open', originalOpen => {
    return function (...args) {
      this.websee_xhr = {
        method: variableTypeDetection.isString(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1],
        sTime: getTimestamp(),
        type: HTTPTYPE.XHR,
      };
      originalOpen.apply(this, args);
    };
  });
  replaceAop(originalXhrProto, 'send', originalSend => {
    return function (...args) {
      const { method, url } = this.websee_xhr;
      // 监听loadend事件，接口成功或失败都会执行
      on(this, 'loadend', function () {
        // isSdkTransportUrl 判断当前接口是否为上报的接口
        // isFilterHttpUrl 判断当前接口是否为需要过滤掉的接口
        if (
          (method === EMethods.Post && transportData.isSdkTransportUrl(url)) ||
          isFilterHttpUrl(url)
        )
          return;
        // const { responseType, response, status } = this;
        const { status } = this;
        this.websee_xhr.reqData = args[0];
        const eTime = getTimestamp();
        // 设置该接口的time，用户用户行为按时间排序
        this.websee_xhr.time = this.websee_xhr.sTime;
        this.websee_xhr.status = status;
        // if (['', 'json', 'text'].indexOf(responseType) !== -1) {
        //   this.websee_xhr.responseText =
        //     typeof response === 'object' ? JSON.stringify(response) : response;
        // }
        // 接口的执行时长
        this.websee_xhr.elapsedTime = eTime - this.websee_xhr.sTime;
        // 执行之前注册的xhr回调函数
        triggerHandlers(EVENTTYPES.XHR, this.websee_xhr);
      });
      originalSend.apply(this, args);
    };
  });
}
function fetchReplace() {
  if (!('fetch' in _global)) {
    return;
  }
  replaceAop(_global, EVENTTYPES.FETCH, originalFetch => {
    return function (url, config = {}) {
      const sTime = getTimestamp();
      const method = (config && config.method) || 'GET';
      let handlerData = {
        type: HTTPTYPE.FETCH,
        method,
        reqData: config && config.body,
        url,
      };
      // 获取配置的headers
      const headers = new Headers(config.headers || {});
      Object.assign(headers, {
        setRequestHeader: headers.set,
      });
      config = Object.assign(Object.assign({}, config), { headers });
      return originalFetch.apply(_global, [url, config]).then(
        res => {
          // 克隆一份，防止被标记已消费
          const tempRes = res.clone();
          const eTime = getTimestamp();
          handlerData = Object.assign(Object.assign({}, handlerData), {
            elapsedTime: eTime - sTime,
            status: tempRes.status,
            time: sTime,
          });
          // tempRes.text().then(data => {
          tempRes.text().then(() => {
            // 同理，进接口进行过滤
            if (
              (method === EMethods.Post && transportData.isSdkTransportUrl(url)) ||
              isFilterHttpUrl(url)
            )
              return;
            // 接口返回的数据量可能很大，舍弃保留返回信息
            // handlerData.responseText = tempRes.status > HTTP_CODE.UNAUTHORIZED && data;
            triggerHandlers(EVENTTYPES.FETCH, handlerData);
          });
          return res;
        },
        // 接口报错
        err => {
          const eTime = getTimestamp();
          if (
            (method === EMethods.Post && transportData.isSdkTransportUrl(url)) ||
            isFilterHttpUrl(url)
          )
            return;
          handlerData = Object.assign(Object.assign({}, handlerData), {
            elapsedTime: eTime - sTime,
            status: 0,
            time: sTime,
          });
          triggerHandlers(EVENTTYPES.FETCH, handlerData);
          throw err;
        }
      );
    };
  });
}
function listenHashchange() {
  // 通过onpopstate事件，来监听hash模式下路由的变化
  if (isExistProperty(_global, 'onhashchange')) {
    on(_global, EVENTTYPES.HASHCHANGE, function (e) {
      triggerHandlers(EVENTTYPES.HASHCHANGE, e);
    });
  }
}

function listenError() {
  on(
    _global,
    'error',
    function (e) {
      console.log(e);
      triggerHandlers(EVENTTYPES.ERROR, e);
    },
    true
  );
}

// last time route
let lastHref;
lastHref = getLocationHref();
function historyReplace() {
  // 是否支持history
  if (!supportsHistory()) return;
  const oldOnpopstate = _global.onpopstate;
  // 添加 onpopstate事件
  _global.onpopstate = function (...args) {
    const to = getLocationHref();
    const from = lastHref;
    lastHref = to;
    triggerHandlers(EVENTTYPES.HISTORY, {
      from,
      to,
    });
    oldOnpopstate && oldOnpopstate.apply(this, args);
  };
  function historyReplaceFn(originalHistoryFn) {
    return function (...args) {
      const url = args.length > 2 ? args[2] : undefined;
      if (url) {
        const from = lastHref;
        const to = String(url);
        lastHref = to;
        triggerHandlers(EVENTTYPES.HISTORY, {
          from,
          to,
        });
      }
      return originalHistoryFn.apply(this, args);
    };
  }
  // 重写pushState、replaceState事件
  replaceAop(_global.history, 'pushState', historyReplaceFn);
  replaceAop(_global.history, 'replaceState', historyReplaceFn);
}
function unhandledrejectionReplace() {
  on(_global, EVENTTYPES.UNHANDLEDREJECTION, function (ev) {
    // ev.preventDefault() 阻止默认行为后，控制台就不会再报红色错误
    triggerHandlers(EVENTTYPES.UNHANDLEDREJECTION, ev);
  });
}
function domReplace() {
  if (!('document' in _global)) return;
  // 节流，默认0s
  const clickThrottle = throttle(triggerHandlers, options.throttleDelayTime);
  on(
    _global.document,
    'click',
    function () {
      clickThrottle(EVENTTYPES.CLICK, {
        category: 'click',
        data: this,
      });
    },
    true
  );
}
function listenPerformance() {
  triggerHandlers(EVENTTYPES.PERFORMANCE);
}

function recordScreen() {
  triggerHandlers(EVENTTYPES.RECORDSCREEN);
}
function whiteScreen() {
  triggerHandlers(EVENTTYPES.WHITESCREEN);
}
