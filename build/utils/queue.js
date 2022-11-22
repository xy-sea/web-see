import { _global } from './global'
export class Queue {
  constructor() {
    this.stack = []
    this.isFlushing = false
    if (!('Promise' in _global)) return
    this.micro = Promise.resolve()
  }
  addFn(fn) {
    if (typeof fn !== 'function') return
    if (!('Promise' in _global)) {
      fn()
      return
    }
    this.stack.push(fn)
    if (!this.isFlushing) {
      this.isFlushing = true
      this.micro.then(() => this.flushStack())
    }
  }
  clear() {
    this.stack = []
  }
  getStack() {
    return this.stack
  }
  flushStack() {
    const temp = this.stack.slice(0)
    this.stack.length = 0
    this.isFlushing = false
    for (let i = 0; i < temp.length; i++) {
      temp[i]()
    }
  }
}
