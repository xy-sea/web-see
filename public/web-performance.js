/* @zyf2e/monitor-web-performance version ' + 2.1.54 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var check = function (it) {
  return it && it.Math == Math && it;
};
var global_1 =
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var functionBindNative = !fails(function () {
  var test = (function () {  }).bind();
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var call$1 = Function.prototype.call;
var functionCall = functionBindNative ? call$1.bind(call$1) : function () {
  return call$1.apply(call$1, arguments);
};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;
var objectPropertyIsEnumerable = {
	f: f$5
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var FunctionPrototype$1 = Function.prototype;
var call = FunctionPrototype$1.call;
var uncurryThisWithBind = functionBindNative && FunctionPrototype$1.bind.bind(call, call);
var functionUncurryThisRaw = functionBindNative ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

var toString$1 = functionUncurryThisRaw({}.toString);
var stringSlice = functionUncurryThisRaw(''.slice);
var classofRaw = function (it) {
  return stringSlice(toString$1(it), 8, -1);
};

var functionUncurryThis = function (fn) {
  if (classofRaw(fn) === 'Function') return functionUncurryThisRaw(fn);
};

var $Object$2 = Object;
var split = functionUncurryThis(''.split);
var indexedObject = fails(function () {
  return !$Object$2('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split(it, '') : $Object$2(it);
} : $Object$2;

var isNullOrUndefined = function (it) {
  return it === null || it === undefined;
};

var $TypeError$5 = TypeError;
var requireObjectCoercible = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError$5("Can't call method on " + it);
  return it;
};

var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var documentAll$2 = typeof document == 'object' && document.all;
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var documentAll$1 = documentAll_1.all;
var isCallable = documentAll_1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var documentAll = documentAll_1.all;
var isObject = documentAll_1.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};
var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
};

var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var Deno = global_1.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var engineV8Version = version;

var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    !Symbol.sham && engineV8Version && engineV8Version < 41;
});

var useSymbolAsUid = symbolConstructorDetection
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var $Object$1 = Object;
var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$1(it));
};

var $String$1 = String;
var tryToString = function (argument) {
  try {
    return $String$1(argument);
  } catch (error) {
    return 'Object';
  }
};

var $TypeError$4 = TypeError;
var aCallable = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError$4(tryToString(argument) + ' is not a function');
};

var getMethod = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

var $TypeError$3 = TypeError;
var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
  throw $TypeError$3("Can't convert object to primitive value");
};

var defineProperty$1 = Object.defineProperty;
var defineGlobalProperty = function (key, value) {
  try {
    defineProperty$1(global_1, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global_1[SHARED] || defineGlobalProperty(SHARED, {});
var sharedStore = store$1;

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.26.0',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});
});

var $Object = Object;
var toObject = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

var id = 0;
var postfix = Math.random();
var toString = functionUncurryThis(1.0.toString);
var uid = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
var wellKnownSymbol = function (name) {
  if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(symbolConstructorDetection || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (symbolConstructorDetection && hasOwnProperty_1(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (useSymbolAsUid && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var $TypeError$2 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var toPrimitive = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = functionCall(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError$2("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var document$1 = global_1.document;
var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);
var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var f$4 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {  }
  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
};
var objectGetOwnPropertyDescriptor = {
	f: f$4
};

var v8PrototypeDefineBug = descriptors && fails(function () {
  return Object.defineProperty(function () {  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var $String = String;
var $TypeError$1 = TypeError;
var anObject = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError$1($String(argument) + ' is not an object');
};

var $TypeError = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';
var f$3 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {  }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var objectDefineProperty = {
	f: f$3
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var FunctionPrototype = Function.prototype;
var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwnProperty_1(FunctionPrototype, 'name');
var PROPER = EXISTS && (function something() {  }).name === 'something';
var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var functionToString = functionUncurryThis(Function.toString);
if (!isCallable(sharedStore.inspectSource)) {
  sharedStore.inspectSource = function (it) {
    return functionToString(it);
  };
}
var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;
var weakMapBasicDetection = isCallable(WeakMap$1) && /native code/.test(String(WeakMap$1));

var keys = shared('keys');
var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$1 = {};

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global_1.TypeError;
var WeakMap = global_1.WeakMap;
var set, get, has;
var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};
var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};
if (weakMapBasicDetection || sharedStore.state) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    if (hasOwnProperty_1(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwnProperty_1(it, STATE);
  };
}
var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var makeBuiltIn_1 = createCommonjsModule(function (module) {
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var enforceInternalState = internalState.enforce;
var getInternalState = internalState.get;
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = descriptors && !fails(function () {
  return defineProperty(function () {  }, 'length', { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (descriptors) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwnProperty_1(options, 'constructor') && options.constructor) {
      if (descriptors) defineProperty(value, 'prototype', { writable: false });
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) {  }
  var state = enforceInternalState(value);
  if (!hasOwnProperty_1(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');
});

var defineBuiltIn = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn_1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) {  }
    if (simple) O[key] = value;
    else objectDefineProperty.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var ceil = Math.ceil;
var floor = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var toIntegerOrInfinity = function (argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : mathTrunc(number);
};

var max = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var min = Math.min;
var toLength = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0;
};

var lengthOfArrayLike = function (obj) {
  return toLength(obj.length);
};

var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  includes: createMethod$1(true),
  indexOf: createMethod$1(false)
};

var indexOf = arrayIncludes.indexOf;
var push$1 = functionUncurryThis([].push);
var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$1(result, key);
  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
    ~indexOf(result, key) || push$1(result, key);
  }
  return result;
};

var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys = enumBugKeys.concat('length', 'prototype');
var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};
var objectGetOwnPropertyNames = {
	f: f$2
};

var f$1 = Object.getOwnPropertySymbols;
var objectGetOwnPropertySymbols = {
	f: f$1
};

var concat = functionUncurryThis([].concat);
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var replacement = /#|\.prototype\./;
var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};
var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
var isForced_1 = isForced;

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

var f = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
  return O;
};
var objectDefineProperties = {
	f: f
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function () {  };
var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null;
  return temp;
};
var NullProtoObjectViaIFrame = function () {
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {  }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument)
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys$1[IE_PROTO] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
};

var defineProperty = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $includes = arrayIncludes.includes;
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});
_export({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});
addToUnscopables('includes');

var entryUnbind = function (CONSTRUCTOR, METHOD) {
  return functionUncurryThis(global_1[CONSTRUCTOR].prototype[METHOD]);
};

entryUnbind('Array', 'includes');

var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
var propertyIsEnumerable = functionUncurryThis($propertyIsEnumerable);
var push = functionUncurryThis([].push);
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!descriptors || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};
var objectToArray = {
  entries: createMethod(true),
  values: createMethod(false)
};

var $values = objectToArray.values;
_export({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});

var path = global_1;

path.Object.values;

var generateUniqueID = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                (code >= 48 && code <= 57) ||
                    (code >= 65 && code <= 90) ||
                    (code >= 97 && code <= 122) ||
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                    }
                    else {
                        route += "(".concat(token.pattern, ")").concat(token.modifier);
                    }
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

var roundByFour = function (num, digits) {
    if (digits === void 0) { digits = 4; }
    try {
        return parseFloat(num.toFixed(digits));
    }
    catch (err) {
        return num;
    }
};
var convertToMB = function (bytes) {
    if (typeof bytes !== 'number') {
        return null;
    }
    return roundByFour(bytes / Math.pow(1024, 2));
};
var afterLoad = function (callback) {
    if (document.readyState === 'complete') {
        setTimeout(callback);
    }
    else {
        addEventListener('pageshow', callback);
    }
};
var beforeUnload = function (callback) {
    window.addEventListener('beforeunload', callback);
};
var unload = function (callback) {
    window.addEventListener('unload', callback);
};
var validNumber = function (nums) {
    if (Array.isArray(nums)) {
        return nums.every(function (n) { return n >= 0; });
    }
    else {
        return nums >= 0;
    }
};
var isIncludeArr = function (arr1, arr2) {
    if (!arr1 || arr1.length === 0) {
        return false;
    }
    if (!arr2 || arr2.length === 0) {
        return false;
    }
    if (arr1.length > arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (!(arr2 === null || arr2 === void 0 ? void 0 : arr2.includes(arr1[i]))) {
            return false;
        }
    }
    return true;
};
var isEqualArr = function (arr1, arr2) {
    if (!arr1 || arr1.length === 0) {
        return false;
    }
    if (!arr2 || arr2.length === 0) {
        return false;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    var sortArr1 = arr1.sort();
    var sortArr2 = arr2.sort();
    return sortArr1.join() === sortArr2.join();
};
var getApiPath = function (url) {
    var _a;
    var reg = /(?:http(?:s|):\/\/[^\/\s]+|)([^#?]+).*/;
    if (url) {
        return (_a = url.match(reg)) === null || _a === void 0 ? void 0 : _a[1];
    }
    return '';
};
var isExistPath = function (paths, target) {
    var regArr = paths.map(function (path) { return pathToRegexp(path); });
    for (var i = 0; i < regArr.length; i++) {
        if (regArr[i].exec(target)) {
            return true;
        }
    }
    return false;
};

