import { isPerformanceSupported } from '../utils/isSupported'
const hasMark = (markName) => {
  if (!isPerformanceSupported()) {
    console.error('browser do not support performance')
    return
  }
  return performance.getEntriesByName(markName).length > 0
}
const getMark = (markName) => {
  if (!isPerformanceSupported()) {
    console.error('browser do not support performance')
    return
  }
  return performance.getEntriesByName(markName).pop()
}
const setMark = (markName) => {
  if (!isPerformanceSupported()) {
    console.error('browser do not support performance')
    return
  }
  performance.mark(markName)
}
const clearMark = (markName) => {
  if (!isPerformanceSupported()) {
    return
  }
  performance.clearMarks(markName)
}
export { hasMark, getMark, setMark, clearMark }
