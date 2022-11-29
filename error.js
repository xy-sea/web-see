// js错误
let code_error = {
  type: 'error',
  status: 'error',
  message: "Cannot read properties of undefined (reading 'length')",
  fileName:
    'webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=script&lang=js&',
  line: 17,
  column: 13,
  recordScreenId: '89023d91-a370-4e44-ac7d-d093d66b02a9',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: 'eeaa3943-37b3-4194-b331-8d40cba61fdf',
  page_url: 'http://10.105.108.93:8080/#/',
  deviceInfo: {
    browser_version: '107.0.0.0',
    browser: 'Chrome',
    os_version: '10',
    os: 'Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    device: 'Unknow',
    device_type: 'Pc'
  }
};

// 异步错误
let asyncError = {
  type: 'error',
  status: 'error',
  message: 'Uncaught SyntaxError: Unexpected end of JSON input',
  fileName:
    'webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=script&lang=js&',
  line: 12,
  column: 14,
  recordScreenId: 'c060da1c-27d2-46ac-9053-c5727d7b6f68',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: '846f9c46-4333-4d95-b5b7-3d8887a368ba',
  page_url: 'http://10.105.108.93:8080/#/',
  deviceInfo: {
    browser_version: '107.0.0.0',
    browser: 'Chrome',
    os_version: '10',
    os: 'Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    device: 'Unknow',
    device_type: 'Pc'
  }
};

// promise错误
let promiseError = {
  type: 'unhandledrejection',
  status: 'error',
  time: 1669631404734,
  message: "Cannot read properties of undefined (reading 'age')",
  name: 'unhandledrejection',
  fileName:
    'webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=script&lang=js&',
  line: 30,
  column: 21,
  recordScreenId: 'e2032226-0aa8-43ab-9ef1-d1d1cd82137d',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: '846f9c46-4333-4d95-b5b7-3d8887a368ba',
  page_url: 'http://10.105.108.93:8080/#/',
  deviceInfo: {
    browser_version: '107.0.0.0',
    browser: 'Chrome',
    os_version: '10',
    os: 'Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    device: 'Unknow',
    device_type: 'Pc'
  }
};

// xhr错误
let xhrError = {
  url: 'https://abc.com/test/api',
  time: 1669630962693,
  elapsedTime: 788,
  message: 'https://abc.com/test/api; http请求失败，失败原因：跨域限制或接口不存在',
  name: 'xhr--GET',
  request: {
    httpType: 'xhr',
    method: 'GET',
    data: ''
  },
  response: {
    status: 0,
    data: ''
  },
  type: 'xhr',
  status: 'error',
  recordScreenId: '5af161a7-e03b-47e5-a6f1-cfca60a45dfe',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: '46e93796-c545-4945-be05-29a6f1a84eb3',
  page_url: 'http://10.105.108.93:8080/#/',
  deviceInfo: {
    browser_version: '107.0.0.0',
    browser: 'Chrome',
    os_version: '10',
    os: 'Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    device: 'Unknow',
    device_type: 'Pc'
  }
};

// fetch错误
let fetchError = {
  url: 'https://abc.com/test/api',
  time: 1669630980396,
  elapsedTime: 613,
  message: 'https://abc.com/test/api; http请求失败，失败原因：跨域限制或接口不存在',
  name: 'fetch--GET',
  request: {
    httpType: 'fetch',
    method: 'GET',
    data: ''
  },
  response: {
    status: 0
  },
  type: 'fetch',
  status: 'error',
  recordScreenId: '8440eedd-76c8-4eae-aeac-a1331e55a8a5',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: '46e93796-c545-4945-be05-29a6f1a84eb3',
  page_url: 'http://10.105.108.93:8080/#/',
  deviceInfo: {
    browser_version: '107.0.0.0',
    browser: 'Chrome',
    os_version: '10',
    os: 'Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    device: 'Unknow',
    device_type: 'Pc'
  }
};

// 加载资源错误
let sourceError = {
  time: 1669629469131,
  message: 'https://abc.com/index.js; 资源加载失败',
  name: 'js脚本',
  type: 'resource',
  status: 'error',
  recordScreenId: '8a9442a9-3fd9-4c73-b596-7b5d2beb1df2',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: '2f95f7d9-23f6-45cc-9310-a2d679044351',
  page_url: 'http://10.105.108.93:8080/#/',
  deviceInfo: {
    browser_version: '107.0.0.0',
    browser: 'Chrome',
    os_version: '10',
    os: 'Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    device: 'Unknow',
    device_type: 'Pc'
  }
};