var onHidden = function (cb, once) {
    var onHiddenOrPageHide = function (event) {
        if (event.type === 'pagehide' || document.visibilityState === 'hidden') {
            cb(event);
            if (once) {
                removeEventListener('visibilitychange', onHiddenOrPageHide, true);
                removeEventListener('pagehide', onHiddenOrPageHide, true);
            }
        }
    };
    addEventListener('visibilitychange', onHiddenOrPageHide, true);
    addEventListener('pagehide', onHiddenOrPageHide, true);
};

var createReporter = function (sessionId, appId, version, callback) {
    return function (data) {
        var reportData = {
            sessionId: sessionId,
            appId: appId,
            version: version,
            data: data,
            timestamp: +new Date()
        };
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(function () {
                callback(reportData);
            }, { timeout: 3000 });
        }
        else {
            callback(reportData);
        }
    };
};

var metricsStore$1 = (function () {
    function metricsStore() {
        this.state = new Map();
    }
    metricsStore.prototype.set = function (key, value) {
        this.state.set(key, value);
    };
    metricsStore.prototype.get = function (key) {
        return this.state.get(key);
    };
    metricsStore.prototype.has = function (key) {
        return this.state.has(key);
    };
    metricsStore.prototype.clear = function () {
        this.state.clear();
    };
    metricsStore.prototype.getValues = function () {
        return Array.from(this.state).reduce(function (obj, _a) {
            var key = _a[0], value = _a[1];
            obj[key] = value;
            return obj;
        }, {});
    };
    return metricsStore;
}());

