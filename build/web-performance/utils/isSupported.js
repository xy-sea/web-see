export const isPerformanceSupported = () => {
  return !!window.performance && !!window.performance.getEntriesByType && !!window.performance.mark
}
export const isPerformanceObserverSupported = () => {
  return !!window.PerformanceObserver
}
export const isNavigatorSupported = () => {
  return !!window.navigator
}
