import { _global } from './global';
// 优先利用浏览器空闲时间上报数据
export class Queue {
  constructor() {
    this.stack = [];
    this.isFlushing = false;
  }
  addFn(fn) {
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
  flushStack() {
    const temp = this.stack.slice(0);
    this.stack = [];
    this.isFlushing = false;
    for (let i = 0; i < temp.length; i++) {
      temp[i]();
    }
  }
}