var isPerformanceSupported = function () {
    return !!window.performance && !!window.performance.getEntriesByType && !!window.performance.mark;
};
var isPerformanceObserverSupported = function () {
    return !!window.PerformanceObserver;
};
var isNavigatorSupported = function () {
    return !!window.navigator;
};

var measure = function (customMetrics, markName) {
    if (!isPerformanceSupported()) {
        console.error('browser do not support performance');
        return;
    }
    performance.measure(customMetrics, markName + "_start", markName + "_end");
    return performance.getEntriesByName(customMetrics).pop();
};

var hasMark = function (markName) {
    if (!isPerformanceSupported()) {
        console.error('browser do not support performance');
        return;
    }
    return performance.getEntriesByName(markName).length > 0;
};
var getMark = function (markName) {
    if (!isPerformanceSupported()) {
        console.error('browser do not support performance');
        return;
    }
    return performance.getEntriesByName(markName).pop();
};
var setMark = function (markName) {
    if (!isPerformanceSupported()) {
        console.error('browser do not support performance');
        return;
    }
    performance.mark(markName);
};
var clearMark = function (markName) {
    if (!isPerformanceSupported()) {
        return;
    }
    performance.clearMarks(markName);
};

var metricsName;
(function (metricsName) {
    metricsName["NT"] = "navigation-timing";
    metricsName["FP"] = "first-paint";
    metricsName["FCP"] = "first-contentful-paint";
    metricsName["LCP"] = "largest-contentful-paint";
    metricsName["CCP"] = "custom-contentful-paint";
    metricsName["FID"] = "first-input-delay";
    metricsName["RL"] = "resource-flow";
    metricsName["CLS"] = "cumulative-layout-shift";
    metricsName["FPS"] = "fps";
    metricsName["ACT"] = "api-complete-time";
    metricsName["DI"] = "device-information";
    metricsName["NI"] = "network-information";
    metricsName["PI"] = "page-information";
})(metricsName || (metricsName = {}));

var observe = function (type, callback) {
    var _a;
    try {
        if ((_a = PerformanceObserver.supportedEntryTypes) === null || _a === void 0 ? void 0 : _a.includes(type)) {
            var po = new PerformanceObserver(function (l) { return l.getEntries().map(callback); });
            po.observe({ type: type, buffered: true });
            return po;
        }
    }
    catch (e) {
        throw e;
    }
};

var getNavigationTiming = function () {
    if (!isPerformanceSupported()) {
        console.warn('browser do not support performance');
        return;
    }
    var resolveNavigationTiming = function (entry, resolve) {
        var domainLookupStart = entry.domainLookupStart, domainLookupEnd = entry.domainLookupEnd, connectStart = entry.connectStart, connectEnd = entry.connectEnd, secureConnectionStart = entry.secureConnectionStart, requestStart = entry.requestStart, responseStart = entry.responseStart, responseEnd = entry.responseEnd, domInteractive = entry.domInteractive, domContentLoadedEventStart = entry.domContentLoadedEventStart, domContentLoadedEventEnd = entry.domContentLoadedEventEnd, loadEventStart = entry.loadEventStart, fetchStart = entry.fetchStart;
        resolve({
            dnsLookup: roundByFour(domainLookupEnd - domainLookupStart),
            initialConnection: roundByFour(connectEnd - connectStart),
            ssl: secureConnectionStart ? roundByFour(connectEnd - secureConnectionStart) : 0,
            ttfb: roundByFour(responseStart - requestStart),
            contentDownload: roundByFour(responseEnd - responseStart),
            domParse: roundByFour(domInteractive - responseEnd),
            deferExecuteDuration: roundByFour(domContentLoadedEventStart - domInteractive),
            domContentLoadedCallback: roundByFour(domContentLoadedEventEnd - domContentLoadedEventStart),
            resourceLoad: roundByFour(loadEventStart - domContentLoadedEventEnd),
            domReady: roundByFour(domContentLoadedEventEnd - fetchStart),
            pageLoad: roundByFour(loadEventStart - fetchStart)
        });
    };
    return new Promise(function (resolve) {
        var _a;
        if (isPerformanceObserverSupported() && ((_a = PerformanceObserver.supportedEntryTypes) === null || _a === void 0 ? void 0 : _a.includes('navigation'))) {
            var entryHandler = function (entry) {
                if (entry.entryType === 'navigation') {
                    if (po_1) {
                        po_1.disconnect();
                    }
                    resolveNavigationTiming(entry, resolve);
                }
            };
            var po_1 = observe('navigation', entryHandler);
        }
        else {
            var navigation = performance.getEntriesByType('navigation').length > 0 ? performance.getEntriesByType('navigation')[0] : performance.timing;
            resolveNavigationTiming(navigation, resolve);
        }
    });
};
var initNavigationTiming = function (store, report, immediately) {
    var _a;
    if (immediately === void 0) { immediately = true; }
    (_a = getNavigationTiming()) === null || _a === void 0 ? void 0 : _a.then(function (navigationTiming) {
        var metrics = { name: metricsName.NT, value: navigationTiming };
        if (validNumber(Object === null || Object === void 0 ? void 0 : Object.values(metrics.value))) {
            store.set(metricsName.NT, metrics);
            if (immediately) {
                report(metrics);
            }
        }
    });
};

