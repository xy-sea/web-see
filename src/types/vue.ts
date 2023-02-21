import { IAnyObject } from './index';

export interface VueInstance {
  config?: VueConfiguration;
  mixin(hooks: { [key: string]: () => void }): void;
  util: {
    warn(...input: any): void;
  };
  version: string;
}

interface VueConfiguration {
  silent: boolean;
  optionMergeStrategies: { [key: string]: any };
  errorHandler(err: Error, vm: ViewModel, info: string): void;
  warnHandler(msg: string, vm: ViewModel, trace: string): void;
  ignoreElements: (string | RegExp)[];
  keyCodes: { [key: string]: number | Array<number> };
  productionTip: boolean;
}

export interface ViewModel {
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
