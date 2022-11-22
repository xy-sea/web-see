!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = 'undefined' != typeof globalThis ? globalThis : e || self)['elvin-js'] = {}));
})(this, function (e) {
  'use strict';
  var c = ['PERFORMANCE', 'PAGE_VIEW', 'RESOURCE_ERROR', 'JS_ERROR', 'HTTP_LOG', 'OPERATION'],
    u = function () {
      return (u =
        Object.assign ||
        function (e) {
          for (var t, i = 1, n = arguments.length; i < n; i++) for (var r in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    };
  function D(e, a, s, c) {
    return new (s = s || Promise)(function (i, t) {
      function n(e) {
        try {
          o(c.next(e));
        } catch (e) {
          t(e);
        }
      }
      function r(e) {
        try {
          o(c.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value) instanceof s
              ? t
              : new s(function (e) {
                  e(t);
                })
            ).then(n, r);
      }
      o((c = c.apply(e, a || [])).next());
    });
  }
  function F(n, r) {
    var o,
      a,
      s,
      c = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: []
      },
      u = { next: e(0), throw: e(1), return: e(2) };
    return (
      'function' == typeof Symbol &&
        (u[Symbol.iterator] = function () {
          return this;
        }),
      u
    );
    function e(i) {
      return function (e) {
        var t = [i, e];
        if (o) throw new TypeError('Generator is already executing.');
        for (; (c = u && t[(u = 0)] ? 0 : c); )
          try {
            if (((o = 1), a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done)) return s;
            switch (((a = 0), (t = s ? [2 & t[0], s.value] : t)[0])) {
              case 0:
              case 1:
                s = t;
                break;
              case 4:
                return c.label++, { value: t[1], done: !1 };
              case 5:
                c.label++, (a = t[1]), (t = [0]);
                continue;
              case 7:
                (t = c.ops.pop()), c.trys.pop();
                continue;
              default:
                if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  c = 0;
                  continue;
                }
                if (3 === t[0] && (!s || (t[1] > s[0] && t[1] < s[3]))) c.label = t[1];
                else if (6 === t[0] && c.label < s[1]) (c.label = s[1]), (s = t);
                else {
                  if (!(s && c.label < s[2])) {
                    s[2] && c.ops.pop(), c.trys.pop();
                    continue;
                  }
                  (c.label = s[2]), c.ops.push(t);
                }
            }
            t = r.call(n, c);
          } catch (e) {
            (t = [6, e]), (a = 0);
          } finally {
            o = s = 0;
          }
        if (5 & t[0]) throw t[1];
        return { value: t[0] ? t[1] : void 0, done: !0 };
      };
    }
  }
  var l,
    j,
    L,
    q = '0.0.6',
    M =
      (((r = i = i || {}).UNKNOWN = 'UNKNOWN'),
      (r.UNKNOWN_FUNCTION = 'UNKNOWN_FUNCTION'),
      (r.JAVASCRIPT_ERROR = 'JAVASCRIPT_ERROR'),
      (r.LOG_ERROR = 'LOG_ERROR'),
      (r.FETCH_ERROR = 'HTTP_ERROR'),
      (r.VUE_ERROR = 'VUE_ERROR'),
      (r.REACT_ERROR = 'REACT_ERROR'),
      (r.RESOURCE_ERROR = 'RESOURCE'),
      (r.PROMISE_ERROR = 'PROMISE_ERROR'),
      (r.ROUTE_ERROR = 'ROUTE_ERROR'),
      u({}, i),
      ((r = l = l || {}).XHR = 'xhr'),
      (r.FETCH = 'fetch'),
      (r.CONSOLE = 'console'),
      (r.DOM = 'dom'),
      (r.HISTORY = 'history'),
      (r.ERROR = 'error'),
      (r.HASHCHANGE = 'hashchange'),
      (r.PERFORMANCE = 'performance'),
      (r.UNHANDLEDREJECTION = 'unhandledrejection'),
      ((i = j = j || {}).XHR = 'xhr'),
      (i.FETCH = 'fetch'),
      ((r = L = L || {})[(r.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
      (r[(r.UNAUTHORIZED = 401)] = 'UNAUTHORIZED'),
      (r[(r.INTERNAL_EXCEPTION = 500)] = 'INTERNAL_EXCEPTION'),
      Object.prototype.toString);
  function t(t) {
    return function (e) {
      return M.call(e) === '[object '.concat(t, ']');
    };
  }
  var z = {
    isNumber: t('Number'),
    isString: t('String'),
    isBoolean: t('Boolean'),
    isNull: t('Null'),
    isUndefined: t('Undefined'),
    isSymbol: t('Symbol'),
    isFunction: t('Function'),
    isObject: t('Object'),
    isArray: t('Array'),
    isProcess: t('process'),
    isWindow: t('Window')
  };
  var i = z.isProcess('undefined' != typeof process ? process : 0),
    G = z.isWindow('undefined' != typeof window ? window : 0);
  var n = G ? window : i ? process : void 0,
    r = ((n.__REPORT__ = n.__REPORT__ || {}), n.__REPORT__);
  r.replaceFlag = r.replaceFlag || {};
  var V = r.replaceFlag;
  (o.prototype.addFn = function (e) {
    var t = this;
    'function' == typeof e &&
      ('Promise' in n
        ? (this.stack.push(e),
          this.isFlushing ||
            ((this.isFlushing = !0),
            this.micro.then(function () {
              return t.flushStack();
            })))
        : e());
  }),
    (o.prototype.clear = function () {
      this.stack = [];
    }),
    (o.prototype.getStack = function () {
      return this.stack;
    }),
    (o.prototype.flushStack = function () {
      var e = this.stack.slice(0);
      (this.stack.length = 0), (this.isFlushing = !1);
      for (var t = 0; t < e.length; t++) e[t]();
    });
  var B = o;
  function o() {
    (this.stack = []), (this.isFlushing = !1), 'Promise' in n && (this.micro = Promise.resolve());
  }
  var W,
    X,
    a,
    d,
    s,
    $,
    J,
    Z,
    K,
    Y,
    p,
    f,
    b,
    h,
    m,
    w,
    Q,
    v,
    g,
    ee,
    te,
    ie,
    y,
    x,
    ne,
    re,
    oe,
    E,
    i = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {},
    ae = { exports: {} };
  function se(e) {
    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
    return t;
  }
  function ce(e, t) {
    return typeof e === Y && -1 !== ne(t).indexOf(ne(e));
  }
  function ue(e, t) {
    if (typeof e === Y) return (e = e.replace(/^\s\s*/, $).replace(/\s\s*$/, $)), typeof t == Z ? e : e.substring(0, 350);
  }
  function le(e, t) {
    for (var i, n, r, o, a, s = 0; s < t.length && !o; ) {
      for (var c = t[s], u = t[s + 1], l = (i = 0); l < c.length && !o; )
        if ((o = c[l++].exec(e)))
          for (n = 0; n < u.length; n++)
            (a = o[++i]),
              typeof (r = u[n]) === K && 0 < r.length
                ? 2 === r.length
                  ? typeof r[1] == J
                    ? (this[r[0]] = r[1].call(this, a))
                    : (this[r[0]] = r[1])
                  : 3 === r.length
                  ? typeof r[1] !== J || (r[1].exec && r[1].test)
                    ? (this[r[0]] = a ? a.replace(r[1], r[2]) : d)
                    : (this[r[0]] = a ? r[1].call(this, a, r[2]) : d)
                  : 4 === r.length && (this[r[0]] = a ? r[3].call(this, a.replace(r[1], r[2])) : d)
                : (this[r] = a || d);
      s += 2;
    }
  }
  function de(e, t) {
    for (var i in t)
      if (typeof t[i] === K && 0 < t[i].length) {
        for (var n = 0; n < t[i].length; n++) if (ce(t[i][n], e)) return '?' === i ? d : i;
      } else if (ce(t[i], e)) return '?' === i ? d : i;
    return e;
  }
  function _(e, t) {
    var i, n;
    return (
      typeof e === K && ((t = e), (e = d)),
      this instanceof _
        ? ((i = e || (typeof a != Z && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : $)),
          (n = t
            ? (function (e, t) {
                var i,
                  n = {};
                for (i in e) t[i] && t[i].length % 2 == 0 ? (n[i] = t[i].concat(e[i])) : (n[i] = e[i]);
                return n;
              })(oe, t)
            : oe),
          (this.getBrowser = function () {
            var e,
              t = {};
            return (t[f] = d), (t[m] = d), le.call(t, i, n.browser), (t.major = typeof (e = t.version) === Y ? e.replace(/[^\d\.]/g, $).split('.')[0] : d), t;
          }),
          (this.getCPU = function () {
            var e = {};
            return (e[w] = d), le.call(e, i, n.cpu), e;
          }),
          (this.getDevice = function () {
            var e = {};
            return (e[h] = d), (e[p] = d), (e[b] = d), le.call(e, i, n.device), e;
          }),
          (this.getEngine = function () {
            var e = {};
            return (e[f] = d), (e[m] = d), le.call(e, i, n.engine), e;
          }),
          (this.getOS = function () {
            var e = {};
            return (e[f] = d), (e[m] = d), le.call(e, i, n.os), e;
          }),
          (this.getResult = function () {
            return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
          }),
          (this.getUA = function () {
            return i;
          }),
          (this.setUA = function (e) {
            return (i = typeof e === Y && 350 < e.length ? ue(e, 350) : e), this;
          }),
          this.setUA(i),
          this)
        : new _(e, t).getResult()
    );
  }
  (X = (W = ae).exports),
    (a = 'object' == typeof window ? window : i),
    (J = 'function'),
    (Z = 'undefined'),
    (K = 'object'),
    (Y = 'string'),
    (oe = {
      browser: [
        [/\b(?:crmo|crios)\/([\w\.]+)/i],
        [(m = 'version'), [(f = 'name'), (i = 'Chrome')]],
        [/edg(?:e|ios|a)?\/([\w\.]+)/i],
        [m, [f, 'Edge']],
        [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
        [f, m],
        [/opios[\/ ]+([\w\.]+)/i],
        [m, [f, (P = 'Opera') + ' Mini']],
        [/\bopr\/([\w\.]+)/i],
        [m, [f, P]],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
          /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
          /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
          /(?:ms|\()(ie) ([\w\.]+)/i,
          /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
          /(weibo)__([\d\.]+)/i
        ],
        [f, m],
        [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
        [m, [f, 'UC' + (x = 'Browser')]],
        [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
        [m, [f, 'WeChat(Win) Desktop']],
        [/micromessenger\/([\w\.]+)/i],
        [m, [f, 'WeChat']],
        [/konqueror\/([\w\.]+)/i],
        [m, [f, 'Konqueror']],
        [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
        [m, [f, 'IE']],
        [/yabrowser\/([\w\.]+)/i],
        [m, [f, 'Yandex']],
        [/(avast|avg)\/([\w\.]+)/i],
        [[f, /(.+)/, '$1 Secure ' + x], m],
        [/\bfocus\/([\w\.]+)/i],
        [m, [f, (ie = 'Firefox') + ' Focus']],
        [/\bopt\/([\w\.]+)/i],
        [m, [f, P + ' Touch']],
        [/coc_coc\w+\/([\w\.]+)/i],
        [m, [f, 'Coc Coc']],
        [/dolfin\/([\w\.]+)/i],
        [m, [f, 'Dolphin']],
        [/coast\/([\w\.]+)/i],
        [m, [f, P + ' Coast']],
        [/miuibrowser\/([\w\.]+)/i],
        [m, [f, 'MIUI ' + x]],
        [/fxios\/([-\w\.]+)/i],
        [m, [f, ie]],
        [/\bqihu|(qi?ho?o?|360)browser/i],
        [[f, '360 ' + x]],
        [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
        [[f, /(.+)/, '$1 ' + x], m],
        [/(comodo_dragon)\/([\w\.]+)/i],
        [[f, /_/g, ' '], m],
        [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
        [f, m],
        [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
        [f],
        [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
        [[f, (P = 'Facebook')], m],
        [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
        [f, m],
        [/\bgsa\/([\w\.]+) .*safari\//i],
        [m, [f, 'GSA']],
        [/headlesschrome(?:\/([\w\.]+)| )/i],
        [m, [f, i + ' Headless']],
        [/ wv\).+(chrome)\/([\w\.]+)/i],
        [[f, i + ' WebView'], m],
        [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
        [m, [f, 'Android ' + x]],
        [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
        [f, m],
        [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
        [m, [f, 'Mobile Safari']],
        [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
        [m, f],
        [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
        [f, [m, de, { '1.0': '/8', 1.2: '/1', 1.3: '/3', '2.0': '/412', '2.0.2': '/416', '2.0.3': '/417', '2.0.4': '/419', '?': '/' }]],
        [/(webkit|khtml)\/([\w\.]+)/i],
        [f, m],
        [/(navigator|netscape\d?)\/([-\w\.]+)/i],
        [[f, 'Netscape'], m],
        [/mobile vr; rv:([\w\.]+)\).+firefox/i],
        [m, [f, ie + ' Reality']],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
          /(firefox)\/([\w\.]+)/i,
          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
          /(links) \(([\w\.]+)/i
        ],
        [f, m]
      ],
      cpu: [
        [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
        [[(w = 'architecture'), 'amd64']],
        [/(ia32(?=;))/i],
        [
          [
            w,
            (ne = function (e) {
              return e.toLowerCase();
            })
          ]
        ],
        [/((?:i[346]|x)86)[;\)]/i],
        [[w, 'ia32']],
        [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
        [[w, 'arm64']],
        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
        [[w, 'armhf']],
        [/windows (ce|mobile); ppc;/i],
        [[w, 'arm']],
        [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
        [[w, /ower/, ($ = ''), ne]],
        [/(sun4\w)[;\)]/i],
        [[w, 'sparc']],
        [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
        [[w, ne]]
      ],
      device: [
        [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
        [(p = 'model'), [(h = 'vendor'), (x = 'Samsung')], [(b = 'type'), (g = 'tablet')]],
        [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
        [p, [h, x], [b, (v = 'mobile')]],
        [/\((ip(?:hone|od)[\w ]*);/i],
        [p, [h, (ee = 'Apple')], [b, v]],
        [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
        [p, [h, ee], [b, g]],
        [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
        [p, [h, 'Huawei'], [b, g]],
        [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
        [p, [h, 'Huawei'], [b, v]],
        [
          /\b(poco[\w ]+)(?: bui|\))/i,
          /\b; (\w+) build\/hm\1/i,
          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
        ],
        [
          [p, /_/g, ' '],
          [h, (be = 'Xiaomi')],
          [b, v]
        ],
        [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
        [
          [p, /_/g, ' '],
          [h, be],
          [b, g]
        ],
        [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
        [p, [h, 'OPPO'], [b, v]],
        [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
        [p, [h, 'Vivo'], [b, v]],
        [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
        [p, [h, 'Realme'], [b, v]],
        [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
        [p, [h, (N = 'Motorola')], [b, v]],
        [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
        [p, [h, N], [b, g]],
        [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
        [p, [h, 'LG'], [b, g]],
        [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
        [p, [h, 'LG'], [b, v]],
        [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
        [p, [h, 'Lenovo'], [b, g]],
        [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
        [
          [p, /_/g, ' '],
          [h, 'Nokia'],
          [b, v]
        ],
        [/(pixel c)\b/i],
        [p, [h, (N = 'Google')], [b, g]],
        [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
        [p, [h, N], [b, v]],
        [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
        [p, [h, (R = 'Sony')], [b, v]],
        [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
        [
          [p, 'Xperia Tablet'],
          [h, R],
          [b, g]
        ],
        [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
        [p, [h, 'OnePlus'], [b, v]],
        [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
        [p, [h, (re = 'Amazon')], [b, g]],
        [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
        [
          [p, /(.+)/g, 'Fire Phone $1'],
          [h, re],
          [b, v]
        ],
        [/(playbook);[-\w\),; ]+(rim)/i],
        [p, h, [b, g]],
        [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
        [p, [h, (te = 'BlackBerry')], [b, v]],
        [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
        [p, [h, 'ASUS'], [b, g]],
        [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
        [p, [h, 'ASUS'], [b, v]],
        [/(nexus 9)/i],
        [p, [h, 'HTC'], [b, g]],
        [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
        [h, [p, /_/g, ' '], [b, v]],
        [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
        [p, [h, 'Acer'], [b, g]],
        [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
        [p, [h, 'Meizu'], [b, v]],
        [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
        [p, [h, 'Sharp'], [b, v]],
        [
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
          /(hp) ([\w ]+\w)/i,
          /(asus)-?(\w+)/i,
          /(microsoft); (lumia[\w ]+)/i,
          /(lenovo)[-_ ]?([-\w]+)/i,
          /(jolla)/i,
          /(oppo) ?([\w ]+) bui/i
        ],
        [h, p, [b, v]],
        [
          /(archos) (gamepad2?)/i,
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          /(kindle)\/([\w\.]+)/i,
          /(nook)[\w ]+build\/(\w+)/i,
          /(dell) (strea[kpr\d ]*[\dko])/i,
          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
          /(trinity)[- ]*(t\d{3}) bui/i,
          /(gigaset)[- ]+(q\w{1,9}) bui/i,
          /(vodafone) ([\w ]+)(?:\)| bui)/i
        ],
        [h, p, [b, g]],
        [/(surface duo)/i],
        [p, [h, (y = 'Microsoft')], [b, g]],
        [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
        [p, [h, 'Fairphone'], [b, v]],
        [/(u304aa)/i],
        [p, [h, 'AT&T'], [b, v]],
        [/\bsie-(\w*)/i],
        [p, [h, 'Siemens'], [b, v]],
        [/\b(rct\w+) b/i],
        [p, [h, 'RCA'], [b, g]],
        [/\b(venue[\d ]{2,7}) b/i],
        [p, [h, 'Dell'], [b, g]],
        [/\b(q(?:mv|ta)\w+) b/i],
        [p, [h, 'Verizon'], [b, g]],
        [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
        [p, [h, 'Barnes & Noble'], [b, g]],
        [/\b(tm\d{3}\w+) b/i],
        [p, [h, 'NuVision'], [b, g]],
        [/\b(k88) b/i],
        [p, [h, 'ZTE'], [b, g]],
        [/\b(nx\d{3}j) b/i],
        [p, [h, 'ZTE'], [b, v]],
        [/\b(gen\d{3}) b.+49h/i],
        [p, [h, 'Swiss'], [b, v]],
        [/\b(zur\d{3}) b/i],
        [p, [h, 'Swiss'], [b, g]],
        [/\b((zeki)?tb.*\b) b/i],
        [p, [h, 'Zeki'], [b, g]],
        [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
        [[h, 'Dragon Touch'], p, [b, g]],
        [/\b(ns-?\w{0,9}) b/i],
        [p, [h, 'Insignia'], [b, g]],
        [/\b((nxa|next)-?\w{0,9}) b/i],
        [p, [h, 'NextBook'], [b, g]],
        [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
        [[h, 'Voice'], p, [b, v]],
        [/\b(lvtel\-)?(v1[12]) b/i],
        [[h, 'LvTel'], p, [b, v]],
        [/\b(ph-1) /i],
        [p, [h, 'Essential'], [b, v]],
        [/\b(v(100md|700na|7011|917g).*\b) b/i],
        [p, [h, 'Envizen'], [b, g]],
        [/\b(trio[-\w\. ]+) b/i],
        [p, [h, 'MachSpeed'], [b, g]],
        [/\btu_(1491) b/i],
        [p, [h, 'Rotor'], [b, g]],
        [/(shield[\w ]+) b/i],
        [p, [h, 'Nvidia'], [b, g]],
        [/(sprint) (\w+)/i],
        [h, p, [b, v]],
        [/(kin\.[onetw]{3})/i],
        [
          [p, /\./g, ' '],
          [h, y],
          [b, v]
        ],
        [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
        [p, [h, (I = 'Zebra')], [b, g]],
        [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
        [p, [h, I], [b, v]],
        [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
        [h, p, [b, (Q = 'console')]],
        [/droid.+; (shield) bui/i],
        [p, [h, 'Nvidia'], [b, Q]],
        [/(playstation [345portablevi]+)/i],
        [p, [h, R], [b, Q]],
        [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
        [p, [h, y], [b, Q]],
        [/smart-tv.+(samsung)/i],
        [h, [b, (y = 'smarttv')]],
        [/hbbtv.+maple;(\d+)/i],
        [
          [p, /^/, 'SmartTV'],
          [h, x],
          [b, y]
        ],
        [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
        [
          [h, 'LG'],
          [b, y]
        ],
        [/(apple) ?tv/i],
        [h, [p, ee + ' TV'], [b, y]],
        [/crkey/i],
        [
          [p, i + 'cast'],
          [h, N],
          [b, y]
        ],
        [/droid.+aft(\w)( bui|\))/i],
        [p, [h, re], [b, y]],
        [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
        [p, [h, 'Sharp'], [b, y]],
        [/(bravia[\w ]+)( bui|\))/i],
        [p, [h, R], [b, y]],
        [/(mitv-\w{5}) bui/i],
        [p, [h, be], [b, y]],
        [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
        [
          [h, ue],
          [p, ue],
          [b, y]
        ],
        [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
        [[b, y]],
        [/((pebble))app/i],
        [h, p, [b, (x = 'wearable')]],
        [/droid.+; (glass) \d/i],
        [p, [h, N], [b, x]],
        [/droid.+; (wt63?0{2,3})\)/i],
        [p, [h, I], [b, x]],
        [/(quest( 2)?)/i],
        [p, [h, P], [b, x]],
        [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
        [h, [b, (ee = 'embedded')]],
        [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
        [p, [b, v]],
        [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
        [p, [b, g]],
        [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
        [[b, g]],
        [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
        [[b, v]],
        [/(android[-\w\. ]{0,9});.+buil/i],
        [p, [h, 'Generic']]
      ],
      engine: [
        [/windows.+ edge\/([\w\.]+)/i],
        [m, [f, 'EdgeHTML']],
        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
        [m, [f, 'Blink']],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          /ekioh(flow)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
          /(icab)[\/ ]([23]\.[\d\.]+)/i
        ],
        [f, m],
        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
        [m, f]
      ],
      os: [
        [/microsoft (windows) (vista|xp)/i],
        [f, m],
        [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
        [
          f,
          [
            m,
            de,
            (re = {
              ME: '4.90',
              'NT 3.11': 'NT3.51',
              'NT 4.0': 'NT4.0',
              2e3: 'NT 5.0',
              XP: ['NT 5.1', 'NT 5.2'],
              Vista: 'NT 6.0',
              7: 'NT 6.1',
              8: 'NT 6.2',
              8.1: 'NT 6.3',
              10: ['NT 6.4', 'NT 10.0'],
              RT: 'ARM'
            })
          ]
        ],
        [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
        [
          [f, 'Windows'],
          [m, de, re]
        ],
        [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
        [
          [m, /_/g, '.'],
          [f, 'iOS']
        ],
        [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
        [
          [f, 'Mac OS'],
          [m, /_/g, '.']
        ],
        [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
        [m, f],
        [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
        [f, m],
        [/\(bb(10);/i],
        [m, [f, te]],
        [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
        [m, [f, 'Symbian']],
        [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
        [m, [f, ie + ' OS']],
        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
        [m, [f, 'webOS']],
        [/crkey\/([\d\.]+)/i],
        [m, [f, i + 'cast']],
        [/(cros) [\w]+ ([\w\.]+\w)/i],
        [[f, 'Chromium OS'], m],
        [
          /(nintendo|playstation) ([wids345portablevuch]+)/i,
          /(xbox); +xbox ([^\);]+)/i,
          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
          /(mint)[\/\(\) ]?(\w*)/i,
          /(mageia|vectorlinux)[; ]/i,
          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
          /(hurd|linux) ?([\w\.]*)/i,
          /(gnu) ?([\w\.]*)/i,
          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          /(haiku) (\w+)/i
        ],
        [f, m],
        [/(sunos) ?([\w\.\d]*)/i],
        [[f, 'Solaris'], m],
        [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
        [f, m]
      ]
    }),
    (_.VERSION = '0.7.32'),
    (_.BROWSER = se([f, m, 'major'])),
    (_.CPU = se([w])),
    (_.DEVICE = se([p, h, b, Q, v, y, g, x, ee])),
    (_.ENGINE = _.OS = se([f, m])),
    ((X = W.exports ? (W.exports = _) : X).UAParser = _),
    (E = typeof a != Z && (a.jQuery || a.Zepto)) &&
      !E.ua &&
      ((s = new _()),
      (E.ua = s.getResult()),
      (E.ua.get = function () {
        return s.getUA();
      }),
      (E.ua.set = function (e) {
        s.setUA(e);
        var t,
          i = s.getResult();
        for (t in i) E.ua[t] = i[t];
      }));
  function pe() {
    var e = navigator.connection;
    return u(
      {
        language: (navigator.language || navigator.userLanguage).substr(0, 2),
        screen: screen.width + 'x' + screen.height,
        vp: (document.documentElement.clientWidth || document.body.clientWidth) + 'x' + (document.documentElement.clientHeight || document.body.clientHeight),
        connection_type: e ? e.effectiveType : '',
        sdk_version: q,
        environment: ''
      },
      {
        browser_version: (e = new ae.exports.UAParser().getResult()).browser.version,
        browser: e.browser.name,
        os_version: e.os.version,
        os: e.os.name,
        ua: e.ua,
        device: e.device.model || 'Unknow',
        device_type: e.device.type || 'Pc'
      }
    );
  }
  ((R = fe = fe || {}).Get = 'GET'), (R.Post = 'POST'), (R.Put = 'PUT'), (R.Delete = 'DELETE');
  var fe,
    R,
    be = { exports: {} },
    he =
      ((be.exports = (function () {
        function i(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function n(e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        }
        function e(e) {
          return function () {
            return this[e];
          };
        }
        var t = ['isConstructor', 'isEval', 'isNative', 'isToplevel'],
          r = ['columnNumber', 'lineNumber'],
          o = ['fileName', 'functionName', 'source'],
          a,
          s,
          c = t.concat(r, o, ['args'], ['evalOrigin']);
        function d(e) {
          if (!e) return;
          for (var t = 0; t < c.length; t++) if (e[c[t]] !== undefined) this['set' + n(c[t])](e[c[t]]);
        }
        (d.prototype = {
          getArgs: function () {
            return this.args;
          },
          setArgs: function (e) {
            if (Object.prototype.toString.call(e) !== '[object Array]') throw new TypeError('Args must be an Array');
            this.args = e;
          },
          getEvalOrigin: function () {
            return this.evalOrigin;
          },
          setEvalOrigin: function (e) {
            if (e instanceof d) this.evalOrigin = e;
            else if (e instanceof Object) this.evalOrigin = new d(e);
            else throw new TypeError('Eval Origin must be an Object or StackFrame');
          },
          toString: function () {
            var e = this.getFileName() || '';
            var t = this.getLineNumber() || '';
            var i = this.getColumnNumber() || '';
            var n = this.getFunctionName() || '';
            if (this.getIsEval()) {
              if (e) return '[eval] (' + e + ':' + t + ':' + i + ')';
              return '[eval]:' + t + ':' + i;
            }
            if (n) return n + ' (' + e + ':' + t + ':' + i + ')';
            return e + ':' + t + ':' + i;
          }
        }),
          (d.fromString = function e(t) {
            var i = t.indexOf('(');
            var n = t.lastIndexOf(')');
            var r = t.substring(0, i);
            var o = t.substring(i + 1, n).split(',');
            var a = t.substring(n + 1);
            if (a.indexOf('@') === 0) {
              var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a, '');
              var c = s[1];
              var u = s[2];
              var l = s[3];
            }
            return new d({ functionName: r, args: o || undefined, fileName: c, lineNumber: u || undefined, columnNumber: l || undefined });
          });
        for (var u = 0; u < t.length; u++) {
          d.prototype['get' + n(t[u])] = e(t[u]);
          d.prototype['set' + n(t[u])] = (function (t) {
            return function (e) {
              this[t] = Boolean(e);
            };
          })(t[u]);
        }
        for (var l = 0; l < r.length; l++) {
          d.prototype['get' + n(r[l])] = e(r[l]);
          d.prototype['set' + n(r[l])] = (function (t) {
            return function (e) {
              if (!i(e)) throw new TypeError(t + ' must be a Number');
              this[t] = Number(e);
            };
          })(r[l]);
        }
        for (var p = 0; p < o.length; p++) {
          d.prototype['get' + n(o[p])] = e(o[p]);
          d.prototype['set' + n(o[p])] = (function (t) {
            return function (e) {
              this[t] = String(e);
            };
          })(o[p]);
        }
        return d;
      })()),
      (function (c) {
        var n = /(^|@)\S+:\d+/;
        var r = /^\s*at .*(\S+:\d+|\(native\))/m;
        var o = /^(eval@)?(\[native code])?$/;
        return {
          parse: function e(t) {
            if (typeof t.stacktrace !== 'undefined' || typeof t['opera#sourceloc'] !== 'undefined') return this.parseOpera(t);
            else if (t.stack && t.stack.match(r)) return this.parseV8OrIE(t);
            else if (t.stack) return this.parseFFOrSafari(t);
            else throw new Error('Cannot parse given Error object');
          },
          extractLocation: function e(t) {
            if (t.indexOf(':') === -1) return [t];
            var i = /(.+?)(?::(\d+))?(?::(\d+))?$/;
            var n = i.exec(t.replace(/[()]/g, ''));
            return [n[1], n[2] || undefined, n[3] || undefined];
          },
          parseV8OrIE: function e(t) {
            var i = t.stack.split('\n').filter(function (e) {
              return !!e.match(r);
            }, this);
            return i.map(function (e) {
              if (e.indexOf('(eval ') > -1) e = e.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(,.*$)/g, '');
              var t = e
                .replace(/^\s+/, '')
                .replace(/\(eval code/g, '(')
                .replace(/^.*?\s+/, '');
              var i = t.match(/ (\(.+\)$)/);
              t = i ? t.replace(i[0], '') : t;
              var n = this.extractLocation(i ? i[1] : t);
              var r = (i && t) || undefined;
              var o = ['eval', '<anonymous>'].indexOf(n[0]) > -1 ? undefined : n[0];
              return new c({ functionName: r, fileName: o, lineNumber: n[1], columnNumber: n[2], source: e });
            }, this);
          },
          parseFFOrSafari: function e(t) {
            var i = t.stack.split('\n').filter(function (e) {
              return !e.match(o);
            }, this);
            return i.map(function (e) {
              if (e.indexOf(' > eval') > -1) e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
              if (e.indexOf('@') === -1 && e.indexOf(':') === -1) return new c({ functionName: e });
              else {
                var t = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                var i = e.match(t);
                var n = i && i[1] ? i[1] : undefined;
                var r = this.extractLocation(e.replace(t, ''));
                return new c({ functionName: n, fileName: r[0], lineNumber: r[1], columnNumber: r[2], source: e });
              }
            }, this);
          },
          parseOpera: function e(t) {
            if (!t.stacktrace || (t.message.indexOf('\n') > -1 && t.message.split('\n').length > t.stacktrace.split('\n').length)) return this.parseOpera9(t);
            else if (!t.stack) return this.parseOpera10(t);
            else return this.parseOpera11(t);
          },
          parseOpera9: function e(t) {
            var i = /Line (\d+).*script (?:in )?(\S+)/i;
            var n = t.message.split('\n');
            var r = [];
            for (var o = 2, a = n.length; o < a; o += 2) {
              var s = i.exec(n[o]);
              if (s) r.push(new c({ fileName: s[2], lineNumber: s[1], source: n[o] }));
            }
            return r;
          },
          parseOpera10: function e(t) {
            var i = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var n = t.stacktrace.split('\n');
            var r = [];
            for (var o = 0, a = n.length; o < a; o += 2) {
              var s = i.exec(n[o]);
              if (s) r.push(new c({ functionName: s[3] || undefined, fileName: s[2], lineNumber: s[1], source: n[o] }));
            }
            return r;
          },
          parseOpera11: function e(t) {
            var i = t.stack.split('\n').filter(function (e) {
              return !!e.match(n) && !e.match(/^Error created at/);
            }, this);
            return i.map(function (e) {
              var t = e.split('@');
              var i = this.extractLocation(t.pop());
              var n = t.shift() || '';
              var r = n.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^)]*\)/g, '') || undefined;
              var o;
              if (n.match(/\(([^)]*)\)/)) o = n.replace(/^[^(]+\(([^)]*)\)$/, '$1');
              var a = o === undefined || o === '[arguments not available]' ? undefined : o.split(',');
              return new c({ functionName: r, args: a, fileName: i[0], lineNumber: i[1], columnNumber: i[2], source: e });
            }, this);
          }
        };
      })(be.exports)),
    me = '<anonymous>';
  function we() {
    return 'undefined' == typeof document || null == document.location ? '' : document.location.href;
  }
  function O(e, t, i, n) {
    e.addEventListener(t, i, (n = void 0 === n ? !1 : n));
  }
  function ve(e, t, i, n) {
    void 0 === n && (n = !1), (t in e || n) && 'function' == typeof (n = i(e[t])) && (e[t] = n);
  }
  function ge(e, t) {
    var i = 0,
      n = e.length;
    if (
      (function (e, t) {
        void 0 === t && (t = null);
        e = Object.prototype.toString.call(e).substring(8).replace(']', '');
        return t ? e === t : e;
      })(e, 'Array')
    )
      for (; i < n && !1 !== t.call(e[i], e[i], i); i++);
    else for (var r in e) if (!1 === t.call(e[r], e[r], r)) break;
  }
  function k() {
    return Date.now();
  }
  function ye() {
    var e = new Date(),
      t = e.getFullYear(),
      i = ('0' + (e.getMonth() + 1)).slice(-2),
      e = ('0' + e.getDate()).slice(-2);
    return ''.concat(t, '-').concat(i, '-').concat(e);
  }
  function xe() {
    var i = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
      var t = (i + 16 * Math.random()) % 16 | 0;
      return (i = Math.floor(i / 16)), ('x' == e ? t : (3 & t) | 8).toString(16);
    });
  }
  function Ee(e) {
    if (!e || 1 !== e.nodeType) return '';
    var t = [],
      i = 0,
      n = '';
    t.push('('.concat(e.innerText.substr(0, 50), ')'));
    for (
      var r = e || null;
      r &&
      i++ < 5 &&
      'html' !==
        (n = (function (e) {
          var t,
            i,
            n,
            r,
            o,
            a = [];
          if (!e || !e.tagName) return '';
          if ((a.push(e.tagName.toLowerCase()), e.id && a.push('#'.concat(e.id)), (t = e.className) && '[object String]' === Object.prototype.toString.call(t)))
            for (i = t.split(/\s+/), o = 0; o < i.length; o++) if (i[o].indexOf('active') < 0) a.push('.'.concat(i[o]));
          for (var s = ['type', 'name', 'title', 'alt'], o = 0; o < s.length; o++) (r = e.getAttribute((n = s[o]))) && a.push('['.concat(n, '="').concat(r, '"]'));
          return a.join('');
        })(r));

    )
      t.push(n), (r = r.parentNode);
    return t.reverse().join(' > ');
  }
  (S.prototype.bindOptions = function (e) {
    var t = e.monitorId,
      i = e.reportUrl,
      n = e.userId,
      e = e.sessionId;
    (this.monitorId = t),
      (this.reportUrl = i || 'http://127.0.0.1:8889/report'),
      (this.userId = n || ((t = localStorage.getItem('elvin_user_id') || '') || ((t = xe()), localStorage.setItem('elvin_user_id', t)), t)),
      (this.sessionId = e || ((i = sessionStorage.getItem('elvin_session_id') || '') || ((i = xe()), sessionStorage.setItem('elvin_session_id', i)), i));
  }),
    (S.prototype.xhrPost = function (n) {
      return D(this, void 0, void 0, function () {
        var t,
          i = this;
        return F(this, function (e) {
          return (
            (n = this.getTransportData(n)),
            (t = function () {
              var e = new XMLHttpRequest();
              e.open(fe.Post, ''.concat(i.reportUrl, '?action_type=').concat(n.action_type, '&monitor_id=').concat(n.monitor_id, '&session_id=').concat(i.getSessionId())),
                e.setRequestHeader('Content-Type', 'application/json'),
                (e.withCredentials = !0),
                e.send(JSON.stringify(n));
            }),
            this.queue.addFn(t),
            [2]
          );
        });
      });
    }),
    (S.prototype.getMonitorId = function () {
      return this.monitorId;
    }),
    (S.prototype.getUserId = function () {
      return this.userId;
    }),
    (S.prototype.getSessionId = function () {
      return this.sessionId;
    }),
    (S.prototype.getTransportData = function (e) {
      return u(u(u({}, e), pe()), { user_id: this.getUserId(), monitor_id: this.getMonitorId(), session_id: this.getSessionId(), page_url: we(), happen_day: ye() });
    }),
    (S.prototype.isSdkTransportUrl = function (e) {
      return -1 !== e.indexOf(this.reportUrl);
    }),
    (S.prototype.send = function (e) {
      if (G && c.includes(e.action_type)) return this.xhrPost(e);
    });
  var N = S;
  function S() {
    this.queue = new B();
  }
  var T = r.transportData || (r.transportData = new N()),
    _e = { img: '图片', script: 'js脚本' };
  function Re(e, t) {
    var i = (t = void 0 === t ? !1 : t) ? he.parse(e.reason) : he.parse(e.error);
    return {
      action_type: 'JS_ERROR',
      error_name: t ? 'Promise Error' : e.error.stack.split(':')[0],
      message: (t ? e.reason : e.error).message,
      stack: t ? e.reason.stack : e.error.toString(),
      stack_frames: JSON.stringify(i) || '',
      happen_time: k(),
      component_name: e.filename
    };
  }
  var A,
    I,
    U = {
      handleDomOperation: function (e) {
        var t = e.target,
          i = e.target,
          t = {
            class_name: t.className,
            inner_text: t.innerText,
            tag_name: t.tagName,
            behavior_type: e.type,
            input_value: i.value,
            placeholder: i.placeholder,
            action_type: c[5],
            happen_time: k(),
            path: Ee(e.target)
          };
        0 <= t.path.indexOf('div') && T.send(t);
      },
      handleHttp: function (e) {
        T.send(e);
      },
      handleError: function (e) {
        var t = e.target;
        if (t.localName)
          return (
            (e = e.target), (e = { action_type: 'RESOURCE_ERROR', happen_time: k(), source_url: e.src.slice(0, 100) || e.href.slice(0, 100), element_type: _e[e.localName] || e.localName }), T.send(e)
          );
        e = Re(t);
        T.send(e);
      },
      handleHistory: function (e) {
        U.handlePv(e);
      },
      handleHashchange: function (e) {
        U.handlePv(e);
      },
      handleUnhandleRejection: function (e) {
        e = Re(e, !0);
        T.send(e);
      },
      handlePerformance: function () {
        var t,
          r,
          o,
          a,
          s,
          i,
          e = window.performance;
        sessionStorage.setItem('elvin_session_id', xe()),
          e &&
            'object' == typeof e &&
            ((t = function (e) {
              T.send(e);
            }),
            (r = [
              '',
              'fetchStart',
              'domainLookupStart',
              'domainLookupEnd',
              'connectStart',
              'connectEnd',
              'requestStart',
              'responseStart',
              'responseEnd',
              '',
              'domInteractive',
              '',
              'domContentLoadedEventEnd',
              '',
              'loadEventStart',
              '',
              'msFirstPaint',
              'secureConnectionStart',
              'redirectStart',
              'redirectEnd'
            ]),
            (o = null),
            (a = 1),
            (s = {
              dns: 0,
              tcp: 0,
              ssl: 0,
              ttfb: 0,
              request: 0,
              dom: 0,
              response: 0,
              first_byte: 0,
              fpt: 0,
              tti: 0,
              ready: 0,
              load: 0,
              redirect: 0,
              appcache: 0,
              load_type: '',
              action_type: c[0],
              happen_time: 0
            }),
            (i = setInterval(function () {
              var e;
              performance.timing.loadEventEnd &&
                (clearInterval(i),
                'function' == typeof window.PerformanceNavigationTiming && (e = performance.getEntriesByType('navigation')[0]) && ((o = e), (a = 2), (s.load_type = e.type)),
                (s.happen_time = k()),
                ge(
                  {
                    redirect: [18, 17],
                    appcache: [2, 1],
                    dns: [3, 2],
                    tcp: [5, 4],
                    ssl: [5, 17],
                    ttfb: [7, 6],
                    request: [8, 7],
                    dom: [10, 8],
                    response: [14, 12],
                    firstbyte: [7, 2],
                    fpt: [8, 1],
                    tti: [10, 1],
                    ready: [12, 1],
                    load: [14, 1]
                  },
                  function (e, t) {
                    var i = o[r[e[1]]],
                      e = o[r[e[0]]],
                      n = Math.round(e - i);
                    (2 === a || (void 0 !== i && void 0 !== e)) && 0 <= (n = 'dom' === t ? Math.round(e - i) : n) && n < 36e5 && (s[t] = n);
                  }
                ),
                t(s));
            }, 50)));
      },
      handlePv: function (e) {
        e = { page_url: e.newURL, action_type: c[1], document_title: document.title, referrer: e.oldURL || '', encode: document.charset, happen_time: k() };
        T.send(e);
      }
    };
  ((I = A = A || {}).Ok = 'ok'),
    (I.DeadlineExceeded = 'deadline_exceeded'),
    (I.Unauthenticated = 'unauthenticated'),
    (I.PermissionDenied = 'permission_denied'),
    (I.NotFound = 'not_found'),
    (I.ResourceExhausted = 'resource_exhausted'),
    (I.InvalidArgument = 'invalid_argument'),
    (I.Unimplemented = 'unimplemented'),
    (I.Unavailable = 'unavailable'),
    (I.InternalError = 'internal_error'),
    (I.UnknownError = 'unknown_error'),
    (I.Cancelled = 'cancelled'),
    (I.AlreadyExists = 'already_exists'),
    (I.FailedPrecondition = 'failed_precondition'),
    (I.Aborted = 'aborted'),
    (I.OutOfRange = 'out_of_range'),
    (I.DataLoss = 'data_loss');
  var Oe = {};
  function ke(e) {
    var t, i;
    return e && ((t = e.type), !V[t]) && ((t = e.type), (i = !0), V[t] || (V[t] = i), (Oe[e.type] = Oe[e.type] || []), Oe[e.type].push(e.callback), 1);
  }
  function H(n, r) {
    n &&
      Oe[n] &&
      Oe[n].forEach(function (i) {
        var e = function () {
            i(r);
          },
          t = function (e) {
            var t;
            console.error(
              '重写事件triggerHandlers的回调函数发生错误\nType:'
                .concat(n, '\nName: ')
                .concat(((t = i) && 'function' == typeof t && t.name) || me, '\nError: ')
                .concat(e)
            );
          };
        try {
          e();
        } catch (e) {
          t && t(e);
        }
      });
  }
  function Ne(e) {
    switch (e) {
      case l.XHR:
        'XMLHttpRequest' in n &&
          (ve((i = XMLHttpRequest.prototype), 'open', function (n) {
            return function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              var i = z.isString(e[0]) ? e[0].toUpperCase() : e[0];
              (this.before_report_data = { method: i, url: e[1], http_url: e[1].split('?')[0] ? e[1].split('?')[0] : e[1], type: j.XHR }), n.apply(this, e);
            };
          }),
          ve(i, 'send', function (s) {
            return function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              var i = this.before_report_data,
                n = i.method,
                r = i.url,
                o = u(u({}, this.before_report_data), { status: 0, status_text: '', happen_day: ye(), action_type: c[4], response_text: '', request_text: '', happen_time: 0, load_time: 0 }),
                a = k();
              O(this, 'loadend', function () {
                var e, t, i;
                (n === fe.Post && T.isSdkTransportUrl(r)) ||
                  ((i = this.responseType),
                  (e = this.response),
                  (t = this.status),
                  (o.status = t),
                  -1 !== ['', 'json', 'text'].indexOf(i) && (o.response_text = 'object' == typeof e ? JSON.stringify(e) : e),
                  (o.status_text =
                    0 === (i = t) || i === L.BAD_REQUEST || i > L.UNAUTHORIZED
                      ? 'fail'
                      : (function (e) {
                          if (e < 400) return A.Ok;
                          if (400 <= e && e < 500)
                            switch (e) {
                              case 401:
                                return A.Unauthenticated;
                              case 403:
                                return A.PermissionDenied;
                              case 404:
                                return A.NotFound;
                              case 409:
                                return A.AlreadyExists;
                              case 413:
                                return A.FailedPrecondition;
                              case 429:
                                return A.ResourceExhausted;
                              default:
                                return A.InvalidArgument;
                            }
                          if (500 <= e && e < 600)
                            switch (e) {
                              case 501:
                                return A.Unimplemented;
                              case 503:
                                return A.Unavailable;
                              case 504:
                                return A.DeadlineExceeded;
                              default:
                                return A.InternalError;
                            }
                          return A.UnknownError;
                        })(t)),
                  (o.happen_time = k()),
                  (o.load_time = k() - a),
                  H(l.XHR, o));
              }),
                s.apply(this, e);
            };
          }));
        break;
      case l.ERROR:
        O(
          n,
          'error',
          function (e) {
            H(l.ERROR, e);
          },
          !0
        );
        break;
      case l.HISTORY:
        !(function () {
          var e = (e = n.chrome) && e.app && e.app.runtime,
            t = 'history' in n && !!n.history.pushState && !!n.history.replaceState;
          return !e && t;
        })() ||
          ((r = n.onpopstate),
          (n.onpopstate = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = we(),
              n = Te;
            H(l.HISTORY, { from: n, to: i }), r && r.apply(this, e);
          }),
          ve(n.history, 'pushState', t),
          ve(n.history, 'replaceState', t));
        break;
      case l.UNHANDLEDREJECTION:
        O(n, l.UNHANDLEDREJECTION, function (e) {
          H(l.UNHANDLEDREJECTION, e);
        });
        break;
      case l.DOM:
        'document' in n &&
          O(
            n.document,
            'click',
            function (e) {
              H(l.DOM, e);
            },
            !0
          );
        break;
      case l.HASHCHANGE:
        !(function (e, t) {
          return e.hasOwnProperty(t);
        })(n, 'onpopstate') &&
          O(n, l.HASHCHANGE, function (e) {
            H(l.HASHCHANGE, e);
          });
        break;
      case l.PERFORMANCE:
        O(n, 'load', function () {
          var e = window.performance.getEntriesByType('navigation')[0];
          H(l.PERFORMANCE, e);
        });
    }
    function t(r) {
      return function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i,
          n = 2 < e.length ? e[2] : void 0;
        return n && ((i = Te), (n = String(n)), (Te = n), H(l.HISTORY, { from: i, to: n })), r.apply(this, e);
      };
    }
    var r, i;
  }
  function C(e) {
    ke(e) && Ne(e.type);
  }
  function Se() {
    C({
      callback: function () {
        U.handlePerformance();
      },
      type: l.PERFORMANCE
    }),
      C({
        callback: function (e) {
          U.handleHttp(e);
        },
        type: l.XHR
      }),
      C({
        callback: function (e) {
          U.handleHttp(e);
        },
        type: l.FETCH
      }),
      C({
        callback: function (e) {
          U.handleError(e);
        },
        type: l.ERROR
      }),
      C({
        callback: function (e) {
          U.handleHistory(e);
        },
        type: l.HISTORY
      }),
      C({
        callback: function (e) {
          U.handleUnhandleRejection(e);
        },
        type: l.UNHANDLEDREJECTION
      }),
      C({
        callback: function (e) {
          U.handleDomOperation(e);
        },
        type: l.DOM
      }),
      C({
        callback: function (e) {
          U.handleHashchange(e);
        },
        type: l.HASHCHANGE
      });
  }
  var Te = we(),
    P = function () {
      (this.traceIdFieldName = 'Trace-Id'), (this.enableTraceId = !1);
    };
  function Ae(e) {
    'XMLHttpRequest' in n && !e.disabled && (T.bindOptions(e), Se(), localStorage.setItem('performance_happen_time', k().toString()));
  }
  r.options || (r.options = new P()),
    (e.SDK_NAME = 'elvin-js'),
    (e.SDK_VERSION = q),
    (e.init = function (e) {
      Ae(e);
    }),
    (e.setupReplace = Se),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