var getDeviceInfo = function () {
    if (!isPerformanceSupported()) {
        console.warn('browser do not support performance');
        return;
    }
    if (!isNavigatorSupported()) {
        console.warn('browser do not support navigator');
        return;
    }
    return {
        deviceMemory: 'deviceMemory' in navigator ? navigator['deviceMemory'] : 0,
        hardwareConcurrency: 'hardwareConcurrency' in navigator ? navigator['hardwareConcurrency'] : 0,
        jsHeapSizeLimit: 'memory' in performance ? convertToMB(performance['memory']['jsHeapSizeLimit']) : 0,
        totalJSHeapSize: 'memory' in performance ? convertToMB(performance['memory']['totalJSHeapSize']) : 0,
        usedJSHeapSize: 'memory' in performance ? convertToMB(performance['memory']['usedJSHeapSize']) : 0
    };
};
var initDeviceInfo = function (store, report, immediately) {
    if (immediately === void 0) { immediately = true; }
    var deviceInfo = getDeviceInfo();
    var metrics = { name: metricsName.DI, value: deviceInfo };
    store.set(metricsName.DI, metrics);
    if (immediately) {
        report(metrics);
    }
};

var getNetworkInfo = function () {
    if (!isNavigatorSupported()) {
        console.warn('browser do not support performance');
        return;
    }
    var connection = ('connection' in navigator ? navigator['connection'] : {});
    var downlink = connection.downlink, effectiveType = connection.effectiveType, rtt = connection.rtt;
    return {
        downlink: downlink,
        effectiveType: effectiveType,
        rtt: rtt
    };
};
var initNetworkInfo = function (store, report, immediately) {
    if (immediately === void 0) { immediately = true; }
    var networkInfo = getNetworkInfo();
    var metrics = { name: metricsName.NI, value: networkInfo };
    store.set(metricsName.NI, metrics);
    if (immediately) {
        report(metrics);
    }
};

var getPageInfo = function () {
    if (!location) {
        console.warn('browser do not support location');
        return;
    }
    var host = location.host, hostname = location.hostname, href = location.href, protocol = location.protocol, origin = location.origin, port = location.port, pathname = location.pathname, search = location.search, hash = location.hash;
    var _a = window.screen, width = _a.width, height = _a.height;
    return {
        host: host,
        hostname: hostname,
        href: href,
        protocol: protocol,
        origin: origin,
        port: port,
        pathname: pathname,
        search: search,
        hash: hash,
        userAgent: 'userAgent' in navigator ? navigator.userAgent : '',
        screenResolution: width + "x" + height
    };
};
var initPageInfo = function (store, report, immediately) {
    if (immediately === void 0) { immediately = true; }
    var pageInfo = getPageInfo();
    var metrics = { name: metricsName.PI, value: pageInfo };
    store.set(metricsName.PI, metrics);
    if (immediately) {
        report(metrics);
    }
};

var firstHiddenTime = document.visibilityState === 'hidden' ? 0 : Infinity;
var getFirstHiddenTime = function () {
    onHidden(function (e) {
        firstHiddenTime = Math.min(firstHiddenTime, e.timeStamp);
    }, true);
    return {
        get timeStamp() {
            return firstHiddenTime;
        }
    };
};

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function internalErf_(x) {
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    var a1 = 0.254829592;
    var a2 = -0.284496736;
    var a3 = 1.421413741;
    var a4 = -1.453152027;
    var a5 = 1.061405429;
    var p = 0.3275911;
    var t = 1 / (1 + p * x);
    var y = t * (a1 + t * (a2 + t * (a3 + t * (a4 + t * a5))));
    return sign * (1 - y * Math.exp(-x * x));
}
function QUANTILE_AT_VALUE(curve, value) {
    var podr = curve.podr, median = curve.median, p10 = curve.p10;
    var _podr = podr;
    if (!podr) {
        _podr = derivePodrFromP10(median, p10);
    }
    var location = Math.log(median);
    var logRatio = Math.log(_podr / median);
    var shape = Math.sqrt(1 - 3 * logRatio - Math.sqrt((logRatio - 3) * (logRatio - 3) - 8)) / 2;
    var standardizedX = (Math.log(value) - location) / (Math.SQRT2 * shape);
    return (1 - internalErf_(standardizedX)) / 2;
}
function derivePodrFromP10(median, p10) {
    var u = Math.log(median);
    var shape = Math.abs(Math.log(p10) - u) / (Math.SQRT2 * 0.9061938024368232);
    var inner1 = -3 * shape - Math.sqrt(4 + shape * shape);
    return Math.exp(u + (shape / 2) * inner1);
}

var _a;
var config = (_a = {},
    _a[metricsName.FP] = {
        median: 3000,
        p10: 1800
    },
    _a[metricsName.FCP] = {
        median: 3000,
        p10: 1800
    },
    _a[metricsName.ACT] = {
        median: 3500,
        p10: 2300
    },
    _a[metricsName.LCP] = {
        median: 4000,
        p10: 2500
    },
    _a[metricsName.CCP] = {
        median: 4000,
        p10: 2500
    },
    _a[metricsName.FID] = {
        median: 300,
        p10: 100
    },
    _a[metricsName.CLS] = {
        median: 0.25,
        p10: 0.1
    },
    _a);

var calcScore = function (metricsName, value, config$1) {
    if (config$1 === void 0) { config$1 = {}; }
    var mergeConfig = __assign(__assign({}, config), config$1);
    var metricsConfig = mergeConfig[metricsName];
    if (metricsConfig) {
        return QUANTILE_AT_VALUE(metricsConfig, value);
    }
    return null;
};

