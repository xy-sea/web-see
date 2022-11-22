/**
 * @author allen(https://github.com/Chryseis)
 * Cumulative Layout Shift
 * Have you ever been reading an article online when something suddenly changes on the page?
 * Without warning, the text moves, and you've lost your place.
 * Or even worse: you're about to tap a link or a button,
 * but in the instant before your finger lands—BOOM—the link moves,
 * and you end up clicking something else!
 * */
import { isPerformanceObserverSupported } from '../utils/isSupported'
import observe from '../lib/observe'
import { metricsName } from '../constants'
import { roundByFour } from '../utils'
import { onHidden } from '../lib/onHidden'
import calcScore from '../lib/calculateScore'
const getCLS = (cls) => {
  if (!isPerformanceObserverSupported()) {
    console.warn('browser do not support performanceObserver')
    return
  }
  const entryHandler = (entry) => {
    if (!entry.hadRecentInput) {
      cls.value += entry.value
    }
  }
  return observe('layout-shift', entryHandler)
}
/**
 * @param {metricsStore} store
 * @param {Function} report
 * @param {boolean} immediately, if immediately is true,data will report immediately
 * @param {IScoreConfig} scoreConfig
 * */
export const initCLS = (store, report, immediately = true, scoreConfig) => {
  const cls = { value: 0 }
  const po = getCLS(cls)
  const stopListening = () => {
    if (po === null || po === void 0 ? void 0 : po.takeRecords) {
      po.takeRecords().map((entry) => {
        if (!entry.hadRecentInput) {
          cls.value += entry.value
        }
      })
    }
    po === null || po === void 0 ? void 0 : po.disconnect()
    const metrics = {
      name: metricsName.CLS,
      value: roundByFour(cls.value),
      score: calcScore(metricsName.CLS, cls.value, scoreConfig)
    }
    store.set(metricsName.CLS, metrics)
    if (immediately) {
      report(metrics)
    }
  }
  onHidden(stopListening, true)
}
