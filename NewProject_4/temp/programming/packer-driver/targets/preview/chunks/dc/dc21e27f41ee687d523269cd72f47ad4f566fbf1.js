System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

  function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen.return && (this.return = void 0); }

  function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }

  function _asyncGeneratorDelegate(inner) { var iter = {}, waiting = !1; function pump(key, value) { return waiting = !0, value = new Promise(function (resolve) { resolve(inner[key](value)); }), { done: !1, value: new _OverloadYield(value, 1) }; } return iter["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () { return this; }, iter.next = function (value) { return waiting ? (waiting = !1, value) : pump("next", value); }, "function" == typeof inner.throw && (iter.throw = function (value) { if (waiting) throw waiting = !1, value; return pump("throw", value); }), "function" == typeof inner.return && (iter.return = function (value) { return waiting ? (waiting = !1, value) : pump("return", value); }), iter; }

  function _OverloadYield(value, kind) { this.v = value, this.k = kind; }

  function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

  function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var uxuyTgSdk = (() => {
          var Oa = Object.create;
          var Nt = Object.defineProperty;
          var Pa = Object.getOwnPropertyDescriptor;
          var Na = Object.getOwnPropertyNames;
          var Ma = Object.getPrototypeOf,
              Ca = Object.prototype.hasOwnProperty;

          var L = (t, e) => () => (e || t((e = {
            exports: {}
          }).exports, e), e.exports),
              In = (t, e) => {
            for (var r in e) Nt(t, r, {
              get: e[r],
              enumerable: !0
            });
          },
              On = (t, e, r, n) => {
            if (e && typeof e == "object" || typeof e == "function") {
              var _loop = function _loop(o) {
                !Ca.call(t, o) && o !== r && Nt(t, o, {
                  get: () => e[o],
                  enumerable: !(n = Pa(e, o)) || n.enumerable
                });
              };

              for (var o of Na(e)) {
                _loop(o);
              }
            }

            return t;
          };

          var Pn = (t, e, r) => (r = t != null ? Oa(Ma(t)) : {}, On(e || !t || !t.__esModule ? Nt(r, "default", {
            value: t,
            enumerable: !0
          }) : r, t)),
              Ra = t => On(Nt({}, "__esModule", {
            value: !0
          }), t);

          var Mn = L((nu, vr) => {
            "use strict";

            var ka = Object.prototype.hasOwnProperty,
                ne = "~";

            function st() {}

            Object.create && (st.prototype = Object.create(null), new st().__proto__ || (ne = !1));

            function Da(t, e, r) {
              this.fn = t, this.context = e, this.once = r || !1;
            }

            function Nn(t, e, r, n, o) {
              if (typeof r != "function") throw new TypeError("The listener must be a function");
              var i = new Da(r, n || t, o),
                  a = ne ? ne + e : e;
              return t._events[a] ? t._events[a].fn ? t._events[a] = [t._events[a], i] : t._events[a].push(i) : (t._events[a] = i, t._eventsCount++), t;
            }

            function Mt(t, e) {
              --t._eventsCount === 0 ? t._events = new st() : delete t._events[e];
            }

            function te() {
              this._events = new st(), this._eventsCount = 0;
            }

            te.prototype.eventNames = function () {
              var e = [],
                  r,
                  n;
              if (this._eventsCount === 0) return e;

              for (n in r = this._events) ka.call(r, n) && e.push(ne ? n.slice(1) : n);

              return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(r)) : e;
            };

            te.prototype.listeners = function (e) {
              var r = ne ? ne + e : e,
                  n = this._events[r];
              if (!n) return [];
              if (n.fn) return [n.fn];

              for (var o = 0, i = n.length, a = new Array(i); o < i; o++) a[o] = n[o].fn;

              return a;
            };

            te.prototype.listenerCount = function (e) {
              var r = ne ? ne + e : e,
                  n = this._events[r];
              return n ? n.fn ? 1 : n.length : 0;
            };

            te.prototype.emit = function (e, r, n, o, i, a) {
              var s = ne ? ne + e : e;
              if (!this._events[s]) return !1;
              var u = this._events[s],
                  f = arguments.length,
                  d,
                  y;

              if (u.fn) {
                switch (u.once && this.removeListener(e, u.fn, void 0, !0), f) {
                  case 1:
                    return u.fn.call(u.context), !0;

                  case 2:
                    return u.fn.call(u.context, r), !0;

                  case 3:
                    return u.fn.call(u.context, r, n), !0;

                  case 4:
                    return u.fn.call(u.context, r, n, o), !0;

                  case 5:
                    return u.fn.call(u.context, r, n, o, i), !0;

                  case 6:
                    return u.fn.call(u.context, r, n, o, i, a), !0;
                }

                for (y = 1, d = new Array(f - 1); y < f; y++) d[y - 1] = arguments[y];

                u.fn.apply(u.context, d);
              } else {
                var b = u.length,
                    x;

                for (y = 0; y < b; y++) switch (u[y].once && this.removeListener(e, u[y].fn, void 0, !0), f) {
                  case 1:
                    u[y].fn.call(u[y].context);
                    break;

                  case 2:
                    u[y].fn.call(u[y].context, r);
                    break;

                  case 3:
                    u[y].fn.call(u[y].context, r, n);
                    break;

                  case 4:
                    u[y].fn.call(u[y].context, r, n, o);
                    break;

                  default:
                    if (!d) for (x = 1, d = new Array(f - 1); x < f; x++) d[x - 1] = arguments[x];
                    u[y].fn.apply(u[y].context, d);
                }
              }

              return !0;
            };

            te.prototype.on = function (e, r, n) {
              return Nn(this, e, r, n, !1);
            };

            te.prototype.once = function (e, r, n) {
              return Nn(this, e, r, n, !0);
            };

            te.prototype.removeListener = function (e, r, n, o) {
              var i = ne ? ne + e : e;
              if (!this._events[i]) return this;
              if (!r) return Mt(this, i), this;
              var a = this._events[i];
              if (a.fn) a.fn === r && (!o || a.once) && (!n || a.context === n) && Mt(this, i);else {
                for (var s = 0, u = [], f = a.length; s < f; s++) (a[s].fn !== r || o && !a[s].once || n && a[s].context !== n) && u.push(a[s]);

                u.length ? this._events[i] = u.length === 1 ? u[0] : u : Mt(this, i);
              }
              return this;
            };

            te.prototype.removeAllListeners = function (e) {
              var r;
              return e ? (r = ne ? ne + e : e, this._events[r] && Mt(this, r)) : (this._events = new st(), this._eventsCount = 0), this;
            };

            te.prototype.off = te.prototype.removeListener;
            te.prototype.addListener = te.prototype.on;
            te.prefixed = ne;
            te.EventEmitter = te;
            typeof vr != "undefined" && (vr.exports = te);
          });
          var Ao = L((Id, wo) => {
            "use strict";

            wo.exports = Error;
          });
          var So = L((Od, Eo) => {
            "use strict";

            Eo.exports = EvalError;
          });
          var To = L((Pd, _o) => {
            "use strict";

            _o.exports = RangeError;
          });
          var Io = L((Nd, xo) => {
            "use strict";

            xo.exports = ReferenceError;
          });
          var Yr = L((Md, Oo) => {
            "use strict";

            Oo.exports = SyntaxError;
          });
          var Be = L((Cd, Po) => {
            "use strict";

            Po.exports = TypeError;
          });
          var Mo = L((Rd, No) => {
            "use strict";

            No.exports = URIError;
          });
          var Ro = L((kd, Co) => {
            "use strict";

            Co.exports = function () {
              if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
              if (typeof Symbol.iterator == "symbol") return !0;
              var e = {},
                  r = Symbol("test"),
                  n = Object(r);
              if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
              var o = 42;
              e[r] = o;

              for (r in e) return !1;

              if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
              var i = Object.getOwnPropertySymbols(e);
              if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;

              if (typeof Object.getOwnPropertyDescriptor == "function") {
                var a = Object.getOwnPropertyDescriptor(e, r);
                if (a.value !== o || a.enumerable !== !0) return !1;
              }

              return !0;
            };
          });
          var Uo = L((Dd, Do) => {
            "use strict";

            var ko = typeof Symbol != "undefined" && Symbol,
                Qs = Ro();

            Do.exports = function () {
              return typeof ko != "function" || typeof Symbol != "function" || typeof ko("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Qs();
            };
          });
          var jo = L((Ud, Wo) => {
            "use strict";

            var Vr = {
              __proto__: null,
              foo: {}
            },
                Ks = Object;

            Wo.exports = function () {
              return {
                __proto__: Vr
              }.foo === Vr.foo && !(Vr instanceof Ks);
            };
          });
          var qo = L((Wd, Bo) => {
            "use strict";

            var Xs = "Function.prototype.bind called on incompatible ",
                Zs = Object.prototype.toString,
                el = Math.max,
                tl = "[object Function]",
                Lo = function Lo(e, r) {
              for (var n = [], o = 0; o < e.length; o += 1) n[o] = e[o];

              for (var i = 0; i < r.length; i += 1) n[i + e.length] = r[i];

              return n;
            },
                rl = function rl(e, r) {
              for (var n = [], o = r || 0, i = 0; o < e.length; o += 1, i += 1) n[i] = e[o];

              return n;
            },
                nl = function nl(t, e) {
              for (var r = "", n = 0; n < t.length; n += 1) r += t[n], n + 1 < t.length && (r += e);

              return r;
            };

            Bo.exports = function (e) {
              var r = this;
              if (typeof r != "function" || Zs.apply(r) !== tl) throw new TypeError(Xs + r);

              for (var n = rl(arguments, 1), o, i = function i() {
                if (this instanceof o) {
                  var d = r.apply(this, Lo(n, arguments));
                  return Object(d) === d ? d : this;
                }

                return r.apply(e, Lo(n, arguments));
              }, a = el(0, r.length - n.length), s = [], u = 0; u < a; u++) s[u] = "$" + u;

              if (o = Function("binder", "return function (" + nl(s, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
                var f = function f() {};

                f.prototype = r.prototype, o.prototype = new f(), f.prototype = null;
              }

              return o;
            };
          });
          var Qt = L((jd, Fo) => {
            "use strict";

            var ol = qo();
            Fo.exports = Function.prototype.bind || ol;
          });
          var Ho = L((Ld, zo) => {
            "use strict";

            var il = Function.prototype.call,
                al = Object.prototype.hasOwnProperty,
                sl = Qt();
            zo.exports = sl.call(il, al);
          });
          var Ne = L((Bd, Go) => {
            "use strict";

            var U,
                ll = Ao(),
                cl = So(),
                ul = To(),
                fl = Io(),
                He = Yr(),
                ze = Be(),
                pl = Mo(),
                Jo = Function,
                Jr = function Jr(t) {
              try {
                return Jo('"use strict"; return (' + t + ").constructor;")();
              } catch (e) {}
            },
                Oe = Object.getOwnPropertyDescriptor;

            if (Oe) try {
              Oe({}, "");
            } catch (t) {
              Oe = null;
            }

            var Gr = function Gr() {
              throw new ze();
            },
                dl = Oe ? function () {
              try {
                return arguments.callee, Gr;
              } catch (t) {
                try {
                  return Oe(arguments, "callee").get;
                } catch (e) {
                  return Gr;
                }
              }
            }() : Gr,
                qe = Uo()(),
                ml = jo()(),
                Z = Object.getPrototypeOf || (ml ? function (t) {
              return t.__proto__;
            } : null),
                Fe = {},
                hl = typeof Uint8Array == "undefined" || !Z ? U : Z(Uint8Array),
                Pe = {
              __proto__: null,
              "%AggregateError%": typeof AggregateError == "undefined" ? U : AggregateError,
              "%Array%": Array,
              "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? U : ArrayBuffer,
              "%ArrayIteratorPrototype%": qe && Z ? Z([][Symbol.iterator]()) : U,
              "%AsyncFromSyncIteratorPrototype%": U,
              "%AsyncFunction%": Fe,
              "%AsyncGenerator%": Fe,
              "%AsyncGeneratorFunction%": Fe,
              "%AsyncIteratorPrototype%": Fe,
              "%Atomics%": typeof Atomics == "undefined" ? U : Atomics,
              "%BigInt%": typeof BigInt == "undefined" ? U : BigInt,
              "%BigInt64Array%": typeof BigInt64Array == "undefined" ? U : BigInt64Array,
              "%BigUint64Array%": typeof BigUint64Array == "undefined" ? U : BigUint64Array,
              "%Boolean%": Boolean,
              "%DataView%": typeof DataView == "undefined" ? U : DataView,
              "%Date%": Date,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": ll,
              "%eval%": eval,
              "%EvalError%": cl,
              "%Float32Array%": typeof Float32Array == "undefined" ? U : Float32Array,
              "%Float64Array%": typeof Float64Array == "undefined" ? U : Float64Array,
              "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? U : FinalizationRegistry,
              "%Function%": Jo,
              "%GeneratorFunction%": Fe,
              "%Int8Array%": typeof Int8Array == "undefined" ? U : Int8Array,
              "%Int16Array%": typeof Int16Array == "undefined" ? U : Int16Array,
              "%Int32Array%": typeof Int32Array == "undefined" ? U : Int32Array,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%": qe && Z ? Z(Z([][Symbol.iterator]())) : U,
              "%JSON%": typeof JSON == "object" ? JSON : U,
              "%Map%": typeof Map == "undefined" ? U : Map,
              "%MapIteratorPrototype%": typeof Map == "undefined" || !qe || !Z ? U : Z(new Map()[Symbol.iterator]()),
              "%Math%": Math,
              "%Number%": Number,
              "%Object%": Object,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": typeof Promise == "undefined" ? U : Promise,
              "%Proxy%": typeof Proxy == "undefined" ? U : Proxy,
              "%RangeError%": ul,
              "%ReferenceError%": fl,
              "%Reflect%": typeof Reflect == "undefined" ? U : Reflect,
              "%RegExp%": RegExp,
              "%Set%": typeof Set == "undefined" ? U : Set,
              "%SetIteratorPrototype%": typeof Set == "undefined" || !qe || !Z ? U : Z(new Set()[Symbol.iterator]()),
              "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? U : SharedArrayBuffer,
              "%String%": String,
              "%StringIteratorPrototype%": qe && Z ? Z(""[Symbol.iterator]()) : U,
              "%Symbol%": qe ? Symbol : U,
              "%SyntaxError%": He,
              "%ThrowTypeError%": dl,
              "%TypedArray%": hl,
              "%TypeError%": ze,
              "%Uint8Array%": typeof Uint8Array == "undefined" ? U : Uint8Array,
              "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? U : Uint8ClampedArray,
              "%Uint16Array%": typeof Uint16Array == "undefined" ? U : Uint16Array,
              "%Uint32Array%": typeof Uint32Array == "undefined" ? U : Uint32Array,
              "%URIError%": pl,
              "%WeakMap%": typeof WeakMap == "undefined" ? U : WeakMap,
              "%WeakRef%": typeof WeakRef == "undefined" ? U : WeakRef,
              "%WeakSet%": typeof WeakSet == "undefined" ? U : WeakSet
            };

            if (Z) try {
              null.error;
            } catch (t) {
              $o = Z(Z(t)), Pe["%Error.prototype%"] = $o;
            }

            var $o,
                yl = function t(e) {
              var r;
              if (e === "%AsyncFunction%") r = Jr("async function () {}");else if (e === "%GeneratorFunction%") r = Jr("function* () {}");else if (e === "%AsyncGeneratorFunction%") r = Jr("async function* () {}");else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype);
              } else if (e === "%AsyncIteratorPrototype%") {
                var o = t("%AsyncGenerator%");
                o && Z && (r = Z(o.prototype));
              }
              return Pe[e] = r, r;
            },
                Yo = {
              __proto__: null,
              "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
              "%ArrayPrototype%": ["Array", "prototype"],
              "%ArrayProto_entries%": ["Array", "prototype", "entries"],
              "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
              "%ArrayProto_keys%": ["Array", "prototype", "keys"],
              "%ArrayProto_values%": ["Array", "prototype", "values"],
              "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
              "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
              "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
              "%BooleanPrototype%": ["Boolean", "prototype"],
              "%DataViewPrototype%": ["DataView", "prototype"],
              "%DatePrototype%": ["Date", "prototype"],
              "%ErrorPrototype%": ["Error", "prototype"],
              "%EvalErrorPrototype%": ["EvalError", "prototype"],
              "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
              "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
              "%FunctionPrototype%": ["Function", "prototype"],
              "%Generator%": ["GeneratorFunction", "prototype"],
              "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
              "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
              "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
              "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
              "%JSONParse%": ["JSON", "parse"],
              "%JSONStringify%": ["JSON", "stringify"],
              "%MapPrototype%": ["Map", "prototype"],
              "%NumberPrototype%": ["Number", "prototype"],
              "%ObjectPrototype%": ["Object", "prototype"],
              "%ObjProto_toString%": ["Object", "prototype", "toString"],
              "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
              "%PromisePrototype%": ["Promise", "prototype"],
              "%PromiseProto_then%": ["Promise", "prototype", "then"],
              "%Promise_all%": ["Promise", "all"],
              "%Promise_reject%": ["Promise", "reject"],
              "%Promise_resolve%": ["Promise", "resolve"],
              "%RangeErrorPrototype%": ["RangeError", "prototype"],
              "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
              "%RegExpPrototype%": ["RegExp", "prototype"],
              "%SetPrototype%": ["Set", "prototype"],
              "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
              "%StringPrototype%": ["String", "prototype"],
              "%SymbolPrototype%": ["Symbol", "prototype"],
              "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
              "%TypedArrayPrototype%": ["TypedArray", "prototype"],
              "%TypeErrorPrototype%": ["TypeError", "prototype"],
              "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
              "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
              "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
              "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
              "%URIErrorPrototype%": ["URIError", "prototype"],
              "%WeakMapPrototype%": ["WeakMap", "prototype"],
              "%WeakSetPrototype%": ["WeakSet", "prototype"]
            },
                wt = Qt(),
                Kt = Ho(),
                gl = wt.call(Function.call, Array.prototype.concat),
                bl = wt.call(Function.apply, Array.prototype.splice),
                Vo = wt.call(Function.call, String.prototype.replace),
                Xt = wt.call(Function.call, String.prototype.slice),
                vl = wt.call(Function.call, RegExp.prototype.exec),
                wl = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                Al = /\\(\\)?/g,
                El = function El(e) {
              var r = Xt(e, 0, 1),
                  n = Xt(e, -1);
              if (r === "%" && n !== "%") throw new He("invalid intrinsic syntax, expected closing `%`");
              if (n === "%" && r !== "%") throw new He("invalid intrinsic syntax, expected opening `%`");
              var o = [];
              return Vo(e, wl, function (i, a, s, u) {
                o[o.length] = s ? Vo(u, Al, "$1") : a || i;
              }), o;
            },
                Sl = function Sl(e, r) {
              var n = e,
                  o;

              if (Kt(Yo, n) && (o = Yo[n], n = "%" + o[0] + "%"), Kt(Pe, n)) {
                var i = Pe[n];
                if (i === Fe && (i = yl(n)), typeof i == "undefined" && !r) throw new ze("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                  alias: o,
                  name: n,
                  value: i
                };
              }

              throw new He("intrinsic " + e + " does not exist!");
            };

            Go.exports = function (e, r) {
              if (typeof e != "string" || e.length === 0) throw new ze("intrinsic name must be a non-empty string");
              if (arguments.length > 1 && typeof r != "boolean") throw new ze('"allowMissing" argument must be a boolean');
              if (vl(/^%?[^%]*%?$/, e) === null) throw new He("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
              var n = El(e),
                  o = n.length > 0 ? n[0] : "",
                  i = Sl("%" + o + "%", r),
                  a = i.name,
                  s = i.value,
                  u = !1,
                  f = i.alias;
              f && (o = f[0], bl(n, gl([0, 1], f)));

              for (var d = 1, y = !0; d < n.length; d += 1) {
                var b = n[d],
                    x = Xt(b, 0, 1),
                    v = Xt(b, -1);
                if ((x === '"' || x === "'" || x === "`" || v === '"' || v === "'" || v === "`") && x !== v) throw new He("property names with quotes must have matching quotes");
                if ((b === "constructor" || !y) && (u = !0), o += "." + b, a = "%" + o + "%", Kt(Pe, a)) s = Pe[a];else if (s != null) {
                  if (!(b in s)) {
                    if (!r) throw new ze("base intrinsic for " + e + " exists, but the property is not available.");
                    return;
                  }

                  if (Oe && d + 1 >= n.length) {
                    var T = Oe(s, b);
                    y = !!T, y && "get" in T && !("originalValue" in T.get) ? s = T.get : s = s[b];
                  } else y = Kt(s, b), s = s[b];

                  y && !u && (Pe[a] = s);
                }
              }

              return s;
            };
          });
          var er = L((qd, Qo) => {
            "use strict";

            var _l = Ne(),
                Zt = _l("%Object.defineProperty%", !0) || !1;

            if (Zt) try {
              Zt({}, "a", {
                value: 1
              });
            } catch (t) {
              Zt = !1;
            }
            Qo.exports = Zt;
          });
          var Qr = L((Fd, Ko) => {
            "use strict";

            var Tl = Ne(),
                tr = Tl("%Object.getOwnPropertyDescriptor%", !0);
            if (tr) try {
              tr([], "length");
            } catch (t) {
              tr = null;
            }
            Ko.exports = tr;
          });
          var ti = L((zd, ei) => {
            "use strict";

            var Xo = er(),
                xl = Yr(),
                $e = Be(),
                Zo = Qr();

            ei.exports = function (e, r, n) {
              if (!e || typeof e != "object" && typeof e != "function") throw new $e("`obj` must be an object or a function`");
              if (typeof r != "string" && typeof r != "symbol") throw new $e("`property` must be a string or a symbol`");
              if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new $e("`nonEnumerable`, if provided, must be a boolean or null");
              if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new $e("`nonWritable`, if provided, must be a boolean or null");
              if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new $e("`nonConfigurable`, if provided, must be a boolean or null");
              if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new $e("`loose`, if provided, must be a boolean");
              var o = arguments.length > 3 ? arguments[3] : null,
                  i = arguments.length > 4 ? arguments[4] : null,
                  a = arguments.length > 5 ? arguments[5] : null,
                  s = arguments.length > 6 ? arguments[6] : !1,
                  u = !!Zo && Zo(e, r);
              if (Xo) Xo(e, r, {
                configurable: a === null && u ? u.configurable : !a,
                enumerable: o === null && u ? u.enumerable : !o,
                value: n,
                writable: i === null && u ? u.writable : !i
              });else if (s || !o && !i && !a) e[r] = n;else throw new xl("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
            };
          });
          var oi = L((Hd, ni) => {
            "use strict";

            var Kr = er(),
                ri = function ri() {
              return !!Kr;
            };

            ri.hasArrayLengthDefineBug = function () {
              if (!Kr) return null;

              try {
                return Kr([], "length", {
                  value: 1
                }).length !== 1;
              } catch (e) {
                return !0;
              }
            };

            ni.exports = ri;
          });
          var ci = L(($d, li) => {
            "use strict";

            var Il = Ne(),
                ii = ti(),
                Ol = oi()(),
                ai = Qr(),
                si = Be(),
                Pl = Il("%Math.floor%");

            li.exports = function (e, r) {
              if (typeof e != "function") throw new si("`fn` is not a function");
              if (typeof r != "number" || r < 0 || r > 4294967295 || Pl(r) !== r) throw new si("`length` must be a positive 32-bit integer");
              var n = arguments.length > 2 && !!arguments[2],
                  o = !0,
                  i = !0;

              if ("length" in e && ai) {
                var a = ai(e, "length");
                a && !a.configurable && (o = !1), a && !a.writable && (i = !1);
              }

              return (o || i || !n) && (Ol ? ii(e, "length", r, !0, !0) : ii(e, "length", r)), e;
            };
          });
          var hi = L((Yd, rr) => {
            "use strict";

            var Xr = Qt(),
                nr = Ne(),
                Nl = ci(),
                Ml = Be(),
                pi = nr("%Function.prototype.apply%"),
                di = nr("%Function.prototype.call%"),
                mi = nr("%Reflect.apply%", !0) || Xr.call(di, pi),
                ui = er(),
                Cl = nr("%Math.max%");

            rr.exports = function (e) {
              if (typeof e != "function") throw new Ml("a function is required");
              var r = mi(Xr, di, arguments);
              return Nl(r, 1 + Cl(0, e.length - (arguments.length - 1)), !0);
            };

            var fi = function fi() {
              return mi(Xr, pi, arguments);
            };

            ui ? ui(rr.exports, "apply", {
              value: fi
            }) : rr.exports.apply = fi;
          });
          var vi = L((Vd, bi) => {
            "use strict";

            var yi = Ne(),
                gi = hi(),
                Rl = gi(yi("String.prototype.indexOf"));

            bi.exports = function (e, r) {
              var n = yi(e, !!r);
              return typeof n == "function" && Rl(e, ".prototype.") > -1 ? gi(n) : n;
            };
          });
          var wi = L(() => {
            "use strict";
          });
          var Bi = L((Qd, Li) => {
            "use strict";

            var cn = typeof Map == "function" && Map.prototype,
                Zr = Object.getOwnPropertyDescriptor && cn ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                ir = cn && Zr && typeof Zr.get == "function" ? Zr.get : null,
                Ai = cn && Map.prototype.forEach,
                un = typeof Set == "function" && Set.prototype,
                en = Object.getOwnPropertyDescriptor && un ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                ar = un && en && typeof en.get == "function" ? en.get : null,
                Ei = un && Set.prototype.forEach,
                kl = typeof WeakMap == "function" && WeakMap.prototype,
                Et = kl ? WeakMap.prototype.has : null,
                Dl = typeof WeakSet == "function" && WeakSet.prototype,
                St = Dl ? WeakSet.prototype.has : null,
                Ul = typeof WeakRef == "function" && WeakRef.prototype,
                Si = Ul ? WeakRef.prototype.deref : null,
                Wl = Boolean.prototype.valueOf,
                jl = Object.prototype.toString,
                Ll = Function.prototype.toString,
                Bl = String.prototype.match,
                fn = String.prototype.slice,
                Ee = String.prototype.replace,
                ql = String.prototype.toUpperCase,
                _i = String.prototype.toLowerCase,
                Ri = RegExp.prototype.test,
                Ti = Array.prototype.concat,
                me = Array.prototype.join,
                Fl = Array.prototype.slice,
                xi = Math.floor,
                nn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
                tn = Object.getOwnPropertySymbols,
                on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
                Ye = typeof Symbol == "function" && typeof Symbol.iterator == "object",
                re = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ye || "symbol") ? Symbol.toStringTag : null,
                ki = Object.prototype.propertyIsEnumerable,
                Ii = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (t) {
              return t.__proto__;
            } : null);

            function Oi(t, e) {
              if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Ri.call(/e/, e)) return e;
              var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;

              if (typeof t == "number") {
                var n = t < 0 ? -xi(-t) : xi(t);

                if (n !== t) {
                  var o = String(n),
                      i = fn.call(e, o.length + 1);
                  return Ee.call(o, r, "$&_") + "." + Ee.call(Ee.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
                }
              }

              return Ee.call(e, r, "$&_");
            }

            var an = wi(),
                Pi = an.custom,
                Ni = Ui(Pi) ? Pi : null;

            Li.exports = function t(e, r, n, o) {
              var i = r || {};
              if (Ae(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
              if (Ae(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
              var a = Ae(i, "customInspect") ? i.customInspect : !0;
              if (typeof a != "boolean" && a !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
              if (Ae(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
              if (Ae(i, "numericSeparator") && typeof i.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
              var s = i.numericSeparator;
              if (typeof e == "undefined") return "undefined";
              if (e === null) return "null";
              if (typeof e == "boolean") return e ? "true" : "false";
              if (typeof e == "string") return ji(e, i);

              if (typeof e == "number") {
                if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
                var u = String(e);
                return s ? Oi(e, u) : u;
              }

              if (typeof e == "bigint") {
                var f = String(e) + "n";
                return s ? Oi(e, f) : f;
              }

              var d = typeof i.depth == "undefined" ? 5 : i.depth;
              if (typeof n == "undefined" && (n = 0), n >= d && d > 0 && typeof e == "object") return sn(e) ? "[Array]" : "[Object]";
              var y = ac(i, n);
              if (typeof o == "undefined") o = [];else if (Wi(o, e) >= 0) return "[Circular]";

              function b(ee, se, ae) {
                if (se && (o = Fl.call(o), o.push(se)), ae) {
                  var be = {
                    depth: i.depth
                  };
                  return Ae(i, "quoteStyle") && (be.quoteStyle = i.quoteStyle), t(ee, be, n + 1, o);
                }

                return t(ee, i, n + 1, o);
              }

              if (typeof e == "function" && !Mi(e)) {
                var x = Kl(e),
                    v = or(e, b);
                return "[Function" + (x ? ": " + x : " (anonymous)") + "]" + (v.length > 0 ? " { " + me.call(v, ", ") + " }" : "");
              }

              if (Ui(e)) {
                var T = Ye ? Ee.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : on.call(e);
                return typeof e == "object" && !Ye ? At(T) : T;
              }

              if (nc(e)) {
                for (var E = "<" + _i.call(String(e.nodeName)), W = e.attributes || [], j = 0; j < W.length; j++) E += " " + W[j].name + "=" + Di(zl(W[j].value), "double", i);

                return E += ">", e.childNodes && e.childNodes.length && (E += "..."), E += "</" + _i.call(String(e.nodeName)) + ">", E;
              }

              if (sn(e)) {
                if (e.length === 0) return "[]";
                var h = or(e, b);
                return y && !ic(h) ? "[" + ln(h, y) + "]" : "[ " + me.call(h, ", ") + " ]";
              }

              if ($l(e)) {
                var w = or(e, b);
                return !("cause" in Error.prototype) && "cause" in e && !ki.call(e, "cause") ? "{ [" + String(e) + "] " + me.call(Ti.call("[cause]: " + b(e.cause), w), ", ") + " }" : w.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + me.call(w, ", ") + " }";
              }

              if (typeof e == "object" && a) {
                if (Ni && typeof e[Ni] == "function" && an) return an(e, {
                  depth: d - n
                });
                if (a !== "symbol" && typeof e.inspect == "function") return e.inspect();
              }

              if (Xl(e)) {
                var _ = [];
                return Ai && Ai.call(e, function (ee, se) {
                  _.push(b(se, e, !0) + " => " + b(ee, e));
                }), Ci("Map", ir.call(e), _, y);
              }

              if (tc(e)) {
                var O = [];
                return Ei && Ei.call(e, function (ee) {
                  O.push(b(ee, e));
                }), Ci("Set", ar.call(e), O, y);
              }

              if (Zl(e)) return rn("WeakMap");
              if (rc(e)) return rn("WeakSet");
              if (ec(e)) return rn("WeakRef");
              if (Vl(e)) return At(b(Number(e)));
              if (Gl(e)) return At(b(nn.call(e)));
              if (Jl(e)) return At(Wl.call(e));
              if (Yl(e)) return At(b(String(e)));
              if (typeof window != "undefined" && e === window) return "{ [object Window] }";
              if (typeof globalThis != "undefined" && e === globalThis || typeof global != "undefined" && e === global) return "{ [object globalThis] }";

              if (!Hl(e) && !Mi(e)) {
                var C = or(e, b),
                    k = Ii ? Ii(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                    V = e instanceof Object ? "" : "null prototype",
                    F = !k && re && Object(e) === e && re in e ? fn.call(Se(e), 8, -1) : V ? "Object" : "",
                    _e = k || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                    ie = _e + (F || V ? "[" + me.call(Ti.call([], F || [], V || []), ": ") + "] " : "");

                return C.length === 0 ? ie + "{}" : y ? ie + "{" + ln(C, y) + "}" : ie + "{ " + me.call(C, ", ") + " }";
              }

              return String(e);
            };

            function Di(t, e, r) {
              var n = (r.quoteStyle || e) === "double" ? '"' : "'";
              return n + t + n;
            }

            function zl(t) {
              return Ee.call(String(t), /"/g, "&quot;");
            }

            function sn(t) {
              return Se(t) === "[object Array]" && (!re || !(typeof t == "object" && re in t));
            }

            function Hl(t) {
              return Se(t) === "[object Date]" && (!re || !(typeof t == "object" && re in t));
            }

            function Mi(t) {
              return Se(t) === "[object RegExp]" && (!re || !(typeof t == "object" && re in t));
            }

            function $l(t) {
              return Se(t) === "[object Error]" && (!re || !(typeof t == "object" && re in t));
            }

            function Yl(t) {
              return Se(t) === "[object String]" && (!re || !(typeof t == "object" && re in t));
            }

            function Vl(t) {
              return Se(t) === "[object Number]" && (!re || !(typeof t == "object" && re in t));
            }

            function Jl(t) {
              return Se(t) === "[object Boolean]" && (!re || !(typeof t == "object" && re in t));
            }

            function Ui(t) {
              if (Ye) return t && typeof t == "object" && t instanceof Symbol;
              if (typeof t == "symbol") return !0;
              if (!t || typeof t != "object" || !on) return !1;

              try {
                return on.call(t), !0;
              } catch (e) {}

              return !1;
            }

            function Gl(t) {
              if (!t || typeof t != "object" || !nn) return !1;

              try {
                return nn.call(t), !0;
              } catch (e) {}

              return !1;
            }

            var Ql = Object.prototype.hasOwnProperty || function (t) {
              return t in this;
            };

            function Ae(t, e) {
              return Ql.call(t, e);
            }

            function Se(t) {
              return jl.call(t);
            }

            function Kl(t) {
              if (t.name) return t.name;
              var e = Bl.call(Ll.call(t), /^function\s*([\w$]+)/);
              return e ? e[1] : null;
            }

            function Wi(t, e) {
              if (t.indexOf) return t.indexOf(e);

              for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;

              return -1;
            }

            function Xl(t) {
              if (!ir || !t || typeof t != "object") return !1;

              try {
                ir.call(t);

                try {
                  ar.call(t);
                } catch (e) {
                  return !0;
                }

                return t instanceof Map;
              } catch (e) {}

              return !1;
            }

            function Zl(t) {
              if (!Et || !t || typeof t != "object") return !1;

              try {
                Et.call(t, Et);

                try {
                  St.call(t, St);
                } catch (e) {
                  return !0;
                }

                return t instanceof WeakMap;
              } catch (e) {}

              return !1;
            }

            function ec(t) {
              if (!Si || !t || typeof t != "object") return !1;

              try {
                return Si.call(t), !0;
              } catch (e) {}

              return !1;
            }

            function tc(t) {
              if (!ar || !t || typeof t != "object") return !1;

              try {
                ar.call(t);

                try {
                  ir.call(t);
                } catch (e) {
                  return !0;
                }

                return t instanceof Set;
              } catch (e) {}

              return !1;
            }

            function rc(t) {
              if (!St || !t || typeof t != "object") return !1;

              try {
                St.call(t, St);

                try {
                  Et.call(t, Et);
                } catch (e) {
                  return !0;
                }

                return t instanceof WeakSet;
              } catch (e) {}

              return !1;
            }

            function nc(t) {
              return !t || typeof t != "object" ? !1 : typeof HTMLElement != "undefined" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
            }

            function ji(t, e) {
              if (t.length > e.maxStringLength) {
                var r = t.length - e.maxStringLength,
                    n = "... " + r + " more character" + (r > 1 ? "s" : "");
                return ji(fn.call(t, 0, e.maxStringLength), e) + n;
              }

              var o = Ee.call(Ee.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, oc);
              return Di(o, "single", e);
            }

            function oc(t) {
              var e = t.charCodeAt(0),
                  r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
              }[e];
              return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + ql.call(e.toString(16));
            }

            function At(t) {
              return "Object(" + t + ")";
            }

            function rn(t) {
              return t + " { ? }";
            }

            function Ci(t, e, r, n) {
              var o = n ? ln(r, n) : me.call(r, ", ");
              return t + " (" + e + ") {" + o + "}";
            }

            function ic(t) {
              for (var e = 0; e < t.length; e++) if (Wi(t[e], "\n ") >= 0) return !1;

              return !0;
            }

            function ac(t, e) {
              var r;
              if (t.indent === "	") r = "	";else if (typeof t.indent == "number" && t.indent > 0) r = me.call(Array(t.indent + 1), " ");else return null;
              return {
                base: r,
                prev: me.call(Array(e + 1), r)
              };
            }

            function ln(t, e) {
              if (t.length === 0) return "";
              var r = "\n " + e.prev + e.base;
              return r + me.call(t, "," + r) + "\n " + e.prev;
            }

            function or(t, e) {
              var r = sn(t),
                  n = [];

              if (r) {
                n.length = t.length;

                for (var o = 0; o < t.length; o++) n[o] = Ae(t, o) ? e(t[o], t) : "";
              }

              var i = typeof tn == "function" ? tn(t) : [],
                  a;

              if (Ye) {
                a = {};

                for (var s = 0; s < i.length; s++) a["$" + i[s]] = i[s];
              }

              for (var u in t) Ae(t, u) && (r && String(Number(u)) === u && u < t.length || Ye && a["$" + u] instanceof Symbol || (Ri.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));

              if (typeof tn == "function") for (var f = 0; f < i.length; f++) ki.call(t, i[f]) && n.push("[" + e(i[f]) + "]: " + e(t[i[f]], t));
              return n;
            }
          });
          var zi = L((Kd, Fi) => {
            "use strict";

            var qi = Ne(),
                Ve = vi(),
                sc = Bi(),
                lc = Be(),
                sr = qi("%WeakMap%", !0),
                lr = qi("%Map%", !0),
                cc = Ve("WeakMap.prototype.get", !0),
                uc = Ve("WeakMap.prototype.set", !0),
                fc = Ve("WeakMap.prototype.has", !0),
                pc = Ve("Map.prototype.get", !0),
                dc = Ve("Map.prototype.set", !0),
                mc = Ve("Map.prototype.has", !0),
                pn = function pn(t, e) {
              for (var r = t, n; (n = r.next) !== null; r = n) if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n;
            },
                hc = function hc(t, e) {
              var r = pn(t, e);
              return r && r.value;
            },
                yc = function yc(t, e, r) {
              var n = pn(t, e);
              n ? n.value = r : t.next = {
                key: e,
                next: t.next,
                value: r
              };
            },
                gc = function gc(t, e) {
              return !!pn(t, e);
            };

            Fi.exports = function () {
              var e,
                  r,
                  n,
                  o = {
                assert: function assert(i) {
                  if (!o.has(i)) throw new lc("Side channel does not contain " + sc(i));
                },
                get: function get(i) {
                  if (sr && i && (typeof i == "object" || typeof i == "function")) {
                    if (e) return cc(e, i);
                  } else if (lr) {
                    if (r) return pc(r, i);
                  } else if (n) return hc(n, i);
                },
                has: function has(i) {
                  if (sr && i && (typeof i == "object" || typeof i == "function")) {
                    if (e) return fc(e, i);
                  } else if (lr) {
                    if (r) return mc(r, i);
                  } else if (n) return gc(n, i);

                  return !1;
                },
                set: function set(i, a) {
                  sr && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new sr()), uc(e, i, a)) : lr ? (r || (r = new lr()), dc(r, i, a)) : (n || (n = {
                    key: {},
                    next: null
                  }), yc(n, i, a));
                }
              };
              return o;
            };
          });
          var cr = L((Xd, Hi) => {
            "use strict";

            var bc = String.prototype.replace,
                vc = /%20/g,
                dn = {
              RFC1738: "RFC1738",
              RFC3986: "RFC3986"
            };
            Hi.exports = {
              default: dn.RFC3986,
              formatters: {
                RFC1738: function RFC1738(t) {
                  return bc.call(t, vc, "+");
                },
                RFC3986: function RFC3986(t) {
                  return String(t);
                }
              },
              RFC1738: dn.RFC1738,
              RFC3986: dn.RFC3986
            };
          });
          var yn = L((Zd, Yi) => {
            "use strict";

            var wc = cr(),
                mn = Object.prototype.hasOwnProperty,
                Me = Array.isArray,
                he = function () {
              for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());

              return t;
            }(),
                Ac = function Ac(e) {
              for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];

                if (Me(n)) {
                  for (var o = [], i = 0; i < n.length; ++i) typeof n[i] != "undefined" && o.push(n[i]);

                  r.obj[r.prop] = o;
                }
              }
            },
                $i = function $i(e, r) {
              for (var n = r && r.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o) typeof e[o] != "undefined" && (n[o] = e[o]);

              return n;
            },
                Ec = function t(e, r, n) {
              if (!r) return e;

              if (typeof r != "object") {
                if (Me(e)) e.push(r);else if (e && typeof e == "object") (n && (n.plainObjects || n.allowPrototypes) || !mn.call(Object.prototype, r)) && (e[r] = !0);else return [e, r];
                return e;
              }

              if (!e || typeof e != "object") return [e].concat(r);
              var o = e;
              return Me(e) && !Me(r) && (o = $i(e, n)), Me(e) && Me(r) ? (r.forEach(function (i, a) {
                if (mn.call(e, a)) {
                  var s = e[a];
                  s && typeof s == "object" && i && typeof i == "object" ? e[a] = t(s, i, n) : e.push(i);
                } else e[a] = i;
              }), e) : Object.keys(r).reduce(function (i, a) {
                var s = r[a];
                return mn.call(i, a) ? i[a] = t(i[a], s, n) : i[a] = s, i;
              }, o);
            },
                Sc = function Sc(e, r) {
              return Object.keys(r).reduce(function (n, o) {
                return n[o] = r[o], n;
              }, e);
            },
                _c = function _c(t, e, r) {
              var n = t.replace(/\+/g, " ");
              if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);

              try {
                return decodeURIComponent(n);
              } catch (o) {
                return n;
              }
            },
                hn = 1024,
                Tc = function Tc(e, r, n, o, i) {
              if (e.length === 0) return e;
              var a = e;
              if (typeof e == "symbol" ? a = Symbol.prototype.toString.call(e) : typeof e != "string" && (a = String(e)), n === "iso-8859-1") return escape(a).replace(/%u[0-9a-f]{4}/gi, function (x) {
                return "%26%23" + parseInt(x.slice(2), 16) + "%3B";
              });

              for (var s = "", u = 0; u < a.length; u += hn) {
                for (var f = a.length >= hn ? a.slice(u, u + hn) : a, d = [], y = 0; y < f.length; ++y) {
                  var b = f.charCodeAt(y);

                  if (b === 45 || b === 46 || b === 95 || b === 126 || b >= 48 && b <= 57 || b >= 65 && b <= 90 || b >= 97 && b <= 122 || i === wc.RFC1738 && (b === 40 || b === 41)) {
                    d[d.length] = f.charAt(y);
                    continue;
                  }

                  if (b < 128) {
                    d[d.length] = he[b];
                    continue;
                  }

                  if (b < 2048) {
                    d[d.length] = he[192 | b >> 6] + he[128 | b & 63];
                    continue;
                  }

                  if (b < 55296 || b >= 57344) {
                    d[d.length] = he[224 | b >> 12] + he[128 | b >> 6 & 63] + he[128 | b & 63];
                    continue;
                  }

                  y += 1, b = 65536 + ((b & 1023) << 10 | f.charCodeAt(y) & 1023), d[d.length] = he[240 | b >> 18] + he[128 | b >> 12 & 63] + he[128 | b >> 6 & 63] + he[128 | b & 63];
                }

                s += d.join("");
              }

              return s;
            },
                xc = function xc(e) {
              for (var r = [{
                obj: {
                  o: e
                },
                prop: "o"
              }], n = [], o = 0; o < r.length; ++o) for (var i = r[o], a = i.obj[i.prop], s = Object.keys(a), u = 0; u < s.length; ++u) {
                var f = s[u],
                    d = a[f];
                typeof d == "object" && d !== null && n.indexOf(d) === -1 && (r.push({
                  obj: a,
                  prop: f
                }), n.push(d));
              }

              return Ac(r), e;
            },
                Ic = function Ic(e) {
              return Object.prototype.toString.call(e) === "[object RegExp]";
            },
                Oc = function Oc(e) {
              return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
            },
                Pc = function Pc(e, r) {
              return [].concat(e, r);
            },
                Nc = function Nc(e, r) {
              if (Me(e)) {
                for (var n = [], o = 0; o < e.length; o += 1) n.push(r(e[o]));

                return n;
              }

              return r(e);
            };

            Yi.exports = {
              arrayToObject: $i,
              assign: Sc,
              combine: Pc,
              compact: xc,
              decode: _c,
              encode: Tc,
              isBuffer: Oc,
              isRegExp: Ic,
              maybeMap: Nc,
              merge: Ec
            };
          });
          var Xi = L((em, Ki) => {
            "use strict";

            var Ji = zi(),
                ur = yn(),
                _t = cr(),
                Mc = Object.prototype.hasOwnProperty,
                Gi = {
              brackets: function brackets(e) {
                return e + "[]";
              },
              comma: "comma",
              indices: function indices(e, r) {
                return e + "[" + r + "]";
              },
              repeat: function repeat(e) {
                return e;
              }
            },
                ye = Array.isArray,
                Cc = Array.prototype.push,
                Qi = function Qi(t, e) {
              Cc.apply(t, ye(e) ? e : [e]);
            },
                Rc = Date.prototype.toISOString,
                Vi = _t.default,
                K = {
              addQueryPrefix: !1,
              allowDots: !1,
              allowEmptyArrays: !1,
              arrayFormat: "indices",
              charset: "utf-8",
              charsetSentinel: !1,
              delimiter: "&",
              encode: !0,
              encodeDotInKeys: !1,
              encoder: ur.encode,
              encodeValuesOnly: !1,
              format: Vi,
              formatter: _t.formatters[Vi],
              indices: !1,
              serializeDate: function serializeDate(e) {
                return Rc.call(e);
              },
              skipNulls: !1,
              strictNullHandling: !1
            },
                kc = function kc(e) {
              return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
            },
                gn = {},
                Dc = function t(e, r, n, o, i, a, s, u, f, d, y, b, x, v, T, E, W, j) {
              for (var h = e, w = j, _ = 0, O = !1; (w = w.get(gn)) !== void 0 && !O;) {
                var C = w.get(e);

                if (_ += 1, typeof C != "undefined") {
                  if (C === _) throw new RangeError("Cyclic object value");
                  O = !0;
                }

                typeof w.get(gn) == "undefined" && (_ = 0);
              }

              if (typeof d == "function" ? h = d(r, h) : h instanceof Date ? h = x(h) : n === "comma" && ye(h) && (h = ur.maybeMap(h, function (fe) {
                return fe instanceof Date ? x(fe) : fe;
              })), h === null) {
                if (a) return f && !E ? f(r, K.encoder, W, "key", v) : r;
                h = "";
              }

              if (kc(h) || ur.isBuffer(h)) {
                if (f) {
                  var k = E ? r : f(r, K.encoder, W, "key", v);
                  return [T(k) + "=" + T(f(h, K.encoder, W, "value", v))];
                }

                return [T(r) + "=" + T(String(h))];
              }

              var V = [];
              if (typeof h == "undefined") return V;
              var F;
              if (n === "comma" && ye(h)) E && f && (h = ur.maybeMap(h, f)), F = [{
                value: h.length > 0 ? h.join(",") || null : void 0
              }];else if (ye(d)) F = d;else {
                var _e = Object.keys(h);

                F = y ? _e.sort(y) : _e;
              }
              var ie = u ? r.replace(/\./g, "%2E") : r,
                  ee = o && ye(h) && h.length === 1 ? ie + "[]" : ie;
              if (i && ye(h) && h.length === 0) return ee + "[]";

              for (var se = 0; se < F.length; ++se) {
                var ae = F[se],
                    be = typeof ae == "object" && typeof ae.value != "undefined" ? ae.value : h[ae];

                if (!(s && be === null)) {
                  var Ke = b && u ? ae.replace(/\./g, "%2E") : ae,
                      Xe = ye(h) ? typeof n == "function" ? n(ee, Ke) : ee : ee + (b ? "." + Ke : "[" + Ke + "]");
                  j.set(e, _);
                  var Ot = Ji();
                  Ot.set(gn, j), Qi(V, t(be, Xe, n, o, i, a, s, u, n === "comma" && E && ye(h) ? null : f, d, y, b, x, v, T, E, W, Ot));
                }
              }

              return V;
            },
                Uc = function Uc(e) {
              if (!e) return K;
              if (typeof e.allowEmptyArrays != "undefined" && typeof e.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
              if (typeof e.encodeDotInKeys != "undefined" && typeof e.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
              if (e.encoder !== null && typeof e.encoder != "undefined" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
              var r = e.charset || K.charset;
              if (typeof e.charset != "undefined" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
              var n = _t.default;

              if (typeof e.format != "undefined") {
                if (!Mc.call(_t.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                n = e.format;
              }

              var o = _t.formatters[n],
                  i = K.filter;
              (typeof e.filter == "function" || ye(e.filter)) && (i = e.filter);
              var a;
              if (e.arrayFormat in Gi ? a = e.arrayFormat : "indices" in e ? a = e.indices ? "indices" : "repeat" : a = K.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
              var s = typeof e.allowDots == "undefined" ? e.encodeDotInKeys === !0 ? !0 : K.allowDots : !!e.allowDots;
              return {
                addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : K.addQueryPrefix,
                allowDots: s,
                allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : K.allowEmptyArrays,
                arrayFormat: a,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : K.charsetSentinel,
                commaRoundTrip: e.commaRoundTrip,
                delimiter: typeof e.delimiter == "undefined" ? K.delimiter : e.delimiter,
                encode: typeof e.encode == "boolean" ? e.encode : K.encode,
                encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : K.encodeDotInKeys,
                encoder: typeof e.encoder == "function" ? e.encoder : K.encoder,
                encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : K.encodeValuesOnly,
                filter: i,
                format: n,
                formatter: o,
                serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : K.serializeDate,
                skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : K.skipNulls,
                sort: typeof e.sort == "function" ? e.sort : null,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : K.strictNullHandling
              };
            };

            Ki.exports = function (t, e) {
              var r = t,
                  n = Uc(e),
                  o,
                  i;
              typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : ye(n.filter) && (i = n.filter, o = i);
              var a = [];
              if (typeof r != "object" || r === null) return "";
              var s = Gi[n.arrayFormat],
                  u = s === "comma" && n.commaRoundTrip;
              o || (o = Object.keys(r)), n.sort && o.sort(n.sort);

              for (var f = Ji(), d = 0; d < o.length; ++d) {
                var y = o[d];
                n.skipNulls && r[y] === null || Qi(a, Dc(r[y], y, s, u, n.allowEmptyArrays, n.strictNullHandling, n.skipNulls, n.encodeDotInKeys, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, f));
              }

              var b = a.join(n.delimiter),
                  x = n.addQueryPrefix === !0 ? "?" : "";
              return n.charsetSentinel && (n.charset === "iso-8859-1" ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), b.length > 0 ? x + b : "";
            };
          });
          var ta = L((tm, ea) => {
            "use strict";

            var Je = yn(),
                bn = Object.prototype.hasOwnProperty,
                Wc = Array.isArray,
                z = {
              allowDots: !1,
              allowEmptyArrays: !1,
              allowPrototypes: !1,
              allowSparse: !1,
              arrayLimit: 20,
              charset: "utf-8",
              charsetSentinel: !1,
              comma: !1,
              decodeDotInKeys: !1,
              decoder: Je.decode,
              delimiter: "&",
              depth: 5,
              duplicates: "combine",
              ignoreQueryPrefix: !1,
              interpretNumericEntities: !1,
              parameterLimit: 1e3,
              parseArrays: !0,
              plainObjects: !1,
              strictDepth: !1,
              strictNullHandling: !1
            },
                jc = function jc(t) {
              return t.replace(/&#(\d+);/g, function (e, r) {
                return String.fromCharCode(parseInt(r, 10));
              });
            },
                Zi = function Zi(t, e) {
              return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
            },
                Lc = "utf8=%26%2310003%3B",
                Bc = "utf8=%E2%9C%93",
                qc = function qc(e, r) {
              var n = {
                __proto__: null
              },
                  o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
              o = o.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
              var i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                  a = o.split(r.delimiter, i),
                  s = -1,
                  u,
                  f = r.charset;
              if (r.charsetSentinel) for (u = 0; u < a.length; ++u) a[u].indexOf("utf8=") === 0 && (a[u] === Bc ? f = "utf-8" : a[u] === Lc && (f = "iso-8859-1"), s = u, u = a.length);

              for (u = 0; u < a.length; ++u) if (u !== s) {
                var d = a[u],
                    y = d.indexOf("]="),
                    b = y === -1 ? d.indexOf("=") : y + 1,
                    x,
                    v;
                b === -1 ? (x = r.decoder(d, z.decoder, f, "key"), v = r.strictNullHandling ? null : "") : (x = r.decoder(d.slice(0, b), z.decoder, f, "key"), v = Je.maybeMap(Zi(d.slice(b + 1), r), function (E) {
                  return r.decoder(E, z.decoder, f, "value");
                })), v && r.interpretNumericEntities && f === "iso-8859-1" && (v = jc(v)), d.indexOf("[]=") > -1 && (v = Wc(v) ? [v] : v);
                var T = bn.call(n, x);
                T && r.duplicates === "combine" ? n[x] = Je.combine(n[x], v) : (!T || r.duplicates === "last") && (n[x] = v);
              }

              return n;
            },
                Fc = function Fc(t, e, r, n) {
              for (var o = n ? e : Zi(e, r), i = t.length - 1; i >= 0; --i) {
                var a,
                    s = t[i];
                if (s === "[]" && r.parseArrays) a = r.allowEmptyArrays && (o === "" || r.strictNullHandling && o === null) ? [] : [].concat(o);else {
                  a = r.plainObjects ? Object.create(null) : {};
                  var u = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s,
                      f = r.decodeDotInKeys ? u.replace(/%2E/g, ".") : u,
                      d = parseInt(f, 10);
                  !r.parseArrays && f === "" ? a = {
                    0: o
                  } : !isNaN(d) && s !== f && String(d) === f && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (a = [], a[d] = o) : f !== "__proto__" && (a[f] = o);
                }
                o = a;
              }

              return o;
            },
                zc = function zc(e, r, n, o) {
              if (e) {
                var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                    a = /(\[[^[\]]*])/,
                    s = /(\[[^[\]]*])/g,
                    u = n.depth > 0 && a.exec(i),
                    f = u ? i.slice(0, u.index) : i,
                    d = [];

                if (f) {
                  if (!n.plainObjects && bn.call(Object.prototype, f) && !n.allowPrototypes) return;
                  d.push(f);
                }

                for (var y = 0; n.depth > 0 && (u = s.exec(i)) !== null && y < n.depth;) {
                  if (y += 1, !n.plainObjects && bn.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
                  d.push(u[1]);
                }

                if (u) {
                  if (n.strictDepth === !0) throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
                  d.push("[" + i.slice(u.index) + "]");
                }

                return Fc(d, r, n, o);
              }
            },
                Hc = function Hc(e) {
              if (!e) return z;
              if (typeof e.allowEmptyArrays != "undefined" && typeof e.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
              if (typeof e.decodeDotInKeys != "undefined" && typeof e.decodeDotInKeys != "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
              if (e.decoder !== null && typeof e.decoder != "undefined" && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
              if (typeof e.charset != "undefined" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
              var r = typeof e.charset == "undefined" ? z.charset : e.charset,
                  n = typeof e.duplicates == "undefined" ? z.duplicates : e.duplicates;
              if (n !== "combine" && n !== "first" && n !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
              var o = typeof e.allowDots == "undefined" ? e.decodeDotInKeys === !0 ? !0 : z.allowDots : !!e.allowDots;
              return {
                allowDots: o,
                allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : z.allowEmptyArrays,
                allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : z.allowPrototypes,
                allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : z.allowSparse,
                arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : z.arrayLimit,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : z.charsetSentinel,
                comma: typeof e.comma == "boolean" ? e.comma : z.comma,
                decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : z.decodeDotInKeys,
                decoder: typeof e.decoder == "function" ? e.decoder : z.decoder,
                delimiter: typeof e.delimiter == "string" || Je.isRegExp(e.delimiter) ? e.delimiter : z.delimiter,
                depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : z.depth,
                duplicates: n,
                ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : z.interpretNumericEntities,
                parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : z.parameterLimit,
                parseArrays: e.parseArrays !== !1,
                plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : z.plainObjects,
                strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : z.strictDepth,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : z.strictNullHandling
              };
            };

            ea.exports = function (t, e) {
              var r = Hc(e);
              if (t === "" || t === null || typeof t == "undefined") return r.plainObjects ? Object.create(null) : {};

              for (var n = typeof t == "string" ? qc(t, r) : t, o = r.plainObjects ? Object.create(null) : {}, i = Object.keys(n), a = 0; a < i.length; ++a) {
                var s = i[a],
                    u = zc(s, n[s], r, typeof t == "string");
                o = Je.merge(o, u, r);
              }

              return r.allowSparse === !0 ? o : Je.compact(o);
            };
          });
          var na = L((rm, ra) => {
            "use strict";

            var $c = Xi(),
                Yc = ta(),
                Vc = cr();
            ra.exports = {
              formats: Vc,
              parse: Yc,
              stringify: $c
            };
          });
          var tu = {};
          In(tu, {
            WalletTgSdk: () => mr,
            default: () => eu
          });

          (function () {
            if (typeof window.Telegram != "undefined" && typeof window.Telegram.WebApp != "undefined") return;
            var t = {},
                e = "";

            try {
              e = location.hash.toString();
            } catch (h) {}

            var r = u(e),
                n = j("initParams");
            if (n) for (var o in n) typeof r[o] == "undefined" && (r[o] = n[o]);
            W("initParams", r);
            var i = !1,
                a;

            try {
              if (i = window.parent != null && window != window.parent, i) {
                window.addEventListener("message", function (h) {
                  if (h.source === window.parent) {
                    try {
                      var w = JSON.parse(h.data);
                    } catch (_) {
                      return;
                    }

                    if (!(!w || !w.eventType)) if (w.eventType == "set_custom_style") h.origin === "https://web.telegram.org" && (a.innerHTML = w.eventData);else if (w.eventType == "reload_iframe") {
                      try {
                        window.parent.postMessage(JSON.stringify({
                          eventType: "iframe_will_reload"
                        }), "*");
                      } catch (_) {}

                      location.reload();
                    } else b(w.eventType, w.eventData);
                  }
                }), a = document.createElement("style"), document.head.appendChild(a);

                try {
                  window.parent.postMessage(JSON.stringify({
                    eventType: "iframe_ready",
                    eventData: {
                      reload_supported: !0
                    }
                  }), "*");
                } catch (h) {}
              }
            } catch (h) {}

            function s(h) {
              try {
                return h = h.replace(/\+/g, "%20"), decodeURIComponent(h);
              } catch (w) {
                return h;
              }
            }

            function u(h) {
              h = h.replace(/^#/, "");
              var w = {};
              if (!h.length) return w;
              if (h.indexOf("=") < 0 && h.indexOf("?") < 0) return w._path = s(h), w;

              var _ = h.indexOf("?");

              if (_ >= 0) {
                var O = h.substr(0, _);
                w._path = s(O), h = h.substr(_ + 1);
              }

              var C = f(h);

              for (var k in C) w[k] = C[k];

              return w;
            }

            function f(h) {
              var w = {};
              if (!h.length) return w;

              var _ = h.split("&"),
                  O,
                  C,
                  k,
                  V;

              for (O = 0; O < _.length; O++) C = _[O].split("="), k = s(C[0]), V = C[1] == null ? null : s(C[1]), w[k] = V;

              return w;
            }

            function d(h, w) {
              var _ = h.indexOf("#");

              if (_ < 0) return h + "#" + w;
              var O = h.substr(_ + 1);
              return O.indexOf("=") >= 0 || O.indexOf("?") >= 0 ? h + "&" + w : O.length > 0 ? h + "?" + w : h + w;
            }

            function y(h, w, _) {
              if (w || (w = function w() {}), _ === void 0 && (_ = ""), console.log("[Telegram.WebView] > postEvent", h, _), window.TelegramWebviewProxy !== void 0) TelegramWebviewProxy.postEvent(h, JSON.stringify(_)), w();else if (window.external && "notify" in window.external) window.external.notify(JSON.stringify({
                eventType: h,
                eventData: _
              })), w();else if (i) try {
                var O = "https://web.telegram.org";
                O = "*", window.parent.postMessage(JSON.stringify({
                  eventType: h,
                  eventData: _
                }), O), w();
              } catch (C) {
                w(C);
              } else w({
                notAvailable: !0
              });
            }

            function b(h, w) {
              console.log("[Telegram.WebView] < receiveEvent", h, w), x(h, function (_) {
                _(h, w);
              });
            }

            function x(h, w) {
              var _ = t[h];
              if (!(_ === void 0 || !_.length)) for (var O = 0; O < _.length; O++) try {
                w(_[O]);
              } catch (C) {}
            }

            function v(h, w) {
              t[h] === void 0 && (t[h] = []);

              var _ = t[h].indexOf(w);

              _ === -1 && t[h].push(w);
            }

            function T(h, w) {
              if (t[h] !== void 0) {
                var _ = t[h].indexOf(w);

                _ !== -1 && t[h].splice(_, 1);
              }
            }

            function E(h) {
              if (!h.match(/^(web\+)?tgb?:\/\/./)) return !1;
              var w = !!navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad/i);

              if (w) {
                var _ = document.getElementById("tgme_frame_cont") || document.body,
                    O = document.createElement("iframe");

                _.appendChild(O);

                var C = !1,
                    k = function k() {
                  C = !0;
                };

                window.addEventListener("pagehide", k, !1), window.addEventListener("blur", k, !1), O !== null && (O.src = h), setTimeout(function () {
                  C || (window.location = h), window.removeEventListener("pagehide", k, !1), window.removeEventListener("blur", k, !1);
                }, 2e3);
              } else window.location = h;

              return !0;
            }

            function W(h, w) {
              try {
                return window.sessionStorage.setItem("__telegram__" + h, JSON.stringify(w)), !0;
              } catch (_) {}

              return !1;
            }

            function j(h) {
              try {
                return JSON.parse(window.sessionStorage.getItem("__telegram__" + h));
              } catch (w) {}

              return null;
            }

            window.Telegram || (window.Telegram = {}), window.Telegram.WebView = {
              initParams: r,
              isIframe: i,
              onEvent: v,
              offEvent: T,
              postEvent: y,
              receiveEvent: b,
              callEventCallbacks: x
            }, window.Telegram.Utils = {
              urlSafeDecode: s,
              urlParseQueryString: f,
              urlParseHashParams: u,
              urlAppendHashParams: d,
              sessionStorageSet: W,
              sessionStorageGet: j
            }, window.TelegramGameProxy_receiveEvent = b, window.TelegramGameProxy = {
              receiveEvent: b
            };
          })();

          (function () {
            if (typeof Telegram != "undefined" && typeof Telegram.WebApp != "undefined" && typeof Telegram.WebApp.MainButton != "undefined") return;
            var t = window.Telegram.Utils,
                e = window.Telegram.WebView,
                r = e.initParams,
                n = e.isIframe,
                o = {},
                i = "",
                a = {},
                s = {},
                u = "light",
                f = "6.0",
                d = "unknown";

            if (r.tgWebAppData && r.tgWebAppData.length) {
              i = r.tgWebAppData, a = t.urlParseQueryString(i);

              for (var y in a) {
                var b = a[y];

                try {
                  (b.substr(0, 1) == "{" && b.substr(-1) == "}" || b.substr(0, 1) == "[" && b.substr(-1) == "]") && (a[y] = JSON.parse(b));
                } catch (l) {}
              }
            }

            if (r.tgWebAppThemeParams && r.tgWebAppThemeParams.length) {
              var x = r.tgWebAppThemeParams;

              try {
                var v = JSON.parse(x);
                v && V(v);
              } catch (l) {}
            }

            var v = t.sessionStorageGet("themeParams");
            v && V(v), r.tgWebAppVersion && (f = r.tgWebAppVersion), r.tgWebAppPlatform && (d = r.tgWebAppPlatform);

            function T(l, c) {
              c.theme_params && (V(c.theme_params), window.Telegram.WebApp.MainButton.setParams({}), yr(), _("themeChanged"));
            }

            var E = window.innerHeight;

            function W(l, c) {
              c.height && (window.removeEventListener("resize", j), ae(c));
            }

            function j(l) {
              E != window.innerHeight && (E = window.innerHeight, _("viewportChanged", {
                isStateStable: !0
              }));
            }

            function h(l) {
              if (!(l.metaKey || l.ctrlKey)) {
                for (var c = l.target; c.tagName != "A" && c.parentNode;) c = c.parentNode;

                c.tagName == "A" && c.target != "_blank" && (c.protocol == "http:" || c.protocol == "https:") && c.hostname == "t.me" && (o.openTgLink(c.href), l.preventDefault());
              }
            }

            function w(l) {
              return l.toString().replace(/^\s+|\s+$/g, "");
            }

            function _(l) {
              var c = Array.prototype.slice.call(arguments);
              l = c.shift(), e.callEventCallbacks("webview:" + l, function (p) {
                p.apply(o, c);
              });
            }

            function O(l, c) {
              e.onEvent("webview:" + l, c);
            }

            function C(l, c) {
              e.offEvent("webview:" + l, c);
            }

            function k(l, c) {
              var p = document.documentElement;
              p && p.style && p.style.setProperty && p.style.setProperty("--tg-" + l, c);
            }

            function V(l) {
              l.bg_color == "#1c1c1d" && l.bg_color == l.secondary_bg_color && (l.secondary_bg_color = "#2c2c2e");
              var c;

              for (var p in l) (c = et(l[p])) && (s[p] = c, p == "bg_color" && (u = fa(c) ? "dark" : "light", k("color-scheme", u)), p = "theme-" + p.split("_").join("-"), k(p, c));

              t.sessionStorageSet("themeParams", s);
            }

            var F = {};

            function _e(l) {
              for (var c = 100; --c;) {
                for (var p = "", g = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", A = g.length, R = 0; R < l; R++) p += g[Math.floor(Math.random() * A)];

                if (!F[p]) return F[p] = {}, p;
              }

              throw Error("WebAppCallbackIdGenerateFailed");
            }

            var ie = !1,
                ee = !1,
                se = !0;

            function ae(l) {
              typeof l != "undefined" && (se = !!l.is_expanded, ie = l.height, l.is_state_stable && (ee = l.height), _("viewportChanged", {
                isStateStable: !!l.is_state_stable
              }));
              var c, p;
              ie !== !1 ? c = ie - le + "px" : c = le ? "calc(100vh - " + le + "px)" : "100vh", ee !== !1 ? p = ee - le + "px" : p = le ? "calc(100vh - " + le + "px)" : "100vh", k("viewport-height", c), k("viewport-stable-height", p);
            }

            var be = !1;

            function Ke(l) {
              if (!q("6.2")) {
                console.warn("[Telegram.WebApp] Closing confirmation is not supported in version " + f);
                return;
              }

              be = !!l, e.postEvent("web_app_setup_closing_behavior", !1, {
                need_confirmation: be
              });
            }

            var Xe = !0;

            function Ot(l) {
              if (!q("7.7")) {
                console.warn("[Telegram.WebApp] Changing swipes behavior is not supported in version " + f);
                return;
              }

              Xe = !!l, e.postEvent("web_app_setup_swipe_behavior", !1, {
                allow_vertical_swipe: Xe
              });
            }

            var fe = "bg_color",
                Ze = null;

            function la() {
              return fe == "secondary_bg_color" ? s.secondary_bg_color : fe == "bg_color" ? s.bg_color : Ze;
            }

            function ca(l) {
              if (!q("6.1")) {
                console.warn("[Telegram.WebApp] Header color is not supported in version " + f);
                return;
              }

              q("6.9") || (s.bg_color && s.bg_color == l ? l = "bg_color" : s.secondary_bg_color && s.secondary_bg_color == l && (l = "secondary_bg_color"));
              var c = null,
                  p = null;
              if (l == "bg_color" || l == "secondary_bg_color") p = l;else if (q("6.9") && (c = et(l), !c)) throw console.error("[Telegram.WebApp] Header color format is invalid", l), Error("WebAppHeaderColorInvalid");
              if (!q("6.9") && p != "bg_color" && p != "secondary_bg_color") throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'", l), Error("WebAppHeaderColorKeyInvalid");
              fe = p, Ze = c, Sn();
            }

            var En = null,
                hr = null;

            function Sn() {
              (En != fe || hr != Ze) && (En = fe, hr = Ze, hr ? e.postEvent("web_app_set_header_color", !1, {
                color: Ze
              }) : e.postEvent("web_app_set_header_color", !1, {
                color_key: fe
              }));
            }

            var Pt = "bg_color";

            function _n() {
              return Pt == "secondary_bg_color" ? s.secondary_bg_color : Pt == "bg_color" ? s.bg_color : Pt;
            }

            function ua(l) {
              if (!q("6.1")) {
                console.warn("[Telegram.WebApp] Background color is not supported in version " + f);
                return;
              }

              var c;
              if (l == "bg_color" || l == "secondary_bg_color") c = l;else if (c = et(l), !c) throw console.error("[Telegram.WebApp] Background color format is invalid", l), Error("WebAppBackgroundColorInvalid");
              Pt = c, yr();
            }

            var Tn = null;

            function yr() {
              var l = _n();

              Tn != l && (Tn = l, e.postEvent("web_app_set_background_color", !1, {
                color: l
              }));
            }

            function et(l) {
              l += "";
              var c;
              if (c = /^\s*#([0-9a-f]{6})\s*$/i.exec(l)) return "#" + c[1].toLowerCase();
              if (c = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(l)) return ("#" + c[1] + c[1] + c[2] + c[2] + c[3] + c[3]).toLowerCase();

              if (c = /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(l)) {
                var p = parseInt(c[1]),
                    g = parseInt(c[2]),
                    A = parseInt(c[3]);
                return p = (p < 16 ? "0" : "") + p.toString(16), g = (g < 16 ? "0" : "") + g.toString(16), A = (A < 16 ? "0" : "") + A.toString(16), "#" + p + g + A;
              }

              return !1;
            }

            function fa(l) {
              l = l.replace(/[\s#]/g, ""), l.length == 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]);
              var c = parseInt(l.substr(0, 2), 16),
                  p = parseInt(l.substr(2, 2), 16),
                  g = parseInt(l.substr(4, 2), 16),
                  A = Math.sqrt(.299 * (c * c) + .587 * (p * p) + .114 * (g * g));
              return A < 120;
            }

            function pa(l, c) {
              typeof l != "string" && (l = ""), typeof c != "string" && (c = ""), l = l.replace(/^\s+|\s+$/g, "").split("."), c = c.replace(/^\s+|\s+$/g, "").split(".");
              var p = Math.max(l.length, c.length),
                  g,
                  A,
                  R;

              for (g = 0; g < p; g++) if (A = parseInt(l[g]) || 0, R = parseInt(c[g]) || 0, A != R) return A > R ? 1 : -1;

              return 0;
            }

            function q(l) {
              return pa(f, l) >= 0;
            }

            function da(l) {
              if (window.Blob) try {
                return new Blob([l]).size;
              } catch (A) {}

              for (var c = l.length, p = l.length - 1; p >= 0; p--) {
                var g = l.charCodeAt(p);
                g > 127 && g <= 2047 ? c++ : g > 2047 && g <= 65535 && (c += 2), g >= 56320 && g <= 57343 && p--;
              }

              return c;
            }

            var ma = function () {
              var l = !1,
                  c = {};
              Object.defineProperty(c, "isVisible", {
                set: function set(N) {
                  D({
                    is_visible: N
                  });
                },
                get: function get() {
                  return l;
                },
                enumerable: !0
              });
              var p = null;
              e.onEvent("back_button_pressed", g);

              function g() {
                _("backButtonClicked");
              }

              function A() {
                return {
                  is_visible: l
                };
              }

              function R(N) {
                return typeof N == "undefined" && (N = A()), JSON.stringify(N);
              }

              function I() {
                return q("6.1") ? !0 : (console.warn("[Telegram.WebApp] BackButton is not supported in version " + f), !1);
              }

              function M() {
                var N = A(),
                    J = R(N);
                p !== J && (p = J, e.postEvent("web_app_setup_back_button", !1, N));
              }

              function D(N) {
                return I() && (typeof N.is_visible != "undefined" && (l = !!N.is_visible), M()), c;
              }

              return c.onClick = function (N) {
                return I() && O("backButtonClicked", N), c;
              }, c.offClick = function (N) {
                return I() && C("backButtonClicked", N), c;
              }, c.show = function () {
                return D({
                  is_visible: !0
                });
              }, c.hide = function () {
                return D({
                  is_visible: !1
                });
              }, c;
            }(),
                le = 0,
                ha = function () {
              var l = !1,
                  c = !0,
                  p = !1,
                  g = "CONTINUE",
                  A = !1,
                  R = !1,
                  I = {};
              Object.defineProperty(I, "text", {
                set: function set(S) {
                  I.setParams({
                    text: S
                  });
                },
                get: function get() {
                  return g;
                },
                enumerable: !0
              }), Object.defineProperty(I, "color", {
                set: function set(S) {
                  I.setParams({
                    color: S
                  });
                },
                get: function get() {
                  return A || s.button_color || "#2481cc";
                },
                enumerable: !0
              }), Object.defineProperty(I, "textColor", {
                set: function set(S) {
                  I.setParams({
                    text_color: S
                  });
                },
                get: function get() {
                  return R || s.button_text_color || "#ffffff";
                },
                enumerable: !0
              }), Object.defineProperty(I, "isVisible", {
                set: function set(S) {
                  I.setParams({
                    is_visible: S
                  });
                },
                get: function get() {
                  return l;
                },
                enumerable: !0
              }), Object.defineProperty(I, "isProgressVisible", {
                get: function get() {
                  return p;
                },
                enumerable: !0
              }), Object.defineProperty(I, "isActive", {
                set: function set(S) {
                  I.setParams({
                    is_active: S
                  });
                },
                get: function get() {
                  return c;
                },
                enumerable: !0
              });
              var M = null;
              e.onEvent("main_button_pressed", G);
              var D = null,
                  N = {};

              if (r.tgWebAppDebug) {
                D = document.createElement("tg-main-button"), N = {
                  font: "600 14px/18px sans-serif",
                  display: "none",
                  width: "100%",
                  height: "48px",
                  borderRadius: "0",
                  background: "no-repeat right center",
                  position: "fixed",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  margin: "0",
                  padding: "15px 20px",
                  textAlign: "center",
                  boxSizing: "border-box",
                  zIndex: "10000"
                };

                for (var J in N) D.style[J] = N[J];

                document.addEventListener("DOMContentLoaded", function S(B) {
                  document.removeEventListener("DOMContentLoaded", S), document.body.appendChild(D), D.addEventListener("click", G, !1);
                });
              }

              function G() {
                c && _("mainButtonClicked");
              }

              function pe() {
                var S = I.color,
                    B = I.textColor;
                return l ? {
                  is_visible: !0,
                  is_active: c,
                  is_progress_visible: p,
                  text: g,
                  color: S,
                  text_color: B
                } : {
                  is_visible: !1
                };
              }

              function br(S) {
                return typeof S == "undefined" && (S = pe()), JSON.stringify(S);
              }

              function it() {
                var S = pe(),
                    B = br(S);
                M !== B && (M = B, e.postEvent("web_app_setup_main_button", !1, S), r.tgWebAppDebug && xe(S));
              }

              function xe(S) {
                S.is_visible ? (D.style.display = "block", le = 48, D.style.opacity = S.is_active ? "1" : "0.8", D.style.cursor = S.is_active ? "pointer" : "auto", D.disabled = !S.is_active, D.innerText = S.text, D.style.backgroundImage = S.is_progress_visible ? "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewport%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%3Ccircle%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222.25%22%20stroke-linecap%3D%22round%22%20fill%3D%22none%22%20stroke-dashoffset%3D%22106%22%20r%3D%229%22%20stroke-dasharray%3D%2256.52%22%20rotate%3D%22-90%22%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20attributeType%3D%22XML%22%20dur%3D%22360s%22%20from%3D%220%22%20to%3D%2212500%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3CanimateTransform%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20dur%3D%221s%22%20from%3D%22-90%2024%2024%22%20to%3D%22630%2024%2024%22%20repeatCount%3D%22indefinite%22%3E%3C%2FanimateTransform%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')" : "none", D.style.backgroundColor = S.color, D.style.color = S.text_color) : (D.style.display = "none", le = 0), document.documentElement && (document.documentElement.style.boxSizing = "border-box", document.documentElement.style.paddingBottom = le + "px"), ae();
              }

              function Re(S) {
                if (typeof S.text != "undefined") {
                  var B = w(S.text);
                  if (!B.length) throw console.error("[Telegram.WebApp] Main button text is required", S.text), Error("WebAppMainButtonParamInvalid");
                  if (B.length > 64) throw console.error("[Telegram.WebApp] Main button text is too long", B), Error("WebAppMainButtonParamInvalid");
                  g = B;
                }

                if (typeof S.color != "undefined") if (S.color === !1 || S.color === null) A = !1;else {
                  var H = et(S.color);
                  if (!H) throw console.error("[Telegram.WebApp] Main button color format is invalid", S.color), Error("WebAppMainButtonParamInvalid");
                  A = H;
                }
                if (typeof S.text_color != "undefined") if (S.text_color === !1 || S.text_color === null) R = !1;else {
                  var $ = et(S.text_color);
                  if (!$) throw console.error("[Telegram.WebApp] Main button text color format is invalid", S.text_color), Error("WebAppMainButtonParamInvalid");
                  R = $;
                }

                if (typeof S.is_visible != "undefined") {
                  if (S.is_visible && !I.text.length) throw console.error("[Telegram.WebApp] Main button text is required"), Error("WebAppMainButtonParamInvalid");
                  l = !!S.is_visible;
                }

                return typeof S.is_active != "undefined" && (c = !!S.is_active), it(), I;
              }

              return I.setText = function (S) {
                return I.setParams({
                  text: S
                });
              }, I.onClick = function (S) {
                return O("mainButtonClicked", S), I;
              }, I.offClick = function (S) {
                return C("mainButtonClicked", S), I;
              }, I.show = function () {
                return I.setParams({
                  is_visible: !0
                });
              }, I.hide = function () {
                return I.setParams({
                  is_visible: !1
                });
              }, I.enable = function () {
                return I.setParams({
                  is_active: !0
                });
              }, I.disable = function () {
                return I.setParams({
                  is_active: !1
                });
              }, I.showProgress = function (S) {
                return c = !!S, p = !0, it(), I;
              }, I.hideProgress = function () {
                return I.isActive || (c = !0), p = !1, it(), I;
              }, I.setParams = Re, I;
            }(),
                xn = function () {
              var l = !1,
                  c = {};
              Object.defineProperty(c, "isVisible", {
                set: function set(N) {
                  D({
                    is_visible: N
                  });
                },
                get: function get() {
                  return l;
                },
                enumerable: !0
              });
              var p = null;
              e.onEvent("settings_button_pressed", g);

              function g() {
                _("settingsButtonClicked");
              }

              function A() {
                return {
                  is_visible: l
                };
              }

              function R(N) {
                return typeof N == "undefined" && (N = A()), JSON.stringify(N);
              }

              function I() {
                return q("6.10") ? !0 : (console.warn("[Telegram.WebApp] SettingsButton is not supported in version " + f), !1);
              }

              function M() {
                var N = A(),
                    J = R(N);
                p !== J && (p = J, e.postEvent("web_app_setup_settings_button", !1, N));
              }

              function D(N) {
                return I() && (typeof N.is_visible != "undefined" && (l = !!N.is_visible), M()), c;
              }

              return c.onClick = function (N) {
                return I() && O("settingsButtonClicked", N), c;
              }, c.offClick = function (N) {
                return I() && C("settingsButtonClicked", N), c;
              }, c.show = function () {
                return D({
                  is_visible: !0
                });
              }, c.hide = function () {
                return D({
                  is_visible: !1
                });
              }, c;
            }(),
                ya = function () {
              var l = {};

              function c(p) {
                if (!q("6.1")) return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version " + f), l;

                if (p.type == "impact") {
                  if (p.impact_style != "light" && p.impact_style != "medium" && p.impact_style != "heavy" && p.impact_style != "rigid" && p.impact_style != "soft") throw console.error("[Telegram.WebApp] Haptic impact style is invalid", p.impact_style), Error("WebAppHapticImpactStyleInvalid");
                } else if (p.type == "notification") {
                  if (p.notification_type != "error" && p.notification_type != "success" && p.notification_type != "warning") throw console.error("[Telegram.WebApp] Haptic notification type is invalid", p.notification_type), Error("WebAppHapticNotificationTypeInvalid");
                } else if (p.type != "selection_change") throw console.error("[Telegram.WebApp] Haptic feedback type is invalid", p.type), Error("WebAppHapticFeedbackTypeInvalid");

                return e.postEvent("web_app_trigger_haptic_feedback", !1, p), l;
              }

              return l.impactOccurred = function (p) {
                return c({
                  type: "impact",
                  impact_style: p
                });
              }, l.notificationOccurred = function (p) {
                return c({
                  type: "notification",
                  notification_type: p
                });
              }, l.selectionChanged = function () {
                return c({
                  type: "selection_change"
                });
              }, l;
            }(),
                ga = function () {
              var l = {};

              function c(p, g, A) {
                if (!q("6.9")) throw console.error("[Telegram.WebApp] CloudStorage is not supported in version " + f), Error("WebAppMethodUnsupported");
                return gr(p, g, A), l;
              }

              return l.setItem = function (p, g, A) {
                return c("saveStorageValue", {
                  key: p,
                  value: g
                }, A);
              }, l.getItem = function (p, g) {
                return l.getItems([p], g ? function (A, R) {
                  A ? g(A) : g(null, R[p]);
                } : null);
              }, l.getItems = function (p, g) {
                return c("getStorageValues", {
                  keys: p
                }, g);
              }, l.removeItem = function (p, g) {
                return l.removeItems([p], g);
              }, l.removeItems = function (p, g) {
                return c("deleteStorageValues", {
                  keys: p
                }, g);
              }, l.getKeys = function (p) {
                return c("getStorageKeys", {}, p);
              }, l;
            }(),
                ba = function () {
              var l = !1,
                  c = !1,
                  p = "unknown",
                  g = !1,
                  A = !1,
                  R = !1,
                  I = "",
                  M = {};
              Object.defineProperty(M, "isInited", {
                get: function get() {
                  return l;
                },
                enumerable: !0
              }), Object.defineProperty(M, "isBiometricAvailable", {
                get: function get() {
                  return l && c;
                },
                enumerable: !0
              }), Object.defineProperty(M, "biometricType", {
                get: function get() {
                  return p || "unknown";
                },
                enumerable: !0
              }), Object.defineProperty(M, "isAccessRequested", {
                get: function get() {
                  return g;
                },
                enumerable: !0
              }), Object.defineProperty(M, "isAccessGranted", {
                get: function get() {
                  return g && A;
                },
                enumerable: !0
              }), Object.defineProperty(M, "isBiometricTokenSaved", {
                get: function get() {
                  return R;
                },
                enumerable: !0
              }), Object.defineProperty(M, "deviceId", {
                get: function get() {
                  return I || "";
                },
                enumerable: !0
              });
              var D = {
                callbacks: []
              },
                  N = !1,
                  J = !1,
                  G = !1;
              e.onEvent("biometry_info_received", pe), e.onEvent("biometry_auth_requested", br), e.onEvent("biometry_token_updated", it);

              function pe(S, B) {
                if (l = !0, B.available ? (c = !0, p = B.type || "unknown", B.access_requested ? (g = !0, A = !!B.access_granted, R = !!B.token_saved) : (g = !1, A = !1, R = !1)) : (c = !1, p = "unknown", g = !1, A = !1, R = !1), I = B.device_id || "", D.callbacks.length > 0) for (var H = 0; H < D.callbacks.length; H++) {
                  var $ = D.callbacks[H];
                  $();
                }

                if (N) {
                  var at = N;
                  N = !1, at.callback && at.callback(A);
                }

                _("biometricManagerUpdated");
              }

              function br(S, B) {
                var H = B.status == "authorized",
                    $ = B.token || "";

                if (J) {
                  var at = J;
                  J = !1, at.callback && at.callback(H, H ? $ : null);
                }

                _("biometricAuthRequested", H ? {
                  isAuthenticated: !0,
                  biometricToken: $
                } : {
                  isAuthenticated: !1
                });
              }

              function it(S, B) {
                var H = !1;

                if (c && g && (B.status == "updated" ? (R = !0, H = !0) : B.status == "removed" && (R = !1, H = !0)), G) {
                  var $ = G;
                  G = !1, $.callback && $.callback(H);
                }

                _("biometricTokenUpdated", {
                  isUpdated: H
                });
              }

              function xe() {
                return q("7.2") ? !0 : (console.warn("[Telegram.WebApp] BiometricManager is not supported in version " + f), !1);
              }

              function Re() {
                if (!l) throw console.error("[Telegram.WebApp] BiometricManager should be inited before using."), Error("WebAppBiometricManagerNotInited");
                return !0;
              }

              return M.init = function (S) {
                return !xe() || l || (S && D.callbacks.push(S), e.postEvent("web_app_biometry_get_info", !1)), M;
              }, M.requestAccess = function (S, B) {
                if (!xe()) return M;
                if (Re(), !c) throw console.error("[Telegram.WebApp] Biometrics is not available on this device."), Error("WebAppBiometricManagerBiometricsNotAvailable");
                if (N) throw console.error("[Telegram.WebApp] Access is already requested"), Error("WebAppBiometricManagerAccessRequested");
                var H = {};

                if (typeof S.reason != "undefined") {
                  var $ = w(S.reason);
                  if ($.length > 128) throw console.error("[Telegram.WebApp] Biometric reason is too long", $), Error("WebAppBiometricRequestAccessParamInvalid");
                  $.length > 0 && (H.reason = $);
                }

                return N = {
                  callback: B
                }, e.postEvent("web_app_biometry_request_access", !1, H), M;
              }, M.authenticate = function (S, B) {
                if (!xe()) return M;
                if (Re(), !c) throw console.error("[Telegram.WebApp] Biometrics is not available on this device."), Error("WebAppBiometricManagerBiometricsNotAvailable");
                if (!A) throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."), Error("WebAppBiometricManagerBiometricAccessNotGranted");
                if (J) throw console.error("[Telegram.WebApp] Authentication request is already in progress."), Error("WebAppBiometricManagerAuthenticationRequested");
                var H = {};

                if (typeof S.reason != "undefined") {
                  var $ = w(S.reason);
                  if ($.length > 128) throw console.error("[Telegram.WebApp] Biometric reason is too long", $), Error("WebAppBiometricRequestAccessParamInvalid");
                  $.length > 0 && (H.reason = $);
                }

                return J = {
                  callback: B
                }, e.postEvent("web_app_biometry_request_auth", !1, H), M;
              }, M.updateBiometricToken = function (S, B) {
                if (!xe()) return M;
                if (S = S || "", S.length > 1024) throw console.error("[Telegram.WebApp] Token is too long", S), Error("WebAppBiometricManagerTokenInvalid");
                if (Re(), !c) throw console.error("[Telegram.WebApp] Biometrics is not available on this device."), Error("WebAppBiometricManagerBiometricsNotAvailable");
                if (!A) throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."), Error("WebAppBiometricManagerBiometricAccessNotGranted");
                if (G) throw console.error("[Telegram.WebApp] Token request is already in progress."), Error("WebAppBiometricManagerTokenUpdateRequested");
                return G = {
                  callback: B
                }, e.postEvent("web_app_biometry_update_token", !1, {
                  token: S
                }), M;
              }, M.openSettings = function () {
                if (!xe()) return M;
                if (Re(), !c) throw console.error("[Telegram.WebApp] Biometrics is not available on this device."), Error("WebAppBiometricManagerBiometricsNotAvailable");
                if (!g) throw console.error("[Telegram.WebApp] Biometric access was not requested yet."), Error("WebAppBiometricManagerBiometricsAccessNotRequested");
                return A ? (console.warn("[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings."), M) : (e.postEvent("web_app_biometry_open_settings", !1), M);
              }, M;
            }(),
                tt = {};

            function va(l, c) {
              if (c.slug && tt[c.slug]) {
                var p = tt[c.slug];
                delete tt[c.slug], p.callback && p.callback(c.status), _("invoiceClosed", {
                  url: p.url,
                  status: c.status
                });
              }
            }

            var rt = !1;

            function wa(l, c) {
              if (rt) {
                var p = rt;
                rt = !1;
                var g = null;
                typeof c.button_id != "undefined" && (g = c.button_id), p.callback && p.callback(g), _("popupClosed", {
                  button_id: g
                });
              }
            }

            var Te = !1;

            function Aa(l, c) {
              if (Te) {
                var p = Te,
                    g = null;
                typeof c.data != "undefined" && (g = c.data), p.callback && p.callback(g) && (Te = !1, e.postEvent("web_app_close_scan_qr_popup", !1)), _("qrTextReceived", {
                  data: g
                });
              }
            }

            function Ea(l, c) {
              Te = !1, _("scanQrPopupClosed");
            }

            function Sa(l, c) {
              if (c.req_id && F[c.req_id]) {
                var p = F[c.req_id];
                delete F[c.req_id];
                var g = null;
                typeof c.data != "undefined" && (g = c.data), p.callback && p.callback(g), _("clipboardTextReceived", {
                  data: g
                });
              }
            }

            var nt = !1;

            function _a(l, c) {
              if (nt) {
                var p = nt;
                nt = !1, p.callback && p.callback(c.status == "allowed"), _("writeAccessRequested", {
                  status: c.status
                });
              }
            }

            function Ta(l, c) {
              var p,
                  g,
                  A = 0,
                  R = function R() {
                gr("getRequestedContact", {}, function (M, D) {
                  D && D.length ? (clearTimeout(g), l(D)) : (A += 50, p = setTimeout(R, A));
                });
              },
                  I = function I() {
                clearTimeout(p), l("");
              };

              g = setTimeout(I, c), R();
            }

            var ot = !1;

            function xa(l, c) {
              if (ot) {
                var p = ot;
                ot = !1;
                var g = c.status == "sent",
                    A = {
                  status: c.status
                };
                g ? Ta(function (R) {
                  if (R && R.length) {
                    A.response = R, A.responseUnsafe = t.urlParseQueryString(R);

                    for (var I in A.responseUnsafe) {
                      var M = A.responseUnsafe[I];

                      try {
                        (M.substr(0, 1) == "{" && M.substr(-1) == "}" || M.substr(0, 1) == "[" && M.substr(-1) == "]") && (A.responseUnsafe[I] = JSON.parse(M));
                      } catch (D) {}
                    }
                  }

                  p.callback && p.callback(g, A), _("contactRequested", A);
                }, 3e3) : (p.callback && p.callback(g, A), _("contactRequested", A));
              }
            }

            function Ia(l, c) {
              if (c.req_id && F[c.req_id]) {
                var p = F[c.req_id];
                delete F[c.req_id];
                var g = null,
                    A = null;
                typeof c.result != "undefined" && (g = c.result), typeof c.error != "undefined" && (A = c.error), p.callback && p.callback(A, g);
              }
            }

            function gr(l, c, p) {
              if (!q("6.9")) throw console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version " + f), Error("WebAppMethodUnsupported");

              var g = _e(16),
                  A = {
                req_id: g,
                method: l,
                params: c || {}
              };

              F[g] = {
                callback: p
              }, e.postEvent("web_app_invoke_custom_method", !1, A);
            }

            window.Telegram || (window.Telegram = {}), Object.defineProperty(o, "initData", {
              get: function get() {
                return i;
              },
              enumerable: !0
            }), Object.defineProperty(o, "initDataUnsafe", {
              get: function get() {
                return a;
              },
              enumerable: !0
            }), Object.defineProperty(o, "version", {
              get: function get() {
                return f;
              },
              enumerable: !0
            }), Object.defineProperty(o, "platform", {
              get: function get() {
                return d;
              },
              enumerable: !0
            }), Object.defineProperty(o, "colorScheme", {
              get: function get() {
                return u;
              },
              enumerable: !0
            }), Object.defineProperty(o, "themeParams", {
              get: function get() {
                return s;
              },
              enumerable: !0
            }), Object.defineProperty(o, "isExpanded", {
              get: function get() {
                return se;
              },
              enumerable: !0
            }), Object.defineProperty(o, "viewportHeight", {
              get: function get() {
                return (ie === !1 ? window.innerHeight : ie) - le;
              },
              enumerable: !0
            }), Object.defineProperty(o, "viewportStableHeight", {
              get: function get() {
                return (ee === !1 ? window.innerHeight : ee) - le;
              },
              enumerable: !0
            }), Object.defineProperty(o, "isClosingConfirmationEnabled", {
              set: function set(l) {
                Ke(l);
              },
              get: function get() {
                return be;
              },
              enumerable: !0
            }), Object.defineProperty(o, "isVerticalSwipesEnabled", {
              set: function set(l) {
                Ot(l);
              },
              get: function get() {
                return Xe;
              },
              enumerable: !0
            }), Object.defineProperty(o, "headerColor", {
              set: function set(l) {
                ca(l);
              },
              get: function get() {
                return la();
              },
              enumerable: !0
            }), Object.defineProperty(o, "backgroundColor", {
              set: function set(l) {
                ua(l);
              },
              get: function get() {
                return _n();
              },
              enumerable: !0
            }), Object.defineProperty(o, "BackButton", {
              value: ma,
              enumerable: !0
            }), Object.defineProperty(o, "MainButton", {
              value: ha,
              enumerable: !0
            }), Object.defineProperty(o, "SettingsButton", {
              value: xn,
              enumerable: !0
            }), Object.defineProperty(o, "HapticFeedback", {
              value: ya,
              enumerable: !0
            }), Object.defineProperty(o, "CloudStorage", {
              value: ga,
              enumerable: !0
            }), Object.defineProperty(o, "BiometricManager", {
              value: ba,
              enumerable: !0
            }), o.setHeaderColor = function (l) {
              o.headerColor = l;
            }, o.setBackgroundColor = function (l) {
              o.backgroundColor = l;
            }, o.enableClosingConfirmation = function () {
              o.isClosingConfirmationEnabled = !0;
            }, o.disableClosingConfirmation = function () {
              o.isClosingConfirmationEnabled = !1;
            }, o.enableVerticalSwipes = function () {
              o.isVerticalSwipesEnabled = !0;
            }, o.disableVerticalSwipes = function () {
              o.isVerticalSwipesEnabled = !1;
            }, o.isVersionAtLeast = function (l) {
              return q(l);
            }, o.onEvent = function (l, c) {
              O(l, c);
            }, o.offEvent = function (l, c) {
              C(l, c);
            }, o.sendData = function (l) {
              if (!l || !l.length) throw console.error("[Telegram.WebApp] Data is required", l), Error("WebAppDataInvalid");
              if (da(l) > 4096) throw console.error("[Telegram.WebApp] Data is too long", l), Error("WebAppDataInvalid");
              e.postEvent("web_app_data_send", !1, {
                data: l
              });
            }, o.switchInlineQuery = function (l, c) {
              if (!q("6.6")) throw console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version " + f), Error("WebAppMethodUnsupported");
              if (!r.tgWebAppBotInline) throw console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"), Error("WebAppInlineModeDisabled");
              if (l = l || "", l.length > 256) throw console.error("[Telegram.WebApp] Inline query is too long", l), Error("WebAppInlineQueryInvalid");
              var p = [];

              if (c) {
                if (!Array.isArray(c)) throw console.error("[Telegram.WebApp] Choose chat types should be an array", c), Error("WebAppInlineChooseChatTypesInvalid");

                for (var g = {
                  users: 1,
                  bots: 1,
                  groups: 1,
                  channels: 1
                }, A = 0; A < c.length; A++) {
                  var R = c[A];
                  if (!g[R]) throw console.error("[Telegram.WebApp] Choose chat type is invalid", R), Error("WebAppInlineChooseChatTypeInvalid");
                  g[R] != 2 && (g[R] = 2, p.push(R));
                }
              }

              e.postEvent("web_app_switch_inline_query", !1, {
                query: l,
                chat_types: p
              });
            }, o.openLink = function (g, c) {
              var p = document.createElement("A");
              if (p.href = g, p.protocol != "http:" && p.protocol != "https:") throw console.error("[Telegram.WebApp] Url protocol is not supported", g), Error("WebAppTgUrlInvalid");
              var g = p.href;

              if (c = c || {}, q("6.1")) {
                var A = {
                  url: g
                };
                q("6.4") && c.try_instant_view && (A.try_instant_view = !0), q("7.6") && c.try_browser && (A.try_browser = c.try_browser), e.postEvent("web_app_open_link", !1, A);
              } else window.open(g, "_blank");
            }, o.openTelegramLink = function (l) {
              var c = document.createElement("A");
              if (c.href = l, c.protocol != "http:" && c.protocol != "https:") throw console.error("[Telegram.WebApp] Url protocol is not supported", l), Error("WebAppTgUrlInvalid");
              if (c.hostname != "t.me") throw console.error("[Telegram.WebApp] Url host is not supported", l), Error("WebAppTgUrlInvalid");
              var p = c.pathname + c.search;
              n || q("6.1") ? e.postEvent("web_app_open_tg_link", !1, {
                path_full: p
              }) : location.href = "https://t.me" + p;
            }, o.openInvoice = function (l, c) {
              var p = document.createElement("A"),
                  g,
                  A;
              if (p.href = l, p.protocol != "http:" && p.protocol != "https:" || p.hostname != "t.me" || !(g = p.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/)) || !(A = g[2])) throw console.error("[Telegram.WebApp] Invoice url is invalid", l), Error("WebAppInvoiceUrlInvalid");
              if (!q("6.1")) throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version " + f), Error("WebAppMethodUnsupported");
              if (tt[A]) throw console.error("[Telegram.WebApp] Invoice is already opened"), Error("WebAppInvoiceOpened");
              tt[A] = {
                url: l,
                callback: c
              }, e.postEvent("web_app_open_invoice", !1, {
                slug: A
              });
            }, o.showPopup = function (l, c) {
              if (!q("6.2")) throw console.error("[Telegram.WebApp] Method showPopup is not supported in version " + f), Error("WebAppMethodUnsupported");
              if (rt) throw console.error("[Telegram.WebApp] Popup is already opened"), Error("WebAppPopupOpened");
              var p = "",
                  g = "",
                  A = [],
                  R = {},
                  I = {};

              if (typeof l.title != "undefined") {
                if (p = w(l.title), p.length > 64) throw console.error("[Telegram.WebApp] Popup title is too long", p), Error("WebAppPopupParamInvalid");
                p.length > 0 && (I.title = p);
              }

              if (typeof l.message != "undefined" && (g = w(l.message)), !g.length) throw console.error("[Telegram.WebApp] Popup message is required", l.message), Error("WebAppPopupParamInvalid");
              if (g.length > 256) throw console.error("[Telegram.WebApp] Popup message is too long", g), Error("WebAppPopupParamInvalid");

              if (I.message = g, typeof l.buttons != "undefined") {
                if (!Array.isArray(l.buttons)) throw console.error("[Telegram.WebApp] Popup buttons should be an array", l.buttons), Error("WebAppPopupParamInvalid");

                for (var M = 0; M < l.buttons.length; M++) {
                  var D = l.buttons[M],
                      N = {},
                      J = "";
                  if (typeof D.id != "undefined" && (J = D.id.toString(), J.length > 64)) throw console.error("[Telegram.WebApp] Popup button id is too long", J), Error("WebAppPopupParamInvalid");
                  N.id = J;
                  var G = D.type;
                  if (typeof G == "undefined" && (G = "default"), N.type = G, !(G == "ok" || G == "close" || G == "cancel")) if (G == "default" || G == "destructive") {
                    var pe = "";
                    if (typeof D.text != "undefined" && (pe = w(D.text)), !pe.length) throw console.error("[Telegram.WebApp] Popup button text is required for type " + G, D.text), Error("WebAppPopupParamInvalid");
                    if (pe.length > 64) throw console.error("[Telegram.WebApp] Popup button text is too long", pe), Error("WebAppPopupParamInvalid");
                    N.text = pe;
                  } else throw console.error("[Telegram.WebApp] Popup button type is invalid", G), Error("WebAppPopupParamInvalid");
                  A.push(N);
                }
              } else A.push({
                id: "",
                type: "close"
              });

              if (A.length < 1) throw console.error("[Telegram.WebApp] Popup should have at least one button"), Error("WebAppPopupParamInvalid");
              if (A.length > 3) throw console.error("[Telegram.WebApp] Popup should not have more than 3 buttons"), Error("WebAppPopupParamInvalid");
              I.buttons = A, rt = {
                callback: c
              }, e.postEvent("web_app_open_popup", !1, I);
            }, o.showAlert = function (l, c) {
              o.showPopup({
                message: l
              }, c ? function () {
                c();
              } : null);
            }, o.showConfirm = function (l, c) {
              o.showPopup({
                message: l,
                buttons: [{
                  type: "ok",
                  id: "ok"
                }, {
                  type: "cancel"
                }]
              }, c ? function (p) {
                c(p == "ok");
              } : null);
            }, o.showScanQrPopup = function (l, c) {
              if (!q("6.4")) throw console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version " + f), Error("WebAppMethodUnsupported");
              if (Te) throw console.error("[Telegram.WebApp] Popup is already opened"), Error("WebAppScanQrPopupOpened");
              var p = "",
                  g = {};

              if (typeof l.text != "undefined") {
                if (p = w(l.text), p.length > 64) throw console.error("[Telegram.WebApp] Scan QR popup text is too long", p), Error("WebAppScanQrPopupParamInvalid");
                p.length > 0 && (g.text = p);
              }

              Te = {
                callback: c
              }, e.postEvent("web_app_open_scan_qr_popup", !1, g);
            }, o.closeScanQrPopup = function () {
              if (!q("6.4")) throw console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version " + f), Error("WebAppMethodUnsupported");
              Te = !1, e.postEvent("web_app_close_scan_qr_popup", !1);
            }, o.readTextFromClipboard = function (l) {
              if (!q("6.4")) throw console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version " + f), Error("WebAppMethodUnsupported");

              var c = _e(16),
                  p = {
                req_id: c
              };

              F[c] = {
                callback: l
              }, e.postEvent("web_app_read_text_from_clipboard", !1, p);
            }, o.requestWriteAccess = function (l) {
              if (!q("6.9")) throw console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version " + f), Error("WebAppMethodUnsupported");
              if (nt) throw console.error("[Telegram.WebApp] Write access is already requested"), Error("WebAppWriteAccessRequested");
              nt = {
                callback: l
              }, e.postEvent("web_app_request_write_access");
            }, o.requestContact = function (l) {
              if (!q("6.9")) throw console.error("[Telegram.WebApp] Method requestContact is not supported in version " + f), Error("WebAppMethodUnsupported");
              if (ot) throw console.error("[Telegram.WebApp] Contact is already requested"), Error("WebAppContactRequested");
              ot = {
                callback: l
              }, e.postEvent("web_app_request_phone");
            }, o.shareToStory = function (l, c) {
              if (c = c || {}, !q("7.8")) throw console.error("[Telegram.WebApp] Method shareToStory is not supported in version " + f), Error("WebAppMethodUnsupported");
              var p = document.createElement("A");
              if (p.href = l, p.protocol != "http:" && p.protocol != "https:") throw console.error("[Telegram.WebApp] Media url protocol is not supported", url), Error("WebAppMediaUrlInvalid");
              var g = {};

              if (g.media_url = p.href, typeof c.text != "undefined") {
                var A = w(c.text);
                if (A.length > 2048) throw console.error("[Telegram.WebApp] Text is too long", A), Error("WebAppShareToStoryParamInvalid");
                A.length > 0 && (g.text = A);
              }

              if (typeof c.widget_link != "undefined") {
                if (c.widget_link = c.widget_link || {}, p.href = c.widget_link.url, p.protocol != "http:" && p.protocol != "https:") throw console.error("[Telegram.WebApp] Link protocol is not supported", url), Error("WebAppShareToStoryParamInvalid");
                var R = {
                  url: p.href
                };

                if (typeof c.widget_link.name != "undefined") {
                  var I = w(c.widget_link.name);
                  if (I.length > 48) throw console.error("[Telegram.WebApp] Link name is too long", I), Error("WebAppShareToStoryParamInvalid");
                  I.length > 0 && (R.name = I);
                }

                g.widget_link = R;
              }

              e.postEvent("web_app_share_to_story", !1, g);
            }, o.invokeCustomMethod = function (l, c, p) {
              gr(l, c, p);
            }, o.ready = function () {
              e.postEvent("web_app_ready");
            }, o.expand = function () {
              e.postEvent("web_app_expand");
            }, o.close = function (l) {
              l = l || {};
              var c = {};
              q("7.6") && l.return_back && (c.return_back = !0), e.postEvent("web_app_close", !1, c);
            }, window.Telegram.WebApp = o, Sn(), yr(), ae(), r.tgWebAppShowSettings && xn.show(), window.addEventListener("resize", j), n && document.addEventListener("click", h), e.onEvent("theme_changed", T), e.onEvent("viewport_changed", W), e.onEvent("invoice_closed", va), e.onEvent("popup_closed", wa), e.onEvent("qr_text_received", Aa), e.onEvent("scan_qr_popup_closed", Ea), e.onEvent("clipboard_text_received", Sa), e.onEvent("write_access_requested", _a), e.onEvent("phone_requested", xa), e.onEvent("custom_method_invoked", Ia), e.postEvent("web_app_request_theme"), e.postEvent("web_app_request_viewport");
          })();

          var Cn = Pn(Mn(), 1);
          var Ct = Cn.default;
          var Rn = "0.0.5";

          var Wa = function Wa(t) {
            if (t === void 0) {
              t = "square";
            }

            return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiBmaWxsPSIjRkY3NDAwIi8+CjxwYXRoIGQ9Ik0zMDAuMDcgMzY2LjI0SDcyNC4zNjJDNzYzLjE5IDM2Ni4yNCA3OTQuNjY3IDM5Ny43MTcgNzk0LjY2NyA0MzYuNTQ1VjcxMS43NjhDNzk0LjY2NyA3NTAuNTk3IDc2My4xOSA3ODIuMDczIDcyNC4zNjIgNzgyLjA3M0gzMDAuMDcxQzI2MS4yNDMgNzgyLjA3MyAyMjkuNzY2IDc1MC41OTcgMjI5Ljc2NiA3MTEuNzY4VjQzNi41NDNDMjI5Ljc2NiAzOTcuNzE2IDI2MS4yNDIgMzY2LjI0IDMwMC4wNyAzNjYuMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI5LjUzMjg4Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQyLjk3MSAyNzcuNjA5TDMwOS41MDkgMzE3LjE3MUMyODIuMjc0IDMyMC40MDIgMjYxLjA1NiAzNDIuMzIyIDI1OC43MTMgMzY5LjY0OEwyNTguMzI3IDM3NC4xNTVWMzkwLjkzNkg2OTYuMDI5TDY3NC4zNzYgMjk5LjU2QzY3MS4wMDQgMjg1LjMyNyA2NTcuNDk1IDI3NS44ODYgNjQyLjk3MSAyNzcuNjA5Wk03MDYuNjU3IDI5MS45MUM2OTkuMzk4IDI2MS4yNzggNjcwLjMyNCAyNDAuOTU2IDYzOS4wNjMgMjQ0LjY2NUwzMDUuNjAxIDI4NC4yMjdDMjYyLjczOCAyODkuMzEyIDIyOS4zNDYgMzIzLjgxIDIyNS42NiAzNjYuODE1TDIyNS4xNTIgMzcyLjczNlY0NDYuMzY1TDI3MC4yNjYgNDIyLjU5SDczNy42MjNMNzA2LjY1NyAyOTEuOTFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTIzLjA5MiA3MjEuMzU0SDU4My4yNjNDNTk2LjA2NyA3MjEuMzU0IDYwMi45NzkgNzA2LjMzOSA1OTQuNjUyIDY5Ni42MTJMNTAyLjI3NCA1ODguNjk2QzUwMS41IDU4Ny43OTIgNTAxLjUwMyA1ODYuNDU3IDUwMi4yODIgNTg1LjU1N0w2MjUuNzI3IDQ0Mi43NEM2MzQuMTIzIDQzMy4wMjggNjI3LjIyMyA0MTcuOTQ0IDYxNC4zODUgNDE3Ljk0NEg1NTQuMzE0QzU0OS45NTUgNDE3Ljk0NCA1NDUuODEyIDQxOS44NDEgNTQyLjk2NCA0MjMuMTRMNDA5Ljc2OSA1NzcuNDYzQzQwNC45MjcgNTgzLjA3MyA0MDQuOTExIDU5MS4zOCA0MDkuNzMgNTk3LjAwOUw1MTEuNzA0IDcxNi4xMTJDNTE0LjU1MiA3MTkuNDM5IDUxOC43MTMgNzIxLjM1NCA1MjMuMDkyIDcyMS4zNTRaIiBmaWxsPSIjRkY3NDAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEyLjU4NSIvPgo8cGF0aCBkPSJNMzIyLjMzOSA3MjEuMzU2SDM4Mi40NjNDMzg2LjgzIDcyMS4zNTYgMzkwLjk4MSA3MTkuNDUxIDM5My44MjkgNzE2LjE0TDQ5Ni4zOTggNTk2Ljg5NUM1MDEuMjMzIDU5MS4yNzQgNTAxLjIzMyA1ODIuOTYzIDQ5Ni4zOTkgNTc3LjM0MkwzOTMuODI5IDQ1OC4wODRDMzkwLjk4MSA0NTQuNzcyIDM4Ni44MyA0NTIuODY4IDM4Mi40NjIgNDUyLjg2OEgzMjIuMzM4QzMwOS41MTggNDUyLjg2OCAzMDIuNjEyIDQ2Ny45MTYgMzEwLjk3MiA0NzcuNjM2TDQwMy43ODMgNTg1LjU0OEM0MDQuNTU5IDU4Ni40NTEgNDA0LjU1OSA1ODcuNzg1IDQwMy43ODMgNTg4LjY4OEwzMTAuOTczIDY5Ni41ODdDMzAyLjYxMyA3MDYuMzA3IDMwOS41MTggNzIxLjM1NiAzMjIuMzM5IDcyMS4zNTZaIiBmaWxsPSIjRkY3NDAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEyLjU4NSIvPgo8cGF0aCBkPSJNNzMxLjYyNyA0ODdDNjg2LjgzNSA0ODcgNjUwLjUyMyA1MjMuMzExIDY1MC41MjMgNTY4LjEwM0M2NTAuNTIzIDYxMi44OTUgNjg2LjgzNSA2NDkuMjA3IDczMS42MjcgNjQ5LjIwN0g4MDguMDAyQzgzNS4yMTcgNjQ5LjIwNyA4NTcuMjc5IDYyNy4xNDUgODU3LjI3OSA1OTkuOTNWNTM2LjI3N0M4NTcuMjc5IDUwOS4wNjIgODM1LjIxNyA0ODcgODA4LjAwMiA0ODdINzMxLjYyN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODA4LjAwMiA1MTguMjc5SDczMS42MjdDNzA0LjExIDUxOC4yNzkgNjgxLjgwMiA1NDAuNTg2IDY4MS44MDIgNTY4LjEwM0M2ODEuODAyIDU5NS42MiA3MDQuMTEgNjE3LjkyOCA3MzEuNjI3IDYxNy45MjhIODA4LjAwMkM4MTcuOTQyIDYxNy45MjggODI2IDYwOS44NyA4MjYgNTk5LjkzVjUzNi4yNzdDODI2IDUyNi4zMzcgODE3Ljk0MiA1MTguMjc5IDgwOC4wMDIgNTE4LjI3OVpNNzMxLjYyNyA0ODdDNjg2LjgzNSA0ODcgNjUwLjUyMyA1MjMuMzExIDY1MC41MjMgNTY4LjEwM0M2NTAuNTIzIDYxMi44OTUgNjg2LjgzNSA2NDkuMjA3IDczMS42MjcgNjQ5LjIwN0g4MDguMDAyQzgzNS4yMTcgNjQ5LjIwNyA4NTcuMjc5IDYyNy4xNDUgODU3LjI3OSA1OTkuOTNWNTM2LjI3N0M4NTcuMjc5IDUwOS4wNjIgODM1LjIxNyA0ODcgODA4LjAwMiA0ODdINzMxLjYyN1oiIGZpbGw9IiNGRjc0MDAiLz4KPGNpcmNsZSBjeD0iNzM1LjEyNSIgY3k9IjU2OC45MDUiIHI9IjI1LjkwNDciIGZpbGw9IiNGRjc0MDAiLz4KPC9zdmc+Cg==";
          },
              lt = {
            id: "uxuy",
            version: Rn,
            name: "UXUY Wallet",
            homepage: "https://uxuy.com",
            logo: Wa(),
            description: "The first Self-Custody Multi-Chain Wallet based on Telegram, crafted by the @uxuycom team \u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
            downloadLinks: {
              android: "https://download.uxuy.com/v0.1/uxuy-release.apk",
              googlePlay: "https://play.google.com/store/apps/details?id=com.uxuySdk.wallet",
              ios: "https://uxuy.com/download",
              appleStore: "https://uxuy.com/download",
              testflight: "https://uxuy.com/download",
              telegram: "https://t.me/UXUYbot/app",
              browserExtension: {
                chrome: "",
                edge: ""
              }
            },
            deepLinks: {
              scheme: "uxuy://",
              universallink: "https://",
              direct_link: "https://t.me/UXUYbot/app"
            }
          },
              Rt = {
            bridge: "https://bridge.uxrelay.com",
            connect: "https://connector.uxrelay.com",
            connect_direct_link: "https://t.me/UXUYbot/app"
          };

          function ct(t, e) {
            return function () {
              return t.apply(e, arguments);
            };
          }

          var {
            toString: ja
          } = Object.prototype,
              {
            getPrototypeOf: Er
          } = Object,
              Dt = (t => e => {
            var r = ja.call(e);
            return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
          })(Object.create(null)),
              ce = t => (t = t.toLowerCase(), e => Dt(e) === t),
              Ut = t => e => typeof e === t,
              {
            isArray: ke
          } = Array,
              ut = Ut("undefined");

          function La(t) {
            return t !== null && !ut(t) && t.constructor !== null && !ut(t.constructor) && oe(t.constructor.isBuffer) && t.constructor.isBuffer(t);
          }

          var Un = ce("ArrayBuffer");

          function Ba(t) {
            var e;
            return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Un(t.buffer), e;
          }

          var qa = Ut("string"),
              oe = Ut("function"),
              Wn = Ut("number"),
              Wt = t => t !== null && typeof t == "object",
              Fa = t => t === !0 || t === !1,
              kt = t => {
            if (Dt(t) !== "object") return !1;
            var e = Er(t);
            return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
          },
              za = ce("Date"),
              Ha = ce("File"),
              $a = ce("Blob"),
              Ya = ce("FileList"),
              Va = t => Wt(t) && oe(t.pipe),
              Ja = t => {
            var e;
            return t && (typeof FormData == "function" && t instanceof FormData || oe(t.append) && ((e = Dt(t)) === "formdata" || e === "object" && oe(t.toString) && t.toString() === "[object FormData]"));
          },
              Ga = ce("URLSearchParams"),
              [Qa, Ka, Xa, Za] = ["ReadableStream", "Request", "Response", "Headers"].map(ce),
              es = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

          function ft(t, e, _temp) {
            var {
              allOwnKeys: r = !1
            } = _temp === void 0 ? {} : _temp;
            if (t === null || typeof t == "undefined") return;
            var n, o;
            if (typeof t != "object" && (t = [t]), ke(t)) for (n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);else {
              var i = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
                  a = i.length,
                  s;

              for (n = 0; n < a; n++) s = i[n], e.call(null, t[s], s, t);
            }
          }

          function jn(t, e) {
            e = e.toLowerCase();
            var r = Object.keys(t),
                n = r.length,
                o;

            for (; n-- > 0;) if (o = r[n], e === o.toLowerCase()) return o;

            return null;
          }

          var Ie = (() => typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global)(),
              Ln = t => !ut(t) && t !== Ie;

          function Ar() {
            var {
              caseless: t
            } = Ln(this) && this || {},
                e = {},
                r = (n, o) => {
              var i = t && jn(e, o) || o;
              kt(e[i]) && kt(n) ? e[i] = Ar(e[i], n) : kt(n) ? e[i] = Ar({}, n) : ke(n) ? e[i] = n.slice() : e[i] = n;
            };

            for (var n = 0, o = arguments.length; n < o; n++) arguments[n] && ft(arguments[n], r);

            return e;
          }

          var ts = function ts(t, e, r, _temp2) {
            var {
              allOwnKeys: n
            } = _temp2 === void 0 ? {} : _temp2;
            return ft(e, (o, i) => {
              r && oe(o) ? t[i] = ct(o, r) : t[i] = o;
            }, {
              allOwnKeys: n
            }), t;
          },
              rs = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
              ns = (t, e, r, n) => {
            t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
              value: e.prototype
            }), r && Object.assign(t.prototype, r);
          },
              os = (t, e, r, n) => {
            var o,
                i,
                a,
                s = {};
            if (e = e || {}, t == null) return e;

            do {
              for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0;) a = o[i], (!n || n(a, t, e)) && !s[a] && (e[a] = t[a], s[a] = !0);

              t = r !== !1 && Er(t);
            } while (t && (!r || r(t, e)) && t !== Object.prototype);

            return e;
          },
              is = (t, e, r) => {
            t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
            var n = t.indexOf(e, r);
            return n !== -1 && n === r;
          },
              as = t => {
            if (!t) return null;
            if (ke(t)) return t;
            var e = t.length;
            if (!Wn(e)) return null;
            var r = new Array(e);

            for (; e-- > 0;) r[e] = t[e];

            return r;
          },
              ss = (t => e => t && e instanceof t)(typeof Uint8Array != "undefined" && Er(Uint8Array)),
              ls = (t, e) => {
            var n = (t && t[Symbol.iterator]).call(t),
                o;

            for (; (o = n.next()) && !o.done;) {
              var i = o.value;
              e.call(t, i[0], i[1]);
            }
          },
              cs = (t, e) => {
            var r,
                n = [];

            for (; (r = t.exec(e)) !== null;) n.push(r);

            return n;
          },
              us = ce("HTMLFormElement"),
              fs = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
            return n.toUpperCase() + o;
          }),
              kn = (_ref2 => {
            var {
              hasOwnProperty: t
            } = _ref2;
            return (e, r) => t.call(e, r);
          })(Object.prototype),
              ps = ce("RegExp"),
              Bn = (t, e) => {
            var r = Object.getOwnPropertyDescriptors(t),
                n = {};
            ft(r, (o, i) => {
              var a;
              (a = e(o, i, t)) !== !1 && (n[i] = a || o);
            }), Object.defineProperties(t, n);
          },
              ds = t => {
            Bn(t, (e, r) => {
              if (oe(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
              var n = t[r];

              if (oe(n)) {
                if (e.enumerable = !1, "writable" in e) {
                  e.writable = !1;
                  return;
                }

                e.set || (e.set = () => {
                  throw Error("Can not rewrite read-only method '" + r + "'");
                });
              }
            });
          },
              ms = (t, e) => {
            var r = {},
                n = o => {
              o.forEach(i => {
                r[i] = !0;
              });
            };

            return ke(t) ? n(t) : n(String(t).split(e)), r;
          },
              hs = () => {},
              ys = (t, e) => t != null && Number.isFinite(t = +t) ? t : e,
              wr = "abcdefghijklmnopqrstuvwxyz",
              Dn = "0123456789",
              qn = {
            DIGIT: Dn,
            ALPHA: wr,
            ALPHA_DIGIT: wr + wr.toUpperCase() + Dn
          },
              gs = function gs(t, e) {
            if (t === void 0) {
              t = 16;
            }

            if (e === void 0) {
              e = qn.ALPHA_DIGIT;
            }

            var r = "",
                {
              length: n
            } = e;

            for (; t--;) r += e[Math.random() * n | 0];

            return r;
          };

          function bs(t) {
            return !!(t && oe(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
          }

          var vs = t => {
            var e = new Array(10),
                r = (n, o) => {
              if (Wt(n)) {
                if (e.indexOf(n) >= 0) return;

                if (!("toJSON" in n)) {
                  e[o] = n;
                  var i = ke(n) ? [] : {};
                  return ft(n, (a, s) => {
                    var u = r(a, o + 1);
                    !ut(u) && (i[s] = u);
                  }), e[o] = void 0, i;
                }
              }

              return n;
            };

            return r(t, 0);
          },
              ws = ce("AsyncFunction"),
              As = t => t && (Wt(t) || oe(t)) && oe(t.then) && oe(t.catch),
              Fn = ((t, e) => t ? setImmediate : e ? ((r, n) => (Ie.addEventListener("message", _ref3 => {
            var {
              source: o,
              data: i
            } = _ref3;
            o === Ie && i === r && n.length && n.shift()();
          }, !1), o => {
            n.push(o), Ie.postMessage(r, "*");
          }))("axios@" + Math.random(), []) : r => setTimeout(r))(typeof setImmediate == "function", oe(Ie.postMessage)),
              Es = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Ie) : typeof process != "undefined" && process.nextTick || Fn,
              m = {
            isArray: ke,
            isArrayBuffer: Un,
            isBuffer: La,
            isFormData: Ja,
            isArrayBufferView: Ba,
            isString: qa,
            isNumber: Wn,
            isBoolean: Fa,
            isObject: Wt,
            isPlainObject: kt,
            isReadableStream: Qa,
            isRequest: Ka,
            isResponse: Xa,
            isHeaders: Za,
            isUndefined: ut,
            isDate: za,
            isFile: Ha,
            isBlob: $a,
            isRegExp: ps,
            isFunction: oe,
            isStream: Va,
            isURLSearchParams: Ga,
            isTypedArray: ss,
            isFileList: Ya,
            forEach: ft,
            merge: Ar,
            extend: ts,
            trim: es,
            stripBOM: rs,
            inherits: ns,
            toFlatObject: os,
            kindOf: Dt,
            kindOfTest: ce,
            endsWith: is,
            toArray: as,
            forEachEntry: ls,
            matchAll: cs,
            isHTMLForm: us,
            hasOwnProperty: kn,
            hasOwnProp: kn,
            reduceDescriptors: Bn,
            freezeMethods: ds,
            toObjectSet: ms,
            toCamelCase: fs,
            noop: hs,
            toFiniteNumber: ys,
            findKey: jn,
            global: Ie,
            isContextDefined: Ln,
            ALPHABET: qn,
            generateString: gs,
            isSpecCompliantForm: bs,
            toJSONObject: vs,
            isAsyncFn: ws,
            isThenable: As,
            setImmediate: Fn,
            asap: Es
          };

          function De(t, e, r, n, o) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o);
          }

          m.inherits(De, Error, {
            toJSON: function toJSON() {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: m.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
              };
            }
          });
          var zn = De.prototype,
              Hn = {};
          ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
            Hn[t] = {
              value: t
            };
          });
          Object.defineProperties(De, Hn);
          Object.defineProperty(zn, "isAxiosError", {
            value: !0
          });

          De.from = (t, e, r, n, o, i) => {
            var a = Object.create(zn);
            return m.toFlatObject(t, a, function (u) {
              return u !== Error.prototype;
            }, s => s !== "isAxiosError"), De.call(a, t.message, e, r, n, o), a.cause = t, a.name = t.name, i && Object.assign(a, i), a;
          };

          var P = De;
          var jt = null;

          function Sr(t) {
            return m.isPlainObject(t) || m.isArray(t);
          }

          function Yn(t) {
            return m.endsWith(t, "[]") ? t.slice(0, -2) : t;
          }

          function $n(t, e, r) {
            return t ? t.concat(e).map(function (o, i) {
              return o = Yn(o), !r && i ? "[" + o + "]" : o;
            }).join(r ? "." : "") : e;
          }

          function Ss(t) {
            return m.isArray(t) && !t.some(Sr);
          }

          var _s = m.toFlatObject(m, {}, null, function (e) {
            return /^is[A-Z]/.test(e);
          });

          function Ts(t, e, r) {
            if (!m.isObject(t)) throw new TypeError("target must be an object");
            e = e || new (jt || FormData)(), r = m.toFlatObject(r, {
              metaTokens: !0,
              dots: !1,
              indexes: !1
            }, !1, function (T, E) {
              return !m.isUndefined(E[T]);
            });
            var n = r.metaTokens,
                o = r.visitor || d,
                i = r.dots,
                a = r.indexes,
                u = (r.Blob || typeof Blob != "undefined" && Blob) && m.isSpecCompliantForm(e);
            if (!m.isFunction(o)) throw new TypeError("visitor must be a function");

            function f(v) {
              if (v === null) return "";
              if (m.isDate(v)) return v.toISOString();
              if (!u && m.isBlob(v)) throw new P("Blob is not supported. Use a Buffer instead.");
              return m.isArrayBuffer(v) || m.isTypedArray(v) ? u && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
            }

            function d(v, T, E) {
              var W = v;

              if (v && !E && typeof v == "object") {
                if (m.endsWith(T, "{}")) T = n ? T : T.slice(0, -2), v = JSON.stringify(v);else if (m.isArray(v) && Ss(v) || (m.isFileList(v) || m.endsWith(T, "[]")) && (W = m.toArray(v))) return T = Yn(T), W.forEach(function (h, w) {
                  !(m.isUndefined(h) || h === null) && e.append(a === !0 ? $n([T], w, i) : a === null ? T : T + "[]", f(h));
                }), !1;
              }

              return Sr(v) ? !0 : (e.append($n(E, T, i), f(v)), !1);
            }

            var y = [],
                b = Object.assign(_s, {
              defaultVisitor: d,
              convertValue: f,
              isVisitable: Sr
            });

            function x(v, T) {
              if (!m.isUndefined(v)) {
                if (y.indexOf(v) !== -1) throw Error("Circular reference detected in " + T.join("."));
                y.push(v), m.forEach(v, function (W, j) {
                  (!(m.isUndefined(W) || W === null) && o.call(e, W, m.isString(j) ? j.trim() : j, T, b)) === !0 && x(W, T ? T.concat(j) : [j]);
                }), y.pop();
              }
            }

            if (!m.isObject(t)) throw new TypeError("data must be an object");
            return x(t), e;
          }

          var ve = Ts;

          function Vn(t) {
            var e = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+",
              "%00": "\0"
            };
            return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (n) {
              return e[n];
            });
          }

          function Jn(t, e) {
            this._pairs = [], t && ve(t, this, e);
          }

          var Gn = Jn.prototype;

          Gn.append = function (e, r) {
            this._pairs.push([e, r]);
          };

          Gn.toString = function (e) {
            var r = e ? function (n) {
              return e.call(this, n, Vn);
            } : Vn;
            return this._pairs.map(function (o) {
              return r(o[0]) + "=" + r(o[1]);
            }, "").join("&");
          };

          var Lt = Jn;

          function xs(t) {
            return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
          }

          function pt(t, e, r) {
            if (!e) return t;
            var n = r && r.encode || xs,
                o = r && r.serialize,
                i;

            if (o ? i = o(e, r) : i = m.isURLSearchParams(e) ? e.toString() : new Lt(e, r).toString(n), i) {
              var a = t.indexOf("#");
              a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
            }

            return t;
          }

          var _r = class {
            constructor() {
              this.handlers = [];
            }

            use(e, r, n) {
              return this.handlers.push({
                fulfilled: e,
                rejected: r,
                synchronous: n ? n.synchronous : !1,
                runWhen: n ? n.runWhen : null
              }), this.handlers.length - 1;
            }

            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }

            clear() {
              this.handlers && (this.handlers = []);
            }

            forEach(e) {
              m.forEach(this.handlers, function (n) {
                n !== null && e(n);
              });
            }

          },
              Tr = _r;

          var Bt = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
          };
          var Qn = typeof URLSearchParams != "undefined" ? URLSearchParams : Lt;
          var Kn = typeof FormData != "undefined" ? FormData : null;
          var Xn = typeof Blob != "undefined" ? Blob : null;
          var Zn = {
            isBrowser: !0,
            classes: {
              URLSearchParams: Qn,
              FormData: Kn,
              Blob: Xn
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
          };
          var Ir = {};
          In(Ir, {
            hasBrowserEnv: () => xr,
            hasStandardBrowserEnv: () => Is,
            hasStandardBrowserWebWorkerEnv: () => Os,
            origin: () => Ps
          });

          var xr = typeof window != "undefined" && typeof document != "undefined",
              Is = (t => xr && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator != "undefined" && navigator.product),
              Os = (() => typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
              Ps = xr && window.location.href || "http://localhost";

          var X = _extends({}, Ir, Zn);

          function Or(t, e) {
            return ve(t, new X.classes.URLSearchParams(), Object.assign({
              visitor: function visitor(r, n, o, i) {
                return X.isNode && m.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
              }
            }, e));
          }

          function Ns(t) {
            return m.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0]);
          }

          function Ms(t) {
            var e = {},
                r = Object.keys(t),
                n,
                o = r.length,
                i;

            for (n = 0; n < o; n++) i = r[n], e[i] = t[i];

            return e;
          }

          function Cs(t) {
            function e(r, n, o, i) {
              var a = r[i++];
              if (a === "__proto__") return !0;
              var s = Number.isFinite(+a),
                  u = i >= r.length;
              return a = !a && m.isArray(o) ? o.length : a, u ? (m.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !m.isObject(o[a])) && (o[a] = []), e(r, n, o[a], i) && m.isArray(o[a]) && (o[a] = Ms(o[a])), !s);
            }

            if (m.isFormData(t) && m.isFunction(t.entries)) {
              var r = {};
              return m.forEachEntry(t, (n, o) => {
                e(Ns(n), o, r, 0);
              }), r;
            }

            return null;
          }

          var qt = Cs;

          function Rs(t, e, r) {
            if (m.isString(t)) try {
              return (e || JSON.parse)(t), m.trim(t);
            } catch (n) {
              if (n.name !== "SyntaxError") throw n;
            }
            return (r || JSON.stringify)(t);
          }

          var Pr = {
            transitional: Bt,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function (e, r) {
              var n = r.getContentType() || "",
                  o = n.indexOf("application/json") > -1,
                  i = m.isObject(e);
              if (i && m.isHTMLForm(e) && (e = new FormData(e)), m.isFormData(e)) return o ? JSON.stringify(qt(e)) : e;
              if (m.isArrayBuffer(e) || m.isBuffer(e) || m.isStream(e) || m.isFile(e) || m.isBlob(e) || m.isReadableStream(e)) return e;
              if (m.isArrayBufferView(e)) return e.buffer;
              if (m.isURLSearchParams(e)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
              var s;

              if (i) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) return Or(e, this.formSerializer).toString();

                if ((s = m.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                  var u = this.env && this.env.FormData;
                  return ve(s ? {
                    "files[]": e
                  } : e, u && new u(), this.formSerializer);
                }
              }

              return i || o ? (r.setContentType("application/json", !1), Rs(e)) : e;
            }],
            transformResponse: [function (e) {
              var r = this.transitional || Pr.transitional,
                  n = r && r.forcedJSONParsing,
                  o = this.responseType === "json";
              if (m.isResponse(e) || m.isReadableStream(e)) return e;

              if (e && m.isString(e) && (n && !this.responseType || o)) {
                var a = !(r && r.silentJSONParsing) && o;

                try {
                  return JSON.parse(e);
                } catch (s) {
                  if (a) throw s.name === "SyntaxError" ? P.from(s, P.ERR_BAD_RESPONSE, this, null, this.response) : s;
                }
              }

              return e;
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
              FormData: X.classes.FormData,
              Blob: X.classes.Blob
            },
            validateStatus: function validateStatus(e) {
              return e >= 200 && e < 300;
            },
            headers: {
              common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
              }
            }
          };
          m.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
            Pr.headers[t] = {};
          });
          var Ue = Pr;

          var ks = m.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
              eo = t => {
            var e = {},
                r,
                n,
                o;
            return t && t.split("\n ").forEach(function (a) {
              o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || e[r] && ks[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
            }), e;
          };

          var to = Symbol("internals");

          function dt(t) {
            return t && String(t).trim().toLowerCase();
          }

          function Ft(t) {
            return t === !1 || t == null ? t : m.isArray(t) ? t.map(Ft) : String(t);
          }

          function Ds(t) {
            var e = Object.create(null),
                r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
                n;

            for (; n = r.exec(t);) e[n[1]] = n[2];

            return e;
          }

          var Us = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

          function Nr(t, e, r, n, o) {
            if (m.isFunction(n)) return n.call(this, e, r);

            if (o && (e = r), !!m.isString(e)) {
              if (m.isString(n)) return e.indexOf(n) !== -1;
              if (m.isRegExp(n)) return n.test(e);
            }
          }

          function Ws(t) {
            return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
          }

          function js(t, e) {
            var r = m.toCamelCase(" " + e);
            ["get", "set", "has"].forEach(n => {
              Object.defineProperty(t, n + r, {
                value: function value(o, i, a) {
                  return this[n].call(this, e, o, i, a);
                },
                configurable: !0
              });
            });
          }

          var We = class {
            constructor(e) {
              e && this.set(e);
            }

            set(e, r, n) {
              var o = this;

              function i(s, u, f) {
                var d = dt(u);
                if (!d) throw new Error("header name must be a non-empty string");
                var y = m.findKey(o, d);
                (!y || o[y] === void 0 || f === !0 || f === void 0 && o[y] !== !1) && (o[y || u] = Ft(s));
              }

              var a = (s, u) => m.forEach(s, (f, d) => i(f, d, u));

              if (m.isPlainObject(e) || e instanceof this.constructor) a(e, r);else if (m.isString(e) && (e = e.trim()) && !Us(e)) a(eo(e), r);else if (m.isHeaders(e)) for (var [s, u] of e.entries()) i(u, s, n);else e != null && i(r, e, n);
              return this;
            }

            get(e, r) {
              if (e = dt(e), e) {
                var n = m.findKey(this, e);

                if (n) {
                  var o = this[n];
                  if (!r) return o;
                  if (r === !0) return Ds(o);
                  if (m.isFunction(r)) return r.call(this, o, n);
                  if (m.isRegExp(r)) return r.exec(o);
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            }

            has(e, r) {
              if (e = dt(e), e) {
                var n = m.findKey(this, e);
                return !!(n && this[n] !== void 0 && (!r || Nr(this, this[n], n, r)));
              }

              return !1;
            }

            delete(e, r) {
              var n = this,
                  o = !1;

              function i(a) {
                if (a = dt(a), a) {
                  var s = m.findKey(n, a);
                  s && (!r || Nr(n, n[s], s, r)) && (delete n[s], o = !0);
                }
              }

              return m.isArray(e) ? e.forEach(i) : i(e), o;
            }

            clear(e) {
              var r = Object.keys(this),
                  n = r.length,
                  o = !1;

              for (; n--;) {
                var i = r[n];
                (!e || Nr(this, this[i], i, e, !0)) && (delete this[i], o = !0);
              }

              return o;
            }

            normalize(e) {
              var r = this,
                  n = {};
              return m.forEach(this, (o, i) => {
                var a = m.findKey(n, i);

                if (a) {
                  r[a] = Ft(o), delete r[i];
                  return;
                }

                var s = e ? Ws(i) : String(i).trim();
                s !== i && delete r[i], r[s] = Ft(o), n[s] = !0;
              }), this;
            }

            concat() {
              for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
                e[_key] = arguments[_key];
              }

              return this.constructor.concat(this, ...e);
            }

            toJSON(e) {
              var r = Object.create(null);
              return m.forEach(this, (n, o) => {
                n != null && n !== !1 && (r[o] = e && m.isArray(n) ? n.join(", ") : n);
              }), r;
            }

            [Symbol.iterator]() {
              return Object.entries(this.toJSON())[Symbol.iterator]();
            }

            toString() {
              return Object.entries(this.toJSON()).map(_ref4 => {
                var [e, r] = _ref4;
                return e + ": " + r;
              }).join("\n ");
            }

            get [Symbol.toStringTag]() {
              return "AxiosHeaders";
            }

            static from(e) {
              return e instanceof this ? e : new this(e);
            }

            static concat(e) {
              var n = new this(e);

              for (var _len2 = arguments.length, r = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                r[_key2 - 1] = arguments[_key2];
              }

              return r.forEach(o => n.set(o)), n;
            }

            static accessor(e) {
              var n = (this[to] = this[to] = {
                accessors: {}
              }).accessors,
                  o = this.prototype;

              function i(a) {
                var s = dt(a);
                n[s] || (js(o, a), n[s] = !0);
              }

              return m.isArray(e) ? e.forEach(i) : i(e), this;
            }

          };
          We.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
          m.reduceDescriptors(We.prototype, (_ref5, e) => {
            var {
              value: t
            } = _ref5;
            var r = e[0].toUpperCase() + e.slice(1);
            return {
              get: () => t,

              set(n) {
                this[r] = n;
              }

            };
          });
          m.freezeMethods(We);
          var Q = We;

          function mt(t, e) {
            var r = this || Ue,
                n = e || r,
                o = Q.from(n.headers),
                i = n.data;
            return m.forEach(t, function (s) {
              i = s.call(r, i, o.normalize(), e ? e.status : void 0);
            }), o.normalize(), i;
          }

          function ht(t) {
            return !!(t && t.__CANCEL__);
          }

          function ro(t, e, r) {
            P.call(this, t == null ? "canceled" : t, P.ERR_CANCELED, e, r), this.name = "CanceledError";
          }

          m.inherits(ro, P, {
            __CANCEL__: !0
          });
          var de = ro;

          function yt(t, e, r) {
            var n = r.config.validateStatus;
            !r.status || !n || n(r.status) ? t(r) : e(new P("Request failed with status code " + r.status, [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
          }

          function Mr(t) {
            var e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
            return e && e[1] || "";
          }

          function Ls(t, e) {
            t = t || 10;
            var r = new Array(t),
                n = new Array(t),
                o = 0,
                i = 0,
                a;
            return e = e !== void 0 ? e : 1e3, function (u) {
              var f = Date.now(),
                  d = n[i];
              a || (a = f), r[o] = u, n[o] = f;
              var y = i,
                  b = 0;

              for (; y !== o;) b += r[y++], y = y % t;

              if (o = (o + 1) % t, o === i && (i = (i + 1) % t), f - a < e) return;
              var x = d && f - d;
              return x ? Math.round(b * 1e3 / x) : void 0;
            };
          }

          var no = Ls;

          function Bs(t, e) {
            var r = 0,
                n = 1e3 / e,
                o,
                i,
                a = function a(f, d) {
              if (d === void 0) {
                d = Date.now();
              }

              r = d, o = null, i && (clearTimeout(i), i = null), t.apply(null, f);
            };

            return [function () {
              var d = Date.now(),
                  y = d - r;

              for (var _len3 = arguments.length, f = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                f[_key3] = arguments[_key3];
              }

              y >= n ? a(f, d) : (o = f, i || (i = setTimeout(() => {
                i = null, a(o);
              }, n - y)));
            }, () => o && a(o)];
          }

          var oo = Bs;

          var je = function je(t, e, r) {
            if (r === void 0) {
              r = 3;
            }

            var n = 0,
                o = no(50, 250);
            return oo(i => {
              var a = i.loaded,
                  s = i.lengthComputable ? i.total : void 0,
                  u = a - n,
                  f = o(u),
                  d = a <= s;
              n = a;
              var y = {
                loaded: a,
                total: s,
                progress: s ? a / s : void 0,
                bytes: u,
                rate: f || void 0,
                estimated: f && s && d ? (s - a) / f : void 0,
                event: i,
                lengthComputable: s != null,
                [e ? "download" : "upload"]: !0
              };
              t(y);
            }, r);
          },
              Cr = (t, e) => {
            var r = t != null;
            return [n => e[0]({
              lengthComputable: r,
              total: t,
              loaded: n
            }), e[1]];
          },
              Rr = t => function () {
            for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              e[_key4] = arguments[_key4];
            }

            return m.asap(() => t(...e));
          };

          var io = X.hasStandardBrowserEnv ? function () {
            var e = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a"),
                n;

            function o(i) {
              var a = i;
              return e && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
              };
            }

            return n = o(window.location.href), function (a) {
              var s = m.isString(a) ? o(a) : a;
              return s.protocol === n.protocol && s.host === n.host;
            };
          }() : function () {
            return function () {
              return !0;
            };
          }();
          var ao = X.hasStandardBrowserEnv ? {
            write(t, e, r, n, o, i) {
              var a = [t + "=" + encodeURIComponent(e)];
              m.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), m.isString(n) && a.push("path=" + n), m.isString(o) && a.push("domain=" + o), i === !0 && a.push("secure"), document.cookie = a.join("; ");
            },

            read(t) {
              var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
              return e ? decodeURIComponent(e[3]) : null;
            },

            remove(t) {
              this.write(t, "", Date.now() - 864e5);
            }

          } : {
            write() {},

            read() {
              return null;
            },

            remove() {}

          };

          function kr(t) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
          }

          function Dr(t, e) {
            return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
          }

          function gt(t, e) {
            return t && !kr(e) ? Dr(t, e) : e;
          }

          var so = t => t instanceof Q ? _extends({}, t) : t;

          function ue(t, e) {
            e = e || {};
            var r = {};

            function n(f, d, y) {
              return m.isPlainObject(f) && m.isPlainObject(d) ? m.merge.call({
                caseless: y
              }, f, d) : m.isPlainObject(d) ? m.merge({}, d) : m.isArray(d) ? d.slice() : d;
            }

            function o(f, d, y) {
              if (m.isUndefined(d)) {
                if (!m.isUndefined(f)) return n(void 0, f, y);
              } else return n(f, d, y);
            }

            function i(f, d) {
              if (!m.isUndefined(d)) return n(void 0, d);
            }

            function a(f, d) {
              if (m.isUndefined(d)) {
                if (!m.isUndefined(f)) return n(void 0, f);
              } else return n(void 0, d);
            }

            function s(f, d, y) {
              if (y in e) return n(f, d);
              if (y in t) return n(void 0, f);
            }

            var u = {
              url: i,
              method: i,
              data: i,
              baseURL: a,
              transformRequest: a,
              transformResponse: a,
              paramsSerializer: a,
              timeout: a,
              timeoutMessage: a,
              withCredentials: a,
              withXSRFToken: a,
              adapter: a,
              responseType: a,
              xsrfCookieName: a,
              xsrfHeaderName: a,
              onUploadProgress: a,
              onDownloadProgress: a,
              decompress: a,
              maxContentLength: a,
              maxBodyLength: a,
              beforeRedirect: a,
              transport: a,
              httpAgent: a,
              httpsAgent: a,
              cancelToken: a,
              socketPath: a,
              responseEncoding: a,
              validateStatus: s,
              headers: (f, d) => o(so(f), so(d), !0)
            };
            return m.forEach(Object.keys(Object.assign({}, t, e)), function (d) {
              var y = u[d] || o,
                  b = y(t[d], e[d], d);
              m.isUndefined(b) && y !== s || (r[d] = b);
            }), r;
          }

          var zt = t => {
            var e = ue({}, t),
                {
              data: r,
              withXSRFToken: n,
              xsrfHeaderName: o,
              xsrfCookieName: i,
              headers: a,
              auth: s
            } = e;
            e.headers = a = Q.from(a), e.url = pt(gt(e.baseURL, e.url), t.params, t.paramsSerializer), s && a.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")));
            var u;

            if (m.isFormData(r)) {
              if (X.hasStandardBrowserEnv || X.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);else if ((u = a.getContentType()) !== !1) {
                var [f, ...d] = u ? u.split(";").map(y => y.trim()).filter(Boolean) : [];
                a.setContentType([f || "multipart/form-data", ...d].join("; "));
              }
            }

            if (X.hasStandardBrowserEnv && (n && m.isFunction(n) && (n = n(e)), n || n !== !1 && io(e.url))) {
              var _f = o && i && ao.read(i);

              _f && a.set(o, _f);
            }

            return e;
          };

          var qs = typeof XMLHttpRequest != "undefined",
              lo = qs && function (t) {
            return new Promise(function (r, n) {
              var o = zt(t),
                  i = o.data,
                  a = Q.from(o.headers).normalize(),
                  {
                responseType: s,
                onUploadProgress: u,
                onDownloadProgress: f
              } = o,
                  d,
                  y,
                  b,
                  x,
                  v;

              function T() {
                x && x(), v && v(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
              }

              var E = new XMLHttpRequest();
              E.open(o.method.toUpperCase(), o.url, !0), E.timeout = o.timeout;

              function W() {
                if (!E) return;
                var h = Q.from("getAllResponseHeaders" in E && E.getAllResponseHeaders()),
                    _ = {
                  data: !s || s === "text" || s === "json" ? E.responseText : E.response,
                  status: E.status,
                  statusText: E.statusText,
                  headers: h,
                  config: t,
                  request: E
                };
                yt(function (C) {
                  r(C), T();
                }, function (C) {
                  n(C), T();
                }, _), E = null;
              }

              "onloadend" in E ? E.onloadend = W : E.onreadystatechange = function () {
                !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(W);
              }, E.onabort = function () {
                E && (n(new P("Request aborted", P.ECONNABORTED, t, E)), E = null);
              }, E.onerror = function () {
                n(new P("Network Error", P.ERR_NETWORK, t, E)), E = null;
              }, E.ontimeout = function () {
                var w = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded",
                    _ = o.transitional || Bt;

                o.timeoutErrorMessage && (w = o.timeoutErrorMessage), n(new P(w, _.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED, t, E)), E = null;
              }, i === void 0 && a.setContentType(null), "setRequestHeader" in E && m.forEach(a.toJSON(), function (w, _) {
                E.setRequestHeader(_, w);
              }), m.isUndefined(o.withCredentials) || (E.withCredentials = !!o.withCredentials), s && s !== "json" && (E.responseType = o.responseType), f && ([b, v] = je(f, !0), E.addEventListener("progress", b)), u && E.upload && ([y, x] = je(u), E.upload.addEventListener("progress", y), E.upload.addEventListener("loadend", x)), (o.cancelToken || o.signal) && (d = h => {
                E && (n(!h || h.type ? new de(null, t, E) : h), E.abort(), E = null);
              }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
              var j = Mr(o.url);

              if (j && X.protocols.indexOf(j) === -1) {
                n(new P("Unsupported protocol " + j + ":", P.ERR_BAD_REQUEST, t));
                return;
              }

              E.send(i || null);
            });
          };

          var Fs = (t, e) => {
            var r = new AbortController(),
                n,
                o = function o(u) {
              if (!n) {
                n = !0, a();
                var f = u instanceof Error ? u : this.reason;
                r.abort(f instanceof P ? f : new de(f instanceof Error ? f.message : f));
              }
            },
                i = e && setTimeout(() => {
              o(new P("timeout " + e + " of ms exceeded", P.ETIMEDOUT));
            }, e),
                a = () => {
              t && (i && clearTimeout(i), i = null, t.forEach(u => {
                u && (u.removeEventListener ? u.removeEventListener("abort", o) : u.unsubscribe(o));
              }), t = null);
            };

            t.forEach(u => u && u.addEventListener && u.addEventListener("abort", o));
            var {
              signal: s
            } = r;
            return s.unsubscribe = a, [s, () => {
              i && clearTimeout(i), i = null;
            }];
          },
              co = Fs;

          var zs = function* zs(t, e) {
            var r = t.byteLength;

            if (!e || r < e) {
              yield t;
              return;
            }

            var n = 0,
                o;

            for (; n < r;) o = n + e, yield t.slice(n, o), n = o;
          },
              Hs = /*#__PURE__*/function () {
            var _ref = _wrapAsyncGenerator(function* (t, e, r) {
              var _iteratorAbruptCompletion = false;
              var _didIteratorError = false;

              var _iteratorError;

              try {
                for (var _iterator = _asyncIterator(t), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
                  var n = _step.value;
                  {
                    yield* _asyncGeneratorDelegate(_asyncIterator(zs(ArrayBuffer.isView(n) ? n : yield _awaitAsyncGenerator(r(String(n))), e)), _awaitAsyncGenerator);
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (_iteratorAbruptCompletion && _iterator.return != null) {
                    yield _awaitAsyncGenerator(_iterator.return());
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });

            return function Hs(_x, _x2, _x3) {
              return _ref.apply(this, arguments);
            };
          }(),
              Ur = (t, e, r, n, o) => {
            var i = Hs(t, e, o),
                a = 0,
                s,
                u = f => {
              s || (s = !0, n && n(f));
            };

            return new ReadableStream({
              pull(f) {
                return _asyncToGenerator(function* () {
                  try {
                    var {
                      done: d,
                      value: y
                    } = yield i.next();

                    if (d) {
                      u(), f.close();
                      return;
                    }

                    var b = y.byteLength;

                    if (r) {
                      var x = a += b;
                      r(x);
                    }

                    f.enqueue(new Uint8Array(y));
                  } catch (d) {
                    throw u(d), d;
                  }
                })();
              },

              cancel(f) {
                return u(f), i.return();
              }

            }, {
              highWaterMark: 2
            });
          };

          var $t = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
              fo = $t && typeof ReadableStream == "function",
              Wr = $t && (typeof TextEncoder == "function" ? (t => e => t.encode(e))(new TextEncoder()) : /*#__PURE__*/_asyncToGenerator(function* (t) {
            return new Uint8Array(yield new Response(t).arrayBuffer());
          })),
              po = function po(t) {
            try {
              for (var _len5 = arguments.length, e = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                e[_key5 - 1] = arguments[_key5];
              }

              return !!t(...e);
            } catch (r) {
              return !1;
            }
          },
              $s = fo && po(() => {
            var t = !1,
                e = new Request(X.origin, {
              body: new ReadableStream(),
              method: "POST",

              get duplex() {
                return t = !0, "half";
              }

            }).headers.has("Content-Type");
            return t && !e;
          }),
              uo = 64 * 1024,
              jr = fo && po(() => m.isReadableStream(new Response("").body)),
              Ht = {
            stream: jr && (t => t.body)
          };

          $t && (t => {
            ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
              !Ht[e] && (Ht[e] = m.isFunction(t[e]) ? r => r[e]() : (r, n) => {
                throw new P("Response type '" + e + "' is not supported", P.ERR_NOT_SUPPORT, n);
              });
            });
          })(new Response());

          var Ys = /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(function* (t) {
              if (t == null) return 0;
              if (m.isBlob(t)) return t.size;
              if (m.isSpecCompliantForm(t)) return (yield new Request(t).arrayBuffer()).byteLength;
              if (m.isArrayBufferView(t) || m.isArrayBuffer(t)) return t.byteLength;
              if (m.isURLSearchParams(t) && (t = t + ""), m.isString(t)) return (yield Wr(t)).byteLength;
            });

            return function Ys(_x5) {
              return _ref7.apply(this, arguments);
            };
          }(),
              Vs = /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(function* (t, e) {
              var r = m.toFiniteNumber(t.getContentLength());
              return r == null ? Ys(e) : r;
            });

            return function Vs(_x6, _x7) {
              return _ref8.apply(this, arguments);
            };
          }(),
              mo = $t && /*#__PURE__*/_asyncToGenerator(function* (t) {
            var {
              url: e,
              method: r,
              data: n,
              signal: o,
              cancelToken: i,
              timeout: a,
              onDownloadProgress: s,
              onUploadProgress: u,
              responseType: f,
              headers: d,
              withCredentials: y = "same-origin",
              fetchOptions: b
            } = zt(t);
            f = f ? (f + "").toLowerCase() : "text";

            var [x, v] = o || i || a ? co([o, i], a) : [],
                T,
                E,
                W = () => {
              !T && setTimeout(() => {
                x && x.unsubscribe();
              }), T = !0;
            },
                j;

            try {
              if (u && $s && r !== "get" && r !== "head" && (j = yield Vs(d, n)) !== 0) {
                var O = new Request(e, {
                  method: "POST",
                  body: n,
                  duplex: "half"
                }),
                    C;

                if (m.isFormData(n) && (C = O.headers.get("content-type")) && d.setContentType(C), O.body) {
                  var [k, V] = Cr(j, je(Rr(u)));
                  n = Ur(O.body, uo, k, V, Wr);
                }
              }

              m.isString(y) || (y = y ? "include" : "omit"), E = new Request(e, _extends({}, b, {
                signal: x,
                method: r.toUpperCase(),
                headers: d.normalize().toJSON(),
                body: n,
                duplex: "half",
                credentials: y
              }));
              var h = yield fetch(E),
                  w = jr && (f === "stream" || f === "response");

              if (jr && (s || w)) {
                var _O = {};
                ["status", "statusText", "headers"].forEach(F => {
                  _O[F] = h[F];
                });

                var _C = m.toFiniteNumber(h.headers.get("content-length")),
                    [_k, _V] = s && Cr(_C, je(Rr(s), !0)) || [];

                h = new Response(Ur(h.body, uo, _k, () => {
                  _V && _V(), w && W();
                }, Wr), _O);
              }

              f = f || "text";

              var _ = yield Ht[m.findKey(Ht, f) || "text"](h, t);

              return !w && W(), v && v(), yield new Promise((O, C) => {
                yt(O, C, {
                  data: _,
                  headers: Q.from(h.headers),
                  status: h.status,
                  statusText: h.statusText,
                  config: t,
                  request: E
                });
              });
            } catch (h) {
              throw W(), h && h.name === "TypeError" && /fetch/i.test(h.message) ? Object.assign(new P("Network Error", P.ERR_NETWORK, t, E), {
                cause: h.cause || h
              }) : P.from(h, h && h.code, t, E);
            }
          });

          var Lr = {
            http: jt,
            xhr: lo,
            fetch: mo
          };
          m.forEach(Lr, (t, e) => {
            if (t) {
              try {
                Object.defineProperty(t, "name", {
                  value: e
                });
              } catch (r) {}

              Object.defineProperty(t, "adapterName", {
                value: e
              });
            }
          });

          var ho = t => "- " + t,
              Js = t => m.isFunction(t) || t === null || t === !1,
              Yt = {
            getAdapter: t => {
              t = m.isArray(t) ? t : [t];
              var {
                length: e
              } = t,
                  r,
                  n,
                  o = {};

              for (var i = 0; i < e; i++) {
                r = t[i];
                var a = void 0;
                if (n = r, !Js(r) && (n = Lr[(a = String(r)).toLowerCase()], n === void 0)) throw new P("Unknown adapter '" + a + "'");
                if (n) break;
                o[a || "#" + i] = n;
              }

              if (!n) {
                var _i2 = Object.entries(o).map(_ref10 => {
                  var [s, u] = _ref10;
                  return "adapter " + s + " " + (u === !1 ? "is not supported by the environment" : "is not available in the build");
                }),
                    _a2 = e ? _i2.length > 1 ? "since :\n " + _i2.map(ho).join("\n ") : " " + ho(_i2[0]) : "as no adapter specified";

                throw new P("There is no suitable adapter to dispatch the request " + _a2, "ERR_NOT_SUPPORT");
              }

              return n;
            },
            adapters: Lr
          };

          function Br(t) {
            if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new de(null, t);
          }

          function Vt(t) {
            return Br(t), t.headers = Q.from(t.headers), t.data = mt.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Yt.getAdapter(t.adapter || Ue.adapter)(t).then(function (n) {
              return Br(t), n.data = mt.call(t, t.transformResponse, n), n.headers = Q.from(n.headers), n;
            }, function (n) {
              return ht(n) || (Br(t), n && n.response && (n.response.data = mt.call(t, t.transformResponse, n.response), n.response.headers = Q.from(n.response.headers))), Promise.reject(n);
            });
          }

          var Jt = "1.7.4";
          var qr = {};
          ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
            qr[t] = function (n) {
              return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
            };
          });
          var yo = {};

          qr.transitional = function (e, r, n) {
            function o(i, a) {
              return "[Axios v" + Jt + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
            }

            return (i, a, s) => {
              if (e === !1) throw new P(o(a, " has been removed" + (r ? " in " + r : "")), P.ERR_DEPRECATED);
              return r && !yo[a] && (yo[a] = !0, console.warn(o(a, " has been deprecated since v" + r + " and will be removed in the near future"))), e ? e(i, a, s) : !0;
            };
          };

          function Gs(t, e, r) {
            if (typeof t != "object") throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
            var n = Object.keys(t),
                o = n.length;

            for (; o-- > 0;) {
              var i = n[o],
                  a = e[i];

              if (a) {
                var s = t[i],
                    u = s === void 0 || a(s, i, t);
                if (u !== !0) throw new P("option " + i + " must be " + u, P.ERR_BAD_OPTION_VALUE);
                continue;
              }

              if (r !== !0) throw new P("Unknown option " + i, P.ERR_BAD_OPTION);
            }
          }

          var Gt = {
            assertOptions: Gs,
            validators: qr
          };
          var we = Gt.validators,
              Le = class {
            constructor(e) {
              this.defaults = e, this.interceptors = {
                request: new Tr(),
                response: new Tr()
              };
            }

            request(e, r) {
              var _this = this;

              return _asyncToGenerator(function* () {
                try {
                  return yield _this._request(e, r);
                } catch (n) {
                  if (n instanceof Error) {
                    var o;
                    Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
                    var i = o.stack ? o.stack.replace(/^.+\n/, "") : "";

                    try {
                      n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += "\n " + i) : n.stack = i;
                    } catch (a) {}
                  }

                  throw n;
                }
              })();
            }

            _request(e, r) {
              typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = ue(this.defaults, r);
              var {
                transitional: n,
                paramsSerializer: o,
                headers: i
              } = r;
              n !== void 0 && Gt.assertOptions(n, {
                silentJSONParsing: we.transitional(we.boolean),
                forcedJSONParsing: we.transitional(we.boolean),
                clarifyTimeoutError: we.transitional(we.boolean)
              }, !1), o != null && (m.isFunction(o) ? r.paramsSerializer = {
                serialize: o
              } : Gt.assertOptions(o, {
                encode: we.function,
                serialize: we.function
              }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
              var a = i && m.merge(i.common, i[r.method]);
              i && m.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
                delete i[v];
              }), r.headers = Q.concat(a, i);
              var s = [],
                  u = !0;
              this.interceptors.request.forEach(function (T) {
                typeof T.runWhen == "function" && T.runWhen(r) === !1 || (u = u && T.synchronous, s.unshift(T.fulfilled, T.rejected));
              });
              var f = [];
              this.interceptors.response.forEach(function (T) {
                f.push(T.fulfilled, T.rejected);
              });
              var d,
                  y = 0,
                  b;

              if (!u) {
                var v = [Vt.bind(this), void 0];

                for (v.unshift.apply(v, s), v.push.apply(v, f), b = v.length, d = Promise.resolve(r); y < b;) d = d.then(v[y++], v[y++]);

                return d;
              }

              b = s.length;
              var x = r;

              for (y = 0; y < b;) {
                var _v = s[y++],
                    T = s[y++];

                try {
                  x = _v(x);
                } catch (E) {
                  T.call(this, E);
                  break;
                }
              }

              try {
                d = Vt.call(this, x);
              } catch (v) {
                return Promise.reject(v);
              }

              for (y = 0, b = f.length; y < b;) d = d.then(f[y++], f[y++]);

              return d;
            }

            getUri(e) {
              e = ue(this.defaults, e);
              var r = gt(e.baseURL, e.url);
              return pt(r, e.params, e.paramsSerializer);
            }

          };
          m.forEach(["delete", "get", "head", "options"], function (e) {
            Le.prototype[e] = function (r, n) {
              return this.request(ue(n || {}, {
                method: e,
                url: r,
                data: (n || {}).data
              }));
            };
          });
          m.forEach(["post", "put", "patch"], function (e) {
            function r(n) {
              return function (i, a, s) {
                return this.request(ue(s || {}, {
                  method: e,
                  headers: n ? {
                    "Content-Type": "multipart/form-data"
                  } : {},
                  url: i,
                  data: a
                }));
              };
            }

            Le.prototype[e] = r(), Le.prototype[e + "Form"] = r(!0);
          });
          var bt = Le;
          var Fr = class t {
            constructor(e) {
              if (typeof e != "function") throw new TypeError("executor must be a function.");
              var r;
              this.promise = new Promise(function (i) {
                r = i;
              });
              var n = this;
              this.promise.then(o => {
                if (!n._listeners) return;
                var i = n._listeners.length;

                for (; i-- > 0;) n._listeners[i](o);

                n._listeners = null;
              }), this.promise.then = o => {
                var i,
                    a = new Promise(s => {
                  n.subscribe(s), i = s;
                }).then(o);
                return a.cancel = function () {
                  n.unsubscribe(i);
                }, a;
              }, e(function (i, a, s) {
                n.reason || (n.reason = new de(i, a, s), r(n.reason));
              });
            }

            throwIfRequested() {
              if (this.reason) throw this.reason;
            }

            subscribe(e) {
              if (this.reason) {
                e(this.reason);
                return;
              }

              this._listeners ? this._listeners.push(e) : this._listeners = [e];
            }

            unsubscribe(e) {
              if (!this._listeners) return;

              var r = this._listeners.indexOf(e);

              r !== -1 && this._listeners.splice(r, 1);
            }

            static source() {
              var e;
              return {
                token: new t(function (o) {
                  e = o;
                }),
                cancel: e
              };
            }

          },
              go = Fr;

          function zr(t) {
            return function (r) {
              return t.apply(null, r);
            };
          }

          function Hr(t) {
            return m.isObject(t) && t.isAxiosError === !0;
          }

          var $r = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
          };
          Object.entries($r).forEach(_ref11 => {
            var [t, e] = _ref11;
            $r[e] = t;
          });
          var bo = $r;

          function vo(t) {
            var e = new bt(t),
                r = ct(bt.prototype.request, e);
            return m.extend(r, bt.prototype, e, {
              allOwnKeys: !0
            }), m.extend(r, e, null, {
              allOwnKeys: !0
            }), r.create = function (o) {
              return vo(ue(t, o));
            }, r;
          }

          var Y = vo(Ue);
          Y.Axios = bt;
          Y.CanceledError = de;
          Y.CancelToken = go;
          Y.isCancel = ht;
          Y.VERSION = Jt;
          Y.toFormData = ve;
          Y.AxiosError = P;
          Y.Cancel = Y.CanceledError;

          Y.all = function (e) {
            return Promise.all(e);
          };

          Y.spread = zr;
          Y.isAxiosError = Hr;
          Y.mergeConfig = ue;
          Y.AxiosHeaders = Q;

          Y.formToJSON = t => qt(m.isHTMLForm(t) ? new FormData(t) : t);

          Y.getAdapter = Yt.getAdapter;
          Y.HttpStatusCode = bo;
          Y.default = Y;
          var vt = Y;
          var {
            Axios: ud,
            AxiosError: fd,
            CanceledError: pd,
            isCancel: dd,
            CancelToken: md,
            VERSION: hd,
            all: yd,
            Cancel: gd,
            isAxiosError: bd,
            spread: vd,
            toFormData: wd,
            AxiosHeaders: Ad,
            HttpStatusCode: Ed,
            formToJSON: Sd,
            getAdapter: _d,
            mergeConfig: Td
          } = vt;
          var oa = Pn(na());
          var Ce = {
            decodeTelegramUrlParameters: function decodeTelegramUrlParameters(e, r) {
              if (r === void 0) {
                r = !0;
              }

              var n = e.replaceAll("--", "%").replaceAll("__", "=").replaceAll("-", "&").replaceAll("%5F", "_").replaceAll("%2D", "-").replaceAll("%2E", ".");
              return r ? oa.default.parse(n) : n;
            },
            stringify: function stringify(e) {
              var r = new URLSearchParams();

              function n(o, i) {
                if (Array.isArray(i)) i.forEach((a, s) => {
                  /\[\]$/.test(o) ? r.append(o, a) : n(o + "[" + (typeof a == "object" ? s : "") + "]", a);
                });else if (typeof i == "object") for (var a in i) n(o + "[" + a + "]", i[a]);else r.append(o, i);
              }

              for (var o in e) n(o, e[o]);

              return r.toString();
            },
            encodeTelegramUrlParameters: function encodeTelegramUrlParameters(e, r) {
              if (r === void 0) {
                r = !0;
              }

              return r && (e = Ce.stringify(e)), e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--");
            },
            opendeepLink: function opendeepLink(e, _ref12) {
              var {
                domain: r = "UXUYbot",
                appname: n = "app"
              } = _ref12;
              var o = "tg://resolve?domain=" + r + "&appname=" + n + "&startapp=" + e,
                  i = document.getElementById("tgme_frame_cont") || document.body,
                  a = document.createElement("iframe");
              i.appendChild(a);
              var s = !1;
              window.addEventListener("visibilitychange", function () {
                s = document.hidden || document.webkitHidden || document.mozHidden || document.msHidden;
              }, !1), window.addEventListener("pagehide", function () {
                s = !0;
              }, !1), window.addEventListener("blur", function () {
                s = !0;
              }, !1), a !== null && (a.src = o), setTimeout(function () {
                s || (window.location = o);
              }, 2e3);
            }
          };

          function fr() {
            return t => t;
          }

          var im = fr(),
              am = fr(),
              sm = fr();
          var lm = fr();
          var Ge = {
            errors: {
              disconnected: () => "UXUYWallet: Disconnected from chain. Attempting to connect.",
              permanentlyDisconnected: () => "UXUYWallet: Disconnected from UXUYWallet background. Page reload required.",
              sendSiteMetadata: () => "UXUYWallet: Failed to send site metadata. This is an internal error, please report this bug.",
              unsupportedSync: t => "UXUYWallet: The UXUYWallet Ethereum provider does not support synchronous methods like " + t + " without a callback parameter.",
              invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
              invalidNetworkParams: () => "UXUYWallet: Received invalid network parameters. Please report this bug.",
              invalidRequestArgs: () => "Expected a single, non-array, object argument.",
              invalidRequestMethod: () => "'args.method' must be a non-empty string.",
              invalidRequestParams: () => "'args.params' must be an object or array if provided.",
              invalidLoggerObject: () => "'args.logger' must be an object if provided.",
              invalidLoggerMethod: t => "'args.logger' must include required method '" + t + "'.",
              invalidChains: t => "'UXUYWallet: not supported chain with ID '" + t + "'. try connect wallet to supported chain.",
              timeOut: t => "'UXUYWallet: Timed out while waiting for response from '" + t + "'."
            },
            info: {
              connected: t => "UXUYWallet: Connected to chain with ID \"" + t + "\"."
            },
            warnings: {
              chainIdDeprecation: "UXUYWallet: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.\n For more information, see: https://github.com/UXUYWallet/UXUYWallet-improvement-proposals/discussions/23",
              networkVersionDeprecation: "UXUYWallet: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.\n For more information, see: https://github.com/UXUYWallet/UXUYWallet-improvement-proposals/discussions/23",
              selectedAddressDeprecation: "UXUYWallet: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.\n For more information, see: https://github.com/UXUYWallet/UXUYWallet-improvement-proposals/discussions/23",
              enableDeprecation: "UXUYWallet: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\n For more information, see: https://eips.ethereum.org/EIPS/eip-1102",
              sendDeprecation: "UXUYWallet: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\n For more information, see: https://eips.ethereum.org/EIPS/eip-1193",
              events: {
                close: "UXUYWallet: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\n For more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect",
                data: "UXUYWallet: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\n For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message",
                networkChanged: "UXUYWallet: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\n For more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged",
                notification: "UXUYWallet: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\n For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message"
              },
              rpc: {
                ethDecryptDeprecation: "UXUYWallet: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\n For more information, see: https://medium.com/UXUYWallet/UXUYWallet-api-method-deprecation-2b0564a84686",
                ethGetEncryptionPublicKeyDeprecation: "UXUYWallet: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\n For more information, see: https://medium.com/UXUYWallet/UXUYWallet-api-method-deprecation-2b0564a84686",
                walletWatchAssetNFTExperimental: "UXUYWallet: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\n For more information, see: https://github.com/UXUYWallet/UXUYWallet-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/UXUYWallet/UXUYWallet-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle"
              },
              experimentalMethods: "UXUYWallet: 'ethereum._UXUYWallet' exposes non-standard, experimental methods. They may be removed or changed without warning."
            }
          },
              Tt = {
            rpc: {
              timeoutRequest: -30008,
              invalidInput: -32e3,
              resourceNotFound: -32001,
              resourceUnavailable: -32002,
              transactionRejected: -32003,
              methodNotSupported: -32004,
              limitExceeded: -32005,
              parse: -32700,
              invalidRequest: -32600,
              methodNotFound: -32601,
              invalidParams: -32602,
              internal: -32603
            },
            provider: {
              unsupportedChain: 4002,
              userRejectedRequest: 4001,
              unauthorized: 4100,
              unsupportedMethod: 4200,
              disconnected: 4900,
              chainDisconnected: 4901
            }
          },
              Jc = {
            "-32700": {
              standard: "JSON RPC 2.0",
              message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
              standard: "JSON RPC 2.0",
              message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
              standard: "JSON RPC 2.0",
              message: "The method does not exist / is not available."
            },
            "-32602": {
              standard: "JSON RPC 2.0",
              message: "Invalid method parameter(s)."
            },
            "-32603": {
              standard: "JSON RPC 2.0",
              message: "Internal JSON-RPC error."
            },
            "-32000": {
              standard: "EIP-1474",
              message: "Invalid input."
            },
            "-32001": {
              standard: "EIP-1474",
              message: "Resource not found."
            },
            "-32002": {
              standard: "EIP-1474",
              message: "Resource unavailable."
            },
            "-32003": {
              standard: "EIP-1474",
              message: "Transaction rejected."
            },
            "-32004": {
              standard: "EIP-1474",
              message: "Method not supported."
            },
            "-32005": {
              standard: "EIP-1474",
              message: "Request limit exceeded."
            },
            4001: {
              standard: "EIP-1193",
              message: "User rejected the request."
            },
            4100: {
              standard: "EIP-1193",
              message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
              standard: "EIP-1193",
              message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
              standard: "EIP-1193",
              message: "The provider is disconnected from all chains."
            },
            4901: {
              standard: "EIP-1193",
              message: "The provider is disconnected from the specified chain."
            }
          },
              ia = "Unspecified error message. This is a bug, please report it.",
              xt = {
            invalidRequest: function invalidRequest(_ref13) {
              var {
                code: t,
                message: e,
                data: r
              } = _ref13;
              return t = (t || Tt.rpc.invalidRequest).toString(), {
                code: t,
                message: e || Jc[t].message || ia,
                data: r
              };
            },
            methodNotSupported: function methodNotSupported(_ref14) {
              var {
                code: t,
                message: e,
                data: r
              } = _ref14;
              return {
                code: Tt.rpc.invalidRequest,
                message: ia || Ge.errors.invalidRequestArgs,
                data: r
              };
            }
          };

          function aa(t) {
            var r;
            var e = window.location.hostname;

            try {
              e = ((r = new URL((t == null ? void 0 : t.url) || "")) == null ? void 0 : r.hostname) || e;
            } catch (n) {
              console.warn("new URL(" + (t == null ? void 0 : t.url) + ") error");
            }

            return {
              url: (t == null ? void 0 : t.url) || "",
              hostname: e,
              name: (t == null ? void 0 : t.name) || Gc(window),
              icon: (t == null ? void 0 : t.icon) || Qc(window),
              direct_link: t == null ? void 0 : t.direct_link,
              description: t == null ? void 0 : t.description
            };
          }

          function Gc(t) {
            var {
              document: e
            } = t,
                r = e.querySelector('head > meta[property="og:site_name"]');
            if (r) return r.content;
            var n = e.querySelector('head > meta[name="title"]');
            return n ? n.content : e.title && e.title.length > 0 ? e.title : window.location.hostname;
          }

          function Qc(t) {
            var {
              document: e
            } = t,
                r = e.querySelectorAll('head > link[rel~="icon"]');

            for (var n of Array.from(r)) if (n) return n.href;

            return null;
          }

          function Kc(t) {
            var e = {
              type: "object",
              properties: {
                types: {
                  type: "object",
                  additionalProperties: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: {
                          type: "string"
                        },
                        type: {
                          type: "string"
                        }
                      },
                      required: ["name", "type"]
                    }
                  }
                },
                primaryType: {
                  type: "string"
                },
                domain: {
                  type: "object"
                },
                message: {
                  type: "object"
                }
              },
              required: ["types", "primaryType", "domain", "message"]
            },
                r = {};

            for (var n in e.properties) t[n] && (r[n] = t[n]);

            return "types" in r && (r.types = Object.assign({
              EIP712Domain: []
            }, r.types)), r;
          }

          function sa(t) {
            try {
              t = typeof t == "string" ? JSON.parse(t) : t;
            } catch (e) {
              console.log("EIP712Data is not a valid JSON string");
            }

            try {
              t = Kc(t);
              var e = {};
              return t.types[t.primaryType].map(_ref15 => {
                var {
                  name: n
                } = _ref15;
                e[n] = t.message[n];
              }), t.message = e, t;
            } catch (e) {
              console.error("parseEIP712 error");
            }

            return t;
          }

          function vn(t) {
            if (t === void 0) {
              t = "";
            }

            return t.length === 2 + 20 * 2;
          }

          var It = class extends Ct {
            constructor(_ref16) {
              var {
                protocol: e
              } = _ref16;
              super(), this.protocol = e, this._initializeChannelMessage();
            }

            _initializeChannelMessage() {}

          };

          function ge(t) {
            if (t === void 0) {
              t = 0;
            }

            return t = isNaN(Number(t)) ? 1 : Number(t), "0x" + t.toString(16);
          }

          var Qe = {
            address: "",
            chainId: "0x1",
            chainKey: "ethereum",
            alliance: "eth",
            chainName: "Ethereum netWork",
            chainSymbol: "ETH"
          },
              wn = class {
            constructor(e) {
              this.options = e, this.rpcMap = new Map(), this.peddingMap = new Map(), e != null && e.chainId && this.setUrl(e.url, e.chainId);
            }

            setUrl(e, r) {
              this.rpcMap.set(parseInt(r), e);
            }

            getUrl(e) {
              return this.rpcMap.get(parseInt(e));
            }

            send(e, r) {
              var _this2 = this;

              return _asyncToGenerator(function* () {
                var {
                  method: n,
                  params: o,
                  id: i
                } = e,
                    a = r.rpcUrl || _this2.getUrl(r.chainId),
                    s = {
                  jsonrpc: "2.0",
                  method: n,
                  params: o,
                  id: i || new Date().getTime()
                },
                    u = yield vt.post(a, s),
                    {
                  result: f,
                  error: d
                } = u.data;

                if (d) throw new Error(d);
                return u.data.result;
              })();
            }

            sendBatch(e, r) {
              var _this3 = this;

              return _asyncToGenerator(function* () {
                if (r === void 0) {
                  r = {};
                }

                var n = [];

                for (var o of e) {
                  var i = yield _this3.send(o, r);
                  n.push(i);
                }

                return n;
              })();
            }

          },
              An = class {
            constructor() {
              this.prefix = "tg-uxuy-wallet-";
            }

            get(e) {
              try {
                var r = localStorage.getItem("" + this.prefix + e);
                return r ? JSON.parse(r) : null;
              } catch (r) {
                return console.log(r), null;
              }
            }

            set(e, r) {
              try {
                return localStorage.setItem("" + this.prefix + e, JSON.stringify(r)), r;
              } catch (n) {
                return null;
              }
            }

          };

          function Xc(t) {
            var a, s;
            console.log("ProxyResponse", t);
            var {
              method: e,
              config: r,
              params: n,
              result: o
            } = t || {},
                i = ((a = r == null ? void 0 : r.params) == null ? void 0 : a[0]) || {};

            if (r) {
              var u = r == null ? void 0 : r.accounts;

              switch (u && (this._accounts = u), e) {
                case "wallet_switchEthereumChain":
                case "wallet_addEthereumChain":
                  var f = Object.values(this._accounts || {}).find(d => ge(d.chainId) === ge(i.chainId));
                  f ? this._account = _extends({}, f) : t.error = {
                    code: -32602,
                    message: "uxuy wallet does not support  " + (i == null ? void 0 : i.chainId)
                  };
                  break;

                case "eth_requestAccounts":
                  this._account = this._accounts[(s = this._account) == null ? void 0 : s.chainKey] || Object.values(this._accounts)[0];
                  break;

                default:
                  break;
              }

              return t;
            }
          }

          var pr = (() => {
            var t = new Map();
            return function (e, r, n) {
              if (n === void 0) {
                n = 1e3;
              }

              if (t.has(e)) return t.has(e);
              var o = r();
              return t.set(e, o), setTimeout(() => {
                t.delete(e);
              }, n), o.finally(() => {
                t.delete(e);
              });
            };
          })(),
              Zc = function Zc(t, e) {
            if (e === void 0) {
              e = 1e3 * 60 * 15;
            }

            return new Date().getTime() - t > e;
          },
              dr = class extends It {
            constructor(r) {
              super({
                protocol: "eth"
              });
              this._isUnlocked = !0;
              this._initialized = !1;
              this.autoRefreshOnNetworkChange = !0;
              this._isMetaMask = !0;
              this.isMetaMask = !0;
              this._isConnected = !1;
              this.isUxuyWallet = !0;
              this.version = this.getAppInfo().version, this.connectUrl = r.connect, this.bridgeUrl = r.bridge, this.connect_direct_link = r.connect_direct_link, this.eventTimeout = (r == null ? void 0 : r.eventTimeout) || 6e4 * 10, this.metaData = r == null ? void 0 : r.metaData, this.storage = new An(), this.httpProvider = new wn({
                chainId: "0x1",
                url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
              }), this._initialize();
            }

            get _lastTime() {
              return isNaN(Number(this.storage.get("lastTime") || 0)) ? 0 : Number(this.storage.get("lastTime") || 0);
            }

            set _lastTime(r) {
              this.storage.set("lastTime", r);
            }

            get _account() {
              return this.storage.get("account") || Qe;
            }

            set _account(r) {
              var n = _extends({}, this._account || Qe);

              r || (r = _extends({}, n, {
                address: ""
              })), this.storage.set("account", r), ge(n == null ? void 0 : n.chainId) != ge(r == null ? void 0 : r.chainId) && (this.emit("chainChanged", this == null ? void 0 : this.chainId, r == null ? void 0 : r.alliance, r), this.emit("networkChanged", parseInt(this == null ? void 0 : this.chainId), r == null ? void 0 : r.alliance)), (n == null ? void 0 : n.address) != (r == null ? void 0 : r.address) && this.emit("accountsChanged", r != null && r.address ? [r == null ? void 0 : r.address] : []);
            }

            get _accounts() {
              return this.storage.get("accounts") || {
                ethereum: Qe
              };
            }

            set _accounts(r) {
              this.storage.set("accounts", r);
            }

            get networkVersion() {
              return parseInt(this.chainId);
            }

            get chainId() {
              var r, n;
              return (r = this._account) != null && r.chainId ? ge((n = this._account) == null ? void 0 : n.chainId) : null;
            }

            get chainKey() {
              var r;
              return ((r = this._account) == null ? void 0 : r.chainKey) || (Qe == null ? void 0 : Qe.chainKey);
            }

            get connected() {
              var r;
              return !!((r = this._account) != null && r.address);
            }

            get selectedAddress() {
              var r;
              return ((r = this._account) == null ? void 0 : r.address) || "";
            }

            _initialize() {
              this._isConnected = !0, this._isUnlocked = !0, this._initialized = !0, this.emit("connect", {
                chainId: this == null ? void 0 : this.chainId
              }), this.emit("_initialized");
            }

            _walletSwitchChain(r) {
              var _this4 = this;

              return _asyncToGenerator(function* () {
                var {
                  method: n,
                  params: o
                } = r,
                    i = o[0],
                    a = Object.values(_this4._accounts || {}).find(s => ge(s.chainId) === ge(i.chainId));
                if (!a && (yield _this4.request({
                  method: "eth_requestAccounts"
                }), a = Object.values(_this4._accounts || {}).find(s => ge(s.chainId) === ge(i.chainId)), !a)) throw xt.invalidRequest({
                  code: Tt.provider.unsupportedChain,
                  message: Ge.errors.invalidChains(i == null ? void 0 : i.chainId),
                  data: o
                });
                return _this4._account = a, null;
              })();
            }

            getAppInfo() {
              return _extends({}, lt);
            }

            enable() {
              var _this5 = this;

              return _asyncToGenerator(function* () {
                return _this5.request({
                  method: "eth_requestAccounts"
                });
              })();
            }

            isConnected() {
              return this.connected;
            }

            request(r) {
              var _arguments = arguments,
                  _this6 = this;

              return _asyncToGenerator(function* () {
                var i, a, s, u, f, d;
                var {
                  method: n,
                  params: o = []
                } = r || {};
                if (console.log("request", ..._arguments), !r || typeof r != "object" || Array.isArray(r)) throw xt.invalidRequest({
                  message: Ge.errors.invalidRequestArgs(),
                  data: o
                });
                if (typeof n != "string" || n.length === 0) throw xt.invalidRequest({
                  message: Ge.errors.invalidRequestMethod(),
                  data: r
                });

                try {
                  var y = n + "-" + JSON.stringify(o || []);

                  switch (n) {
                    case "eth_requestAccounts":
                      var b = Zc(_this6._lastTime, _this6.eventTimeout);
                      return (i = _this6 == null ? void 0 : _this6._account) != null && i.address && !b ? [_this6._account.address] : pr(y, () => _this6._request(n, o));

                    case "eth_accounts":
                      return [(a = _this6._account) == null ? void 0 : a.address];

                    case "eth_chainId":
                      return (s = _this6._account) != null && s.chainId ? ge((u = _this6._account) == null ? void 0 : u.chainId) : null;

                    case "wallet_switchEthereumChain":
                    case "wallet_addEthereumChain":
                      return _this6.connected || (yield _this6.request({
                        method: "eth_requestAccounts"
                      })), _this6._walletSwitchChain({
                        method: n,
                        params: o
                      });
                      break;

                    case "wallet_watchAsset":
                    case "metamask_watchAsset":
                      return pr(y, () => _this6._request(n, o));

                    case "personal_sign":
                    case "eth_signTypedData":
                    case "eth_sendTransaction":
                    case "eth_signTransaction":
                      return _this6.connected || (yield _this6.request({
                        method: "eth_requestAccounts"
                      })), pr(y, () => _this6._request(n, o));
                      break;

                    case "eth_signTypedData_v3":
                    case "eth_signTypedData_v4":
                      _this6.connected || (yield _this6.request({
                        method: "eth_requestAccounts"
                      }));
                      var x = r.params[0];
                      return vn(r.params[0]) && !vn(r.params[1]) && (x = r.params[1]), o[0] = sa(x), pr(y, () => _this6._request(n, o));
                      break;

                    default:
                      return _this6.httpProvider.send(r, {
                        chainId: _this6.chainId,
                        chainKey: _this6.chainKey,
                        rpcUrl: ((d = (f = _this6._account) == null ? void 0 : f.rpcs) == null ? void 0 : d[0]) || ""
                      });
                  }
                } catch (y) {
                  return console.log(y), Promise.reject(typeof y == "object" ? y : {
                    code: -32603,
                    message: y
                  });
                }
              })();
            }

            _request(r, n, o) {
              var _this7 = this;

              return _asyncToGenerator(function* () {
                var i = _this7._account,
                    a = new Date().getTime();
                _this7._lastTime = a, o = _extends({
                  account: i,
                  metaData: aa(_this7.metaData)
                }, o, {
                  timeStamp: a
                });
                var s = new Date().getTime() + Math.floor(Math.random() * 1e3).toString(),
                    u = "salt-" + Date.now() + "-" + s,
                    f = {
                  id: s,
                  method: r,
                  params: n,
                  options: o
                },
                    d = {
                  id: f.id,
                  data: f,
                  version: "1.0",
                  salt: u
                },
                    y = yield vt.post(_this7.connectUrl + "/transaction", d, {
                  headers: {
                    "X-Salt": u
                  }
                }),
                    {
                  hash: b,
                  signature: x
                } = y.data;
                console.log({
                  hash: b,
                  signature: x,
                  salt: u
                });
                var v = {
                  method: r,
                  params: [u, b, x]
                },
                    T = new EventSource(_this7.bridgeUrl + "/events/" + b + "/" + x + "/" + u);
                return new Promise((E, W) => {
                  var w, _;

                  var j = _this7.eventTimeout > 0 ? setTimeout(() => {
                    var O, C;
                    W(xt.invalidRequest({
                      code: (C = (O = Tt) == null ? void 0 : O.rpc) == null ? void 0 : C.timeoutRequest,
                      message: Ge.errors.timeOut(r),
                      data: f
                    })), T.close();
                  }, _this7.eventTimeout || 6e4) : null;
                  T.addEventListener("message", O => {
                    var C;
                    console.log("message.........", O == null ? void 0 : O.data, d);

                    try {
                      var k = JSON.parse(O == null ? void 0 : O.data);
                      console.log("message....parse", {
                        data: k,
                        publish_params: d
                      }), (k == null ? void 0 : k.id) == s || u == (k == null ? void 0 : k.salt) ? ((C = T == null ? void 0 : T.close) == null || C.call(T), clearTimeout(j), (k.reConnect || !k.error) && Xc.call(_this7, k), k.error ? W(k.error) : E(k.result)) : console.log("not match");
                    } catch (k) {
                      console.log(k);
                    }
                  });
                  var h = _this7.connect_direct_link + "?startapp=uxuyconnect_" + Ce.encodeTelegramUrlParameters(v);

                  if (Telegram.WebApp.initData && ((_ = (w = Telegram == null ? void 0 : Telegram.WebApp) == null ? void 0 : w.openTelegramLink) == null || _.call(w, h)), !Telegram.WebApp.initData) {
                    var O = _this7.connect_direct_link.match(/t\.me\/([^\/]+)\/([^\/]+)/);

                    O[1] && O[2] ? !Telegram.WebApp.initData && Ce.opendeepLink("uxuyconnect_" + Ce.encodeTelegramUrlParameters(v), {
                      domain: O[1],
                      appname: O[2]
                    }) : !Telegram.WebApp.initData && Ce.opendeepLink("uxuyconnect_" + Ce.encodeTelegramUrlParameters(v));
                  }
                });
              })();
            }

            disconnect() {
              this._account = null, this.emit("accountsChanged", []), this.emit("disconnect", "");
            }

          };

          var mr = class extends Ct {
            constructor(r) {
              super();
              this.version = lt.version;

              this.getAppInfo = () => _extends({}, lt);

              var n = r == null ? void 0 : r.metaData;
              this.connectUrl = (r == null ? void 0 : r.connect) || Rt.connect, this.bridgeUrl = (r == null ? void 0 : r.bridge) || Rt.bridge, this.connect_direct_link = (r == null ? void 0 : r.connect_direct_link) || Rt.connect_direct_link, this.injected = (r == null ? void 0 : r.injected) || !1, this.metaData = {
                icon: n == null ? void 0 : n.icon,
                name: n == null ? void 0 : n.name,
                url: n == null ? void 0 : n.url,
                direct_link: n == null ? void 0 : n.direct_link,
                description: n == null ? void 0 : n.description
              }, this._initialize();
            }

            _initialize() {
              this.ethereum = new dr({
                connect: this.connectUrl,
                bridge: this.bridgeUrl,
                connect_direct_link: this.connect_direct_link,
                metaData: this.metaData
              }), this.injected && (window.ethereum || (window.ethereum = this.ethereum, dispatchEvent(new Event("ethereum#initialized")))), this.emit("_initialized");
            }

          },
              eu = {
            WalletTgSdk: mr
          };
          return Ra(tu);
        })(); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=dc21e27f41ee687d523269cd72f47ad4f566fbf1.js.map