var getFP = function () {
    return new Promise(function (resolve, reject) {
        if (!isPerformanceObserverSupported()) {
            if (!isPerformanceSupported()) {
                reject(new Error('browser do not support performance'));
            }
            else {
                var entry = performance.getEntriesByName('first-paint')[0];
                if (entry) {
                    resolve(entry);
                }
                reject(new Error('browser has no fp'));
            }
        }
        else {
            var entryHandler = function (entry) {
                if (entry.name === 'first-paint') {
                    if (po_1) {
                        po_1.disconnect();
                    }
                    if (entry.startTime < getFirstHiddenTime().timeStamp) {
                        resolve(entry);
                    }
                }
            };
            var po_1 = observe('paint', entryHandler);
        }
    });
};
var initFP = function (store, report, immediately, scoreConfig) {
    var _a;
    if (immediately === void 0) { immediately = true; }
    (_a = getFP()) === null || _a === void 0 ? void 0 : _a.then(function (entry) {
        var metrics = {
            name: metricsName.FP,
            value: roundByFour(entry.startTime, 2),
            score: calcScore(metricsName.FP, entry.startTime, scoreConfig)
        };
        store.set(metricsName.FP, metrics);
        if (immediately) {
            report(metrics);
        }
    }).catch(function (error) {
        console.error(error);
    });
};

var getFCP = function () {
    return new Promise(function (resolve, reject) {
        if (!isPerformanceObserverSupported()) {
            if (!isPerformanceSupported()) {
                reject(new Error('browser do not support performance'));
            }
            else {
                var entry = performance.getEntriesByName('first-contentful-paint')[0];
                if (entry) {
                    resolve(entry);
                }
                reject(new Error('browser has no fcp'));
            }
        }
        else {
            var entryHandler = function (entry) {
                if (entry.name === 'first-contentful-paint') {
                    if (po_1) {
                        po_1.disconnect();
                    }
                    if (entry.startTime < getFirstHiddenTime().timeStamp) {
                        resolve(entry);
                    }
                }
            };
            var po_1 = observe('paint', entryHandler);
        }
    });
};
var initFCP = function (store, report, immediately, scoreConfig) {
    var _a;
    if (immediately === void 0) { immediately = true; }
    (_a = getFCP()) === null || _a === void 0 ? void 0 : _a.then(function (entry) {
        var metrics = {
            name: metricsName.FCP,
            value: roundByFour(entry.startTime, 2),
            score: calcScore(metricsName.FCP, entry.startTime, scoreConfig)
        };
        store.set(metricsName.FCP, metrics);
        if (immediately) {
            report(metrics);
        }
    }).catch(function (error) {
        console.error(error);
    });
};

var getFID = function () {
    if (!isPerformanceObserverSupported()) {
        console.warn('browser do not support performanceObserver');
        return;
    }
    var firstHiddenTime = getFirstHiddenTime();
    return new Promise(function (resolve) {
        var eventHandler = function (entry) {
            if (entry.startTime < firstHiddenTime.timeStamp) {
                if (po) {
                    po.disconnect();
                }
                resolve(entry);
            }
        };
        var po = observe('first-input', eventHandler);
        if (po) {
            onHidden(function () {
                if (po === null || po === void 0 ? void 0 : po.takeRecords) {
                    po.takeRecords().map(eventHandler);
                }
                po.disconnect();
            }, true);
        }
    });
};
var initFID = function (store, report, immediately, scoreConfig) {
    var _a;
    if (immediately === void 0) { immediately = true; }
    (_a = getFID()) === null || _a === void 0 ? void 0 : _a.then(function (entry) {
        var _a;
        var metrics = {
            name: metricsName.FID,
            value: {
                eventName: entry.name,
                targetCls: (_a = entry.target) === null || _a === void 0 ? void 0 : _a.className,
                startTime: roundByFour(entry.startTime, 2),
                delay: roundByFour(entry.processingStart - entry.startTime, 2),
                eventHandleTime: roundByFour(entry.processingEnd - entry.processingStart, 2)
            },
            score: calcScore(metricsName.FID, roundByFour(entry.processingStart - entry.startTime, 2), scoreConfig)
        };
        store.set(metricsName.FID, metrics);
        if (immediately) {
            report(metrics);
        }
    });
};

var getLCP = function (lcp) {
    if (!isPerformanceObserverSupported()) {
        console.warn('browser do not support performanceObserver');
        return;
    }
    var firstHiddenTime = getFirstHiddenTime();
    var entryHandler = function (entry) {
        if (entry.startTime < firstHiddenTime.timeStamp) {
            lcp.value = entry;
        }
    };
    return observe('largest-contentful-paint', entryHandler);
};
var initLCP = function (store, report, immediately, scoreConfig) {
    if (immediately === void 0) { immediately = true; }
    var lcp = { value: {} };
    var po = getLCP(lcp);
    var stopListening = function () {
        if (po) {
            if (po.takeRecords) {
                po.takeRecords().forEach(function (entry) {
                    var firstHiddenTime = getFirstHiddenTime();
                    if (entry.startTime < firstHiddenTime.timeStamp) {
                        lcp.value = entry;
                    }
                });
            }
            po.disconnect();
            if (!store.has(metricsName.LCP)) {
                var value = lcp.value;
                var metrics = {
                    name: metricsName.LCP,
                    value: roundByFour(value.startTime, 2),
                    score: calcScore(metricsName.LCP, value.startTime, scoreConfig)
                };
                store.set(metricsName.LCP, metrics);
                if (immediately) {
                    report(metrics);
                }
            }
        }
    };
    onHidden(stopListening, true);
    ['click', 'keydown'].forEach(function (event) {
        addEventListener(event, stopListening, { once: true, capture: true });
    });
};

