import { isPerformanceSupported, isPerformanceObserverSupported } from '../utils/isSupported'
import { metricsName } from '../constants'
import observe from '../lib/observe'
import { roundByFour, validNumber } from '../utils'
const getNavigationTiming = () => {
  if (!isPerformanceSupported()) {
    console.warn('browser do not support performance')
    return
  }
  const resolveNavigationTiming = (entry, resolve) => {
    const {
      domainLookupStart,
      domainLookupEnd,
      connectStart,
      connectEnd,
      secureConnectionStart,
      requestStart,
      responseStart,
      responseEnd,
      domInteractive,
      domContentLoadedEventStart,
      domContentLoadedEventEnd,
      loadEventStart,
      fetchStart
    } = entry
    resolve({
      dnsLookup: roundByFour(domainLookupEnd - domainLookupStart),
      initialConnection: roundByFour(connectEnd - connectStart),
      ssl: secureConnectionStart ? roundByFour(connectEnd - secureConnectionStart) : 0,
      ttfb: roundByFour(responseStart - requestStart),
      contentDownload: roundByFour(responseEnd - responseStart),
      domParse: roundByFour(domInteractive - responseEnd),
      deferExecuteDuration: roundByFour(domContentLoadedEventStart - domInteractive),
      domContentLoadedCallback: roundByFour(domContentLoadedEventEnd - domContentLoadedEventStart),
      resourceLoad: roundByFour(loadEventStart - domContentLoadedEventEnd),
      domReady: roundByFour(domContentLoadedEventEnd - fetchStart),
      pageLoad: roundByFour(loadEventStart - fetchStart)
    })
  }
  return new Promise((resolve) => {
    var _a
    if (
      isPerformanceObserverSupported() &&
      ((_a = PerformanceObserver.supportedEntryTypes) === null || _a === void 0 ? void 0 : _a.includes('navigation'))
    ) {
      const entryHandler = (entry) => {
        if (entry.entryType === 'navigation') {
          if (po) {
            po.disconnect()
          }
          resolveNavigationTiming(entry, resolve)
        }
      }
      const po = observe('navigation', entryHandler)
    } else {
      const navigation =
        performance.getEntriesByType('navigation').length > 0 ? performance.getEntriesByType('navigation')[0] : performance.timing
      resolveNavigationTiming(navigation, resolve)
    }
  })
}
/**
 * @param {metricsStore} store
 * @param {Function} report
 * @param {boolean} immediately, if immediately is true,data will report immediately
 * */
export const initNavigationTiming = (store, report, immediately = true) => {
  var _a
  ;(_a = getNavigationTiming()) === null || _a === void 0
    ? void 0
    : _a.then((navigationTiming) => {
        const metrics = { name: metricsName.NT, value: navigationTiming }
        if (validNumber(Object === null || Object === void 0 ? void 0 : Object.values(metrics.value))) {
          store.set(metricsName.NT, metrics)
          if (immediately) {
            report(metrics)
          }
        }
      })
}
