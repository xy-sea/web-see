import { ReportData, BreadcrumbData } from './base';

export interface InitOptions {
  dsn: string; // 上报的地址
  apikey: string; // 项目id
  userId?: string; // 用户id
  disabled?: boolean; // 是否禁用SDK
  silentXhr?: boolean; // 是否监控 xhr 请求
  silentFetch?: boolean; // 是否监控 fetch 请求
  silentClick?: boolean; // 是否监控 click 事件
  silentError?: boolean; // 是否监听 error 事件
  silentUnhandledrejection?: boolean; // 是否监控 unhandledrejection
  silentHashchange?: boolean; // 是否监听路由 hash 模式变化
  silentHistory?: boolean; // 是否监听路由 history模式变化
  silentPerformance?: boolean; // 是否获取页面性能指标
  silentRecordScreen?: boolean; // 是否开启录屏
  recordScreentime?: number; // 单次录屏时长
  recordScreenTypeList?: string[]; // 上报录屏的错误列表
  silentWhiteScreen?: boolean; // 是否开启白屏检测
  skeletonProject?: boolean; // 白屏检测的项目是否有骨架屏
  whiteBoxElements?: string[]; // 白屏检测的容器列表
  filterXhrUrlRegExp?: RegExp; // 过滤的接口请求正则
  useImgUpload?: boolean; // 是否使用图片打点上报
  throttleDelayTime?: number; // click点击事件的节流时长
  overTime?: number; // 接口超时时长
  maxBreadcrumbs?: number; //  用户行为存放的最大长度
  beforePushBreadcrumb?(data: BreadcrumbData): BreadcrumbData; // 添加到行为列表前的 hook
  beforeDataReport?(data: ReportData): Promise<ReportData | boolean>; // 数据上报前的 hook
  getUserId?: () => string | number; // 用户定义的
  handleHttpStatus?: (data: any) => boolean; // 处理接口返回的 response
  repeatCodeError?: boolean; // 是否去除重复的代码错误，重复的错误只上报一次
}

// 录屏插件参数
export interface RecordScreenOption {
  recordScreenTypeList: string[];
  recordScreentime: number;
}
