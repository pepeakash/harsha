function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./codeMirrorModule-eFKCUIu2.js",
      "../codeMirrorModule.ez37Vkbh.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
var vm = Object.defineProperty;
var ym = (e, t, n) =>
  t in e
    ? vm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var V = (e, t, n) => (ym(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var nx =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function wm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ud = { exports: {} },
  Us = {},
  cd = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var di = Symbol.for("react.element"),
  xm = Symbol.for("react.portal"),
  Sm = Symbol.for("react.fragment"),
  _m = Symbol.for("react.strict_mode"),
  Em = Symbol.for("react.profiler"),
  Tm = Symbol.for("react.provider"),
  km = Symbol.for("react.context"),
  Nm = Symbol.for("react.forward_ref"),
  Cm = Symbol.for("react.suspense"),
  bm = Symbol.for("react.memo"),
  Lm = Symbol.for("react.lazy"),
  mu = Symbol.iterator;
function Am(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mu && e[mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var dd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fd = Object.assign,
  hd = {};
function lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hd),
    (this.updater = n || dd);
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pd() {}
pd.prototype = lr.prototype;
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hd),
    (this.updater = n || dd);
}
var Zl = (Jl.prototype = new pd());
Zl.constructor = Jl;
fd(Zl, lr.prototype);
Zl.isPureReactComponent = !0;
var gu = Array.isArray,
  md = Object.prototype.hasOwnProperty,
  ea = { current: null },
  gd = { key: !0, ref: !0, __self: !0, __source: !0 };
function vd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      md.call(t, r) && !gd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: di,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ea.current,
  };
}
function jm(e, t) {
  return {
    $$typeof: di,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === di;
}
function Mm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vu = /\/+/g;
function ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mm("" + e.key)
    : t.toString(36);
}
function Vi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case di:
          case xm:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + ho(o, 0) : r),
      gu(i)
        ? ((n = ""),
          e != null && (n = e.replace(vu, "$&/") + "/"),
          Vi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ta(i) &&
            (i = jm(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(vu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), gu(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + ho(s, l);
      o += Vi(s, t, n, a, i);
    }
  else if (((a = Am(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + ho(s, l++)), (o += Vi(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Si(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Vi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Im(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  Wi = { transition: null },
  Pm = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Wi,
    ReactCurrentOwner: ea,
  };
D.Children = {
  map: Si,
  forEach: function (e, t, n) {
    Si(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Si(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Si(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
D.Component = lr;
D.Fragment = Sm;
D.Profiler = Em;
D.PureComponent = Jl;
D.StrictMode = _m;
D.Suspense = Cm;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pm;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = fd({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ea.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      md.call(t, a) &&
        !gd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: di, type: e.type, key: i, ref: s, props: r, _owner: o };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: km,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Tm, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = vd;
D.createFactory = function (e) {
  var t = vd.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Nm, render: e };
};
D.isValidElement = ta;
D.lazy = function (e) {
  return { $$typeof: Lm, _payload: { _status: -1, _result: e }, _init: Im };
};
D.memo = function (e, t) {
  return { $$typeof: bm, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Wi.transition;
  Wi.transition = {};
  try {
    e();
  } finally {
    Wi.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
D.useContext = function (e) {
  return Le.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
D.useId = function () {
  return Le.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return Le.current.useRef(e);
};
D.useState = function (e) {
  return Le.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return Le.current.useTransition();
};
D.version = "18.2.0";
cd.exports = D;
var b = cd.exports;
const at = wm(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm = b,
  $m = Symbol.for("react.element"),
  Om = Symbol.for("react.fragment"),
  zm = Object.prototype.hasOwnProperty,
  Dm = Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fm = { key: !0, ref: !0, __self: !0, __source: !0 };
function yd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) zm.call(t, r) && !Fm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: $m,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Dm.current,
  };
}
Us.Fragment = Om;
Us.jsx = yd;
Us.jsxs = yd;
ud.exports = Us;
var d = ud.exports;
function Hm(e, t, n, r) {
  const [i, s] = at.useState(n);
  return (
    at.useEffect(() => {
      let o = !1;
      return (
        r !== void 0 && s(r),
        e().then((l) => {
          o || s(l);
        }),
        () => {
          o = !0;
        }
      );
    }, t),
    i
  );
}
function _n() {
  const e = at.useRef(null),
    [t, n] = at.useState(new DOMRect(0, 0, 10, 10));
  return (
    at.useLayoutEffect(() => {
      const r = e.current;
      if (!r) return;
      const i = new ResizeObserver((s) => {
        const o = s[s.length - 1];
        o && o.contentRect && n(o.contentRect);
      });
      return i.observe(r), () => i.disconnect();
    }, [e]),
    [t, e]
  );
}
function et(e) {
  if (e < 0 || !isFinite(e)) return "-";
  if (e === 0) return "0";
  if (e < 1e3) return e.toFixed(0) + "ms";
  const t = e / 1e3;
  if (t < 60) return t.toFixed(1) + "s";
  const n = t / 60;
  if (n < 60) return n.toFixed(1) + "m";
  const r = n / 60;
  return r < 24 ? r.toFixed(1) + "h" : (r / 24).toFixed(1) + "d";
}
function Um(e) {
  if (e < 0 || !isFinite(e)) return "-";
  if (e === 0) return "0";
  if (e < 1e3) return e.toFixed(0);
  const t = e / 1024;
  if (t < 1e3) return t.toFixed(1) + "K";
  const n = t / 1024;
  return n < 1e3 ? n.toFixed(1) + "M" : (n / 1024).toFixed(1) + "G";
}
function wd(e, t, n, r, i) {
  let s = r || 0,
    o = i !== void 0 ? i : e.length;
  for (; s < o; ) {
    const l = (s + o) >> 1;
    n(t, e[l]) >= 0 ? (s = l + 1) : (o = l);
  }
  return o;
}
function Bm(e) {
  const t = document.createElement("textarea");
  (t.style.position = "absolute"),
    (t.style.zIndex = "-1000"),
    (t.value = e),
    document.body.appendChild(t),
    t.select(),
    document.execCommand("copy"),
    t.remove();
}
function Or(e, t, n) {
  e && (t = an.getObject(e, t));
  const [r, i] = at.useState(t),
    s = at.useCallback(
      (o) => {
        e ? an.setObject(e, o) : i(o);
      },
      [e, i],
    );
  return (
    at.useEffect(() => {
      if (e) {
        const o = () => i(an.getObject(e, t));
        return (
          an.onChangeEmitter.addEventListener(e, o),
          () => an.onChangeEmitter.removeEventListener(e, o)
        );
      }
    }, [t, e]),
    [r, s]
  );
}
class Vm {
  constructor() {
    this.onChangeEmitter = new EventTarget();
  }
  getString(t, n) {
    return localStorage[t] || n;
  }
  setString(t, n) {
    var r;
    (localStorage[t] = n),
      this.onChangeEmitter.dispatchEvent(new Event(t)),
      (r = window.saveSettings) == null || r.call(window);
  }
  getObject(t, n) {
    if (!localStorage[t]) return n;
    try {
      return JSON.parse(localStorage[t]);
    } catch {
      return n;
    }
  }
  setObject(t, n) {
    var r;
    (localStorage[t] = JSON.stringify(n)),
      this.onChangeEmitter.dispatchEvent(new Event(t)),
      (r = window.saveSettings) == null || r.call(window);
  }
}
const an = new Vm();
function Ne(...e) {
  return e.filter(Boolean).join(" ");
}
const yu = "\\u0000-\\u0020\\u007f-\\u009f",
  xd = new RegExp(
    "(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s" +
      yu +
      '"]{2,}[^\\s' +
      yu +
      `"')}\\],:;.!?]`,
    "ug",
  );
function rx() {
  if (document.playwrightThemeInitialized) return;
  (document.playwrightThemeInitialized = !0),
    document.defaultView.addEventListener(
      "focus",
      (n) => {
        n.target.document.nodeType === Node.DOCUMENT_NODE &&
          document.body.classList.remove("inactive");
      },
      !1,
    ),
    document.defaultView.addEventListener(
      "blur",
      (n) => {
        document.body.classList.add("inactive");
      },
      !1,
    );
  const e = an.getString("theme", "light-mode"),
    t = window.matchMedia("(prefers-color-scheme: dark)");
  (e === "dark-mode" || t.matches) && document.body.classList.add("dark-mode");
}
const na = new Set();
function Wm() {
  const e = Qo(),
    t = e === "dark-mode" ? "light-mode" : "dark-mode";
  e && document.body.classList.remove(e),
    document.body.classList.add(t),
    an.setString("theme", t);
  for (const n of na) n(t);
}
function ix(e) {
  na.add(e);
}
function sx(e) {
  na.delete(e);
}
function Qo() {
  return document.body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";
}
function ox() {
  const [e, t] = at.useState(Qo() === "dark-mode");
  return [
    e,
    (n) => {
      (Qo() === "dark-mode") !== n && Wm(), t(n);
    },
  ];
}
var Sd = { exports: {} },
  qe = {},
  _d = { exports: {} },
  Ed = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, R) {
    var z = I.length;
    I.push(R);
    e: for (; 0 < z; ) {
      var B = (z - 1) >>> 1,
        ne = I[B];
      if (0 < i(ne, R)) (I[B] = R), (I[z] = ne), (z = B);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var R = I[0],
      z = I.pop();
    if (z !== R) {
      I[0] = z;
      e: for (var B = 0, ne = I.length, Nn = ne >>> 1; B < Nn; ) {
        var _e = 2 * (B + 1) - 1,
          pr = I[_e],
          ft = _e + 1,
          je = I[ft];
        if (0 > i(pr, z))
          ft < ne && 0 > i(je, pr)
            ? ((I[B] = je), (I[ft] = z), (B = ft))
            : ((I[B] = pr), (I[_e] = z), (B = _e));
        else if (ft < ne && 0 > i(je, z)) (I[B] = je), (I[ft] = z), (B = ft);
        else break e;
      }
    }
    return R;
  }
  function i(I, R) {
    var z = I.sortIndex - R.sortIndex;
    return z !== 0 ? z : I.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    p = null,
    f = 3,
    g = !1,
    y = !1,
    w = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(I) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= I)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function S(I) {
    if (((w = !1), v(I), !y))
      if (n(a) !== null) (y = !0), Fe(N);
      else {
        var R = n(u);
        R !== null && me(S, R.startTime - I);
      }
  }
  function N(I, R) {
    (y = !1), w && ((w = !1), h(A), (A = -1)), (g = !0);
    var z = f;
    try {
      for (
        v(R), p = n(a);
        p !== null && (!(p.expirationTime > R) || (I && !j()));

      ) {
        var B = p.callback;
        if (typeof B == "function") {
          (p.callback = null), (f = p.priorityLevel);
          var ne = B(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof ne == "function" ? (p.callback = ne) : p === n(a) && r(a),
            v(R);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Nn = !0;
      else {
        var _e = n(u);
        _e !== null && me(S, _e.startTime - R), (Nn = !1);
      }
      return Nn;
    } finally {
      (p = null), (f = z), (g = !1);
    }
  }
  var E = !1,
    C = null,
    A = -1,
    _ = 5,
    T = -1;
  function j() {
    return !(e.unstable_now() - T < _);
  }
  function k() {
    if (C !== null) {
      var I = e.unstable_now();
      T = I;
      var R = !0;
      try {
        R = C(!0, I);
      } finally {
        R ? M() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var M;
  if (typeof m == "function")
    M = function () {
      m(k);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      ce = $.port2;
    ($.port1.onmessage = k),
      (M = function () {
        ce.postMessage(null);
      });
  } else
    M = function () {
      x(k, 0);
    };
  function Fe(I) {
    (C = I), E || ((E = !0), M());
  }
  function me(I, R) {
    A = x(function () {
      I(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Fe(N));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (I) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var z = f;
      f = R;
      try {
        return I();
      } finally {
        f = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, R) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var z = f;
      f = I;
      try {
        return R();
      } finally {
        f = z;
      }
    }),
    (e.unstable_scheduleCallback = function (I, R, z) {
      var B = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
          : (z = B),
        I)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = z + ne),
        (I = {
          id: c++,
          callback: R,
          priorityLevel: I,
          startTime: z,
          expirationTime: ne,
          sortIndex: -1,
        }),
        z > B
          ? ((I.sortIndex = z),
            t(u, I),
            n(a) === null &&
              I === n(u) &&
              (w ? (h(A), (A = -1)) : (w = !0), me(S, z - B)))
          : ((I.sortIndex = ne), t(a, I), y || g || ((y = !0), Fe(N))),
        I
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (I) {
      var R = f;
      return function () {
        var z = f;
        f = R;
        try {
          return I.apply(this, arguments);
        } finally {
          f = z;
        }
      };
    });
})(Ed);
_d.exports = Ed;
var qm = _d.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td = b,
  Ve = qm;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var kd = new Set(),
  Xr = {};
function En(e, t) {
  er(e, t), er(e + "Capture", t);
}
function er(e, t) {
  for (Xr[e] = t, e = 0; e < t.length; e++) kd.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ko = Object.prototype.hasOwnProperty,
  Xm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  xu = {};
function Qm(e) {
  return Ko.call(xu, e)
    ? !0
    : Ko.call(wu, e)
      ? !1
      : Xm.test(e)
        ? (xu[e] = !0)
        : ((wu[e] = !0), !1);
}
function Km(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gm(e, t, n, r) {
  if (t === null || typeof t > "u" || Km(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function ia(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ra, ia);
    pe[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ra, ia);
    pe[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ra, ia);
  pe[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sa(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gm(t, n, i, r) && (n = null),
    r || i === null
      ? Qm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var It = Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _i = Symbol.for("react.element"),
  Pn = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  oa = Symbol.for("react.strict_mode"),
  Go = Symbol.for("react.profiler"),
  Nd = Symbol.for("react.provider"),
  Cd = Symbol.for("react.context"),
  la = Symbol.for("react.forward_ref"),
  Yo = Symbol.for("react.suspense"),
  Jo = Symbol.for("react.suspense_list"),
  aa = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  bd = Symbol.for("react.offscreen"),
  Su = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Su && e[Su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  po;
function Ar(e) {
  if (po === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      po = (t && t[1]) || "";
    }
  return (
    `
` +
    po +
    e
  );
}
var mo = !1;
function go(e, t) {
  if (!e || mo) return "";
  mo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (mo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ar(e) : "";
}
function Ym(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar("Lazy");
    case 13:
      return Ar("Suspense");
    case 19:
      return Ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = go(e.type, !1)), e;
    case 11:
      return (e = go(e.type.render, !1)), e;
    case 1:
      return (e = go(e.type, !0)), e;
    default:
      return "";
  }
}
function Zo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case Pn:
      return "Portal";
    case Go:
      return "Profiler";
    case oa:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Jo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Cd:
        return (e.displayName || "Context") + ".Consumer";
      case Nd:
        return (e._context.displayName || "Context") + ".Provider";
      case la:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case aa:
        return (
          (t = e.displayName || null), t !== null ? t : Zo(e.type) || "Memo"
        );
      case Rt:
        (t = e._payload), (e = e._init);
        try {
          return Zo(e(t));
        } catch {}
    }
  return null;
}
function Jm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zo(t);
    case 8:
      return t === oa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ld(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Zm(e) {
  var t = Ld(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ei(e) {
  e._valueTracker || (e._valueTracker = Zm(e));
}
function Ad(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ld(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function el(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _u(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function jd(e, t) {
  (t = t.checked), t != null && sa(e, "checked", t, !1);
}
function tl(e, t) {
  jd(e, t);
  var n = Jt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? nl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && nl(e, t.type, Jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Eu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function nl(e, t, n) {
  (t !== "number" || fs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function Qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function rl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function Md(e, t) {
  var n = Jt(t.value),
    r = Jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ku(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Id(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function il(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Id(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ti,
  Pd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ti = Ti || document.createElement("div"),
          Ti.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ti.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  eg = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function (e) {
  eg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function Rd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zr.hasOwnProperty(e) && zr[e])
      ? ("" + t).trim()
      : t + "px";
}
function $d(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Rd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var tg = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function sl(e, t) {
  if (t) {
    if (tg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function ol(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ll = null;
function ua(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var al = null,
  Kn = null,
  Gn = null;
function Nu(e) {
  if ((e = pi(e))) {
    if (typeof al != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Xs(t)), al(e.stateNode, e.type, t));
  }
}
function Od(e) {
  Kn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Kn = e);
}
function zd() {
  if (Kn) {
    var e = Kn,
      t = Gn;
    if (((Gn = Kn = null), Nu(e), t)) for (e = 0; e < t.length; e++) Nu(t[e]);
  }
}
function Dd(e, t) {
  return e(t);
}
function Fd() {}
var vo = !1;
function Hd(e, t, n) {
  if (vo) return e(t, n);
  vo = !0;
  try {
    return Dd(e, t, n);
  } finally {
    (vo = !1), (Kn !== null || Gn !== null) && (Fd(), zd());
  }
}
function Kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var ul = !1;
if (Lt)
  try {
    var yr = {};
    Object.defineProperty(yr, "passive", {
      get: function () {
        ul = !0;
      },
    }),
      window.addEventListener("test", yr, yr),
      window.removeEventListener("test", yr, yr);
  } catch {
    ul = !1;
  }
function ng(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Dr = !1,
  hs = null,
  ps = !1,
  cl = null,
  rg = {
    onError: function (e) {
      (Dr = !0), (hs = e);
    },
  };
function ig(e, t, n, r, i, s, o, l, a) {
  (Dr = !1), (hs = null), ng.apply(rg, arguments);
}
function sg(e, t, n, r, i, s, o, l, a) {
  if ((ig.apply(this, arguments), Dr)) {
    if (Dr) {
      var u = hs;
      (Dr = !1), (hs = null);
    } else throw Error(L(198));
    ps || ((ps = !0), (cl = u));
  }
}
function Tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ud(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cu(e) {
  if (Tn(e) !== e) throw Error(L(188));
}
function og(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Cu(i), e;
        if (s === r) return Cu(i), t;
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Bd(e) {
  return (e = og(e)), e !== null ? Vd(e) : null;
}
function Vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wd = Ve.unstable_scheduleCallback,
  bu = Ve.unstable_cancelCallback,
  lg = Ve.unstable_shouldYield,
  ag = Ve.unstable_requestPaint,
  ee = Ve.unstable_now,
  ug = Ve.unstable_getCurrentPriorityLevel,
  ca = Ve.unstable_ImmediatePriority,
  qd = Ve.unstable_UserBlockingPriority,
  ms = Ve.unstable_NormalPriority,
  cg = Ve.unstable_LowPriority,
  Xd = Ve.unstable_IdlePriority,
  Bs = null,
  wt = null;
function dg(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : pg,
  fg = Math.log,
  hg = Math.LN2;
function pg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fg(e) / hg) | 0)) | 0;
}
var ki = 64,
  Ni = 4194304;
function Mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function gs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Mr(l)) : ((s &= o), s !== 0 && (r = Mr(s)));
  } else (o = n & ~i), o !== 0 ? (r = Mr(o)) : s !== 0 && (r = Mr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ut(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function mg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function gg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - ut(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = mg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function dl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qd() {
  var e = ki;
  return (ki <<= 1), !(ki & 4194240) && (ki = 64), e;
}
function yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function vg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ut(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function da(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var H = 0;
function Kd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gd,
  fa,
  Yd,
  Jd,
  Zd,
  fl = !1,
  Ci = [],
  Bt = null,
  Vt = null,
  Wt = null,
  Gr = new Map(),
  Yr = new Map(),
  Dt = [],
  yg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function wr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = pi(t)), t !== null && fa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function wg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Bt = wr(Bt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Vt = wr(Vt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Wt = wr(Wt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Gr.set(s, wr(Gr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Yr.set(s, wr(Yr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ef(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ud(n)), t !== null)) {
          (e.blockedOn = t),
            Zd(e.priority, function () {
              Yd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function qi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ll = r), n.target.dispatchEvent(r), (ll = null);
    } else return (t = pi(n)), t !== null && fa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Au(e, t, n) {
  qi(e) && n.delete(t);
}
function xg() {
  (fl = !1),
    Bt !== null && qi(Bt) && (Bt = null),
    Vt !== null && qi(Vt) && (Vt = null),
    Wt !== null && qi(Wt) && (Wt = null),
    Gr.forEach(Au),
    Yr.forEach(Au);
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fl ||
      ((fl = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, xg)));
}
function Jr(e) {
  function t(i) {
    return xr(i, e);
  }
  if (0 < Ci.length) {
    xr(Ci[0], e);
    for (var n = 1; n < Ci.length; n++) {
      var r = Ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Bt !== null && xr(Bt, e),
      Vt !== null && xr(Vt, e),
      Wt !== null && xr(Wt, e),
      Gr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    ef(n), n.blockedOn === null && Dt.shift();
}
var Yn = It.ReactCurrentBatchConfig,
  vs = !0;
function Sg(e, t, n, r) {
  var i = H,
    s = Yn.transition;
  Yn.transition = null;
  try {
    (H = 1), ha(e, t, n, r);
  } finally {
    (H = i), (Yn.transition = s);
  }
}
function _g(e, t, n, r) {
  var i = H,
    s = Yn.transition;
  Yn.transition = null;
  try {
    (H = 4), ha(e, t, n, r);
  } finally {
    (H = i), (Yn.transition = s);
  }
}
function ha(e, t, n, r) {
  if (vs) {
    var i = hl(e, t, n, r);
    if (i === null) bo(e, t, r, ys, n), Lu(e, r);
    else if (wg(i, e, t, n, r)) r.stopPropagation();
    else if ((Lu(e, r), t & 4 && -1 < yg.indexOf(e))) {
      for (; i !== null; ) {
        var s = pi(i);
        if (
          (s !== null && Gd(s),
          (s = hl(e, t, n, r)),
          s === null && bo(e, t, r, ys, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else bo(e, t, r, null, n);
  }
}
var ys = null;
function hl(e, t, n, r) {
  if (((ys = null), (e = ua(r)), (e = un(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ud(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ys = e), null;
}
function tf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ug()) {
        case ca:
          return 1;
        case qd:
          return 4;
        case ms:
        case cg:
          return 16;
        case Xd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ht = null,
  pa = null,
  Xi = null;
function nf() {
  if (Xi) return Xi;
  var e,
    t = pa,
    n = t.length,
    r,
    i = "value" in Ht ? Ht.value : Ht.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Xi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Qi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bi() {
  return !0;
}
function ju() {
  return !1;
}
function Xe(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? bi
        : ju),
      (this.isPropagationStopped = ju),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = bi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = bi));
      },
      persist: function () {},
      isPersistent: bi,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ma = Xe(ar),
  hi = Y({}, ar, { view: 0, detail: 0 }),
  Eg = Xe(hi),
  wo,
  xo,
  Sr,
  Vs = Y({}, hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ga,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sr &&
            (Sr && e.type === "mousemove"
              ? ((wo = e.screenX - Sr.screenX), (xo = e.screenY - Sr.screenY))
              : (xo = wo = 0),
            (Sr = e)),
          wo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xo;
    },
  }),
  Mu = Xe(Vs),
  Tg = Y({}, Vs, { dataTransfer: 0 }),
  kg = Xe(Tg),
  Ng = Y({}, hi, { relatedTarget: 0 }),
  So = Xe(Ng),
  Cg = Y({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bg = Xe(Cg),
  Lg = Y({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ag = Xe(Lg),
  jg = Y({}, ar, { data: 0 }),
  Iu = Xe(jg),
  Mg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ig = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pg[e]) ? !!t[e] : !1;
}
function ga() {
  return Rg;
}
var $g = Y({}, hi, {
    key: function (e) {
      if (e.key) {
        var t = Mg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Ig[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ga,
    charCode: function (e) {
      return e.type === "keypress" ? Qi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Og = Xe($g),
  zg = Y({}, Vs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pu = Xe(zg),
  Dg = Y({}, hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ga,
  }),
  Fg = Xe(Dg),
  Hg = Y({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ug = Xe(Hg),
  Bg = Y({}, Vs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vg = Xe(Bg),
  Wg = [9, 13, 27, 32],
  va = Lt && "CompositionEvent" in window,
  Fr = null;
Lt && "documentMode" in document && (Fr = document.documentMode);
var qg = Lt && "TextEvent" in window && !Fr,
  rf = Lt && (!va || (Fr && 8 < Fr && 11 >= Fr)),
  Ru = " ",
  $u = !1;
function sf(e, t) {
  switch (e) {
    case "keyup":
      return Wg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function of(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $n = !1;
function Xg(e, t) {
  switch (e) {
    case "compositionend":
      return of(t);
    case "keypress":
      return t.which !== 32 ? null : (($u = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && $u ? null : e;
    default:
      return null;
  }
}
function Qg(e, t) {
  if ($n)
    return e === "compositionend" || (!va && sf(e, t))
      ? ((e = nf()), (Xi = pa = Ht = null), ($n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kg[e.type] : t === "textarea";
}
function lf(e, t, n, r) {
  Od(r),
    (t = ws(t, "onChange")),
    0 < t.length &&
      ((n = new ma("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hr = null,
  Zr = null;
function Gg(e) {
  yf(e, 0);
}
function Ws(e) {
  var t = Dn(e);
  if (Ad(t)) return e;
}
function Yg(e, t) {
  if (e === "change") return t;
}
var af = !1;
if (Lt) {
  var _o;
  if (Lt) {
    var Eo = "oninput" in document;
    if (!Eo) {
      var zu = document.createElement("div");
      zu.setAttribute("oninput", "return;"),
        (Eo = typeof zu.oninput == "function");
    }
    _o = Eo;
  } else _o = !1;
  af = _o && (!document.documentMode || 9 < document.documentMode);
}
function Du() {
  Hr && (Hr.detachEvent("onpropertychange", uf), (Zr = Hr = null));
}
function uf(e) {
  if (e.propertyName === "value" && Ws(Zr)) {
    var t = [];
    lf(t, Zr, e, ua(e)), Hd(Gg, t);
  }
}
function Jg(e, t, n) {
  e === "focusin"
    ? (Du(), (Hr = t), (Zr = n), Hr.attachEvent("onpropertychange", uf))
    : e === "focusout" && Du();
}
function Zg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ws(Zr);
}
function ev(e, t) {
  if (e === "click") return Ws(t);
}
function tv(e, t) {
  if (e === "input" || e === "change") return Ws(t);
}
function nv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : nv;
function ei(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ko.call(t, i) || !dt(e[i], t[i])) return !1;
  }
  return !0;
}
function Fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hu(e, t) {
  var n = Fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fu(n);
  }
}
function cf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? cf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function df() {
  for (var e = window, t = fs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fs(e.document);
  }
  return t;
}
function ya(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function rv(e) {
  var t = df(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ya(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Hu(n, s));
        var o = Hu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var iv = Lt && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  pl = null,
  Ur = null,
  ml = !1;
function Uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ml ||
    On == null ||
    On !== fs(r) ||
    ((r = On),
    "selectionStart" in r && ya(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ur && ei(Ur, r)) ||
      ((Ur = r),
      (r = ws(pl, "onSelect")),
      0 < r.length &&
        ((t = new ma("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function Li(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var zn = {
    animationend: Li("Animation", "AnimationEnd"),
    animationiteration: Li("Animation", "AnimationIteration"),
    animationstart: Li("Animation", "AnimationStart"),
    transitionend: Li("Transition", "TransitionEnd"),
  },
  To = {},
  ff = {};
Lt &&
  ((ff = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete zn.animationend.animation,
    delete zn.animationiteration.animation,
    delete zn.animationstart.animation),
  "TransitionEvent" in window || delete zn.transitionend.transition);
function qs(e) {
  if (To[e]) return To[e];
  if (!zn[e]) return e;
  var t = zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ff) return (To[e] = t[n]);
  return e;
}
var hf = qs("animationend"),
  pf = qs("animationiteration"),
  mf = qs("animationstart"),
  gf = qs("transitionend"),
  vf = new Map(),
  Bu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function tn(e, t) {
  vf.set(e, t), En(t, [e]);
}
for (var ko = 0; ko < Bu.length; ko++) {
  var No = Bu[ko],
    sv = No.toLowerCase(),
    ov = No[0].toUpperCase() + No.slice(1);
  tn(sv, "on" + ov);
}
tn(hf, "onAnimationEnd");
tn(pf, "onAnimationIteration");
tn(mf, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(gf, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  lv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
function Vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sg(r, t, void 0, e), (e.currentTarget = null);
}
function yf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Vu(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Vu(i, l, u), (s = a);
        }
    }
  }
  if (ps) throw ((e = cl), (ps = !1), (cl = null), e);
}
function W(e, t) {
  var n = t[xl];
  n === void 0 && (n = t[xl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wf(t, e, 2, !1), n.add(r));
}
function Co(e, t, n) {
  var r = 0;
  t && (r |= 4), wf(n, e, r, t);
}
var Ai = "_reactListening" + Math.random().toString(36).slice(2);
function ti(e) {
  if (!e[Ai]) {
    (e[Ai] = !0),
      kd.forEach(function (n) {
        n !== "selectionchange" && (lv.has(n) || Co(n, !1, e), Co(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ai] || ((t[Ai] = !0), Co("selectionchange", !1, t));
  }
}
function wf(e, t, n, r) {
  switch (tf(t)) {
    case 1:
      var i = Sg;
      break;
    case 4:
      i = _g;
      break;
    default:
      i = ha;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ul ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function bo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = un(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Hd(function () {
    var u = s,
      c = ua(n),
      p = [];
    e: {
      var f = vf.get(e);
      if (f !== void 0) {
        var g = ma,
          y = e;
        switch (e) {
          case "keypress":
            if (Qi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Og;
            break;
          case "focusin":
            (y = "focus"), (g = So);
            break;
          case "focusout":
            (y = "blur"), (g = So);
            break;
          case "beforeblur":
          case "afterblur":
            g = So;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = kg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Fg;
            break;
          case hf:
          case pf:
          case mf:
            g = bg;
            break;
          case gf:
            g = Ug;
            break;
          case "scroll":
            g = Eg;
            break;
          case "wheel":
            g = Vg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Ag;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Pu;
        }
        var w = (t & 4) !== 0,
          x = !w && e === "scroll",
          h = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              h !== null && ((S = Kr(m, h)), S != null && w.push(ni(m, S, v)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < w.length &&
          ((f = new g(f, y, null, n, c)), p.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ll &&
            (y = n.relatedTarget || n.fromElement) &&
            (un(y) || y[At]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? un(y) : null),
              y !== null &&
                ((x = Tn(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((w = Mu),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Pu),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (x = g == null ? f : Dn(g)),
            (v = y == null ? f : Dn(y)),
            (f = new w(S, m + "leave", g, n, c)),
            (f.target = x),
            (f.relatedTarget = v),
            (S = null),
            un(c) === u &&
              ((w = new w(h, m + "enter", y, n, c)),
              (w.target = v),
              (w.relatedTarget = x),
              (S = w)),
            (x = S),
            g && y)
          )
            t: {
              for (w = g, h = y, m = 0, v = w; v; v = bn(v)) m++;
              for (v = 0, S = h; S; S = bn(S)) v++;
              for (; 0 < m - v; ) (w = bn(w)), m--;
              for (; 0 < v - m; ) (h = bn(h)), v--;
              for (; m--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = bn(w)), (h = bn(h));
              }
              w = null;
            }
          else w = null;
          g !== null && Wu(p, f, g, w, !1),
            y !== null && x !== null && Wu(p, x, y, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? Dn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var N = Yg;
        else if (Ou(f))
          if (af) N = tv;
          else {
            N = Zg;
            var E = Jg;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (N = ev);
        if (N && (N = N(e, u))) {
          lf(p, N, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            nl(f, "number", f.value);
      }
      switch (((E = u ? Dn(u) : window), e)) {
        case "focusin":
          (Ou(E) || E.contentEditable === "true") &&
            ((On = E), (pl = u), (Ur = null));
          break;
        case "focusout":
          Ur = pl = On = null;
          break;
        case "mousedown":
          ml = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ml = !1), Uu(p, n, c);
          break;
        case "selectionchange":
          if (iv) break;
        case "keydown":
        case "keyup":
          Uu(p, n, c);
      }
      var C;
      if (va)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        $n
          ? sf(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (rf &&
          n.locale !== "ko" &&
          ($n || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && $n && (C = nf())
            : ((Ht = c),
              (pa = "value" in Ht ? Ht.value : Ht.textContent),
              ($n = !0))),
        (E = ws(u, A)),
        0 < E.length &&
          ((A = new Iu(A, e, null, n, c)),
          p.push({ event: A, listeners: E }),
          C ? (A.data = C) : ((C = of(n)), C !== null && (A.data = C)))),
        (C = qg ? Xg(e, n) : Qg(e, n)) &&
          ((u = ws(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Iu("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    yf(p, t);
  });
}
function ni(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ws(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Kr(e, n)),
      s != null && r.unshift(ni(e, s, i)),
      (s = Kr(e, t)),
      s != null && r.push(ni(e, s, i))),
      (e = e.return);
  }
  return r;
}
function bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wu(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Kr(n, s)), a != null && o.unshift(ni(n, a, l)))
        : i || ((a = Kr(n, s)), a != null && o.push(ni(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var av = /\r\n?/g,
  uv = /\u0000|\uFFFD/g;
function qu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      av,
      `
`,
    )
    .replace(uv, "");
}
function ji(e, t, n) {
  if (((t = qu(t)), qu(e) !== t && n)) throw Error(L(425));
}
function xs() {}
var gl = null,
  vl = null;
function yl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wl = typeof setTimeout == "function" ? setTimeout : void 0,
  cv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xu = typeof Promise == "function" ? Promise : void 0,
  dv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xu < "u"
        ? function (e) {
            return Xu.resolve(null).then(e).catch(fv);
          }
        : wl;
function fv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Jr(t);
}
function qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Qu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + ur,
  ri = "__reactProps$" + ur,
  At = "__reactContainer$" + ur,
  xl = "__reactEvents$" + ur,
  hv = "__reactListeners$" + ur,
  pv = "__reactHandles$" + ur;
function un(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qu(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Qu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pi(e) {
  return (
    (e = e[yt] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Xs(e) {
  return e[ri] || null;
}
var Sl = [],
  Fn = -1;
function nn(e) {
  return { current: e };
}
function q(e) {
  0 > Fn || ((e.current = Sl[Fn]), (Sl[Fn] = null), Fn--);
}
function U(e, t) {
  Fn++, (Sl[Fn] = e.current), (e.current = t);
}
var Zt = {},
  Se = nn(Zt),
  Oe = nn(!1),
  gn = Zt;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Ss() {
  q(Oe), q(Se);
}
function Ku(e, t, n) {
  if (Se.current !== Zt) throw Error(L(168));
  U(Se, t), U(Oe, n);
}
function xf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, Jm(e) || "Unknown", i));
  return Y({}, n, r);
}
function _s(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (gn = Se.current),
    U(Se, e),
    U(Oe, Oe.current),
    !0
  );
}
function Gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = xf(e, t, gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Oe),
      q(Se),
      U(Se, e))
    : q(Oe),
    U(Oe, n);
}
var kt = null,
  Qs = !1,
  Ao = !1;
function Sf(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function mv(e) {
  (Qs = !0), Sf(e);
}
function rn() {
  if (!Ao && kt !== null) {
    Ao = !0;
    var e = 0,
      t = H;
    try {
      var n = kt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kt = null), (Qs = !1);
    } catch (i) {
      throw (kt !== null && (kt = kt.slice(e + 1)), Wd(ca, rn), i);
    } finally {
      (H = t), (Ao = !1);
    }
  }
  return null;
}
var Hn = [],
  Un = 0,
  Es = null,
  Ts = 0,
  Ke = [],
  Ge = 0,
  vn = null,
  Nt = 1,
  Ct = "";
function sn(e, t) {
  (Hn[Un++] = Ts), (Hn[Un++] = Es), (Es = e), (Ts = t);
}
function _f(e, t, n) {
  (Ke[Ge++] = Nt), (Ke[Ge++] = Ct), (Ke[Ge++] = vn), (vn = e);
  var r = Nt;
  e = Ct;
  var i = 32 - ut(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - ut(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Nt = (1 << (32 - ut(t) + i)) | (n << i) | r),
      (Ct = s + e);
  } else (Nt = (1 << s) | (n << i) | r), (Ct = e);
}
function wa(e) {
  e.return !== null && (sn(e, 1), _f(e, 1, 0));
}
function xa(e) {
  for (; e === Es; )
    (Es = Hn[--Un]), (Hn[Un] = null), (Ts = Hn[--Un]), (Hn[Un] = null);
  for (; e === vn; )
    (vn = Ke[--Ge]),
      (Ke[Ge] = null),
      (Ct = Ke[--Ge]),
      (Ke[Ge] = null),
      (Nt = Ke[--Ge]),
      (Ke[Ge] = null);
}
var Be = null,
  Ue = null,
  Q = !1,
  lt = null;
function Ef(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Ue = qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vn !== null ? { id: Nt, overflow: Ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function El(e) {
  if (Q) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Yu(e, t)) {
        if (_l(e)) throw Error(L(418));
        t = qt(n.nextSibling);
        var r = Be;
        t && Yu(e, t)
          ? Ef(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Be = e));
      }
    } else {
      if (_l(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Be = e);
    }
  }
}
function Ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function Mi(e) {
  if (e !== Be) return !1;
  if (!Q) return Ju(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yl(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (_l(e)) throw (Tf(), Error(L(418)));
    for (; t; ) Ef(e, t), (t = qt(t.nextSibling));
  }
  if ((Ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Be ? qt(e.stateNode.nextSibling) : null;
  return !0;
}
function Tf() {
  for (var e = Ue; e; ) e = qt(e.nextSibling);
}
function nr() {
  (Ue = Be = null), (Q = !1);
}
function Sa(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var gv = It.ReactCurrentBatchConfig;
function st(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ks = nn(null),
  Ns = null,
  Bn = null,
  _a = null;
function Ea() {
  _a = Bn = Ns = null;
}
function Ta(e) {
  var t = ks.current;
  q(ks), (e._currentValue = t);
}
function Tl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (Ns = e),
    (_a = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (_a !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (Ns === null) throw Error(L(308));
      (Bn = e), (Ns.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return t;
}
var cn = null;
function ka(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function kf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ka(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function Na(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ka(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function Ki(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
function Zu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Cs(e, t, n, r) {
  var i = e.updateQueue;
  $t = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var p = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var f = l.lane,
        g = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            w = l;
          switch (((f = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(g, p, f);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (f = typeof y == "function" ? y.call(g, p, f) : y),
                f == null)
              )
                break e;
              p = Y({}, p, f);
              break e;
            case 2:
              $t = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = p)) : (c = c.next = g),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (wn |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function ec(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var Cf = new Td.Component().refs;
function kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ks = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      i = Kt(e),
      s = bt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Xt(e, s, i)),
      t !== null && (ct(t, e, i, r), Ki(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      i = Kt(e),
      s = bt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Xt(e, s, i)),
      t !== null && (ct(t, e, i, r), Ki(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = Kt(e),
      i = bt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Xt(e, i, r)),
      t !== null && (ct(t, e, r, n), Ki(t, e, r));
  },
};
function tc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ei(n, r) || !ei(i, s)
        : !0
  );
}
function bf(e, t, n) {
  var r = !1,
    i = Zt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = nt(s))
      : ((i = ze(t) ? gn : Se.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? tr(e, i) : Zt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ks),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function nc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
}
function Nl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Cf), Na(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = nt(s))
    : ((s = ze(t) ? gn : Se.current), (i.context = tr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (kl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ks.enqueueReplaceState(i, i.state, null),
      Cs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function _r(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === Cf && (l = i.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ii(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function rc(e) {
  var t = e._init;
  return t(e._payload);
}
function Lf(e) {
  function t(h, m) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [m]), (h.flags |= 16)) : v.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function i(h, m) {
    return (h = Gt(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, m, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((h.flags |= 2), m) : v)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, m, v, S) {
    return m === null || m.tag !== 6
      ? ((m = Oo(v, h.mode, S)), (m.return = h), m)
      : ((m = i(m, v)), (m.return = h), m);
  }
  function a(h, m, v, S) {
    var N = v.type;
    return N === Rn
      ? c(h, m, v.props.children, S, v.key)
      : m !== null &&
          (m.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === Rt &&
              rc(N) === m.type))
        ? ((S = i(m, v.props)), (S.ref = _r(h, m, v)), (S.return = h), S)
        : ((S = ts(v.type, v.key, v.props, null, h.mode, S)),
          (S.ref = _r(h, m, v)),
          (S.return = h),
          S);
  }
  function u(h, m, v, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = zo(v, h.mode, S)), (m.return = h), m)
      : ((m = i(m, v.children || [])), (m.return = h), m);
  }
  function c(h, m, v, S, N) {
    return m === null || m.tag !== 7
      ? ((m = pn(v, h.mode, S, N)), (m.return = h), m)
      : ((m = i(m, v)), (m.return = h), m);
  }
  function p(h, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Oo("" + m, h.mode, v)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case _i:
          return (
            (v = ts(m.type, m.key, m.props, null, h.mode, v)),
            (v.ref = _r(h, null, m)),
            (v.return = h),
            v
          );
        case Pn:
          return (m = zo(m, h.mode, v)), (m.return = h), m;
        case Rt:
          var S = m._init;
          return p(h, S(m._payload), v);
      }
      if (jr(m) || vr(m))
        return (m = pn(m, h.mode, v, null)), (m.return = h), m;
      Ii(h, m);
    }
    return null;
  }
  function f(h, m, v, S) {
    var N = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return N !== null ? null : l(h, m, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case _i:
          return v.key === N ? a(h, m, v, S) : null;
        case Pn:
          return v.key === N ? u(h, m, v, S) : null;
        case Rt:
          return (N = v._init), f(h, m, N(v._payload), S);
      }
      if (jr(v) || vr(v)) return N !== null ? null : c(h, m, v, S, null);
      Ii(h, v);
    }
    return null;
  }
  function g(h, m, v, S, N) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(v) || null), l(m, h, "" + S, N);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case _i:
          return (h = h.get(S.key === null ? v : S.key) || null), a(m, h, S, N);
        case Pn:
          return (h = h.get(S.key === null ? v : S.key) || null), u(m, h, S, N);
        case Rt:
          var E = S._init;
          return g(h, m, v, E(S._payload), N);
      }
      if (jr(S) || vr(S)) return (h = h.get(v) || null), c(m, h, S, N, null);
      Ii(m, S);
    }
    return null;
  }
  function y(h, m, v, S) {
    for (
      var N = null, E = null, C = m, A = (m = 0), _ = null;
      C !== null && A < v.length;
      A++
    ) {
      C.index > A ? ((_ = C), (C = null)) : (_ = C.sibling);
      var T = f(h, C, v[A], S);
      if (T === null) {
        C === null && (C = _);
        break;
      }
      e && C && T.alternate === null && t(h, C),
        (m = s(T, m, A)),
        E === null ? (N = T) : (E.sibling = T),
        (E = T),
        (C = _);
    }
    if (A === v.length) return n(h, C), Q && sn(h, A), N;
    if (C === null) {
      for (; A < v.length; A++)
        (C = p(h, v[A], S)),
          C !== null &&
            ((m = s(C, m, A)), E === null ? (N = C) : (E.sibling = C), (E = C));
      return Q && sn(h, A), N;
    }
    for (C = r(h, C); A < v.length; A++)
      (_ = g(C, h, A, v[A], S)),
        _ !== null &&
          (e && _.alternate !== null && C.delete(_.key === null ? A : _.key),
          (m = s(_, m, A)),
          E === null ? (N = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        C.forEach(function (j) {
          return t(h, j);
        }),
      Q && sn(h, A),
      N
    );
  }
  function w(h, m, v, S) {
    var N = vr(v);
    if (typeof N != "function") throw Error(L(150));
    if (((v = N.call(v)), v == null)) throw Error(L(151));
    for (
      var E = (N = null), C = m, A = (m = 0), _ = null, T = v.next();
      C !== null && !T.done;
      A++, T = v.next()
    ) {
      C.index > A ? ((_ = C), (C = null)) : (_ = C.sibling);
      var j = f(h, C, T.value, S);
      if (j === null) {
        C === null && (C = _);
        break;
      }
      e && C && j.alternate === null && t(h, C),
        (m = s(j, m, A)),
        E === null ? (N = j) : (E.sibling = j),
        (E = j),
        (C = _);
    }
    if (T.done) return n(h, C), Q && sn(h, A), N;
    if (C === null) {
      for (; !T.done; A++, T = v.next())
        (T = p(h, T.value, S)),
          T !== null &&
            ((m = s(T, m, A)), E === null ? (N = T) : (E.sibling = T), (E = T));
      return Q && sn(h, A), N;
    }
    for (C = r(h, C); !T.done; A++, T = v.next())
      (T = g(C, h, A, T.value, S)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? A : T.key),
          (m = s(T, m, A)),
          E === null ? (N = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        C.forEach(function (k) {
          return t(h, k);
        }),
      Q && sn(h, A),
      N
    );
  }
  function x(h, m, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Rn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case _i:
          e: {
            for (var N = v.key, E = m; E !== null; ) {
              if (E.key === N) {
                if (((N = v.type), N === Rn)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (m = i(E, v.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  E.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Rt &&
                    rc(N) === E.type)
                ) {
                  n(h, E.sibling),
                    (m = i(E, v.props)),
                    (m.ref = _r(h, E, v)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            v.type === Rn
              ? ((m = pn(v.props.children, h.mode, S, v.key)),
                (m.return = h),
                (h = m))
              : ((S = ts(v.type, v.key, v.props, null, h.mode, S)),
                (S.ref = _r(h, m, v)),
                (S.return = h),
                (h = S));
          }
          return o(h);
        case Pn:
          e: {
            for (E = v.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(h, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = zo(v, h.mode, S)), (m.return = h), (h = m);
          }
          return o(h);
        case Rt:
          return (E = v._init), x(h, m, E(v._payload), S);
      }
      if (jr(v)) return y(h, m, v, S);
      if (vr(v)) return w(h, m, v, S);
      Ii(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = i(m, v)), (m.return = h), (h = m))
          : (n(h, m), (m = Oo(v, h.mode, S)), (m.return = h), (h = m)),
        o(h))
      : n(h, m);
  }
  return x;
}
var rr = Lf(!0),
  Af = Lf(!1),
  mi = {},
  xt = nn(mi),
  ii = nn(mi),
  si = nn(mi);
function dn(e) {
  if (e === mi) throw Error(L(174));
  return e;
}
function Ca(e, t) {
  switch ((U(si, t), U(ii, e), U(xt, mi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : il(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = il(t, e));
  }
  q(xt), U(xt, t);
}
function ir() {
  q(xt), q(ii), q(si);
}
function jf(e) {
  dn(si.current);
  var t = dn(xt.current),
    n = il(t, e.type);
  t !== n && (U(ii, e), U(xt, n));
}
function ba(e) {
  ii.current === e && (q(xt), q(ii));
}
var K = nn(0);
function bs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var jo = [];
function La() {
  for (var e = 0; e < jo.length; e++)
    jo[e]._workInProgressVersionPrimary = null;
  jo.length = 0;
}
var Gi = It.ReactCurrentDispatcher,
  Mo = It.ReactCurrentBatchConfig,
  yn = 0,
  G = null,
  oe = null,
  ae = null,
  Ls = !1,
  Br = !1,
  oi = 0,
  vv = 0;
function ge() {
  throw Error(L(321));
}
function Aa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function ja(e, t, n, r, i, s) {
  if (
    ((yn = s),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gi.current = e === null || e.memoizedState === null ? Sv : _v),
    (e = n(r, i)),
    Br)
  ) {
    s = 0;
    do {
      if (((Br = !1), (oi = 0), 25 <= s)) throw Error(L(301));
      (s += 1),
        (ae = oe = null),
        (t.updateQueue = null),
        (Gi.current = Ev),
        (e = n(r, i));
    } while (Br);
  }
  if (
    ((Gi.current = As),
    (t = oe !== null && oe.next !== null),
    (yn = 0),
    (ae = oe = G = null),
    (Ls = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Ma() {
  var e = oi !== 0;
  return (oi = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function rt() {
  if (oe === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ae === null ? G.memoizedState : ae.next;
  if (t !== null) (ae = t), (oe = e);
  else {
    if (e === null) throw Error(L(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Io(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = oe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((yn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (o = r)) : (a = a.next = p),
          (G.lanes |= c),
          (wn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      dt(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (G.lanes |= s), (wn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Po(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    dt(s, t.memoizedState) || ($e = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Mf() {}
function If(e, t) {
  var n = G,
    r = rt(),
    i = t(),
    s = !dt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), ($e = !0)),
    (r = r.queue),
    Ia($f.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ai(9, Rf.bind(null, n, r, i, t), void 0, null),
      ue === null)
    )
      throw Error(L(349));
    yn & 30 || Pf(n, t, i);
  }
  return i;
}
function Pf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Of(t) && zf(e);
}
function $f(e, t, n) {
  return n(function () {
    Of(t) && zf(e);
  });
}
function Of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function zf(e) {
  var t = jt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function ic(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: li,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xv.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Df() {
  return rt().memoizedState;
}
function Yi(e, t, n, r) {
  var i = mt();
  (G.flags |= e),
    (i.memoizedState = ai(1 | t, n, void 0, r === void 0 ? null : r));
}
function Gs(e, t, n, r) {
  var i = rt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (oe !== null) {
    var o = oe.memoizedState;
    if (((s = o.destroy), r !== null && Aa(r, o.deps))) {
      i.memoizedState = ai(t, n, s, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = ai(1 | t, n, s, r));
}
function sc(e, t) {
  return Yi(8390656, 8, e, t);
}
function Ia(e, t) {
  return Gs(2048, 8, e, t);
}
function Ff(e, t) {
  return Gs(4, 2, e, t);
}
function Hf(e, t) {
  return Gs(4, 4, e, t);
}
function Uf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Bf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Gs(4, 4, Uf.bind(null, t, e), n)
  );
}
function Pa() {}
function Vf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qf(e, t, n) {
  return yn & 21
    ? (dt(n, t) || ((n = Qd()), (G.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function yv(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Mo.transition;
  Mo.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (Mo.transition = r);
  }
}
function Xf() {
  return rt().memoizedState;
}
function wv(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qf(e))
  )
    Kf(t, n);
  else if (((n = kf(e, t, n, r)), n !== null)) {
    var i = Ce();
    ct(n, e, r, i), Gf(n, t, r);
  }
}
function xv(e, t, n) {
  var r = Kt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qf(e)) Kf(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), dt(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ka(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = kf(e, t, i, r)),
      n !== null && ((i = Ce()), ct(n, e, r, i), Gf(n, t, r));
  }
}
function Qf(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Kf(e, t) {
  Br = Ls = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Gf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
var As = {
    readContext: nt,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  Sv = {
    readContext: nt,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: sc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yi(4194308, 4, Uf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = wv.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ic,
    useDebugValue: Pa,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = ic(!1),
        t = e[0];
      return (e = yv.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = mt();
      if (Q) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(L(349));
        yn & 30 || Pf(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        sc($f.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ai(9, Rf.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = ue.identifierPrefix;
      if (Q) {
        var n = Ct,
          r = Nt;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = oi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = vv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: nt,
    useCallback: Vf,
    useContext: nt,
    useEffect: Ia,
    useImperativeHandle: Bf,
    useInsertionEffect: Ff,
    useLayoutEffect: Hf,
    useMemo: Wf,
    useReducer: Io,
    useRef: Df,
    useState: function () {
      return Io(li);
    },
    useDebugValue: Pa,
    useDeferredValue: function (e) {
      var t = rt();
      return qf(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Io(li)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Mf,
    useSyncExternalStore: If,
    useId: Xf,
    unstable_isNewReconciler: !1,
  },
  Ev = {
    readContext: nt,
    useCallback: Vf,
    useContext: nt,
    useEffect: Ia,
    useImperativeHandle: Bf,
    useInsertionEffect: Ff,
    useLayoutEffect: Hf,
    useMemo: Wf,
    useReducer: Po,
    useRef: Df,
    useState: function () {
      return Po(li);
    },
    useDebugValue: Pa,
    useDeferredValue: function (e) {
      var t = rt();
      return oe === null ? (t.memoizedState = e) : qf(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Po(li)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Mf,
    useSyncExternalStore: If,
    useId: Xf,
    unstable_isNewReconciler: !1,
  };
function sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ym(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Cl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Tv = typeof WeakMap == "function" ? WeakMap : Map;
function Yf(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ms || ((Ms = !0), (Ol = r)), Cl(e, t);
    }),
    n
  );
}
function Jf(e, t, n) {
  (n = bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Cl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Cl(e, t),
          typeof r != "function" &&
            (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function oc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Tv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = zv.bind(null, e, t, n)), t.then(e, e));
}
function lc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ac(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var kv = It.ReactCurrentOwner,
  $e = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Af(t, null, n, r) : rr(t, e.child, n, r);
}
function uc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Jn(t, i),
    (r = ja(e, t, n, r, s, i)),
    (n = Ma()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mt(e, t, i))
      : (Q && n && wa(t), (t.flags |= 1), Ee(e, t, r, i), t.child)
  );
}
function cc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ua(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Zf(e, t, s, r, i))
      : ((e = ts(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ei), n(o, r) && e.ref === t.ref)
    )
      return Mt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Gt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zf(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ei(s, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && ($e = !0);
      else return (t.lanes = e.lanes), Mt(e, t, i);
  }
  return bl(e, t, n, r, i);
}
function eh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Wn, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(Wn, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        U(Wn, He),
        (He |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(Wn, He),
      (He |= r);
  return Ee(e, t, i, n), t.child;
}
function th(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bl(e, t, n, r, i) {
  var s = ze(n) ? gn : Se.current;
  return (
    (s = tr(t, s)),
    Jn(t, i),
    (n = ja(e, t, n, r, s, i)),
    (r = Ma()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mt(e, t, i))
      : (Q && r && wa(t), (t.flags |= 1), Ee(e, t, n, i), t.child)
  );
}
function dc(e, t, n, r, i) {
  if (ze(n)) {
    var s = !0;
    _s(t);
  } else s = !1;
  if ((Jn(t, i), t.stateNode === null))
    Ji(e, t), bf(t, n, r), Nl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nt(u))
      : ((u = ze(n) ? gn : Se.current), (u = tr(t, u)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && nc(t, o, r, u)),
      ($t = !1);
    var f = t.memoizedState;
    (o.state = f),
      Cs(t, r, o, i),
      (a = t.memoizedState),
      l !== r || f !== a || Oe.current || $t
        ? (typeof c == "function" && (kl(t, n, c, r), (a = t.memoizedState)),
          (l = $t || tc(t, n, l, r, f, a, u))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Nf(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : st(t.type, l)),
      (o.props = u),
      (p = t.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = nt(a))
        : ((a = ze(n) ? gn : Se.current), (a = tr(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== p || f !== a) && nc(t, o, r, a)),
      ($t = !1),
      (f = t.memoizedState),
      (o.state = f),
      Cs(t, r, o, i);
    var y = t.memoizedState;
    l !== p || f !== y || Oe.current || $t
      ? (typeof g == "function" && (kl(t, n, g, r), (y = t.memoizedState)),
        (u = $t || tc(t, n, u, r, f, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ll(e, t, n, r, s, i);
}
function Ll(e, t, n, r, i, s) {
  th(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Gu(t, n, !1), Mt(e, t, s);
  (r = t.stateNode), (kv.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = rr(t, e.child, null, s)), (t.child = rr(t, null, l, s)))
      : Ee(e, t, l, s),
    (t.memoizedState = r.state),
    i && Gu(t, n, !0),
    t.child
  );
}
function nh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ku(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ku(e, t.context, !1),
    Ca(e, t.containerInfo);
}
function fc(e, t, n, r, i) {
  return nr(), Sa(i), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
function jl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rh(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(K, i & 1),
    e === null)
  )
    return (
      El(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Zs(o, r, 0, null)),
              (e = pn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = jl(n)),
              (t.memoizedState = Al),
              e)
            : Ra(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Nv(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Gt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Gt(l, s)) : ((s = pn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? jl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Al),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Gt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ra(e, t) {
  return (
    (t = Zs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pi(e, t, n, r) {
  return (
    r !== null && Sa(r),
    rr(t, e.child, null, n),
    (e = Ra(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Nv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ro(Error(L(422)))), Pi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Zs({ mode: "visible", children: r.children }, i, 0, null)),
          (s = pn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && rr(t, e.child, null, o),
          (t.child.memoizedState = jl(o)),
          (t.memoizedState = Al),
          s);
  if (!(t.mode & 1)) return Pi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(L(419))), (r = Ro(s, r, void 0)), Pi(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), $e || l)) {
    if (((r = ue), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), jt(e, i), ct(r, e, i, -1));
    }
    return Ha(), (r = Ro(Error(L(421)))), Pi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ue = qt(i.nextSibling)),
      (Be = t),
      (Q = !0),
      (lt = null),
      e !== null &&
        ((Ke[Ge++] = Nt),
        (Ke[Ge++] = Ct),
        (Ke[Ge++] = vn),
        (Nt = e.id),
        (Ct = e.overflow),
        (vn = t)),
      (t = Ra(t, r.children)),
      (t.flags |= 4096),
      t);
}
function hc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tl(e.return, t, n);
}
function $o(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function ih(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ee(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hc(e, n, t);
        else if (e.tag === 19) hc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && bs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          $o(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && bs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        $o(t, !0, n, null, s);
        break;
      case "together":
        $o(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ji(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cv(e, t, n) {
  switch (t.tag) {
    case 3:
      nh(t), nr();
      break;
    case 5:
      jf(t);
      break;
    case 1:
      ze(t.type) && _s(t);
      break;
    case 4:
      Ca(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(ks, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? rh(e, t, n)
            : (U(K, K.current & 1),
              (e = Mt(e, t, n)),
              e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ih(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), eh(e, t, n);
  }
  return Mt(e, t, n);
}
var sh, Ml, oh, lh;
sh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ml = function () {};
oh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), dn(xt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = el(e, i)), (r = el(e, r)), (s = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = rl(e, i)), (r = rl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xs);
    }
    sl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Xr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Xr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && W("scroll", e),
                    s || l === a || (s = []))
                  : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
lh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Er(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bv(e, t, n) {
  var r = t.pendingProps;
  switch ((xa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ve(t), null;
    case 1:
      return ze(t.type) && Ss(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ir(),
        q(Oe),
        q(Se),
        La(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (Fl(lt), (lt = null)))),
        Ml(e, t),
        ve(t),
        null
      );
    case 5:
      ba(t);
      var i = dn(si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        oh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ve(t), null;
        }
        if (((e = dn(xt.current)), Mi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[yt] = t), (r[ri] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ir.length; i++) W(Ir[i], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W("error", r), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              _u(r, s), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              Tu(r, s), W("invalid", r);
          }
          sl(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      ji(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      ji(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Xr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              Ei(r), Eu(r, s, !0);
              break;
            case "textarea":
              Ei(r), ku(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = xs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Id(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[yt] = t),
            (e[ri] = r),
            sh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ol(n, r)), n)) {
              case "dialog":
                W("cancel", e), W("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ir.length; i++) W(Ir[i], e);
                i = r;
                break;
              case "source":
                W("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (i = r);
                break;
              case "details":
                W("toggle", e), (i = r);
                break;
              case "input":
                _u(e, r), (i = el(e, r)), W("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                Tu(e, r), (i = rl(e, r)), W("invalid", e);
                break;
              default:
                i = r;
            }
            sl(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? $d(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Pd(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Qr(e, a)
                        : typeof a == "number" && Qr(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Xr.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && W("scroll", e)
                          : a != null && sa(e, s, a, o));
              }
            switch (n) {
              case "input":
                Ei(e), Eu(e, r, !1);
                break;
              case "textarea":
                Ei(e), ku(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Qn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = xs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) lh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = dn(si.current)), dn(xt.current), Mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (s = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                ji(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ji(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (q(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ue !== null && t.mode & 1 && !(t.flags & 128))
          Tf(), nr(), (t.flags |= 98560), (s = !1);
        else if (((s = Mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[yt] = t;
          } else
            nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (s = !1);
        } else lt !== null && (Fl(lt), (lt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? le === 0 && (le = 3) : Ha())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        ir(), Ml(e, t), e === null && ti(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return Ta(t.type._context), ve(t), null;
    case 17:
      return ze(t.type) && Ss(), ve(t), null;
    case 19:
      if ((q(K), (s = t.memoizedState), s === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Er(s, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = bs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Er(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ee() > or &&
            ((t.flags |= 128), (r = !0), Er(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Q)
            )
              return ve(t), null;
          } else
            2 * ee() - s.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          U(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        Fa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Lv(e, t) {
  switch ((xa(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && Ss(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ir(),
        q(Oe),
        q(Se),
        La(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ba(t), null;
    case 13:
      if ((q(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        nr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(K), null;
    case 4:
      return ir(), null;
    case 10:
      return Ta(t.type._context), null;
    case 22:
    case 23:
      return Fa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ri = !1,
  we = !1,
  Av = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Il(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var pc = !1;
function jv(e, t) {
  if (((gl = vs), (e = df()), ya(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = o + i),
                p !== s || (r !== 0 && p.nodeType !== 3) || (a = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (f = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++c === r && (a = o),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vl = { focusedElem: e, selectionRange: n }, vs = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    x = y.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : st(t.type, w),
                      x,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (y = pc), (pc = !1), y;
}
function Vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Il(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ys(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Pl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ah(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ah(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[ri], delete t[xl], delete t[hv], delete t[pv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
function $l(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($l(e, t, n), e = e.sibling; e !== null; ) $l(e, t, n), (e = e.sibling);
}
var de = null,
  ot = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) ch(e, t, n), (n = n.sibling);
}
function ch(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(Bs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Vn(n, t);
    case 6:
      var r = de,
        i = ot;
      (de = null),
        Pt(e, t, n),
        (de = r),
        (ot = i),
        de !== null &&
          (ot
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (ot
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? Lo(e.parentNode, n)
              : e.nodeType === 1 && Lo(e, n),
            Jr(e))
          : Lo(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (i = ot),
        (de = n.stateNode.containerInfo),
        (ot = !0),
        Pt(e, t, n),
        (de = r),
        (ot = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Il(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Z(n, t, l);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Pt(e, t, n), (we = r))
        : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Av()),
      t.forEach(function (r) {
        var i = Fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (de = l.stateNode), (ot = !1);
              break e;
            case 3:
              (de = l.stateNode.containerInfo), (ot = !0);
              break e;
            case 4:
              (de = l.stateNode.containerInfo), (ot = !0);
              break e;
          }
          l = l.return;
        }
        if (de === null) throw Error(L(160));
        ch(s, o, i), (de = null), (ot = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dh(t, e), (t = t.sibling);
}
function dh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), ht(e), r & 4)) {
        try {
          Vr(3, e, e.return), Ys(3, e);
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Vr(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      it(t, e), ht(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        ht(e),
        r & 512 && n !== null && Vn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qr(i, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && jd(i, s),
              ol(l, o);
            var u = ol(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                p = a[o + 1];
              c === "style"
                ? $d(i, p)
                : c === "dangerouslySetInnerHTML"
                  ? Pd(i, p)
                  : c === "children"
                    ? Qr(i, p)
                    : sa(i, c, p, u);
            }
            switch (l) {
              case "input":
                tl(i, s);
                break;
              case "textarea":
                Md(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Qn(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Qn(i, !!s.multiple, s.defaultValue, !0)
                      : Qn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ri] = s;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((it(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      it(t, e), ht(e);
      break;
    case 13:
      it(t, e),
        ht(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (za = ee())),
        r & 4 && gc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || c), it(t, e), (we = u)) : it(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (P = e, c = e.child; c !== null; ) {
            for (p = P = c; P !== null; ) {
              switch (((f = P), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, f, f.return);
                  break;
                case 1:
                  Vn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Vn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    yc(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (P = g)) : yc(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Rd("display", o)));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      it(t, e), ht(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      it(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qr(i, ""), (r.flags &= -33));
          var s = mc(e);
          $l(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = mc(e);
          Rl(e, l, o);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mv(e, t, n) {
  (P = e), fh(e);
}
function fh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ri;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || we;
        l = Ri;
        var u = we;
        if (((Ri = o), (we = a) && !u))
          for (P = i; P !== null; )
            (o = P),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? wc(i)
                : a !== null
                  ? ((a.return = o), (P = a))
                  : wc(i);
        for (; s !== null; ) (P = s), fh(s), (s = s.sibling);
        (P = i), (Ri = l), (we = u);
      }
      vc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (P = s)) : vc(e);
  }
}
function vc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Ys(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : st(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && ec(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ec(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && Jr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        we || (t.flags & 512 && Pl(t));
      } catch (f) {
        Z(t, t.return, f);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function yc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function wc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ys(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, i, a);
            }
          }
          var s = t.return;
          try {
            Pl(t);
          } catch (a) {
            Z(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Pl(t);
          } catch (a) {
            Z(t, o, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (P = l);
      break;
    }
    P = t.return;
  }
}
var Iv = Math.ceil,
  js = It.ReactCurrentDispatcher,
  $a = It.ReactCurrentOwner,
  tt = It.ReactCurrentBatchConfig,
  F = 0,
  ue = null,
  ie = null,
  he = 0,
  He = 0,
  Wn = nn(0),
  le = 0,
  ui = null,
  wn = 0,
  Js = 0,
  Oa = 0,
  Wr = null,
  Ie = null,
  za = 0,
  or = 1 / 0,
  Tt = null,
  Ms = !1,
  Ol = null,
  Qt = null,
  $i = !1,
  Ut = null,
  Is = 0,
  qr = 0,
  zl = null,
  Zi = -1,
  es = 0;
function Ce() {
  return F & 6 ? ee() : Zi !== -1 ? Zi : (Zi = ee());
}
function Kt(e) {
  return e.mode & 1
    ? F & 2 && he !== 0
      ? he & -he
      : gv.transition !== null
        ? (es === 0 && (es = Qd()), es)
        : ((e = H),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tf(e.type))),
          e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < qr) throw ((qr = 0), (zl = null), Error(L(185)));
  fi(e, n, r),
    (!(F & 2) || e !== ue) &&
      (e === ue && (!(F & 2) && (Js |= n), le === 4 && Ft(e, he)),
      De(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((or = ee() + 500), Qs && rn()));
}
function De(e, t) {
  var n = e.callbackNode;
  gg(e, t);
  var r = gs(e, e === ue ? he : 0);
  if (r === 0)
    n !== null && bu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bu(n), t === 1))
      e.tag === 0 ? mv(xc.bind(null, e)) : Sf(xc.bind(null, e)),
        dv(function () {
          !(F & 6) && rn();
        }),
        (n = null);
    else {
      switch (Kd(r)) {
        case 1:
          n = ca;
          break;
        case 4:
          n = qd;
          break;
        case 16:
          n = ms;
          break;
        case 536870912:
          n = Xd;
          break;
        default:
          n = ms;
      }
      n = xh(n, hh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hh(e, t) {
  if (((Zi = -1), (es = 0), F & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = gs(e, e === ue ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ps(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = mh();
    (ue !== e || he !== t) && ((Tt = null), (or = ee() + 500), hn(e, t));
    do
      try {
        $v();
        break;
      } catch (l) {
        ph(e, l);
      }
    while (!0);
    Ea(),
      (js.current = s),
      (F = i),
      ie !== null ? (t = 0) : ((ue = null), (he = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = dl(e)), i !== 0 && ((r = i), (t = Dl(e, i)))), t === 1)
    )
      throw ((n = ui), hn(e, 0), Ft(e, r), De(e, ee()), n);
    if (t === 6) Ft(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Pv(i) &&
          ((t = Ps(e, r)),
          t === 2 && ((s = dl(e)), s !== 0 && ((r = s), (t = Dl(e, s)))),
          t === 1))
      )
        throw ((n = ui), hn(e, 0), Ft(e, r), De(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          on(e, Ie, Tt);
          break;
        case 3:
          if (
            (Ft(e, r), (r & 130023424) === r && ((t = za + 500 - ee()), 10 < t))
          ) {
            if (gs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ce(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = wl(on.bind(null, e, Ie, Tt), t);
            break;
          }
          on(e, Ie, Tt);
          break;
        case 4:
          if ((Ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - ut(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Iv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wl(on.bind(null, e, Ie, Tt), r);
            break;
          }
          on(e, Ie, Tt);
          break;
        case 5:
          on(e, Ie, Tt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return De(e, ee()), e.callbackNode === n ? hh.bind(null, e) : null;
}
function Dl(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = Ps(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && Fl(t)),
    e
  );
}
function Fl(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function Pv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!dt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ft(e, t) {
  for (
    t &= ~Oa,
      t &= ~Js,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xc(e) {
  if (F & 6) throw Error(L(327));
  Zn();
  var t = gs(e, 0);
  if (!(t & 1)) return De(e, ee()), null;
  var n = Ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = dl(e);
    r !== 0 && ((t = r), (n = Dl(e, r)));
  }
  if (n === 1) throw ((n = ui), hn(e, 0), Ft(e, t), De(e, ee()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    on(e, Ie, Tt),
    De(e, ee()),
    null
  );
}
function Da(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((or = ee() + 500), Qs && rn());
  }
}
function xn(e) {
  Ut !== null && Ut.tag === 0 && !(F & 6) && Zn();
  var t = F;
  F |= 1;
  var n = tt.transition,
    r = H;
  try {
    if (((tt.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (tt.transition = n), (F = t), !(F & 6) && rn();
  }
}
function Fa() {
  (He = Wn.current), q(Wn);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cv(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((xa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ss();
          break;
        case 3:
          ir(), q(Oe), q(Se), La();
          break;
        case 5:
          ba(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          q(K);
          break;
        case 19:
          q(K);
          break;
        case 10:
          Ta(r.type._context);
          break;
        case 22:
        case 23:
          Fa();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (ie = e = Gt(e.current, null)),
    (he = He = t),
    (le = 0),
    (ui = null),
    (Oa = Js = wn = 0),
    (Ie = Wr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function ph(e, t) {
  do {
    var n = ie;
    try {
      if ((Ea(), (Gi.current = As), Ls)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ls = !1;
      }
      if (
        ((yn = 0),
        (ae = oe = G = null),
        (Br = !1),
        (oi = 0),
        ($a.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (ui = t), (ie = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = he),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = lc(o);
          if (g !== null) {
            (g.flags &= -257),
              ac(g, o, l, s, t),
              g.mode & 1 && oc(s, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              oc(s, u, t), Ha();
              break e;
            }
            a = Error(L(426));
          }
        } else if (Q && l.mode & 1) {
          var x = lc(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ac(x, o, l, s, t),
              Sa(sr(a, l));
            break e;
          }
        }
        (s = a = sr(a, l)),
          le !== 4 && (le = 2),
          Wr === null ? (Wr = [s]) : Wr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var h = Yf(s, a, t);
              Zu(s, h);
              break e;
            case 1:
              l = a;
              var m = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Qt === null || !Qt.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = Jf(s, l, t);
                Zu(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      vh(n);
    } catch (N) {
      (t = N), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mh() {
  var e = js.current;
  return (js.current = As), e === null ? As : e;
}
function Ha() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ue === null || (!(wn & 268435455) && !(Js & 268435455)) || Ft(ue, he);
}
function Ps(e, t) {
  var n = F;
  F |= 2;
  var r = mh();
  (ue !== e || he !== t) && ((Tt = null), hn(e, t));
  do
    try {
      Rv();
      break;
    } catch (i) {
      ph(e, i);
    }
  while (!0);
  if ((Ea(), (F = n), (js.current = r), ie !== null)) throw Error(L(261));
  return (ue = null), (he = 0), le;
}
function Rv() {
  for (; ie !== null; ) gh(ie);
}
function $v() {
  for (; ie !== null && !lg(); ) gh(ie);
}
function gh(e) {
  var t = wh(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? vh(e) : (ie = t),
    ($a.current = null);
}
function vh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lv(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (ie = null);
        return;
      }
    } else if (((n = bv(n, t, He)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function on(e, t, n) {
  var r = H,
    i = tt.transition;
  try {
    (tt.transition = null), (H = 1), Ov(e, t, n, r);
  } finally {
    (tt.transition = i), (H = r);
  }
  return null;
}
function Ov(e, t, n, r) {
  do Zn();
  while (Ut !== null);
  if (F & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (vg(e, s),
    e === ue && ((ie = ue = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $i ||
      (($i = !0),
      xh(ms, function () {
        return Zn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = tt.transition), (tt.transition = null);
    var o = H;
    H = 1;
    var l = F;
    (F |= 4),
      ($a.current = null),
      jv(e, n),
      dh(n, e),
      rv(vl),
      (vs = !!gl),
      (vl = gl = null),
      (e.current = n),
      Mv(n),
      ag(),
      (F = l),
      (H = o),
      (tt.transition = s);
  } else e.current = n;
  if (
    ($i && (($i = !1), (Ut = e), (Is = i)),
    (s = e.pendingLanes),
    s === 0 && (Qt = null),
    dg(n.stateNode),
    De(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ms) throw ((Ms = !1), (e = Ol), (Ol = null), e);
  return (
    Is & 1 && e.tag !== 0 && Zn(),
    (s = e.pendingLanes),
    s & 1 ? (e === zl ? qr++ : ((qr = 0), (zl = e))) : (qr = 0),
    rn(),
    null
  );
}
function Zn() {
  if (Ut !== null) {
    var e = Kd(Is),
      t = tt.transition,
      n = H;
    try {
      if (((tt.transition = null), (H = 16 > e ? 16 : e), Ut === null))
        var r = !1;
      else {
        if (((e = Ut), (Ut = null), (Is = 0), F & 6)) throw Error(L(331));
        var i = F;
        for (F |= 4, P = e.current; P !== null; ) {
          var s = P,
            o = s.child;
          if (P.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (P = u; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(8, c, s);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (P = p);
                  else
                    for (; P !== null; ) {
                      c = P;
                      var f = c.sibling,
                        g = c.return;
                      if ((ah(c), c === u)) {
                        P = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (P = f);
                        break;
                      }
                      P = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              P = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (P = o);
          else
            e: for (; P !== null; ) {
              if (((s = P), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vr(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                (h.return = s.return), (P = h);
                break e;
              }
              P = s.return;
            }
        }
        var m = e.current;
        for (P = m; P !== null; ) {
          o = P;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (P = v);
          else
            e: for (o = m; P !== null; ) {
              if (((l = P), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ys(9, l);
                  }
                } catch (N) {
                  Z(l, l.return, N);
                }
              if (l === o) {
                P = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (P = S);
                break e;
              }
              P = l.return;
            }
        }
        if (
          ((F = i), rn(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(Bs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (tt.transition = t);
    }
  }
  return !1;
}
function Sc(e, t, n) {
  (t = sr(n, t)),
    (t = Yf(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = Ce()),
    e !== null && (fi(e, 1, t), De(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Qt === null || !Qt.has(r)))
        ) {
          (e = sr(n, e)),
            (e = Jf(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = Ce()),
            t !== null && (fi(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (he & n) === n &&
      (le === 4 || (le === 3 && (he & 130023424) === he && 500 > ee() - za)
        ? hn(e, 0)
        : (Oa |= n)),
    De(e, t);
}
function yh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ni), (Ni <<= 1), !(Ni & 130023424) && (Ni = 4194304))
      : (t = 1));
  var n = Ce();
  (e = jt(e, t)), e !== null && (fi(e, t, n), De(e, n));
}
function Dv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yh(e, n);
}
function Fv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), yh(e, n);
}
var wh;
wh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), Cv(e, t, n);
      $e = !!(e.flags & 131072);
    }
  else ($e = !1), Q && t.flags & 1048576 && _f(t, Ts, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ji(e, t), (e = t.pendingProps);
      var i = tr(t, Se.current);
      Jn(t, n), (i = ja(null, t, r, e, i, n));
      var s = Ma();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((s = !0), _s(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Na(t),
            (i.updater = Ks),
            (t.stateNode = i),
            (i._reactInternals = t),
            Nl(t, r, e, n),
            (t = Ll(null, t, r, !0, s, n)))
          : ((t.tag = 0), Q && s && wa(t), Ee(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ji(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Uv(r)),
          (e = st(r, e)),
          i)
        ) {
          case 0:
            t = bl(null, t, r, e, n);
            break e;
          case 1:
            t = dc(null, t, r, e, n);
            break e;
          case 11:
            t = uc(null, t, r, e, n);
            break e;
          case 14:
            t = cc(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        bl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        dc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((nh(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Nf(e, t),
          Cs(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = sr(Error(L(423)), t)), (t = fc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = sr(Error(L(424)), t)), (t = fc(e, t, r, n, i));
            break e;
          } else
            for (
              Ue = qt(t.stateNode.containerInfo.firstChild),
                Be = t,
                Q = !0,
                lt = null,
                n = Af(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nr(), r === i)) {
            t = Mt(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jf(t),
        e === null && El(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        yl(r, i) ? (o = null) : s !== null && yl(r, s) && (t.flags |= 32),
        th(e, t),
        Ee(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && El(t), null;
    case 13:
      return rh(e, t, n);
    case 4:
      return (
        Ca(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rr(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        uc(e, t, r, i, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          U(ks, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (dt(s.value, o)) {
            if (s.children === i.children && !Oe.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = bt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Tl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(L(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Tl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ee(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (i = nt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = st(r, t.pendingProps)),
        (i = st(r.type, i)),
        cc(e, t, r, i, n)
      );
    case 15:
      return Zf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        Ji(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), _s(t)) : (e = !1),
        Jn(t, n),
        bf(t, r, i),
        Nl(t, r, i, n),
        Ll(null, t, r, !0, e, n)
      );
    case 19:
      return ih(e, t, n);
    case 22:
      return eh(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function xh(e, t) {
  return Wd(e, t);
}
function Hv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new Hv(e, t, n, r);
}
function Ua(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uv(e) {
  if (typeof e == "function") return Ua(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === la)) return 11;
    if (e === aa) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ts(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ua(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Rn:
        return pn(n.children, i, s, t);
      case oa:
        (o = 8), (i |= 8);
        break;
      case Go:
        return (
          (e = Je(12, n, t, i | 2)), (e.elementType = Go), (e.lanes = s), e
        );
      case Yo:
        return (e = Je(13, n, t, i)), (e.elementType = Yo), (e.lanes = s), e;
      case Jo:
        return (e = Je(19, n, t, i)), (e.elementType = Jo), (e.lanes = s), e;
      case bd:
        return Zs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nd:
              o = 10;
              break e;
            case Cd:
              o = 9;
              break e;
            case la:
              o = 11;
              break e;
            case aa:
              o = 14;
              break e;
            case Rt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function pn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Zs(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = bd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Oo(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function zo(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yo(0)),
    (this.expirationTimes = yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ba(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new Bv(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Je(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Na(s),
    e
  );
}
function Vv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sh(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return xf(e, n, t);
  }
  return t;
}
function _h(e, t, n, r, i, s, o, l, a) {
  return (
    (e = Ba(n, r, !0, e, i, s, o, l, a)),
    (e.context = Sh(null)),
    (n = e.current),
    (r = Ce()),
    (i = Kt(n)),
    (s = bt(r, i)),
    (s.callback = t ?? null),
    Xt(n, s, i),
    (e.current.lanes = i),
    fi(e, i, r),
    De(e, r),
    e
  );
}
function eo(e, t, n, r) {
  var i = t.current,
    s = Ce(),
    o = Kt(i);
  return (
    (n = Sh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(i, t, o)),
    e !== null && (ct(e, i, o, s), Ki(e, i, o)),
    o
  );
}
function Rs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _c(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Va(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function Wv() {
  return null;
}
var Eh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wa(e) {
  this._internalRoot = e;
}
to.prototype.render = Wa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  eo(e, t, null, null);
};
to.prototype.unmount = Wa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      eo(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function to(e) {
  this._internalRoot = e;
}
to.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && ef(e);
  }
};
function qa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function no(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ec() {}
function qv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Rs(o);
        s.call(u);
      };
    }
    var o = _h(t, r, e, 0, null, !1, !1, "", Ec);
    return (
      (e._reactRootContainer = o),
      (e[At] = o.current),
      ti(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Rs(a);
      l.call(u);
    };
  }
  var a = Ba(e, 0, !1, null, null, !1, !1, "", Ec);
  return (
    (e._reactRootContainer = a),
    (e[At] = a.current),
    ti(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      eo(t, a, n, r);
    }),
    a
  );
}
function ro(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Rs(o);
        l.call(a);
      };
    }
    eo(t, o, e, i);
  } else o = qv(n, t, e, i, r);
  return Rs(o);
}
Gd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mr(t.pendingLanes);
        n !== 0 &&
          (da(t, n | 1), De(t, ee()), !(F & 6) && ((or = ee() + 500), rn()));
      }
      break;
    case 13:
      xn(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var i = Ce();
          ct(r, e, 1, i);
        }
      }),
        Va(e, 1);
  }
};
fa = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Ce();
      ct(t, e, 134217728, n);
    }
    Va(e, 134217728);
  }
};
Yd = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Ce();
      ct(n, e, t, r);
    }
    Va(e, t);
  }
};
Jd = function () {
  return H;
};
Zd = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
al = function (e, t, n) {
  switch (t) {
    case "input":
      if ((tl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Xs(r);
            if (!i) throw Error(L(90));
            Ad(r), tl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Md(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qn(e, !!n.multiple, t, !1);
  }
};
Dd = Da;
Fd = xn;
var Xv = { usingClientEntryPoint: !1, Events: [pi, Dn, Xs, Od, zd, Da] },
  Tr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Qv = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || Wv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oi.isDisabled && Oi.supportsFiber)
    try {
      (Bs = Oi.inject(Qv)), (wt = Oi);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xv;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qa(t)) throw Error(L(200));
  return Vv(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!qa(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = Eh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ba(e, 1, !1, null, null, n, !1, r, i)),
    (e[At] = t.current),
    ti(e.nodeType === 8 ? e.parentNode : e),
    new Wa(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Bd(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return xn(e);
};
qe.hydrate = function (e, t, n) {
  if (!no(t)) throw Error(L(200));
  return ro(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!qa(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Eh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = _h(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[At] = t.current),
    ti(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new to(t);
};
qe.render = function (e, t, n) {
  if (!no(t)) throw Error(L(200));
  return ro(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!no(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (xn(function () {
        ro(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = Da;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!no(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return ro(e, t, n, !1, r);
};
qe.version = "18.2.0-next-9e3b772b8-20220608";
function Th() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Th);
    } catch (e) {
      console.error(e);
    }
}
Th(), (Sd.exports = qe);
var Kv = Sd.exports,
  Gv,
  Tc = Kv;
(Gv = Tc.createRoot), Tc.hydrateRoot;
const en = ({
    children: e,
    title: t = "",
    icon: n,
    disabled: r = !1,
    toggled: i = !1,
    onClick: s = () => {},
    style: o,
    testId: l,
    className: a,
  }) => (
    (a = (a || "") + ` toolbar-button ${n}`),
    i && (a += " toggled"),
    d.jsxs("button", {
      className: a,
      onMouseDown: kc,
      onClick: s,
      onDoubleClick: kc,
      title: t,
      disabled: !!r,
      style: o,
      "data-testid": l,
      children: [
        n &&
          d.jsx("span", {
            className: `codicon codicon-${n}`,
            style: e ? { marginRight: 5 } : {},
          }),
        e,
      ],
    })
  ),
  kc = (e) => {
    e.stopPropagation(), e.preventDefault();
  },
  Pr = Symbol("context"),
  kh = Symbol("next"),
  Nh = Symbol("prev"),
  Nc = Symbol("events");
class lx {
  constructor(t) {
    V(this, "startTime");
    V(this, "endTime");
    V(this, "browserName");
    V(this, "channel");
    V(this, "platform");
    V(this, "wallTime");
    V(this, "title");
    V(this, "options");
    V(this, "pages");
    V(this, "actions");
    V(this, "events");
    V(this, "stdio");
    V(this, "errors");
    V(this, "errorDescriptors");
    V(this, "hasSource");
    V(this, "hasStepData");
    V(this, "sdkLanguage");
    V(this, "testIdAttributeName");
    V(this, "sources");
    V(this, "resources");
    t.forEach((r) => Yv(r));
    const n = t.find((r) => r.origin === "library");
    (this.browserName = (n == null ? void 0 : n.browserName) || ""),
      (this.sdkLanguage = n == null ? void 0 : n.sdkLanguage),
      (this.channel = n == null ? void 0 : n.channel),
      (this.testIdAttributeName = n == null ? void 0 : n.testIdAttributeName),
      (this.platform = (n == null ? void 0 : n.platform) || ""),
      (this.title = (n == null ? void 0 : n.title) || ""),
      (this.options = (n == null ? void 0 : n.options) || {}),
      (this.actions = Jv(t)),
      (this.pages = [].concat(...t.map((r) => r.pages))),
      (this.wallTime = t
        .map((r) => r.wallTime)
        .reduce(
          (r, i) => Math.min(r || Number.MAX_VALUE, i),
          Number.MAX_VALUE,
        )),
      (this.startTime = t
        .map((r) => r.startTime)
        .reduce((r, i) => Math.min(r, i), Number.MAX_VALUE)),
      (this.endTime = t
        .map((r) => r.endTime)
        .reduce((r, i) => Math.max(r, i), Number.MIN_VALUE)),
      (this.events = [].concat(...t.map((r) => r.events))),
      (this.stdio = [].concat(...t.map((r) => r.stdio))),
      (this.errors = [].concat(...t.map((r) => r.errors))),
      (this.hasSource = t.some((r) => r.hasSource)),
      (this.hasStepData = t.some((r) => r.origin === "testRunner")),
      (this.resources = [...t.map((r) => r.resources)].flat()),
      this.events.sort((r, i) => r.time - i.time),
      this.resources.sort((r, i) => r._monotonicTime - i._monotonicTime),
      (this.errorDescriptors = this.hasStepData
        ? this._errorDescriptorsFromTestRunner()
        : this._errorDescriptorsFromActions()),
      (this.sources = a0(this.actions, this.errorDescriptors));
  }
  failedAction() {
    return this.actions.findLast((t) => t.error);
  }
  _errorDescriptorsFromActions() {
    var n;
    const t = [];
    for (const r of this.actions || [])
      (n = r.error) != null &&
        n.message &&
        t.push({ action: r, stack: r.stack, message: r.error.message });
    return t;
  }
  _errorDescriptorsFromTestRunner() {
    const t = [];
    for (const n of this.errors || [])
      n.message && t.push({ stack: n.stack, message: n.message });
    return t;
  }
}
function Yv(e) {
  for (const n of e.pages) n[Pr] = e;
  for (let n = 0; n < e.actions.length; ++n) {
    const r = e.actions[n];
    r[Pr] = e;
  }
  let t;
  for (let n = e.actions.length - 1; n >= 0; n--) {
    const r = e.actions[n];
    (r[kh] = t), r.apiName.includes("route.") || (t = r);
  }
  for (const n of e.events) n[Pr] = e;
  for (const n of e.resources) n[Pr] = e;
}
function Jv(e) {
  const t = new Map();
  for (const i of e) {
    const s = i.traceUrl;
    let o = t.get(s);
    o || ((o = []), t.set(s, o)), o.push(i);
  }
  const n = [];
  let r = 0;
  for (const [, i] of t) {
    t.size > 1 && Zv(i, ++r);
    const s = e0(i);
    n.push(...s);
  }
  n.sort((i, s) =>
    s.parentId === i.callId
      ? -1
      : i.parentId === s.callId
        ? 1
        : i.startTime - s.startTime,
  );
  for (let i = 1; i < n.length; ++i) n[i][Nh] = n[i - 1];
  return n;
}
function Zv(e, t) {
  for (const n of e)
    for (const r of n.actions)
      r.callId && (r.callId = `${t}:${r.callId}`),
        r.parentId && (r.parentId = `${t}:${r.parentId}`);
}
function e0(e) {
  const t = new Map(),
    n = e.filter((l) => l.origin === "library"),
    r = e.filter((l) => l.origin === "testRunner");
  if (!r.length || !n.length)
    return e.map((l) => l.actions.map((a) => ({ ...a, context: l }))).flat();
  const i = n.some((l) => l.actions.some((a) => !!a.stepId));
  for (const l of n)
    for (const a of l.actions) {
      const u = i ? a.stepId : `${a.apiName}@${a.wallTime}`;
      t.set(u, { ...a, context: l });
    }
  const s = n0(r, t, i);
  s && t0(n, s);
  const o = new Map();
  for (const l of r)
    for (const a of l.actions) {
      const u = i ? a.callId : `${a.apiName}@${a.wallTime}`,
        c = t.get(u);
      if (c) {
        o.set(a.callId, c.callId),
          a.error && (c.error = a.error),
          a.attachments && (c.attachments = a.attachments),
          a.parentId && (c.parentId = o.get(a.parentId) ?? a.parentId),
          (c.startTime = a.startTime),
          (c.endTime = a.endTime);
        continue;
      }
      a.parentId && (a.parentId = o.get(a.parentId) ?? a.parentId),
        t.set(u, { ...a, context: l });
    }
  return [...t.values()];
}
function t0(e, t) {
  for (const n of e) {
    (n.startTime += t), (n.endTime += t);
    for (const r of n.actions)
      r.startTime && (r.startTime += t), r.endTime && (r.endTime += t);
    for (const r of n.events) r.time += t;
    for (const r of n.stdio) r.timestamp += t;
    for (const r of n.pages)
      for (const i of r.screencastFrames) i.timestamp += t;
    for (const r of n.resources) r._monotonicTime && (r._monotonicTime += t);
  }
}
function n0(e, t, n) {
  for (const r of e)
    for (const i of r.actions) {
      if (!i.startTime) continue;
      const s = n ? i.callId : `${i.apiName}@${i.wallTime}`,
        o = t.get(s);
      if (o) return i.startTime - o.startTime;
    }
  return 0;
}
function r0(e) {
  const t = new Map();
  for (const r of e)
    t.set(r.callId, { id: r.callId, parent: void 0, children: [], action: r });
  const n = { id: "", parent: void 0, children: [] };
  for (const r of t.values()) {
    const i = (r.action.parentId && t.get(r.action.parentId)) || n;
    i.children.push(r), (r.parent = i);
  }
  return { rootItem: n, itemMap: t };
}
function ax(e) {
  return `${e.pageId || "none"}:${e.callId}`;
}
function $s(e) {
  return e[Pr];
}
function i0(e) {
  return e[kh];
}
function s0(e) {
  return e[Nh];
}
function o0(e) {
  let t = 0,
    n = 0;
  for (const r of l0(e)) {
    if (r.type === "console") {
      const i = r.messageType;
      i === "warning" ? ++n : i === "error" && ++t;
    }
    r.type === "event" && r.method === "pageError" && ++t;
  }
  return { errors: t, warnings: n };
}
function l0(e) {
  let t = e[Nc];
  if (t) return t;
  const n = i0(e);
  return (
    (t = $s(e).events.filter(
      (r) => r.time >= e.startTime && (!n || r.time < n.startTime),
    )),
    (e[Nc] = t),
    t
  );
}
function a0(e, t) {
  var r;
  const n = new Map();
  for (const i of e)
    for (const s of i.stack || []) {
      let o = n.get(s.file);
      o || ((o = { errors: [], content: void 0 }), n.set(s.file, o));
    }
  for (const i of t) {
    const { action: s, stack: o, message: l } = i;
    !s ||
      !o ||
      (r = n.get(o[0].file)) == null ||
      r.errors.push({ line: o[0].line || 0, message: l });
  }
  return n;
}
const ns = new Set([
  "page.route",
  "page.routefromhar",
  "page.unroute",
  "page.unrouteall",
  "browsercontext.route",
  "browsercontext.routefromhar",
  "browsercontext.unroute",
  "browsercontext.unrouteall",
]);
{
  for (const e of [...ns]) ns.add(e + "async");
  for (const e of [
    "page.route_from_har",
    "page.unroute_all",
    "context.route_from_har",
    "context.unroute_all",
  ])
    ns.add(e);
}
function u0(e) {
  return e.class === "Route" || ns.has(e.apiName.toLowerCase());
}
const c0 = 50,
  Os = ({
    sidebarSize: e,
    sidebarHidden: t = !1,
    sidebarIsFirst: n = !1,
    orientation: r = "vertical",
    minSidebarSize: i = c0,
    settingName: s,
    sidebar: o,
    main: l,
  }) => {
    const a = Math.max(i, e) * window.devicePixelRatio,
      [u, c] = Or(s ? s + "." + r + ":size" : void 0, a),
      [p, f] = Or(s ? s + "." + r + ":size" : void 0, a),
      [g, y] = b.useState(null),
      [w, x] = _n();
    let h;
    r === "vertical"
      ? ((h = p / window.devicePixelRatio),
        w && w.height < h && (h = w.height - 10))
      : ((h = u / window.devicePixelRatio),
        w && w.width < h && (h = w.width - 10)),
      (document.body.style.userSelect = g ? "none" : "inherit");
    let m = {};
    return (
      r === "vertical"
        ? n
          ? (m = {
              top: g ? 0 : h - 4,
              bottom: g ? 0 : void 0,
              height: g ? "initial" : 8,
            })
          : (m = {
              bottom: g ? 0 : h - 4,
              top: g ? 0 : void 0,
              height: g ? "initial" : 8,
            })
        : n
          ? (m = {
              left: g ? 0 : h - 4,
              right: g ? 0 : void 0,
              width: g ? "initial" : 8,
            })
          : (m = {
              right: g ? 0 : h - 4,
              left: g ? 0 : void 0,
              width: g ? "initial" : 8,
            }),
      d.jsxs("div", {
        className: Ne("split-view", r, n && "sidebar-first"),
        ref: x,
        children: [
          d.jsx("div", { className: "split-view-main", children: l }),
          !t &&
            d.jsx("div", {
              style: { flexBasis: h },
              className: "split-view-sidebar",
              children: o,
            }),
          !t &&
            d.jsx("div", {
              style: m,
              className: "split-view-resizer",
              onMouseDown: (v) =>
                y({
                  offset: r === "vertical" ? v.clientY : v.clientX,
                  size: h,
                }),
              onMouseUp: () => y(null),
              onMouseMove: (v) => {
                if (!v.buttons) y(null);
                else if (g) {
                  const N =
                      (r === "vertical" ? v.clientY : v.clientX) - g.offset,
                    E = n ? g.size + N : g.size - N,
                    A = v.target.parentElement.getBoundingClientRect(),
                    _ = Math.min(
                      Math.max(i, E),
                      (r === "vertical" ? A.height : A.width) - i,
                    );
                  r === "vertical"
                    ? f(_ * window.devicePixelRatio)
                    : c(_ * window.devicePixelRatio);
                }
              },
            }),
        ],
      })
    );
  };
function io(e, t = "'") {
  const n = JSON.stringify(e),
    r = n.substring(1, n.length - 1).replace(/\\"/g, '"');
  if (t === "'") return t + r.replace(/[']/g, "\\'") + t;
  if (t === '"') return t + r.replace(/["]/g, '\\"') + t;
  if (t === "`") return t + r.replace(/[`]/g, "`") + t;
  throw new Error("Invalid escape char");
}
function zs(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
function Ch(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}
function Ye(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) t += d0(e, n);
  return t;
}
function kr(e) {
  return `"${Ye(e).replace(/\\ /g, " ")}"`;
}
function d0(e, t) {
  const n = e.charCodeAt(t);
  return n === 0
    ? "�"
    : (n >= 1 && n <= 31) ||
        (n >= 48 && n <= 57 && (t === 0 || (t === 1 && e.charCodeAt(0) === 45)))
      ? "\\" + n.toString(16) + " "
      : t === 0 && n === 45 && e.length === 1
        ? "\\" + e.charAt(t)
        : n >= 128 ||
            n === 45 ||
            n === 95 ||
            (n >= 48 && n <= 57) ||
            (n >= 65 && n <= 90) ||
            (n >= 97 && n <= 122)
          ? e.charAt(t)
          : "\\" + e.charAt(t);
}
let ln;
function f0() {
  ln = new Map();
}
function We(e) {
  let t = ln == null ? void 0 : ln.get(e);
  return (
    t === void 0 &&
      ((t = e
        .replace(/\u200b/g, "")
        .trim()
        .replace(/\s+/g, " ")),
      ln == null || ln.set(e, t)),
    t
  );
}
function so(e) {
  return e.replace(/(^|[^\\])(\\\\)*\\(['"`])/g, "$1$2$3");
}
function bh(e) {
  return e.unicode || e.unicodeSets
    ? String(e)
    : String(e)
        .replace(/(^|[^\\])(\\\\)*(["'`])/g, "$1$2\\$3")
        .replace(/>>/g, "\\>\\>");
}
function Ze(e, t) {
  return typeof e != "string" ? bh(e) : `${JSON.stringify(e)}${t ? "s" : "i"}`;
}
function Te(e, t) {
  return typeof e != "string"
    ? bh(e)
    : `"${e.replace(/\\/g, "\\\\").replace(/["]/g, '\\"')}"${t ? "s" : "i"}`;
}
function h0(e, t, n = "") {
  if (e.length <= t) return e;
  const r = [...e];
  return r.length > t ? r.slice(0, t - n.length).join("") + n : r.join("");
}
function Cc(e, t) {
  return h0(e, t, "…");
}
function p0(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const Lh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
function m0(e) {
  return e.replace(/[&<>"']/gu, (t) => Lh[t]);
}
function g0(e) {
  return e.replace(/[&<]/gu, (t) => Lh[t]);
}
const re = function (e, t, n) {
  return e >= t && e <= n;
};
function Me(e) {
  return re(e, 48, 57);
}
function bc(e) {
  return Me(e) || re(e, 65, 70) || re(e, 97, 102);
}
function v0(e) {
  return re(e, 65, 90);
}
function y0(e) {
  return re(e, 97, 122);
}
function w0(e) {
  return v0(e) || y0(e);
}
function x0(e) {
  return e >= 128;
}
function rs(e) {
  return w0(e) || x0(e) || e === 95;
}
function Lc(e) {
  return rs(e) || Me(e) || e === 45;
}
function S0(e) {
  return re(e, 0, 8) || e === 11 || re(e, 14, 31) || e === 127;
}
function is(e) {
  return e === 10;
}
function St(e) {
  return is(e) || e === 9 || e === 32;
}
const _0 = 1114111;
class Xa extends Error {
  constructor(t) {
    super(t), (this.name = "InvalidCharacterError");
  }
}
function E0(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (
      (r === 13 && e.charCodeAt(n + 1) === 10 && ((r = 10), n++),
      (r === 13 || r === 12) && (r = 10),
      r === 0 && (r = 65533),
      re(r, 55296, 56319) && re(e.charCodeAt(n + 1), 56320, 57343))
    ) {
      const i = r - 55296,
        s = e.charCodeAt(n + 1) - 56320;
      (r = Math.pow(2, 16) + i * Math.pow(2, 10) + s), n++;
    }
    t.push(r);
  }
  return t;
}
function se(e) {
  if (e <= 65535) return String.fromCharCode(e);
  e -= Math.pow(2, 16);
  const t = Math.floor(e / Math.pow(2, 10)) + 55296,
    n = (e % Math.pow(2, 10)) + 56320;
  return String.fromCharCode(t) + String.fromCharCode(n);
}
function T0(e) {
  const t = E0(e);
  let n = -1;
  const r = [];
  let i;
  const s = function (k) {
      return k >= t.length ? -1 : t[k];
    },
    o = function (k) {
      if ((k === void 0 && (k = 1), k > 3))
        throw "Spec Error: no more than three codepoints of lookahead.";
      return s(n + k);
    },
    l = function (k) {
      return k === void 0 && (k = 1), (n += k), (i = s(n)), !0;
    },
    a = function () {
      return (n -= 1), !0;
    },
    u = function (k) {
      return k === void 0 && (k = i), k === -1;
    },
    c = function () {
      if ((p(), l(), St(i))) {
        for (; St(o()); ) l();
        return new Hl();
      } else {
        if (i === 34) return y();
        if (i === 35)
          if (Lc(o()) || h(o(1), o(2))) {
            const k = new Vh("");
            return v(o(1), o(2), o(3)) && (k.type = "id"), (k.value = C()), k;
          } else return new ye(i);
        else
          return i === 36
            ? o() === 61
              ? (l(), new b0())
              : new ye(i)
            : i === 39
              ? y()
              : i === 40
                ? new Dh()
                : i === 41
                  ? new Fh()
                  : i === 42
                    ? o() === 61
                      ? (l(), new L0())
                      : new ye(i)
                    : i === 43
                      ? E()
                        ? (a(), f())
                        : new ye(i)
                      : i === 44
                        ? new Rh()
                        : i === 45
                          ? E()
                            ? (a(), f())
                            : o(1) === 45 && o(2) === 62
                              ? (l(2), new Mh())
                              : S()
                                ? (a(), g())
                                : new ye(i)
                          : i === 46
                            ? E()
                              ? (a(), f())
                              : new ye(i)
                            : i === 58
                              ? new Ih()
                              : i === 59
                                ? new Ph()
                                : i === 60
                                  ? o(1) === 33 && o(2) === 45 && o(3) === 45
                                    ? (l(3), new jh())
                                    : new ye(i)
                                  : i === 64
                                    ? v(o(1), o(2), o(3))
                                      ? new Bh(C())
                                      : new ye(i)
                                    : i === 91
                                      ? new zh()
                                      : i === 92
                                        ? m()
                                          ? (a(), g())
                                          : new ye(i)
                                        : i === 93
                                          ? new Ul()
                                          : i === 94
                                            ? o() === 61
                                              ? (l(), new C0())
                                              : new ye(i)
                                            : i === 123
                                              ? new $h()
                                              : i === 124
                                                ? o() === 61
                                                  ? (l(), new N0())
                                                  : o() === 124
                                                    ? (l(), new Hh())
                                                    : new ye(i)
                                                : i === 125
                                                  ? new Oh()
                                                  : i === 126
                                                    ? o() === 61
                                                      ? (l(), new k0())
                                                      : new ye(i)
                                                    : Me(i)
                                                      ? (a(), f())
                                                      : rs(i)
                                                        ? (a(), g())
                                                        : u()
                                                          ? new os()
                                                          : new ye(i);
      }
    },
    p = function () {
      for (; o(1) === 47 && o(2) === 42; )
        for (l(2); ; )
          if ((l(), i === 42 && o() === 47)) {
            l();
            break;
          } else if (u()) return;
    },
    f = function () {
      const k = A();
      if (v(o(1), o(2), o(3))) {
        const M = new A0();
        return (
          (M.value = k.value),
          (M.repr = k.repr),
          (M.type = k.type),
          (M.unit = C()),
          M
        );
      } else if (o() === 37) {
        l();
        const M = new Qh();
        return (M.value = k.value), (M.repr = k.repr), M;
      } else {
        const M = new Xh();
        return (M.value = k.value), (M.repr = k.repr), (M.type = k.type), M;
      }
    },
    g = function () {
      const k = C();
      if (k.toLowerCase() === "url" && o() === 40) {
        for (l(); St(o(1)) && St(o(2)); ) l();
        return o() === 34 || o() === 39
          ? new ls(k)
          : St(o()) && (o(2) === 34 || o(2) === 39)
            ? new ls(k)
            : w();
      } else return o() === 40 ? (l(), new ls(k)) : new Uh(k);
    },
    y = function (k) {
      k === void 0 && (k = i);
      let M = "";
      for (; l(); ) {
        if (i === k || u()) return new Wh(M);
        if (is(i)) return a(), new Ah();
        i === 92 ? u(o()) || (is(o()) ? l() : (M += se(x()))) : (M += se(i));
      }
      throw new Error("Internal error");
    },
    w = function () {
      const k = new qh("");
      for (; St(o()); ) l();
      if (u(o())) return k;
      for (; l(); ) {
        if (i === 41 || u()) return k;
        if (St(i)) {
          for (; St(o()); ) l();
          return o() === 41 || u(o()) ? (l(), k) : (T(), new ss());
        } else {
          if (i === 34 || i === 39 || i === 40 || S0(i)) return T(), new ss();
          if (i === 92)
            if (m()) k.value += se(x());
            else return T(), new ss();
          else k.value += se(i);
        }
      }
      throw new Error("Internal error");
    },
    x = function () {
      if ((l(), bc(i))) {
        const k = [i];
        for (let $ = 0; $ < 5 && bc(o()); $++) l(), k.push(i);
        St(o()) && l();
        let M = parseInt(
          k
            .map(function ($) {
              return String.fromCharCode($);
            })
            .join(""),
          16,
        );
        return M > _0 && (M = 65533), M;
      } else return u() ? 65533 : i;
    },
    h = function (k, M) {
      return !(k !== 92 || is(M));
    },
    m = function () {
      return h(i, o());
    },
    v = function (k, M, $) {
      return k === 45
        ? rs(M) || M === 45 || h(M, $)
        : rs(k)
          ? !0
          : k === 92
            ? h(k, M)
            : !1;
    },
    S = function () {
      return v(i, o(1), o(2));
    },
    N = function (k, M, $) {
      return k === 43 || k === 45
        ? !!(Me(M) || (M === 46 && Me($)))
        : k === 46
          ? !!Me(M)
          : !!Me(k);
    },
    E = function () {
      return N(i, o(1), o(2));
    },
    C = function () {
      let k = "";
      for (; l(); )
        if (Lc(i)) k += se(i);
        else if (m()) k += se(x());
        else return a(), k;
      throw new Error("Internal parse error");
    },
    A = function () {
      let k = "",
        M = "integer";
      for ((o() === 43 || o() === 45) && (l(), (k += se(i))); Me(o()); )
        l(), (k += se(i));
      if (o(1) === 46 && Me(o(2)))
        for (l(), k += se(i), l(), k += se(i), M = "number"; Me(o()); )
          l(), (k += se(i));
      const $ = o(1),
        ce = o(2),
        Fe = o(3);
      if (($ === 69 || $ === 101) && Me(ce))
        for (l(), k += se(i), l(), k += se(i), M = "number"; Me(o()); )
          l(), (k += se(i));
      else if (($ === 69 || $ === 101) && (ce === 43 || ce === 45) && Me(Fe))
        for (
          l(), k += se(i), l(), k += se(i), l(), k += se(i), M = "number";
          Me(o());

        )
          l(), (k += se(i));
      const me = _(k);
      return { type: M, value: me, repr: k };
    },
    _ = function (k) {
      return +k;
    },
    T = function () {
      for (; l(); ) {
        if (i === 41 || u()) return;
        m() && x();
      }
    };
  let j = 0;
  for (; !u(o()); )
    if ((r.push(c()), j++, j > t.length * 2))
      throw new Error("I'm infinite-looping!");
  return r;
}
class te {
  constructor() {
    this.tokenType = "";
  }
  toJSON() {
    return { token: this.tokenType };
  }
  toString() {
    return this.tokenType;
  }
  toSource() {
    return "" + this;
  }
}
class Ah extends te {
  constructor() {
    super(...arguments), (this.tokenType = "BADSTRING");
  }
}
class ss extends te {
  constructor() {
    super(...arguments), (this.tokenType = "BADURL");
  }
}
class Hl extends te {
  constructor() {
    super(...arguments), (this.tokenType = "WHITESPACE");
  }
  toString() {
    return "WS";
  }
  toSource() {
    return " ";
  }
}
class jh extends te {
  constructor() {
    super(...arguments), (this.tokenType = "CDO");
  }
  toSource() {
    return "<!--";
  }
}
class Mh extends te {
  constructor() {
    super(...arguments), (this.tokenType = "CDC");
  }
  toSource() {
    return "-->";
  }
}
class Ih extends te {
  constructor() {
    super(...arguments), (this.tokenType = ":");
  }
}
class Ph extends te {
  constructor() {
    super(...arguments), (this.tokenType = ";");
  }
}
class Rh extends te {
  constructor() {
    super(...arguments), (this.tokenType = ",");
  }
}
class cr extends te {
  constructor() {
    super(...arguments), (this.value = ""), (this.mirror = "");
  }
}
class $h extends cr {
  constructor() {
    super(), (this.tokenType = "{"), (this.value = "{"), (this.mirror = "}");
  }
}
class Oh extends cr {
  constructor() {
    super(), (this.tokenType = "}"), (this.value = "}"), (this.mirror = "{");
  }
}
class zh extends cr {
  constructor() {
    super(), (this.tokenType = "["), (this.value = "["), (this.mirror = "]");
  }
}
class Ul extends cr {
  constructor() {
    super(), (this.tokenType = "]"), (this.value = "]"), (this.mirror = "[");
  }
}
class Dh extends cr {
  constructor() {
    super(), (this.tokenType = "("), (this.value = "("), (this.mirror = ")");
  }
}
class Fh extends cr {
  constructor() {
    super(), (this.tokenType = ")"), (this.value = ")"), (this.mirror = "(");
  }
}
class k0 extends te {
  constructor() {
    super(...arguments), (this.tokenType = "~=");
  }
}
class N0 extends te {
  constructor() {
    super(...arguments), (this.tokenType = "|=");
  }
}
class C0 extends te {
  constructor() {
    super(...arguments), (this.tokenType = "^=");
  }
}
class b0 extends te {
  constructor() {
    super(...arguments), (this.tokenType = "$=");
  }
}
class L0 extends te {
  constructor() {
    super(...arguments), (this.tokenType = "*=");
  }
}
class Hh extends te {
  constructor() {
    super(...arguments), (this.tokenType = "||");
  }
}
class os extends te {
  constructor() {
    super(...arguments), (this.tokenType = "EOF");
  }
  toSource() {
    return "";
  }
}
class ye extends te {
  constructor(t) {
    super(),
      (this.tokenType = "DELIM"),
      (this.value = ""),
      (this.value = se(t));
  }
  toString() {
    return "DELIM(" + this.value + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
  toSource() {
    return this.value === "\\"
      ? `\\
`
      : this.value;
  }
}
class dr extends te {
  constructor() {
    super(...arguments), (this.value = "");
  }
  ASCIIMatch(t) {
    return this.value.toLowerCase() === t.toLowerCase();
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
}
class Uh extends dr {
  constructor(t) {
    super(), (this.tokenType = "IDENT"), (this.value = t);
  }
  toString() {
    return "IDENT(" + this.value + ")";
  }
  toSource() {
    return gi(this.value);
  }
}
class ls extends dr {
  constructor(t) {
    super(),
      (this.tokenType = "FUNCTION"),
      (this.value = t),
      (this.mirror = ")");
  }
  toString() {
    return "FUNCTION(" + this.value + ")";
  }
  toSource() {
    return gi(this.value) + "(";
  }
}
class Bh extends dr {
  constructor(t) {
    super(), (this.tokenType = "AT-KEYWORD"), (this.value = t);
  }
  toString() {
    return "AT(" + this.value + ")";
  }
  toSource() {
    return "@" + gi(this.value);
  }
}
class Vh extends dr {
  constructor(t) {
    super(),
      (this.tokenType = "HASH"),
      (this.value = t),
      (this.type = "unrestricted");
  }
  toString() {
    return "HASH(" + this.value + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.type = this.type), t;
  }
  toSource() {
    return this.type === "id" ? "#" + gi(this.value) : "#" + j0(this.value);
  }
}
class Wh extends dr {
  constructor(t) {
    super(), (this.tokenType = "STRING"), (this.value = t);
  }
  toString() {
    return '"' + Kh(this.value) + '"';
  }
}
class qh extends dr {
  constructor(t) {
    super(), (this.tokenType = "URL"), (this.value = t);
  }
  toString() {
    return "URL(" + this.value + ")";
  }
  toSource() {
    return 'url("' + Kh(this.value) + '")';
  }
}
class Xh extends te {
  constructor() {
    super(),
      (this.tokenType = "NUMBER"),
      (this.type = "integer"),
      (this.repr = "");
  }
  toString() {
    return this.type === "integer"
      ? "INT(" + this.value + ")"
      : "NUMBER(" + this.value + ")";
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.value = this.value), (t.type = this.type), (t.repr = this.repr), t
    );
  }
  toSource() {
    return this.repr;
  }
}
class Qh extends te {
  constructor() {
    super(), (this.tokenType = "PERCENTAGE"), (this.repr = "");
  }
  toString() {
    return "PERCENTAGE(" + this.value + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.repr = this.repr), t;
  }
  toSource() {
    return this.repr + "%";
  }
}
class A0 extends te {
  constructor() {
    super(),
      (this.tokenType = "DIMENSION"),
      (this.type = "integer"),
      (this.repr = ""),
      (this.unit = "");
  }
  toString() {
    return "DIM(" + this.value + "," + this.unit + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (
      (t.value = this.value),
      (t.type = this.type),
      (t.repr = this.repr),
      (t.unit = this.unit),
      t
    );
  }
  toSource() {
    const t = this.repr;
    let n = gi(this.unit);
    return (
      n[0].toLowerCase() === "e" &&
        (n[1] === "-" || re(n.charCodeAt(1), 48, 57)) &&
        (n = "\\65 " + n.slice(1, n.length)),
      t + n
    );
  }
}
function gi(e) {
  e = "" + e;
  let t = "";
  const n = e.charCodeAt(0);
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    if (i === 0) throw new Xa("Invalid character: the input contains U+0000.");
    re(i, 1, 31) ||
    i === 127 ||
    (r === 0 && re(i, 48, 57)) ||
    (r === 1 && re(i, 48, 57) && n === 45)
      ? (t += "\\" + i.toString(16) + " ")
      : i >= 128 ||
          i === 45 ||
          i === 95 ||
          re(i, 48, 57) ||
          re(i, 65, 90) ||
          re(i, 97, 122)
        ? (t += e[r])
        : (t += "\\" + e[r]);
  }
  return t;
}
function j0(e) {
  e = "" + e;
  let t = "";
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Xa("Invalid character: the input contains U+0000.");
    r >= 128 ||
    r === 45 ||
    r === 95 ||
    re(r, 48, 57) ||
    re(r, 65, 90) ||
    re(r, 97, 122)
      ? (t += e[n])
      : (t += "\\" + r.toString(16) + " ");
  }
  return t;
}
function Kh(e) {
  e = "" + e;
  let t = "";
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Xa("Invalid character: the input contains U+0000.");
    re(r, 1, 31) || r === 127
      ? (t += "\\" + r.toString(16) + " ")
      : r === 34 || r === 92
        ? (t += "\\" + e[n])
        : (t += e[n]);
  }
  return t;
}
class Pe extends Error {}
function M0(e, t) {
  let n;
  try {
    (n = T0(e)), n[n.length - 1] instanceof os || n.push(new os());
  } catch (_) {
    const T = _.message + ` while parsing selector "${e}"`,
      j = (_.stack || "").indexOf(_.message);
    throw (
      (j !== -1 &&
        (_.stack =
          _.stack.substring(0, j) +
          T +
          _.stack.substring(j + _.message.length)),
      (_.message = T),
      _)
    );
  }
  const r = n.find(
    (_) =>
      _ instanceof Bh ||
      _ instanceof Ah ||
      _ instanceof ss ||
      _ instanceof Hh ||
      _ instanceof jh ||
      _ instanceof Mh ||
      _ instanceof Ph ||
      _ instanceof $h ||
      _ instanceof Oh ||
      _ instanceof qh ||
      _ instanceof Qh,
  );
  if (r)
    throw new Pe(
      `Unsupported token "${r.toSource()}" while parsing selector "${e}"`,
    );
  let i = 0;
  const s = new Set();
  function o() {
    return new Pe(
      `Unexpected token "${n[i].toSource()}" while parsing selector "${e}"`,
    );
  }
  function l() {
    for (; n[i] instanceof Hl; ) i++;
  }
  function a(_ = i) {
    return n[_] instanceof Uh;
  }
  function u(_ = i) {
    return n[_] instanceof Wh;
  }
  function c(_ = i) {
    return n[_] instanceof Xh;
  }
  function p(_ = i) {
    return n[_] instanceof Rh;
  }
  function f(_ = i) {
    return n[_] instanceof Dh;
  }
  function g(_ = i) {
    return n[_] instanceof Fh;
  }
  function y(_ = i) {
    return n[_] instanceof ls;
  }
  function w(_ = i) {
    return n[_] instanceof ye && n[_].value === "*";
  }
  function x(_ = i) {
    return n[_] instanceof os;
  }
  function h(_ = i) {
    return n[_] instanceof ye && [">", "+", "~"].includes(n[_].value);
  }
  function m(_ = i) {
    return p(_) || g(_) || x(_) || h(_) || n[_] instanceof Hl;
  }
  function v() {
    const _ = [S()];
    for (; l(), !!p(); ) i++, _.push(S());
    return _;
  }
  function S() {
    return l(), c() || u() ? n[i++].value : N();
  }
  function N() {
    const _ = { simples: [] };
    for (
      l(),
        h()
          ? _.simples.push({
              selector: { functions: [{ name: "scope", args: [] }] },
              combinator: "",
            })
          : _.simples.push({ selector: E(), combinator: "" });
      ;

    ) {
      if ((l(), h()))
        (_.simples[_.simples.length - 1].combinator = n[i++].value), l();
      else if (m()) break;
      _.simples.push({ combinator: "", selector: E() });
    }
    return _;
  }
  function E() {
    let _ = "";
    const T = [];
    for (; !m(); )
      if (a() || w()) _ += n[i++].toSource();
      else if (n[i] instanceof Vh) _ += n[i++].toSource();
      else if (n[i] instanceof ye && n[i].value === ".")
        if ((i++, a())) _ += "." + n[i++].toSource();
        else throw o();
      else if (n[i] instanceof Ih)
        if ((i++, a()))
          if (!t.has(n[i].value.toLowerCase())) _ += ":" + n[i++].toSource();
          else {
            const j = n[i++].value.toLowerCase();
            T.push({ name: j, args: [] }), s.add(j);
          }
        else if (y()) {
          const j = n[i++].value.toLowerCase();
          if (
            (t.has(j)
              ? (T.push({ name: j, args: v() }), s.add(j))
              : (_ += `:${j}(${C()})`),
            l(),
            !g())
          )
            throw o();
          i++;
        } else throw o();
      else if (n[i] instanceof zh) {
        for (_ += "[", i++; !(n[i] instanceof Ul) && !x(); )
          _ += n[i++].toSource();
        if (!(n[i] instanceof Ul)) throw o();
        (_ += "]"), i++;
      } else throw o();
    if (!_ && !T.length) throw o();
    return { css: _ || void 0, functions: T };
  }
  function C() {
    let _ = "",
      T = 1;
    for (; !x() && ((f() || y()) && T++, g() && T--, !!T); )
      _ += n[i++].toSource();
    return _;
  }
  const A = v();
  if (!x()) throw o();
  if (A.some((_) => typeof _ != "object" || !("simples" in _)))
    throw new Pe(`Error while parsing selector "${e}"`);
  return { selector: A, names: Array.from(s) };
}
const Bl = new Set([
    "internal:has",
    "internal:has-not",
    "internal:and",
    "internal:or",
    "internal:chain",
    "left-of",
    "right-of",
    "above",
    "below",
    "near",
  ]),
  I0 = new Set(["left-of", "right-of", "above", "below", "near"]),
  Gh = new Set([
    "not",
    "is",
    "where",
    "has",
    "scope",
    "light",
    "visible",
    "text",
    "text-matches",
    "text-is",
    "has-text",
    "above",
    "below",
    "right-of",
    "left-of",
    "near",
    "nth-match",
  ]);
function oo(e) {
  const t = $0(e),
    n = [];
  for (const r of t.parts) {
    if (r.name === "css" || r.name === "css:light") {
      r.name === "css:light" && (r.body = ":light(" + r.body + ")");
      const i = M0(r.body, Gh);
      n.push({ name: "css", body: i.selector, source: r.body });
      continue;
    }
    if (Bl.has(r.name)) {
      let i, s;
      try {
        const u = JSON.parse("[" + r.body + "]");
        if (
          !Array.isArray(u) ||
          u.length < 1 ||
          u.length > 2 ||
          typeof u[0] != "string"
        )
          throw new Pe(`Malformed selector: ${r.name}=` + r.body);
        if (((i = u[0]), u.length === 2)) {
          if (typeof u[1] != "number" || !I0.has(r.name))
            throw new Pe(`Malformed selector: ${r.name}=` + r.body);
          s = u[1];
        }
      } catch {
        throw new Pe(`Malformed selector: ${r.name}=` + r.body);
      }
      const o = {
          name: r.name,
          source: r.body,
          body: { parsed: oo(i), distance: s },
        },
        l = [...o.body.parsed.parts]
          .reverse()
          .find(
            (u) => u.name === "internal:control" && u.body === "enter-frame",
          ),
        a = l ? o.body.parsed.parts.indexOf(l) : -1;
      a !== -1 &&
        P0(o.body.parsed.parts.slice(0, a + 1), n.slice(0, a + 1)) &&
        o.body.parsed.parts.splice(0, a + 1),
        n.push(o);
      continue;
    }
    n.push({ ...r, source: r.body });
  }
  if (Bl.has(n[0].name))
    throw new Pe(`"${n[0].name}" selector cannot be first`);
  return { capture: t.capture, parts: n };
}
function P0(e, t) {
  return Sn({ parts: e }) === Sn({ parts: t });
}
function Sn(e, t) {
  return typeof e == "string"
    ? e
    : e.parts
        .map((n, r) => {
          let i = !0;
          !t &&
            r !== e.capture &&
            (n.name === "css" ||
              (n.name === "xpath" && n.source.startsWith("//")) ||
              n.source.startsWith("..")) &&
            (i = !1);
          const s = i ? n.name + "=" : "";
          return `${r === e.capture ? "*" : ""}${s}${n.source}`;
        })
        .join(" >> ");
}
function R0(e, t) {
  const n = (r, i) => {
    for (const s of r.parts) t(s, i), Bl.has(s.name) && n(s.body.parsed, !0);
  };
  n(e, !1);
}
function $0(e) {
  let t = 0,
    n,
    r = 0;
  const i = { parts: [] },
    s = () => {
      const l = e.substring(r, t).trim(),
        a = l.indexOf("=");
      let u, c;
      a !== -1 &&
      l
        .substring(0, a)
        .trim()
        .match(/^[a-zA-Z_0-9-+:*]+$/)
        ? ((u = l.substring(0, a).trim()), (c = l.substring(a + 1)))
        : (l.length > 1 && l[0] === '"' && l[l.length - 1] === '"') ||
            (l.length > 1 && l[0] === "'" && l[l.length - 1] === "'")
          ? ((u = "text"), (c = l))
          : /^\(*\/\//.test(l) || l.startsWith("..")
            ? ((u = "xpath"), (c = l))
            : ((u = "css"), (c = l));
      let p = !1;
      if (
        (u[0] === "*" && ((p = !0), (u = u.substring(1))),
        i.parts.push({ name: u, body: c }),
        p)
      ) {
        if (i.capture !== void 0)
          throw new Pe(
            "Only one of the selectors can capture using * modifier",
          );
        i.capture = i.parts.length - 1;
      }
    };
  if (!e.includes(">>")) return (t = e.length), s(), i;
  const o = () => {
    const a = e.substring(r, t).match(/^\s*text\s*=(.*)$/);
    return !!a && !!a[1];
  };
  for (; t < e.length; ) {
    const l = e[t];
    l === "\\" && t + 1 < e.length
      ? (t += 2)
      : l === n
        ? ((n = void 0), t++)
        : !n && (l === '"' || l === "'" || l === "`") && !o()
          ? ((n = l), t++)
          : !n && l === ">" && e[t + 1] === ">"
            ? (s(), (t += 2), (r = t))
            : t++;
  }
  return s(), i;
}
function mn(e, t) {
  let n = 0,
    r = e.length === 0;
  const i = () => e[n] || "",
    s = () => {
      const x = i();
      return ++n, (r = n >= e.length), x;
    },
    o = (x) => {
      throw r
        ? new Pe(`Unexpected end of selector while parsing selector \`${e}\``)
        : new Pe(
            `Error while parsing selector \`${e}\` - unexpected symbol "${i()}" at position ${n}` +
              (x ? " during " + x : ""),
          );
    };
  function l() {
    for (; !r && /\s/.test(i()); ) s();
  }
  function a(x) {
    return (
      x >= "" ||
      (x >= "0" && x <= "9") ||
      (x >= "A" && x <= "Z") ||
      (x >= "a" && x <= "z") ||
      (x >= "0" && x <= "9") ||
      x === "_" ||
      x === "-"
    );
  }
  function u() {
    let x = "";
    for (l(); !r && a(i()); ) x += s();
    return x;
  }
  function c(x) {
    let h = s();
    for (h !== x && o("parsing quoted string"); !r && i() !== x; )
      i() === "\\" && s(), (h += s());
    return i() !== x && o("parsing quoted string"), (h += s()), h;
  }
  function p() {
    s() !== "/" && o("parsing regular expression");
    let x = "",
      h = !1;
    for (; !r; ) {
      if (i() === "\\") (x += s()), r && o("parsing regular expression");
      else if (h && i() === "]") h = !1;
      else if (!h && i() === "[") h = !0;
      else if (!h && i() === "/") break;
      x += s();
    }
    s() !== "/" && o("parsing regular expression");
    let m = "";
    for (; !r && i().match(/[dgimsuy]/); ) m += s();
    try {
      return new RegExp(x, m);
    } catch (v) {
      throw new Pe(`Error while parsing selector \`${e}\`: ${v.message}`);
    }
  }
  function f() {
    let x = "";
    return (
      l(),
      i() === "'" || i() === '"' ? (x = c(i()).slice(1, -1)) : (x = u()),
      x || o("parsing property path"),
      x
    );
  }
  function g() {
    l();
    let x = "";
    return (
      r || (x += s()),
      !r && x !== "=" && (x += s()),
      ["=", "*=", "^=", "$=", "|=", "~="].includes(x) || o("parsing operator"),
      x
    );
  }
  function y() {
    s();
    const x = [];
    for (x.push(f()), l(); i() === "."; ) s(), x.push(f()), l();
    if (i() === "]")
      return (
        s(),
        {
          name: x.join("."),
          jsonPath: x,
          op: "<truthy>",
          value: null,
          caseSensitive: !1,
        }
      );
    const h = g();
    let m,
      v = !0;
    if ((l(), i() === "/")) {
      if (h !== "=")
        throw new Pe(
          `Error while parsing selector \`${e}\` - cannot use ${h} in attribute with regular expression`,
        );
      m = p();
    } else if (i() === "'" || i() === '"')
      (m = c(i()).slice(1, -1)),
        l(),
        i() === "i" || i() === "I"
          ? ((v = !1), s())
          : (i() === "s" || i() === "S") && ((v = !0), s());
    else {
      for (m = ""; !r && (a(i()) || i() === "+" || i() === "."); ) m += s();
      m === "true"
        ? (m = !0)
        : m === "false"
          ? (m = !1)
          : t || ((m = +m), Number.isNaN(m) && o("parsing attribute value"));
    }
    if (
      (l(),
      i() !== "]" && o("parsing attribute value"),
      s(),
      h !== "=" && typeof m != "string")
    )
      throw new Pe(
        `Error while parsing selector \`${e}\` - cannot use ${h} in attribute with non-string matching value - ${m}`,
      );
    return {
      name: x.join("."),
      jsonPath: x,
      op: h,
      value: m,
      caseSensitive: v,
    };
  }
  const w = { name: "", attributes: [] };
  for (w.name = u(), l(); i() === "["; ) w.attributes.push(y()), l();
  if ((r || o(void 0), !w.name && !w.attributes.length))
    throw new Pe(
      `Error while parsing selector \`${e}\` - selector cannot be empty`,
    );
  return w;
}
function Yt(e, t, n = !1) {
  return Yh(e, t, n)[0];
}
function Yh(e, t, n = !1, r = 20, i) {
  try {
    return Mn(new B0[e](i), oo(t), n, r);
  } catch {
    return [t];
  }
}
function Mn(e, t, n = !1, r = 20) {
  const i = [...t.parts];
  for (let l = 0; l < i.length - 1; l++)
    if (
      i[l].name === "nth" &&
      i[l + 1].name === "internal:control" &&
      i[l + 1].body === "enter-frame"
    ) {
      const [a] = i.splice(l, 1);
      i.splice(l + 1, 0, a);
    }
  const s = [];
  let o = n ? "frame-locator" : "page";
  for (let l = 0; l < i.length; l++) {
    const a = i[l],
      u = o;
    if (((o = "locator"), a.name === "nth")) {
      a.body === "0"
        ? s.push([
            e.generateLocator(u, "first", ""),
            e.generateLocator(u, "nth", "0"),
          ])
        : a.body === "-1"
          ? s.push([
              e.generateLocator(u, "last", ""),
              e.generateLocator(u, "nth", "-1"),
            ])
          : s.push([e.generateLocator(u, "nth", a.body)]);
      continue;
    }
    if (a.name === "internal:text") {
      const { exact: w, text: x } = Nr(a.body);
      s.push([e.generateLocator(u, "text", x, { exact: w })]);
      continue;
    }
    if (a.name === "internal:has-text") {
      const { exact: w, text: x } = Nr(a.body);
      if (!w) {
        s.push([e.generateLocator(u, "has-text", x, { exact: w })]);
        continue;
      }
    }
    if (a.name === "internal:has-not-text") {
      const { exact: w, text: x } = Nr(a.body);
      if (!w) {
        s.push([e.generateLocator(u, "has-not-text", x, { exact: w })]);
        continue;
      }
    }
    if (a.name === "internal:has") {
      const w = Mn(e, a.body.parsed, !1, r);
      s.push(w.map((x) => e.generateLocator(u, "has", x)));
      continue;
    }
    if (a.name === "internal:has-not") {
      const w = Mn(e, a.body.parsed, !1, r);
      s.push(w.map((x) => e.generateLocator(u, "hasNot", x)));
      continue;
    }
    if (a.name === "internal:and") {
      const w = Mn(e, a.body.parsed, !1, r);
      s.push(w.map((x) => e.generateLocator(u, "and", x)));
      continue;
    }
    if (a.name === "internal:or") {
      const w = Mn(e, a.body.parsed, !1, r);
      s.push(w.map((x) => e.generateLocator(u, "or", x)));
      continue;
    }
    if (a.name === "internal:chain") {
      const w = Mn(e, a.body.parsed, !1, r);
      s.push(w.map((x) => e.generateLocator(u, "chain", x)));
      continue;
    }
    if (a.name === "internal:label") {
      const { exact: w, text: x } = Nr(a.body);
      s.push([e.generateLocator(u, "label", x, { exact: w })]);
      continue;
    }
    if (a.name === "internal:role") {
      const w = mn(a.body, !0),
        x = { attrs: [] };
      for (const h of w.attributes)
        h.name === "name"
          ? ((x.exact = h.caseSensitive), (x.name = h.value))
          : (h.name === "level" &&
              typeof h.value == "string" &&
              (h.value = +h.value),
            x.attrs.push({
              name: h.name === "include-hidden" ? "includeHidden" : h.name,
              value: h.value,
            }));
      s.push([e.generateLocator(u, "role", w.name, x)]);
      continue;
    }
    if (a.name === "internal:testid") {
      const w = mn(a.body, !0),
        { value: x } = w.attributes[0];
      s.push([e.generateLocator(u, "test-id", x)]);
      continue;
    }
    if (a.name === "internal:attr") {
      const w = mn(a.body, !0),
        { name: x, value: h, caseSensitive: m } = w.attributes[0],
        v = h,
        S = !!m;
      if (x === "placeholder") {
        s.push([e.generateLocator(u, "placeholder", v, { exact: S })]);
        continue;
      }
      if (x === "alt") {
        s.push([e.generateLocator(u, "alt", v, { exact: S })]);
        continue;
      }
      if (x === "title") {
        s.push([e.generateLocator(u, "title", v, { exact: S })]);
        continue;
      }
    }
    let c = "default";
    const p = i[l + 1];
    p &&
      p.name === "internal:control" &&
      p.body === "enter-frame" &&
      ((c = "frame"), (o = "frame-locator"), l++);
    const f = Sn({ parts: [a] }),
      g = e.generateLocator(u, c, f);
    if (
      c === "default" &&
      p &&
      ["internal:has-text", "internal:has-not-text"].includes(p.name)
    ) {
      const { exact: w, text: x } = Nr(p.body);
      if (!w) {
        const h = e.generateLocator(
            "locator",
            p.name === "internal:has-text" ? "has-text" : "has-not-text",
            x,
            { exact: w },
          ),
          m = {};
        p.name === "internal:has-text" ? (m.hasText = x) : (m.hasNotText = x);
        const v = e.generateLocator(u, "default", f, m);
        s.push([e.chainLocators([g, h]), v]), l++;
        continue;
      }
    }
    let y;
    if (["xpath", "css"].includes(a.name)) {
      const w = Sn({ parts: [a] }, !0);
      y = e.generateLocator(u, c, w);
    }
    s.push([g, y].filter(Boolean));
  }
  return O0(e, s, r);
}
function O0(e, t, n) {
  const r = t.map(() => ""),
    i = [],
    s = (o) => {
      if (o === t.length) return i.push(e.chainLocators(r)), r.length < n;
      for (const l of t[o]) if (((r[o] = l), !s(o + 1))) return !1;
      return !0;
    };
  return s(0), i;
}
function Nr(e) {
  let t = !1;
  const n = e.match(/^\/(.*)\/([igm]*)$/);
  return n
    ? { text: new RegExp(n[1], n[2]) }
    : (e.endsWith('"')
        ? ((e = JSON.parse(e)), (t = !0))
        : e.endsWith('"s')
          ? ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !0))
          : e.endsWith('"i') &&
            ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !1)),
      { exact: t, text: e });
}
class z0 {
  constructor(t) {
    this.preferredQuote = t;
  }
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, { hasText: ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, { hasNotText: ${this.toHasText(i.hasNotText)} })`
            : `locator(${this.quote(r)})`;
      case "frame":
        return `frameLocator(${this.quote(r)})`;
      case "nth":
        return `nth(${r})`;
      case "first":
        return "first()";
      case "last":
        return "last()";
      case "role":
        const s = [];
        fe(i.name)
          ? s.push(`name: ${this.regexToSourceString(i.name)}`)
          : typeof i.name == "string" &&
            (s.push(`name: ${this.quote(i.name)}`),
            i.exact && s.push("exact: true"));
        for (const { name: l, value: a } of i.attrs)
          s.push(`${l}: ${typeof a == "string" ? this.quote(a) : a}`);
        const o = s.length ? `, { ${s.join(", ")} }` : "";
        return `getByRole(${this.quote(r)}${o})`;
      case "has-text":
        return `filter({ hasText: ${this.toHasText(r)} })`;
      case "has-not-text":
        return `filter({ hasNotText: ${this.toHasText(r)} })`;
      case "has":
        return `filter({ has: ${r} })`;
      case "hasNot":
        return `filter({ hasNot: ${r} })`;
      case "and":
        return `and(${r})`;
      case "or":
        return `or(${r})`;
      case "chain":
        return `locator(${r})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact("getByText", r, !!i.exact);
      case "alt":
        return this.toCallWithExact("getByAltText", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact("getByPlaceholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact("getByLabel", r, !!i.exact);
      case "title":
        return this.toCallWithExact("getByTitle", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToSourceString(t) {
    return so(String(t));
  }
  toCallWithExact(t, n, r) {
    return fe(n)
      ? `${t}(${this.regexToSourceString(n)})`
      : r
        ? `${t}(${this.quote(n)}, { exact: true })`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return fe(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return fe(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  quote(t) {
    return io(t, this.preferredQuote ?? "'");
  }
}
class D0 {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, has_text=${this.toHasText(i.hasText)})`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, has_not_text=${this.toHasText(i.hasNotText)})`
            : `locator(${this.quote(r)})`;
      case "frame":
        return `frame_locator(${this.quote(r)})`;
      case "nth":
        return `nth(${r})`;
      case "first":
        return "first";
      case "last":
        return "last";
      case "role":
        const s = [];
        fe(i.name)
          ? s.push(`name=${this.regexToString(i.name)}`)
          : typeof i.name == "string" &&
            (s.push(`name=${this.quote(i.name)}`),
            i.exact && s.push("exact=True"));
        for (const { name: l, value: a } of i.attrs) {
          let u = typeof a == "string" ? this.quote(a) : a;
          typeof a == "boolean" && (u = a ? "True" : "False"),
            s.push(`${Ch(l)}=${u}`);
        }
        const o = s.length ? `, ${s.join(", ")}` : "";
        return `get_by_role(${this.quote(r)}${o})`;
      case "has-text":
        return `filter(has_text=${this.toHasText(r)})`;
      case "has-not-text":
        return `filter(has_not_text=${this.toHasText(r)})`;
      case "has":
        return `filter(has=${r})`;
      case "hasNot":
        return `filter(has_not=${r})`;
      case "and":
        return `and_(${r})`;
      case "or":
        return `or_(${r})`;
      case "chain":
        return `locator(${r})`;
      case "test-id":
        return `get_by_test_id(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact("get_by_text", r, !!i.exact);
      case "alt":
        return this.toCallWithExact("get_by_alt_text", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact("get_by_placeholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact("get_by_label", r, !!i.exact);
      case "title":
        return this.toCallWithExact("get_by_title", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToString(t) {
    const n = t.flags.includes("i") ? ", re.IGNORECASE" : "";
    return `re.compile(r"${so(t.source).replace(/\\\//, "/").replace(/"/g, '\\"')}"${n})`;
  }
  toCallWithExact(t, n, r) {
    return fe(n)
      ? `${t}(${this.regexToString(n)})`
      : r
        ? `${t}(${this.quote(n)}, exact=True)`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return fe(t) ? this.regexToString(t) : `${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return io(t, '"');
  }
}
class F0 {
  generateLocator(t, n, r, i = {}) {
    let s;
    switch (t) {
      case "page":
        s = "Page";
        break;
      case "frame-locator":
        s = "FrameLocator";
        break;
      case "locator":
        s = "Locator";
        break;
    }
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, new ${s}.LocatorOptions().setHasText(${this.toHasText(i.hasText)}))`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, new ${s}.LocatorOptions().setHasNotText(${this.toHasText(i.hasNotText)}))`
            : `locator(${this.quote(r)})`;
      case "frame":
        return `frameLocator(${this.quote(r)})`;
      case "nth":
        return `nth(${r})`;
      case "first":
        return "first()";
      case "last":
        return "last()";
      case "role":
        const o = [];
        fe(i.name)
          ? o.push(`.setName(${this.regexToString(i.name)})`)
          : typeof i.name == "string" &&
            (o.push(`.setName(${this.quote(i.name)})`),
            i.exact && o.push(".setExact(true)"));
        for (const { name: a, value: u } of i.attrs)
          o.push(`.set${zs(a)}(${typeof u == "string" ? this.quote(u) : u})`);
        const l = o.length ? `, new ${s}.GetByRoleOptions()${o.join("")}` : "";
        return `getByRole(AriaRole.${Ch(r).toUpperCase()}${l})`;
      case "has-text":
        return `filter(new ${s}.FilterOptions().setHasText(${this.toHasText(r)}))`;
      case "has-not-text":
        return `filter(new ${s}.FilterOptions().setHasNotText(${this.toHasText(r)}))`;
      case "has":
        return `filter(new ${s}.FilterOptions().setHas(${r}))`;
      case "hasNot":
        return `filter(new ${s}.FilterOptions().setHasNot(${r}))`;
      case "and":
        return `and(${r})`;
      case "or":
        return `or(${r})`;
      case "chain":
        return `locator(${r})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact(s, "getByText", r, !!i.exact);
      case "alt":
        return this.toCallWithExact(s, "getByAltText", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact(s, "getByPlaceholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact(s, "getByLabel", r, !!i.exact);
      case "title":
        return this.toCallWithExact(s, "getByTitle", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToString(t) {
    const n = t.flags.includes("i") ? ", Pattern.CASE_INSENSITIVE" : "";
    return `Pattern.compile(${this.quote(so(t.source))}${n})`;
  }
  toCallWithExact(t, n, r, i) {
    return fe(r)
      ? `${n}(${this.regexToString(r)})`
      : i
        ? `${n}(${this.quote(r)}, new ${t}.${zs(n)}Options().setExact(true))`
        : `${n}(${this.quote(r)})`;
  }
  toHasText(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return io(t, '"');
  }
}
class H0 {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `Locator(${this.quote(r)}, new() { ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
            ? `Locator(${this.quote(r)}, new() { ${this.toHasNotText(i.hasNotText)} })`
            : `Locator(${this.quote(r)})`;
      case "frame":
        return `FrameLocator(${this.quote(r)})`;
      case "nth":
        return `Nth(${r})`;
      case "first":
        return "First";
      case "last":
        return "Last";
      case "role":
        const s = [];
        fe(i.name)
          ? s.push(`NameRegex = ${this.regexToString(i.name)}`)
          : typeof i.name == "string" &&
            (s.push(`Name = ${this.quote(i.name)}`),
            i.exact && s.push("Exact = true"));
        for (const { name: l, value: a } of i.attrs)
          s.push(`${zs(l)} = ${typeof a == "string" ? this.quote(a) : a}`);
        const o = s.length ? `, new() { ${s.join(", ")} }` : "";
        return `GetByRole(AriaRole.${zs(r)}${o})`;
      case "has-text":
        return `Filter(new() { ${this.toHasText(r)} })`;
      case "has-not-text":
        return `Filter(new() { ${this.toHasNotText(r)} })`;
      case "has":
        return `Filter(new() { Has = ${r} })`;
      case "hasNot":
        return `Filter(new() { HasNot = ${r} })`;
      case "and":
        return `And(${r})`;
      case "or":
        return `Or(${r})`;
      case "chain":
        return `Locator(${r})`;
      case "test-id":
        return `GetByTestId(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact("GetByText", r, !!i.exact);
      case "alt":
        return this.toCallWithExact("GetByAltText", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact("GetByPlaceholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact("GetByLabel", r, !!i.exact);
      case "title":
        return this.toCallWithExact("GetByTitle", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToString(t) {
    const n = t.flags.includes("i") ? ", RegexOptions.IgnoreCase" : "";
    return `new Regex(${this.quote(so(t.source))}${n})`;
  }
  toCallWithExact(t, n, r) {
    return fe(n)
      ? `${t}(${this.regexToString(n)})`
      : r
        ? `${t}(${this.quote(n)}, new() { Exact = true })`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return fe(t)
      ? `HasTextRegex = ${this.regexToString(t)}`
      : `HasText = ${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  toHasNotText(t) {
    return fe(t)
      ? `HasNotTextRegex = ${this.regexToString(t)}`
      : `HasNotText = ${this.quote(t)}`;
  }
  quote(t) {
    return io(t, '"');
  }
}
class U0 {
  generateLocator(t, n, r, i = {}) {
    return JSON.stringify({ kind: n, body: r, options: i });
  }
  chainLocators(t) {
    const n = t.map((r) => JSON.parse(r));
    for (let r = 0; r < n.length - 1; ++r) n[r].next = n[r + 1];
    return JSON.stringify(n[0]);
  }
}
const B0 = { javascript: z0, python: D0, java: F0, csharp: H0, jsonl: U0 };
function fe(e) {
  return e instanceof RegExp;
}
const Ac = new Map();
function vi({
  name: e,
  items: t = [],
  id: n,
  render: r,
  icon: i,
  isError: s,
  isWarning: o,
  isInfo: l,
  indent: a,
  selectedItem: u,
  onAccepted: c,
  onSelected: p,
  onLeftArrow: f,
  onRightArrow: g,
  onHighlighted: y,
  onIconClicked: w,
  noItemsMessage: x,
  dataTestId: h,
  notSelectable: m,
}) {
  const v = b.useRef(null),
    [S, N] = b.useState();
  return (
    b.useEffect(() => {
      y == null || y(S);
    }, [y, S]),
    b.useEffect(() => {
      const E = v.current;
      if (!E) return;
      const C = () => {
        Ac.set(e, E.scrollTop);
      };
      return (
        E.addEventListener("scroll", C, { passive: !0 }),
        () => E.removeEventListener("scroll", C)
      );
    }, [e]),
    b.useEffect(() => {
      v.current && (v.current.scrollTop = Ac.get(e) || 0);
    }, [e]),
    d.jsx("div", {
      className: Ne("list-view vbox", e + "-list-view"),
      role: t.length > 0 ? "list" : void 0,
      "data-testid": h || e + "-list",
      children: d.jsxs("div", {
        className: Ne("list-view-content", m && "not-selectable"),
        tabIndex: 0,
        onKeyDown: (E) => {
          var T;
          if (u && E.key === "Enter") {
            c == null || c(u, t.indexOf(u));
            return;
          }
          if (
            E.key !== "ArrowDown" &&
            E.key !== "ArrowUp" &&
            E.key !== "ArrowLeft" &&
            E.key !== "ArrowRight"
          )
            return;
          if (
            (E.stopPropagation(),
            E.preventDefault(),
            u && E.key === "ArrowLeft")
          ) {
            f == null || f(u, t.indexOf(u));
            return;
          }
          if (u && E.key === "ArrowRight") {
            g == null || g(u, t.indexOf(u));
            return;
          }
          const C = u ? t.indexOf(u) : -1;
          let A = C;
          E.key === "ArrowDown" &&
            (C === -1 ? (A = 0) : (A = Math.min(C + 1, t.length - 1))),
            E.key === "ArrowUp" &&
              (C === -1 ? (A = t.length - 1) : (A = Math.max(C - 1, 0)));
          const _ = (T = v.current) == null ? void 0 : T.children.item(A);
          V0(_ || void 0),
            y == null || y(void 0),
            p == null || p(t[A], A),
            N(void 0);
        },
        ref: v,
        children: [
          x &&
            t.length === 0 &&
            d.jsx("div", { className: "list-view-empty", children: x }),
          t.map((E, C) => {
            const A = (a == null ? void 0 : a(E, C)) || 0,
              _ = r(E, C);
            return d.jsxs(
              "div",
              {
                onDoubleClick: () => (c == null ? void 0 : c(E, C)),
                role: "listitem",
                className: Ne(
                  "list-view-entry",
                  u === E && "selected",
                  !m && S === E && "highlighted",
                  (s == null ? void 0 : s(E, C)) && "error",
                  (o == null ? void 0 : o(E, C)) && "warning",
                  (l == null ? void 0 : l(E, C)) && "info",
                ),
                onClick: () => (p == null ? void 0 : p(E, C)),
                onMouseEnter: () => N(E),
                onMouseLeave: () => N(void 0),
                children: [
                  A
                    ? new Array(A)
                        .fill(0)
                        .map(() =>
                          d.jsx("div", { className: "list-view-indent" }),
                        )
                    : void 0,
                  i &&
                    d.jsx("div", {
                      className: "codicon " + (i(E, C) || "codicon-blank"),
                      style: { minWidth: 16, marginRight: 4 },
                      onDoubleClick: (T) => {
                        T.preventDefault(), T.stopPropagation();
                      },
                      onClick: (T) => {
                        T.stopPropagation(),
                          T.preventDefault(),
                          w == null || w(E, C);
                      },
                    }),
                  typeof _ == "string"
                    ? d.jsx("div", {
                        style: { textOverflow: "ellipsis", overflow: "hidden" },
                        children: _,
                      })
                    : _,
                ],
              },
              (n == null ? void 0 : n(E, C)) || C,
            );
          }),
        ],
      }),
    })
  );
}
function V0(e) {
  e &&
    (e != null && e.scrollIntoViewIfNeeded
      ? e.scrollIntoViewIfNeeded(!1)
      : e == null || e.scrollIntoView());
}
const W0 = vi;
function q0({
  name: e,
  rootItem: t,
  render: n,
  icon: r,
  isError: i,
  isVisible: s,
  selectedItem: o,
  onAccepted: l,
  onSelected: a,
  onHighlighted: u,
  treeState: c,
  setTreeState: p,
  noItemsMessage: f,
  dataTestId: g,
  autoExpandDepth: y,
}) {
  const w = b.useMemo(() => X0(t, o, c.expandedItems, y || 0), [t, o, c, y]),
    x = b.useMemo(() => {
      if (!s) return [...w.keys()];
      const h = new Map(),
        m = (S) => {
          const N = h.get(S);
          if (N !== void 0) return N;
          let E = S.children.some((A) => m(A));
          for (const A of S.children) {
            const _ = m(A);
            E = E || _;
          }
          const C = s(S) || E;
          return h.set(S, C), C;
        };
      for (const S of w.keys()) m(S);
      const v = [];
      for (const S of w.keys()) s(S) && v.push(S);
      return v;
    }, [w, s]);
  return d.jsx(W0, {
    name: e,
    items: x,
    id: (h) => h.id,
    dataTestId: g || e + "-tree",
    render: (h) => {
      const m = n(h);
      return d.jsxs(d.Fragment, {
        children: [
          r &&
            d.jsx("div", {
              className: "codicon " + (r(h) || "blank"),
              style: { minWidth: 16, marginRight: 4 },
            }),
          typeof m == "string"
            ? d.jsx("div", {
                style: { textOverflow: "ellipsis", overflow: "hidden" },
                children: m,
              })
            : m,
        ],
      });
    },
    icon: (h) => {
      const m = w.get(h).expanded;
      if (typeof m == "boolean")
        return m ? "codicon-chevron-down" : "codicon-chevron-right";
    },
    isError: (h) => (i == null ? void 0 : i(h)) || !1,
    indent: (h) => w.get(h).depth,
    selectedItem: o,
    onAccepted: (h) => (l == null ? void 0 : l(h)),
    onSelected: (h) => (a == null ? void 0 : a(h)),
    onHighlighted: (h) => (u == null ? void 0 : u(h)),
    onLeftArrow: (h) => {
      const { expanded: m, parent: v } = w.get(h);
      m
        ? (c.expandedItems.set(h.id, !1), p({ ...c }))
        : v && (a == null || a(v));
    },
    onRightArrow: (h) => {
      h.children.length && (c.expandedItems.set(h.id, !0), p({ ...c }));
    },
    onIconClicked: (h) => {
      const { expanded: m } = w.get(h);
      if (m) {
        for (let v = o; v; v = v.parent)
          if (v === h) {
            a == null || a(h);
            break;
          }
        c.expandedItems.set(h.id, !1);
      } else c.expandedItems.set(h.id, !0);
      p({ ...c });
    },
    noItemsMessage: f,
  });
}
function X0(e, t, n, r) {
  const i = new Map(),
    s = new Set();
  for (let l = t == null ? void 0 : t.parent; l; l = l.parent) s.add(l.id);
  const o = (l, a) => {
    for (const u of l.children) {
      const c = s.has(u.id) || n.get(u.id),
        p = r > a && i.size < 25 && c !== !1,
        f = u.children.length ? (c ?? p) : void 0;
      i.set(u, { depth: a, expanded: f, parent: e === l ? null : l }),
        f && o(u, a + 1);
    }
  };
  return o(e, 0), i;
}
const Q0 = q0,
  K0 = ({
    actions: e,
    selectedAction: t,
    selectedTime: n,
    setSelectedTime: r,
    sdkLanguage: i,
    onSelected: s,
    onHighlighted: o,
    revealConsole: l,
    isLive: a,
  }) => {
    const [u, c] = b.useState({ expandedItems: new Map() }),
      { rootItem: p, itemMap: f } = b.useMemo(() => r0(e), [e]),
      { selectedItem: g } = b.useMemo(
        () => ({ selectedItem: t ? f.get(t.callId) : void 0 }),
        [f, t],
      );
    return d.jsxs("div", {
      className: "vbox",
      children: [
        n &&
          d.jsxs("div", {
            className: "action-list-show-all",
            onClick: () => r(void 0),
            children: [
              d.jsx("span", { className: "codicon codicon-triangle-left" }),
              "Show all",
            ],
          }),
        d.jsx(Q0, {
          name: "actions",
          rootItem: p,
          treeState: u,
          setTreeState: c,
          selectedItem: g,
          onSelected: (y) => s(y.action),
          onHighlighted: (y) => o(y == null ? void 0 : y.action),
          onAccepted: (y) =>
            r({ minimum: y.action.startTime, maximum: y.action.endTime }),
          isError: (y) => {
            var w, x;
            return !!(
              (x = (w = y.action) == null ? void 0 : w.error) != null &&
              x.message
            );
          },
          isVisible: (y) =>
            !n ||
            (y.action.startTime <= n.maximum && y.action.endTime >= n.minimum),
          render: (y) =>
            Qa(y.action, {
              sdkLanguage: i,
              revealConsole: l,
              isLive: a,
              showDuration: !0,
              showBadges: !0,
            }),
        }),
      ],
    });
  },
  Qa = (e, t) => {
    const {
        sdkLanguage: n,
        revealConsole: r,
        isLive: i,
        showDuration: s,
        showBadges: o,
      } = t,
      { errors: l, warnings: a } = o0(e),
      u = e.params.selector ? Yt(n || "javascript", e.params.selector) : void 0;
    let c = "";
    return (
      e.endTime
        ? (c = et(e.endTime - e.startTime))
        : e.error
          ? (c = "Timed out")
          : i || (c = "-"),
      d.jsxs(d.Fragment, {
        children: [
          d.jsxs("div", {
            className: "action-title",
            title: e.apiName,
            children: [
              d.jsx("span", { children: e.apiName }),
              u &&
                d.jsx("div", {
                  className: "action-selector",
                  title: u,
                  children: u,
                }),
              e.method === "goto" &&
                e.params.url &&
                d.jsx("div", {
                  className: "action-url",
                  title: e.params.url,
                  children: e.params.url,
                }),
              e.class === "APIRequestContext" &&
                e.params.url &&
                d.jsx("div", {
                  className: "action-url",
                  title: e.params.url,
                  children: G0(e.params.url),
                }),
            ],
          }),
          (s || o) && d.jsx("div", { className: "spacer" }),
          s &&
            d.jsx("div", {
              className: "action-duration",
              children:
                c || d.jsx("span", { className: "codicon codicon-loading" }),
            }),
          o &&
            d.jsxs("div", {
              className: "action-icons",
              onClick: () => (r == null ? void 0 : r()),
              children: [
                !!l &&
                  d.jsxs("div", {
                    className: "action-icon",
                    children: [
                      d.jsx("span", { className: "codicon codicon-error" }),
                      d.jsx("span", {
                        className: "action-icon-value",
                        children: l,
                      }),
                    ],
                  }),
                !!a &&
                  d.jsxs("div", {
                    className: "action-icon",
                    children: [
                      d.jsx("span", { className: "codicon codicon-warning" }),
                      d.jsx("span", {
                        className: "action-icon-value",
                        children: a,
                      }),
                    ],
                  }),
              ],
            }),
        ],
      })
    );
  };
function G0(e) {
  try {
    const t = new URL(e);
    return t.pathname + t.search;
  } catch {
    return e;
  }
}
const Jh = ({ value: e, description: t }) => {
    const [n, r] = b.useState("copy"),
      i = b.useCallback(() => {
        navigator.clipboard.writeText(e).then(
          () => {
            r("check"),
              setTimeout(() => {
                r("copy");
              }, 3e3);
          },
          () => {
            r("close");
          },
        );
      }, [e]);
    return d.jsx(en, { title: t || "Copy", icon: n, onClick: i });
  },
  kn = ({ text: e }) =>
    d.jsx("div", {
      className: "fill",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: "bold",
        opacity: 0.5,
      },
      children: e,
    }),
  Y0 = ({ action: e, sdkLanguage: t }) => {
    if (!e) return d.jsx(kn, { text: "No action selected" });
    const n = { ...e.params };
    delete n.info;
    const r = Object.keys(n),
      i = e.startTime + (e.context.wallTime - e.context.startTime),
      s = new Date(i).toLocaleString(),
      o = e.endTime ? et(e.endTime - e.startTime) : "Timed Out";
    return d.jsxs("div", {
      className: "call-tab",
      children: [
        d.jsx("div", { className: "call-line", children: e.apiName }),
        d.jsxs(d.Fragment, {
          children: [
            d.jsx("div", { className: "call-section", children: "Time" }),
            s &&
              d.jsxs("div", {
                className: "call-line",
                children: [
                  "wall time:",
                  d.jsx("span", {
                    className: "call-value datetime",
                    title: s,
                    children: s,
                  }),
                ],
              }),
            d.jsxs("div", {
              className: "call-line",
              children: [
                "duration:",
                d.jsx("span", {
                  className: "call-value datetime",
                  title: o,
                  children: o,
                }),
              ],
            }),
          ],
        }),
        !!r.length &&
          d.jsx("div", { className: "call-section", children: "Parameters" }),
        !!r.length && r.map((l, a) => jc(Mc(e, l, n[l], t), "param-" + a)),
        !!e.result &&
          d.jsx("div", { className: "call-section", children: "Return value" }),
        !!e.result &&
          Object.keys(e.result).map((l, a) =>
            jc(Mc(e, l, e.result[l], t), "result-" + a),
          ),
      ],
    });
  };
function jc(e, t) {
  let n = e.text.replace(/\n/g, "↵");
  return (
    e.type === "string" && (n = `"${n}"`),
    d.jsxs(
      "div",
      {
        className: "call-line",
        children: [
          e.name,
          ":",
          d.jsx("span", {
            className: Ne("call-value", e.type),
            title: e.text,
            children: n,
          }),
          ["string", "number", "object", "locator"].includes(e.type) &&
            d.jsx(Jh, { value: e.text }),
        ],
      },
      t,
    )
  );
}
function Mc(e, t, n, r) {
  const i = e.method.includes("eval") || e.method === "waitForFunction";
  if (t === "files") return { text: "<files>", type: "string", name: t };
  if (
    ((t === "eventInit" || t === "expectedValue" || (t === "arg" && i)) &&
      (n = Ds(n.value, new Array(10).fill({ handle: "<handle>" }))),
    ((t === "value" && i) || (t === "received" && e.method === "expect")) &&
      (n = Ds(n, new Array(10).fill({ handle: "<handle>" }))),
    t === "selector")
  )
    return {
      text: Yt(r || "javascript", e.params.selector),
      type: "locator",
      name: "locator",
    };
  const s = typeof n;
  return s !== "object" || n === null
    ? { text: String(n), type: s, name: t }
    : n.guid
      ? { text: "<handle>", type: "handle", name: t }
      : { text: JSON.stringify(n).slice(0, 1e3), type: "object", name: t };
}
function Ds(e, t) {
  if (e.n !== void 0) return e.n;
  if (e.s !== void 0) return e.s;
  if (e.b !== void 0) return e.b;
  if (e.v !== void 0) {
    if (e.v === "undefined") return;
    if (e.v === "null") return null;
    if (e.v === "NaN") return NaN;
    if (e.v === "Infinity") return 1 / 0;
    if (e.v === "-Infinity") return -1 / 0;
    if (e.v === "-0") return -0;
  }
  if (e.d !== void 0) return new Date(e.d);
  if (e.r !== void 0) return new RegExp(e.r.p, e.r.f);
  if (e.a !== void 0) return e.a.map((n) => Ds(n, t));
  if (e.o !== void 0) {
    const n = {};
    for (const { k: r, v: i } of e.o) n[r] = Ds(i, t);
    return n;
  }
  return e.h !== void 0 ? (t === void 0 ? "<object>" : t[e.h]) : "<object>";
}
const J0 = vi,
  Z0 = ({ action: e, isLive: t }) => {
    const n = b.useMemo(() => {
      var o;
      if (!e || !e.log.length) return [];
      const r = e.log,
        i = e.context.wallTime - e.context.startTime,
        s = [];
      for (let l = 0; l < r.length; ++l) {
        let a = "";
        if (r[l].time !== -1) {
          const u = (o = r[l]) == null ? void 0 : o.time;
          l + 1 < r.length
            ? (a = et(r[l + 1].time - u))
            : e.endTime > 0
              ? (a = et(e.endTime - u))
              : t
                ? (a = et(Date.now() - i - u))
                : (a = "-");
        }
        s.push({ message: r[l].message, time: a });
      }
      return s;
    }, [e, t]);
    return n.length
      ? d.jsx(J0, {
          name: "log",
          items: n,
          render: (r) =>
            d.jsxs("div", {
              className: "log-list-item",
              children: [
                d.jsx("span", {
                  className: "log-list-duration",
                  children: r.time,
                }),
                r.message,
              ],
            }),
          notSelectable: !0,
        })
      : d.jsx(kn, { text: "No log entries" });
  };
function ci(e) {
  const t = /(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g,
    n = [];
  let r,
    i = {};
  for (; (r = t.exec(e)) !== null; ) {
    const [, , s, , o] = r;
    if (s) {
      const l = +s;
      switch (l) {
        case 0:
          i = {};
          break;
        case 1:
          i["font-weight"] = "bold";
          break;
        case 3:
          i["font-style"] = "italic";
          break;
        case 4:
          i["text-decoration"] = "underline";
          break;
        case 8:
          i.display = "none";
          break;
        case 9:
          i["text-decoration"] = "line-through";
          break;
        case 22:
          i = {
            ...i,
            "font-weight": void 0,
            "font-style": void 0,
            "text-decoration": void 0,
          };
          break;
        case 23:
          i = { ...i, "font-weight": void 0, "font-style": void 0 };
          break;
        case 24:
          i = { ...i, "text-decoration": void 0 };
          break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
          i.color = Ic[l - 30];
          break;
        case 39:
          i = { ...i, color: void 0 };
          break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          i["background-color"] = Ic[l - 40];
          break;
        case 49:
          i = { ...i, "background-color": void 0 };
          break;
        case 53:
          i["text-decoration"] = "overline";
          break;
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
          i.color = Pc[l - 90];
          break;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
          i["background-color"] = Pc[l - 100];
          break;
      }
    } else o && n.push(`<span style="${ty(i)}">${ey(o)}</span>`);
  }
  return n.join("");
}
const Ic = {
    0: "var(--vscode-terminal-ansiBlack)",
    1: "var(--vscode-terminal-ansiRed)",
    2: "var(--vscode-terminal-ansiGreen)",
    3: "var(--vscode-terminal-ansiYellow)",
    4: "var(--vscode-terminal-ansiBlue)",
    5: "var(--vscode-terminal-ansiMagenta)",
    6: "var(--vscode-terminal-ansiCyan)",
    7: "var(--vscode-terminal-ansiWhite)",
  },
  Pc = {
    0: "var(--vscode-terminal-ansiBrightBlack)",
    1: "var(--vscode-terminal-ansiBrightRed)",
    2: "var(--vscode-terminal-ansiBrightGreen)",
    3: "var(--vscode-terminal-ansiBrightYellow)",
    4: "var(--vscode-terminal-ansiBrightBlue)",
    5: "var(--vscode-terminal-ansiBrightMagenta)",
    6: "var(--vscode-terminal-ansiBrightCyan)",
    7: "var(--vscode-terminal-ansiBrightWhite)",
  };
function ey(e) {
  return e.replace(
    /[&"<>]/g,
    (t) => ({ "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" })[t],
  );
}
function ty(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n}`)
    .join("; ");
}
const ny = ({ error: e }) => {
  const t = b.useMemo(() => ci(e), [e]);
  return d.jsx("div", {
    className: "error-message",
    dangerouslySetInnerHTML: { __html: t || "" },
  });
};
function ry(e) {
  return b.useMemo(() => {
    if (!e) return { errors: new Map() };
    const t = new Map();
    for (const n of e.errorDescriptors) t.set(n.message, n);
    return { errors: t };
  }, [e]);
}
const iy = ({ errorsModel: e, sdkLanguage: t, revealInSource: n }) =>
    e.errors.size
      ? d.jsx("div", {
          className: "fill",
          style: { overflow: "auto" },
          children: [...e.errors.entries()].map(([r, i]) => {
            var a;
            let s, o;
            const l = (a = i.stack) == null ? void 0 : a[0];
            return (
              l &&
                ((s = l.file.replace(/.*[/\\](.*)/, "$1") + ":" + l.line),
                (o = l.file + ":" + l.line)),
              d.jsxs(
                "div",
                {
                  children: [
                    d.jsxs("div", {
                      className: "hbox",
                      style: {
                        alignItems: "center",
                        padding: "5px 10px",
                        minHeight: 36,
                        fontWeight: "bold",
                        color: "var(--vscode-errorForeground)",
                      },
                      children: [
                        i.action && Qa(i.action, { sdkLanguage: t }),
                        s &&
                          d.jsxs("div", {
                            className: "action-location",
                            children: [
                              "@ ",
                              d.jsx("span", {
                                title: o,
                                onClick: () => n(i),
                                children: s,
                              }),
                            ],
                          }),
                      ],
                    }),
                    d.jsx(ny, { error: r }),
                  ],
                },
                r,
              )
            );
          }),
        })
      : d.jsx(kn, { text: "No errors" }),
  sy = vi;
function oy(e, t) {
  const { entries: n } = b.useMemo(() => {
    if (!e) return { entries: [] };
    const i = [];
    for (const s of e.events) {
      if (s.type === "console") {
        const o = s.args && s.args.length ? ay(s.args) : Zh(s.text),
          l = s.location.url,
          u = `${l ? l.substring(l.lastIndexOf("/") + 1) : "<anonymous>"}:${s.location.lineNumber}`;
        i.push({
          browserMessage: { body: o, location: u },
          isError: s.messageType === "error",
          isWarning: s.messageType === "warning",
          timestamp: s.time,
        });
      }
      s.type === "event" &&
        s.method === "pageError" &&
        i.push({
          browserError: s.params.error,
          isError: !0,
          isWarning: !1,
          timestamp: s.time,
        });
    }
    for (const s of e.stdio) {
      let o = "";
      s.text && (o = ci(s.text.trim()) || ""),
        s.base64 && (o = ci(atob(s.base64).trim()) || ""),
        i.push({
          nodeMessage: { html: o },
          isError: s.type === "stderr",
          isWarning: !1,
          timestamp: s.timestamp,
        });
    }
    return i.sort((s, o) => s.timestamp - o.timestamp), { entries: i };
  }, [e]);
  return {
    entries: b.useMemo(
      () =>
        t
          ? n.filter(
              (i) => i.timestamp >= t.minimum && i.timestamp <= t.maximum,
            )
          : n,
      [n, t],
    ),
  };
}
const ly = ({
  consoleModel: e,
  boundaries: t,
  onEntryHovered: n,
  onAccepted: r,
}) =>
  e.entries.length
    ? d.jsx("div", {
        className: "console-tab",
        children: d.jsx(sy, {
          name: "console",
          onAccepted: r,
          onHighlighted: n,
          items: e.entries,
          isError: (i) => i.isError,
          isWarning: (i) => i.isWarning,
          render: (i) => {
            const s = et(i.timestamp - t.minimum),
              o = d.jsx("span", { className: "console-time", children: s }),
              l = i.isError
                ? "status-error"
                : i.isWarning
                  ? "status-warning"
                  : "status-none",
              a =
                i.browserMessage || i.browserError
                  ? d.jsx("span", {
                      className: Ne("codicon", "codicon-browser", l),
                      title: "Browser message",
                    })
                  : d.jsx("span", {
                      className: Ne("codicon", "codicon-file", l),
                      title: "Runner message",
                    });
            let u, c, p, f;
            const { browserMessage: g, browserError: y, nodeMessage: w } = i;
            if ((g && ((u = g.location), (c = g.body)), y)) {
              const { error: x, value: h } = y;
              x ? ((c = x.message), (f = x.stack)) : (c = String(h));
            }
            return (
              w && (p = w.html),
              d.jsxs("div", {
                className: "console-line",
                children: [
                  o,
                  a,
                  u &&
                    d.jsx("span", {
                      className: "console-location",
                      children: u,
                    }),
                  c &&
                    d.jsx("span", {
                      className: "console-line-message",
                      children: c,
                    }),
                  p &&
                    d.jsx("span", {
                      className: "console-line-message",
                      dangerouslySetInnerHTML: { __html: p },
                    }),
                  f &&
                    d.jsx("div", { className: "console-stack", children: f }),
                ],
              })
            );
          },
        }),
      })
    : d.jsx(kn, { text: "No console entries" });
function ay(e) {
  if (e.length === 1) return Zh(e[0].preview);
  const t = typeof e[0].value == "string" && e[0].value.includes("%"),
    n = t ? e[0].value : "",
    r = t ? e.slice(1) : e;
  let i = 0;
  const s = /%([%sdifoOc])/g;
  let o;
  const l = [];
  let a = [];
  l.push(d.jsx("span", { children: a }));
  let u = 0;
  for (; (o = s.exec(n)) !== null; ) {
    const c = n.substring(u, o.index);
    a.push(d.jsx("span", { children: c })), (u = o.index + 2);
    const p = o[0][1];
    if (p === "%") a.push(d.jsx("span", { children: "%" }));
    else if (
      p === "s" ||
      p === "o" ||
      p === "O" ||
      p === "d" ||
      p === "i" ||
      p === "f"
    ) {
      const f = r[i++],
        g = {};
      typeof (f == null ? void 0 : f.value) != "string" &&
        (g.color = "var(--vscode-debugTokenExpression-number)"),
        a.push(
          d.jsx("span", {
            style: g,
            children: (f == null ? void 0 : f.preview) || "",
          }),
        );
    } else if (p === "c") {
      a = [];
      const f = r[i++],
        g = f ? uy(f.preview) : {};
      l.push(d.jsx("span", { style: g, children: a }));
    }
  }
  for (
    u < n.length && a.push(d.jsx("span", { children: n.substring(u) }));
    i < r.length;
    i++
  ) {
    const c = r[i],
      p = {};
    a.length && a.push(d.jsx("span", { children: " " })),
      typeof (c == null ? void 0 : c.value) != "string" &&
        (p.color = "var(--vscode-debugTokenExpression-number)"),
      a.push(
        d.jsx("span", {
          style: p,
          children: (c == null ? void 0 : c.preview) || "",
        }),
      );
  }
  return l;
}
function Zh(e) {
  return [d.jsx("span", { dangerouslySetInnerHTML: { __html: ci(e.trim()) } })];
}
function uy(e) {
  try {
    const t = {},
      n = e.split(";");
    for (const r of n) {
      const i = r.trim();
      if (!i) continue;
      let [s, o] = i.split(":");
      if (((s = s.trim()), (o = o.trim()), !cy(s))) continue;
      const l = s.replace(/-([a-z])/g, (a) => a[1].toUpperCase());
      t[l] = o;
    }
    return t;
  } catch {
    return {};
  }
}
function cy(e) {
  return [
    "background",
    "border",
    "color",
    "font",
    "line",
    "margin",
    "padding",
    "text",
  ].some((n) => e.startsWith(n));
}
const Ka = ({
    noShadow: e,
    children: t,
    noMinHeight: n,
    className: r,
    onClick: i,
  }) =>
    d.jsx("div", {
      className: Ne("toolbar", e && "no-shadow", n && "no-min-height", r),
      onClick: i,
      children: t,
    }),
  Vl = ({
    tabs: e,
    selectedTab: t,
    setSelectedTab: n,
    leftToolbar: r,
    rightToolbar: i,
    dataTestId: s,
    mode: o,
  }) => (
    o || (o = "default"),
    d.jsx("div", {
      className: "tabbed-pane",
      "data-testid": s,
      children: d.jsxs("div", {
        className: "vbox",
        children: [
          d.jsxs(Ka, {
            children: [
              r &&
                d.jsxs("div", {
                  style: {
                    flex: "none",
                    display: "flex",
                    margin: "0 4px",
                    alignItems: "center",
                  },
                  children: [...r],
                }),
              o === "default" &&
                d.jsx("div", {
                  style: {
                    flex: "auto",
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                  },
                  children: [
                    ...e.map((l) =>
                      d.jsx(
                        ep,
                        {
                          id: l.id,
                          title: l.title,
                          count: l.count,
                          errorCount: l.errorCount,
                          selected: t === l.id,
                          onSelect: n,
                        },
                        l.id,
                      ),
                    ),
                  ],
                }),
              o === "select" &&
                d.jsx("div", {
                  style: {
                    flex: "auto",
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                  },
                  children: d.jsx("select", {
                    style: {
                      width: "100%",
                      background: "none",
                      cursor: "pointer",
                    },
                    onChange: (l) => {
                      n(e[l.currentTarget.selectedIndex].id);
                    },
                    children: e.map((l) => {
                      let a = "";
                      return (
                        l.count && (a = ` (${l.count})`),
                        l.errorCount && (a = ` (${l.errorCount})`),
                        d.jsxs(
                          "option",
                          {
                            value: l.id,
                            selected: l.id === t,
                            children: [l.title, a],
                          },
                          l.id,
                        )
                      );
                    }),
                  }),
                }),
              i &&
                d.jsxs("div", {
                  style: {
                    flex: "none",
                    display: "flex",
                    alignItems: "center",
                  },
                  children: [...i],
                }),
            ],
          }),
          e.map((l) => {
            const a = "tab-content tab-" + l.id;
            if (l.component)
              return d.jsx(
                "div",
                {
                  className: a,
                  style: { display: t === l.id ? "inherit" : "none" },
                  children: l.component,
                },
                l.id,
              );
            if (t === l.id)
              return d.jsx("div", { className: a, children: l.render() }, l.id);
          }),
        ],
      }),
    })
  ),
  ep = ({
    id: e,
    title: t,
    count: n,
    errorCount: r,
    selected: i,
    onSelect: s,
  }) =>
    d.jsxs(
      "div",
      {
        className: Ne("tabbed-pane-tab", i && "selected"),
        onClick: () => s(e),
        title: t,
        children: [
          d.jsx("div", { className: "tabbed-pane-tab-label", children: t }),
          !!n &&
            d.jsx("div", { className: "tabbed-pane-tab-counter", children: n }),
          !!r &&
            d.jsx("div", {
              className: "tabbed-pane-tab-counter error",
              children: r,
            }),
        ],
      },
      e,
    ),
  dy = "modulepreload",
  fy = function (e, t) {
    return new URL(e, t).href;
  },
  Rc = {},
  hy = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName("link"),
        o = document.querySelector("meta[property=csp-nonce]"),
        l =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.all(
        n.map((a) => {
          if (((a = fy(a, r)), a in Rc)) return;
          Rc[a] = !0;
          const u = a.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (r)
            for (let g = s.length - 1; g >= 0; g--) {
              const y = s[g];
              if (y.href === a && (!u || y.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${a}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : dy),
            u || ((f.as = "script"), (f.crossOrigin = "")),
            (f.href = a),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            u)
          )
            return new Promise((g, y) => {
              f.addEventListener("load", g),
                f.addEventListener("error", () =>
                  y(new Error(`Unable to preload CSS for ${a}`)),
                );
            });
        }),
      );
    }
    return i
      .then(() => t())
      .catch((s) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented))
          throw s;
      });
  },
  yi = ({
    text: e,
    language: t,
    mimeType: n,
    linkify: r,
    readOnly: i,
    highlight: s,
    revealLine: o,
    lineNumbers: l,
    isFocused: a,
    focusOnChange: u,
    wrapLines: c,
    onChange: p,
  }) => {
    const [f, g] = _n(),
      [y] = b.useState(
        hy(
          () => import("./codeMirrorModule-eFKCUIu2.js"),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ).then((m) => m.default),
      ),
      w = b.useRef(null),
      [x, h] = b.useState();
    return (
      b.useEffect(() => {
        (async () => {
          var E, C;
          const m = await y;
          my(m);
          const v = g.current;
          if (!v) return;
          const S = vy(t) || gy(n) || (r ? "text/linkified" : "");
          if (
            w.current &&
            S === w.current.cm.getOption("mode") &&
            !!i === w.current.cm.getOption("readOnly") &&
            l === w.current.cm.getOption("lineNumbers") &&
            c === w.current.cm.getOption("lineWrapping")
          )
            return;
          (C = (E = w.current) == null ? void 0 : E.cm) == null ||
            C.getWrapperElement().remove();
          const N = m(v, {
            value: "",
            mode: S,
            readOnly: !!i,
            lineNumbers: l,
            lineWrapping: c,
          });
          return (w.current = { cm: N }), a && N.focus(), h(N), N;
        })();
      }, [y, x, g, t, n, r, l, c, i, a]),
      b.useEffect(() => {
        w.current && w.current.cm.setSize(f.width, f.height);
      }, [f]),
      b.useLayoutEffect(() => {
        var S;
        if (!x) return;
        let m = !1;
        if (
          (x.getValue() !== e &&
            (x.setValue(e),
            (m = !0),
            u && (x.execCommand("selectAll"), x.focus())),
          m || JSON.stringify(s) !== JSON.stringify(w.current.highlight))
        ) {
          for (const E of w.current.highlight || [])
            x.removeLineClass(E.line - 1, "wrap");
          for (const E of s || [])
            x.addLineClass(E.line - 1, "wrap", `source-line-${E.type}`);
          for (const E of w.current.widgets || []) x.removeLineWidget(E);
          const N = [];
          for (const E of s || []) {
            if (E.type !== "error") continue;
            const C =
              (S = w.current) == null ? void 0 : S.cm.getLine(E.line - 1);
            if (C) {
              const _ = document.createElement("div");
              (_.className = "source-line-error-underline"),
                (_.innerHTML = "&nbsp;".repeat(C.length || 1)),
                N.push(
                  x.addLineWidget(E.line, _, { above: !0, coverGutter: !1 }),
                );
            }
            const A = document.createElement("div");
            (A.innerHTML = ci(E.message || "")),
              (A.className = "source-line-error-widget"),
              N.push(
                x.addLineWidget(E.line, A, { above: !0, coverGutter: !1 }),
              );
          }
          (w.current.highlight = s), (w.current.widgets = N);
        }
        typeof o == "number" &&
          w.current.cm.lineCount() >= o &&
          x.scrollIntoView({ line: Math.max(0, o - 1), ch: 0 }, 50);
        let v;
        return (
          p && ((v = () => p(x.getValue())), x.on("change", v)),
          () => {
            v && x.off("change", v);
          }
        );
      }, [x, e, s, o, u, p]),
      d.jsx("div", { className: "cm-wrapper", ref: g, onClick: py })
    );
  };
function py(e) {
  var n;
  if (!(e.target instanceof HTMLElement)) return;
  let t;
  e.target.classList.contains("cm-linkified")
    ? (t = e.target.textContent)
    : e.target.classList.contains("cm-link") &&
      (n = e.target.nextElementSibling) != null &&
      n.classList.contains("cm-url") &&
      (t = e.target.nextElementSibling.textContent.slice(1, -1)),
    t && (e.preventDefault(), e.stopPropagation(), window.open(t, "_blank"));
}
let $c = !1;
function my(e) {
  $c ||
    (($c = !0),
    e.defineSimpleMode("text/linkified", {
      start: [{ regex: xd, token: "linkified" }],
    }));
}
function gy(e) {
  if (e) {
    if (e.includes("javascript") || e.includes("json")) return "javascript";
    if (e.includes("python")) return "python";
    if (e.includes("csharp")) return "text/x-csharp";
    if (e.includes("java")) return "text/x-java";
    if (e.includes("markdown")) return "markdown";
    if (e.includes("html") || e.includes("svg")) return "htmlmixed";
    if (e.includes("css")) return "css";
  }
}
function vy(e) {
  if (e)
    return {
      javascript: "javascript",
      jsonl: "javascript",
      python: "python",
      csharp: "text/x-csharp",
      java: "text/x-java",
      markdown: "markdown",
      html: "htmlmixed",
      css: "css",
    }[e];
}
const yy = ({ resource: e, onClose: t }) => {
    const [n, r] = b.useState("request");
    return d.jsx(Vl, {
      dataTestId: "network-request-details",
      leftToolbar: [
        d.jsx(en, { icon: "close", title: "Close", onClick: t }, "close"),
      ],
      tabs: [
        {
          id: "request",
          title: "Request",
          render: () => d.jsx(wy, { resource: e }),
        },
        {
          id: "response",
          title: "Response",
          render: () => d.jsx(xy, { resource: e }),
        },
        { id: "body", title: "Body", render: () => d.jsx(Sy, { resource: e }) },
      ],
      selectedTab: n,
      setSelectedTab: r,
    });
  },
  wy = ({ resource: e }) => {
    const [t, n] = b.useState(null);
    return (
      b.useEffect(() => {
        (async () => {
          if (e.request.postData) {
            const i = e.request.headers.find(
                (o) => o.name.toLowerCase() === "content-type",
              ),
              s = i ? i.value : "";
            if (e.request.postData._sha1) {
              const o = await fetch(`sha1/${e.request.postData._sha1}`);
              n({ text: Wl(await o.text(), s), mimeType: s });
            } else n({ text: Wl(e.request.postData.text, s), mimeType: s });
          } else n(null);
        })();
      }, [e]),
      d.jsxs("div", {
        className: "network-request-details-tab",
        children: [
          d.jsx("div", {
            className: "network-request-details-header",
            children: "General",
          }),
          d.jsx("div", {
            className: "network-request-details-url",
            children: `URL: ${e.request.url}`,
          }),
          d.jsx("div", {
            className: "network-request-details-general",
            children: `Method: ${e.request.method}`,
          }),
          e.response.status !== -1 &&
            d.jsxs("div", {
              className: "network-request-details-general",
              style: { display: "flex" },
              children: [
                "Status Code: ",
                d.jsx("span", {
                  className: Ey(e.response.status),
                  style: { display: "inline-flex" },
                  children: `${e.response.status} ${e.response.statusText}`,
                }),
              ],
            }),
          e.request.queryString.length
            ? d.jsxs(d.Fragment, {
                children: [
                  d.jsx("div", {
                    className: "network-request-details-header",
                    children: "Query String Parameters",
                  }),
                  d.jsx("div", {
                    className: "network-request-details-headers",
                    children: e.request.queryString.map(
                      (r) => `${r.name}: ${r.value}`,
                    ).join(`
`),
                  }),
                ],
              })
            : null,
          d.jsx("div", {
            className: "network-request-details-header",
            children: "Request Headers",
          }),
          d.jsx("div", {
            className: "network-request-details-headers",
            children: e.request.headers.map((r) => `${r.name}: ${r.value}`)
              .join(`
`),
          }),
          t &&
            d.jsx("div", {
              className: "network-request-details-header",
              children: "Request Body",
            }),
          t &&
            d.jsx(yi, {
              text: t.text,
              mimeType: t.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  xy = ({ resource: e }) =>
    d.jsxs("div", {
      className: "network-request-details-tab",
      children: [
        d.jsx("div", {
          className: "network-request-details-header",
          children: "Response Headers",
        }),
        d.jsx("div", {
          className: "network-request-details-headers",
          children: e.response.headers.map((t) => `${t.name}: ${t.value}`)
            .join(`
`),
        }),
      ],
    }),
  Sy = ({ resource: e }) => {
    const [t, n] = b.useState(null);
    return (
      b.useEffect(() => {
        (async () => {
          if (e.response.content._sha1) {
            const i = e.response.content.mimeType.includes("image"),
              s = e.response.content.mimeType.includes("font"),
              o = await fetch(`sha1/${e.response.content._sha1}`);
            if (i) {
              const l = await o.blob(),
                a = new FileReader(),
                u = new Promise((c) => (a.onload = c));
              a.readAsDataURL(l), n({ dataUrl: (await u).target.result });
            } else if (s) {
              const l = await o.arrayBuffer();
              n({ font: l });
            } else {
              const l = Wl(await o.text(), e.response.content.mimeType);
              n({ text: l, mimeType: e.response.content.mimeType });
            }
          } else n(null);
        })();
      }, [e]),
      d.jsxs("div", {
        className: "network-request-details-tab",
        children: [
          !e.response.content._sha1 &&
            d.jsx("div", {
              children: "Response body is not available for this request.",
            }),
          t && t.font && d.jsx(_y, { font: t.font }),
          t &&
            t.dataUrl &&
            d.jsx("img", { draggable: "false", src: t.dataUrl }),
          t &&
            t.text &&
            d.jsx(yi, {
              text: t.text,
              mimeType: t.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  _y = ({ font: e }) => {
    const [t, n] = b.useState(!1);
    return (
      b.useEffect(() => {
        let r;
        try {
          (r = new FontFace("font-preview", e)),
            r.status === "loaded" && document.fonts.add(r),
            r.status === "error" && n(!0);
        } catch {
          n(!0);
        }
        return () => {
          document.fonts.delete(r);
        };
      }, [e]),
      t
        ? d.jsx("div", {
            className: "network-font-preview-error",
            children: "Could not load font preview",
          })
        : d.jsxs("div", {
            className: "network-font-preview",
            children: [
              "ABCDEFGHIJKLM",
              d.jsx("br", {}),
              "NOPQRSTUVWXYZ",
              d.jsx("br", {}),
              "abcdefghijklm",
              d.jsx("br", {}),
              "nopqrstuvwxyz",
              d.jsx("br", {}),
              "1234567890",
            ],
          })
    );
  };
function Ey(e) {
  return e < 300 || e === 304
    ? "green-circle"
    : e < 400
      ? "yellow-circle"
      : "red-circle";
}
function Wl(e, t) {
  if (e === null) return "Loading...";
  const n = e;
  if (n === "") return "<Empty>";
  if (t.includes("application/json"))
    try {
      return JSON.stringify(JSON.parse(n), null, 2);
    } catch {
      return n;
    }
  return t.includes("application/x-www-form-urlencoded")
    ? decodeURIComponent(n)
    : n;
}
const tp = ({
    cursor: e,
    onPaneMouseMove: t,
    onPaneMouseUp: n,
    onPaneDoubleClick: r,
  }) => (
    at.useEffect(() => {
      const i = document.createElement("div");
      return (
        (i.style.position = "fixed"),
        (i.style.top = "0"),
        (i.style.right = "0"),
        (i.style.bottom = "0"),
        (i.style.left = "0"),
        (i.style.zIndex = "9999"),
        (i.style.cursor = e),
        document.body.appendChild(i),
        t && i.addEventListener("mousemove", t),
        n && i.addEventListener("mouseup", n),
        r && document.body.addEventListener("dblclick", r),
        () => {
          t && i.removeEventListener("mousemove", t),
            n && i.removeEventListener("mouseup", n),
            r && document.body.removeEventListener("dblclick", r),
            document.body.removeChild(i);
        }
      );
    }, [e, t, n, r]),
    d.jsx(d.Fragment, {})
  ),
  Ty = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
  np = ({
    orientation: e,
    offsets: t,
    setOffsets: n,
    resizerColor: r,
    resizerWidth: i,
    minColumnWidth: s,
  }) => {
    const o = s || 0,
      [l, a] = at.useState(null),
      [u, c] = _n(),
      p = {
        position: "absolute",
        right: e === "horizontal" ? void 0 : 0,
        bottom: e === "horizontal" ? 0 : void 0,
        width: e === "horizontal" ? 7 : void 0,
        height: e === "horizontal" ? void 0 : 7,
        borderTopWidth: e === "horizontal" ? void 0 : (7 - i) / 2,
        borderRightWidth: e === "horizontal" ? (7 - i) / 2 : void 0,
        borderBottomWidth: e === "horizontal" ? void 0 : (7 - i) / 2,
        borderLeftWidth: e === "horizontal" ? (7 - i) / 2 : void 0,
        borderColor: "transparent",
        borderStyle: "solid",
        cursor: e === "horizontal" ? "ew-resize" : "ns-resize",
      };
    return d.jsxs("div", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: -(7 - i) / 2,
        zIndex: 100,
        pointerEvents: "none",
      },
      ref: c,
      children: [
        !!l &&
          d.jsx(tp, {
            cursor: e === "horizontal" ? "ew-resize" : "ns-resize",
            onPaneMouseUp: () => a(null),
            onPaneMouseMove: (f) => {
              if (!f.buttons) a(null);
              else if (l) {
                const g =
                    e === "horizontal"
                      ? f.clientX - l.clientX
                      : f.clientY - l.clientY,
                  y = l.offset + g,
                  w = l.index > 0 ? t[l.index - 1] : 0,
                  x = e === "horizontal" ? u.width : u.height,
                  h = Math.min(Math.max(w + o, y), x - o) - t[l.index];
                for (let m = l.index; m < t.length; ++m) t[m] = t[m] + h;
                n([...t]);
              }
            },
          }),
        t.map((f, g) =>
          d.jsx(
            "div",
            {
              style: {
                ...p,
                top: e === "horizontal" ? 0 : f,
                left: e === "horizontal" ? f : 0,
                pointerEvents: "initial",
              },
              onMouseDown: (y) =>
                a({
                  clientX: y.clientX,
                  clientY: y.clientY,
                  offset: f,
                  index: g,
                }),
              children: d.jsx("div", { style: { ...Ty, background: r } }),
            },
            g,
          ),
        ),
      ],
    });
  };
function ky(e) {
  const [t, n] = b.useState([]);
  b.useEffect(() => {
    const s = [];
    for (let o = 0; o < e.columns.length - 1; ++o) {
      const l = e.columns[o];
      s[o] = (s[o - 1] || 0) + e.columnWidths.get(l);
    }
    n(s);
  }, [e.columns, e.columnWidths]);
  function r(s) {
    const o = new Map(e.columnWidths.entries());
    for (let l = 0; l < s.length; ++l) {
      const a = s[l] - (s[l - 1] || 0),
        u = e.columns[l];
      o.set(u, a);
    }
    e.setColumnWidths(o);
  }
  const i = b.useCallback(
    (s) => {
      var o, l;
      (l = e.setSorting) == null ||
        l.call(e, {
          by: s,
          negate:
            ((o = e.sorting) == null ? void 0 : o.by) === s
              ? !e.sorting.negate
              : !1,
        });
    },
    [e],
  );
  return d.jsxs("div", {
    className: `grid-view ${e.name}-grid-view`,
    children: [
      d.jsx(np, {
        orientation: "horizontal",
        offsets: t,
        setOffsets: r,
        resizerColor: "var(--vscode-panel-border)",
        resizerWidth: 1,
        minColumnWidth: 25,
      }),
      d.jsxs("div", {
        className: "vbox",
        children: [
          d.jsx("div", {
            className: "grid-view-header",
            children: e.columns.map((s, o) =>
              d.jsxs(
                "div",
                {
                  className: "grid-view-header-cell " + Ny(s, e.sorting),
                  style: {
                    width:
                      o < e.columns.length - 1 ? e.columnWidths.get(s) : void 0,
                  },
                  onClick: () => e.setSorting && i(s),
                  children: [
                    d.jsx("span", {
                      className: "grid-view-header-cell-title",
                      children: e.columnTitle(s),
                    }),
                    d.jsx("span", { className: "codicon codicon-triangle-up" }),
                    d.jsx("span", {
                      className: "codicon codicon-triangle-down",
                    }),
                  ],
                },
                e.columnTitle(s),
              ),
            ),
          }),
          d.jsx(vi, {
            name: e.name,
            items: e.items,
            id: e.id,
            render: (s, o) =>
              d.jsx(d.Fragment, {
                children: e.columns.map((l, a) => {
                  const { body: u, title: c } = e.render(s, l, o);
                  return d.jsx(
                    "div",
                    {
                      className: `grid-view-cell grid-view-column-${String(l)}`,
                      title: c,
                      style: {
                        width:
                          a < e.columns.length - 1
                            ? e.columnWidths.get(l)
                            : void 0,
                      },
                      children: u,
                    },
                    e.columnTitle(l),
                  );
                }),
              }),
            icon: e.icon,
            indent: e.indent,
            isError: e.isError,
            isWarning: e.isWarning,
            isInfo: e.isInfo,
            selectedItem: e.selectedItem,
            onAccepted: e.onAccepted,
            onSelected: e.onSelected,
            onLeftArrow: e.onLeftArrow,
            onRightArrow: e.onRightArrow,
            onHighlighted: e.onHighlighted,
            onIconClicked: e.onIconClicked,
            noItemsMessage: e.noItemsMessage,
            dataTestId: e.dataTestId,
            notSelectable: e.notSelectable,
          }),
        ],
      }),
    ],
  });
}
function Ny(e, t) {
  return e === (t == null ? void 0 : t.by)
    ? " filter-" + (t.negate ? "negative" : "positive")
    : "";
}
const Cy = ["All", "Fetch", "HTML", "JS", "CSS", "Font", "Image"],
  by = { searchValue: "", resourceType: "All" },
  Ly = ({ filterState: e, onFilterStateChange: t }) =>
    d.jsxs("div", {
      className: "network-filters",
      children: [
        d.jsx("input", {
          type: "search",
          placeholder: "Filter network",
          spellCheck: !1,
          value: e.searchValue,
          onChange: (n) => t({ ...e, searchValue: n.target.value }),
        }),
        d.jsx("div", {
          className: "network-filters-resource-types",
          children: Cy.map((n) =>
            d.jsx(
              "div",
              {
                title: n,
                onClick: () => t({ ...e, resourceType: n }),
                className: `network-filters-resource-type ${e.resourceType === n ? "selected" : ""}`,
                children: n,
              },
              n,
            ),
          ),
        }),
      ],
    }),
  Ay = ky;
function jy(e, t) {
  const n = b.useMemo(
      () =>
        ((e == null ? void 0 : e.resources) || []).filter((o) =>
          t
            ? !!o._monotonicTime &&
              o._monotonicTime >= t.minimum &&
              o._monotonicTime <= t.maximum
            : !0,
        ),
      [e, t],
    ),
    r = b.useMemo(() => new Oy(e), [e]);
  return { resources: n, contextIdMap: r };
}
const My = ({ boundaries: e, networkModel: t, onEntryHovered: n }) => {
    const [r, i] = b.useState(void 0),
      [s, o] = b.useState(void 0),
      [l, a] = b.useState(by),
      { renderedEntries: u } = b.useMemo(() => {
        const y = t.resources
          .map((w) => zy(w, e, t.contextIdMap))
          .filter(By(l));
        return r && Fy(y, r), { renderedEntries: y };
      }, [t.resources, t.contextIdMap, l, r, e]),
      [c, p] = b.useState(() => new Map(rp().map((y) => [y, Py(y)]))),
      f = b.useCallback((y) => {
        a(y), o(void 0);
      }, []);
    if (!t.resources.length) return d.jsx(kn, { text: "No network calls" });
    const g = d.jsx(Ay, {
      name: "network",
      items: u,
      selectedItem: s,
      onSelected: (y) => o(y),
      onHighlighted: (y) => n(y == null ? void 0 : y.resource),
      columns: Ry(!!s, u),
      columnTitle: Iy,
      columnWidths: c,
      setColumnWidths: p,
      isError: (y) => y.status.code >= 400 || y.status.code === -1,
      isInfo: (y) => !!y.route,
      render: (y, w) => $y(y, w),
      sorting: r,
      setSorting: i,
    });
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx(Ly, { filterState: l, onFilterStateChange: f }),
        !s && g,
        s &&
          d.jsx(Os, {
            sidebarSize: c.get("name"),
            sidebarIsFirst: !0,
            orientation: "horizontal",
            settingName: "networkResourceDetails",
            main: d.jsx(yy, { resource: s.resource, onClose: () => o(void 0) }),
            sidebar: g,
          }),
      ],
    });
  },
  Iy = (e) =>
    e === "contextId"
      ? "Source"
      : e === "name"
        ? "Name"
        : e === "method"
          ? "Method"
          : e === "status"
            ? "Status"
            : e === "contentType"
              ? "Content Type"
              : e === "duration"
                ? "Duration"
                : e === "size"
                  ? "Size"
                  : e === "start"
                    ? "Start"
                    : e === "route"
                      ? "Route"
                      : "",
  Py = (e) =>
    e === "name"
      ? 200
      : e === "method" || e === "status"
        ? 60
        : e === "contentType"
          ? 200
          : e === "contextId"
            ? 60
            : 100;
function Ry(e, t) {
  if (e) {
    const r = ["name"];
    return Oc(t) && r.unshift("contextId"), r;
  }
  let n = rp();
  return Oc(t) || (n = n.filter((r) => r !== "contextId")), n;
}
function rp() {
  return [
    "contextId",
    "name",
    "method",
    "status",
    "contentType",
    "duration",
    "size",
    "start",
    "route",
  ];
}
const $y = (e, t) =>
  t === "contextId"
    ? { body: e.contextId, title: e.name.url }
    : t === "name"
      ? { body: e.name.name, title: e.name.url }
      : t === "method"
        ? { body: e.method }
        : t === "status"
          ? {
              body: e.status.code > 0 ? e.status.code : "",
              title: e.status.text,
            }
          : t === "contentType"
            ? { body: e.contentType }
            : t === "duration"
              ? { body: et(e.duration) }
              : t === "size"
                ? { body: Um(e.size) }
                : t === "start"
                  ? { body: et(e.start) }
                  : t === "route"
                    ? { body: e.route }
                    : { body: "" };
class Oy {
  constructor(t) {
    V(this, "_pagerefToShortId", new Map());
    V(this, "_contextToId", new Map());
    V(this, "_lastPageId", 0);
    V(this, "_lastApiRequestContextId", 0);
  }
  contextId(t) {
    return t.pageref
      ? this._pageId(t.pageref)
      : t._apiRequest
        ? this._apiRequestContextId(t)
        : "";
  }
  _pageId(t) {
    let n = this._pagerefToShortId.get(t);
    return (
      n ||
        (++this._lastPageId,
        (n = "page#" + this._lastPageId),
        this._pagerefToShortId.set(t, n)),
      n
    );
  }
  _apiRequestContextId(t) {
    const n = $s(t);
    if (!n) return "";
    let r = this._contextToId.get(n);
    return (
      r ||
        (++this._lastApiRequestContextId,
        (r = "api#" + this._lastApiRequestContextId),
        this._contextToId.set(n, r)),
      r
    );
  }
}
function Oc(e) {
  const t = new Set();
  for (const n of e) if ((t.add(n.contextId), t.size > 1)) return !0;
  return !1;
}
const zy = (e, t, n) => {
  const r = Dy(e);
  let i;
  try {
    const l = new URL(e.request.url);
    (i = l.pathname.substring(l.pathname.lastIndexOf("/") + 1)),
      i || (i = l.host);
  } catch {
    i = e.request.url;
  }
  let s = e.response.content.mimeType;
  const o = s.match(/^(.*);\s*charset=.*$/);
  return (
    o && (s = o[1]),
    {
      name: { name: i, url: e.request.url },
      method: e.request.method,
      status: { code: e.response.status, text: e.response.statusText },
      contentType: s,
      duration: e.time,
      size:
        e.response._transferSize > 0
          ? e.response._transferSize
          : e.response.bodySize,
      start: e._monotonicTime - t.minimum,
      route: r,
      resource: e,
      contextId: n.contextId(e),
    }
  );
};
function Dy(e) {
  return e._wasAborted
    ? "aborted"
    : e._wasContinued
      ? "continued"
      : e._wasFulfilled
        ? "fulfilled"
        : e._apiRequest
          ? "api"
          : "";
}
function Fy(e, t) {
  const n = Hy(t == null ? void 0 : t.by);
  n && e.sort(n), t.negate && e.reverse();
}
function Hy(e) {
  if (e === "start") return (t, n) => t.start - n.start;
  if (e === "duration") return (t, n) => t.duration - n.duration;
  if (e === "status") return (t, n) => t.status.code - n.status.code;
  if (e === "method")
    return (t, n) => {
      const r = t.method,
        i = n.method;
      return r.localeCompare(i);
    };
  if (e === "size") return (t, n) => t.size - n.size;
  if (e === "contentType")
    return (t, n) => t.contentType.localeCompare(n.contentType);
  if (e === "name") return (t, n) => t.name.name.localeCompare(n.name.name);
  if (e === "route") return (t, n) => t.route.localeCompare(n.route);
  if (e === "contextId")
    return (t, n) => t.contextId.localeCompare(n.contextId);
}
const Uy = {
  All: () => !0,
  Fetch: (e) => e === "application/json",
  HTML: (e) => e === "text/html",
  CSS: (e) => e === "text/css",
  JS: (e) => e.includes("javascript"),
  Font: (e) => e.includes("font"),
  Image: (e) => e.includes("image"),
};
function By({ searchValue: e, resourceType: t }) {
  return (n) => {
    const r = Uy[t];
    return (
      r(n.contentType) && n.name.url.toLowerCase().includes(e.toLowerCase())
    );
  };
}
const zc = {
  queryAll(e, t) {
    t.startsWith("/") && e.nodeType !== Node.DOCUMENT_NODE && (t = "." + t);
    const n = [],
      r = e.ownerDocument || e;
    if (!r) return n;
    const i = r.evaluate(t, e, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    for (let s = i.iterateNext(); s; s = i.iterateNext())
      s.nodeType === Node.ELEMENT_NODE && n.push(s);
    return n;
  },
};
let ip = "";
function Vy(e) {
  ip = e;
}
function lo(e, t) {
  for (; t; ) {
    if (e.contains(t)) return !0;
    t = op(t);
  }
  return !1;
}
function ke(e) {
  if (e.parentElement) return e.parentElement;
  if (e.parentNode && e.parentNode.nodeType === 11 && e.parentNode.host)
    return e.parentNode.host;
}
function sp(e) {
  let t = e;
  for (; t.parentNode; ) t = t.parentNode;
  if (t.nodeType === 11 || t.nodeType === 9) return t;
}
function op(e) {
  for (; e.parentElement; ) e = e.parentElement;
  return ke(e);
}
function Rr(e, t, n) {
  for (; e; ) {
    const r = e.closest(t);
    if (n && r !== n && r != null && r.contains(n)) return;
    if (r) return r;
    e = op(e);
  }
}
function fr(e, t) {
  return e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView.getComputedStyle(e, t)
    : void 0;
}
function lp(e, t) {
  if (((t = t ?? fr(e)), !t)) return !0;
  if (Element.prototype.checkVisibility && ip !== "webkit") {
    if (!e.checkVisibility()) return !1;
  } else {
    const n = e.closest("details,summary");
    if (n !== e && (n == null ? void 0 : n.nodeName) === "DETAILS" && !n.open)
      return !1;
  }
  return t.visibility === "visible";
}
function fn(e) {
  const t = fr(e);
  if (!t) return !0;
  if (t.display === "contents") {
    for (let r = e.firstChild; r; r = r.nextSibling)
      if ((r.nodeType === 1 && fn(r)) || (r.nodeType === 3 && ap(r))) return !0;
    return !1;
  }
  if (!lp(e, t)) return !1;
  const n = e.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function ap(e) {
  const t = e.ownerDocument.createRange();
  t.selectNode(e);
  const n = t.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function xe(e) {
  return e instanceof HTMLFormElement ? "FORM" : e.tagName.toUpperCase();
}
function Dc(e) {
  return e.hasAttribute("aria-label") || e.hasAttribute("aria-labelledby");
}
const Fc =
    "article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]",
  Wy = new Map([
    ["aria-atomic", void 0],
    ["aria-busy", void 0],
    ["aria-controls", void 0],
    ["aria-current", void 0],
    ["aria-describedby", void 0],
    ["aria-details", void 0],
    ["aria-dropeffect", void 0],
    ["aria-flowto", void 0],
    ["aria-grabbed", void 0],
    ["aria-hidden", void 0],
    ["aria-keyshortcuts", void 0],
    [
      "aria-label",
      new Set([
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript",
      ]),
    ],
    [
      "aria-labelledby",
      new Set([
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript",
      ]),
    ],
    ["aria-live", void 0],
    ["aria-owns", void 0],
    ["aria-relevant", void 0],
    ["aria-roledescription", new Set(["generic"])],
  ]);
function up(e, t) {
  return [...Wy].some(
    ([n, r]) => !(r != null && r.has(t || "")) && e.hasAttribute(n),
  );
}
function cp(e) {
  return !Number.isNaN(Number(String(e.getAttribute("tabindex"))));
}
function qy(e) {
  return !Ep(e) && (Xy(e) || cp(e));
}
function Xy(e) {
  const t = xe(e);
  return ["BUTTON", "DETAILS", "SELECT", "TEXTAREA"].includes(t)
    ? !0
    : t === "A" || t === "AREA"
      ? e.hasAttribute("href")
      : t === "INPUT"
        ? !e.hidden
        : !1;
}
const Do = {
    A: (e) => (e.hasAttribute("href") ? "link" : null),
    AREA: (e) => (e.hasAttribute("href") ? "link" : null),
    ARTICLE: () => "article",
    ASIDE: () => "complementary",
    BLOCKQUOTE: () => "blockquote",
    BUTTON: () => "button",
    CAPTION: () => "caption",
    CODE: () => "code",
    DATALIST: () => "listbox",
    DD: () => "definition",
    DEL: () => "deletion",
    DETAILS: () => "group",
    DFN: () => "term",
    DIALOG: () => "dialog",
    DT: () => "term",
    EM: () => "emphasis",
    FIELDSET: () => "group",
    FIGURE: () => "figure",
    FOOTER: (e) => (Rr(e, Fc) ? null : "contentinfo"),
    FORM: (e) => (Dc(e) ? "form" : null),
    H1: () => "heading",
    H2: () => "heading",
    H3: () => "heading",
    H4: () => "heading",
    H5: () => "heading",
    H6: () => "heading",
    HEADER: (e) => (Rr(e, Fc) ? null : "banner"),
    HR: () => "separator",
    HTML: () => "document",
    IMG: (e) =>
      e.getAttribute("alt") === "" &&
      !e.getAttribute("title") &&
      !up(e) &&
      !cp(e)
        ? "presentation"
        : "img",
    INPUT: (e) => {
      const t = e.type.toLowerCase();
      if (t === "search")
        return e.hasAttribute("list") ? "combobox" : "searchbox";
      if (["email", "tel", "text", "url", ""].includes(t)) {
        const n = wi(e, e.getAttribute("list"))[0];
        return n && xe(n) === "DATALIST" ? "combobox" : "textbox";
      }
      return t === "hidden"
        ? ""
        : {
            button: "button",
            checkbox: "checkbox",
            image: "button",
            number: "spinbutton",
            radio: "radio",
            range: "slider",
            reset: "button",
            submit: "button",
          }[t] || "textbox";
    },
    INS: () => "insertion",
    LI: () => "listitem",
    MAIN: () => "main",
    MARK: () => "mark",
    MATH: () => "math",
    MENU: () => "list",
    METER: () => "meter",
    NAV: () => "navigation",
    OL: () => "list",
    OPTGROUP: () => "group",
    OPTION: () => "option",
    OUTPUT: () => "status",
    P: () => "paragraph",
    PROGRESS: () => "progressbar",
    SECTION: (e) => (Dc(e) ? "region" : null),
    SELECT: (e) =>
      e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox",
    STRONG: () => "strong",
    SUB: () => "subscript",
    SUP: () => "superscript",
    SVG: () => "img",
    TABLE: () => "table",
    TBODY: () => "rowgroup",
    TD: (e) => {
      const t = Rr(e, "table"),
        n = t ? Fs(t) : "";
      return n === "grid" || n === "treegrid" ? "gridcell" : "cell";
    },
    TEXTAREA: () => "textbox",
    TFOOT: () => "rowgroup",
    TH: (e) => {
      if (e.getAttribute("scope") === "col") return "columnheader";
      if (e.getAttribute("scope") === "row") return "rowheader";
      const t = Rr(e, "table"),
        n = t ? Fs(t) : "";
      return n === "grid" || n === "treegrid" ? "gridcell" : "cell";
    },
    THEAD: () => "rowgroup",
    TIME: () => "time",
    TR: () => "row",
    UL: () => "list",
  },
  Qy = {
    DD: ["DL", "DIV"],
    DIV: ["DL"],
    DT: ["DL", "DIV"],
    LI: ["OL", "UL"],
    TBODY: ["TABLE"],
    TD: ["TR"],
    TFOOT: ["TABLE"],
    TH: ["TR"],
    THEAD: ["TABLE"],
    TR: ["THEAD", "TBODY", "TFOOT", "TABLE"],
  };
function Hc(e) {
  var r;
  const t = ((r = Do[xe(e)]) == null ? void 0 : r.call(Do, e)) || "";
  if (!t) return null;
  let n = e;
  for (; n; ) {
    const i = ke(n),
      s = Qy[xe(n)];
    if (!s || !i || !s.includes(xe(i))) break;
    const o = Fs(i);
    if ((o === "none" || o === "presentation") && !dp(i, o)) return o;
    n = i;
  }
  return t;
}
const Ky = [
    "alert",
    "alertdialog",
    "application",
    "article",
    "banner",
    "blockquote",
    "button",
    "caption",
    "cell",
    "checkbox",
    "code",
    "columnheader",
    "combobox",
    "command",
    "complementary",
    "composite",
    "contentinfo",
    "definition",
    "deletion",
    "dialog",
    "directory",
    "document",
    "emphasis",
    "feed",
    "figure",
    "form",
    "generic",
    "grid",
    "gridcell",
    "group",
    "heading",
    "img",
    "input",
    "insertion",
    "landmark",
    "link",
    "list",
    "listbox",
    "listitem",
    "log",
    "main",
    "marquee",
    "math",
    "meter",
    "menu",
    "menubar",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "navigation",
    "none",
    "note",
    "option",
    "paragraph",
    "presentation",
    "progressbar",
    "radio",
    "radiogroup",
    "range",
    "region",
    "roletype",
    "row",
    "rowgroup",
    "rowheader",
    "scrollbar",
    "search",
    "searchbox",
    "section",
    "sectionhead",
    "select",
    "separator",
    "slider",
    "spinbutton",
    "status",
    "strong",
    "structure",
    "subscript",
    "superscript",
    "switch",
    "tab",
    "table",
    "tablist",
    "tabpanel",
    "term",
    "textbox",
    "time",
    "timer",
    "toolbar",
    "tooltip",
    "tree",
    "treegrid",
    "treeitem",
    "widget",
    "window",
  ],
  Gy = [
    "command",
    "composite",
    "input",
    "landmark",
    "range",
    "roletype",
    "section",
    "sectionhead",
    "select",
    "structure",
    "widget",
    "window",
  ],
  Yy = Ky.filter((e) => !Gy.includes(e));
function Fs(e) {
  return (
    (e.getAttribute("role") || "")
      .split(" ")
      .map((n) => n.trim())
      .find((n) => Yy.includes(n)) || null
  );
}
function dp(e, t) {
  return up(e, t) || qy(e);
}
function be(e) {
  const t = Fs(e);
  if (!t) return Hc(e);
  if (t === "none" || t === "presentation") {
    const n = Hc(e);
    if (dp(e, n)) return n;
  }
  return t;
}
function fp(e) {
  return e === null ? void 0 : e.toLowerCase() === "true";
}
function hp(e) {
  return ["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"].includes(xe(e));
}
function vt(e) {
  if (hp(e)) return !0;
  const t = fr(e),
    n = e.nodeName === "SLOT";
  if ((t == null ? void 0 : t.display) === "contents" && !n) {
    for (let i = e.firstChild; i; i = i.nextSibling)
      if ((i.nodeType === 1 && !vt(i)) || (i.nodeType === 3 && ap(i)))
        return !1;
    return !0;
  }
  return !(e.nodeName === "OPTION" && !!e.closest("select")) && !n && !lp(e, t)
    ? !0
    : pp(e);
}
function pp(e) {
  let t = Ot == null ? void 0 : Ot.get(e);
  if (t === void 0) {
    if (
      ((t = !1),
      e.parentElement &&
        e.parentElement.shadowRoot &&
        !e.assignedSlot &&
        (t = !0),
      !t)
    ) {
      const n = fr(e);
      t =
        !n || n.display === "none" || fp(e.getAttribute("aria-hidden")) === !0;
    }
    if (!t) {
      const n = ke(e);
      n && (t = pp(n));
    }
    Ot == null || Ot.set(e, t);
  }
  return t;
}
function wi(e, t) {
  if (!t) return [];
  const n = sp(e);
  if (!n) return [];
  try {
    const r = t.split(" ").filter((s) => !!s),
      i = new Set();
    for (const s of r) {
      const o = n.querySelector("#" + CSS.escape(s));
      o && i.add(o);
    }
    return [...i];
  } catch {
    return [];
  }
}
function _t(e) {
  return e.trim();
}
function as(e) {
  return e
    .split(" ")
    .map((t) =>
      t
        .replace(
          /\r\n/g,
          `
`,
        )
        .replace(/\s\s*/g, " "),
    )
    .join(" ")
    .trim();
}
function Uc(e, t) {
  const n = [...e.querySelectorAll(t)];
  for (const r of wi(e, e.getAttribute("aria-owns")))
    r.matches(t) && n.push(r), n.push(...r.querySelectorAll(t));
  return n;
}
function Bc(e, t) {
  const n = t === "::before" ? eu : tu;
  if (n != null && n.has(e)) return (n == null ? void 0 : n.get(e)) || "";
  const r = fr(e, t),
    i = Jy(r);
  return n && n.set(e, i), i;
}
function Jy(e) {
  if (!e || e.display === "none" || e.visibility === "hidden") return "";
  const t = e.content;
  if (
    (t[0] === "'" && t[t.length - 1] === "'") ||
    (t[0] === '"' && t[t.length - 1] === '"')
  ) {
    const n = t.substring(1, t.length - 1);
    return (e.display || "inline") !== "inline" ? " " + n + " " : n;
  }
  return "";
}
function mp(e) {
  const t = e.getAttribute("aria-labelledby");
  return t === null ? null : wi(e, t);
}
function Zy(e, t) {
  const n = [
      "button",
      "cell",
      "checkbox",
      "columnheader",
      "gridcell",
      "heading",
      "link",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "option",
      "radio",
      "row",
      "rowheader",
      "switch",
      "tab",
      "tooltip",
      "treeitem",
    ].includes(e),
    r =
      t &&
      [
        "",
        "caption",
        "code",
        "contentinfo",
        "definition",
        "deletion",
        "emphasis",
        "insertion",
        "list",
        "listitem",
        "mark",
        "none",
        "paragraph",
        "presentation",
        "region",
        "row",
        "rowgroup",
        "section",
        "strong",
        "subscript",
        "superscript",
        "table",
        "term",
        "time",
      ].includes(e);
  return n || r;
}
function Hs(e, t) {
  const n = t ? Ya : Ga;
  let r = n == null ? void 0 : n.get(e);
  return (
    r === void 0 &&
      ((r = ""),
      [
        "caption",
        "code",
        "definition",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "mark",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "suggestion",
        "superscript",
        "term",
        "time",
      ].includes(be(e) || "") ||
        (r = as(
          gt(e, {
            includeHidden: t,
            visitedElements: new Set(),
            embeddedInDescribedBy: void 0,
            embeddedInLabelledBy: void 0,
            embeddedInLabel: void 0,
            embeddedInNativeTextAlternative: void 0,
            embeddedInTargetElement: "self",
          }),
        )),
      n == null || n.set(e, r)),
    r
  );
}
function Vc(e, t) {
  const n = t ? Za : Ja;
  let r = n == null ? void 0 : n.get(e);
  if (r === void 0) {
    if (((r = ""), e.hasAttribute("aria-describedby"))) {
      const i = wi(e, e.getAttribute("aria-describedby"));
      r = as(
        i
          .map((s) =>
            gt(s, {
              includeHidden: t,
              visitedElements: new Set(),
              embeddedInLabelledBy: void 0,
              embeddedInLabel: void 0,
              embeddedInNativeTextAlternative: void 0,
              embeddedInTargetElement: "none",
              embeddedInDescribedBy: { element: s, hidden: vt(s) },
            }),
          )
          .join(" "),
      );
    } else
      e.hasAttribute("aria-description")
        ? (r = as(e.getAttribute("aria-description") || ""))
        : (r = as(e.getAttribute("title") || ""));
    n == null || n.set(e, r);
  }
  return r;
}
function gt(e, t) {
  var a, u, c, p;
  if (t.visitedElements.has(e)) return "";
  const n = {
    ...t,
    embeddedInTargetElement:
      t.embeddedInTargetElement === "self"
        ? "descendant"
        : t.embeddedInTargetElement,
  };
  if (!t.includeHidden) {
    const f =
      !!((a = t.embeddedInLabelledBy) != null && a.hidden) ||
      !!((u = t.embeddedInDescribedBy) != null && u.hidden) ||
      !!((c = t.embeddedInNativeTextAlternative) != null && c.hidden) ||
      !!((p = t.embeddedInLabel) != null && p.hidden);
    if (hp(e) || (!f && vt(e))) return t.visitedElements.add(e), "";
  }
  const r = mp(e);
  if (!t.embeddedInLabelledBy) {
    const f = (r || [])
      .map((g) =>
        gt(g, {
          ...t,
          embeddedInLabelledBy: { element: g, hidden: vt(g) },
          embeddedInDescribedBy: void 0,
          embeddedInTargetElement: "none",
          embeddedInLabel: void 0,
          embeddedInNativeTextAlternative: void 0,
        }),
      )
      .join(" ");
    if (f) return f;
  }
  const i = be(e) || "",
    s = xe(e);
  if (
    t.embeddedInLabel ||
    t.embeddedInLabelledBy ||
    t.embeddedInTargetElement === "descendant"
  ) {
    const f = [...(e.labels || [])].includes(e),
      g = (r || []).includes(e);
    if (!f && !g) {
      if (i === "textbox")
        return (
          t.visitedElements.add(e),
          s === "INPUT" || s === "TEXTAREA" ? e.value : e.textContent || ""
        );
      if (["combobox", "listbox"].includes(i)) {
        t.visitedElements.add(e);
        let y;
        if (s === "SELECT")
          (y = [...e.selectedOptions]),
            !y.length && e.options.length && y.push(e.options[0]);
        else {
          const w =
            i === "combobox" ? Uc(e, "*").find((x) => be(x) === "listbox") : e;
          y = w
            ? Uc(w, '[aria-selected="true"]').filter((x) => be(x) === "option")
            : [];
        }
        return !y.length && s === "INPUT"
          ? e.value
          : y.map((w) => gt(w, n)).join(" ");
      }
      if (
        ["progressbar", "scrollbar", "slider", "spinbutton", "meter"].includes(
          i,
        )
      )
        return (
          t.visitedElements.add(e),
          e.hasAttribute("aria-valuetext")
            ? e.getAttribute("aria-valuetext") || ""
            : e.hasAttribute("aria-valuenow")
              ? e.getAttribute("aria-valuenow") || ""
              : e.getAttribute("value") || ""
        );
      if (["menu"].includes(i)) return t.visitedElements.add(e), "";
    }
  }
  const o = e.getAttribute("aria-label") || "";
  if (_t(o)) return t.visitedElements.add(e), o;
  if (!["presentation", "none"].includes(i)) {
    if (s === "INPUT" && ["button", "submit", "reset"].includes(e.type)) {
      t.visitedElements.add(e);
      const f = e.value || "";
      return _t(f)
        ? f
        : e.type === "submit"
          ? "Submit"
          : e.type === "reset"
            ? "Reset"
            : e.getAttribute("title") || "";
    }
    if (s === "INPUT" && e.type === "image") {
      t.visitedElements.add(e);
      const f = e.labels || [];
      if (f.length && !t.embeddedInLabelledBy) return zi(f, t);
      const g = e.getAttribute("alt") || "";
      if (_t(g)) return g;
      const y = e.getAttribute("title") || "";
      return _t(y) ? y : "Submit";
    }
    if (!r && s === "BUTTON") {
      t.visitedElements.add(e);
      const f = e.labels || [];
      if (f.length) return zi(f, t);
    }
    if (!r && s === "OUTPUT") {
      t.visitedElements.add(e);
      const f = e.labels || [];
      return f.length ? zi(f, t) : e.getAttribute("title") || "";
    }
    if (!r && (s === "TEXTAREA" || s === "SELECT" || s === "INPUT")) {
      t.visitedElements.add(e);
      const f = e.labels || [];
      if (f.length) return zi(f, t);
      const g =
          (s === "INPUT" &&
            ["text", "password", "search", "tel", "email", "url"].includes(
              e.type,
            )) ||
          s === "TEXTAREA",
        y = e.getAttribute("placeholder") || "",
        w = e.getAttribute("title") || "";
      return !g || w ? w : y;
    }
    if (!r && s === "FIELDSET") {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (xe(g) === "LEGEND")
          return gt(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: vt(g) },
          });
      return e.getAttribute("title") || "";
    }
    if (!r && s === "FIGURE") {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (xe(g) === "FIGCAPTION")
          return gt(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: vt(g) },
          });
      return e.getAttribute("title") || "";
    }
    if (s === "IMG") {
      t.visitedElements.add(e);
      const f = e.getAttribute("alt") || "";
      return _t(f) ? f : e.getAttribute("title") || "";
    }
    if (s === "TABLE") {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (xe(g) === "CAPTION")
          return gt(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: vt(g) },
          });
      const f = e.getAttribute("summary") || "";
      if (f) return f;
    }
    if (s === "AREA") {
      t.visitedElements.add(e);
      const f = e.getAttribute("alt") || "";
      return _t(f) ? f : e.getAttribute("title") || "";
    }
    if (s === "SVG" || e.ownerSVGElement) {
      t.visitedElements.add(e);
      for (let f = e.firstElementChild; f; f = f.nextElementSibling)
        if (xe(f) === "TITLE" && f.ownerSVGElement)
          return gt(f, {
            ...n,
            embeddedInLabelledBy: { element: f, hidden: vt(f) },
          });
    }
    if (e.ownerSVGElement && s === "A") {
      const f = e.getAttribute("xlink:title") || "";
      if (_t(f)) return t.visitedElements.add(e), f;
    }
  }
  const l = s === "SUMMARY" && !["presentation", "none"].includes(i);
  if (
    Zy(i, t.embeddedInTargetElement === "descendant") ||
    l ||
    t.embeddedInLabelledBy ||
    t.embeddedInDescribedBy ||
    t.embeddedInLabel ||
    t.embeddedInNativeTextAlternative
  ) {
    t.visitedElements.add(e);
    const f = [],
      g = (h, m) => {
        var v;
        if (!(m && h.assignedSlot))
          if (h.nodeType === 1) {
            const S = ((v = fr(h)) == null ? void 0 : v.display) || "inline";
            let N = gt(h, n);
            (S !== "inline" || h.nodeName === "BR") && (N = " " + N + " "),
              f.push(N);
          } else h.nodeType === 3 && f.push(h.textContent || "");
      };
    f.push(Bc(e, "::before"));
    const y = e.nodeName === "SLOT" ? e.assignedNodes() : [];
    if (y.length) for (const h of y) g(h, !1);
    else {
      for (let h = e.firstChild; h; h = h.nextSibling) g(h, !0);
      if (e.shadowRoot)
        for (let h = e.shadowRoot.firstChild; h; h = h.nextSibling) g(h, !0);
      for (const h of wi(e, e.getAttribute("aria-owns"))) g(h, !0);
    }
    f.push(Bc(e, "::after"));
    const w = f.join("");
    if (t.embeddedInTargetElement === "self" ? _t(w) : w) return w;
  }
  if (!["presentation", "none"].includes(i) || s === "IFRAME") {
    t.visitedElements.add(e);
    const f = e.getAttribute("title") || "";
    if (_t(f)) return f;
  }
  return t.visitedElements.add(e), "";
}
const gp = [
  "gridcell",
  "option",
  "row",
  "tab",
  "rowheader",
  "columnheader",
  "treeitem",
];
function ew(e) {
  return xe(e) === "OPTION"
    ? e.selected
    : gp.includes(be(e) || "")
      ? fp(e.getAttribute("aria-selected")) === !0
      : !1;
}
const vp = [
  "checkbox",
  "menuitemcheckbox",
  "option",
  "radio",
  "switch",
  "menuitemradio",
  "treeitem",
];
function tw(e) {
  const t = yp(e, !0);
  return t === "error" ? !1 : t;
}
function yp(e, t) {
  const n = xe(e);
  if (t && n === "INPUT" && e.indeterminate) return "mixed";
  if (n === "INPUT" && ["checkbox", "radio"].includes(e.type)) return e.checked;
  if (vp.includes(be(e) || "")) {
    const r = e.getAttribute("aria-checked");
    return r === "true" ? !0 : t && r === "mixed" ? "mixed" : !1;
  }
  return "error";
}
const wp = ["button"];
function nw(e) {
  if (wp.includes(be(e) || "")) {
    const t = e.getAttribute("aria-pressed");
    if (t === "true") return !0;
    if (t === "mixed") return "mixed";
  }
  return !1;
}
const xp = [
  "application",
  "button",
  "checkbox",
  "combobox",
  "gridcell",
  "link",
  "listbox",
  "menuitem",
  "row",
  "rowheader",
  "tab",
  "treeitem",
  "columnheader",
  "menuitemcheckbox",
  "menuitemradio",
  "rowheader",
  "switch",
];
function rw(e) {
  if (xe(e) === "DETAILS") return e.open;
  if (xp.includes(be(e) || "")) {
    const t = e.getAttribute("aria-expanded");
    return t === null ? "none" : t === "true";
  }
  return "none";
}
const Sp = ["heading", "listitem", "row", "treeitem"];
function iw(e) {
  const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[xe(e)];
  if (t) return t;
  if (Sp.includes(be(e) || "")) {
    const n = e.getAttribute("aria-level"),
      r = n === null ? Number.NaN : Number(n);
    if (Number.isInteger(r) && r >= 1) return r;
  }
  return 0;
}
const sw = [
  "application",
  "button",
  "composite",
  "gridcell",
  "group",
  "input",
  "link",
  "menuitem",
  "scrollbar",
  "separator",
  "tab",
  "checkbox",
  "columnheader",
  "combobox",
  "grid",
  "listbox",
  "menu",
  "menubar",
  "menuitemcheckbox",
  "menuitemradio",
  "option",
  "radio",
  "radiogroup",
  "row",
  "rowheader",
  "searchbox",
  "select",
  "slider",
  "spinbutton",
  "switch",
  "tablist",
  "textbox",
  "toolbar",
  "tree",
  "treegrid",
  "treeitem",
];
function _p(e) {
  return Ep(e) || kp(e);
}
function Ep(e) {
  return (
    ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTION", "OPTGROUP"].includes(
      e.tagName,
    ) &&
    (e.hasAttribute("disabled") || Tp(e))
  );
}
function Tp(e) {
  return e
    ? xe(e) === "FIELDSET" && e.hasAttribute("disabled")
      ? !0
      : Tp(e.parentElement)
    : !1;
}
function kp(e) {
  if (!e) return !1;
  if (sw.includes(be(e) || "")) {
    const t = (e.getAttribute("aria-disabled") || "").toLowerCase();
    if (t === "true") return !0;
    if (t === "false") return !1;
  }
  return kp(ke(e));
}
function zi(e, t) {
  return [...e]
    .map((n) =>
      gt(n, {
        ...t,
        embeddedInLabel: { element: n, hidden: vt(n) },
        embeddedInNativeTextAlternative: void 0,
        embeddedInLabelledBy: void 0,
        embeddedInDescribedBy: void 0,
        embeddedInTargetElement: "none",
      }),
    )
    .filter((n) => !!n)
    .join(" ");
}
let Ga,
  Ya,
  Ja,
  Za,
  Ot,
  eu,
  tu,
  Np = 0;
function nu() {
  ++Np,
    Ga ?? (Ga = new Map()),
    Ya ?? (Ya = new Map()),
    Ja ?? (Ja = new Map()),
    Za ?? (Za = new Map()),
    Ot ?? (Ot = new Map()),
    eu ?? (eu = new Map()),
    tu ?? (tu = new Map());
}
function ru() {
  --Np ||
    ((Ga = void 0),
    (Ya = void 0),
    (Ja = void 0),
    (Za = void 0),
    (Ot = void 0),
    (eu = void 0),
    (tu = void 0));
}
function Cp(e, t) {
  for (const n of t.jsonPath) e != null && (e = e[n]);
  return bp(e, t);
}
function bp(e, t) {
  const n = typeof e == "string" && !t.caseSensitive ? e.toUpperCase() : e,
    r =
      typeof t.value == "string" && !t.caseSensitive
        ? t.value.toUpperCase()
        : t.value;
  return t.op === "<truthy>"
    ? !!n
    : t.op === "="
      ? r instanceof RegExp
        ? typeof n == "string" && !!n.match(r)
        : n === r
      : typeof n != "string" || typeof r != "string"
        ? !1
        : t.op === "*="
          ? n.includes(r)
          : t.op === "^="
            ? n.startsWith(r)
            : t.op === "$="
              ? n.endsWith(r)
              : t.op === "|="
                ? n === r || n.startsWith(r + "-")
                : t.op === "~="
                  ? n.split(" ").includes(r)
                  : !1;
}
function iu(e) {
  const t = e.ownerDocument;
  return (
    e.nodeName === "SCRIPT" ||
    e.nodeName === "NOSCRIPT" ||
    e.nodeName === "STYLE" ||
    (t.head && t.head.contains(e))
  );
}
function Re(e, t) {
  let n = e.get(t);
  if (n === void 0) {
    if (((n = { full: "", normalized: "", immediate: [] }), !iu(t))) {
      let r = "";
      if (
        t instanceof HTMLInputElement &&
        (t.type === "submit" || t.type === "button")
      )
        n = { full: t.value, normalized: We(t.value), immediate: [t.value] };
      else {
        for (let i = t.firstChild; i; i = i.nextSibling)
          i.nodeType === Node.TEXT_NODE
            ? ((n.full += i.nodeValue || ""), (r += i.nodeValue || ""))
            : (r && n.immediate.push(r),
              (r = ""),
              i.nodeType === Node.ELEMENT_NODE && (n.full += Re(e, i).full));
        r && n.immediate.push(r),
          t.shadowRoot && (n.full += Re(e, t.shadowRoot).full),
          n.full && (n.normalized = We(n.full));
      }
    }
    e.set(t, n);
  }
  return n;
}
function ao(e, t, n) {
  if (iu(t) || !n(Re(e, t))) return "none";
  for (let r = t.firstChild; r; r = r.nextSibling)
    if (r.nodeType === Node.ELEMENT_NODE && n(Re(e, r)))
      return "selfAndChildren";
  return t.shadowRoot && n(Re(e, t.shadowRoot)) ? "selfAndChildren" : "self";
}
function Lp(e, t) {
  const n = mp(t);
  if (n) return n.map((s) => Re(e, s));
  const r = t.getAttribute("aria-label");
  if (r !== null && r.trim())
    return [{ full: r, normalized: We(r), immediate: [r] }];
  const i = t.nodeName === "INPUT" && t.type !== "hidden";
  if (
    ["BUTTON", "METER", "OUTPUT", "PROGRESS", "SELECT", "TEXTAREA"].includes(
      t.nodeName,
    ) ||
    i
  ) {
    const s = t.labels;
    if (s) return [...s].map((o) => Re(e, o));
  }
  return [];
}
function Wc(e) {
  return e.displayName || e.name || "Anonymous";
}
function ow(e) {
  if (e.type)
    switch (typeof e.type) {
      case "function":
        return Wc(e.type);
      case "string":
        return e.type;
      case "object":
        return e.type.displayName || (e.type.render ? Wc(e.type.render) : "");
    }
  if (e._currentElement) {
    const t = e._currentElement.type;
    if (typeof t == "string") return t;
    if (typeof t == "function") return t.displayName || t.name || "Anonymous";
  }
  return "";
}
function lw(e) {
  var t;
  return e.key ?? ((t = e._currentElement) == null ? void 0 : t.key);
}
function aw(e) {
  if (e.child) {
    const n = [];
    for (let r = e.child; r; r = r.sibling) n.push(r);
    return n;
  }
  if (!e._currentElement) return [];
  const t = (n) => {
    var i;
    const r = (i = n._currentElement) == null ? void 0 : i.type;
    return typeof r == "function" || typeof r == "string";
  };
  if (e._renderedComponent) {
    const n = e._renderedComponent;
    return t(n) ? [n] : [];
  }
  return e._renderedChildren
    ? [...Object.values(e._renderedChildren)].filter(t)
    : [];
}
function uw(e) {
  var r;
  const t =
    e.memoizedProps || ((r = e._currentElement) == null ? void 0 : r.props);
  if (!t || typeof t == "string") return t;
  const n = { ...t };
  return delete n.children, n;
}
function Ap(e) {
  var r;
  const t = {
      key: lw(e),
      name: ow(e),
      children: aw(e).map(Ap),
      rootElements: [],
      props: uw(e),
    },
    n =
      e.stateNode ||
      e._hostNode ||
      ((r = e._renderedComponent) == null ? void 0 : r._hostNode);
  if (n instanceof Element) t.rootElements.push(n);
  else for (const i of t.children) t.rootElements.push(...i.rootElements);
  return t;
}
function jp(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) jp(r, t, n);
  return n;
}
function Mp(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
  do {
    const i = r.currentNode,
      s = i,
      o = Object.keys(s).find(
        (a) => a.startsWith("__reactContainer") && s[a] !== null,
      );
    if (o) t.push(s[o].stateNode.current);
    else {
      const a = "_reactRootContainer";
      s.hasOwnProperty(a) &&
        s[a] !== null &&
        t.push(s[a]._internalRoot.current);
    }
    if (i instanceof Element && i.hasAttribute("data-reactroot"))
      for (const a of Object.keys(i))
        (a.startsWith("__reactInternalInstance") ||
          a.startsWith("__reactFiber")) &&
          t.push(i[a]);
    const l = i instanceof Element ? i.shadowRoot : null;
    l && Mp(l, t);
  } while (r.nextNode());
  return t;
}
const cw = {
  queryAll(e, t) {
    const { name: n, attributes: r } = mn(t, !1),
      o = Mp(e.ownerDocument || e)
        .map((a) => Ap(a))
        .map((a) =>
          jp(a, (u) => {
            const c = u.props ?? {};
            if (
              (u.key !== void 0 && (c.key = u.key),
              (n && u.name !== n) || u.rootElements.some((p) => !lo(e, p)))
            )
              return !1;
            for (const p of r) if (!Cp(c, p)) return !1;
            return !0;
          }),
        )
        .flat(),
      l = new Set();
    for (const a of o) for (const u of a.rootElements) l.add(u);
    return [...l];
  },
};
function Ip(e, t) {
  const n = e.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
  let r = n.substring(n.lastIndexOf("/") + 1);
  return t && r.endsWith(t) && (r = r.substring(0, r.length - t.length)), r;
}
function dw(e, t) {
  return t ? t.toUpperCase() : "";
}
const fw = /(?:^|[-_/])(\w)/g,
  Pp = (e) => e && e.replace(fw, dw);
function hw(e) {
  function t(c) {
    const p = c.name || c._componentTag || c.__playwright_guessedName;
    if (p) return p;
    const f = c.__file;
    if (f) return Pp(Ip(f, ".vue"));
  }
  function n(c, p) {
    return (c.type.__playwright_guessedName = p), p;
  }
  function r(c) {
    var f, g, y, w;
    const p = t(c.type || {});
    if (p) return p;
    if (c.root === c) return "Root";
    for (const x in (g = (f = c.parent) == null ? void 0 : f.type) == null
      ? void 0
      : g.components)
      if (((y = c.parent) == null ? void 0 : y.type.components[x]) === c.type)
        return n(c, x);
    for (const x in (w = c.appContext) == null ? void 0 : w.components)
      if (c.appContext.components[x] === c.type) return n(c, x);
    return "Anonymous Component";
  }
  function i(c) {
    return c._isBeingDestroyed || c.isUnmounted;
  }
  function s(c) {
    return c.subTree.type.toString() === "Symbol(Fragment)";
  }
  function o(c) {
    const p = [];
    return (
      c.component && p.push(c.component),
      c.suspense && p.push(...o(c.suspense.activeBranch)),
      Array.isArray(c.children) &&
        c.children.forEach((f) => {
          f.component ? p.push(f.component) : p.push(...o(f));
        }),
      p.filter((f) => {
        var g;
        return !i(f) && !((g = f.type.devtools) != null && g.hide);
      })
    );
  }
  function l(c) {
    return s(c) ? a(c.subTree) : [c.subTree.el];
  }
  function a(c) {
    if (!c.children) return [];
    const p = [];
    for (let f = 0, g = c.children.length; f < g; f++) {
      const y = c.children[f];
      y.component ? p.push(...l(y.component)) : y.el && p.push(y.el);
    }
    return p;
  }
  function u(c) {
    return {
      name: r(c),
      children: o(c.subTree).map(u),
      rootElements: l(c),
      props: c.props,
    };
  }
  return u(e);
}
function pw(e) {
  function t(s) {
    const o = s.displayName || s.name || s._componentTag;
    if (o) return o;
    const l = s.__file;
    if (l) return Pp(Ip(l, ".vue"));
  }
  function n(s) {
    const o = t(s.$options || s.fnOptions || {});
    return o || (s.$root === s ? "Root" : "Anonymous Component");
  }
  function r(s) {
    return s.$children
      ? s.$children
      : Array.isArray(s.subTree.children)
        ? s.subTree.children
            .filter((o) => !!o.component)
            .map((o) => o.component)
        : [];
  }
  function i(s) {
    return {
      name: n(s),
      children: r(s).map(i),
      rootElements: [s.$el],
      props: s._props,
    };
  }
  return i(e);
}
function Rp(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) Rp(r, t, n);
  return n;
}
function $p(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT),
    i = new Set();
  do {
    const s = r.currentNode;
    s.__vue__ && i.add(s.__vue__.$root),
      s.__vue_app__ &&
        s._vnode &&
        s._vnode.component &&
        t.push({ root: s._vnode.component, version: 3 });
    const o = s instanceof Element ? s.shadowRoot : null;
    o && $p(o, t);
  } while (r.nextNode());
  for (const s of i) t.push({ version: 2, root: s });
  return t;
}
const mw = {
    queryAll(e, t) {
      const n = e.ownerDocument || e,
        { name: r, attributes: i } = mn(t, !1),
        l = $p(n)
          .map((u) => (u.version === 3 ? hw(u.root) : pw(u.root)))
          .map((u) =>
            Rp(u, (c) => {
              if ((r && c.name !== r) || c.rootElements.some((p) => !lo(e, p)))
                return !1;
              for (const p of i) if (!Cp(c.props, p)) return !1;
              return !0;
            }),
          )
          .flat(),
        a = new Set();
      for (const u of l) for (const c of u.rootElements) a.add(c);
      return [...a];
    },
  },
  Op = [
    "selected",
    "checked",
    "pressed",
    "expanded",
    "level",
    "disabled",
    "name",
    "include-hidden",
  ];
Op.sort();
function Cr(e, t, n) {
  if (!t.includes(n))
    throw new Error(
      `"${e}" attribute is only supported for roles: ${t
        .slice()
        .sort()
        .map((r) => `"${r}"`)
        .join(", ")}`,
    );
}
function Ln(e, t) {
  if (e.op !== "<truthy>" && !t.includes(e.value))
    throw new Error(
      `"${e.name}" must be one of ${t.map((n) => JSON.stringify(n)).join(", ")}`,
    );
}
function An(e, t) {
  if (!t.includes(e.op))
    throw new Error(`"${e.name}" does not support "${e.op}" matcher`);
}
function gw(e, t) {
  const n = { role: t };
  for (const r of e)
    switch (r.name) {
      case "checked": {
        Cr(r.name, vp, t),
          Ln(r, [!0, !1, "mixed"]),
          An(r, ["<truthy>", "="]),
          (n.checked = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "pressed": {
        Cr(r.name, wp, t),
          Ln(r, [!0, !1, "mixed"]),
          An(r, ["<truthy>", "="]),
          (n.pressed = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "selected": {
        Cr(r.name, gp, t),
          Ln(r, [!0, !1]),
          An(r, ["<truthy>", "="]),
          (n.selected = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "expanded": {
        Cr(r.name, xp, t),
          Ln(r, [!0, !1]),
          An(r, ["<truthy>", "="]),
          (n.expanded = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "level": {
        if (
          (Cr(r.name, Sp, t),
          typeof r.value == "string" && (r.value = +r.value),
          r.op !== "=" || typeof r.value != "number" || Number.isNaN(r.value))
        )
          throw new Error('"level" attribute must be compared to a number');
        n.level = r.value;
        break;
      }
      case "disabled": {
        Ln(r, [!0, !1]),
          An(r, ["<truthy>", "="]),
          (n.disabled = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "name": {
        if (r.op === "<truthy>")
          throw new Error('"name" attribute must have a value');
        if (typeof r.value != "string" && !(r.value instanceof RegExp))
          throw new Error(
            '"name" attribute must be a string or a regular expression',
          );
        (n.name = r.value), (n.nameOp = r.op), (n.exact = r.caseSensitive);
        break;
      }
      case "include-hidden": {
        Ln(r, [!0, !1]),
          An(r, ["<truthy>", "="]),
          (n.includeHidden = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      default:
        throw new Error(
          `Unknown attribute "${r.name}", must be one of ${Op.map((i) => `"${i}"`).join(", ")}.`,
        );
    }
  return n;
}
function vw(e, t, n) {
  const r = [],
    i = (o) => {
      if (
        be(o) === t.role &&
        !(t.selected !== void 0 && ew(o) !== t.selected) &&
        !(t.checked !== void 0 && tw(o) !== t.checked) &&
        !(t.pressed !== void 0 && nw(o) !== t.pressed) &&
        !(t.expanded !== void 0 && rw(o) !== t.expanded) &&
        !(t.level !== void 0 && iw(o) !== t.level) &&
        !(t.disabled !== void 0 && _p(o) !== t.disabled) &&
        !(!t.includeHidden && vt(o))
      ) {
        if (t.name !== void 0) {
          const l = We(Hs(o, !!t.includeHidden));
          if (
            (typeof t.name == "string" && (t.name = We(t.name)),
            n && !t.exact && t.nameOp === "=" && (t.nameOp = "*="),
            !bp(l, {
              name: "",
              jsonPath: [],
              op: t.nameOp || "=",
              value: t.name,
              caseSensitive: !!t.exact,
            }))
          )
            return;
        }
        r.push(o);
      }
    },
    s = (o) => {
      const l = [];
      o.shadowRoot && l.push(o.shadowRoot);
      for (const a of o.querySelectorAll("*"))
        i(a), a.shadowRoot && l.push(a.shadowRoot);
      l.forEach(s);
    };
  return s(e), r;
}
function qc(e) {
  return {
    queryAll: (t, n) => {
      const r = mn(n, !0),
        i = r.name.toLowerCase();
      if (!i) throw new Error("Role must not be empty");
      const s = gw(r.attributes, i);
      nu();
      try {
        return vw(t, s, e);
      } finally {
        ru();
      }
    },
  };
}
function yw(e, t, n) {
  const r = e.left - t.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function ww(e, t, n) {
  const r = t.left - e.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function xw(e, t, n) {
  const r = t.top - e.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function Sw(e, t, n) {
  const r = e.top - t.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function _w(e, t, n) {
  const r = n === void 0 ? 50 : n;
  let i = 0;
  return (
    e.left - t.right >= 0 && (i += e.left - t.right),
    t.left - e.right >= 0 && (i += t.left - e.right),
    t.top - e.bottom >= 0 && (i += t.top - e.bottom),
    e.top - t.bottom >= 0 && (i += e.top - t.bottom),
    i > r ? void 0 : i
  );
}
const Ew = ["left-of", "right-of", "above", "below", "near"];
function zp(e, t, n, r) {
  const i = t.getBoundingClientRect(),
    s = { "left-of": ww, "right-of": yw, above: xw, below: Sw, near: _w }[e];
  let o;
  for (const l of n) {
    if (l === t) continue;
    const a = s(i, l.getBoundingClientRect(), r);
    a !== void 0 && (o === void 0 || a < o) && (o = a);
  }
  return o;
}
class Tw {
  constructor(t) {
    (this._engines = new Map()),
      (this._cacheQueryCSS = new Map()),
      (this._cacheMatches = new Map()),
      (this._cacheQuery = new Map()),
      (this._cacheMatchesSimple = new Map()),
      (this._cacheMatchesParents = new Map()),
      (this._cacheCallMatches = new Map()),
      (this._cacheCallQuery = new Map()),
      (this._cacheQuerySimple = new Map()),
      (this._cacheText = new Map()),
      (this._retainCacheCounter = 0);
    for (const [i, s] of t) this._engines.set(i, s);
    this._engines.set("not", Cw),
      this._engines.set("is", $r),
      this._engines.set("where", $r),
      this._engines.set("has", kw),
      this._engines.set("scope", Nw),
      this._engines.set("light", bw),
      this._engines.set("visible", Lw),
      this._engines.set("text", Aw),
      this._engines.set("text-is", jw),
      this._engines.set("text-matches", Mw),
      this._engines.set("has-text", Iw),
      this._engines.set("right-of", br("right-of")),
      this._engines.set("left-of", br("left-of")),
      this._engines.set("above", br("above")),
      this._engines.set("below", br("below")),
      this._engines.set("near", br("near")),
      this._engines.set("nth-match", Pw);
    const n = [...this._engines.keys()];
    n.sort();
    const r = [...Gh];
    if ((r.sort(), n.join("|") !== r.join("|")))
      throw new Error(
        `Please keep customCSSNames in sync with evaluator engines: ${n.join("|")} vs ${r.join("|")}`,
      );
  }
  begin() {
    ++this._retainCacheCounter;
  }
  end() {
    --this._retainCacheCounter,
      this._retainCacheCounter ||
        (this._cacheQueryCSS.clear(),
        this._cacheMatches.clear(),
        this._cacheQuery.clear(),
        this._cacheMatchesSimple.clear(),
        this._cacheMatchesParents.clear(),
        this._cacheCallMatches.clear(),
        this._cacheCallQuery.clear(),
        this._cacheQuerySimple.clear(),
        this._cacheText.clear());
  }
  _cached(t, n, r, i) {
    t.has(n) || t.set(n, []);
    const s = t.get(n),
      o = s.find((a) => r.every((u, c) => a.rest[c] === u));
    if (o) return o.result;
    const l = i();
    return s.push({ rest: r, result: l }), l;
  }
  _checkSelector(t) {
    if (
      !(
        typeof t == "object" &&
        t &&
        (Array.isArray(t) || ("simples" in t && t.simples.length))
      )
    )
      throw new Error(`Malformed selector "${t}"`);
    return t;
  }
  matches(t, n, r) {
    const i = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheMatches,
        t,
        [i, r.scope, r.pierceShadow, r.originalScope],
        () =>
          Array.isArray(i)
            ? this._matchesEngine($r, t, i, r)
            : (this._hasScopeClause(i) &&
                (r = this._expandContextForScopeMatching(r)),
              this._matchesSimple(
                t,
                i.simples[i.simples.length - 1].selector,
                r,
              )
                ? this._matchesParents(t, i, i.simples.length - 2, r)
                : !1),
      );
    } finally {
      this.end();
    }
  }
  query(t, n) {
    const r = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheQuery,
        r,
        [t.scope, t.pierceShadow, t.originalScope],
        () => {
          if (Array.isArray(r)) return this._queryEngine($r, t, r);
          this._hasScopeClause(r) &&
            (t = this._expandContextForScopeMatching(t));
          const i = this._scoreMap;
          this._scoreMap = new Map();
          let s = this._querySimple(
            t,
            r.simples[r.simples.length - 1].selector,
          );
          return (
            (s = s.filter((o) =>
              this._matchesParents(o, r, r.simples.length - 2, t),
            )),
            this._scoreMap.size &&
              s.sort((o, l) => {
                const a = this._scoreMap.get(o),
                  u = this._scoreMap.get(l);
                return a === u
                  ? 0
                  : a === void 0
                    ? 1
                    : u === void 0
                      ? -1
                      : a - u;
              }),
            (this._scoreMap = i),
            s
          );
        },
      );
    } finally {
      this.end();
    }
  }
  _markScore(t, n) {
    this._scoreMap && this._scoreMap.set(t, n);
  }
  _hasScopeClause(t) {
    return t.simples.some((n) =>
      n.selector.functions.some((r) => r.name === "scope"),
    );
  }
  _expandContextForScopeMatching(t) {
    if (t.scope.nodeType !== 1) return t;
    const n = ke(t.scope);
    return n
      ? { ...t, scope: n, originalScope: t.originalScope || t.scope }
      : t;
  }
  _matchesSimple(t, n, r) {
    return this._cached(
      this._cacheMatchesSimple,
      t,
      [n, r.scope, r.pierceShadow, r.originalScope],
      () => {
        if (t === r.scope || (n.css && !this._matchesCSS(t, n.css))) return !1;
        for (const i of n.functions)
          if (!this._matchesEngine(this._getEngine(i.name), t, i.args, r))
            return !1;
        return !0;
      },
    );
  }
  _querySimple(t, n) {
    return n.functions.length
      ? this._cached(
          this._cacheQuerySimple,
          n,
          [t.scope, t.pierceShadow, t.originalScope],
          () => {
            let r = n.css;
            const i = n.functions;
            r === "*" && i.length && (r = void 0);
            let s,
              o = -1;
            r !== void 0
              ? (s = this._queryCSS(t, r))
              : ((o = i.findIndex(
                  (l) => this._getEngine(l.name).query !== void 0,
                )),
                o === -1 && (o = 0),
                (s = this._queryEngine(
                  this._getEngine(i[o].name),
                  t,
                  i[o].args,
                )));
            for (let l = 0; l < i.length; l++) {
              if (l === o) continue;
              const a = this._getEngine(i[l].name);
              a.matches !== void 0 &&
                (s = s.filter((u) => this._matchesEngine(a, u, i[l].args, t)));
            }
            for (let l = 0; l < i.length; l++) {
              if (l === o) continue;
              const a = this._getEngine(i[l].name);
              a.matches === void 0 &&
                (s = s.filter((u) => this._matchesEngine(a, u, i[l].args, t)));
            }
            return s;
          },
        )
      : this._queryCSS(t, n.css || "*");
  }
  _matchesParents(t, n, r, i) {
    return r < 0
      ? !0
      : this._cached(
          this._cacheMatchesParents,
          t,
          [n, r, i.scope, i.pierceShadow, i.originalScope],
          () => {
            const { selector: s, combinator: o } = n.simples[r];
            if (o === ">") {
              const l = Di(t, i);
              return !l || !this._matchesSimple(l, s, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (o === "+") {
              const l = Fo(t, i);
              return !l || !this._matchesSimple(l, s, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (o === "") {
              let l = Di(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === "") break;
                }
                l = Di(l, i);
              }
              return !1;
            }
            if (o === "~") {
              let l = Fo(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === "~") break;
                }
                l = Fo(l, i);
              }
              return !1;
            }
            if (o === ">=") {
              let l = t;
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === "") break;
                }
                l = Di(l, i);
              }
              return !1;
            }
            throw new Error(`Unsupported combinator "${o}"`);
          },
        );
  }
  _matchesEngine(t, n, r, i) {
    if (t.matches) return this._callMatches(t, n, r, i);
    if (t.query) return this._callQuery(t, r, i).includes(n);
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _queryEngine(t, n, r) {
    if (t.query) return this._callQuery(t, r, n);
    if (t.matches)
      return this._queryCSS(n, "*").filter((i) =>
        this._callMatches(t, i, r, n),
      );
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _callMatches(t, n, r, i) {
    return this._cached(
      this._cacheCallMatches,
      n,
      [t, i.scope, i.pierceShadow, i.originalScope, ...r],
      () => t.matches(n, r, i, this),
    );
  }
  _callQuery(t, n, r) {
    return this._cached(
      this._cacheCallQuery,
      t,
      [r.scope, r.pierceShadow, r.originalScope, ...n],
      () => t.query(r, n, this),
    );
  }
  _matchesCSS(t, n) {
    return t.matches(n);
  }
  _queryCSS(t, n) {
    return this._cached(
      this._cacheQueryCSS,
      n,
      [t.scope, t.pierceShadow, t.originalScope],
      () => {
        let r = [];
        function i(s) {
          if (((r = r.concat([...s.querySelectorAll(n)])), !!t.pierceShadow)) {
            s.shadowRoot && i(s.shadowRoot);
            for (const o of s.querySelectorAll("*"))
              o.shadowRoot && i(o.shadowRoot);
          }
        }
        return i(t.scope), r;
      },
    );
  }
  _getEngine(t) {
    const n = this._engines.get(t);
    if (!n) throw new Error(`Unknown selector engine "${t}"`);
    return n;
  }
}
const $r = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      return t.some((i) => r.matches(e, i, n));
    },
    query(e, t, n) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      let r = [];
      for (const i of t) r = r.concat(n.query(e, i));
      return t.length === 1 ? r : Dp(r);
    },
  },
  kw = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"has" engine expects non-empty selector list');
      return r.query({ ...n, scope: e }, t).length > 0;
    },
  },
  Nw = {
    matches(e, t, n, r) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const i = n.originalScope || n.scope;
      return i.nodeType === 9 ? e === i.documentElement : e === i;
    },
    query(e, t, n) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const r = e.originalScope || e.scope;
      if (r.nodeType === 9) {
        const i = r.documentElement;
        return i ? [i] : [];
      }
      return r.nodeType === 1 ? [r] : [];
    },
  },
  Cw = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"not" engine expects non-empty selector list');
      return !r.matches(e, t, n);
    },
  },
  bw = {
    query(e, t, n) {
      return n.query({ ...e, pierceShadow: !1 }, t);
    },
    matches(e, t, n, r) {
      return r.matches(e, t, { ...n, pierceShadow: !1 });
    },
  },
  Lw = {
    matches(e, t, n, r) {
      if (t.length) throw new Error('"visible" engine expects no arguments');
      return fn(e);
    },
  },
  Aw = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"text" engine expects a single string');
      const i = We(t[0]).toLowerCase(),
        s = (o) => o.normalized.toLowerCase().includes(i);
      return ao(r._cacheText, e, s) === "self";
    },
  },
  jw = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"text-is" engine expects a single string');
      const i = We(t[0]),
        s = (o) =>
          !i && !o.immediate.length ? !0 : o.immediate.some((l) => We(l) === i);
      return ao(r._cacheText, e, s) !== "none";
    },
  },
  Mw = {
    matches(e, t, n, r) {
      if (
        t.length === 0 ||
        typeof t[0] != "string" ||
        t.length > 2 ||
        (t.length === 2 && typeof t[1] != "string")
      )
        throw new Error(
          '"text-matches" engine expects a regexp body and optional regexp flags',
        );
      const i = new RegExp(t[0], t.length === 2 ? t[1] : void 0),
        s = (o) => i.test(o.full);
      return ao(r._cacheText, e, s) === "self";
    },
  },
  Iw = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"has-text" engine expects a single string');
      if (iu(e)) return !1;
      const i = We(t[0]).toLowerCase();
      return ((o) => o.normalized.toLowerCase().includes(i))(
        Re(r._cacheText, e),
      );
    },
  };
function br(e) {
  return {
    matches(t, n, r, i) {
      const s =
          n.length && typeof n[n.length - 1] == "number"
            ? n[n.length - 1]
            : void 0,
        o = s === void 0 ? n : n.slice(0, n.length - 1);
      if (n.length < 1 + (s === void 0 ? 0 : 1))
        throw new Error(
          `"${e}" engine expects a selector list and optional maximum distance in pixels`,
        );
      const l = i.query(r, o),
        a = zp(e, t, l, s);
      return a === void 0 ? !1 : (i._markScore(t, a), !0);
    },
  };
}
const Pw = {
  query(e, t, n) {
    let r = t[t.length - 1];
    if (t.length < 2)
      throw new Error(
        '"nth-match" engine expects non-empty selector list and an index argument',
      );
    if (typeof r != "number" || r < 1)
      throw new Error(
        '"nth-match" engine expects a one-based index as the last argument',
      );
    const i = $r.query(e, t.slice(0, t.length - 1), n);
    return r--, r < i.length ? [i[r]] : [];
  },
};
function Di(e, t) {
  if (e !== t.scope) return t.pierceShadow ? ke(e) : e.parentElement || void 0;
}
function Fo(e, t) {
  if (e !== t.scope) return e.previousElementSibling || void 0;
}
function Dp(e) {
  const t = new Map(),
    n = [],
    r = [];
  function i(o) {
    let l = t.get(o);
    if (l) return l;
    const a = ke(o);
    return (
      a ? i(a).children.push(o) : n.push(o),
      (l = { children: [], taken: !1 }),
      t.set(o, l),
      l
    );
  }
  for (const o of e) i(o).taken = !0;
  function s(o) {
    const l = t.get(o);
    if ((l.taken && r.push(o), l.children.length > 1)) {
      const a = new Set(l.children);
      l.children = [];
      let u = o.firstElementChild;
      for (; u && l.children.length < a.size; )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
      for (
        u = o.shadowRoot ? o.shadowRoot.firstElementChild : null;
        u && l.children.length < a.size;

      )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
    }
    l.children.forEach(s);
  }
  return n.forEach(s), r;
}
const ql = new Map(),
  Xl = new Map(),
  Fp = 10,
  hr = Fp / 2,
  Xc = 1,
  Rw = 2,
  $w = 10,
  Ow = 50,
  Hp = 100,
  Up = 120,
  Bp = 140,
  Vp = 160,
  Ql = 180,
  Wp = 200,
  zw = 250,
  Dw = Hp + hr,
  Fw = Up + hr,
  Hw = Bp + hr,
  Uw = Vp + hr,
  Bw = Ql + hr,
  Vw = Wp + hr,
  Ww = 300,
  qw = 500,
  Xw = 510,
  Ho = 520,
  qp = 530,
  Xp = 1e4,
  Qw = 1e7,
  Kw = 1e3;
function Qc(e, t, n) {
  e._evaluator.begin(), nu();
  try {
    let r = [];
    if (n.forTextExpect) {
      let o = Fi(e, t.ownerDocument.documentElement, n);
      for (let l = t; l; l = ke(l)) {
        const a = jn(e, l, { ...n, noText: !0 });
        if (!a) continue;
        if (zt(a) <= Kw) {
          o = a;
          break;
        }
      }
      r = [us(o)];
    } else {
      if (!t.matches("input,textarea,select") && !t.isContentEditable) {
        const o = Rr(
          t,
          "button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]",
          n.root,
        );
        o && fn(o) && (t = o);
      }
      if (n.multiple) {
        const o = jn(e, t, n),
          l = jn(e, t, { ...n, noText: !0 });
        let a = [o, l];
        if (
          (ql.clear(),
          Xl.clear(),
          o && Uo(o) && a.push(jn(e, t, { ...n, noCSSId: !0 })),
          l && Uo(l) && a.push(jn(e, t, { ...n, noText: !0, noCSSId: !0 })),
          (a = a.filter(Boolean)),
          !a.length)
        ) {
          const u = Fi(e, t, n);
          a.push(u), Uo(u) && a.push(Fi(e, t, { ...n, noCSSId: !0 }));
        }
        r = [...new Set(a.map((u) => us(u)))];
      } else {
        const o = jn(e, t, n) || Fi(e, t, n);
        r = [us(o)];
      }
    }
    const i = r[0],
      s = e.parseSelector(i);
    return {
      selector: i,
      selectors: r,
      elements: e.querySelectorAll(s, n.root ?? t.ownerDocument),
    };
  } finally {
    ql.clear(), Xl.clear(), ru(), e._evaluator.end();
  }
}
function Kc(e) {
  return e.filter((t) => t[0].selector[0] !== "/");
}
function jn(e, t, n) {
  if (n.root && !lo(n.root, t))
    throw new Error("Target element must belong to the root's subtree");
  if (t === n.root) return [{ engine: "css", selector: ":scope", score: 1 }];
  if (t.ownerDocument.documentElement === t)
    return [{ engine: "css", selector: "html", score: 1 }];
  const r = (s, o) => {
      const l = s === t;
      let a = o ? Yw(e, s, s === t) : [];
      s !== t && (a = Kc(a));
      const u = Gw(e, s, n)
        .filter(
          (f) => !n.omitInternalEngines || !f.engine.startsWith("internal:"),
        )
        .map((f) => [f]);
      let c = Gc(e, n.root ?? t.ownerDocument, s, [...a, ...u], l);
      a = Kc(a);
      const p = (f) => {
        const g = o && !f.length,
          y = [...f, ...u].filter((x) => (c ? zt(x) < zt(c) : !0));
        let w = y[0];
        if (w)
          for (let x = ke(s); x && x !== n.root; x = ke(x)) {
            const h = i(x, g);
            if (!h || (c && zt([...h, ...w]) >= zt(c))) continue;
            if (((w = Gc(e, x, s, y, l)), !w)) return;
            const m = [...h, ...w];
            (!c || zt(m) < zt(c)) && (c = m);
          }
      };
      return p(a), s === t && a.length && p([]), c;
    },
    i = (s, o) => {
      const l = o ? ql : Xl;
      let a = l.get(s);
      return a === void 0 && ((a = r(s, o)), l.set(s, a)), a;
    };
  return r(t, !n.noText);
}
function Gw(e, t, n) {
  const r = [];
  {
    for (const o of ["data-testid", "data-test-id", "data-test"])
      o !== n.testIdAttributeName &&
        t.getAttribute(o) &&
        r.push({
          engine: "css",
          selector: `[${o}=${kr(t.getAttribute(o))}]`,
          score: Rw,
        });
    if (!n.noCSSId) {
      const o = t.getAttribute("id");
      o && !Jw(o) && r.push({ engine: "css", selector: Qp(o), score: qw });
    }
    r.push({
      engine: "css",
      selector: Ye(t.nodeName.toLowerCase()),
      score: qp,
    });
  }
  if (t.nodeName === "IFRAME") {
    for (const o of ["name", "title"])
      t.getAttribute(o) &&
        r.push({
          engine: "css",
          selector: `${Ye(t.nodeName.toLowerCase())}[${o}=${kr(t.getAttribute(o))}]`,
          score: $w,
        });
    return (
      t.getAttribute(n.testIdAttributeName) &&
        r.push({
          engine: "css",
          selector: `[${n.testIdAttributeName}=${kr(t.getAttribute(n.testIdAttributeName))}]`,
          score: Xc,
        }),
      Kl([r]),
      r
    );
  }
  if (
    (t.getAttribute(n.testIdAttributeName) &&
      r.push({
        engine: "internal:testid",
        selector: `[${n.testIdAttributeName}=${Te(t.getAttribute(n.testIdAttributeName), !0)}]`,
        score: Xc,
      }),
    t.nodeName === "INPUT" || t.nodeName === "TEXTAREA")
  ) {
    const o = t;
    if (o.placeholder) {
      r.push({
        engine: "internal:attr",
        selector: `[placeholder=${Te(o.placeholder, !0)}]`,
        score: Dw,
      });
      for (const l of qn(o.placeholder))
        r.push({
          engine: "internal:attr",
          selector: `[placeholder=${Te(l.text, !1)}]`,
          score: Hp - l.scoreBouns,
        });
    }
  }
  const i = Lp(e._evaluator._cacheText, t);
  for (const o of i) {
    const l = o.normalized;
    r.push({ engine: "internal:label", selector: Ze(l, !0), score: Fw });
    for (const a of qn(l))
      r.push({
        engine: "internal:label",
        selector: Ze(a.text, !1),
        score: Up - a.scoreBouns,
      });
  }
  const s = be(t);
  return (
    s &&
      !["none", "presentation"].includes(s) &&
      r.push({ engine: "internal:role", selector: s, score: Xw }),
    t.getAttribute("name") &&
      [
        "BUTTON",
        "FORM",
        "FIELDSET",
        "FRAME",
        "IFRAME",
        "INPUT",
        "KEYGEN",
        "OBJECT",
        "OUTPUT",
        "SELECT",
        "TEXTAREA",
        "MAP",
        "META",
        "PARAM",
      ].includes(t.nodeName) &&
      r.push({
        engine: "css",
        selector: `${Ye(t.nodeName.toLowerCase())}[name=${kr(t.getAttribute("name"))}]`,
        score: Ho,
      }),
    ["INPUT", "TEXTAREA"].includes(t.nodeName) &&
      t.getAttribute("type") !== "hidden" &&
      t.getAttribute("type") &&
      r.push({
        engine: "css",
        selector: `${Ye(t.nodeName.toLowerCase())}[type=${kr(t.getAttribute("type"))}]`,
        score: Ho,
      }),
    ["INPUT", "TEXTAREA", "SELECT"].includes(t.nodeName) &&
      t.getAttribute("type") !== "hidden" &&
      r.push({
        engine: "css",
        selector: Ye(t.nodeName.toLowerCase()),
        score: Ho + 1,
      }),
    Kl([r]),
    r
  );
}
function Yw(e, t, n) {
  if (t.nodeName === "SELECT") return [];
  const r = [],
    i = t.getAttribute("title");
  if (i) {
    r.push([
      { engine: "internal:attr", selector: `[title=${Te(i, !0)}]`, score: Vw },
    ]);
    for (const a of qn(i))
      r.push([
        {
          engine: "internal:attr",
          selector: `[title=${Te(a.text, !1)}]`,
          score: Wp - a.scoreBouns,
        },
      ]);
  }
  const s = t.getAttribute("alt");
  if (s && ["APPLET", "AREA", "IMG", "INPUT"].includes(t.nodeName)) {
    r.push([
      { engine: "internal:attr", selector: `[alt=${Te(s, !0)}]`, score: Uw },
    ]);
    for (const a of qn(s))
      r.push([
        {
          engine: "internal:attr",
          selector: `[alt=${Te(a.text, !1)}]`,
          score: Vp - a.scoreBouns,
        },
      ]);
  }
  const o = Re(e._evaluator._cacheText, t).normalized;
  if (o) {
    const a = qn(o);
    if (n) {
      o.length <= 80 &&
        r.push([{ engine: "internal:text", selector: Ze(o, !0), score: Bw }]);
      for (const c of a)
        r.push([
          {
            engine: "internal:text",
            selector: Ze(c.text, !1),
            score: Ql - c.scoreBouns,
          },
        ]);
    }
    const u = {
      engine: "css",
      selector: Ye(t.nodeName.toLowerCase()),
      score: qp,
    };
    for (const c of a)
      r.push([
        u,
        {
          engine: "internal:has-text",
          selector: Ze(c.text, !1),
          score: Ql - c.scoreBouns,
        },
      ]);
    if (o.length <= 80) {
      const c = new RegExp("^" + p0(o) + "$");
      r.push([
        u,
        { engine: "internal:has-text", selector: Ze(c, !1), score: zw },
      ]);
    }
  }
  const l = be(t);
  if (l && !["none", "presentation"].includes(l)) {
    const a = Hs(t, !1);
    if (a) {
      r.push([
        {
          engine: "internal:role",
          selector: `${l}[name=${Te(a, !0)}]`,
          score: Hw,
        },
      ]);
      for (const u of qn(a))
        r.push([
          {
            engine: "internal:role",
            selector: `${l}[name=${Te(u.text, !1)}]`,
            score: Bp - u.scoreBouns,
          },
        ]);
    }
  }
  return Kl(r), r;
}
function Qp(e) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(e) ? "#" + e : `[id="${Ye(e)}"]`;
}
function Uo(e) {
  return e.some(
    (t) =>
      t.engine === "css" &&
      (t.selector.startsWith("#") || t.selector.startsWith('[id="')),
  );
}
function Fi(e, t, n) {
  const r = n.root ?? t.ownerDocument,
    i = [];
  function s(l) {
    const a = i.slice();
    l && a.unshift(l);
    const u = a.join(" > "),
      c = e.parseSelector(u);
    return e.querySelector(c, r, !1) === t ? u : void 0;
  }
  function o(l) {
    const a = { engine: "css", selector: l, score: Qw },
      u = e.parseSelector(l),
      c = e.querySelectorAll(u, r);
    if (c.length === 1) return [a];
    const p = { engine: "nth", selector: String(c.indexOf(t)), score: Xp };
    return [a, p];
  }
  for (let l = t; l && l !== r; l = ke(l)) {
    const a = l.nodeName.toLowerCase();
    let u = "";
    if (l.id && !n.noCSSId) {
      const f = Qp(l.id),
        g = s(f);
      if (g) return o(g);
      u = f;
    }
    const c = l.parentNode,
      p = [...l.classList];
    for (let f = 0; f < p.length; ++f) {
      const g = "." + Ye(p.slice(0, f + 1).join(".")),
        y = s(g);
      if (y) return o(y);
      !u && c && c.querySelectorAll(g).length === 1 && (u = g);
    }
    if (c) {
      const f = [...c.children],
        y =
          f.filter((x) => x.nodeName.toLowerCase() === a).indexOf(l) === 0
            ? Ye(a)
            : `${Ye(a)}:nth-child(${1 + f.indexOf(l)})`,
        w = s(y);
      if (w) return o(w);
      u || (u = y);
    } else u || (u = Ye(a));
    i.unshift(u);
  }
  return o(s());
}
function Kl(e) {
  for (const t of e)
    for (const n of t)
      n.score > Ow &&
        n.score < Ww &&
        (n.score += Math.min(Fp, (n.selector.length / 10) | 0));
}
function us(e) {
  const t = [];
  let n = "";
  for (const { engine: r, selector: i } of e)
    t.length &&
      (n !== "css" || r !== "css" || i.startsWith(":nth-match(")) &&
      t.push(">>"),
      (n = r),
      r === "css" ? t.push(i) : t.push(`${r}=${i}`);
  return t.join(" ");
}
function zt(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n].score * (e.length - n);
  return t;
}
function Gc(e, t, n, r, i) {
  const s = r.map((l) => ({ tokens: l, score: zt(l) }));
  s.sort((l, a) => l.score - a.score);
  let o = null;
  for (const { tokens: l } of s) {
    const a = e.parseSelector(us(l)),
      u = e.querySelectorAll(a, t);
    if (u[0] === n && u.length === 1) return l;
    const c = u.indexOf(n);
    if (!i || o || c === -1 || u.length > 5) continue;
    const p = { engine: "nth", selector: String(c), score: Xp };
    o = [...l, p];
  }
  return o;
}
function Jw(e) {
  let t,
    n = 0;
  for (let r = 0; r < e.length; ++r) {
    const i = e[r];
    let s;
    if (!(i === "-" || i === "_")) {
      if (
        (i >= "a" && i <= "z"
          ? (s = "lower")
          : i >= "A" && i <= "Z"
            ? (s = "upper")
            : i >= "0" && i <= "9"
              ? (s = "digit")
              : (s = "other"),
        s === "lower" && t === "upper")
      ) {
        t = s;
        continue;
      }
      t && t !== s && ++n, (t = s);
    }
  }
  return n >= e.length / 4;
}
function Hi(e, t) {
  if (e.length <= t) return e;
  e = e.substring(0, t);
  const n = e.match(/^(.*)\b(.+?)$/);
  return n ? n[1].trimEnd() : "";
}
function qn(e) {
  let t = [];
  {
    const n = e.match(/^([\d.,]+)[^.,\w]/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = Hi(e.substring(r).trimStart(), 80);
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  {
    const n = e.match(/[^.,\w]([\d.,]+)$/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = Hi(e.substring(0, e.length - r).trimEnd(), 80);
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  return (
    e.length <= 30
      ? t.push({ text: e, scoreBouns: 0 })
      : (t.push({ text: Hi(e, 80), scoreBouns: 0 }),
        t.push({ text: Hi(e, 30), scoreBouns: 1 })),
    (t = t.filter((n) => n.text)),
    t.length || t.push({ text: e.substring(0, 80), scoreBouns: 0 }),
    t
  );
}
const Yc =
  ":host{font-size:13px;font-family:system-ui,Ubuntu,Droid Sans,sans-serif;color:#333}svg{position:absolute;height:0}x-pw-tooltip{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#fff;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:none;font-size:12.8px;font-weight:400;left:0;line-height:1.5;max-width:600px;position:absolute;top:0;padding:0;flex-direction:column;overflow:hidden}x-pw-tooltip-line{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;cursor:pointer}x-pw-tooltip-line.selectable:hover{background-color:#f2f2f2;overflow:hidden}x-pw-tooltip-footer{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;color:#777}x-pw-dialog{background-color:#fff;pointer-events:auto;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:flex;flex-direction:column;position:absolute;width:400px;height:150px;z-index:10;font-size:13px}x-pw-dialog-body{display:flex;flex-direction:column;flex:auto}x-pw-dialog-body label{margin:5px 8px;display:flex;flex-direction:row;align-items:center}x-pw-highlight{position:absolute;top:0;left:0;width:0;height:0}x-pw-action-point{position:absolute;width:20px;height:20px;background:red;border-radius:10px;margin:-10px 0 0 -10px;z-index:2}x-pw-separator{height:1px;margin:6px 9px;background:#949494e5}x-pw-tool-gripper{height:28px;width:24px;margin:2px 0;cursor:grab}x-pw-tool-gripper:active{cursor:grabbing}x-pw-tool-gripper>x-div{width:16px;height:16px;margin:6px 4px;clip-path:url(#icon-gripper);background-color:#555}x-pw-tools-list>label{display:flex;align-items:center;margin:0 10px;-webkit-user-select:none;user-select:none}x-pw-tools-list{display:flex;width:100%;border-bottom:1px solid #dddddd}x-pw-tool-item{pointer-events:auto;cursor:pointer;height:28px;width:28px;border-radius:3px}x-pw-tool-item:not(.disabled):hover{background-color:#dbdbdb}x-pw-tool-item.active{background-color:#8acae480}x-pw-tool-item.active:not(.disabled):hover{background-color:#8acae4c4}x-pw-tool-item>x-div{width:16px;height:16px;margin:6px;background-color:#3a3a3a}x-pw-tool-item.disabled>x-div{background-color:#61616180;cursor:default}x-pw-tool-item.record.active{background-color:transparent}x-pw-tool-item.record.active:hover{background-color:#dbdbdb}x-pw-tool-item.record.active>x-div{background-color:#a1260d}x-pw-tool-item.accept>x-div{background-color:#388a34}x-pw-tool-item.record>x-div{clip-path:url(#icon-circle-large-filled)}x-pw-tool-item.pick-locator>x-div{clip-path:url(#icon-inspect)}x-pw-tool-item.text>x-div{clip-path:url(#icon-whole-word)}x-pw-tool-item.visibility>x-div{clip-path:url(#icon-eye)}x-pw-tool-item.value>x-div{clip-path:url(#icon-symbol-constant)}x-pw-tool-item.accept>x-div{clip-path:url(#icon-check)}x-pw-tool-item.cancel>x-div{clip-path:url(#icon-close)}x-pw-tool-item.succeeded>x-div{clip-path:url(#icon-pass);background-color:#388a34!important}x-pw-overlay{position:absolute;top:0;max-width:min-content;z-index:2147483647;background:transparent;pointer-events:auto}x-pw-overlay x-pw-tools-list{background-color:#fffd;box-shadow:#0000001a 0 5px 5px;border-radius:3px;border-bottom:none}x-pw-overlay x-pw-tool-item{margin:2px}textarea.text-editor{font-family:system-ui,Ubuntu,Droid Sans,sans-serif;flex:auto;border:none;margin:6px 10px;color:#333;outline:1px solid transparent!important;resize:none;padding:0;font-size:13px}textarea.text-editor.does-not-match{outline:1px solid red!important}x-div{display:block}x-spacer{flex:auto}*{box-sizing:border-box}*[hidden]{display:none!important}x-locator-editor{flex:none;width:100%;height:60px;padding:4px;border-bottom:1px solid #dddddd;outline:1px solid transparent}x-locator-editor.does-not-match{outline:1px solid red}.CodeMirror{width:100%!important;height:100%!important}";
class Bo {
  constructor(t) {
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._language = "javascript"),
      (this._injectedScript = t);
    const n = t.document;
    (this._isUnderTest = t.isUnderTest),
      (this._glassPaneElement = n.createElement("x-pw-glass")),
      (this._glassPaneElement.style.position = "fixed"),
      (this._glassPaneElement.style.top = "0"),
      (this._glassPaneElement.style.right = "0"),
      (this._glassPaneElement.style.bottom = "0"),
      (this._glassPaneElement.style.left = "0"),
      (this._glassPaneElement.style.zIndex = "2147483646"),
      (this._glassPaneElement.style.pointerEvents = "none"),
      (this._glassPaneElement.style.display = "flex"),
      (this._glassPaneElement.style.backgroundColor = "transparent");
    for (const r of [
      "click",
      "auxclick",
      "dragstart",
      "input",
      "keydown",
      "keyup",
      "pointerdown",
      "pointerup",
      "mousedown",
      "mouseup",
      "mouseleave",
      "focus",
      "scroll",
    ])
      this._glassPaneElement.addEventListener(r, (i) => {
        i.stopPropagation(),
          i.stopImmediatePropagation(),
          i.type === "click" &&
            i.button === 0 &&
            this._highlightOptions.tooltipListItemSelected &&
            this._highlightOptions.tooltipListItemSelected(void 0);
      });
    if (
      ((this._actionPointElement = n.createElement("x-pw-action-point")),
      this._actionPointElement.setAttribute("hidden", "true"),
      (this._glassPaneShadow = this._glassPaneElement.attachShadow({
        mode: this._isUnderTest ? "open" : "closed",
      })),
      typeof this._glassPaneShadow.adoptedStyleSheets.push == "function")
    ) {
      const r = new this._injectedScript.window.CSSStyleSheet();
      r.replaceSync(Yc), this._glassPaneShadow.adoptedStyleSheets.push(r);
    } else {
      const r = this._injectedScript.document.createElement("style");
      (r.textContent = Yc), this._glassPaneShadow.appendChild(r);
    }
    this._glassPaneShadow.appendChild(this._actionPointElement);
  }
  install() {
    this._injectedScript.document.documentElement.appendChild(
      this._glassPaneElement,
    );
  }
  setLanguage(t) {
    this._language = t;
  }
  runHighlightOnRaf(t) {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this.updateHighlight(
        this._injectedScript.querySelectorAll(
          t,
          this._injectedScript.document.documentElement,
        ),
        { tooltipText: Yt(this._language, Sn(t)) },
      ),
      (this._rafRequest = this._injectedScript.builtinRequestAnimationFrame(
        () => this.runHighlightOnRaf(t),
      ));
  }
  uninstall() {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this._glassPaneElement.remove();
  }
  showActionPoint(t, n) {
    (this._actionPointElement.style.top = n + "px"),
      (this._actionPointElement.style.left = t + "px"),
      (this._actionPointElement.hidden = !1);
  }
  hideActionPoint() {
    this._actionPointElement.hidden = !0;
  }
  clearHighlight() {
    var t, n;
    for (const r of this._highlightEntries)
      (t = r.highlightElement) == null || t.remove(),
        (n = r.tooltipElement) == null || n.remove();
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._glassPaneElement.style.pointerEvents = "none");
  }
  updateHighlight(t, n) {
    this._innerUpdateHighlight(t, n);
  }
  maskElements(t, n) {
    this._innerUpdateHighlight(t, { color: n });
  }
  _innerUpdateHighlight(t, n) {
    let r = n.color;
    if (
      (r || (r = t.length > 1 ? "#f6b26b7f" : "#6fa8dc7f"),
      !this._highlightIsUpToDate(t, n))
    ) {
      this.clearHighlight(),
        (this._highlightOptions = n),
        (this._glassPaneElement.style.pointerEvents = n.tooltipListItemSelected
          ? "initial"
          : "none");
      for (let i = 0; i < t.length; ++i) {
        const s = this._createHighlightElement();
        this._glassPaneShadow.appendChild(s);
        let o;
        if (n.tooltipList || n.tooltipText || n.tooltipFooter) {
          (o = this._injectedScript.document.createElement("x-pw-tooltip")),
            this._glassPaneShadow.appendChild(o),
            (o.style.top = "0"),
            (o.style.left = "0"),
            (o.style.display = "flex");
          let l = [];
          if (n.tooltipList) l = n.tooltipList;
          else if (n.tooltipText) {
            const a = t.length > 1 ? ` [${i + 1} of ${t.length}]` : "";
            l = [n.tooltipText + a];
          }
          for (let a = 0; a < l.length; a++) {
            const u =
              this._injectedScript.document.createElement("x-pw-tooltip-line");
            (u.textContent = l[a]),
              o.appendChild(u),
              n.tooltipListItemSelected &&
                (u.classList.add("selectable"),
                u.addEventListener("click", () => {
                  var c;
                  return (c = n.tooltipListItemSelected) == null
                    ? void 0
                    : c.call(n, a);
                }));
          }
          if (n.tooltipFooter) {
            const a = this._injectedScript.document.createElement(
              "x-pw-tooltip-footer",
            );
            (a.textContent = n.tooltipFooter), o.appendChild(a);
          }
        }
        this._highlightEntries.push({
          targetElement: t[i],
          tooltipElement: o,
          highlightElement: s,
        });
      }
      for (const i of this._highlightEntries) {
        if (
          ((i.box = i.targetElement.getBoundingClientRect()), !i.tooltipElement)
        )
          continue;
        const { anchorLeft: s, anchorTop: o } = this.tooltipPosition(
          i.box,
          i.tooltipElement,
        );
        (i.tooltipTop = o), (i.tooltipLeft = s);
      }
      for (const i of this._highlightEntries) {
        i.tooltipElement &&
          ((i.tooltipElement.style.top = i.tooltipTop + "px"),
          (i.tooltipElement.style.left = i.tooltipLeft + "px"));
        const s = i.box;
        (i.highlightElement.style.backgroundColor = r),
          (i.highlightElement.style.left = s.x + "px"),
          (i.highlightElement.style.top = s.y + "px"),
          (i.highlightElement.style.width = s.width + "px"),
          (i.highlightElement.style.height = s.height + "px"),
          (i.highlightElement.style.display = "block"),
          this._isUnderTest &&
            console.error(
              "Highlight box for test: " +
                JSON.stringify({
                  x: s.x,
                  y: s.y,
                  width: s.width,
                  height: s.height,
                }),
            );
      }
    }
  }
  firstBox() {
    var t;
    return (t = this._highlightEntries[0]) == null ? void 0 : t.box;
  }
  tooltipPosition(t, n) {
    const r = n.offsetWidth,
      i = n.offsetHeight,
      s = this._glassPaneElement.offsetWidth,
      o = this._glassPaneElement.offsetHeight;
    let l = t.left;
    l + r > s - 5 && (l = s - r - 5);
    let a = t.bottom + 5;
    return (
      a + i > o - 5 && (t.top > i + 5 ? (a = t.top - i - 5) : (a = o - 5 - i)),
      { anchorLeft: l, anchorTop: a }
    );
  }
  _highlightIsUpToDate(t, n) {
    var r, i;
    if (
      n.tooltipText !== this._highlightOptions.tooltipText ||
      n.tooltipListItemSelected !==
        this._highlightOptions.tooltipListItemSelected ||
      n.tooltipFooter !== this._highlightOptions.tooltipFooter ||
      ((r = n.tooltipList) == null ? void 0 : r.length) !==
        ((i = this._highlightOptions.tooltipList) == null ? void 0 : i.length)
    )
      return !1;
    if (n.tooltipList && this._highlightOptions.tooltipList) {
      for (let s = 0; s < n.tooltipList.length; s++)
        if (n.tooltipList[s] !== this._highlightOptions.tooltipList[s])
          return !1;
    }
    if (t.length !== this._highlightEntries.length) return !1;
    for (let s = 0; s < this._highlightEntries.length; ++s) {
      if (t[s] !== this._highlightEntries[s].targetElement) return !1;
      const o = this._highlightEntries[s].box;
      if (!o) return !1;
      const l = t[s].getBoundingClientRect();
      if (
        l.top !== o.top ||
        l.right !== o.right ||
        l.bottom !== o.bottom ||
        l.left !== o.left
      )
        return !1;
    }
    return !0;
  }
  _createHighlightElement() {
    return this._injectedScript.document.createElement("x-pw-highlight");
  }
  appendChild(t) {
    this._glassPaneShadow.appendChild(t);
  }
}
const Zw = new Set(["button", "checkbox", "combobox", "link", "textbox"]);
let cs;
function e1(e, t) {
  return n1(e, t).node;
}
function t1(e, t) {
  const n = cs == null ? void 0 : cs.elements.get(t);
  if (!n) throw new Error(`Internal error: element with id "${t}" not found`);
  return e.generateSelectorSimple(n);
}
function n1(e, t) {
  const n = (u) =>
      u.replace(/[\s\n]+/g, (c) =>
        c.includes(`
`)
          ? `
`
          : " ",
      ),
    r = [],
    i = new Map();
  let s = 0,
    o;
  const l = (u) => {
    if (u.nodeType === Node.TEXT_NODE) {
      r.push(u.nodeValue);
      return;
    }
    if (u.nodeType === Node.ELEMENT_NODE) {
      const c = u;
      if (
        c.nodeName === "SCRIPT" ||
        c.nodeName === "STYLE" ||
        c.nodeName === "NOSCRIPT"
      )
        return;
      if (e.utils.isElementVisible(c)) {
        const p = e.utils.getAriaRole(c);
        if (p && Zw.has(p)) {
          let f;
          (c.nodeName === "INPUT" || c.nodeName === "TEXTAREA") &&
            (f = c.value);
          const g = e.utils.getElementAccessibleName(c, !1),
            y = String(++s);
          i.set(y, c),
            r.push(Jc(e, p, g, y, { value: f })),
            c === t && (o = { tag: Jc(e, p, g, y), id: y });
          return;
        }
      }
      for (let p = c.firstChild; p; p = p.nextSibling) l(p);
    }
  };
  e.utils.beginAriaCaches();
  try {
    l(e.document.body);
  } finally {
    e.utils.endAriaCaches();
  }
  const a = { markup: n(r.join(" ")), elements: i };
  if (t && !o) throw new Error("Target element is not in the simple DOM");
  return (cs = a), { dom: a, node: o ? { dom: a, ...o } : void 0 };
}
function Jc(e, t, n, r, i) {
  const s = e.utils.escapeHTML(n),
    o = e.utils.escapeHTMLAttribute((i == null ? void 0 : i.value) || "");
  switch (t) {
    case "button":
      return `<button id="${r}">${s}</button>`;
    case "link":
      return `<a id="${r}">${s}</a>`;
    case "textbox":
      return `<input id="${r}" title="${s}" value="${o}"></input>`;
  }
  return `<div role=${t} id="${r}">${s}</div>`;
}
class Kp {
  constructor(t, n, r, i, s, o, l) {
    (this.onGlobalListenersRemoved = new Set()),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen =
        "data-testid"),
      (this.utils = {
        asLocator: Yt,
        beginAriaCaches: nu,
        cacheNormalizedWhitespaces: f0,
        elementText: Re,
        endAriaCaches: ru,
        escapeHTML: g0,
        escapeHTMLAttribute: m0,
        getAriaRole: be,
        getElementAccessibleDescription: Vc,
        getElementAccessibleName: Hs,
        isElementVisible: fn,
        isInsideScope: lo,
        normalizeWhiteSpace: We,
      }),
      (this.window = t),
      (this.document = t.document),
      (this.isUnderTest = n),
      (this._sdkLanguage = r),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen = i),
      (this._evaluator = new Tw(new Map())),
      (this._engines = new Map()),
      this._engines.set("xpath", zc),
      this._engines.set("xpath:light", zc),
      this._engines.set("_react", cw),
      this._engines.set("_vue", mw),
      this._engines.set("role", qc(!1)),
      this._engines.set("text", this._createTextEngine(!0, !1)),
      this._engines.set("text:light", this._createTextEngine(!1, !1)),
      this._engines.set("id", this._createAttributeEngine("id", !0)),
      this._engines.set("id:light", this._createAttributeEngine("id", !1)),
      this._engines.set(
        "data-testid",
        this._createAttributeEngine("data-testid", !0),
      ),
      this._engines.set(
        "data-testid:light",
        this._createAttributeEngine("data-testid", !1),
      ),
      this._engines.set(
        "data-test-id",
        this._createAttributeEngine("data-test-id", !0),
      ),
      this._engines.set(
        "data-test-id:light",
        this._createAttributeEngine("data-test-id", !1),
      ),
      this._engines.set(
        "data-test",
        this._createAttributeEngine("data-test", !0),
      ),
      this._engines.set(
        "data-test:light",
        this._createAttributeEngine("data-test", !1),
      ),
      this._engines.set("css", this._createCSSEngine()),
      this._engines.set("nth", { queryAll: () => [] }),
      this._engines.set("visible", this._createVisibleEngine()),
      this._engines.set("internal:control", this._createControlEngine()),
      this._engines.set("internal:has", this._createHasEngine()),
      this._engines.set("internal:has-not", this._createHasNotEngine()),
      this._engines.set("internal:and", { queryAll: () => [] }),
      this._engines.set("internal:or", { queryAll: () => [] }),
      this._engines.set("internal:chain", this._createInternalChainEngine()),
      this._engines.set("internal:label", this._createInternalLabelEngine()),
      this._engines.set("internal:text", this._createTextEngine(!0, !0)),
      this._engines.set(
        "internal:has-text",
        this._createInternalHasTextEngine(),
      ),
      this._engines.set(
        "internal:has-not-text",
        this._createInternalHasNotTextEngine(),
      ),
      this._engines.set("internal:attr", this._createNamedAttributeEngine()),
      this._engines.set("internal:testid", this._createNamedAttributeEngine()),
      this._engines.set("internal:role", qc(!0));
    for (const { name: a, engine: u } of l) this._engines.set(a, u);
    (this._stableRafCount = s),
      (this._browserName = o),
      Vy(o),
      this._setupGlobalListenersRemovalDetection(),
      this._setupHitTargetInterceptors(),
      n && (this.window.__injectedScript = this);
  }
  builtinSetTimeout(t, n) {
    var r;
    return (r = this.window.__pwClock) != null && r.builtin
      ? this.window.__pwClock.builtin.setTimeout(t, n)
      : setTimeout(t, n);
  }
  builtinRequestAnimationFrame(t) {
    var n;
    return (n = this.window.__pwClock) != null && n.builtin
      ? this.window.__pwClock.builtin.requestAnimationFrame(t)
      : requestAnimationFrame(t);
  }
  eval(t) {
    return this.window.eval(t);
  }
  testIdAttributeNameForStrictErrorAndConsoleCodegen() {
    return this._testIdAttributeNameForStrictErrorAndConsoleCodegen;
  }
  parseSelector(t) {
    const n = oo(t);
    return (
      R0(n, (r) => {
        if (!this._engines.has(r.name))
          throw this.createStacklessError(
            `Unknown engine "${r.name}" while parsing selector ${t}`,
          );
      }),
      n
    );
  }
  generateSelector(t, n) {
    return Qc(this, t, n);
  }
  generateSelectorSimple(t, n) {
    return Qc(this, t, {
      ...n,
      testIdAttributeName:
        this._testIdAttributeNameForStrictErrorAndConsoleCodegen,
    }).selector;
  }
  querySelector(t, n, r) {
    const i = this.querySelectorAll(t, n);
    if (r && i.length > 1) throw this.strictModeViolationError(t, i);
    return i[0];
  }
  _queryNth(t, n) {
    const r = [...t];
    let i = +n.body;
    return i === -1 && (i = r.length - 1), new Set(r.slice(i, i + 1));
  }
  _queryLayoutSelector(t, n, r) {
    const i = n.name,
      s = n.body,
      o = [],
      l = this.querySelectorAll(s.parsed, r);
    for (const a of t) {
      const u = zp(i, a, l, s.distance);
      u !== void 0 && o.push({ element: a, score: u });
    }
    return (
      o.sort((a, u) => a.score - u.score), new Set(o.map((a) => a.element))
    );
  }
  querySelectorAll(t, n) {
    if (t.capture !== void 0) {
      if (t.parts.some((i) => i.name === "nth"))
        throw this.createStacklessError(
          "Can't query n-th element in a request with the capture.",
        );
      const r = { parts: t.parts.slice(0, t.capture + 1) };
      if (t.capture < t.parts.length - 1) {
        const i = { parts: t.parts.slice(t.capture + 1) },
          s = { name: "internal:has", body: { parsed: i }, source: Sn(i) };
        r.parts.push(s);
      }
      return this.querySelectorAll(r, n);
    }
    if (!n.querySelectorAll)
      throw this.createStacklessError("Node is not queryable.");
    if (t.capture !== void 0)
      throw this.createStacklessError(
        "Internal error: there should not be a capture in the selector.",
      );
    if (
      n.nodeType === 11 &&
      t.parts.length === 1 &&
      t.parts[0].name === "css" &&
      t.parts[0].source === ":scope"
    )
      return [n];
    this._evaluator.begin();
    try {
      let r = new Set([n]);
      for (const i of t.parts)
        if (i.name === "nth") r = this._queryNth(r, i);
        else if (i.name === "internal:and") {
          const s = this.querySelectorAll(i.body.parsed, n);
          r = new Set(s.filter((o) => r.has(o)));
        } else if (i.name === "internal:or") {
          const s = this.querySelectorAll(i.body.parsed, n);
          r = new Set(Dp(new Set([...r, ...s])));
        } else if (Ew.includes(i.name)) r = this._queryLayoutSelector(r, i, n);
        else {
          const s = new Set();
          for (const o of r) {
            const l = this._queryEngineAll(i, o);
            for (const a of l) s.add(a);
          }
          r = s;
        }
      return [...r];
    } finally {
      this._evaluator.end();
    }
  }
  _queryEngineAll(t, n) {
    const r = this._engines.get(t.name).queryAll(n, t.body);
    for (const i of r)
      if (!("nodeName" in i))
        throw this.createStacklessError(
          `Expected a Node but got ${Object.prototype.toString.call(i)}`,
        );
    return r;
  }
  _createAttributeEngine(t, n) {
    const r = (i) => [
      {
        simples: [
          {
            selector: { css: `[${t}=${JSON.stringify(i)}]`, functions: [] },
            combinator: "",
          },
        ],
      },
    ];
    return {
      queryAll: (i, s) =>
        this._evaluator.query({ scope: i, pierceShadow: n }, r(s)),
    };
  }
  _createCSSEngine() {
    return {
      queryAll: (t, n) =>
        this._evaluator.query({ scope: t, pierceShadow: !0 }, n),
    };
  }
  _createTextEngine(t, n) {
    return {
      queryAll: (i, s) => {
        const { matcher: o, kind: l } = Bi(s, n),
          a = [];
        let u = null;
        const c = (f) => {
          if (l === "lax" && u && u.contains(f)) return !1;
          const g = ao(this._evaluator._cacheText, f, o);
          g === "none" && (u = f),
            (g === "self" ||
              (g === "selfAndChildren" && l === "strict" && !n)) &&
              a.push(f);
        };
        i.nodeType === Node.ELEMENT_NODE && c(i);
        const p = this._evaluator._queryCSS({ scope: i, pierceShadow: t }, "*");
        for (const f of p) c(f);
        return a;
      },
    };
  }
  _createInternalHasTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = Re(this._evaluator._cacheText, r),
          { matcher: s } = Bi(n, !0);
        return s(i) ? [r] : [];
      },
    };
  }
  _createInternalHasNotTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = Re(this._evaluator._cacheText, r),
          { matcher: s } = Bi(n, !0);
        return s(i) ? [] : [r];
      },
    };
  }
  _createInternalLabelEngine() {
    return {
      queryAll: (t, n) => {
        const { matcher: r } = Bi(n, !0);
        return this._evaluator
          ._queryCSS({ scope: t, pierceShadow: !0 }, "*")
          .filter((s) => Lp(this._evaluator._cacheText, s).some((o) => r(o)));
      },
    };
  }
  _createNamedAttributeEngine() {
    return {
      queryAll: (n, r) => {
        const i = mn(r, !0);
        if (i.name || i.attributes.length !== 1)
          throw new Error("Malformed attribute selector: " + r);
        const { name: s, value: o, caseSensitive: l } = i.attributes[0],
          a = l ? null : o.toLowerCase();
        let u;
        return (
          o instanceof RegExp
            ? (u = (p) => !!p.match(o))
            : l
              ? (u = (p) => p === o)
              : (u = (p) => p.toLowerCase().includes(a)),
          this._evaluator
            ._queryCSS({ scope: n, pierceShadow: !0 }, `[${s}]`)
            .filter((p) => u(p.getAttribute(s)))
        );
      },
    };
  }
  _createControlEngine() {
    return {
      queryAll(t, n) {
        if (n === "enter-frame") return [];
        if (n === "return-empty") return [];
        if (n === "component")
          return t.nodeType !== 1
            ? []
            : [t.childElementCount === 1 ? t.firstElementChild : t];
        throw new Error(
          `Internal error, unknown internal:control selector ${n}`,
        );
      },
    };
  }
  _createHasEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1 ? [] : this.querySelector(r.parsed, n, !1) ? [n] : [],
    };
  }
  _createHasNotEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1 ? [] : this.querySelector(r.parsed, n, !1) ? [] : [n],
    };
  }
  _createVisibleEngine() {
    return {
      queryAll: (n, r) => (n.nodeType !== 1 ? [] : fn(n) === !!r ? [n] : []),
    };
  }
  _createInternalChainEngine() {
    return { queryAll: (n, r) => this.querySelectorAll(r.parsed, n) };
  }
  extend(t, n) {
    const r = this.window.eval(`
    (() => {
      const module = {};
      ${t}
      return module.exports.default();
    })()`);
    return new r(this, n);
  }
  async viewportRatio(t) {
    return await new Promise((n) => {
      const r = new IntersectionObserver((i) => {
        n(i[0].intersectionRatio), r.disconnect();
      });
      r.observe(t), this.builtinRequestAnimationFrame(() => {});
    });
  }
  getElementBorderWidth(t) {
    if (
      t.nodeType !== Node.ELEMENT_NODE ||
      !t.ownerDocument ||
      !t.ownerDocument.defaultView
    )
      return { left: 0, top: 0 };
    const n = t.ownerDocument.defaultView.getComputedStyle(t);
    return {
      left: parseInt(n.borderLeftWidth || "", 10),
      top: parseInt(n.borderTopWidth || "", 10),
    };
  }
  describeIFrameStyle(t) {
    if (!t.ownerDocument || !t.ownerDocument.defaultView)
      return "error:notconnected";
    const n = t.ownerDocument.defaultView;
    for (let i = t; i; i = ke(i))
      if (n.getComputedStyle(i).transform !== "none") return "transformed";
    const r = n.getComputedStyle(t);
    return {
      left:
        parseInt(r.borderLeftWidth || "", 10) +
        parseInt(r.paddingLeft || "", 10),
      top:
        parseInt(r.borderTopWidth || "", 10) + parseInt(r.paddingTop || "", 10),
    };
  }
  retarget(t, n) {
    let r = t.nodeType === Node.ELEMENT_NODE ? t : t.parentElement;
    return r
      ? (n === "none" ||
          (!r.matches("input, textarea, select") &&
            !r.isContentEditable &&
            (n === "button-link"
              ? (r = r.closest("button, [role=button], a, [role=link]") || r)
              : (r =
                  r.closest(
                    "button, [role=button], [role=checkbox], [role=radio]",
                  ) || r)),
          n === "follow-label" &&
            (!r.matches(
              "a, input, textarea, button, select, [role=link], [role=button], [role=checkbox], [role=radio]",
            ) &&
              !r.isContentEditable &&
              (r = r.closest("label") || r),
            r.nodeName === "LABEL" && (r = r.control || r))),
        r)
      : null;
  }
  async checkElementStates(t, n) {
    if (n.includes("stable")) {
      const r = await this._checkElementIsStable(t);
      if (r === !1) return { missingState: "stable" };
      if (r === "error:notconnected") return r;
    }
    for (const r of n)
      if (r !== "stable") {
        const i = this.elementState(t, r);
        if (i === !1) return { missingState: r };
        if (i === "error:notconnected") return i;
      }
  }
  async _checkElementIsStable(t) {
    const n = Symbol("continuePolling");
    let r,
      i = 0,
      s = 0;
    const o = () => {
      const p = this.retarget(t, "no-follow-label");
      if (!p) return "error:notconnected";
      const f = performance.now();
      if (this._stableRafCount > 1 && f - s < 15) return n;
      s = f;
      const g = p.getBoundingClientRect(),
        y = { x: g.top, y: g.left, width: g.width, height: g.height };
      if (r) {
        if (
          !(
            y.x === r.x &&
            y.y === r.y &&
            y.width === r.width &&
            y.height === r.height
          )
        )
          return !1;
        if (++i >= this._stableRafCount) return !0;
      }
      return (r = y), n;
    };
    let l, a;
    const u = new Promise((p, f) => {
        (l = p), (a = f);
      }),
      c = () => {
        try {
          const p = o();
          p !== n ? l(p) : this.builtinRequestAnimationFrame(c);
        } catch (p) {
          a(p);
        }
      };
    return this.builtinRequestAnimationFrame(c), u;
  }
  elementState(t, n) {
    const r = this.retarget(
      t,
      ["stable", "visible", "hidden"].includes(n) ? "none" : "follow-label",
    );
    if (!r || !r.isConnected) return n === "hidden" ? !0 : "error:notconnected";
    if (n === "visible") return fn(r);
    if (n === "hidden") return !fn(r);
    const i = _p(r);
    if (n === "disabled") return i;
    if (n === "enabled") return !i;
    const s = !(
      ["INPUT", "TEXTAREA", "SELECT"].includes(r.nodeName) &&
      r.hasAttribute("readonly")
    );
    if (n === "editable") return !i && s;
    if (n === "checked" || n === "unchecked") {
      const o = n === "checked",
        l = yp(r, !1);
      if (l === "error")
        throw this.createStacklessError("Not a checkbox or radio button");
      return o === l;
    }
    throw this.createStacklessError(`Unexpected element state "${n}"`);
  }
  selectOptions(t, n) {
    const r = this.retarget(t, "follow-label");
    if (!r) return "error:notconnected";
    if (r.nodeName.toLowerCase() !== "select")
      throw this.createStacklessError("Element is not a <select> element");
    const i = r,
      s = [...i.options],
      o = [];
    let l = n.slice();
    for (let a = 0; a < s.length; a++) {
      const u = s[a],
        c = (p) => {
          if (p instanceof Node) return u === p;
          let f = !0;
          return (
            p.valueOrLabel !== void 0 &&
              (f =
                f &&
                (p.valueOrLabel === u.value || p.valueOrLabel === u.label)),
            p.value !== void 0 && (f = f && p.value === u.value),
            p.label !== void 0 && (f = f && p.label === u.label),
            p.index !== void 0 && (f = f && p.index === a),
            f
          );
        };
      if (l.some(c))
        if ((o.push(u), i.multiple)) l = l.filter((p) => !c(p));
        else {
          l = [];
          break;
        }
    }
    return l.length
      ? "error:optionsnotfound"
      : ((i.value = void 0),
        o.forEach((a) => (a.selected = !0)),
        i.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
        i.dispatchEvent(new Event("change", { bubbles: !0 })),
        o.map((a) => a.value));
  }
  fill(t, n) {
    const r = this.retarget(t, "follow-label");
    if (!r) return "error:notconnected";
    if (r.nodeName.toLowerCase() === "input") {
      const i = r,
        s = i.type.toLowerCase(),
        o = new Set([
          "color",
          "date",
          "time",
          "datetime-local",
          "month",
          "range",
          "week",
        ]);
      if (
        !new Set([
          "",
          "email",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "url",
        ]).has(s) &&
        !o.has(s)
      )
        throw this.createStacklessError(
          `Input of type "${s}" cannot be filled`,
        );
      if (s === "number" && ((n = n.trim()), isNaN(Number(n))))
        throw this.createStacklessError(
          "Cannot type text into input[type=number]",
        );
      if (o.has(s)) {
        if (((n = n.trim()), i.focus(), (i.value = n), i.value !== n))
          throw this.createStacklessError("Malformed value");
        return (
          r.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
          r.dispatchEvent(new Event("change", { bubbles: !0 })),
          "done"
        );
      }
    } else if (r.nodeName.toLowerCase() !== "textarea") {
      if (!r.isContentEditable)
        throw this.createStacklessError(
          "Element is not an <input>, <textarea> or [contenteditable] element",
        );
    }
    return this.selectText(r), "needsinput";
  }
  selectText(t) {
    const n = this.retarget(t, "follow-label");
    if (!n) return "error:notconnected";
    if (n.nodeName.toLowerCase() === "input") {
      const s = n;
      return s.select(), s.focus(), "done";
    }
    if (n.nodeName.toLowerCase() === "textarea") {
      const s = n;
      return (
        (s.selectionStart = 0),
        (s.selectionEnd = s.value.length),
        s.focus(),
        "done"
      );
    }
    const r = n.ownerDocument.createRange();
    r.selectNodeContents(n);
    const i = n.ownerDocument.defaultView.getSelection();
    return i && (i.removeAllRanges(), i.addRange(r)), n.focus(), "done";
  }
  _activelyFocused(t) {
    const n = t.getRootNode().activeElement,
      r = n === t && !!t.ownerDocument && t.ownerDocument.hasFocus();
    return { activeElement: n, isFocused: r };
  }
  focusNode(t, n) {
    if (!t.isConnected) return "error:notconnected";
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    const { activeElement: r, isFocused: i } = this._activelyFocused(t);
    if (
      (t.isContentEditable && !i && r && r.blur && r.blur(),
      t.focus(),
      t.focus(),
      n && !i && t.nodeName.toLowerCase() === "input")
    )
      try {
        t.setSelectionRange(0, 0);
      } catch {}
    return "done";
  }
  blurNode(t) {
    if (!t.isConnected) return "error:notconnected";
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    return t.blur(), "done";
  }
  setInputFiles(t, n) {
    if (t.nodeType !== Node.ELEMENT_NODE)
      return "Node is not of type HTMLElement";
    const r = t;
    if (r.nodeName !== "INPUT") return "Not an <input> element";
    const i = r;
    if ((i.getAttribute("type") || "").toLowerCase() !== "file")
      return "Not an input[type=file] element";
    const o = n.map((a) => {
        const u = Uint8Array.from(atob(a.buffer), (c) => c.charCodeAt(0));
        return new File([u], a.name, {
          type: a.mimeType,
          lastModified: a.lastModifiedMs,
        });
      }),
      l = new DataTransfer();
    for (const a of o) l.items.add(a);
    (i.files = l.files),
      i.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
      i.dispatchEvent(new Event("change", { bubbles: !0 }));
  }
  expectHitTarget(t, n) {
    const r = [];
    let i = n;
    for (; i; ) {
      const c = sp(i);
      if (!c || (r.push(c), c.nodeType === 9)) break;
      i = c.host;
    }
    let s;
    for (let c = r.length - 1; c >= 0; c--) {
      const p = r[c],
        f = p.elementsFromPoint(t.x, t.y),
        g = p.elementFromPoint(t.x, t.y);
      if (g && f[0] && ke(g) === f[0]) {
        const w = this.window.getComputedStyle(g);
        (w == null ? void 0 : w.display) === "contents" && f.unshift(g);
      }
      f[0] && f[0].shadowRoot === p && f[1] === g && f.shift();
      const y = f[0];
      if (!y || ((s = y), c && y !== r[c - 1].host)) break;
    }
    const o = [];
    for (; s && s !== n; ) o.push(s), (s = ke(s));
    if (s === n) return "done";
    const l = this.previewNode(o[0] || this.document.documentElement);
    let a,
      u = n;
    for (; u; ) {
      const c = o.indexOf(u);
      if (c !== -1) {
        c > 1 && (a = this.previewNode(o[c - 1]));
        break;
      }
      u = ke(u);
    }
    return a
      ? { hitTargetDescription: `${l} from ${a} subtree` }
      : { hitTargetDescription: l };
  }
  setupHitTargetInterceptor(t, n, r, i) {
    const s = this.retarget(t, "button-link");
    if (!s || !s.isConnected) return "error:notconnected";
    if (r) {
      const c = this.expectHitTarget(r, s);
      if (c !== "done") return c.hitTargetDescription;
    }
    if (n === "drag") return { stop: () => "done" };
    const o = { hover: Gp, tap: Yp, mouse: Jp }[n];
    let l;
    const a = (c) => {
        if (!o.has(c.type) || !c.isTrusted) return;
        const p =
          this.window.TouchEvent && c instanceof this.window.TouchEvent
            ? c.touches[0]
            : c;
        l === void 0 &&
          p &&
          (l = this.expectHitTarget({ x: p.clientX, y: p.clientY }, s)),
          (i || (l !== "done" && l !== void 0)) &&
            (c.preventDefault(),
            c.stopPropagation(),
            c.stopImmediatePropagation());
      },
      u = () => (
        this._hitTargetInterceptor === a &&
          (this._hitTargetInterceptor = void 0),
        l || "done"
      );
    return (this._hitTargetInterceptor = a), { stop: u };
  }
  dispatchEvent(t, n, r) {
    let i;
    switch (
      ((r = { bubbles: !0, cancelable: !0, composed: !0, ...r }), s1.get(n))
    ) {
      case "mouse":
        i = new MouseEvent(n, r);
        break;
      case "keyboard":
        i = new KeyboardEvent(n, r);
        break;
      case "touch":
        i = new TouchEvent(n, r);
        break;
      case "pointer":
        i = new PointerEvent(n, r);
        break;
      case "focus":
        i = new FocusEvent(n, r);
        break;
      case "drag":
        i = new DragEvent(n, r);
        break;
      case "wheel":
        i = new WheelEvent(n, r);
        break;
      case "deviceorientation":
        try {
          i = new DeviceOrientationEvent(n, r);
        } catch {
          const {
            bubbles: s,
            cancelable: o,
            alpha: l,
            beta: a,
            gamma: u,
            absolute: c,
          } = r;
          (i = this.document.createEvent("DeviceOrientationEvent")),
            i.initDeviceOrientationEvent(n, s, o, l, a, u, c);
        }
        break;
      case "devicemotion":
        try {
          i = new DeviceMotionEvent(n, r);
        } catch {
          const {
            bubbles: s,
            cancelable: o,
            acceleration: l,
            accelerationIncludingGravity: a,
            rotationRate: u,
            interval: c,
          } = r;
          (i = this.document.createEvent("DeviceMotionEvent")),
            i.initDeviceMotionEvent(n, s, o, l, a, u, c);
        }
        break;
      default:
        i = new Event(n, r);
        break;
    }
    t.dispatchEvent(i);
  }
  previewNode(t) {
    if (t.nodeType === Node.TEXT_NODE) return Ui(`#text=${t.nodeValue || ""}`);
    if (t.nodeType !== Node.ELEMENT_NODE)
      return Ui(`<${t.nodeName.toLowerCase()} />`);
    const n = t,
      r = [];
    for (let a = 0; a < n.attributes.length; a++) {
      const { name: u, value: c } = n.attributes[a];
      u !== "style" &&
        (!c && i1.has(u) ? r.push(` ${u}`) : r.push(` ${u}="${c}"`));
    }
    r.sort((a, u) => a.length - u.length);
    const i = Cc(r.join(""), 500);
    if (r1.has(n.nodeName)) return Ui(`<${n.nodeName.toLowerCase()}${i}/>`);
    const s = n.childNodes;
    let o = !1;
    if (s.length <= 5) {
      o = !0;
      for (let a = 0; a < s.length; a++)
        o = o && s[a].nodeType === Node.TEXT_NODE;
    }
    const l = o ? n.textContent || "" : s.length ? "…" : "";
    return Ui(
      `<${n.nodeName.toLowerCase()}${i}>${Cc(l, 50)}</${n.nodeName.toLowerCase()}>`,
    );
  }
  strictModeViolationError(t, n) {
    const r = n
        .slice(0, 10)
        .map((s) => ({
          preview: this.previewNode(s),
          selector: this.generateSelectorSimple(s),
        })),
      i = r.map(
        (s, o) => `
    ${o + 1}) ${s.preview} aka ${Yt(this._sdkLanguage, s.selector)}`,
      );
    return (
      r.length < n.length &&
        i.push(`
    ...`),
      this
        .createStacklessError(`strict mode violation: ${Yt(this._sdkLanguage, Sn(t))} resolved to ${n.length} elements:${i.join("")}
`)
    );
  }
  createStacklessError(t) {
    if (this._browserName === "firefox") {
      const r = new Error("Error: " + t);
      return (r.stack = ""), r;
    }
    const n = new Error(t);
    return delete n.stack, n;
  }
  createHighlight() {
    return new Bo(this);
  }
  maskSelectors(t, n) {
    this._highlight && this.hideHighlight(),
      (this._highlight = new Bo(this)),
      this._highlight.install();
    const r = [];
    for (const i of t)
      r.push(this.querySelectorAll(i, this.document.documentElement));
    this._highlight.maskElements(r.flat(), n);
  }
  highlight(t) {
    this._highlight ||
      ((this._highlight = new Bo(this)), this._highlight.install()),
      this._highlight.runHighlightOnRaf(t);
  }
  hideHighlight() {
    this._highlight && (this._highlight.uninstall(), delete this._highlight);
  }
  markTargetElements(t, n) {
    const r = new CustomEvent("__playwright_target__", {
      bubbles: !0,
      cancelable: !0,
      detail: n,
      composed: !0,
    });
    for (const i of t) i.dispatchEvent(r);
  }
  _setupGlobalListenersRemovalDetection() {
    const t = "__playwright_global_listeners_check__";
    let n = !1;
    const r = () => (n = !0);
    this.window.addEventListener(t, r),
      new MutationObserver((i) => {
        if (
          i.some((o) =>
            Array.from(o.addedNodes).includes(this.document.documentElement),
          ) &&
          ((n = !1), this.window.dispatchEvent(new CustomEvent(t)), !n)
        ) {
          this.window.addEventListener(t, r);
          for (const o of this.onGlobalListenersRemoved) o();
        }
      }).observe(this.document, { childList: !0 });
  }
  _setupHitTargetInterceptors() {
    const t = (r) => {
        var i;
        return (i = this._hitTargetInterceptor) == null
          ? void 0
          : i.call(this, r);
      },
      n = () => {
        for (const r of o1)
          this.window.addEventListener(r, t, { capture: !0, passive: !1 });
      };
    n(), this.onGlobalListenersRemoved.add(n);
  }
  async expect(t, n, r) {
    return n.expression === "to.have.count" || n.expression.endsWith(".array")
      ? this.expectArray(r, n)
      : t
        ? await this.expectSingleElement(t, n)
        : !n.isNot && n.expression === "to.be.hidden"
          ? { matches: !0 }
          : n.isNot && n.expression === "to.be.visible"
            ? { matches: !1 }
            : !n.isNot && n.expression === "to.be.detached"
              ? { matches: !0 }
              : n.isNot && n.expression === "to.be.attached"
                ? { matches: !1 }
                : n.isNot && n.expression === "to.be.in.viewport"
                  ? { matches: !1 }
                  : { matches: n.isNot, missingReceived: !0 };
  }
  async expectSingleElement(t, n) {
    var i;
    const r = n.expression;
    {
      let s;
      if (
        (r === "to.have.attribute"
          ? (s = t.hasAttribute(n.expressionArg))
          : r === "to.be.checked"
            ? (s = this.elementState(t, "checked"))
            : r === "to.be.unchecked"
              ? (s = this.elementState(t, "unchecked"))
              : r === "to.be.disabled"
                ? (s = this.elementState(t, "disabled"))
                : r === "to.be.editable"
                  ? (s = this.elementState(t, "editable"))
                  : r === "to.be.readonly"
                    ? (s = !this.elementState(t, "editable"))
                    : r === "to.be.empty"
                      ? t.nodeName === "INPUT" || t.nodeName === "TEXTAREA"
                        ? (s = !t.value)
                        : (s = !((i = t.textContent) != null && i.trim()))
                      : r === "to.be.enabled"
                        ? (s = this.elementState(t, "enabled"))
                        : r === "to.be.focused"
                          ? (s = this._activelyFocused(t).isFocused)
                          : r === "to.be.hidden"
                            ? (s = this.elementState(t, "hidden"))
                            : r === "to.be.visible"
                              ? (s = this.elementState(t, "visible"))
                              : r === "to.be.attached"
                                ? (s = !0)
                                : r === "to.be.detached" && (s = !1),
        s !== void 0)
      ) {
        if (s === "error:notcheckbox")
          throw this.createStacklessError("Element is not a checkbox");
        if (s === "error:notconnected")
          throw this.createStacklessError("Element is not connected");
        return { received: s, matches: s };
      }
    }
    if (r === "to.have.property") {
      let s = t;
      const o = n.expressionArg.split(".");
      for (let u = 0; u < o.length - 1; u++) {
        if (typeof s != "object" || !(o[u] in s))
          return { received: void 0, matches: !1 };
        s = s[o[u]];
      }
      const l = s[o[o.length - 1]],
        a = Gl(l, n.expectedValue);
      return { received: l, matches: a };
    }
    if (r === "to.be.in.viewport") {
      const s = await this.viewportRatio(t);
      return {
        received: `viewport ratio ${s}`,
        matches: s > 0 && s > (n.expectedNumber ?? 0) - 1e-9,
      };
    }
    if (r === "to.have.values") {
      if (
        ((t = this.retarget(t, "follow-label")),
        t.nodeName !== "SELECT" || !t.multiple)
      )
        throw this.createStacklessError(
          "Not a select element with a multiple attribute",
        );
      const s = [...t.selectedOptions].map((o) => o.value);
      return s.length !== n.expectedText.length
        ? { received: s, matches: !1 }
        : {
            received: s,
            matches: s
              .map((o, l) => new Vo(n.expectedText[l]).matches(o))
              .every(Boolean),
          };
    }
    {
      let s;
      if (r === "to.have.attribute.value") {
        const o = t.getAttribute(n.expressionArg);
        if (o === null) return { received: null, matches: !1 };
        s = o;
      } else if (r === "to.have.class") s = t.classList.toString();
      else if (r === "to.have.css")
        s = this.window.getComputedStyle(t).getPropertyValue(n.expressionArg);
      else if (r === "to.have.id") s = t.id;
      else if (r === "to.have.text")
        s = n.useInnerText ? t.innerText : Re(new Map(), t).full;
      else if (r === "to.have.accessible.name") s = Hs(t, !1);
      else if (r === "to.have.accessible.description") s = Vc(t, !1);
      else if (r === "to.have.role") s = be(t) || "";
      else if (r === "to.have.title") s = this.document.title;
      else if (r === "to.have.url") s = this.document.location.href;
      else if (r === "to.have.value") {
        if (
          ((t = this.retarget(t, "follow-label")),
          t.nodeName !== "INPUT" &&
            t.nodeName !== "TEXTAREA" &&
            t.nodeName !== "SELECT")
        )
          throw this.createStacklessError("Not an input element");
        s = t.value;
      }
      if (s !== void 0 && n.expectedText) {
        const o = new Vo(n.expectedText[0]);
        return { received: s, matches: o.matches(s) };
      }
    }
    throw this.createStacklessError("Unknown expect matcher: " + r);
  }
  expectArray(t, n) {
    const r = n.expression;
    if (r === "to.have.count") {
      const s = t.length,
        o = s === n.expectedNumber;
      return { received: s, matches: o };
    }
    let i;
    if (
      (r === "to.have.text.array" || r === "to.contain.text.array"
        ? (i = t.map((s) =>
            n.useInnerText ? s.innerText : Re(new Map(), s).full,
          ))
        : r === "to.have.class.array" &&
          (i = t.map((s) => s.classList.toString())),
      i && n.expectedText)
    ) {
      const s = r !== "to.contain.text.array";
      if (!(i.length === n.expectedText.length || !s))
        return { received: i, matches: !1 };
      const l = n.expectedText.map((c) => new Vo(c));
      let a = 0,
        u = 0;
      for (; a < l.length && u < i.length; ) l[a].matches(i[u]) && ++a, ++u;
      return { received: i, matches: a === l.length };
    }
    throw this.createStacklessError("Unknown expect matcher: " + r);
  }
  generateSimpleDomNode(t) {
    const n = this.querySelector(
      this.parseSelector(t),
      this.document.documentElement,
      !0,
    );
    if (n) return e1(this, n);
  }
  selectorForSimpleDomNodeId(t) {
    return t1(this, t);
  }
}
const r1 = new Set([
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "MENUITEM",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR",
  ]),
  i1 = new Set(["checked", "selected", "disabled", "readonly", "multiple"]);
function Ui(e) {
  return e.replace(/\n/g, "↵").replace(/\t/g, "⇆");
}
const s1 = new Map([
    ["auxclick", "mouse"],
    ["click", "mouse"],
    ["dblclick", "mouse"],
    ["mousedown", "mouse"],
    ["mouseeenter", "mouse"],
    ["mouseleave", "mouse"],
    ["mousemove", "mouse"],
    ["mouseout", "mouse"],
    ["mouseover", "mouse"],
    ["mouseup", "mouse"],
    ["mouseleave", "mouse"],
    ["mousewheel", "mouse"],
    ["keydown", "keyboard"],
    ["keyup", "keyboard"],
    ["keypress", "keyboard"],
    ["textInput", "keyboard"],
    ["touchstart", "touch"],
    ["touchmove", "touch"],
    ["touchend", "touch"],
    ["touchcancel", "touch"],
    ["pointerover", "pointer"],
    ["pointerout", "pointer"],
    ["pointerenter", "pointer"],
    ["pointerleave", "pointer"],
    ["pointerdown", "pointer"],
    ["pointerup", "pointer"],
    ["pointermove", "pointer"],
    ["pointercancel", "pointer"],
    ["gotpointercapture", "pointer"],
    ["lostpointercapture", "pointer"],
    ["focus", "focus"],
    ["blur", "focus"],
    ["drag", "drag"],
    ["dragstart", "drag"],
    ["dragend", "drag"],
    ["dragover", "drag"],
    ["dragenter", "drag"],
    ["dragleave", "drag"],
    ["dragexit", "drag"],
    ["drop", "drag"],
    ["wheel", "wheel"],
    ["deviceorientation", "deviceorientation"],
    ["deviceorientationabsolute", "deviceorientation"],
    ["devicemotion", "devicemotion"],
  ]),
  Gp = new Set(["mousemove"]),
  Yp = new Set([
    "pointerdown",
    "pointerup",
    "touchstart",
    "touchend",
    "touchcancel",
  ]),
  Jp = new Set([
    "mousedown",
    "mouseup",
    "pointerdown",
    "pointerup",
    "click",
    "auxclick",
    "dblclick",
    "contextmenu",
  ]),
  o1 = new Set([...Gp, ...Yp, ...Jp]);
function l1(e) {
  if (((e = e.substring(1, e.length - 1)), !e.includes("\\"))) return e;
  const t = [];
  let n = 0;
  for (; n < e.length; )
    e[n] === "\\" && n + 1 < e.length && n++, t.push(e[n++]);
  return t.join("");
}
function Bi(e, t) {
  if (e[0] === "/" && e.lastIndexOf("/") > 0) {
    const i = e.lastIndexOf("/"),
      s = new RegExp(e.substring(1, i), e.substring(i + 1));
    return { matcher: (o) => s.test(o.full), kind: "regex" };
  }
  const n = t ? JSON.parse.bind(JSON) : l1;
  let r = !1;
  return (
    e.length > 1 && e[0] === '"' && e[e.length - 1] === '"'
      ? ((e = n(e)), (r = !0))
      : t &&
          e.length > 1 &&
          e[0] === '"' &&
          e[e.length - 2] === '"' &&
          e[e.length - 1] === "i"
        ? ((e = n(e.substring(0, e.length - 1))), (r = !1))
        : t &&
            e.length > 1 &&
            e[0] === '"' &&
            e[e.length - 2] === '"' &&
            e[e.length - 1] === "s"
          ? ((e = n(e.substring(0, e.length - 1))), (r = !0))
          : e.length > 1 &&
            e[0] === "'" &&
            e[e.length - 1] === "'" &&
            ((e = n(e)), (r = !0)),
    (e = We(e)),
    r
      ? t
        ? { kind: "strict", matcher: (s) => s.normalized === e }
        : {
            matcher: (s) =>
              !e && !s.immediate.length
                ? !0
                : s.immediate.some((o) => We(o) === e),
            kind: "strict",
          }
      : ((e = e.toLowerCase()),
        { kind: "lax", matcher: (i) => i.normalized.toLowerCase().includes(e) })
  );
}
class Vo {
  constructor(t) {
    if (
      ((this._normalizeWhiteSpace = t.normalizeWhiteSpace),
      (this._ignoreCase = t.ignoreCase),
      (this._string = t.matchSubstring ? void 0 : this.normalize(t.string)),
      (this._substring = t.matchSubstring ? this.normalize(t.string) : void 0),
      t.regexSource)
    ) {
      const n = new Set((t.regexFlags || "").split(""));
      t.ignoreCase === !1 && n.delete("i"),
        t.ignoreCase === !0 && n.add("i"),
        (this._regex = new RegExp(t.regexSource, [...n].join("")));
    }
  }
  matches(t) {
    return (
      this._regex || (t = this.normalize(t)),
      this._string !== void 0
        ? t === this._string
        : this._substring !== void 0
          ? t.includes(this._substring)
          : this._regex
            ? !!this._regex.test(t)
            : !1
    );
  }
  normalize(t) {
    return (
      t &&
      (this._normalizeWhiteSpace && (t = We(t)),
      this._ignoreCase && (t = t.toLocaleLowerCase()),
      t)
    );
  }
}
function Gl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    if (Array.isArray(e)) {
      if (e.length !== t.length) return !1;
      for (let r = 0; r < e.length; ++r) if (!Gl(e[r], t[r])) return !1;
      return !0;
    }
    if (e instanceof RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; ++r) if (!t.hasOwnProperty(n[r])) return !1;
    for (const r of n) if (!Gl(e[r], t[r])) return !1;
    return !0;
  }
  return typeof e == "number" && typeof t == "number"
    ? isNaN(e) && isNaN(t)
    : !1;
}
const a1 = {
  tagName: "svg",
  children: [
    {
      tagName: "defs",
      children: [
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-gripper",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-circle-large-filled",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-inspect",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-whole-word",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0 11H1V13H15V11H16V14H15H1H0V11Z",
              },
            },
            {
              tagName: "path",
              attrs: {
                d: "M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z",
              },
            },
            {
              tagName: "path",
              attrs: {
                d: "M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-eye",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-symbol-constant",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M4 6h8v1H4V6zm8 3H4v1h8V9z",
              },
            },
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-check",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-close",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-pass",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z",
              },
            },
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z",
              },
            },
          ],
        },
      ],
    },
  ],
};
class Zc {
  cursor() {
    return "default";
  }
}
class Wo {
  constructor(t, n) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null),
      (this._recorder = t),
      (this._assertVisibility = n);
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null);
  }
  onClick(t) {
    var n;
    X(t),
      t.button === 0 &&
        (n = this._hoveredModel) != null &&
        n.selector &&
        this._commit(this._hoveredModel.selector);
  }
  onContextMenu(t) {
    if (
      this._hoveredModel &&
      !this._hoveredModel.tooltipListItemSelected &&
      this._hoveredSelectors &&
      this._hoveredSelectors.length > 1
    ) {
      X(t);
      const n = this._hoveredSelectors;
      (this._hoveredModel.tooltipFooter = void 0),
        (this._hoveredModel.tooltipList = n.map((r) =>
          this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            r,
          ),
        )),
        (this._hoveredModel.tooltipListItemSelected = (r) => {
          r === void 0 ? this._reset(!0) : this._commit(n[r]);
        }),
        this._recorder.updateHighlight(this._hoveredModel, !0);
    }
  }
  onPointerDown(t) {
    X(t);
  }
  onPointerUp(t) {
    X(t);
  }
  onMouseDown(t) {
    X(t);
  }
  onMouseUp(t) {
    X(t);
  }
  onMouseMove(t) {
    var s;
    X(t);
    let n = this._recorder.deepEventTarget(t);
    if ((n.isConnected || (n = null), this._hoveredElement === n)) return;
    this._hoveredElement = n;
    let r = null,
      i = [];
    if (this._hoveredElement) {
      const o = this._recorder.injectedScript.generateSelector(
        this._hoveredElement,
        {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
          multiple: !1,
        },
      );
      (i = o.selectors),
        (r = {
          selector: o.selector,
          elements: o.elements,
          tooltipText: this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            o.selector,
          ),
          tooltipFooter:
            i.length > 1
              ? "Click to select, right-click for more options"
              : void 0,
          color: this._assertVisibility ? "#8acae480" : void 0,
        });
    }
    ((s = this._hoveredModel) == null ? void 0 : s.selector) !==
      (r == null ? void 0 : r.selector) &&
      ((this._hoveredModel = r),
      (this._hoveredSelectors = i),
      this._recorder.updateHighlight(r, !0));
  }
  onMouseEnter(t) {
    X(t);
  }
  onMouseLeave(t) {
    X(t);
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      this._reset(!0);
  }
  onKeyDown(t) {
    var n;
    X(t),
      t.key === "Escape" &&
        ((n = this._hoveredModel) != null && n.tooltipListItemSelected
          ? this._reset(!0)
          : this._assertVisibility && this._recorder.setMode("recording"));
  }
  onKeyUp(t) {
    X(t);
  }
  onScroll(t) {
    this._reset(!1);
  }
  _commit(t) {
    var n;
    this._assertVisibility
      ? (this._recorder.recordAction({
          name: "assertVisible",
          selector: t,
          signals: [],
        }),
        this._recorder.setMode("recording"),
        (n = this._recorder.overlay) == null ||
          n.flashToolSucceeded("assertingVisibility"))
      : this._recorder.setSelector(t);
  }
  _reset(t) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._hoveredSelectors = null),
      this._recorder.updateHighlight(null, t);
  }
}
class u1 {
  constructor(t) {
    (this._performingAction = !1),
      (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1),
      (this._recorder = t);
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1);
  }
  onClick(t) {
    if (
      rd(this._hoveredElement) ||
      (t.button === 2 && t.type === "auxclick") ||
      this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel)
    )
      return;
    const n = qo(this._recorder.deepEventTarget(t));
    if (n) {
      this._performAction({
        name: n.checked ? "check" : "uncheck",
        selector: this._hoveredModel.selector,
        signals: [],
      });
      return;
    }
    this._performAction({
      name: "click",
      selector: this._hoveredModel.selector,
      position: nd(t),
      signals: [],
      button: p1(t),
      modifiers: td(t),
      clickCount: t.detail,
    });
  }
  onContextMenu(t) {
    this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel) ||
      this._performAction({
        name: "click",
        selector: this._hoveredModel.selector,
        position: nd(t),
        signals: [],
        button: "right",
        modifiers: 0,
        clickCount: 0,
      });
  }
  onPointerDown(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingAction || X(t);
  }
  onPointerUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingAction || X(t);
  }
  onMouseDown(t) {
    this._shouldIgnoreMouseEvent(t) ||
      (this._performingAction || X(t),
      (this._activeModel = this._hoveredModel));
  }
  onMouseUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingAction || X(t);
  }
  onMouseMove(t) {
    const n = this._recorder.deepEventTarget(t);
    this._hoveredElement !== n &&
      ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  onMouseLeave(t) {
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      ((this._hoveredElement = null), this._updateModelForHoveredElement());
  }
  onFocus(t) {
    this._onFocus(!0);
  }
  onInput(t) {
    const n = this._recorder.deepEventTarget(t);
    if (n.nodeName === "INPUT" && n.type.toLowerCase() === "file") {
      this._recorder.recordAction({
        name: "setInputFiles",
        selector: this._activeModel.selector,
        signals: [],
        files: [...(n.files || [])].map((r) => r.name),
      });
      return;
    }
    if (rd(n)) {
      this._recorder.recordAction({
        name: "fill",
        selector: this._hoveredModel.selector,
        signals: [],
        text: n.value,
      });
      return;
    }
    if (["INPUT", "TEXTAREA"].includes(n.nodeName) || n.isContentEditable) {
      if (
        (n.nodeName === "INPUT" &&
          ["checkbox", "radio"].includes(n.type.toLowerCase())) ||
        this._consumedDueWrongTarget(t)
      )
        return;
      this._recorder.recordAction({
        name: "fill",
        selector: this._activeModel.selector,
        signals: [],
        text: n.isContentEditable ? n.innerText : n.value,
      });
    }
    if (n.nodeName === "SELECT") {
      const r = n;
      if (this._actionInProgress(t)) return;
      this._performAction({
        name: "select",
        selector: this._activeModel.selector,
        options: [...r.selectedOptions].map((i) => i.value),
        signals: [],
      });
    }
  }
  onKeyDown(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (this._actionInProgress(t)) {
        this._expectProgrammaticKeyUp = !0;
        return;
      }
      if (!this._consumedDueWrongTarget(t)) {
        if (t.key === " ") {
          const n = qo(this._recorder.deepEventTarget(t));
          if (n) {
            this._performAction({
              name: n.checked ? "uncheck" : "check",
              selector: this._activeModel.selector,
              signals: [],
            });
            return;
          }
        }
        this._performAction({
          name: "press",
          selector: this._activeModel.selector,
          signals: [],
          key: t.key,
          modifiers: td(t),
        });
      }
    }
  }
  onKeyUp(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (!this._expectProgrammaticKeyUp) {
        X(t);
        return;
      }
      this._expectProgrammaticKeyUp = !1;
    }
  }
  onScroll(t) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      this._recorder.updateHighlight(null, !1);
  }
  _onFocus(t) {
    const n = h1(this._recorder.document);
    if (t && n === this._recorder.document.body) return;
    const r = n
      ? this._recorder.injectedScript.generateSelector(n, {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
        })
      : null;
    (this._activeModel = r && r.selector ? r : null),
      t && (this._hoveredElement = n),
      this._updateModelForHoveredElement();
  }
  _shouldIgnoreMouseEvent(t) {
    const n = this._recorder.deepEventTarget(t),
      r = n.nodeName;
    return !!(
      r === "SELECT" ||
      r === "OPTION" ||
      (r === "INPUT" && ["date", "range"].includes(n.type))
    );
  }
  _actionInProgress(t) {
    return this._performingAction ? !0 : (X(t), !1);
  }
  _consumedDueToNoModel(t, n) {
    return n ? !1 : (X(t), !0);
  }
  _consumedDueWrongTarget(t) {
    return this._activeModel &&
      this._activeModel.elements[0] === this._recorder.deepEventTarget(t)
      ? !1
      : (X(t), !0);
  }
  _performAction(t) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._activeModel = null),
      this._recorder.updateHighlight(null, !1),
      (this._performingAction = !0),
      this._recorder.performAction(t).then(() => {
        (this._performingAction = !1),
          this._onFocus(!1),
          this._recorder.injectedScript.isUnderTest &&
            console.error(
              "Action performed for test: " +
                JSON.stringify({
                  hovered: this._hoveredModel
                    ? this._hoveredModel.selector
                    : null,
                  active: this._activeModel ? this._activeModel.selector : null,
                }),
            );
      });
  }
  _shouldGenerateKeyPressFor(t) {
    if (
      (t.key === "Enter" &&
        (this._recorder.deepEventTarget(t).nodeName === "TEXTAREA" ||
          this._recorder.deepEventTarget(t).isContentEditable)) ||
      ["Backspace", "Delete", "AltGraph"].includes(t.key) ||
      (t.key === "@" && t.code === "KeyL")
    )
      return !1;
    if (navigator.platform.includes("Mac")) {
      if (t.key === "v" && t.metaKey) return !1;
    } else if (
      (t.key === "v" && t.ctrlKey) ||
      (t.key === "Insert" && t.shiftKey)
    )
      return !1;
    if (["Shift", "Control", "Meta", "Alt", "Process"].includes(t.key))
      return !1;
    const n = t.ctrlKey || t.altKey || t.metaKey;
    return t.key.length === 1 && !n
      ? !!qo(this._recorder.deepEventTarget(t))
      : !0;
  }
  _updateModelForHoveredElement() {
    if (!this._hoveredElement || !this._hoveredElement.isConnected) {
      (this._hoveredModel = null),
        (this._hoveredElement = null),
        this._recorder.updateHighlight(null, !0);
      return;
    }
    const { selector: t, elements: n } =
      this._recorder.injectedScript.generateSelector(this._hoveredElement, {
        testIdAttributeName: this._recorder.state.testIdAttributeName,
      });
    (this._hoveredModel && this._hoveredModel.selector === t) ||
      ((this._hoveredModel = t
        ? { selector: t, elements: n, color: "#dc6f6f7f" }
        : null),
      this._recorder.updateHighlight(this._hoveredModel, !0));
  }
}
class ed {
  constructor(t, n) {
    (this._hoverHighlight = null),
      (this._action = null),
      (this._textCache = new Map()),
      (this._recorder = t),
      (this._kind = n),
      (this._dialog = new f1(t));
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._dialog.close(), (this._hoverHighlight = null);
  }
  onClick(t) {
    X(t),
      this._kind === "value"
        ? this._commitAssertValue()
        : this._dialog.isShowing() || this._showDialog();
  }
  onMouseDown(t) {
    const n = this._recorder.deepEventTarget(t);
    this._elementHasValue(n) && t.preventDefault();
  }
  onPointerUp(t) {
    var r;
    const n = (r = this._hoverHighlight) == null ? void 0 : r.elements[0];
    this._kind === "value" &&
      n &&
      (n.nodeName === "INPUT" || n.nodeName === "SELECT") &&
      n.disabled &&
      this._commitAssertValue();
  }
  onMouseMove(t) {
    var r;
    if (this._dialog.isShowing()) return;
    const n = this._recorder.deepEventTarget(t);
    ((r = this._hoverHighlight) == null ? void 0 : r.elements[0]) !== n &&
      (this._kind === "text"
        ? (this._hoverHighlight =
            this._recorder.injectedScript.utils.elementText(this._textCache, n)
              .full
              ? { elements: [n], selector: "" }
              : null)
        : (this._hoverHighlight = this._elementHasValue(n)
            ? this._recorder.injectedScript.generateSelector(n, {
                testIdAttributeName: this._recorder.state.testIdAttributeName,
              })
            : null),
      this._hoverHighlight && (this._hoverHighlight.color = "#8acae480"),
      this._recorder.updateHighlight(this._hoverHighlight, !0));
  }
  onKeyDown(t) {
    t.key === "Escape" && this._recorder.setMode("recording"), X(t);
  }
  onScroll(t) {
    this._recorder.updateHighlight(this._hoverHighlight, !1);
  }
  _elementHasValue(t) {
    return (
      t.nodeName === "TEXTAREA" ||
      t.nodeName === "SELECT" ||
      (t.nodeName === "INPUT" &&
        !["button", "image", "reset", "submit"].includes(t.type))
    );
  }
  _generateAction() {
    var n;
    this._textCache.clear();
    const t = (n = this._hoverHighlight) == null ? void 0 : n.elements[0];
    if (!t) return null;
    if (this._kind === "value") {
      if (!this._elementHasValue(t)) return null;
      const { selector: r } = this._recorder.injectedScript.generateSelector(
        t,
        { testIdAttributeName: this._recorder.state.testIdAttributeName },
      );
      return t.nodeName === "INPUT" &&
        ["checkbox", "radio"].includes(t.type.toLowerCase())
        ? {
            name: "assertChecked",
            selector: r,
            signals: [],
            checked: !t.checked,
          }
        : { name: "assertValue", selector: r, signals: [], value: t.value };
    } else
      return (
        (this._hoverHighlight = this._recorder.injectedScript.generateSelector(
          t,
          {
            testIdAttributeName: this._recorder.state.testIdAttributeName,
            forTextExpect: !0,
          },
        )),
        (this._hoverHighlight.color = "#8acae480"),
        this._recorder.updateHighlight(this._hoverHighlight, !0),
        {
          name: "assertText",
          selector: this._hoverHighlight.selector,
          signals: [],
          text: this._recorder.injectedScript.utils.elementText(
            this._textCache,
            t,
          ).normalized,
          substring: !0,
        }
      );
  }
  _renderValue(t) {
    return (t == null ? void 0 : t.name) === "assertText"
      ? this._recorder.injectedScript.utils.normalizeWhiteSpace(t.text)
      : (t == null ? void 0 : t.name) === "assertChecked"
        ? String(t.checked)
        : (t == null ? void 0 : t.name) === "assertValue"
          ? t.value
          : "";
  }
  _commit() {
    !this._action ||
      !this._dialog.isShowing() ||
      (this._dialog.close(),
      this._recorder.recordAction(this._action),
      this._recorder.setMode("recording"));
  }
  _showDialog() {
    var l;
    if (
      !((l = this._hoverHighlight) != null && l.elements[0]) ||
      ((this._action = this._generateAction()),
      !this._action || this._action.name !== "assertText")
    )
      return;
    const t = this._action,
      n = this._recorder.document.createElement("textarea");
    n.setAttribute("spellcheck", "false"),
      (n.value = this._renderValue(this._action)),
      n.classList.add("text-editor");
    const r = () => {
      var f;
      const a = this._recorder.injectedScript.utils.normalizeWhiteSpace(
          n.value,
        ),
        u = (f = this._hoverHighlight) == null ? void 0 : f.elements[0];
      if (!u) return;
      t.text = a;
      const c = this._recorder.injectedScript.utils.elementText(
          this._textCache,
          u,
        ).normalized,
        p = a && c.includes(a);
      n.classList.toggle("does-not-match", !p);
    };
    n.addEventListener("input", r);
    const s = this._dialog.show({
        label: "Assert that element contains text",
        body: n,
        onCommit: () => this._commit(),
      }),
      o = this._recorder.highlight.tooltipPosition(
        this._recorder.highlight.firstBox(),
        s,
      );
    this._dialog.moveTo(o.anchorTop, o.anchorLeft), n.focus();
  }
  _commitAssertValue() {
    var n;
    if (this._kind !== "value") return;
    const t = this._generateAction();
    t &&
      (this._recorder.recordAction(t),
      this._recorder.setMode("recording"),
      (n = this._recorder.overlay) == null ||
        n.flashToolSucceeded("assertingValue"));
  }
}
class c1 {
  constructor(t) {
    (this._listeners = []),
      (this._offsetX = 0),
      (this._measure = { width: 0, height: 0 }),
      (this._recorder = t);
    const n = this._recorder.document;
    (this._overlayElement = n.createElement("x-pw-overlay")),
      this._overlayElement.appendChild(em(this._recorder.document, a1));
    const r = n.createElement("x-pw-tools-list");
    this._overlayElement.appendChild(r),
      (this._dragHandle = n.createElement("x-pw-tool-gripper")),
      this._dragHandle.appendChild(n.createElement("x-div")),
      r.appendChild(this._dragHandle),
      (this._recordToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._recordToggle.title = "Record"),
      this._recordToggle.classList.add("record"),
      this._recordToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._recordToggle),
      (this._pickLocatorToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._pickLocatorToggle.title = "Pick locator"),
      this._pickLocatorToggle.classList.add("pick-locator"),
      this._pickLocatorToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._pickLocatorToggle),
      (this._assertVisibilityToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertVisibilityToggle.title = "Assert visibility"),
      this._assertVisibilityToggle.classList.add("visibility"),
      this._assertVisibilityToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._assertVisibilityToggle),
      (this._assertTextToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertTextToggle.title = "Assert text"),
      this._assertTextToggle.classList.add("text"),
      this._assertTextToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._assertTextToggle),
      (this._assertValuesToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertValuesToggle.title = "Assert value"),
      this._assertValuesToggle.classList.add("value"),
      this._assertValuesToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._assertValuesToggle),
      this._updateVisualPosition(),
      this._refreshListeners();
  }
  _refreshListeners() {
    Zp(this._listeners),
      (this._listeners = [
        J(this._dragHandle, "mousedown", (t) => {
          this._dragState = {
            offsetX: this._offsetX,
            dragStart: { x: t.clientX, y: 0 },
          };
        }),
        J(this._recordToggle, "click", () => {
          this._recorder.setMode(
            this._recorder.state.mode === "none" ||
              this._recorder.state.mode === "standby" ||
              this._recorder.state.mode === "inspecting"
              ? "recording"
              : "standby",
          );
        }),
        J(this._pickLocatorToggle, "click", () => {
          const t = {
            inspecting: "standby",
            none: "inspecting",
            standby: "inspecting",
            recording: "recording-inspecting",
            "recording-inspecting": "recording",
            assertingText: "recording-inspecting",
            assertingVisibility: "recording-inspecting",
            assertingValue: "recording-inspecting",
          };
          this._recorder.setMode(t[this._recorder.state.mode]);
        }),
        J(this._assertVisibilityToggle, "click", () => {
          this._assertVisibilityToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingVisibility"
                ? "recording"
                : "assertingVisibility",
            );
        }),
        J(this._assertTextToggle, "click", () => {
          this._assertTextToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingText"
                ? "recording"
                : "assertingText",
            );
        }),
        J(this._assertValuesToggle, "click", () => {
          this._assertValuesToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingValue"
                ? "recording"
                : "assertingValue",
            );
        }),
      ]);
  }
  install() {
    this._recorder.highlight.appendChild(this._overlayElement),
      this._refreshListeners(),
      this._updateVisualPosition();
  }
  contains(t) {
    return this._recorder.injectedScript.utils.isInsideScope(
      this._overlayElement,
      t,
    );
  }
  setUIState(t) {
    this._recordToggle.classList.toggle(
      "active",
      t.mode === "recording" ||
        t.mode === "assertingText" ||
        t.mode === "assertingVisibility" ||
        t.mode === "assertingValue" ||
        t.mode === "recording-inspecting",
    ),
      this._pickLocatorToggle.classList.toggle(
        "active",
        t.mode === "inspecting" || t.mode === "recording-inspecting",
      ),
      this._assertVisibilityToggle.classList.toggle(
        "active",
        t.mode === "assertingVisibility",
      ),
      this._assertVisibilityToggle.classList.toggle(
        "disabled",
        t.mode === "none" || t.mode === "standby" || t.mode === "inspecting",
      ),
      this._assertTextToggle.classList.toggle(
        "active",
        t.mode === "assertingText",
      ),
      this._assertTextToggle.classList.toggle(
        "disabled",
        t.mode === "none" || t.mode === "standby" || t.mode === "inspecting",
      ),
      this._assertValuesToggle.classList.toggle(
        "active",
        t.mode === "assertingValue",
      ),
      this._assertValuesToggle.classList.toggle(
        "disabled",
        t.mode === "none" || t.mode === "standby" || t.mode === "inspecting",
      ),
      this._offsetX !== t.overlay.offsetX &&
        ((this._offsetX = t.overlay.offsetX), this._updateVisualPosition()),
      t.mode === "none" ? this._hideOverlay() : this._showOverlay();
  }
  flashToolSucceeded(t) {
    const n =
      t === "assertingVisibility"
        ? this._assertVisibilityToggle
        : this._assertValuesToggle;
    n.classList.add("succeeded"),
      this._recorder.injectedScript.builtinSetTimeout(
        () => n.classList.remove("succeeded"),
        2e3,
      );
  }
  _hideOverlay() {
    this._overlayElement.setAttribute("hidden", "true");
  }
  _showOverlay() {
    this._overlayElement.hasAttribute("hidden") &&
      (this._overlayElement.removeAttribute("hidden"),
      this._updateVisualPosition());
  }
  _updateVisualPosition() {
    (this._measure = this._overlayElement.getBoundingClientRect()),
      (this._overlayElement.style.left =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 +
        this._offsetX +
        "px");
  }
  onMouseMove(t) {
    if (!t.buttons) return (this._dragState = void 0), !1;
    if (this._dragState) {
      this._offsetX =
        this._dragState.offsetX + t.clientX - this._dragState.dragStart.x;
      const n =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 -
        10;
      return (
        (this._offsetX = Math.max(-n, Math.min(n, this._offsetX))),
        this._updateVisualPosition(),
        this._recorder.setOverlayState({ offsetX: this._offsetX }),
        X(t),
        !0
      );
    }
    return !1;
  }
  onMouseUp(t) {
    return this._dragState ? (X(t), !0) : !1;
  }
  onClick(t) {
    return this._dragState ? ((this._dragState = void 0), X(t), !0) : !1;
  }
}
class d1 {
  constructor(t) {
    (this._listeners = []),
      (this._actionSelectorModel = null),
      (this.state = {
        mode: "none",
        testIdAttributeName: "data-testid",
        language: "javascript",
        overlay: { offsetX: 0 },
      }),
      (this._delegate = {}),
      (this.document = t.document),
      (this.injectedScript = t),
      (this.highlight = t.createHighlight()),
      (this._tools = {
        none: new Zc(),
        standby: new Zc(),
        inspecting: new Wo(this, !1),
        recording: new u1(this),
        "recording-inspecting": new Wo(this, !1),
        assertingText: new ed(this, "text"),
        assertingVisibility: new Wo(this, !0),
        assertingValue: new ed(this, "value"),
      }),
      (this._currentTool = this._tools.none),
      t.window.top === t.window &&
        ((this.overlay = new c1(this)), this.overlay.setUIState(this.state)),
      (this._stylesheet = new t.window.CSSStyleSheet()),
      this._stylesheet.replaceSync(`
      body[data-pw-cursor=pointer] *, body[data-pw-cursor=pointer] *::after { cursor: pointer !important; }
      body[data-pw-cursor=text] *, body[data-pw-cursor=text] *::after { cursor: text !important; }
    `),
      this.installListeners(),
      t.utils.cacheNormalizedWhitespaces(),
      t.isUnderTest && console.error("Recorder script ready for test");
  }
  installListeners() {
    var t;
    Zp(this._listeners),
      (this._listeners = [
        J(this.document, "click", (n) => this._onClick(n), !0),
        J(this.document, "auxclick", (n) => this._onClick(n), !0),
        J(this.document, "contextmenu", (n) => this._onContextMenu(n), !0),
        J(this.document, "dragstart", (n) => this._onDragStart(n), !0),
        J(this.document, "input", (n) => this._onInput(n), !0),
        J(this.document, "keydown", (n) => this._onKeyDown(n), !0),
        J(this.document, "keyup", (n) => this._onKeyUp(n), !0),
        J(this.document, "pointerdown", (n) => this._onPointerDown(n), !0),
        J(this.document, "pointerup", (n) => this._onPointerUp(n), !0),
        J(this.document, "mousedown", (n) => this._onMouseDown(n), !0),
        J(this.document, "mouseup", (n) => this._onMouseUp(n), !0),
        J(this.document, "mousemove", (n) => this._onMouseMove(n), !0),
        J(this.document, "mouseleave", (n) => this._onMouseLeave(n), !0),
        J(this.document, "mouseenter", (n) => this._onMouseEnter(n), !0),
        J(this.document, "focus", (n) => this._onFocus(n), !0),
        J(this.document, "scroll", (n) => this._onScroll(n), !0),
      ]),
      this.highlight.install(),
      (t = this.overlay) == null || t.install(),
      this.document.adoptedStyleSheets.push(this._stylesheet);
  }
  _switchCurrentTool() {
    var n, r, i;
    const t = this._tools[this.state.mode];
    t !== this._currentTool &&
      ((r = (n = this._currentTool).cleanup) == null || r.call(n),
      this.clearHighlight(),
      (this._currentTool = t),
      (i = this.injectedScript.document.body) == null ||
        i.setAttribute("data-pw-cursor", t.cursor()));
  }
  setUIState(t, n) {
    var r, i, s, o;
    (this._delegate = n),
      (t.actionPoint &&
        this.state.actionPoint &&
        t.actionPoint.x === this.state.actionPoint.x &&
        t.actionPoint.y === this.state.actionPoint.y) ||
        (!t.actionPoint && !this.state.actionPoint) ||
        (t.actionPoint
          ? this.highlight.showActionPoint(t.actionPoint.x, t.actionPoint.y)
          : this.highlight.hideActionPoint()),
      (this.state = t),
      this.highlight.setLanguage(t.language),
      this._switchCurrentTool(),
      (r = this.overlay) == null || r.setUIState(t),
      (i = this._actionSelectorModel) != null &&
        i.selector &&
        !((s = this._actionSelectorModel) != null && s.elements.length) &&
        (this._actionSelectorModel = null),
      t.actionSelector !==
        ((o = this._actionSelectorModel) == null ? void 0 : o.selector) &&
        (this._actionSelectorModel = t.actionSelector
          ? m1(this.injectedScript, t.actionSelector, this.document)
          : null),
      (this.state.mode === "none" || this.state.mode === "standby") &&
        this.updateHighlight(this._actionSelectorModel, !1);
  }
  clearHighlight() {
    var t, n;
    (n = (t = this._currentTool).cleanup) == null || n.call(t),
      this.updateHighlight(null, !1);
  }
  _onClick(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onClick(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onClick) == null ||
        i.call(r, t));
  }
  _onContextMenu(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onContextMenu) == null ||
        r.call(n, t));
  }
  _onDragStart(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onDragStart) == null ||
        r.call(n, t));
  }
  _onPointerDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerDown) == null ||
        r.call(n, t));
  }
  _onPointerUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerUp) == null ||
        r.call(n, t));
  }
  _onMouseDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseDown) == null ||
        r.call(n, t));
  }
  _onMouseUp(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseUp(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseUp) == null ||
        i.call(r, t));
  }
  _onMouseMove(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseMove(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseMove) == null ||
        i.call(r, t));
  }
  _onMouseEnter(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseEnter) == null ||
        r.call(n, t));
  }
  _onMouseLeave(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseLeave) == null ||
        r.call(n, t));
  }
  _onFocus(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onFocus) == null ||
        r.call(n, t));
  }
  _onScroll(t) {
    var n, r;
    t.isTrusted &&
      (this.highlight.hideActionPoint(),
      (r = (n = this._currentTool).onScroll) == null || r.call(n, t));
  }
  _onInput(t) {
    var n, r;
    this._ignoreOverlayEvent(t) ||
      (r = (n = this._currentTool).onInput) == null ||
      r.call(n, t);
  }
  _onKeyDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyDown) == null ||
        r.call(n, t));
  }
  _onKeyUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyUp) == null ||
        r.call(n, t));
  }
  updateHighlight(t, n) {
    var i, s;
    let r = t == null ? void 0 : t.tooltipText;
    r === void 0 &&
      !(t != null && t.tooltipList) &&
      t != null &&
      t.selector &&
      (r = this.injectedScript.utils.asLocator(
        this.state.language,
        t.selector,
      )),
      this.highlight.updateHighlight((t == null ? void 0 : t.elements) || [], {
        ...t,
        tooltipText: r,
      }),
      n && ((s = (i = this._delegate).highlightUpdated) == null || s.call(i));
  }
  _ignoreOverlayEvent(t) {
    return t
      .composedPath()
      .some((n) => (n.nodeName || "").toLowerCase() === "x-pw-glass");
  }
  deepEventTarget(t) {
    var n;
    for (const r of t.composedPath())
      if (!((n = this.overlay) != null && n.contains(r))) return r;
    return t.composedPath()[0];
  }
  setMode(t) {
    var n, r;
    (r = (n = this._delegate).setMode) == null || r.call(n, t);
  }
  async performAction(t) {
    var n, r;
    await ((r = (n = this._delegate).performAction) == null
      ? void 0
      : r.call(n, t).catch(() => {}));
  }
  recordAction(t) {
    var n, r;
    (r = (n = this._delegate).recordAction) == null || r.call(n, t);
  }
  setOverlayState(t) {
    var n, r;
    (r = (n = this._delegate).setOverlayState) == null || r.call(n, t);
  }
  setSelector(t) {
    var n, r;
    (r = (n = this._delegate).setSelector) == null || r.call(n, t);
  }
}
class f1 {
  constructor(t) {
    (this._dialogElement = null), (this._recorder = t);
  }
  isShowing() {
    return !!this._dialogElement;
  }
  show(t) {
    const n = this._recorder.document.createElement("x-pw-tool-item");
    (n.title = "Accept"),
      n.classList.add("accept"),
      n.appendChild(this._recorder.document.createElement("x-div")),
      n.addEventListener("click", () => t.onCommit());
    const r = this._recorder.document.createElement("x-pw-tool-item");
    (r.title = "Close"),
      r.classList.add("cancel"),
      r.appendChild(this._recorder.document.createElement("x-div")),
      r.addEventListener("click", () => {
        var l;
        this.close(), (l = t.onCancel) == null || l.call(t);
      }),
      (this._dialogElement =
        this._recorder.document.createElement("x-pw-dialog")),
      (this._keyboardListener = (l) => {
        var a;
        if (l.key === "Escape") {
          this.close(), (a = t.onCancel) == null || a.call(t);
          return;
        }
        if (l.key === "Enter" && (l.ctrlKey || l.metaKey)) {
          this._dialogElement && t.onCommit();
          return;
        }
      }),
      this._recorder.document.addEventListener(
        "keydown",
        this._keyboardListener,
        !0,
      );
    const i = this._recorder.document.createElement("x-pw-tools-list"),
      s = this._recorder.document.createElement("label");
    (s.textContent = t.label),
      i.appendChild(s),
      i.appendChild(this._recorder.document.createElement("x-spacer")),
      i.appendChild(n),
      i.appendChild(r),
      this._dialogElement.appendChild(i);
    const o = this._recorder.document.createElement("x-pw-dialog-body");
    return (
      o.appendChild(t.body),
      this._dialogElement.appendChild(o),
      this._recorder.highlight.appendChild(this._dialogElement),
      this._dialogElement
    );
  }
  moveTo(t, n) {
    this._dialogElement &&
      ((this._dialogElement.style.top = t + "px"),
      (this._dialogElement.style.left = n + "px"));
  }
  close() {
    this._dialogElement &&
      (this._dialogElement.remove(),
      this._recorder.document.removeEventListener(
        "keydown",
        this._keyboardListener,
      ),
      (this._dialogElement = null));
  }
}
function h1(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  return t;
}
function td(e) {
  return (
    (e.altKey ? 1 : 0) |
    (e.ctrlKey ? 2 : 0) |
    (e.metaKey ? 4 : 0) |
    (e.shiftKey ? 8 : 0)
  );
}
function p1(e) {
  switch (e.which) {
    case 1:
      return "left";
    case 2:
      return "middle";
    case 3:
      return "right";
  }
  return "left";
}
function nd(e) {
  if (e.target.nodeName === "CANVAS") return { x: e.offsetX, y: e.offsetY };
}
function X(e) {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}
function qo(e) {
  if (!e || e.nodeName !== "INPUT") return null;
  const t = e;
  return ["checkbox", "radio"].includes(t.type) ? t : null;
}
function rd(e) {
  return !e || e.nodeName !== "INPUT" ? !1 : e.type.toLowerCase() === "range";
}
function J(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function Zp(e) {
  for (const t of e) t();
  e.splice(0, e.length);
}
function m1(e, t, n) {
  try {
    const r = e.parseSelector(t);
    return { selector: t, elements: e.querySelectorAll(r, n) };
  } catch {
    return { selector: t, elements: [] };
  }
}
function em(e, { tagName: t, attrs: n, children: r }) {
  const i = e.createElementNS("http://www.w3.org/2000/svg", t);
  if (n) for (const [s, o] of Object.entries(n)) i.setAttribute(s, o);
  if (r) for (const s of r) i.appendChild(em(e, s));
  return i;
}
function su(e, t, n) {
  return `internal:attr=[${e}=${Te(t, (n == null ? void 0 : n.exact) || !1)}]`;
}
function g1(e, t) {
  return `internal:testid=[${e}=${Te(t, !0)}]`;
}
function v1(e, t) {
  return "internal:label=" + Ze(e, !!(t != null && t.exact));
}
function y1(e, t) {
  return su("alt", e, t);
}
function w1(e, t) {
  return su("title", e, t);
}
function x1(e, t) {
  return su("placeholder", e, t);
}
function S1(e, t) {
  return "internal:text=" + Ze(e, !!(t != null && t.exact));
}
function _1(e, t = {}) {
  const n = [];
  return (
    t.checked !== void 0 && n.push(["checked", String(t.checked)]),
    t.disabled !== void 0 && n.push(["disabled", String(t.disabled)]),
    t.selected !== void 0 && n.push(["selected", String(t.selected)]),
    t.expanded !== void 0 && n.push(["expanded", String(t.expanded)]),
    t.includeHidden !== void 0 &&
      n.push(["include-hidden", String(t.includeHidden)]),
    t.level !== void 0 && n.push(["level", String(t.level)]),
    t.name !== void 0 && n.push(["name", Te(t.name, !!t.exact)]),
    t.pressed !== void 0 && n.push(["pressed", String(t.pressed)]),
    `internal:role=${e}${n.map(([r, i]) => `[${r}=${i}]`).join("")}`
  );
}
const Lr = Symbol("selector");
class Xn {
  constructor(t, n, r) {
    if (
      (r != null &&
        r.hasText &&
        (n += ` >> internal:has-text=${Ze(r.hasText, !1)}`),
      r != null &&
        r.hasNotText &&
        (n += ` >> internal:has-not-text=${Ze(r.hasNotText, !1)}`),
      r != null &&
        r.has &&
        (n += " >> internal:has=" + JSON.stringify(r.has[Lr])),
      r != null &&
        r.hasNot &&
        (n += " >> internal:has-not=" + JSON.stringify(r.hasNot[Lr])),
      (this[Lr] = n),
      n)
    ) {
      const o = t.parseSelector(n);
      (this.element = t.querySelector(o, t.document, !1)),
        (this.elements = t.querySelectorAll(o, t.document));
    }
    const i = n,
      s = this;
    (s.locator = (o, l) => new Xn(t, i ? i + " >> " + o : o, l)),
      (s.getByTestId = (o) =>
        s.locator(
          g1(t.testIdAttributeNameForStrictErrorAndConsoleCodegen(), o),
        )),
      (s.getByAltText = (o, l) => s.locator(y1(o, l))),
      (s.getByLabel = (o, l) => s.locator(v1(o, l))),
      (s.getByPlaceholder = (o, l) => s.locator(x1(o, l))),
      (s.getByText = (o, l) => s.locator(S1(o, l))),
      (s.getByTitle = (o, l) => s.locator(w1(o, l))),
      (s.getByRole = (o, l = {}) => s.locator(_1(o, l))),
      (s.filter = (o) => new Xn(t, n, o)),
      (s.first = () => s.locator("nth=0")),
      (s.last = () => s.locator("nth=-1")),
      (s.nth = (o) => s.locator(`nth=${o}`)),
      (s.and = (o) =>
        new Xn(t, i + " >> internal:and=" + JSON.stringify(o[Lr]))),
      (s.or = (o) => new Xn(t, i + " >> internal:or=" + JSON.stringify(o[Lr])));
  }
}
class E1 {
  constructor(t) {
    (this._injectedScript = t),
      !this._injectedScript.window.playwright &&
        ((this._injectedScript.window.playwright = {
          $: (n, r) => this._querySelector(n, !!r),
          $$: (n) => this._querySelectorAll(n),
          inspect: (n) => this._inspect(n),
          selector: (n) => this._selector(n),
          generateLocator: (n, r) => this._generateLocator(n, r),
          resume: () => this._resume(),
          ...new Xn(t, ""),
        }),
        delete this._injectedScript.window.playwright.filter,
        delete this._injectedScript.window.playwright.first,
        delete this._injectedScript.window.playwright.last,
        delete this._injectedScript.window.playwright.nth,
        delete this._injectedScript.window.playwright.and,
        delete this._injectedScript.window.playwright.or);
  }
  _querySelector(t, n) {
    if (typeof t != "string")
      throw new Error("Usage: playwright.query('Playwright >> selector').");
    const r = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelector(
      r,
      this._injectedScript.document,
      n,
    );
  }
  _querySelectorAll(t) {
    if (typeof t != "string")
      throw new Error("Usage: playwright.$$('Playwright >> selector').");
    const n = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelectorAll(
      n,
      this._injectedScript.document,
    );
  }
  _inspect(t) {
    if (typeof t != "string")
      throw new Error("Usage: playwright.inspect('Playwright >> selector').");
    this._injectedScript.window.inspect(this._querySelector(t, !1));
  }
  _selector(t) {
    if (!(t instanceof Element))
      throw new Error("Usage: playwright.selector(element).");
    return this._injectedScript.generateSelectorSimple(t);
  }
  _generateLocator(t, n) {
    if (!(t instanceof Element))
      throw new Error("Usage: playwright.locator(element).");
    const r = this._injectedScript.generateSelectorSimple(t);
    return Yt(n || "javascript", r);
  }
  _resume() {
    this._injectedScript.window.__pw_resume().catch(() => {});
  }
}
function T1(e, t) {
  e = e
    .replace(/AriaRole\s*\.\s*([\w]+)/g, (s, o) => o.toLowerCase())
    .replace(
      /(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g,
      (s, o, l) => `${o}(${l.toLowerCase()}`,
    );
  const n = [];
  let r = "";
  for (let s = 0; s < e.length; ++s) {
    const o = e[s];
    if (o !== '"' && o !== "'" && o !== "`" && o !== "/") {
      r += o;
      continue;
    }
    const l = e[s - 1] === "r" || e[s] === "/";
    ++s;
    let a = "";
    for (; s < e.length; ) {
      if (e[s] === "\\") {
        l
          ? (e[s + 1] !== o && (a += e[s]), ++s, (a += e[s]))
          : (++s,
            e[s] === "n"
              ? (a += `
`)
              : e[s] === "r"
                ? (a += "\r")
                : e[s] === "t"
                  ? (a += "	")
                  : (a += e[s])),
          ++s;
        continue;
      }
      if (e[s] !== o) {
        a += e[s++];
        continue;
      }
      break;
    }
    n.push({ quote: o, text: a }),
      (r += (o === "/" ? "r" : "") + "$" + n.length);
  }
  r = r
    .toLowerCase()
    .replace(/get_by_alt_text/g, "getbyalttext")
    .replace(/get_by_test_id/g, "getbytestid")
    .replace(/get_by_([\w]+)/g, "getby$1")
    .replace(/has_not_text/g, "hasnottext")
    .replace(/has_text/g, "hastext")
    .replace(/has_not/g, "hasnot")
    .replace(/frame_locator/g, "framelocator")
    .replace(/[{}\s]/g, "")
    .replace(/new\(\)/g, "")
    .replace(/new[\w]+\.[\w]+options\(\)/g, "")
    .replace(/\.set/g, ",set")
    .replace(/\.or_\(/g, "or(")
    .replace(/\.and_\(/g, "and(")
    .replace(/:/g, "=")
    .replace(/,re\.ignorecase/g, "i")
    .replace(/,pattern.case_insensitive/g, "i")
    .replace(/,regexoptions.ignorecase/g, "i")
    .replace(/re.compile\(([^)]+)\)/g, "$1")
    .replace(/pattern.compile\(([^)]+)\)/g, "r$1")
    .replace(/newregex\(([^)]+)\)/g, "r$1")
    .replace(/string=/g, "=")
    .replace(/regex=/g, "=")
    .replace(/,,/g, ",");
  const i = n.map((s) => s.quote).filter((s) => "'\"`".includes(s))[0];
  return { selector: tm(r, n, t), preferredQuote: i };
}
function id(e) {
  return [...e.matchAll(/\$\d+/g)].length;
}
function sd(e, t) {
  return e.replace(/\$(\d+)/g, (n, r) => `$${r - t}`);
}
function tm(e, t, n) {
  for (;;) {
    const i = e.match(/filter\(,?(has=|hasnot=|sethas\(|sethasnot\()/);
    if (!i) break;
    const s = i.index + i[0].length;
    let o = 0,
      l = s;
    for (
      ;
      l < e.length && (e[l] === "(" ? o++ : e[l] === ")" && o--, !(o < 0));
      l++
    );
    let a = e.substring(0, s),
      u = 0;
    ["sethas(", "sethasnot("].includes(i[1]) &&
      ((u = 1),
      (a = a.replace(/sethas\($/, "has=").replace(/sethasnot\($/, "hasnot=")));
    const c = id(e.substring(0, s)),
      p = sd(e.substring(s, l), c),
      f = id(p),
      g = t.slice(c, c + f),
      y = JSON.stringify(tm(p, g, n));
    e = a.replace(/=$/, "2=") + `$${c + 1}` + sd(e.substring(l + u), f - 1);
    const w = t.slice(0, c),
      x = t.slice(c + f);
    t = w.concat([{ quote: '"', text: y }]).concat(x);
  }
  e = e
    .replace(
      /\,set([\w]+)\(([^)]+)\)/g,
      (i, s, o) => "," + s.toLowerCase() + "=" + o.toLowerCase(),
    )
    .replace(/framelocator\(([^)]+)\)/g, "$1.internal:control=enter-frame")
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      "locator($1).internal:has-text=$2",
    )
    .replace(
      /locator\(([^)]+),hasnottext=([^),]+)\)/g,
      "locator($1).internal:has-not-text=$2",
    )
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      "locator($1).internal:has-text=$2",
    )
    .replace(/locator\(([^)]+)\)/g, "$1")
    .replace(/getbyrole\(([^)]+)\)/g, "internal:role=$1")
    .replace(/getbytext\(([^)]+)\)/g, "internal:text=$1")
    .replace(/getbylabel\(([^)]+)\)/g, "internal:label=$1")
    .replace(/getbytestid\(([^)]+)\)/g, `internal:testid=[${n}=$1]`)
    .replace(
      /getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g,
      "internal:attr=[$1=$2]",
    )
    .replace(/first(\(\))?/g, "nth=0")
    .replace(/last(\(\))?/g, "nth=-1")
    .replace(/nth\(([^)]+)\)/g, "nth=$1")
    .replace(/filter\(,?hastext=([^)]+)\)/g, "internal:has-text=$1")
    .replace(/filter\(,?hasnottext=([^)]+)\)/g, "internal:has-not-text=$1")
    .replace(/filter\(,?has2=([^)]+)\)/g, "internal:has=$1")
    .replace(/filter\(,?hasnot2=([^)]+)\)/g, "internal:has-not=$1")
    .replace(/,exact=false/g, "")
    .replace(/,exact=true/g, "s")
    .replace(/\,/g, "][");
  const r = e.split(".");
  for (let i = 0; i < r.length - 1; i++)
    if (
      r[i] === "internal:control=enter-frame" &&
      r[i + 1].startsWith("nth=")
    ) {
      const [s] = r.splice(i, 1);
      r.splice(i + 1, 0, s);
    }
  return r
    .map((i) =>
      !i.startsWith("internal:") || i === "internal:control"
        ? i.replace(/\$(\d+)/g, (s, o) => t[+o - 1].text)
        : ((i = i.includes("[") ? i.replace(/\]/, "") + "]" : i),
          (i = i
            .replace(/(?:r)\$(\d+)(i)?/g, (s, o, l) => {
              const a = t[+o - 1];
              return i.startsWith("internal:attr") ||
                i.startsWith("internal:testid") ||
                i.startsWith("internal:role")
                ? Te(new RegExp(a.text), !1) + (l || "")
                : Ze(new RegExp(a.text, l), !1);
            })
            .replace(/\$(\d+)(i|s)?/g, (s, o, l) => {
              const a = t[+o - 1];
              return i.startsWith("internal:has=") ||
                i.startsWith("internal:has-not=")
                ? a.text
                : i.startsWith("internal:testid")
                  ? Te(a.text, !0)
                  : i.startsWith("internal:attr") ||
                      i.startsWith("internal:role")
                    ? Te(a.text, l === "s")
                    : Ze(a.text, l === "s");
            })),
          i),
    )
    .join(" >> ");
}
function k1(e, t, n) {
  try {
    return oo(t), t;
  } catch {}
  try {
    const { selector: r, preferredQuote: i } = T1(t, n),
      s = Yh(e, r, void 0, void 0, i),
      o = od(e, t);
    if (s.some((l) => od(e, l) === o)) return r;
  } catch {}
  return "";
}
function od(e, t) {
  return (
    (t = t.replace(/\s/g, "")),
    e === "javascript" && (t = t.replace(/\\?["`]/g, "'")),
    t
  );
}
const N1 = ({ url: e }) =>
    d.jsxs("div", {
      className: "browser-frame-header",
      children: [
        d.jsxs("div", {
          style: { whiteSpace: "nowrap" },
          children: [
            d.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(242, 95, 88)" },
            }),
            d.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(251, 190, 60)" },
            }),
            d.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(88, 203, 66)" },
            }),
          ],
        }),
        d.jsx("div", {
          className: "browser-frame-address-bar",
          title: e || "about:blank",
          children: e || "about:blank",
        }),
        d.jsx("div", {
          style: { marginLeft: "auto" },
          children: d.jsxs("div", {
            children: [
              d.jsx("span", { className: "browser-frame-menu-bar" }),
              d.jsx("span", { className: "browser-frame-menu-bar" }),
              d.jsx("span", { className: "browser-frame-menu-bar" }),
            ],
          }),
        }),
      ],
    }),
  C1 = ({
    action: e,
    sdkLanguage: t,
    testIdAttributeName: n,
    isInspecting: r,
    setIsInspecting: i,
    highlightedLocator: s,
    setHighlightedLocator: o,
    openPage: l,
  }) => {
    const [a, u] = _n(),
      [c, p] = b.useState("action"),
      { snapshots: f } = b.useMemo(() => {
        if (!e) return { snapshots: {} };
        let _ = e.beforeSnapshot
            ? { action: e, snapshotName: e.beforeSnapshot }
            : void 0,
          T = e;
        for (; !_ && T; )
          (T = s0(T)),
            (_ =
              T != null && T.afterSnapshot
                ? {
                    action: T,
                    snapshotName: T == null ? void 0 : T.afterSnapshot,
                  }
                : void 0);
        const j = e.afterSnapshot
            ? { action: e, snapshotName: e.afterSnapshot }
            : _,
          k = e.inputSnapshot
            ? { action: e, snapshotName: e.inputSnapshot }
            : j;
        return (
          k && (k.point = e.point),
          { snapshots: { action: k, before: _, after: j } }
        );
      }, [e]),
      {
        snapshotInfoUrl: g,
        snapshotUrl: y,
        popoutUrl: w,
      } = b.useMemo(() => {
        const _ = f[c];
        if (!_) return { snapshotUrl: L1 };
        const T = new URLSearchParams();
        T.set("trace", $s(_.action).traceUrl),
          T.set("name", _.snapshotName),
          _.point &&
            (T.set("pointX", String(_.point.x)),
            T.set("pointY", String(_.point.y)));
        const j = new URL(
            `snapshot/${_.action.pageId}?${T.toString()}`,
            window.location.href,
          ).toString(),
          k = new URL(
            `snapshotInfo/${_.action.pageId}?${T.toString()}`,
            window.location.href,
          ).toString(),
          M = new URLSearchParams();
        M.set("r", j),
          M.set("trace", $s(_.action).traceUrl),
          _.point &&
            (M.set("pointX", String(_.point.x)),
            M.set("pointY", String(_.point.y)));
        const $ = new URL(
          `snapshot.html?${M.toString()}`,
          window.location.href,
        ).toString();
        return {
          snapshots: f,
          snapshotInfoUrl: k,
          snapshotUrl: j,
          popoutUrl: $,
        };
      }, [f, c]),
      x = b.useRef(null),
      h = b.useRef(null),
      [m, v] = b.useState({ viewport: ad, url: "" }),
      S = b.useRef({ iteration: 0, visibleIframe: 0 });
    b.useEffect(() => {
      (async () => {
        const _ = S.current.iteration + 1,
          T = 1 - S.current.visibleIframe;
        S.current.iteration = _;
        const j = { url: "", viewport: ad };
        if (g) {
          const $ = await (await fetch(g)).json();
          $.error || ((j.url = $.url), (j.viewport = $.viewport));
        }
        if (S.current.iteration !== _) return;
        const k = [x, h][T].current;
        if (k) {
          let M = () => {};
          const $ = new Promise((ce) => (M = ce));
          try {
            k.addEventListener("load", M),
              k.addEventListener("error", M),
              k.contentWindow
                ? k.contentWindow.location.replace(y)
                : (k.src = y),
              await $;
          } catch {
          } finally {
            k.removeEventListener("load", M), k.removeEventListener("error", M);
          }
        }
        S.current.iteration === _ && ((S.current.visibleIframe = T), v(j));
      })();
    }, [y, g]);
    const E = { width: m.viewport.width, height: m.viewport.height + 40 },
      C = Math.min(a.width / E.width, a.height / E.height, 1),
      A = { x: (a.width - E.width) / 2, y: (a.height - E.height) / 2 };
    return d.jsxs("div", {
      className: "snapshot-tab",
      tabIndex: 0,
      onKeyDown: (_) => {
        _.key === "Escape" && r && i(!1);
      },
      children: [
        d.jsx(ld, {
          isInspecting: r,
          sdkLanguage: t,
          testIdAttributeName: n,
          highlightedLocator: s,
          setHighlightedLocator: o,
          iframe: x.current,
          iteration: S.current.iteration,
        }),
        d.jsx(ld, {
          isInspecting: r,
          sdkLanguage: t,
          testIdAttributeName: n,
          highlightedLocator: s,
          setHighlightedLocator: o,
          iframe: h.current,
          iteration: S.current.iteration,
        }),
        d.jsxs(Ka, {
          children: [
            d.jsx(en, {
              className: "pick-locator",
              title: "Pick locator",
              icon: "target",
              toggled: r,
              onClick: () => i(!r),
            }),
            ["action", "before", "after"].map((_) =>
              d.jsx(
                ep,
                {
                  id: _,
                  title: b1(_),
                  selected: c === _,
                  onSelect: () => p(_),
                },
                _,
              ),
            ),
            d.jsx("div", { style: { flex: "auto" } }),
            d.jsx(en, {
              icon: "link-external",
              title: "Open snapshot in a new tab",
              disabled: !w,
              onClick: () => {
                l || (l = window.open);
                const _ = l(w || "", "_blank");
                _ == null ||
                  _.addEventListener("DOMContentLoaded", () => {
                    const T = new Kp(_, !1, t, n, 1, "chromium", []);
                    new E1(T);
                  });
              },
            }),
          ],
        }),
        d.jsx("div", {
          ref: u,
          className: "snapshot-wrapper",
          children: d.jsxs("div", {
            className: "snapshot-container",
            style: {
              width: E.width + "px",
              height: E.height + "px",
              transform: `translate(${A.x}px, ${A.y}px) scale(${C})`,
            },
            children: [
              d.jsx(N1, { url: m.url }),
              d.jsxs("div", {
                className: "snapshot-switcher",
                children: [
                  d.jsx("iframe", {
                    ref: x,
                    name: "snapshot",
                    title: "DOM Snapshot",
                    className: Ne(
                      S.current.visibleIframe === 0 && "snapshot-visible",
                    ),
                  }),
                  d.jsx("iframe", {
                    ref: h,
                    name: "snapshot",
                    title: "DOM Snapshot",
                    className: Ne(
                      S.current.visibleIframe === 1 && "snapshot-visible",
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function b1(e) {
  return e === "before"
    ? "Before"
    : e === "after"
      ? "After"
      : e === "action"
        ? "Action"
        : e;
}
const ld = ({
  iframe: e,
  isInspecting: t,
  sdkLanguage: n,
  testIdAttributeName: r,
  highlightedLocator: i,
  setHighlightedLocator: s,
  iteration: o,
}) => (
  b.useEffect(() => {
    const l = [],
      a =
        new URLSearchParams(window.location.search).get("isUnderTest") ===
        "true";
    try {
      nm(l, n, r, a, "", e == null ? void 0 : e.contentWindow);
    } catch {}
    for (const { recorder: u, frameSelector: c } of l) {
      const p = k1(n, i, r);
      u.setUIState(
        {
          mode: t ? "inspecting" : "none",
          actionSelector: p.startsWith(c)
            ? p.substring(c.length).trim()
            : void 0,
          language: n,
          testIdAttributeName: r,
          overlay: { offsetX: 0 },
        },
        {
          async setSelector(f) {
            s(Yt(n, c + f));
          },
          highlightUpdated() {
            for (const f of l) f.recorder !== u && f.recorder.clearHighlight();
          },
        },
      );
    }
  }, [e, t, i, s, n, r, o]),
  d.jsx(d.Fragment, {})
);
function nm(e, t, n, r, i, s) {
  if (!s) return;
  const o = s;
  if (!o._recorder) {
    const l = new Kp(s, r, t, n, 1, "chromium", []),
      a = new d1(l);
    (o._injectedScript = l), (o._recorder = { recorder: a, frameSelector: i });
  }
  e.push(o._recorder);
  for (let l = 0; l < s.frames.length; ++l) {
    const a = s.frames[l],
      u = a.frameElement
        ? o._injectedScript.generateSelectorSimple(a.frameElement, {
            omitInternalEngines: !0,
            testIdAttributeName: n,
          }) + " >> internal:control=enter-frame >> "
        : "";
    nm(e, t, n, r, i + u, a);
  }
}
const ad = { width: 1280, height: 720 },
  L1 = 'data:text/html,<body style="background: #ddd"></body>',
  A1 = vi,
  j1 = ({ stack: e, setSelectedFrame: t, selectedFrame: n }) => {
    const r = e || [];
    return d.jsx(A1, {
      name: "stack-trace",
      items: r,
      selectedItem: r[n],
      render: (i) => {
        const s = i.file[1] === ":" ? "\\" : "/";
        return d.jsxs(d.Fragment, {
          children: [
            d.jsx("span", {
              className: "stack-trace-frame-function",
              children: i.function || "(anonymous)",
            }),
            d.jsx("span", {
              className: "stack-trace-frame-location",
              children: i.file.split(s).pop(),
            }),
            d.jsx("span", {
              className: "stack-trace-frame-line",
              children: ":" + i.line,
            }),
          ],
        });
      },
      onSelected: (i) => t(r.indexOf(i)),
    });
  },
  M1 = ({
    stack: e,
    sources: t,
    rootDir: n,
    fallbackLocation: r,
    stackFrameLocation: i,
    onOpenExternally: s,
  }) => {
    const [o, l] = b.useState(),
      [a, u] = b.useState(0);
    b.useEffect(() => {
      o !== e && (l(e), u(0));
    }, [e, o, l, u]);
    const {
        source: c,
        highlight: p,
        targetLine: f,
        fileName: g,
        location: y,
      } = Hm(
        async () => {
          var T, j;
          const m = e == null ? void 0 : e[a],
            v = !(m != null && m.file);
          if (v && !r)
            return {
              source: { file: "", errors: [], content: void 0 },
              targetLine: 0,
              highlight: [],
            };
          const S = v ? r.file : m.file;
          let N = t.get(S);
          N ||
            ((N = {
              errors:
                ((T = r == null ? void 0 : r.source) == null
                  ? void 0
                  : T.errors) || [],
              content: void 0,
            }),
            t.set(S, N));
          const E = v ? r : m,
            C = v
              ? (r == null ? void 0 : r.line) ||
                ((j = N.errors[0]) == null ? void 0 : j.line) ||
                0
              : m.line,
            A = n && S.startsWith(n) ? S.substring(n.length + 1) : S,
            _ = N.errors.map((k) => ({
              type: "error",
              line: k.line,
              message: k.message,
            }));
          if (
            (_.push({ line: C, type: "running" }), N.content === void 0 || v)
          ) {
            const k = await I1(S);
            try {
              let M = await fetch(`sha1/src@${k}.txt`);
              M.status === 404 &&
                (M = await fetch(`file?path=${encodeURIComponent(S)}`)),
                M.status >= 400
                  ? (N.content = `<Unable to read "${S}">`)
                  : (N.content = await M.text());
            } catch {
              N.content = `<Unable to read "${S}">`;
            }
          }
          return {
            source: N,
            highlight: _,
            targetLine: C,
            fileName: A,
            location: E,
          };
        },
        [e, a, n, r],
        { source: { errors: [], content: "Loading…" }, highlight: [] },
      ),
      w = b.useCallback(() => {
        y &&
          (s
            ? s(y)
            : (window.location.href = `vscode://file//${y.file}:${y.line}`));
      }, [s, y]),
      x = ((e == null ? void 0 : e.length) ?? 0) > 1,
      h = P1(g);
    return d.jsx(Os, {
      sidebarSize: 200,
      orientation: i === "bottom" ? "vertical" : "horizontal",
      sidebarHidden: !x,
      main: d.jsxs("div", {
        className: "vbox",
        "data-testid": "source-code",
        children: [
          g &&
            d.jsxs(Ka, {
              children: [
                d.jsx("div", {
                  className: "source-tab-file-name",
                  title: g,
                  children: d.jsx("div", { children: h }),
                }),
                d.jsx(Jh, { description: "Copy filename", value: h }),
                y &&
                  d.jsx(en, {
                    icon: "link-external",
                    title: "Open in VS Code",
                    onClick: w,
                  }),
              ],
            }),
          d.jsx(yi, {
            text: c.content || "",
            language: "javascript",
            highlight: p,
            revealLine: f,
            readOnly: !0,
            lineNumbers: !0,
          }),
        ],
      }),
      sidebar: d.jsx(j1, { stack: e, selectedFrame: a, setSelectedFrame: u }),
    });
  };
async function I1(e) {
  const t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest("SHA-1", t),
    r = [],
    i = new DataView(n);
  for (let s = 0; s < i.byteLength; s += 1) {
    const o = i.getUint8(s).toString(16).padStart(2, "0");
    r.push(o);
  }
  return r.join("");
}
function P1(e) {
  if (!e) return "";
  const t = e != null && e.includes("/") ? "/" : "\\";
  return (e == null ? void 0 : e.split(t).pop()) ?? "";
}
const rm = { width: 200, height: 45 },
  In = 2.5,
  R1 = rm.height + In * 2,
  $1 = ({ model: e, boundaries: t, previewPoint: n }) => {
    var c, p;
    const [r, i] = _n(),
      s = b.useRef(null);
    let o = 0;
    if (s.current && n) {
      const f = s.current.getBoundingClientRect();
      o = ((n.clientY - f.top + s.current.scrollTop) / R1) | 0;
    }
    const l =
      (p = (c = e == null ? void 0 : e.pages) == null ? void 0 : c[o]) == null
        ? void 0
        : p.screencastFrames;
    let a, u;
    if (n !== void 0 && l && l.length) {
      const f = t.minimum + ((t.maximum - t.minimum) * n.x) / r.width;
      a = l[wd(l, f, im) - 1];
      const g = {
        width: Math.min(800, (window.innerWidth / 2) | 0),
        height: Math.min(800, (window.innerHeight / 2) | 0),
      };
      u = a ? sm({ width: a.width, height: a.height }, g) : void 0;
    }
    return d.jsxs("div", {
      className: "film-strip",
      ref: i,
      children: [
        d.jsx("div", {
          className: "film-strip-lanes",
          ref: s,
          children:
            e == null
              ? void 0
              : e.pages.map((f, g) =>
                  f.screencastFrames.length
                    ? d.jsx(O1, { boundaries: t, page: f, width: r.width }, g)
                    : null,
                ),
        }),
        (n == null ? void 0 : n.x) !== void 0 &&
          d.jsxs("div", {
            className: "film-strip-hover",
            style: {
              top: r.bottom + 5,
              left: Math.min(n.x, r.width - (u ? u.width : 0) - 10),
            },
            children: [
              n.action &&
                d.jsx("div", {
                  className: "film-strip-hover-title",
                  children: Qa(n.action, n),
                }),
              a &&
                u &&
                d.jsx("div", {
                  style: { width: u.width, height: u.height },
                  children: d.jsx("img", {
                    src: `sha1/${a.sha1}`,
                    width: u.width,
                    height: u.height,
                  }),
                }),
            ],
          }),
      ],
    });
  },
  O1 = ({ boundaries: e, page: t, width: n }) => {
    const r = { width: 0, height: 0 },
      i = t.screencastFrames;
    for (const w of i)
      (r.width = Math.max(r.width, w.width)),
        (r.height = Math.max(r.height, w.height));
    const s = sm(r, rm),
      o = i[0].timestamp,
      l = i[i.length - 1].timestamp,
      a = e.maximum - e.minimum,
      u = ((o - e.minimum) / a) * n,
      c = ((e.maximum - l) / a) * n,
      f = ((((l - o) / a) * n) / (s.width + 2 * In)) | 0,
      g = (l - o) / f,
      y = [];
    for (let w = 0; o && g && w < f; ++w) {
      const x = o + g * w,
        h = wd(i, x, im) - 1;
      y.push(
        d.jsx(
          "div",
          {
            className: "film-strip-frame",
            style: {
              width: s.width,
              height: s.height,
              backgroundImage: `url(sha1/${i[h].sha1})`,
              backgroundSize: `${s.width}px ${s.height}px`,
              margin: In,
              marginRight: In,
            },
          },
          w,
        ),
      );
    }
    return (
      y.push(
        d.jsx(
          "div",
          {
            className: "film-strip-frame",
            style: {
              width: s.width,
              height: s.height,
              backgroundImage: `url(sha1/${i[i.length - 1].sha1})`,
              backgroundSize: `${s.width}px ${s.height}px`,
              margin: In,
              marginRight: In,
            },
          },
          y.length,
        ),
      ),
      d.jsx("div", {
        className: "film-strip-lane",
        style: { marginLeft: u + "px", marginRight: c + "px" },
        children: y,
      })
    );
  };
function im(e, t) {
  return e - t.timestamp;
}
function sm(e, t) {
  const n = Math.max(e.width / t.width, e.height / t.height);
  return { width: (e.width / n) | 0, height: (e.height / n) | 0 };
}
const z1 = ({
  model: e,
  boundaries: t,
  consoleEntries: n,
  onSelected: r,
  highlightedAction: i,
  highlightedEntry: s,
  highlightedConsoleEntry: o,
  selectedTime: l,
  setSelectedTime: a,
  sdkLanguage: u,
}) => {
  const [c, p] = _n(),
    [f, g] = b.useState(),
    [y, w] = b.useState(),
    {
      offsets: x,
      curtainLeft: h,
      curtainRight: m,
    } = b.useMemo(() => {
      let T = l || t;
      if (f && f.startX !== f.endX) {
        const $ = pt(c.width, t, f.startX),
          ce = pt(c.width, t, f.endX);
        T = { minimum: Math.min($, ce), maximum: Math.max($, ce) };
      }
      const j = Qe(c.width, t, T.minimum),
        M = Qe(c.width, t, t.maximum) - Qe(c.width, t, T.maximum);
      return { offsets: D1(c.width, t), curtainLeft: j, curtainRight: M };
    }, [l, t, f, c]),
    v = b.useMemo(() => {
      const T = [];
      for (const j of (e == null ? void 0 : e.actions) || [])
        j.class !== "Test" &&
          T.push({
            action: j,
            leftTime: j.startTime,
            rightTime: j.endTime || t.maximum,
            leftPosition: Qe(c.width, t, j.startTime),
            rightPosition: Qe(c.width, t, j.endTime || t.maximum),
            active: !1,
            error: !!j.error,
          });
      for (const j of (e == null ? void 0 : e.resources) || []) {
        const k = j._monotonicTime,
          M = j._monotonicTime + j.time;
        T.push({
          resource: j,
          leftTime: k,
          rightTime: M,
          leftPosition: Qe(c.width, t, k),
          rightPosition: Qe(c.width, t, M),
          active: !1,
          error: !1,
        });
      }
      for (const j of n || [])
        T.push({
          consoleMessage: j,
          leftTime: j.timestamp,
          rightTime: j.timestamp,
          leftPosition: Qe(c.width, t, j.timestamp),
          rightPosition: Qe(c.width, t, j.timestamp),
          active: !1,
          error: j.isError,
        });
      return T;
    }, [e, n, t, c]);
  b.useMemo(() => {
    for (const T of v)
      i
        ? (T.active = T.action === i)
        : s
          ? (T.active = T.resource === s)
          : o
            ? (T.active = T.consoleMessage === o)
            : (T.active = !1);
  }, [v, i, s, o]);
  const S = b.useCallback(
      (T) => {
        if ((w(void 0), !p.current)) return;
        const j = T.clientX - p.current.getBoundingClientRect().left,
          k = pt(c.width, t, j),
          M = l ? Qe(c.width, t, l.minimum) : 0,
          $ = l ? Qe(c.width, t, l.maximum) : 0;
        l && Math.abs(j - M) < 10
          ? g({ startX: $, endX: j, type: "resize" })
          : l && Math.abs(j - $) < 10
            ? g({ startX: M, endX: j, type: "resize" })
            : l &&
                k > l.minimum &&
                k < l.maximum &&
                T.clientY - p.current.getBoundingClientRect().top < 20
              ? g({ startX: M, endX: $, pivot: j, type: "move" })
              : g({ startX: j, endX: j, type: "resize" });
      },
      [t, c, p, l],
    ),
    N = b.useCallback(
      (T) => {
        if (!p.current) return;
        const j = T.clientX - p.current.getBoundingClientRect().left,
          k = pt(c.width, t, j),
          M =
            e == null ? void 0 : e.actions.findLast((me) => me.startTime <= k);
        if (!T.buttons) {
          g(void 0);
          return;
        }
        if ((M && r(M), !f)) return;
        let $ = f;
        if (f.type === "resize") $ = { ...f, endX: j };
        else {
          const me = j - f.pivot;
          let I = f.startX + me,
            R = f.endX + me;
          I < 0 && ((I = 0), (R = I + (f.endX - f.startX))),
            R > c.width && ((R = c.width), (I = R - (f.endX - f.startX))),
            ($ = { ...f, startX: I, endX: R, pivot: j });
        }
        g($);
        const ce = pt(c.width, t, $.startX),
          Fe = pt(c.width, t, $.endX);
        ce !== Fe &&
          a({ minimum: Math.min(ce, Fe), maximum: Math.max(ce, Fe) });
      },
      [t, f, c, e, r, p, a],
    ),
    E = b.useCallback(() => {
      if ((w(void 0), !!f)) {
        if (f.startX !== f.endX) {
          const T = pt(c.width, t, f.startX),
            j = pt(c.width, t, f.endX);
          a({ minimum: Math.min(T, j), maximum: Math.max(T, j) });
        } else {
          const T = pt(c.width, t, f.startX),
            j =
              e == null ? void 0 : e.actions.findLast((k) => k.startTime <= T);
          j && r(j), a(void 0);
        }
        g(void 0);
      }
    }, [t, f, c, e, a, r]),
    C = b.useCallback(
      (T) => {
        if (!p.current) return;
        const j = T.clientX - p.current.getBoundingClientRect().left,
          k = pt(c.width, t, j),
          M = e == null ? void 0 : e.actions.findLast(($) => $.startTime <= k);
        w({ x: j, clientY: T.clientY, action: M, sdkLanguage: u });
      },
      [t, c, e, p, u],
    ),
    A = b.useCallback(() => {
      w(void 0);
    }, []),
    _ = b.useCallback(() => {
      a(void 0);
    }, [a]);
  return d.jsxs("div", {
    style: {
      flex: "none",
      borderBottom: "1px solid var(--vscode-panel-border)",
    },
    children: [
      !!f &&
        d.jsx(tp, {
          cursor:
            (f == null ? void 0 : f.type) === "resize" ? "ew-resize" : "grab",
          onPaneMouseUp: E,
          onPaneMouseMove: N,
          onPaneDoubleClick: _,
        }),
      d.jsxs("div", {
        ref: p,
        className: "timeline-view",
        onMouseDown: S,
        onMouseMove: C,
        onMouseLeave: A,
        children: [
          d.jsx("div", {
            className: "timeline-grid",
            children: x.map((T, j) =>
              d.jsx(
                "div",
                {
                  className: "timeline-divider",
                  style: { left: T.position + "px" },
                  children: d.jsx("div", {
                    className: "timeline-time",
                    children: et(T.time - t.minimum),
                  }),
                },
                j,
              ),
            ),
          }),
          d.jsx("div", { style: { height: 8 } }),
          d.jsx($1, { model: e, boundaries: t, previewPoint: y }),
          d.jsx("div", {
            className: "timeline-bars",
            children: v.map((T, j) =>
              d.jsx(
                "div",
                {
                  className: Ne(
                    "timeline-bar",
                    T.action && "action",
                    T.resource && "network",
                    T.consoleMessage && "console-message",
                    T.active && "active",
                    T.error && "error",
                  ),
                  style: {
                    left: T.leftPosition,
                    width: Math.max(5, T.rightPosition - T.leftPosition),
                    top: F1(T),
                    bottom: 0,
                  },
                },
                j,
              ),
            ),
          }),
          d.jsx("div", {
            className: "timeline-marker",
            style: {
              display: y !== void 0 ? "block" : "none",
              left: ((y == null ? void 0 : y.x) || 0) + "px",
            },
          }),
          l &&
            d.jsxs("div", {
              className: "timeline-window",
              children: [
                d.jsx("div", {
                  className: "timeline-window-curtain left",
                  style: { width: h },
                }),
                d.jsx("div", {
                  className: "timeline-window-resizer",
                  style: { left: -5 },
                }),
                d.jsx("div", {
                  className: "timeline-window-center",
                  children: d.jsx("div", { className: "timeline-window-drag" }),
                }),
                d.jsx("div", {
                  className: "timeline-window-resizer",
                  style: { left: 5 },
                }),
                d.jsx("div", {
                  className: "timeline-window-curtain right",
                  style: { width: m },
                }),
              ],
            }),
        ],
      }),
    ],
  });
};
function D1(e, t) {
  let r = e / 64;
  const i = t.maximum - t.minimum,
    s = e / i;
  let o = i / r;
  const l = Math.ceil(Math.log(o) / Math.LN10);
  (o = Math.pow(10, l)),
    o * s >= 5 * 64 && (o = o / 5),
    o * s >= 2 * 64 && (o = o / 2);
  const a = t.minimum;
  let u = t.maximum;
  (u += 64 / s), (r = Math.ceil((u - a) / o)), o || (r = 0);
  const c = [];
  for (let p = 0; p < r; ++p) {
    const f = a + o * p;
    c.push({ position: Qe(e, t, f), time: f });
  }
  return c;
}
function Qe(e, t, n) {
  return ((n - t.minimum) / (t.maximum - t.minimum)) * e;
}
function pt(e, t, n) {
  return (n / e) * (t.maximum - t.minimum) + t.minimum;
}
function F1(e) {
  return e.resource ? 25 : 20;
}
const H1 = ({ model: e }) => {
  var t, n;
  return e
    ? d.jsxs("div", {
        "data-testid": "metadata-view",
        className: "vbox",
        style: { flexShrink: 0 },
        children: [
          d.jsx("div", {
            className: "call-section",
            style: { paddingTop: 2 },
            children: "Time",
          }),
          !!e.wallTime &&
            d.jsxs("div", {
              className: "call-line",
              children: [
                "start time:",
                d.jsx("span", {
                  className: "call-value datetime",
                  title: new Date(e.wallTime).toLocaleString(),
                  children: new Date(e.wallTime).toLocaleString(),
                }),
              ],
            }),
          d.jsxs("div", {
            className: "call-line",
            children: [
              "duration:",
              d.jsx("span", {
                className: "call-value number",
                title: et(e.endTime - e.startTime),
                children: et(e.endTime - e.startTime),
              }),
            ],
          }),
          d.jsx("div", { className: "call-section", children: "Browser" }),
          d.jsxs("div", {
            className: "call-line",
            children: [
              "engine:",
              d.jsx("span", {
                className: "call-value string",
                title: e.browserName,
                children: e.browserName,
              }),
            ],
          }),
          e.channel &&
            d.jsxs("div", {
              className: "call-line",
              children: [
                "channel:",
                d.jsx("span", {
                  className: "call-value string",
                  title: e.channel,
                  children: e.channel,
                }),
              ],
            }),
          e.platform &&
            d.jsxs("div", {
              className: "call-line",
              children: [
                "platform:",
                d.jsx("span", {
                  className: "call-value string",
                  title: e.platform,
                  children: e.platform,
                }),
              ],
            }),
          e.options.userAgent &&
            d.jsxs("div", {
              className: "call-line",
              children: [
                "user agent:",
                d.jsx("span", {
                  className: "call-value datetime",
                  title: e.options.userAgent,
                  children: e.options.userAgent,
                }),
              ],
            }),
          e.options.baseURL &&
            d.jsxs(d.Fragment, {
              children: [
                d.jsx("div", {
                  className: "call-section",
                  style: { paddingTop: 2 },
                  children: "Config",
                }),
                d.jsxs("div", {
                  className: "call-line",
                  children: [
                    "baseURL:",
                    d.jsx("a", {
                      className: "call-value string",
                      href: e.options.baseURL,
                      title: e.options.baseURL,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: e.options.baseURL,
                    }),
                  ],
                }),
              ],
            }),
          d.jsx("div", { className: "call-section", children: "Viewport" }),
          e.options.viewport &&
            d.jsxs("div", {
              className: "call-line",
              children: [
                "width:",
                d.jsx("span", {
                  className: "call-value number",
                  title: String(
                    !!((t = e.options.viewport) != null && t.width),
                  ),
                  children: e.options.viewport.width,
                }),
              ],
            }),
          e.options.viewport &&
            d.jsxs("div", {
              className: "call-line",
              children: [
                "height:",
                d.jsx("span", {
                  className: "call-value number",
                  title: String(
                    !!((n = e.options.viewport) != null && n.height),
                  ),
                  children: e.options.viewport.height,
                }),
              ],
            }),
          d.jsxs("div", {
            className: "call-line",
            children: [
              "is mobile:",
              d.jsx("span", {
                className: "call-value boolean",
                title: String(!!e.options.isMobile),
                children: String(!!e.options.isMobile),
              }),
            ],
          }),
          e.options.deviceScaleFactor &&
            d.jsxs("div", {
              className: "call-line",
              children: [
                "device scale:",
                d.jsx("span", {
                  className: "call-value number",
                  title: String(e.options.deviceScaleFactor),
                  children: String(e.options.deviceScaleFactor),
                }),
              ],
            }),
          d.jsx("div", { className: "call-section", children: "Counts" }),
          d.jsxs("div", {
            className: "call-line",
            children: [
              "pages:",
              d.jsx("span", {
                className: "call-value number",
                children: e.pages.length,
              }),
            ],
          }),
          d.jsxs("div", {
            className: "call-line",
            children: [
              "actions:",
              d.jsx("span", {
                className: "call-value number",
                children: e.actions.length,
              }),
            ],
          }),
          d.jsxs("div", {
            className: "call-line",
            children: [
              "events:",
              d.jsx("span", {
                className: "call-value number",
                children: e.events.length,
              }),
            ],
          }),
        ],
      })
    : d.jsx(d.Fragment, {});
};
async function Xo(e) {
  const t = new Image();
  return (
    e &&
      ((t.src = e),
      await new Promise((n, r) => {
        (t.onload = n), (t.onerror = n);
      })),
    t
  );
}
const Yl = {
    backgroundImage: `linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
    boxShadow: `rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`,
  },
  U1 = ({ diff: e, noTargetBlank: t }) => {
    const [n, r] = b.useState(e.diff ? "diff" : "actual"),
      [i, s] = b.useState(!1),
      [o, l] = b.useState(null),
      [a, u] = b.useState(null),
      [c, p] = b.useState(null),
      [f, g] = _n();
    b.useEffect(() => {
      (async () => {
        var E, C, A;
        l(await Xo((E = e.expected) == null ? void 0 : E.attachment.path)),
          u(await Xo((C = e.actual) == null ? void 0 : C.attachment.path)),
          p(await Xo((A = e.diff) == null ? void 0 : A.attachment.path));
      })();
    }, [e]);
    const y = o && a && c,
      w = y ? Math.max(o.naturalWidth, a.naturalWidth, 200) : 500,
      x = y ? Math.max(o.naturalHeight, a.naturalHeight, 200) : 500,
      h = Math.min(1, (f.width - 30) / w),
      m = Math.min(1, (f.width - 50) / w / 2),
      v = w * h,
      S = x * h,
      N = {
        flex: "none",
        margin: "0 10px",
        cursor: "pointer",
        userSelect: "none",
      };
    return d.jsx("div", {
      "data-testid": "test-result-image-mismatch",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "auto",
      },
      ref: g,
      children:
        y &&
        d.jsxs(d.Fragment, {
          children: [
            d.jsxs("div", {
              "data-testid": "test-result-image-mismatch-tabs",
              style: { display: "flex", margin: "10px 0 20px" },
              children: [
                e.diff &&
                  d.jsx("div", {
                    style: { ...N, fontWeight: n === "diff" ? 600 : "initial" },
                    onClick: () => r("diff"),
                    children: "Diff",
                  }),
                d.jsx("div", {
                  style: { ...N, fontWeight: n === "actual" ? 600 : "initial" },
                  onClick: () => r("actual"),
                  children: "Actual",
                }),
                d.jsx("div", {
                  style: {
                    ...N,
                    fontWeight: n === "expected" ? 600 : "initial",
                  },
                  onClick: () => r("expected"),
                  children: "Expected",
                }),
                d.jsx("div", {
                  style: { ...N, fontWeight: n === "sxs" ? 600 : "initial" },
                  onClick: () => r("sxs"),
                  children: "Side by side",
                }),
                d.jsx("div", {
                  style: { ...N, fontWeight: n === "slider" ? 600 : "initial" },
                  onClick: () => r("slider"),
                  children: "Slider",
                }),
              ],
            }),
            d.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                flex: "auto",
                minHeight: S + 60,
              },
              children: [
                e.diff &&
                  n === "diff" &&
                  d.jsx(Et, {
                    image: c,
                    alt: "Diff",
                    canvasWidth: v,
                    canvasHeight: S,
                    scale: h,
                  }),
                e.diff &&
                  n === "actual" &&
                  d.jsx(Et, {
                    image: a,
                    alt: "Actual",
                    canvasWidth: v,
                    canvasHeight: S,
                    scale: h,
                  }),
                e.diff &&
                  n === "expected" &&
                  d.jsx(Et, {
                    image: o,
                    alt: "Expected",
                    canvasWidth: v,
                    canvasHeight: S,
                    scale: h,
                  }),
                e.diff &&
                  n === "slider" &&
                  d.jsx(B1, {
                    expectedImage: o,
                    actualImage: a,
                    canvasWidth: v,
                    canvasHeight: S,
                    scale: h,
                  }),
                e.diff &&
                  n === "sxs" &&
                  d.jsxs("div", {
                    style: { display: "flex" },
                    children: [
                      d.jsx(Et, {
                        image: o,
                        title: "Expected",
                        canvasWidth: m * w,
                        canvasHeight: m * x,
                        scale: m,
                      }),
                      d.jsx(Et, {
                        image: i ? c : a,
                        title: i ? "Diff" : "Actual",
                        onClick: () => s(!i),
                        canvasWidth: m * w,
                        canvasHeight: m * x,
                        scale: m,
                      }),
                    ],
                  }),
                !e.diff &&
                  n === "actual" &&
                  d.jsx(Et, {
                    image: a,
                    title: "Actual",
                    canvasWidth: v,
                    canvasHeight: S,
                    scale: h,
                  }),
                !e.diff &&
                  n === "expected" &&
                  d.jsx(Et, {
                    image: o,
                    title: "Expected",
                    canvasWidth: v,
                    canvasHeight: S,
                    scale: h,
                  }),
                !e.diff &&
                  n === "sxs" &&
                  d.jsxs("div", {
                    style: { display: "flex" },
                    children: [
                      d.jsx(Et, {
                        image: o,
                        title: "Expected",
                        canvasWidth: m * w,
                        canvasHeight: m * x,
                        scale: m,
                      }),
                      d.jsx(Et, {
                        image: a,
                        title: "Actual",
                        canvasWidth: m * w,
                        canvasHeight: m * x,
                        scale: m,
                      }),
                    ],
                  }),
              ],
            }),
            d.jsxs("div", {
              style: {
                alignSelf: "start",
                lineHeight: "18px",
                marginLeft: "15px",
              },
              children: [
                d.jsx("div", {
                  children:
                    e.diff &&
                    d.jsx("a", {
                      target: "_blank",
                      href: e.diff.attachment.path,
                      rel: "noreferrer",
                      children: e.diff.attachment.name,
                    }),
                }),
                d.jsx("div", {
                  children: d.jsx("a", {
                    target: t ? "" : "_blank",
                    href: e.actual.attachment.path,
                    rel: "noreferrer",
                    children: e.actual.attachment.name,
                  }),
                }),
                d.jsx("div", {
                  children: d.jsx("a", {
                    target: t ? "" : "_blank",
                    href: e.expected.attachment.path,
                    rel: "noreferrer",
                    children: e.expected.attachment.name,
                  }),
                }),
              ],
            }),
          ],
        }),
    });
  },
  B1 = ({
    expectedImage: e,
    actualImage: t,
    canvasWidth: n,
    canvasHeight: r,
    scale: i,
  }) => {
    const s = { position: "absolute", top: 0, left: 0 },
      [o, l] = b.useState(n / 2),
      a =
        e.naturalWidth === t.naturalWidth &&
        e.naturalHeight === t.naturalHeight;
    return d.jsxs("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        userSelect: "none",
      },
      children: [
        d.jsxs("div", {
          style: { margin: 5 },
          children: [
            !a &&
              d.jsx("span", {
                style: { flex: "none", margin: "0 5px" },
                children: "Expected ",
              }),
            d.jsx("span", { children: e.naturalWidth }),
            d.jsx("span", {
              style: { flex: "none", margin: "0 5px" },
              children: "x",
            }),
            d.jsx("span", { children: e.naturalHeight }),
            !a &&
              d.jsx("span", {
                style: { flex: "none", margin: "0 5px 0 15px" },
                children: "Actual ",
              }),
            !a && d.jsx("span", { children: t.naturalWidth }),
            !a &&
              d.jsx("span", {
                style: { flex: "none", margin: "0 5px" },
                children: "x",
              }),
            !a && d.jsx("span", { children: t.naturalHeight }),
          ],
        }),
        d.jsxs("div", {
          style: {
            position: "relative",
            width: n,
            height: r,
            margin: 15,
            ...Yl,
          },
          children: [
            d.jsx(np, {
              orientation: "horizontal",
              offsets: [o],
              setOffsets: (u) => l(u[0]),
              resizerColor: "#57606a80",
              resizerWidth: 6,
            }),
            d.jsx("img", {
              alt: "Expected",
              style: { width: e.naturalWidth * i, height: e.naturalHeight * i },
              draggable: "false",
              src: e.src,
            }),
            d.jsx("div", {
              style: { ...s, bottom: 0, overflow: "hidden", width: o, ...Yl },
              children: d.jsx("img", {
                alt: "Actual",
                style: {
                  width: t.naturalWidth * i,
                  height: t.naturalHeight * i,
                },
                draggable: "false",
                src: t.src,
              }),
            }),
          ],
        }),
      ],
    });
  },
  Et = ({
    image: e,
    title: t,
    alt: n,
    canvasWidth: r,
    canvasHeight: i,
    scale: s,
    onClick: o,
  }) =>
    d.jsxs("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      },
      children: [
        d.jsxs("div", {
          style: { margin: 5 },
          children: [
            t &&
              d.jsx("span", {
                style: { flex: "none", margin: "0 5px" },
                children: t,
              }),
            d.jsx("span", { children: e.naturalWidth }),
            d.jsx("span", {
              style: { flex: "none", margin: "0 5px" },
              children: "x",
            }),
            d.jsx("span", { children: e.naturalHeight }),
          ],
        }),
        d.jsx("div", {
          style: {
            display: "flex",
            flex: "none",
            width: r,
            height: i,
            margin: 15,
            ...Yl,
          },
          children: d.jsx("img", {
            width: e.naturalWidth * s,
            height: e.naturalHeight * s,
            alt: t || n,
            style: { cursor: o ? "pointer" : "initial" },
            draggable: "false",
            src: e.src,
            onClick: o,
          }),
        }),
      ],
    });
function V1(e) {
  return !!e.match(
    /^(text\/.*?|application\/(json|(x-)?javascript|xml.*?|ecmascript|graphql|x-www-form-urlencoded)|image\/svg(\+xml)?|application\/.*?(\+json|\+xml))(;\s*charset=.*)?$/,
  );
}
const W1 = ({
  title: e,
  children: t,
  setExpanded: n,
  expanded: r,
  expandOnTitleClick: i,
}) =>
  d.jsxs("div", {
    className: Ne("expandable", r && "expanded"),
    children: [
      d.jsxs("div", {
        className: "expandable-title",
        onClick: () => i && n(!r),
        children: [
          d.jsx("div", {
            className: Ne(
              "codicon",
              r ? "codicon-chevron-down" : "codicon-chevron-right",
            ),
            style: {
              cursor: "pointer",
              color: "var(--vscode-foreground)",
              marginLeft: "5px",
            },
            onClick: () => !i && n(!r),
          }),
          e,
        ],
      }),
      r && d.jsx("div", { style: { marginLeft: 25 }, children: t }),
    ],
  });
function om(e) {
  const t = [];
  let n = 0,
    r;
  for (; (r = xd.exec(e)) !== null; ) {
    const s = e.substring(n, r.index);
    s && t.push(s);
    const o = r[0];
    t.push(q1(o)), (n = r.index + o.length);
  }
  const i = e.substring(n);
  return i && t.push(i), t;
}
function q1(e) {
  let t = e;
  return (
    t.startsWith("www.") && (t = "https://" + t),
    d.jsx("a", {
      href: t,
      target: "_blank",
      rel: "noopener noreferrer",
      children: e,
    })
  );
}
const X1 = ({ attachment: e }) => {
    const [t, n] = b.useState(!1),
      [r, i] = b.useState(null),
      [s, o] = b.useState(null),
      l = V1(e.contentType),
      a = !!e.sha1 || !!e.path;
    b.useEffect(() => {
      t &&
        r === null &&
        s === null &&
        (o("Loading ..."),
        fetch(ou(e))
          .then((c) => c.text())
          .then((c) => {
            i(c), o(null);
          })
          .catch((c) => {
            o("Failed to load: " + c.message);
          }));
    }, [t, r, s, e]);
    const u = d.jsxs("span", {
      style: { marginLeft: 5 },
      children: [
        om(e.name),
        " ",
        a &&
          d.jsx("a", {
            style: { marginLeft: 5 },
            href: ds(e),
            children: "download",
          }),
      ],
    });
    return !l || !a
      ? d.jsx("div", { style: { marginLeft: 20 }, children: u })
      : d.jsxs(d.Fragment, {
          children: [
            d.jsx(W1, {
              title: u,
              expanded: t,
              setExpanded: n,
              expandOnTitleClick: !0,
              children: s && d.jsx("i", { children: s }),
            }),
            t &&
              r !== null &&
              d.jsx(yi, {
                text: r,
                readOnly: !0,
                mimeType: e.contentType,
                linkify: !0,
                lineNumbers: !0,
                wrapLines: !1,
              }),
          ],
        });
  },
  Q1 = ({ model: e }) => {
    const {
      diffMap: t,
      screenshots: n,
      attachments: r,
    } = b.useMemo(() => {
      const i = new Set(),
        s = new Set();
      for (const l of (e == null ? void 0 : e.actions) || []) {
        const a = l.context.traceUrl;
        for (const u of l.attachments || []) i.add({ ...u, traceUrl: a });
      }
      const o = new Map();
      for (const l of i) {
        if (!l.path && !l.sha1) continue;
        const a = l.name.match(/^(.*)-(expected|actual|diff)\.png$/);
        if (a) {
          const u = a[1],
            c = a[2],
            p = o.get(u) || { expected: void 0, actual: void 0, diff: void 0 };
          (p[c] = l), o.set(u, p), i.delete(l);
        } else l.contentType.startsWith("image/") && (s.add(l), i.delete(l));
      }
      return { diffMap: o, attachments: i, screenshots: s };
    }, [e]);
    return !t.size && !n.size && !r.size
      ? d.jsx(kn, { text: "No attachments" })
      : d.jsxs("div", {
          className: "attachments-tab",
          children: [
            [...t.values()].map(({ expected: i, actual: s, diff: o }) =>
              d.jsxs(d.Fragment, {
                children: [
                  i &&
                    s &&
                    d.jsx("div", {
                      className: "attachments-section",
                      children: "Image diff",
                    }),
                  i &&
                    s &&
                    d.jsx(U1, {
                      noTargetBlank: !0,
                      diff: {
                        name: "Image diff",
                        expected: {
                          attachment: { ...i, path: ds(i) },
                          title: "Expected",
                        },
                        actual: { attachment: { ...s, path: ds(s) } },
                        diff: o
                          ? { attachment: { ...o, path: ds(o) } }
                          : void 0,
                      },
                    }),
                ],
              }),
            ),
            n.size
              ? d.jsx("div", {
                  className: "attachments-section",
                  children: "Screenshots",
                })
              : void 0,
            [...n.values()].map((i, s) => {
              const o = ou(i);
              return d.jsxs(
                "div",
                {
                  className: "attachment-item",
                  children: [
                    d.jsx("div", {
                      children: d.jsx("img", { draggable: "false", src: o }),
                    }),
                    d.jsx("div", {
                      children: d.jsx("a", {
                        target: "_blank",
                        href: o,
                        rel: "noreferrer",
                        children: i.name,
                      }),
                    }),
                  ],
                },
                `screenshot-${s}`,
              );
            }),
            r.size
              ? d.jsx("div", {
                  className: "attachments-section",
                  children: "Attachments",
                })
              : void 0,
            [...r.values()].map((i, s) =>
              d.jsx(
                "div",
                {
                  className: "attachment-item",
                  children: d.jsx(X1, { attachment: i }),
                },
                K1(i, s),
              ),
            ),
          ],
        });
  };
function ou(e, t = {}) {
  const n = new URLSearchParams(t);
  return e.sha1
    ? (n.set("trace", e.traceUrl), "sha1/" + e.sha1 + "?" + n.toString())
    : (n.set("path", e.path), "file?" + n.toString());
}
function ds(e) {
  const t = { dn: e.name };
  return e.contentType && (t.dct = e.contentType), ou(e, t);
}
function K1(e, t) {
  return t + "-" + (e.sha1 ? "sha1-" + e.sha1 : "path-" + e.path);
}
const G1 = ({ annotations: e }) =>
    e.length
      ? d.jsx("div", {
          className: "annotations-tab",
          children: e.map((t, n) =>
            d.jsxs(
              "div",
              {
                className: "annotation-item",
                children: [
                  d.jsx("span", {
                    style: { fontWeight: "bold" },
                    children: t.type,
                  }),
                  t.description &&
                    d.jsxs("span", { children: [": ", om(t.description)] }),
                ],
              },
              `annotation-${n}`,
            ),
          ),
        })
      : d.jsx(kn, { text: "No annotations" }),
  Y1 = ({
    sdkLanguage: e,
    setIsInspecting: t,
    highlightedLocator: n,
    setHighlightedLocator: r,
  }) =>
    d.jsxs("div", {
      className: "vbox",
      style: { backgroundColor: "var(--vscode-sideBar-background)" },
      children: [
        d.jsx("div", {
          style: {
            margin: "10px 0px 10px 10px",
            color: "var(--vscode-editorCodeLens-foreground)",
            flex: "none",
          },
          children: "Locator",
        }),
        d.jsx("div", {
          style: { margin: "0 10px 10px", flex: "auto" },
          children: d.jsx(yi, {
            text: n,
            language: e,
            focusOnChange: !0,
            isFocused: !0,
            wrapLines: !0,
            onChange: (i) => {
              r(i), t(!1);
            },
          }),
        }),
        d.jsx("div", {
          style: { position: "absolute", right: 5, top: 5 },
          children: d.jsx(en, {
            icon: "files",
            title: "Copy locator",
            onClick: () => {
              Bm(n);
            },
          }),
        }),
      ],
    });
function J1(e) {
  return e === "scheduled"
    ? "codicon-clock"
    : e === "running"
      ? "codicon-loading"
      : e === "failed"
        ? "codicon-error"
        : e === "passed"
          ? "codicon-check"
          : e === "skipped"
            ? "codicon-circle-slash"
            : "codicon-circle-outline";
}
function Z1(e) {
  return e === "scheduled"
    ? "Pending"
    : e === "running"
      ? "Running"
      : e === "failed"
        ? "Failed"
        : e === "passed"
          ? "Passed"
          : e === "skipped"
            ? "Skipped"
            : "Did not run";
}
const ex = ({ settings: e }) =>
    d.jsx("div", {
      className: "vbox settings-view",
      children: e.map(({ value: t, set: n, title: r }) =>
        d.jsx(
          "div",
          {
            className: "setting",
            children: d.jsxs("label", {
              children: [
                d.jsx("input", {
                  type: "checkbox",
                  checked: t,
                  onClick: () => n(!t),
                }),
                r,
              ],
            }),
          },
          r,
        ),
      ),
    }),
  ux = ({
    model: e,
    showSourcesFirst: t,
    rootDir: n,
    fallbackLocation: r,
    initialSelection: i,
    onSelectionChanged: s,
    isLive: o,
    status: l,
    annotations: a,
    inert: u,
    openPage: c,
    onOpenExternally: p,
    revealSource: f,
    showSettings: g,
  }) => {
    var hu;
    const [y, w] = b.useState(void 0),
      [x, h] = b.useState(void 0),
      [m, v] = b.useState(),
      [S, N] = b.useState(),
      [E, C] = b.useState(),
      [A, _] = b.useState("actions"),
      [T, j] = Or("propertiesTab", t ? "source" : "call"),
      [k, M] = b.useState(!1),
      [$, ce] = b.useState(""),
      Fe = e ? m || y : void 0,
      [me, I] = b.useState(),
      [R, z] = Or("propertiesSidebarLocation", "bottom"),
      [B, ne] = Or("show-route-actions", !0),
      Nn = b.useMemo(
        () =>
          ((e == null ? void 0 : e.actions) || []).filter((O) => B || !u0(O)),
        [e, B],
      ),
      _e = b.useCallback(
        (O) => {
          w(O), h(O == null ? void 0 : O.stack);
        },
        [w, h],
      ),
      pr = b.useMemo(() => (e == null ? void 0 : e.sources) || new Map(), [e]);
    b.useEffect(() => {
      I(void 0), h(void 0);
    }, [e]),
      b.useEffect(() => {
        if (y && e != null && e.actions.includes(y)) return;
        const O = e == null ? void 0 : e.failedAction();
        if (i && e != null && e.actions.includes(i)) _e(i);
        else if (O) _e(O);
        else if (e != null && e.actions.length) {
          let pu = e.actions.length - 1;
          for (let gr = 0; gr < e.actions.length; ++gr)
            if (e.actions[gr].apiName === "After Hooks" && gr) {
              pu = gr - 1;
              break;
            }
          _e(e.actions[pu]);
        }
      }, [e, y, _e, i]);
    const ft = b.useCallback(
        (O) => {
          _e(O), v(void 0), s == null || s(O);
        },
        [_e, s, v],
      ),
      je = b.useCallback(
        (O) => {
          j(O), O !== "inspector" && M(!1);
        },
        [j],
      ),
      lu = b.useCallback(
        (O) => {
          !k && O && je("inspector"), M(O);
        },
        [M, je, k],
      ),
      lm = b.useCallback(
        (O) => {
          ce(O), je("inspector");
        },
        [je],
      );
    b.useEffect(() => {
      f && je("source");
    }, [f, je]);
    const uo = oy(e, me),
      au = jy(e, me),
      uu = ry(e),
      am = b.useMemo(
        () =>
          (e == null
            ? void 0
            : e.actions.map((O) => O.attachments || []).flat()) || [],
        [e],
      ),
      Cn = (e == null ? void 0 : e.sdkLanguage) || "javascript",
      um = {
        id: "inspector",
        title: "Locator",
        render: () =>
          d.jsx(Y1, {
            sdkLanguage: Cn,
            setIsInspecting: lu,
            highlightedLocator: $,
            setHighlightedLocator: ce,
          }),
      },
      cm = {
        id: "call",
        title: "Call",
        render: () => d.jsx(Y0, { action: Fe, sdkLanguage: Cn }),
      },
      dm = {
        id: "log",
        title: "Log",
        render: () => d.jsx(Z0, { action: Fe, isLive: o }),
      },
      fm = {
        id: "errors",
        title: "Errors",
        errorCount: uu.errors.size,
        render: () =>
          d.jsx(iy, {
            errorsModel: uu,
            sdkLanguage: Cn,
            revealInSource: (O) => {
              O.action ? _e(O.action) : h(O.stack), je("source");
            },
          }),
      };
    let cu;
    !y && r && (cu = (hu = r.source) == null ? void 0 : hu.errors.length);
    const co = {
        id: "source",
        title: "Source",
        errorCount: cu,
        render: () =>
          d.jsx(M1, {
            stack: x,
            sources: pr,
            rootDir: n,
            stackFrameLocation: R === "bottom" ? "right" : "bottom",
            fallbackLocation: r,
            onOpenExternally: p,
          }),
      },
      hm = {
        id: "console",
        title: "Console",
        count: uo.entries.length,
        render: () =>
          d.jsx(ly, {
            consoleModel: uo,
            boundaries: fo,
            selectedTime: me,
            onAccepted: (O) =>
              I({ minimum: O.timestamp, maximum: O.timestamp }),
            onEntryHovered: C,
          }),
      },
      pm = {
        id: "network",
        title: "Network",
        count: au.resources.length,
        render: () =>
          d.jsx(My, { boundaries: fo, networkModel: au, onEntryHovered: N }),
      },
      mm = {
        id: "attachments",
        title: "Attachments",
        count: am.length,
        render: () => d.jsx(Q1, { model: e }),
      },
      mr = [um, cm, dm, fm, hm, pm, co, mm];
    if (a !== void 0) {
      const O = {
        id: "annotations",
        title: "Annotations",
        count: a.length,
        render: () => d.jsx(G1, { annotations: a }),
      };
      mr.push(O);
    }
    if (t) {
      const O = mr.indexOf(co);
      mr.splice(O, 1), mr.splice(1, 0, co);
    }
    const { boundaries: fo } = b.useMemo(() => {
      const O = {
        minimum: (e == null ? void 0 : e.startTime) || 0,
        maximum: (e == null ? void 0 : e.endTime) || 3e4,
      };
      return (
        O.minimum > O.maximum && ((O.minimum = 0), (O.maximum = 3e4)),
        (O.maximum += (O.maximum - O.minimum) / 20),
        { boundaries: O }
      );
    }, [e]);
    let xi = 0;
    !o && e && e.endTime >= 0
      ? (xi = e.endTime - e.startTime)
      : e && e.wallTime && (xi = Date.now() - e.wallTime);
    const du = {
        id: "actions",
        title: "Actions",
        component: d.jsxs("div", {
          className: "vbox",
          children: [
            l &&
              d.jsxs("div", {
                className: "workbench-run-status",
                children: [
                  d.jsx("span", { className: Ne("codicon", J1(l)) }),
                  d.jsx("div", { children: Z1(l) }),
                  d.jsx("div", { className: "spacer" }),
                  d.jsx("div", {
                    className: "workbench-run-duration",
                    children: xi ? et(xi) : "",
                  }),
                ],
              }),
            d.jsx(K0, {
              sdkLanguage: Cn,
              actions: Nn,
              selectedAction: e ? y : void 0,
              selectedTime: me,
              setSelectedTime: I,
              onSelected: ft,
              onHighlighted: v,
              revealConsole: () => je("console"),
              isLive: o,
            }),
          ],
        }),
      },
      fu = {
        id: "metadata",
        title: "Metadata",
        component: d.jsx(H1, { model: e }),
      },
      gm = {
        id: "settings",
        title: "Settings",
        component: d.jsx(ex, {
          settings: [{ value: B, set: ne, title: "Show route actions" }],
        }),
      };
    return d.jsxs("div", {
      className: "vbox workbench",
      ...(u ? { inert: "true" } : {}),
      children: [
        d.jsx(z1, {
          model: e,
          consoleEntries: uo.entries,
          boundaries: fo,
          highlightedAction: m,
          highlightedEntry: S,
          highlightedConsoleEntry: E,
          onSelected: ft,
          sdkLanguage: Cn,
          selectedTime: me,
          setSelectedTime: I,
        }),
        d.jsx(Os, {
          sidebarSize: 250,
          orientation: R === "bottom" ? "vertical" : "horizontal",
          settingName: "propertiesSidebar",
          main: d.jsx(Os, {
            sidebarSize: 250,
            orientation: "horizontal",
            sidebarIsFirst: !0,
            settingName: "actionListSidebar",
            main: d.jsx(C1, {
              action: Fe,
              sdkLanguage: Cn,
              testIdAttributeName:
                (e == null ? void 0 : e.testIdAttributeName) || "data-testid",
              isInspecting: k,
              setIsInspecting: lu,
              highlightedLocator: $,
              setHighlightedLocator: lm,
              openPage: c,
            }),
            sidebar: d.jsx(Vl, {
              tabs: g ? [du, fu, gm] : [du, fu],
              selectedTab: A,
              setSelectedTab: _,
            }),
          }),
          sidebar: d.jsx(Vl, {
            tabs: mr,
            selectedTab: T,
            setSelectedTab: je,
            rightToolbar: [
              R === "bottom"
                ? d.jsx(en, {
                    title: "Dock to right",
                    icon: "layout-sidebar-right-off",
                    onClick: () => {
                      z("right");
                    },
                  })
                : d.jsx(en, {
                    title: "Dock to bottom",
                    icon: "layout-panel-off",
                    onClick: () => {
                      z("bottom");
                    },
                  }),
            ],
            mode: R === "bottom" ? "default" : "select",
          }),
        }),
      ],
    });
  };
export {
  W1 as E,
  lx as M,
  at as R,
  Os as S,
  en as T,
  ux as W,
  hy as _,
  rx as a,
  Qo as b,
  Gv as c,
  ix as d,
  sx as e,
  Ne as f,
  Ka as g,
  J1 as h,
  q0 as i,
  d as j,
  ax as k,
  Or as l,
  et as m,
  ox as n,
  ex as o,
  wm as p,
  nx as q,
  b as r,
  an as s,
  Wm as t,
  _n as u,
};
