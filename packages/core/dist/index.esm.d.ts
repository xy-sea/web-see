import { InitOptions, VueInstance } from '@websee/types';

declare function log({ message, error, type }: any): void;

declare function init(options: InitOptions): void;
declare function install(Vue: VueInstance, options: InitOptions): void;
declare function errorBoundary(err: Error): void;
declare const _default: {
    SDK_VERSION: any;
    SDK_NAME: string;
    init: typeof init;
    install: typeof install;
    errorBoundary: typeof errorBoundary;
    log: typeof log;
};

export { _default as default };
