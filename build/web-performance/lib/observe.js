const observe = (type, callback) => {
  var _a
  try {
    if ((_a = PerformanceObserver.supportedEntryTypes) === null || _a === void 0 ? void 0 : _a.includes(type)) {
      const po = new PerformanceObserver((l) => l.getEntries().map(callback))
      po.observe({ type, buffered: true })
      return po
    }
  } catch (e) {
    throw e
  }
}
export default observe
