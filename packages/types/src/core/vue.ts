import { IAnyObject } from './base';

export interface VueInstance {
  [key: string]: any;
  // config: VueConfiguration;
  // version?: string;
}

export interface VueConfiguration {
  silent?: boolean;
  errorHandler?(err: Error, vm: ViewModel, info: string): void;
  warnHandler?(msg: string, vm: ViewModel, trace: string): void;
  keyCodes?: { [key: string]: number | Array<number> };
}

export interface ViewModel {
  [key: string]: any;
  $root?: Record<string, unknown>;
  $options?: {
    [key: string]: any;
    name?: string;
    propsData?: IAnyObject;
    _componentTag?: string;
    __file?: string;
    props?: IAnyObject;
  };
  $props?: Record<string, unknown>;
}
