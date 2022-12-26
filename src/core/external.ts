import * as ErrorStackParser from 'error-stack-parser';
import { EVENTTYPES, STATUS_CODE } from '../common';
import { isError, getTimestamp, unknownToString } from '../utils';
import { transportData } from './transportData';
import { breadcrumb } from './breadcrumb';

// 自定义上报事件
export function log({ message = 'emptyMsg', error = '', type = EVENTTYPES.CUSTOM }: any) {
  let errorInfo = {};
  if (isError(error)) {
    const result = ErrorStackParser.parse(!error.target ? error : error.error || error.reason)[0];
    errorInfo = { ...result, line: result.lineNumber, column: result.columnNumber };
  }
  const data = Object.assign(
    {
      type,
      status: STATUS_CODE.ERROR,
      message: unknownToString(message),
      time: getTimestamp(),
    },
    errorInfo
  );
  breadcrumb.push({
    type,
    category: breadcrumb.getCategory(EVENTTYPES.CUSTOM),
    message: unknownToString(message),
    time: getTimestamp(),
  });
  transportData.send(data);
}
