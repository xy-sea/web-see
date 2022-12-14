declare interface Performance extends Performance {
  memory?: {
    jsHeapSizeLimit: number;
    totalJSHeapSize: number;
    usedJSHeapSize: number;
  };
}

declare interface Console extends Console {
  err?: (payload: any) => void;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare interface Window {
  _loopTimer: number;
}
