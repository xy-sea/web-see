import { validateOption, _support, setSilentFlag, generateUUID } from '../utils';
import { EVENTTYPES } from '../common';
import { breadcrumb } from './breadcrumb';
import { transportData } from './reportData';
import { InitOptions } from '../types';

export class Options {
  dsn = ''; // 监控上报接口的地址
  throttleDelayTime = 0; // click事件的节流时长
  overTime = 10; // 接口超时时长
  silentRecordScreen = false; // 是否开启录屏
  recordScreentime = 10; // 默认录屏时长
  recordScreenTypeList: string[]; // 上报录屏的错误列表
  whiteBoxElements: string[]; // // 白屏检测的容器列表
  silentWhiteScreen = false; // 是否开启白屏检测
  skeletonProject = false; // 项目是否有骨架屏
  filterXhrUrlRegExp: RegExp; // // 过滤的接口请求正则
  constructor() {
    this.recordScreenTypeList = [
      // 录屏事件集合
      EVENTTYPES.ERROR,
      EVENTTYPES.UNHANDLEDREJECTION,
      EVENTTYPES.RESOURCE,
      EVENTTYPES.FETCH,
      EVENTTYPES.XHR,
    ];
    this.whiteBoxElements = ['html', 'body', '#app', '#root']; // 白屏检测的父容器列表
  }
  bindOptions(options: InitOptions): void {
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
    if (validateOption(silentRecordScreen, 'silentRecordScreen', 'boolean')) {
      this.silentRecordScreen = silentRecordScreen;
      _support.recordScreenId = generateUUID(); // 添加初始的recordScreenId
    }
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

export function handleOptions(paramOptions: InitOptions): void {
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
