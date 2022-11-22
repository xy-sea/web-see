import { onHidden } from './onHidden'
let firstHiddenTime = document.visibilityState === 'hidden' ? 0 : Infinity
const getFirstHiddenTime = () => {
  onHidden((e) => {
    firstHiddenTime = Math.min(firstHiddenTime, e.timeStamp)
  }, true)
  return {
    get timeStamp() {
      return firstHiddenTime
    }
  }
}
export default getFirstHiddenTime