var calculateFps = function (count) {
    return new Promise(function (resolve) {
        var frame = 0;
        var lastFrameTime = +new Date();
        var fpsQueue = [];
        var timerId = null;
        var calculate = function () {
            var now = +new Date();
            frame = frame + 1;
            if (now > 1000 + lastFrameTime) {
                var fps = Math.round(frame / ((now - lastFrameTime) / 1000));
                fpsQueue.push(fps);
                frame = 0;
                lastFrameTime = +new Date();
                if (fpsQueue.length > count) {
                    cancelAnimationFrame(timerId);
                    resolve(roundByFour(fpsQueue.reduce(function (sum, fps) {
                        sum = sum + fps;
                        return sum;
                    }, 0) / fpsQueue.length, 2));
                }
                else {
                    timerId = requestAnimationFrame(calculate);
                }
            }
            else {
                timerId = requestAnimationFrame(calculate);
            }
        };
        calculate();
    });
};

var getFPS = function (logFpsCount) {
    return calculateFps(logFpsCount);
};
var initFPS = function (store, report, logFpsCount, immediately) {
    if (immediately === void 0) { immediately = true; }
    getFPS(logFpsCount).then(function (fps) {
        var metrics = { name: metricsName.FPS, value: fps };
        store.set(metricsName.FPS, metrics);
        if (immediately) {
            report(metrics);
        }
    });
};

var getCLS = function (cls) {
    if (!isPerformanceObserverSupported()) {
        console.warn('browser do not support performanceObserver');
        return;
    }
    var entryHandler = function (entry) {
        if (!entry.hadRecentInput) {
            cls.value += entry.value;
        }
    };
    return observe('layout-shift', entryHandler);
};
var initCLS = function (store, report, immediately, scoreConfig) {
    if (immediately === void 0) { immediately = true; }
    var cls = { value: 0 };
    var po = getCLS(cls);
    var stopListening = function () {
        if (po === null || po === void 0 ? void 0 : po.takeRecords) {
            po.takeRecords().map(function (entry) {
                if (!entry.hadRecentInput) {
                    cls.value += entry.value;
                }
            });
        }
        po === null || po === void 0 ? void 0 : po.disconnect();
        var metrics = {
            name: metricsName.CLS,
            value: roundByFour(cls.value),
            score: calcScore(metricsName.CLS, cls.value, scoreConfig)
        };
        store.set(metricsName.CLS, metrics);
        if (immediately) {
            report(metrics);
        }
    };
    onHidden(stopListening, true);
};

function proxyXhr(beforeHandler, afterHandler) {
    if ('XMLHttpRequest' in window && !window.__monitor_xhr__) {
        var origin_1 = window.XMLHttpRequest;
        var originOpen_1 = origin_1.prototype.open;
        window.__monitor_xhr__ = true;
        origin_1.prototype.open = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            beforeHandler && beforeHandler(args[1]);
            originOpen_1.apply(this, args);
            this.addEventListener('loadend', function () {
                afterHandler && afterHandler(args[1]);
            });
        };
    }
}
function proxyFetch(beforeHandler, afterHandler) {
    if ('fetch' in window && !window.__monitor_fetch__) {
        var origin_2 = window.fetch;
        window.__monitor_fetch__ = true;
        window.fetch = function (resource, init) {
            beforeHandler && beforeHandler(resource, init);
            return origin_2.call(window, resource, init).then(function (response) {
                afterHandler && afterHandler(resource, init);
                return response;
            }, function (err) {
                throw err;
            });
        };
    }
}
function proxyHistory(handler) {
    if (window.history) {
        var originPushState_1 = history.pushState;
        var originReplaceState_1 = history.replaceState;
        history.pushState = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            handler && handler.apply(void 0, __spreadArrays(args, ['pushState']));
            originPushState_1.apply(window.history, args);
        };
        history.replaceState = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            handler && handler.apply(void 0, __spreadArrays(args, ['replaceState']));
            originReplaceState_1.apply(window.history, args);
        };
    }
}

var unifiedHref = function (href) {
    return decodeURIComponent(href === null || href === void 0 ? void 0 : href.replace((location === null || location === void 0 ? void 0 : location.protocol) + "//" + (location === null || location === void 0 ? void 0 : location.host), ''));
};
var lastHref = unifiedHref(location.href);
var onPageChange = function (cb) {
    window.addEventListener('hashchange', function (e) {
        cb(e);
    });
    window.addEventListener('popstate', function (e) {
        cb(e);
    });
    proxyHistory(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentHref = unifiedHref(args === null || args === void 0 ? void 0 : args[2]);
        if (lastHref !== currentHref) {
            cb();
        }
    });
};

var firstVisitedState = true;
onPageChange(function () {
    firstVisitedState = false;
});
var getFirstVisitedState = function () {
    return {
        get state() {
            return firstVisitedState;
        }
    };
};

var getPath = function (location, isHash) {
    if (!isHash) {
        return location.pathname.replace(/\/$/, '');
    }
    else {
        var index = location.href.indexOf('#');
        if (index < 0)
            return '';
        var hash = location.href.slice(index + 1);
        var searchIndex = hash.indexOf('?');
        if (searchIndex < 0)
            return hash;
        return hash.slice(0, searchIndex);
    }
};

