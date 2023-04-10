(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["web-see"] = {}));
})(this, (function (exports) { 'use strict';

  var name = "test";
  var version = "1.0.0";
  var description = "前端监控SDK，可用来收集并上报：代码报错、性能数据、用户行为、加载资源、个性化指标等数据";
  var main = "dist/index.min.js";
  var module = "dist/index.esm.js";
  var scripts = {
  	build: "rollup -c",
  	prepare: "husky install",
  	commit: "git-cz",
  	changeset: "changeset",
  	"version-packages": "changeset version",
  	release: "pnpm build && pnpm publish",
  	publish: "changeset publish --registry=https://registry.npmjs.com/",
  	lint: "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  };
  var keywords = [
  	"web see",
  	"web monitor",
  	"web see sdk"
  ];
  var author = "websee";
  var license = "ISC";
  var dependencies = {
  	"@changesets/cli": "^2.26.1",
  	"core-js": "^3.19.1",
  	"error-stack-parser": "^2.1.4",
  	"js-base64": "^3.7.3",
  	"path-to-regexp": "^6.2.0",
  	rrweb: "^1.1.3",
  	tslib: "^2.4.1",
  	"ua-parser-js": "^1.0.32",
  	"web-vitals": "^3.1.0"
  };
  var devDependencies = {
  	"@commitlint/cli": "^17.3.0",
  	"@commitlint/config-conventional": "^17.3.0",
  	"@rollup/plugin-commonjs": "^23.0.3",
  	"@rollup/plugin-json": "^5.0.2",
  	"@rollup/plugin-node-resolve": "^15.0.1",
  	"@typescript-eslint/eslint-plugin": "^5.46.1",
  	"@typescript-eslint/parser": "^5.46.1",
  	commitizen: "^4.2.6",
  	"cz-conventional-changelog": "^3.3.0",
  	eslint: "^8.29.0",
  	"eslint-plugin-prettier": "^4.2.1",
  	husky: "^8.0.2",
  	"lint-staged": "^13.1.0",
  	prettier: "^2.8.0",
  	rollup: "^2.78.0",
  	"rollup-plugin-dts": "^5.0.0",
  	"rollup-plugin-typescript2": "^0.34.1",
  	"rollup-plugin-uglify": "^6.0.4",
  	"ts-loader": "^9.4.2",
  	typescript: "^4.9.4"
  };
  var repository = {
  	type: "git",
  	url: "git@github.com:xy-sea/web-see.git"
  };
  var config = {
  	commitizen: {
  		path: "./node_modules/cz-conventional-changelog"
  	}
  };
  var version$1 = {
  	name: name,
  	version: version,
  	"private": true,
  	description: description,
  	main: main,
  	module: module,
  	scripts: scripts,
  	keywords: keywords,
  	author: author,
  	license: license,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	"lint-staged": {
  	"**/*.{ts,tsx,json}": [
  		"prettier --write",
  		"eslint --fix"
  	]
  },
  	repository: repository,
  	config: config
  };

  var SDK_NAME = 'web-see';
  var SDK_VERSION = version$1.version;

  /**
   * 接口错误状态
   */
  exports.SpanStatus = void 0;
  (function (SpanStatus) {
      SpanStatus["Ok"] = "ok";
      SpanStatus["DeadlineExceeded"] = "deadline_exceeded";
      SpanStatus["Unauthenticated"] = "unauthenticated";
      SpanStatus["PermissionDenied"] = "permission_denied";
      SpanStatus["NotFound"] = "not_found";
      SpanStatus["ResourceExhausted"] = "resource_exhausted";
      SpanStatus["InvalidArgument"] = "invalid_argument";
      SpanStatus["Unimplemented"] = "unimplemented";
      SpanStatus["Unavailable"] = "unavailable";
      SpanStatus["InternalError"] = "internal_error";
      SpanStatus["UnknownError"] = "unknown_error";
      SpanStatus["Cancelled"] = "cancelled";
      SpanStatus["AlreadyExists"] = "already_exists";
      SpanStatus["FailedPrecondition"] = "failed_precondition";
      SpanStatus["Aborted"] = "aborted";
      SpanStatus["OutOfRange"] = "out_of_range";
      SpanStatus["DataLoss"] = "data_loss";
  })(exports.SpanStatus || (exports.SpanStatus = {}));
  /**
   * 用户行为
   */
  exports.BREADCRUMBTYPES = void 0;
  (function (BREADCRUMBTYPES) {
      BREADCRUMBTYPES["HTTP"] = "Http";
      BREADCRUMBTYPES["CLICK"] = "Click";
      BREADCRUMBTYPES["RESOURCE"] = "Resource_Error";
      BREADCRUMBTYPES["CODEERROR"] = "Code_Error";
      BREADCRUMBTYPES["ROUTE"] = "Route";
      BREADCRUMBTYPES["CUSTOM"] = "Custom";
  })(exports.BREADCRUMBTYPES || (exports.BREADCRUMBTYPES = {}));
  /**
   * 状态
   */
  exports.STATUS_CODE = void 0;
  (function (STATUS_CODE) {
      STATUS_CODE["ERROR"] = "error";
      STATUS_CODE["OK"] = "ok";
  })(exports.STATUS_CODE || (exports.STATUS_CODE = {}));
  /**
   * 事件类型
   */
  exports.EVENTTYPES = void 0;
  (function (EVENTTYPES) {
      EVENTTYPES["XHR"] = "xhr";
      EVENTTYPES["FETCH"] = "fetch";
      EVENTTYPES["CLICK"] = "click";
      EVENTTYPES["HISTORY"] = "history";
      EVENTTYPES["ERROR"] = "error";
      EVENTTYPES["HASHCHANGE"] = "hashchange";
      EVENTTYPES["UNHANDLEDREJECTION"] = "unhandledrejection";
      EVENTTYPES["RESOURCE"] = "resource";
      EVENTTYPES["DOM"] = "dom";
      EVENTTYPES["VUE"] = "vue";
      EVENTTYPES["REACT"] = "react";
      EVENTTYPES["CUSTOM"] = "custom";
      EVENTTYPES["PERFORMANCE"] = "performance";
      EVENTTYPES["RECORDSCREEN"] = "recordScreen";
      EVENTTYPES["WHITESCREEN"] = "whiteScreen";
  })(exports.EVENTTYPES || (exports.EVENTTYPES = {}));
  exports.HTTPTYPE = void 0;
  (function (HTTPTYPE) {
      HTTPTYPE["XHR"] = "xhr";
      HTTPTYPE["FETCH"] = "fetch";
  })(exports.HTTPTYPE || (exports.HTTPTYPE = {}));
  exports.HTTP_CODE = void 0;
  (function (HTTP_CODE) {
      HTTP_CODE[HTTP_CODE["BAD_REQUEST"] = 400] = "BAD_REQUEST";
      HTTP_CODE[HTTP_CODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  })(exports.HTTP_CODE || (exports.HTTP_CODE = {}));
  exports.EMethods = void 0;
  (function (EMethods) {
      EMethods["Get"] = "GET";
      EMethods["Post"] = "POST";
      EMethods["Put"] = "PUT";
      EMethods["Delete"] = "DELETE";
  })(exports.EMethods || (exports.EMethods = {}));

  exports.SDK_NAME = SDK_NAME;
  exports.SDK_VERSION = SDK_VERSION;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
