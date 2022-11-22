import { isPerformanceSupported, isNavigatorSupported } from '../utils/isSupported'
import { convertToMB } from '../utils'
import { metricsName } from '../constants'
const getDeviceInfo = () => {
  if (!isPerformanceSupported()) {
    console.warn('browser do not support performance')
    return
  }
  if (!isNavigatorSupported()) {
    console.warn('browser do not support navigator')
    return
  }
  return {
    deviceMemory: 'deviceMemory' in navigator ? navigator['deviceMemory'] : 0,
    hardwareConcurrency: 'hardwareConcurrency' in navigator ? navigator['hardwareConcurrency'] : 0,
    jsHeapSizeLimit: 'memory' in performance ? convertToMB(performance['memory']['jsHeapSizeLimit']) : 0,
    totalJSHeapSize: 'memory' in performance ? convertToMB(performance['memory']['totalJSHeapSize']) : 0,
    usedJSHeapSize: 'memory' in performance ? convertToMB(performance['memory']['usedJSHeapSize']) : 0
  }
}
/**
 * @param {metricsStore} store
 * @param {Function} report
 * @param {boolean} immediately, if immediately is true,data will report immediately
 * */
export const initDeviceInfo = (store, report, immediately = true) => {
  const deviceInfo = getDeviceInfo()
  const metrics = { name: metricsName.DI, value: deviceInfo }
  store.set(metricsName.DI, metrics)
  if (immediately) {
    report(metrics)
  }
}
