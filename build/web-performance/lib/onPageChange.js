import { proxyHistory } from './proxyHandler'
const unifiedHref = (href) => {
  return decodeURIComponent(
    href === null || href === void 0
      ? void 0
      : href.replace(
          `${location === null || location === void 0 ? void 0 : location.protocol}//${
            location === null || location === void 0 ? void 0 : location.host
          }`,
          ''
        )
  )
}
const lastHref = unifiedHref(location.href)
/**
 * when page is loaded, listen page change
 */
export const onPageChange = (cb) => {
  window.addEventListener('hashchange', function (e) {
    cb(e)
  })
  window.addEventListener('popstate', function (e) {
    cb(e)
  })
  proxyHistory((...args) => {
    const currentHref = unifiedHref(args === null || args === void 0 ? void 0 : args[2])
    if (lastHref !== currentHref) {
      cb()
    }
  })
}