var remoteQueue = {
    hasStoreMetrics: false,
    queue: []
};
var completeQueue = [];
var isDone = false;
var reportLock = true;
var storeMetrics = function (name, value, store, scoreConfig) {
    var score;
    var metrics;
    if (name === metricsName.ACT) {
        score = calcScore(name, value.time, scoreConfig);
        metrics = { name: name, value: value, score: score };
    }
    else if (name === metricsName.CCP) {
        score = calcScore(name, value, scoreConfig);
        metrics = { name: name, value: value, score: score };
    }
    else {
        metrics = { name: name, value: value };
    }
    store.set(name, metrics);
};
var computeCCPAndRL = function (store, scoreConfig) {
    setTimeout(function () {
        var images = Array.from(document.querySelectorAll('img')).filter(function (image) {
            return !image.complete && image.src;
        });
        if (images.length > 0) {
            var loadImages_1 = 0;
            images.forEach(function (image) {
                image.addEventListener('load', function () {
                    loadImages_1 += 1;
                    if (loadImages_1 === images.length) {
                        storeMetrics(metricsName.CCP, performance.now(), store, scoreConfig);
                        storeMetrics(metricsName.RL, performance.getEntriesByType('resource'), store, scoreConfig);
                    }
                });
                image.addEventListener('error', function () {
                    loadImages_1 += 1;
                    if (loadImages_1 === images.length) {
                        storeMetrics(metricsName.CCP, performance.now(), store, scoreConfig);
                        storeMetrics(metricsName.RL, performance.getEntriesByType('resource'), store, scoreConfig);
                    }
                });
            });
        }
        else {
            storeMetrics(metricsName.CCP, performance.now(), store, scoreConfig);
            storeMetrics(metricsName.RL, performance.getEntriesByType('resource'), store, scoreConfig);
        }
    });
};
var beforeHandler = function (url, apiConfig, hashHistory, excludeRemotePath) {
    if (isPerformanceSupported()) {
        var path = getPath(location, hashHistory);
        var firstVisitedState = getFirstVisitedState().state;
        if (firstVisitedState) {
            var remotePath_1 = getApiPath(url);
            if (!isExistPath(excludeRemotePath, remotePath_1)) {
                if (apiConfig && apiConfig[path]) {
                    if (apiConfig[path].some(function (o) { return remotePath_1 === o; })) {
                        remoteQueue.queue.push(remotePath_1);
                    }
                }
                else {
                    if (!isDone) {
                        remoteQueue.queue.push(remotePath_1);
                    }
                }
            }
        }
    }
    else {
        console.warn('browser do not support performance');
    }
};
var afterHandler = function (url, apiConfig, store, hashHistory, excludeRemotePath, scoreConfig) {
    if (isPerformanceSupported()) {
        var path = getPath(location, hashHistory);
        var firstVisitedState = getFirstVisitedState().state;
        if (firstVisitedState) {
            var remotePath = getApiPath(url);
            if (!isExistPath(excludeRemotePath, remotePath)) {
                completeQueue.push(remotePath);
                if (apiConfig && apiConfig[path]) {
                    if (isIncludeArr(remoteQueue.queue, completeQueue) && !remoteQueue.hasStoreMetrics) {
                        console.log('api list = ', remoteQueue.queue);
                        remoteQueue.hasStoreMetrics = true;
                        var now = performance.now();
                        if (now < getFirstHiddenTime().timeStamp) {
                            storeMetrics(metricsName.ACT, { time: now, remoteApis: remoteQueue.queue }, store, scoreConfig);
                            computeCCPAndRL(store, scoreConfig);
                        }
                    }
                }
                else {
                    if (isIncludeArr(remoteQueue.queue, completeQueue) && !remoteQueue.hasStoreMetrics && isDone) {
                        console.log('api list = ', remoteQueue.queue);
                        remoteQueue.hasStoreMetrics = true;
                        var now = performance.now();
                        if (now < getFirstHiddenTime().timeStamp) {
                            storeMetrics(metricsName.ACT, { time: now, remoteApis: remoteQueue.queue }, store, scoreConfig);
                            computeCCPAndRL(store, scoreConfig);
                        }
                    }
                }
            }
        }
    }
    else {
        console.warn('browser do not support performance');
    }
};
var reportMetrics = function (store, report) {
    if (reportLock) {
        var act = store.get(metricsName.ACT);
        var ccp = store.get(metricsName.CCP);
        var rl = store.get(metricsName.RL);
        if (act && ccp) {
            if (act.value.time < ccp.value) {
                report(act);
                report(ccp);
                if (rl) {
                    report(rl);
                }
            }
        }
        if (!act && ccp) {
            report(ccp);
            if (rl) {
                report(rl);
            }
        }
        reportLock = false;
    }
};
var maxWaitTime4Report = function (cb, maxWaitCCPDuration) {
    setTimeout(cb, maxWaitCCPDuration);
};
var initCCP = function (store, report, isCustomEvent, apiConfig, hashHistory, excludeRemotePath, maxWaitCCPDuration, immediately, scoreConfig) {
    var event = isCustomEvent ? 'custom-contentful-paint' : 'pageshow';
    addEventListener(event, function () {
        var firstVisitedState = getFirstVisitedState().state;
        if (firstVisitedState) {
            isDone = true;
            if (isPerformanceSupported()) {
                var now = performance.now();
                if (now < getFirstHiddenTime().timeStamp) {
                    if (isEqualArr(remoteQueue.queue, completeQueue) && !remoteQueue.hasStoreMetrics) {
                        console.log('api list = ', remoteQueue.queue);
                        remoteQueue.hasStoreMetrics = true;
                        storeMetrics(metricsName.ACT, { time: performance.now(), remoteApis: remoteQueue.queue }, store, scoreConfig);
                    }
                    computeCCPAndRL(store, scoreConfig);
                }
            }
        }
    }, { once: true, capture: true });
    if (immediately) {
        beforeUnload(function () { return reportMetrics(store, report); });
        onHidden(function () { return reportMetrics(store, report); }, true);
        onPageChange(function () { return reportMetrics(store, report); });
        maxWaitTime4Report(function () { return reportMetrics(store, report); }, maxWaitCCPDuration);
    }
    proxyXhr(function (url) { return beforeHandler(url, apiConfig, hashHistory, excludeRemotePath); }, function (url) { return afterHandler(url, apiConfig, store, hashHistory, excludeRemotePath, scoreConfig); });
    proxyFetch(function (url) { return beforeHandler(url, apiConfig, hashHistory, excludeRemotePath); }, function (url) { return afterHandler(url, apiConfig, store, hashHistory, excludeRemotePath, scoreConfig); });
};

