System.register([], function (_export, _context) {
  "use strict";

  var asyncIterator, readBlob;

  function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

  function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen.return && (this.return = void 0); }

  function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }

  function _asyncGeneratorDelegate(inner) { var iter = {}, waiting = !1; function pump(key, value) { return waiting = !0, value = new Promise(function (resolve) { resolve(inner[key](value)); }), { done: !1, value: new _OverloadYield(value, 1) }; } return iter["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () { return this; }, iter.next = function (value) { return waiting ? (waiting = !1, value) : pump("next", value); }, "function" == typeof inner.throw && (iter.throw = function (value) { if (waiting) throw waiting = !1, value; return pump("throw", value); }), "function" == typeof inner.return && (iter.return = function (value) { return waiting ? (waiting = !1, value) : pump("return", value); }), iter; }

  function _OverloadYield(value, kind) { this.v = value, this.k = kind; }

  function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

  function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

  return {
    setters: [],
    execute: function () {
      _AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
      ({
        asyncIterator
      } = Symbol);

      readBlob = /*#__PURE__*/function () {
        var _ref = _wrapAsyncGenerator(function* (blob) {
          if (blob.stream) {
            yield* _asyncGeneratorDelegate(_asyncIterator(blob.stream()), _awaitAsyncGenerator);
          } else if (blob.arrayBuffer) {
            yield yield _awaitAsyncGenerator(blob.arrayBuffer());
          } else if (blob[asyncIterator]) {
            yield* _asyncGeneratorDelegate(_asyncIterator(blob[asyncIterator]()), _awaitAsyncGenerator);
          } else {
            yield blob;
          }
        });

        return function readBlob(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      _export("default", readBlob);
    }
  };
});
//# sourceMappingURL=1c87fff28e7873cb5f7a8d341ad34b1fd5b358c1.js.map