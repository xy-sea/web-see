import { validateOption, _support, setSilentFlag } from '../utils';
import { EVENTTYPES } from '../common';
import { breadcrumb } from './breadcrumb';
import { transportData } from './transportData';
export class Options {
  constructor() {
    this.dsn = ''; // 监控上报接口的地址
    this.throttleDelayTime = 0; // click事件的节流时长
    this.overTime = 10; // 接口超时时长

    this.silentRecordScreen = false; // 是否开启录屏
    this.recordScreentime = 10; // 录屏时长
    this.recordScreenTypeList = [
      EVENTTYPES.ERROR,
      EVENTTYPES.UNHANDLEDREJECTION,
      EVENTTYPES.RESOURCE,
      EVENTTYPES.FETCH,
      EVENTTYPES.XHR,
    ]; // 录屏事件集合

    this.silentWhiteScreen = false; // 是否开启白屏检测
    this.skeletonProject = false; // 项目是否有骨架屏
    this.whiteBoxElements = ['html', 'body', '#app', '#root']; // 白屏检测的父容器列表
  }
  bindOptions(options = {}) {
    const {
      dsn,
      filterXhrUrlRegExp,
      throttleDelayTime,
      silentRecordScreen,
      overTime,
      recordScreenTypeList,
      recordScreentime,
      silentWhiteScreen,
      whiteBoxElements,
      skeletonProject,
    } = options;
    validateOption(dsn, 'dsn', 'string') && (this.dsn = dsn);
    validateOption(throttleDelayTime, 'throttleDelayTime', 'number') &&
      (this.throttleDelayTime = throttleDelayTime);
    validateOption(overTime, 'overTime', 'number') && (this.overTime = overTime);
    validateOption(recordScreentime, 'recordScreentime', 'number') &&
      (this.recordScreentime = recordScreentime);
    validateOption(silentRecordScreen, 'silentRecordScreen', 'boolean') &&
      (this.silentRecordScreen = silentRecordScreen);
    validateOption(recordScreenTypeList, 'recordScreenTypeList', 'array') &&
      (this.recordScreenTypeList = recordScreenTypeList);
    validateOption(filterXhrUrlRegExp, 'filterXhrUrlRegExp', 'regexp') &&
      (this.filterXhrUrlRegExp = filterXhrUrlRegExp);
    validateOption(silentWhiteScreen, 'silentWhiteScreen', 'boolean') &&
      (this.silentWhiteScreen = silentWhiteScreen);
    validateOption(skeletonProject, 'skeletonProject', 'boolean') &&
      (this.skeletonProject = skeletonProject);
    validateOption(whiteBoxElements, 'whiteBoxElements', 'array') &&
      (this.whiteBoxElements = whiteBoxElements);
  }
}
const options = _support.options || (_support.options = new Options());

export function initOptions(paramOptions = {}) {
  // setSilentFlag 给全局添加已设置的标识，防止重复设置
  setSilentFlag(paramOptions);
  // 设置用户行为的配置项
  breadcrumb.bindOptions(paramOptions);
  // transportData 配置上报的信息
  transportData.bindOptions(paramOptions);
  // 绑定其他配置项
  options.bindOptions(paramOptions);
}
export { options };
