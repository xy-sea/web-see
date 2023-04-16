import { _global } from './global';
import { voidFun } from '@websee/types';

export class Queue {
  private stack: any[] = [];
  private isFlushing = false;
  constructor() {}
  addFn(fn: voidFun): void {
    if (typeof fn !== 'function') return;
    if (!('requestIdleCallback' in _global || 'Promise' in _global)) {
      fn();
      return;
    }
    this.stack.push(fn);
    if (!this.isFlushing) {
      this.isFlushing = true;
      // 优先使用requestIdleCallback
      if ('requestIdleCallback' in _global) {
        requestIdleCallback(() => this.flushStack());
      } else {
        // 其次使用微任务上报
        Promise.resolve().then(() => this.flushStack());
      }
    }
  }
  clear() {
    this.stack = [];
  }
  getStack() {
    return this.stack;
  }
  flushStack(): void {
    const temp = this.stack.slice(0);
    this.stack = [];
    this.isFlushing = false;
    for (let i = 0; i < temp.length; i++) {
      temp[i]();
    }
  }
}
