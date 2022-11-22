/**
 * Performance monitoring entry
 *
 * @class
 * @author allen(https://github.com/Chryseis)
 * */
import 'core-js/es/array/includes'
import 'core-js/es/object/values'
import generateUniqueID from './utils/generateUniqueID'
import { afterLoad, beforeUnload, unload } from './utils'
import { onHidden } from './lib/onHidden'
import createReporter from './lib/createReporter'
import MetricsStore from './lib/store'
import { measure } from './lib/measureCustomMetrics'
import { setMark, clearMark, getMark, hasMark } from './lib/markHandler'
import { initNavigationTiming } from './metrics/getNavigationTiming'
import { initDeviceInfo } from './metrics/getDeviceInfo'
import { initNetworkInfo } from './metrics/getNetworkInfo'
import { initPageInfo } from './metrics/getPageInfo'
import { initFP } from './metrics/getFP'
import { initFCP } from './metrics/getFCP'
import { initFID } from './metrics/getFID'
import { initLCP } from './metrics/getLCP'
import { initFPS } from './metrics/getFPS'
import { initCLS } from './metrics/getCLS'
import { initCCP } from './metrics/getCCP'
let metricsStore
let reporter
class WebVitals {
  constructor(config) {
    const {
      appId,
      version,
      reportCallback,
      immediately = false,
      isCustomEvent = false,
      logFpsCount = 5,
      apiConfig = {},
      hashHistory = true,
      excludeRemotePath = [],
      maxWaitCCPDuration = 30 * 1000,
      scoreConfig = {}
    } = config
    this.immediately = immediately
    const sessionId = generateUniqueID()
    window.__monitor_sessionId__ = sessionId
    reporter = createReporter(sessionId, appId, version, reportCallback)
    metricsStore = new MetricsStore()
    initPageInfo(metricsStore, reporter, immediately)
    initNetworkInfo(metricsStore, reporter, immediately)
    initDeviceInfo(metricsStore, reporter, immediately)
    initCLS(metricsStore, reporter, immediately, scoreConfig)
    initLCP(metricsStore, reporter, immediately, scoreConfig)
    initCCP(metricsStore, reporter, isCustomEvent, apiConfig, hashHistory, excludeRemotePath, maxWaitCCPDuration, immediately, scoreConfig)
    addEventListener(
      isCustomEvent ? 'custom-contentful-paint' : 'pageshow',
      () => {
        initFP(metricsStore, reporter, immediately, scoreConfig)
        initFCP(metricsStore, reporter, immediately, scoreConfig)
      },
      { once: true, capture: true }
    )
    afterLoad(() => {
      initNavigationTiming(metricsStore, reporter, immediately)
      initFID(metricsStore, reporter, immediately, scoreConfig)
      initFPS(metricsStore, reporter, logFpsCount, immediately)
    })
    ;[beforeUnload, unload, onHidden].forEach((fn) => {
      fn(() => {
        const metrics = this.getCurrentMetrics()
        if (Object.keys(metrics).length > 0 && !immediately) {
          reporter(metrics)
        }
      })
    })
  }
  getCurrentMetrics() {
    return metricsStore.getValues()
  }
  static dispatchCustomEvent() {
    const event = document.createEvent('Events')
    event.initEvent('custom-contentful-paint', false, true)
    document.dispatchEvent(event)
  }
  setStartMark(markName) {
    setMark(`${markName}_start`)
  }
  setEndMark(markName) {
    var _a
    setMark(`${markName}_end`)
    if (hasMark(`${markName}_start`)) {
      const value = measure(`${markName}Metrics`, markName)
      this.clearMark(markName)
      const metrics = { name: `${markName}Metrics`, value }
      metricsStore.set(`${markName}Metrics`, metrics)
      if (this.immediately) {
        reporter(metrics)
      }
    } else {
      const value = (_a = getMark(`${markName}_end`)) === null || _a === void 0 ? void 0 : _a.startTime
      this.clearMark(markName)
      const metrics = { name: `${markName}Metrics`, value }
      metricsStore.set(`${markName}Metrics`, metrics)
      if (this.immediately) {
        reporter(metrics)
      }
    }
  }
  clearMark(markName) {
    clearMark(`${markName}_start`)
    clearMark(`${markName}_end`)
  }
  customContentfulPaint() {
    setTimeout(() => {
      WebVitals.dispatchCustomEvent()
    })
  }
}
export { WebVitals }
