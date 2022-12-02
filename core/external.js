import ErrorStackParser from 'error-stack-parser';
import { EVENTTYPES, STATUS_CODE } from '../common';
import { isError, getLocationHref, getTimestamp, unknownToString } from '../utils';
import { transportData } from './transportData';
import { breadcrumb } from './breadcrumb';
/**
 *
 * 自定义上报事件
 * @export
 * @param {LogTypes} { message = 'emptyMsg', tag = '', ex = '' }
 */
export function log({ message = 'emptyMsg', tag = '', error = '', type = EVENTTYPES.CUSTOM }) {
  let errorInfo = {};
  if (isError(error)) {
    let result = ErrorStackParser.parse(error.error || error.reason)[0];
    errorInfo = { ...result, line: result.lineNumber, column: result.columnNumber };
  }
  const data = Object.assign(
    {
      type,
      status: STATUS_CODE.ERROR,
      message: unknownToString(message),
      customTag: unknownToString(tag),
      url: getLocationHref(),
      time: getTimestamp()
    },
    errorInfo
  );
  breadcrumb.push({
    type,
    category: breadcrumb.getCategory(EVENTTYPES.CUSTOM),
    data: message,
    time: getTimestamp()
  });
  transportData.send(data);
}
