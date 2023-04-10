import {
  _support,
  validateOption,
  isBrowserEnv,
  Queue,
  isEmpty,
  getLocationHref,
  generateUUID,
} from '@websee/utils';
import { SDK_VERSION, EVENTTYPES } from '@websee/common';
import { ReportData, InitOptions } from '@websee/types';
import { breadcrumb } from './breadcrumb';
import { options } from './options';

/**
 * 用来上报数据，包含图片打点上报、xhr请求
 */
export class TransportData {
  queue: Queue = new Queue(); // 消息队列
  apikey = ''; // 每个项目对应的唯一标识
  errorDsn = ''; // 监控上报接口的地址
  userId = ''; // 用户id
  uuid: string; // 每次页面加载的唯一标识
  beforeDataReport: any; // 上报数据前的hook
  getUserId: any; // 用户自定义获取userId的方法
  useImgUpload = false; // 是否使用图片打点上报
  constructor() {
    this.uuid = generateUUID(); // 每次页面加载的唯一标识
  }
  beacon(url: string, data: any): boolean {
    return navigator.sendBeacon(url, JSON.stringify(data));
  }
  imgRequest(data: ReportData, url: string): void {
    const requestFun = () => {
      const img = new Image();
      const spliceStr = url.indexOf('?') === -1 ? '?' : '&';
      img.src = `${url}${spliceStr}data=${encodeURIComponent(JSON.stringify(data))}`;
    };
    this.queue.addFn(requestFun);
  }

  async beforePost(this: any, data: ReportData): Promise<ReportData | boolean> {
    let transportData = this.getTransportData(data);
    // 配置了beforeDataReport
    if (typeof this.beforeDataReport === 'function') {
      transportData = this.beforeDataReport(transportData);
      if (!transportData) return false;
    }
    return transportData;
  }
  async xhrPost(data: ReportData, url: string): Promise<void> {
    const requestFun = () => {
      fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // .then(response => response.json());
      // .then((res) => console.log(res));
    };
    this.queue.addFn(requestFun);
  }
  // 获取用户信息
  getAuthInfo() {
    return {
      userId: this.userId || this.getAuthId() || '',
      sdkVersion: SDK_VERSION,
      apikey: this.apikey,
    };
  }
  getAuthId(): string | number {
    if (typeof this.getUserId === 'function') {
      const id = this.getUserId();
      if (typeof id === 'string' || typeof id === 'number') {
        return id;
      } else {
        console.error(`web-see userId: ${id} 期望 string 或 number 类型，但是传入 ${typeof id}`);
      }
    }
    return '';
  }
  // 添加公共信息
  // 这里不要添加时间戳，比如接口报错，发生的时间和上报时间不一致
  getTransportData(data: any): ReportData {
    const info = {
      ...data,
      ...this.getAuthInfo(), // 获取用户信息
      uuid: this.uuid,
      pageUrl: getLocationHref(),
      deviceInfo: _support.deviceInfo, // 获取设备信息
    };

    // 性能数据、录屏、白屏检测等不需要附带用户行为
    if (
      data.type != EVENTTYPES.PERFORMANCE &&
      data.type != EVENTTYPES.RECORDSCREEN &&
      data.type != EVENTTYPES.WHITESCREEN
    ) {
      info.breadcrumb = breadcrumb.getStack(); // 获取用户行为栈
    }
    return info;
  }
  // 判断请求是否为SDK配置的接口
  isSdkTransportUrl(targetUrl: string): boolean {
    let isSdkDsn = false;
    if (this.errorDsn && targetUrl.indexOf(this.errorDsn) !== -1) {
      isSdkDsn = true;
    }
    return isSdkDsn;
  }

  bindOptions(options: InitOptions): void {
    const { dsn, apikey, beforeDataReport, userId, getUserId, useImgUpload } = options;
    validateOption(apikey, 'apikey', 'string') && (this.apikey = apikey);
    validateOption(dsn, 'dsn', 'string') && (this.errorDsn = dsn);
    validateOption(userId, 'userId', 'string') && (this.userId = userId || '');
    validateOption(useImgUpload, 'useImgUpload', 'boolean') &&
      (this.useImgUpload = useImgUpload || false);
    validateOption(beforeDataReport, 'beforeDataReport', 'function') &&
      (this.beforeDataReport = beforeDataReport);
    validateOption(getUserId, 'getUserId', 'function') && (this.getUserId = getUserId);
  }
  // 上报数据
  async send(data: ReportData) {
    const dsn = this.errorDsn;
    if (isEmpty(dsn)) {
      console.error('web-see: dsn为空，没有传入监控错误上报的dsn地址，请在init中传入');
      return;
    }
    // 开启录屏
    if (_support.options.silentRecordScreen) {
      if (options.recordScreenTypeList.includes(data.type)) {
        // 修改hasError
        _support.hasError = true;
        data.recordScreenId = _support.recordScreenId;
      }
    }
    const result = (await this.beforePost(data)) as ReportData;
    if (isBrowserEnv && result) {
      // 优先使用sendBeacon 上报，若数据量大，再使用图片打点上报和fetch上报
      const value = this.beacon(dsn, result);
      if (!value) {
        return this.useImgUpload ? this.imgRequest(result, dsn) : this.xhrPost(result, dsn);
      }
    }
  }
}
const transportData = _support.transportData || (_support.transportData = new TransportData());
export { transportData };
