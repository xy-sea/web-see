import { EVENTTYPES, STATUS_CODE, BREADCRUMBTYPES } from '@websee/common';

type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
/**
 * http请求
 */
interface HttpData {
    type?: string;
    method?: string;
    time: number;
    url: string;
    elapsedTime: number;
    message: string;
    Status?: number;
    status?: string;
    requestData?: {
        httpType: string;
        method: string;
        data: any;
    };
    response?: {
        Status: number;
        data?: any;
    };
}
/**
 * 资源加载失败
 */
interface ResouceError {
    time: number;
    message: string;
    name: string;
}
/**
 * 长任务列表
 */
interface LongTask {
    time: number;
    name: string;
    longTask: any;
}
/**
 * 性能指标
 */
interface PerformanceData {
    name: string;
    value: number;
    rating: string;
}
/**
 * 内存信息
 */
interface MemoryData {
    name: string;
    memory: {
        jsHeapSizeLimit: number;
        totalJSHeapSize: number;
        usedJSHeapSize: number;
    };
}
/**
 * 代码错误
 */
interface CodeError {
    column: number;
    line: number;
    message: string;
    fileName: string;
}
/**
 * 用户行为
 */
interface Behavior {
    type: EVENTTYPES;
    category: any;
    status: STATUS_CODE;
    time: number;
    data: XOR<HttpData, XOR<CodeError, RouteHistory>>;
    message: string;
    name?: string;
}
/**
 * 录屏信息
 */
interface RecordScreen {
    recordScreenId: string;
    events: string;
}
/**
 * 上报的数据接口
 */
interface ReportData extends HttpData, ResouceError, LongTask, PerformanceData, MemoryData, CodeError, RecordScreen {
    type: string;
    pageUrl: string;
    time: number;
    uuid: string;
    apikey: string;
    status: string;
    sdkVersion: string;
    breadcrumb?: BreadcrumbData[];
    deviceInfo: {
        browserVersion: string | number;
        browser: string;
        osVersion: string | number;
        os: string;
        ua: string;
        device: string;
        device_type: string;
    };
}
interface Callback {
    (...args: any[]): any;
}
interface IAnyObject {
    [key: string]: any;
}
type voidFun = () => void;
interface ReplaceHandler {
    type: EVENTTYPES;
    callback: Callback;
}
interface ResourceTarget {
    src?: string;
    href?: string;
    localName?: string;
}
interface AuthInfo {
    apikey: string;
    sdkVersion: string;
    userId?: string;
}
interface BreadcrumbData {
    type: EVENTTYPES;
    category: BREADCRUMBTYPES;
    status: STATUS_CODE;
    time: number;
    data: any;
}
interface ErrorTarget {
    target?: {
        localName?: string;
    };
    error?: any;
    message?: string;
}
interface RouteHistory {
    from: string;
    to: string;
}
interface WebSee {
    hasError: false;
    events: string[];
    recordScreenId: string;
    _loopTimer: number;
    transportData: any;
    options: any;
    replaceFlag: {
        [key: string]: any;
    };
    deviceInfo: {
        [key: string]: any;
    };
}

interface InitOptions {
    dsn: string;
    apikey: string;
    userId?: string;
    disabled?: boolean;
    silentXhr?: boolean;
    silentFetch?: boolean;
    silentClick?: boolean;
    silentError?: boolean;
    silentUnhandledrejection?: boolean;
    silentHashchange?: boolean;
    silentHistory?: boolean;
    silentPerformance?: boolean;
    silentRecordScreen?: boolean;
    recordScreentime?: number;
    recordScreenTypeList: string[];
    silentWhiteScreen?: boolean;
    skeletonProject?: boolean;
    whiteBoxElements?: string[];
    filterXhrUrlRegExp?: RegExp;
    useImgUpload?: boolean;
    throttleDelayTime?: number;
    overTime?: number;
    maxBreadcrumbs?: number;
    beforePushBreadcrumb?(data: BreadcrumbData): BreadcrumbData;
    beforeDataReport?(data: ReportData): Promise<ReportData | boolean>;
    getUserId?: () => void;
    handleHttpStatus?: () => boolean;
    repeatCodeError?: boolean;
}

interface VueInstance {
    config: VueConfiguration;
    mixin(hooks: {
        [key: string]: () => void;
    }): void;
    util: {
        warn(...input: any): void;
    };
    version: string;
}
interface VueConfiguration {
    silent: boolean;
    optionMergeStrategies: {
        [key: string]: any;
    };
    errorHandler(err: Error, vm: ViewModel, info: string): void;
    warnHandler(msg: string, vm: ViewModel, trace: string): void;
    ignoreElements: (string | RegExp)[];
    keyCodes: {
        [key: string]: number | Array<number>;
    };
    productionTip: boolean;
}
interface ViewModel {
    [key: string]: any;
    $root: Record<string, unknown>;
    $options: {
        [key: string]: any;
        name?: string;
        propsData?: IAnyObject;
        _componentTag?: string;
        __file?: string;
        props?: IAnyObject;
    };
    $props: Record<string, unknown>;
}

export { AuthInfo, Behavior, BreadcrumbData, Callback, CodeError, ErrorTarget, HttpData, IAnyObject, InitOptions, LongTask, MemoryData, PerformanceData, RecordScreen, ReplaceHandler, ReportData, ResouceError, ResourceTarget, RouteHistory, ViewModel, VueInstance, WebSee, Without, XOR, voidFun };
