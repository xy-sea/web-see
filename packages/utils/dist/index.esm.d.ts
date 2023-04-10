import { InitOptions, Callback, IAnyObject, voidFun } from '@websee/types';
import { SpanStatus } from '@websee/common';

/**
 * 返回包含id、class、innerTextde字符串的标签
 * @param target html节点
 */
declare function htmlElementAsString(target: HTMLElement): string;
/**
 * 将地址字符串转换成对象，
 * 输入：'https://github.com/xy-sea/web-see?token=123&name=11'
 * 输出：{
 *  "host": "github.com",
 *  "path": "/xy-sea/web-see",
 *  "protocol": "https",
 *  "relative": "/xy-sea/web-see?token=123&name=11"
 * }
 */
declare function parseUrlToObj(url: string): {
    host?: undefined;
    path?: undefined;
    protocol?: undefined;
    relative?: undefined;
} | {
    host: string;
    path: string;
    protocol: string;
    relative: string;
};
declare function zip(data: any): string;
declare function setSilentFlag(paramOptions: InitOptions): void;
declare function getErrorUid(input: string): string;
declare function hashMapExist(hash: string): boolean;

/**
 * 原生try函数
 * ../param fn try中执行的函数体
 * ../param errorFn 报错时执行的函数体，将err传入
 */
declare function nativeTryCatch(fn: any, errorFn: any): void;

declare function getLocationHref(): string;
/**
 * 添加事件监听器
 * ../export
 * ../param {{ addEventListener: Function }} target
 * ../param {keyof TotalEventName} eventName
 * ../param {Function} handler
 * ../param {(boolean | Object)} opitons
 * ../returns
 */
declare function on(target: any, eventName: string, handler: Callback, opitons?: boolean): void;
/**
 *
 * 重写对象上面的某个属性
 * ../param source 需要被重写的对象
 * ../param name 需要被重写对象的key
 * ../param replacement 以原有的函数作为参数，执行并重写原有函数
 * ../param isForced 是否强制重写（可能原先没有该属性）
 * ../returns void
 */
declare function replaceAop(source: IAnyObject, name: string, replacement: Callback, isForced?: boolean): void;
/**
 * 函数节流
 * fn 需要节流的函数
 * delay 节流的时间间隔
 * 返回一个包含节流功能的函数
 */
declare const throttle: (fn: any, delay: number) => (this: any, ...args: any[]) => void;
declare function getTimestamp(): number;
declare function getYMDHMS(): string;
declare function typeofAny(target: any): string;
declare function toStringAny(target: any, type: string): boolean;
declare function validateOption(target: any, targetName: string, expectType: string): any;
declare function generateUUID(): string;
declare function unknownToString(target: unknown): string;
declare function interceptStr(str: string, interceptLength: number): string;

/**
 * 检测变量类型
 * @param type
 */
declare const variableTypeDetection: {
    isNumber: (value: any) => boolean;
    isString: (value: any) => boolean;
    isBoolean: (value: any) => boolean;
    isNull: (value: any) => boolean;
    isUndefined: (value: any) => boolean;
    isSymbol: (value: any) => boolean;
    isFunction: (value: any) => boolean;
    isObject: (value: any) => boolean;
    isArray: (value: any) => boolean;
    isProcess: (value: any) => boolean;
    isWindow: (value: any) => boolean;
};
declare function isError(error: Error): boolean;
/**
 * 检查是否是空对象
 */
declare function isEmptyObject(obj: object): boolean;
declare function isEmpty(wat: any): boolean;
declare function isExistProperty(obj: any, key: any): boolean;

declare const isBrowserEnv: boolean;
interface Window {
    chrome?: {
        app: {
            [key: string]: any;
        };
    };
    history: any;
    onpopstate: any;
    addEventListener: any;
    performance: any;
    __webSee__: {
        [key: string]: any;
    };
    innerWidth: number;
    innerHeight: number;
}
declare function getGlobal(): Window;
declare const _global: Window;
declare const _support: {
    [key: string]: any;
};
declare function setFlag(replaceType: string, isSet: boolean): void;
declare function getFlag(replaceType: string): boolean;
declare function getGlobalSupport(): {
    [key: string]: any;
};
declare function supportsHistory(): boolean;

declare class Queue {
    private stack;
    private isFlushing;
    constructor();
    addFn(fn: voidFun): void;
    clear(): void;
    getStack(): any[];
    flushStack(): void;
}

declare function fromHttpStatus(httpStatus: any): SpanStatus.Ok | SpanStatus.DeadlineExceeded | SpanStatus.Unauthenticated | SpanStatus.PermissionDenied | SpanStatus.NotFound | SpanStatus.ResourceExhausted | SpanStatus.InvalidArgument | SpanStatus.Unimplemented | SpanStatus.Unavailable | SpanStatus.InternalError | SpanStatus.UnknownError | SpanStatus.AlreadyExists | SpanStatus.FailedPrecondition;

export { Queue, _global, _support, fromHttpStatus, generateUUID, getErrorUid, getFlag, getGlobal, getGlobalSupport, getLocationHref, getTimestamp, getYMDHMS, hashMapExist, htmlElementAsString, interceptStr, isBrowserEnv, isEmpty, isEmptyObject, isError, isExistProperty, nativeTryCatch, on, parseUrlToObj, replaceAop, setFlag, setSilentFlag, supportsHistory, throttle, toStringAny, typeofAny, unknownToString, validateOption, variableTypeDetection, zip };
