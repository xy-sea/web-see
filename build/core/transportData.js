import { _support, validateOption, isBrowserEnv, variableTypeDetection, Queue, isEmpty } from '../utils';
import { createErrorId } from './errorId';
import { SDK_NAME, SDK_VERSION } from '../shared';
import { breadcrumb } from './breadcrumb';
import { EMethods, isReportDataType } from '../types';
/**
 * 用来传输数据类，包含img标签、xhr请求
 * 功能：支持img请求和xhr请求、可以断点续存（保存在localstorage），
 * 待开发：目前不需要断点续存，因为接口不是很多，只有错误时才触发，如果接口太多可以考虑合并接口、
 *
 * ../class Transport
 */
export class TransportData {
  beforeDataReport = null;
  backTrackerId = null;
  configReportXhr = null;
  configReportUrl = null;
  configReportWxRequest = null;
  useImgUpload = false;
  apikey = '';
  trackKey = '';
  errorDsn = ''; // 监控上报接口的地址
  trackDsn = ''; // 埋点上报接口的地址
  constructor() {
    this.queue = new Queue();
  }
  imgRequest(data, url) {
    const requestFun = () => {
      let img = new Image();
      const spliceStr = url.indexOf('?') === -1 ? '?' : '&';
      img.src = `${url}${spliceStr}data=${encodeURIComponent(JSON.stringify(data))}`;
      img = null;
    };
    this.queue.addFn(requestFun);
  }
  getRecord() {
    const recordData = _support.record;
    if (recordData && variableTypeDetection.isArray(recordData) && recordData.length > 2) {
      return recordData;
    }
    return [];
  }
  getDeviceInfo() {
    return _support.deviceInfo;
  }
  async beforePost(data) {
    if (isReportDataType(data)) {
      const errorId = createErrorId(data, this.apikey);
      if (!errorId) return false;
      data.errorId = errorId;
    }
    let transportData = this.getTransportData(data);
    // 如果配置了beforeDataReport方法
    if (typeof this.beforeDataReport === 'function') {
      transportData = await this.beforeDataReport(transportData);
      if (!transportData) return false;
    }
    return transportData;
  }
  async xhrPost(data, url) {
    const requestFun = () => {
      const xhr = new XMLHttpRequest();
      xhr.open(EMethods.Post, url);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.withCredentials = true;
      if (typeof this.configReportXhr === 'function') {
        this.configReportXhr(xhr, data);
      }
      xhr.send(JSON.stringify(data));
    };
    this.queue.addFn(requestFun);
  }
  // 获取用户信息
  getAuthInfo() {
    const trackerId = this.getTrackerId();
    const result = {
      trackerId: String(trackerId),
      sdkVersion: SDK_VERSION,
      sdkName: SDK_NAME
    };
    this.apikey && (result.apikey = this.apikey);
    this.trackKey && (result.trackKey = this.trackKey);
    return result;
  }
  getApikey() {
    return this.apikey;
  }
  getTrackKey() {
    return this.trackKey;
  }
  // trackerId表示用户唯一键（可以理解成userId），可以用uuid生成或用直接用userId
  getTrackerId() {
    if (typeof this.backTrackerId === 'function') {
      const trackerId = this.backTrackerId();
      if (typeof trackerId === 'string' || typeof trackerId === 'number') {
        return trackerId;
      } else {
        console.error(`trackerId:${trackerId} 期望 string 或 number 类型，但是传入 ${typeof trackerId}`);
      }
    }
    return '';
  }
  // 添加公共信息
  getTransportData(data) {
    return {
      authInfo: this.getAuthInfo(), // 获取用户信息
      breadcrumb: breadcrumb.getStack(), // 获取用户行为栈
      data,
      record: this.getRecord(), // 获取recordData
      deviceInfo: this.getDeviceInfo() // 获取设备信息
    };
  }
  isSdkTransportUrl(targetUrl) {
    let isSdkDsn = false;
    if (this.errorDsn && targetUrl.indexOf(this.errorDsn) !== -1) {
      isSdkDsn = true;
    }
    if (this.trackDsn && targetUrl.indexOf(this.trackDsn) !== -1) {
      isSdkDsn = true;
    }
    return isSdkDsn;
  }

  bindOptions(options = {}) {
    const { dsn, beforeDataReport, apikey, configReportXhr, backTrackerId, trackDsn, trackKey, configReportUrl, useImgUpload, configReportWxRequest } = options;
    validateOption(apikey, 'apikey', 'string') && (this.apikey = apikey);
    validateOption(trackKey, 'trackKey', 'string') && (this.trackKey = trackKey);
    validateOption(dsn, 'dsn', 'string') && (this.errorDsn = dsn);
    validateOption(trackDsn, 'trackDsn', 'string') && (this.trackDsn = trackDsn);
    validateOption(useImgUpload, 'useImgUpload', 'boolean') && (this.useImgUpload = useImgUpload);
    validateOption(beforeDataReport, 'beforeDataReport', 'function') && (this.beforeDataReport = beforeDataReport);
    validateOption(configReportXhr, 'configReportXhr', 'function') && (this.configReportXhr = configReportXhr);
    validateOption(backTrackerId, 'backTrackerId', 'function') && (this.backTrackerId = backTrackerId);
    validateOption(configReportUrl, 'configReportUrl', 'function') && (this.configReportUrl = configReportUrl);
    validateOption(configReportWxRequest, 'configReportWxRequest', 'function') && (this.configReportWxRequest = configReportWxRequest);
  }
  /**
   * 监控错误上报的请求函数
   * @param data 错误上报数据格式
   * @returns
   */
  async send(data) {
    let dsn = '';
    if (isReportDataType(data)) {
      dsn = this.errorDsn;
      if (isEmpty(dsn)) {
        console.error('dsn为空，没有传入监控错误上报的dsn地址，请在init中传入');
        return;
      }
    } else {
      dsn = this.trackDsn;
      if (isEmpty(dsn)) {
        console.error('trackDsn为空，没有传入埋点上报的dsn地址，请在init中传入');
        return;
      }
    }
    const result = await this.beforePost(data);

    console.log('result', result);

    if (!result) return;
    // 如果配置了configReportUrl 钩子函数
    if (typeof this.configReportUrl === 'function') {
      dsn = this.configReportUrl(result, dsn);
      if (!dsn) return;
    }

    if (isBrowserEnv) {
      return this.useImgUpload ? this.imgRequest(result, dsn) : this.xhrPost(result, dsn);
    }
  }
}
const transportData = _support.transportData || (_support.transportData = new TransportData());
export { transportData };
