/**
 * store metrics
 *
 * @class
 * */
class metricsStore {
  constructor() {
    this.state = new Map()
  }
  set(key, value) {
    this.state.set(key, value)
  }
  get(key) {
    return this.state.get(key)
  }
  has(key) {
    return this.state.has(key)
  }
  clear() {
    this.state.clear()
  }
  getValues() {
    return Array.from(this.state).reduce((obj, [key, value]) => {
      obj[key] = value
      return obj
    }, {})
  }
}
export default metricsStore
