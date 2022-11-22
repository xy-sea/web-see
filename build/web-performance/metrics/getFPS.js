import { metricsName } from '../constants'
import calculateFps from '../lib/calculateFps'
const getFPS = (logFpsCount) => {
  return calculateFps(logFpsCount)
}
/**
 * @param {metricsStore} store
 * @param {Function} report
 * @param {number} logFpsCount
 * @param {boolean} immediately, if immediately is true,data will report immediately
 * */
export const initFPS = (store, report, logFpsCount, immediately = true) => {
  getFPS(logFpsCount).then((fps) => {
    const metrics = { name: metricsName.FPS, value: fps }
    store.set(metricsName.FPS, metrics)
    if (immediately) {
      report(metrics)
    }
  })
}
