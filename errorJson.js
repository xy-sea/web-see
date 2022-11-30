// 各数据列表

// js错误
let code_error = {
  type: 'error',
  status: 'error',
  message: "Cannot read properties of undefined (reading 'length')",
  fileName: 'http://10.105.108.93:3000/js/app.8c773fef.js',
  line: 1,
  column: 1509,
  recordScreenId: '8a2d8510-747c-43da-abfa-4cf61fef5446',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: '42fa00f5-aea2-44f0-bfcf-d59186d34714',
  page_url: 'http://10.105.108.93:3000/#/',
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
  fileName: 'http://10.105.108.93:3000/js/app.8c773fef.js',
  line: 1,
  column: 1477,
  recordScreenId: '3e45a989-8cce-45da-b1b5-d245ccdb1fa8',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: '42fa00f5-aea2-44f0-bfcf-d59186d34714',
  page_url: 'http://10.105.108.93:3000/#/',
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
  time: 1669631626635,
  message: "Cannot read properties of undefined (reading 'age')",
  name: 'unhandledrejection',
  fileName: 'http://10.105.108.93:3000/js/app.8c773fef.js',
  line: 1,
  column: 1724,
  recordScreenId: 'ecea73b5-d590-4292-8d30-cf0c61e9efbe',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: 'bf1b3a83-2eec-4b4c-b7b3-e4bb1ea15040',
  page_url: 'http://10.105.108.93:3000/#/',
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

// xhr请求错误
let xhrError = {
  url: 'https://abc.com/test/api',
  time: 1669631643045,
  elapsedTime: 797,
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
  recordScreenId: 'ead6c6ec-2497-48c8-9f93-478b60977527',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: 'bf1b3a83-2eec-4b4c-b7b3-e4bb1ea15040',
  page_url: 'http://10.105.108.93:3000/#/',
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

// fecth错误
let fetchError = {
  url: 'https://abc.com/test/api',
  time: 1669631665846,
  elapsedTime: 636,
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
  recordScreenId: 'a6e804f9-c906-42f0-be51-b5c33b5725ae',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: 'bf1b3a83-2eec-4b4c-b7b3-e4bb1ea15040',
  page_url: 'http://10.105.108.93:3000/#/',
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
let resouceError = {
  time: 1669631708689,
  message: 'https://abc.com/index.js; 资源加载失败',
  name: 'js脚本',
  type: 'resource',
  status: 'error',
  recordScreenId: '09ab41d2-c07a-45c4-802f-bb05097ca5f7',
  userId: '123',
  sdkVersion: '1.0.0',
  sdkName: 'web-see',
  apikey: 'abcd',
  date: '2022-11-28',
  uuid: 'bf1b3a83-2eec-4b4c-b7b3-e4bb1ea15040',
  page_url: 'http://10.105.108.93:3000/#/',
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
