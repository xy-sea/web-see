import { isNavigatorSupported } from '../utils/isSupported'
import { metricsName } from '../constants'
const getNetworkInfo = () => {
  if (!isNavigatorSupported()) {
    console.warn('browser do not support performance')
    return
  }
  const connection = 'connection' in navigator ? navigator['connection'] : {}
  const { downlink, effectiveType, rtt } = connection
  return {
    downlink,
    effectiveType,
    rtt
  }
}
/**
 * @param {metricsStore} store
 * @param {Function} report
 * @param {boolean} immediately, if immediately is true,data will report immediately
 * */
export const initNetworkInfo = (store, report, immediately = true) => {
  const networkInfo = getNetworkInfo()
  const metrics = { name: metricsName.NI, value: networkInfo }
  store.set(metricsName.NI, metrics)
  if (immediately) {
    report(metrics)
  }
}
