// 各数据结构列表

// js错误
let code_error = {
  type: 'error',
  status: 'error',
  time: 1669872790435,
  message: "Cannot read properties of undefined (reading 'length')",
  fileName: 'http://localhost:8083/js/home.59835348.js',
  line: 29,
  column: 56592,
  recordScreenId: '32bc1bfd-262e-4436-bca7-37889d1d8f54',
  userId: '123',
  sdkVersion: '1.0.1',
  sdkName: 'web-see',
  apikey: '项目1',
  date: '2022-12-01',
  uuid: '4896ba67-6de8-4e8c-82fd-c9b59b763d46',
  page_url: 'http://localhost:8083/#/',
  deviceInfo: {
    browser_version: '107.0.0.0',
    browser: 'Chrome',
    os_version: '10',
    os: 'Windows',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    device: 'Unknow',
    device_type: 'Pc'
  },
  breadcrumb: [
    {
      type: 'error',
      category: 'Code_Error',
      data: {
        type: 'error',
        status: 'error',
        time: 1669872763566,
        message: "Cannot read properties of undefined (reading 'length')",
        fileName: 'http://localhost:8083/js/home.59835348.js',
        line: 29,
        column: 56592,
        recordScreenId: '38a24074-c362-49ef-b5bb-8619f5694770'
      },
      time: 1669872763566,
      status: 'error'
    },
    {
      type: 'fetch',
      category: 'Http',
      data: {
        url: 'http://localhost:8083/getErrorList',
        time: 1669872763925,
        elapsedTime: 107,
        message: 'http://localhost:8083/getErrorList; ok',
        name: 'fetch--GET',
        request: {
          httpType: 'fetch',
          method: 'GET',
          data: ''
        },
        response: {
          status: 200,
          data: false
        }
      },
      status: 'ok',
      time: 1669872763925
    },
    {
      type: 'fetch',
      category: 'Http',
      data: {
        url: 'http://localhost:8083/getErrorList',
        time: 1669872764218,
        elapsedTime: 341,
        message: 'http://localhost:8083/getErrorList; ok',
        name: 'fetch--GET',
        request: {
          httpType: 'fetch',
          method: 'GET',
          data: ''
        },
        response: {
          status: 200,
          data: false
        }
      },
      status: 'ok',
      time: 1669872764218
    },
    {
      type: 'fetch',
      category: 'Http',
      data: {
        url: 'http://localhost:8083/reportData',
        time: 1669872772642,
        elapsedTime: 57,
        message: 'http://localhost:8083/reportData; ok',
        name: 'fetch--post',
        request: {
          httpType: 'fetch',
          method: 'post',
          data: '{"type":"performance","name":"long_task","longTask":{"name":"self","entryType":"longtask","startTime":11646.60000000894,"duration":79,"attribution":[{"name":"unknown","entryType":"taskattribution","startTime":0,"duration":0,"containerType":"window","containerSrc":"","containerId":"","containerName":""}]},"time":1669872768031,"status":"ok","userId":"123","sdkVersion":"1.0.1","sdkName":"web-see","apikey":"项目1","date":"2022-12-01","uuid":"4896ba67-6de8-4e8c-82fd-c9b59b763d46","page_url":"http://localhost:8083/#/","deviceInfo":{"browser_version":"107.0.0.0","browser":"Chrome","os_version":"10","os":"Windows","ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36","device":"Unknow","device_type":"Pc"}}'
        },
        response: {
          status: 200,
          data: false
        }
      },
      status: 'ok',
      time: 1669872772642
    },
    {
      type: 'click',
      status: 'ok',
      category: 'Click',
      data: "<button class='el-button el-button--primary el-button--mini'>js错误</button>",
      time: 1669872790434
    },
    {
      type: 'error',
      category: 'Code_Error',
      data: {
        type: 'error',
        status: 'error',
        time: 1669872790435,
        message: "Cannot read properties of undefined (reading 'length')",
        fileName: 'http://localhost:8083/js/home.59835348.js',
        line: 29,
        column: 56592,
        recordScreenId: '32bc1bfd-262e-4436-bca7-37889d1d8f54'
      },
      time: 1669872790435,
      status: 'error'
    }
  ]
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

// 性能数据
// FCP

let FCP = {
  type: 'performance',
  status: 'ok',
  time: 1669872861585,
  name: 'FCP',
  rating: 'good',
  value: 296.3999999910593,
  userId: '123',
  sdkVersion: '1.0.1',
  sdkName: 'web-see',
  apikey: '项目1',
  date: '2022-12-01',
  uuid: 'c0c4efa4-0f45-4d43-a4ef-0b90711117ce',
  page_url: 'http://localhost:8083/#/',
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

// long task
let long_task = {
  type: 'performance',
  name: 'long_task',
  longTask: {
    name: 'self',
    entryType: 'longtask',
    startTime: 77.70000000298023,
    duration: 202,
    attribution: [
      {
        name: 'unknown',
        entryType: 'taskattribution',
        startTime: 0,
        duration: 0,
        containerType: 'window',
        containerSrc: '',
        containerId: '',
        containerName: ''
      }
    ]
  },
  time: 1669872861586,
  status: 'ok',
  userId: '123',
  sdkVersion: '1.0.1',
  sdkName: 'web-see',
  apikey: '项目1',
  date: '2022-12-01',
  uuid: 'c0c4efa4-0f45-4d43-a4ef-0b90711117ce',
  page_url: 'http://localhost:8083/#/',
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

// 加载资源列表
let resource_list = {
  type: 'performance',
  name: 'resource_list',
  time: 1669872861816,
  status: 'ok',
  resourceList: [
    {
      name: 'http://localhost:8083/js/chunk-vendors.ea06b12b.js',
      entryType: 'resource',
      startTime: 28.399999991059303,
      duration: 34.1000000089407,
      initiatorType: 'script',
      nextHopProtocol: '',
      renderBlockingStatus: 'non-blocking',
      workerStart: 0,
      redirectStart: 0,
      redirectEnd: 0,
      fetchStart: 28.399999991059303,
      domainLookupStart: 28.399999991059303,
      domainLookupEnd: 28.399999991059303,
      connectStart: 28.399999991059303,
      connectEnd: 28.399999991059303,
      secureConnectionStart: 0,
      requestStart: 52.20000000298023,
      responseStart: 54.70000000298023,
      responseEnd: 62.5,
      transferSize: 300,
      encodedBodySize: 0,
      decodedBodySize: 0,
      serverTiming: [],
      isCache: true
    },
    {
      name: 'http://localhost:8083/js/app.7f7772ce.js',
      entryType: 'resource',
      startTime: 28.599999994039536,
      duration: 34.400000005960464,
      initiatorType: 'script',
      nextHopProtocol: '',
      renderBlockingStatus: 'non-blocking',
      workerStart: 0,
      redirectStart: 0,
      redirectEnd: 0,
      fetchStart: 28.599999994039536,
      domainLookupStart: 28.599999994039536,
      domainLookupEnd: 28.599999994039536,
      connectStart: 28.599999994039536,
      connectEnd: 28.599999994039536,
      secureConnectionStart: 0,
      requestStart: 54.5,
      responseStart: 56.3999999910593,
      responseEnd: 63,
      transferSize: 300,
      encodedBodySize: 0,
      decodedBodySize: 0,
      serverTiming: [],
      isCache: true
    },
    {
      name: 'http://localhost:8083/js/home.59835348.js',
      entryType: 'resource',
      startTime: 256.29999999701977,
      duration: 16.900000005960464,
      initiatorType: 'script',
      nextHopProtocol: '',
      renderBlockingStatus: 'non-blocking',
      workerStart: 0,
      redirectStart: 0,
      redirectEnd: 0,
      fetchStart: 256.29999999701977,
      domainLookupStart: 256.29999999701977,
      domainLookupEnd: 256.29999999701977,
      connectStart: 256.29999999701977,
      connectEnd: 256.29999999701977,
      secureConnectionStart: 0,
      requestStart: 265.79999999701977,
      responseStart: 267.8999999910593,
      responseEnd: 273.20000000298023,
      transferSize: 300,
      encodedBodySize: 218492,
      decodedBodySize: 218492,
      serverTiming: [],
      isCache: false
    },
    {
      name: 'http://localhost:8083/img/logo.14891075.png',
      entryType: 'resource',
      startTime: 264,
      duration: 15.700000002980232,
      initiatorType: 'img',
      nextHopProtocol: '',
      renderBlockingStatus: 'non-blocking',
      workerStart: 0,
      redirectStart: 0,
      redirectEnd: 0,
      fetchStart: 264,
      domainLookupStart: 264,
      domainLookupEnd: 264,
      connectStart: 264,
      connectEnd: 264,
      secureConnectionStart: 0,
      requestStart: 271.20000000298023,
      responseStart: 273.8999999910593,
      responseEnd: 279.70000000298023,
      transferSize: 300,
      encodedBodySize: 0,
      decodedBodySize: 0,
      serverTiming: [],
      isCache: true
    }
  ],
  userId: '123',
  sdkVersion: '1.0.1',
  sdkName: 'web-see',
  apikey: '项目1',
  date: '2022-12-01',
  uuid: 'c0c4efa4-0f45-4d43-a4ef-0b90711117ce',
  page_url: 'http://localhost:8083/#/',
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
