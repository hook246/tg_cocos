System.register([], function (_export, _context) {
  "use strict";

  var streamChunk, readBytes, readStream, trackStream;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

      _export("streamChunk", streamChunk = function* streamChunk(chunk, chunkSize) {
        var len = chunk.byteLength;

        if (!chunkSize || len < chunkSize) {
          yield chunk;
          return;
        }

        var pos = 0;
        var end;

        while (pos < len) {
          end = pos + chunkSize;
          yield chunk.slice(pos, end);
          pos = end;
        }
      });

      _export("readBytes", readBytes = /*#__PURE__*/function () {
        var _ref = _wrapAsyncGenerator(function* (iterable, chunkSize) {
          var _iteratorAbruptCompletion = false;
          var _didIteratorError = false;

          var _iteratorError;

          try {
            for (var _iterator = _asyncIterator(readStream(iterable)), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
              var chunk = _step.value;
              {
                yield* _asyncGeneratorDelegate(_asyncIterator(streamChunk(chunk, chunkSize)), _awaitAsyncGenerator);
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

        return function readBytes(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());

      readStream = /*#__PURE__*/function () {
        var _ref2 = _wrapAsyncGenerator(function* (stream) {
          if (stream[Symbol.asyncIterator]) {
            yield* _asyncGeneratorDelegate(_asyncIterator(stream), _awaitAsyncGenerator);
            return;
          }

          var reader = stream.getReader();

          try {
            for (;;) {
              var {
                done,
                value
              } = yield _awaitAsyncGenerator(reader.read());

              if (done) {
                break;
              }

              yield value;
            }
          } finally {
            yield _awaitAsyncGenerator(reader.cancel());
          }
        });

        return function readStream(_x3) {
          return _ref2.apply(this, arguments);
        };
      }();

      _export("trackStream", trackStream = (stream, chunkSize, onProgress, onFinish) => {
        var iterator = readBytes(stream, chunkSize);
        var bytes = 0;
        var done;

        var _onFinish = e => {
          if (!done) {
            done = true;
            onFinish && onFinish(e);
          }
        };

        return new ReadableStream({
          pull(controller) {
            return _asyncToGenerator(function* () {
              try {
                var {
                  done: _done,
                  value
                } = yield iterator.next();

                if (_done) {
                  _onFinish();

                  controller.close();
                  return;
                }

                var len = value.byteLength;

                if (onProgress) {
                  var loadedBytes = bytes += len;
                  onProgress(loadedBytes);
                }

                controller.enqueue(new Uint8Array(value));
              } catch (err) {
                _onFinish(err);

                throw err;
              }
            })();
          },

          cancel(reason) {
            _onFinish(reason);

            return iterator.return();
          }

        }, {
          highWaterMark: 2
        });
      });
    }
  };
});
//# sourceMappingURL=43f1bcdff472cf49469d11477f8ff78e2816ca22.js.map