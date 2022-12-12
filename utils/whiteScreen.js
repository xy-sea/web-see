import { STATUS_CODE } from '../common';
/**
 * 检测页面是否白屏
 * @param {function} callback - 回到函数获取检测结果
 * @param {boolean} skeletonProject - 页面是否有骨架屏
 * @param {array} whiteBoxElements - 容器列表，默认值为['html', 'body', '#app', '#root']
 */

export function openWhiteScreen(callback, { skeletonProject, whiteBoxElements }) {
  let _whiteLoopNum = 0;
  let _skeletonInitList = []; // 存储初次采样点
  let _skeletonNowList = []; // 存储当前采样点

  // 项目有骨架屏
  if (skeletonProject) {
    if (document.readyState != 'complete') {
      sampling();
    }
  } else {
    // 页面加载完毕
    if (document.readyState === 'complete') {
      sampling();
    } else {
      window.addEventListener('load', sampling);
    }
  }

  // 选中dom点的名称
  function getSelector(element) {
    if (element.id) {
      return '#' + element.id;
    } else if (element.className) {
      // div home => div.home
      return (
        '.' +
        element.className
          .split(' ')
          .filter(item => !!item)
          .join('.')
      );
    } else {
      return element.nodeName.toLowerCase();
    }
  }
  // 判断采样点是否为容器节点
  function isContainer(element) {
    let selector = getSelector(element);
    if (skeletonProject) {
      _whiteLoopNum ? _skeletonNowList.push(selector) : _skeletonInitList.push(selector);
    }
    return whiteBoxElements.indexOf(selector) != -1;
  }
  // 采样对比
  function sampling() {
    let emptyPoints = 0;
    for (let i = 1; i <= 9; i++) {
      let xElements = document.elementsFromPoint(
        (window.innerWidth * i) / 10,
        window.innerHeight / 2
      );
      let yElements = document.elementsFromPoint(
        window.innerWidth / 2,
        (window.innerHeight * i) / 10
      );
      if (isContainer(xElements[0])) emptyPoints++;
      // 中心点只计算一次
      if (i != 5) {
        if (isContainer(yElements[0])) emptyPoints++;
      }
    }
    // console.log('_skeletonInitList', _skeletonInitList);
    // console.log('_skeletonNowList', _skeletonNowList);

    // 页面正常渲染，停止轮训
    if (emptyPoints != 17) {
      if (skeletonProject) {
        // 第一次不比较
        if (!_whiteLoopNum) return openWhiteLoop();
        // 比较前后dom是否一致
        if (_skeletonNowList.join() == _skeletonInitList.join())
          return callback({
            status: STATUS_CODE.ERROR,
          });
      }
      if (window._loopTimer) {
        clearTimeout(window._loopTimer);
        window._loopTimer = null;
      }
    } else {
      // 开启轮训
      if (!window._loopTimer) {
        openWhiteLoop();
      }
    }
    // 17个点都是容器节点算作白屏
    callback({
      status: emptyPoints == 17 ? STATUS_CODE.ERROR : STATUS_CODE.OK,
    });
  }
  // 开启白屏轮训
  function openWhiteLoop() {
    if (window._loopTimer) return;
    window._loopTimer = setInterval(() => {
      if (skeletonProject) {
        _whiteLoopNum++;
        _skeletonNowList = [];
      }
      sampling();
    }, 1000);
  }
}
