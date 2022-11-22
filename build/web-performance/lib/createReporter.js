/**
 * @param {string} sessionId
 * @param {string} appId
 * @param {string} version
 * @param {Function} callback
 * @returns {IReportHandler}
 */
const createReporter = (sessionId, appId, version, callback) => (data) => {
  const reportData = {
    sessionId,
    appId,
    version,
    data,
    timestamp: +new Date()
  }
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(
      () => {
        callback(reportData)
      },
      { timeout: 3000 }
    )
  } else {
    callback(reportData)
  }
}
export default createReporter
