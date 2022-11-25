/**
 *
 * @param level string representation of Severity
 * @returns Severity
 */
function fromString(level) {
  switch (level) {
    case 'debug':
      return Severity.Debug;
    case 'info':
    case 'log':
    case 'assert':
      return Severity.Info;
    case 'warn':
    case 'warning':
      return Severity.Warning;
    case Severity.Low:
    case Severity.Normal:
    case Severity.High:
    case Severity.Critical:
    case 'error':
      return Severity.Error;
    default:
      return Severity.Else;
  }
}

/** 错误类型 */
export const Severity = {
  Else: 'else',
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
  Debug: 'debug',
  Low: 'low',
  Normal: 'normal',
  High: 'high',
  Critical: 'critical',
  fromString: fromString
};