var metricsStore;
var reporter;
var WebVitals = (function () {
    function WebVitals(config) {
        var _this = this;
        var appId = config.appId, version = config.version, reportCallback = config.reportCallback, _a = config.immediately, immediately = _a === void 0 ? false : _a, _b = config.isCustomEvent, isCustomEvent = _b === void 0 ? false : _b, _c = config.logFpsCount, logFpsCount = _c === void 0 ? 5 : _c, _d = config.apiConfig, apiConfig = _d === void 0 ? {} : _d, _e = config.hashHistory, hashHistory = _e === void 0 ? true : _e, _f = config.excludeRemotePath, excludeRemotePath = _f === void 0 ? [] : _f, _g = config.maxWaitCCPDuration, maxWaitCCPDuration = _g === void 0 ? 30 * 1000 : _g, _h = config.scoreConfig, scoreConfig = _h === void 0 ? {} : _h;
        this.immediately = immediately;
        var sessionId = generateUniqueID();
        window.__monitor_sessionId__ = sessionId;
        reporter = createReporter(sessionId, appId, version, reportCallback);
        metricsStore = new metricsStore$1();
        initPageInfo(metricsStore, reporter, immediately);
        initNetworkInfo(metricsStore, reporter, immediately);
        initDeviceInfo(metricsStore, reporter, immediately);
        initCLS(metricsStore, reporter, immediately, scoreConfig);
        initLCP(metricsStore, reporter, immediately, scoreConfig);
        initCCP(metricsStore, reporter, isCustomEvent, apiConfig, hashHistory, excludeRemotePath, maxWaitCCPDuration, immediately, scoreConfig);
        addEventListener(isCustomEvent ? 'custom-contentful-paint' : 'pageshow', function () {
            initFP(metricsStore, reporter, immediately, scoreConfig);
            initFCP(metricsStore, reporter, immediately, scoreConfig);
        }, { once: true, capture: true });
        afterLoad(function () {
            initNavigationTiming(metricsStore, reporter, immediately);
            initFID(metricsStore, reporter, immediately, scoreConfig);
            initFPS(metricsStore, reporter, logFpsCount, immediately);
        });
        [beforeUnload, unload, onHidden].forEach(function (fn) {
            fn(function () {
                var metrics = _this.getCurrentMetrics();
                if (Object.keys(metrics).length > 0 && !immediately) {
                    reporter(metrics);
                }
            });
        });
    }
    WebVitals.prototype.getCurrentMetrics = function () {
        return metricsStore.getValues();
    };
    WebVitals.dispatchCustomEvent = function () {
        var event = document.createEvent('Events');
        event.initEvent('custom-contentful-paint', false, true);
        document.dispatchEvent(event);
    };
    WebVitals.prototype.setStartMark = function (markName) {
        setMark(markName + "_start");
    };
    WebVitals.prototype.setEndMark = function (markName) {
        var _a;
        setMark(markName + "_end");
        if (hasMark(markName + "_start")) {
            var value = measure(markName + "Metrics", markName);
            this.clearMark(markName);
            var metrics = { name: markName + "Metrics", value: value };
            metricsStore.set(markName + "Metrics", metrics);
            if (this.immediately) {
                reporter(metrics);
            }
        }
        else {
            var value = (_a = getMark(markName + "_end")) === null || _a === void 0 ? void 0 : _a.startTime;
            this.clearMark(markName);
            var metrics = { name: markName + "Metrics", value: value };
            metricsStore.set(markName + "Metrics", metrics);
            if (this.immediately) {
                reporter(metrics);
            }
        }
    };
    WebVitals.prototype.clearMark = function (markName) {
        clearMark(markName + "_start");
        clearMark(markName + "_end");
    };
    WebVitals.prototype.customContentfulPaint = function () {
        setTimeout(function () {
            WebVitals.dispatchCustomEvent();
        });
    };
    return WebVitals;
}());

exports.WebVitals = WebVitals;
/* follow me on Github! @cjinhuo */
//# sourceMappingURL=web-performance.js.map
