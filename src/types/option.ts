export interface InitOptions {
  dsn: string;
  apikey: string;
  userId?: string;
  disabled?: boolean;
  useImgUpload?: boolean;
  throttleDelayTime?: number;
  overTime?: number;
  maxBreadcrumbs?: number;
  recordScreentime?: number;
  recordScreenTypeList?: string[],
  silentXhr?: boolean;
  silentFetch?: boolean;
  silentClick?: boolean;
  silentHistory?: boolean;
  silentError?: boolean;
  silentUnhandledrejection?: boolean;
  silentHashchange?: boolean;
  silentPerformance?: boolean;
  silentRecordScreen?: boolean;
  silentWhiteScreen?: boolean;
  skeletonProject?: boolean;
  whiteBoxElements?: string[];
  filterXhrUrlRegExp?: RegExp;
  beforePushBreadcrumb?: () => object;
  beforeDataReport?: () => object;
}