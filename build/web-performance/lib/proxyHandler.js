/**
 * @param beforeHandler
 * @param afterHandler
 */
function proxyXhr(beforeHandler, afterHandler) {
  if ('XMLHttpRequest' in window && !window.__monitor_xhr__) {
    const origin = window.XMLHttpRequest
    const originOpen = origin.prototype.open
    window.__monitor_xhr__ = true
    origin.prototype.open = function (...args) {
      beforeHandler && beforeHandler(args[1])
      originOpen.apply(this, args)
      this.addEventListener('loadend', () => {
        afterHandler && afterHandler(args[1])
      })
    }
  }
}
/**
 * @param beforeHandler
 * @param afterHandler
 */
function proxyFetch(beforeHandler, afterHandler) {
  if ('fetch' in window && !window.__monitor_fetch__) {
    const origin = window.fetch
    window.__monitor_fetch__ = true
    window.fetch = function (resource, init) {
      beforeHandler && beforeHandler(resource, init)
      return origin.call(window, resource, init).then(
        (response) => {
          afterHandler && afterHandler(resource, init)
          return response
        },
        (err) => {
          throw err
        }
      )
    }
  }
}
/**
 * @param handler
 */
function proxyHistory(handler) {
  if (window.history) {
    const originPushState = history.pushState
    const originReplaceState = history.replaceState
    history.pushState = function (...args) {
      handler && handler(...args, 'pushState')
      originPushState.apply(window.history, args)
    }
    history.replaceState = function (...args) {
      handler && handler(...args, 'replaceState')
      originReplaceState.apply(window.history, args)
    }
  }
}
export { proxyXhr, proxyFetch, proxyHistory }
