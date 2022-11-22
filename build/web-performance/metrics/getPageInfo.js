import { metricsName } from '../constants'
const getPageInfo = () => {
  if (!location) {
    console.warn('browser do not support location')
    return
  }
  const { host, hostname, href, protocol, origin, port, pathname, search, hash } = location
  const { width, height } = window.screen
  return {
    host,
    hostname,
    href,
    protocol,
    origin,
    port,
    pathname,
    search,
    hash,
    userAgent: 'userAgent' in navigator ? navigator.userAgent : '',
    screenResolution: `${width}x${height}`
  }
}
/**
 * @param {metricsStore} store
 * @param {Function} report
 * @param {boolean} immediately, if immediately is true,data will report immediately
 * */
export const initPageInfo = (store, report, immediately = true) => {
  const pageInfo = getPageInfo()
  const metrics = { name: metricsName.PI, value: pageInfo }
  store.set(metricsName.PI, metrics)
  if (immediately) {
    report(metrics)
  }
}
