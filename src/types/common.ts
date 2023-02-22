import { EVENTTYPES, STATUS_CODE, HTTPTYPE, BREADCRUMBTYPES } from '../common';
export interface IAnyObject {
  [key: string]: any;
}

export type voidFun = () => void;

/**
 * 处理的http数据
 */
export interface HttpData {
  url: string;
  time: number;
  method: string;
  type: HTTPTYPE;
  status: number;
  elapsedTime: number;
  message: string;
  request?: any;
  response?: any;
}

/**
 * 上报的用户行为类型
 */
export interface BehaviorHttpType {
  time: number;
  url: string; // 接口地址
  message: string; // 接口信息
  method: string; // 接口类型
  elapsedTime?: number; // 接口时长
  request?: any;
  response?: any;
}

export interface BehaviorClickType {
  data: string; // "<button class='el-button el-button--warning el-button--mini'>按钮</button>"
}

export interface BehaviorCodeErrorType {
  message?: string;
  column?: number;
  line?: number;
  fileName?: string;
}

/**
 * 用户行为
 */
export interface Behavior {
  type: EVENTTYPES;
  category: any;
  status: STATUS_CODE;
  time: number;
  data?: BehaviorHttpType | BehaviorClickType | BehaviorCodeErrorType | RouteHistory;
  message?: string;
  name?: string;
}

/**
 * 上报的数据接口
 */
export interface ReportData {
  type: string; // 数据类型
  pageUrl: string; // 页面地址
  time: number; // 发生时间
  uuid: string; // 页面唯一标识
  breadcrumb?: BreadcrumbData[]; // 用户行为
  deviceInfo: {
    // 设备信息
    browser_version: string | number; // 社保版本号
    browser: string; // Chrome
    os_version: string | number; // 电脑系统 10
    os: string; // 设备系统
    ua: string; // 设备详情
    device: string; // 设备种类描述
    device_type: string; // 设备种类，如pc
  };

  // 录屏信息
  recordScreenId?: string;

  // 接口数据
  url: string; // 接口地址
  method: string; // 请求方式
  status: number; // 接口状态
  elapsedTime: number; // 接口时长
  message: string; // 接口信息
  request?: any; // 请求信息
  response?: any; // 返回信息
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
  sdkName: string;
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
