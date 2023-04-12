declare module '*.json' {
  const value: any;
  export default value;
}

declare interface Performance extends Performance {
  memory: {
    /** The maximum size of the heap, in bytes, that is available to the context. */
    jsHeapSizeLimit: number;
    /** The total allocated heap size, in bytes. */
    totalJSHeapSize: number;
    /** The currently active segment of JS heap, in bytes. */
    usedJSHeapSize: number;
  };
}
