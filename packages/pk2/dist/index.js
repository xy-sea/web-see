(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["web-see"] = factory());
})(this, (function () { 'use strict';

  function fun2() {
      console.log('I am package 2');
  }

  return fun2;

}));
//# sourceMappingURL=index.js.map
