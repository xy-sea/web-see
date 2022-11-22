import { ERRORTYPES, BREADCRUMBTYPES } from '../shared'
import {
  isError,
  extractErrorStack,
  getLocationHref,
  getTimestamp,
  unknownToString,
  isWxMiniEnv,
  Severity,
  getCurrentRoute
} from '../utils'
import { transportData } from './transportData'
import { breadcrumb } from './breadcrumb'
/**
 *
 * 自定义上报事件
 * @export
 * @param {LogTypes} { message = 'emptyMsg', tag = '', level = Severity.Critical, ex = '' }
 */
export function log({ message = 'emptyMsg', tag = '', level = Severity.Critical, ex = '', type = ERRORTYPES.LOG_ERROR }) {
  let errorInfo = {}
  if (isError(ex)) {
    errorInfo = extractErrorStack(ex, level)
  }
  const error = Object.assign(
    {
      type,
      level,
      message: unknownToString(message),
      name: 'MITO.log',
      customTag: unknownToString(tag),
      time: getTimestamp(),
      url: isWxMiniEnv ? getCurrentRoute() : getLocationHref()
    },
    errorInfo
  )
  breadcrumb.push({
    type: BREADCRUMBTYPES.CUSTOMER,
    category: breadcrumb.getCategory(BREADCRUMBTYPES.CUSTOMER),
    data: message,
    level: Severity.fromString(level.toString())
  })
  transportData.send(error)
}
