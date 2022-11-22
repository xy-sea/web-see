export function isReportDataType(data) {
  // 此次上报的类型是错误上报，否则是埋点上报
  return data.actionType === undefined && !data.isTrackData;
}
