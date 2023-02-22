import { EVENTTYPES, STATUS_CODE, BREADCRUMBTYPES } from '../common';
import { TransportData } from '../core';

export interface IAnyObject {
  [key: string]: any;
}

export type voidFun = () => void;

/**
 * http请求
 */
export interface HttpData {
  type?: string;
  method?: string;
  time?: number;
  url?: string; // 接口地址
  elapsedTime?: number; // 接口时长
  message?: string; // 接口信息
  status?: number | string; // 接口状态编码
  requestData?: {
    httpType: string; // 请求类型 xhr fetch
    method: string; // 请求方式
    data: any;
  };
  response?: {
    status: number | string; // 接口状态
  };
}

/**
 * 资源加载失败
 */
export interface ResouceError {
  time?: number;
  message?: string; // 加载失败的信息
  name?: string; // 脚本类型：js脚本
}

/**
 * 长任务列表
 */
export interface LongTask {
  time?: number;
  name?: string; // longTask
  longTask?: any; // 长任务详情
}

/**
 * 性能指标
 */
export interface PerformanceData {
  name?: string; // FCP
  value?: number; // 数值
  rating?: string; // 等级
}

/**
 * 内存信息
 */
export interface MemoryData {
  name?: string; // memory
  memory?: {
    jsHeapSizeLimit: number;
    totalJSHeapSize: number;
    usedJSHeapSize: number;
  };
}

/**
 * 代码错误
 */
export interface CodeError {
  column?: number;
  line?: number;
  message?: string;
  fileName?: string; // 发出错误的文件
}

/**
 * 用户行为
 */
export interface Behavior {
  type: EVENTTYPES;
  category: any;
  status: STATUS_CODE;
  time: number;
  data?: HttpData | CodeError | RouteHistory;
  message?: string;
  name?: string;
}

/**
 * 录屏信息
 */
export interface RecordScreen {
  recordScreenId: string; // 录屏id
  events: string; // 录屏内容
}

/**
 * 上报的数据接口
 */
export interface ReportData
  extends HttpData,
    ResouceError,
    LongTask,
    PerformanceData,
    MemoryData,
    CodeError,
    RecordScreen {
  type: string; // 事件类型
  pageUrl: string; // 页面地址
  time: number; // 发生时间
  uuid: string; // 页面唯一标识
  apikey: string; // 项目id
  status: string; // 事件状态
  sdkVersion: string; // 版本信息
  breadcrumb?: BreadcrumbData[]; // 用户行为

  // 设备信息
  deviceInfo: {
    browserVersion: string | number; // 版本号
    browser: string; // Chrome
    osVersion: string | number; // 电脑系统 10
    os: string; // 设备系统
    ua: string; // 设备详情
    device: string; // 设备种类描述
    device_type: string; // 设备种类，如pc
  };
}

export interface Callback {
  (...args: any[]): any;
}

export interface ReplaceHandler {
  type: EVENTTYPES;
  callback: Callback;
}

export interface ResourceTarget {
  src?: string;
  href?: string;
  localName?: string;
}

// 通用信息
export interface AuthInfo {
  apikey: string;
  sdkVersion: string;
  userId?: string;
}

export interface Global {
  __webSee__?: any;
  chrome?: any;
  history?: any;
}

export interface BreadcrumbData {
  type: EVENTTYPES; // 事件类型
  category: BREADCRUMBTYPES; // 用户行为类型
  status: STATUS_CODE; // 行为状态
  time: number; // 发生时间
  data: any;
}

export interface ErrorTarget {
  target?: {
    localName?: string;
  };
  error?: any;
  message?: string;
}

export interface RouteHistory {
  from: string;
  to: string;
}

// export interface Global {
//   hasError: false, // 某段时间代码是否报错
//   events: [], // 存储录屏的信息
//   recordScreenId: string, // 本次录屏的id
//   replaceFlag: {},
//   deviceInfo: {},
//   transportData: TransportData
// }
