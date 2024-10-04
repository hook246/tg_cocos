System.register(["util", "stream", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var TextEncoder, Readable, utils, readBlob, FormDataPart, BOUNDARY_ALPHABET, textEncoder, CRLF, CRLF_BYTES, CRLF_BYTES_COUNT, formDataToStream;

  function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

  function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen.return && (this.return = void 0); }

  function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }

  function _asyncGeneratorDelegate(inner) { var iter = {}, waiting = !1; function pump(key, value) { return waiting = !0, value = new Promise(function (resolve) { resolve(inner[key](value)); }), { done: !1, value: new _OverloadYield(value, 1) }; } return iter["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () { return this; }, iter.next = function (value) { return waiting ? (waiting = !1, value) : pump("next", value); }, "function" == typeof inner.throw && (iter.throw = function (value) { if (waiting) throw waiting = !1, value; return pump("throw", value); }), "function" == typeof inner.return && (iter.return = function (value) { return waiting ? (waiting = !1, value) : pump("return", value); }), iter; }

  function _OverloadYield(value, kind) { this.v = value, this.k = kind; }

  function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

  function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

  return {
    setters: [function (_util) {
      TextEncoder = _util.TextEncoder;
    }, function (_stream) {
      Readable = _stream.Readable;
    }, function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      readBlob = _unresolved_2.default;
    }],
    execute: function () {
      _AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
      BOUNDARY_ALPHABET = utils.ALPHABET.ALPHA_DIGIT + '-_';
      textEncoder = new TextEncoder();
      CRLF = '\r\n';
      CRLF_BYTES = textEncoder.encode(CRLF);
      CRLF_BYTES_COUNT = 2;
      FormDataPart = class FormDataPart {
        constructor(name, value) {
          var {
            escapeName
          } = this.constructor;
          var isStringValue = utils.isString(value);
          var headers = "Content-Disposition: form-data; name=\"" + escapeName(name) + "\"" + (!isStringValue && value.name ? "; filename=\"" + escapeName(value.name) + "\"" : '') + CRLF;

          if (isStringValue) {
            value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
          } else {
            headers += "Content-Type: " + (value.type || "application/octet-stream") + CRLF;
          }

          this.headers = textEncoder.encode(headers + CRLF);
          this.contentLength = isStringValue ? value.byteLength : value.size;
          this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
          this.name = name;
          this.value = value;
        }

        encode() {
          var _this = this;

          return _wrapAsyncGenerator(function* () {
            yield _this.headers;
            var {
              value
            } = _this;

            if (utils.isTypedArray(value)) {
              yield value;
            } else {
              yield* _asyncGeneratorDelegate(_asyncIterator(readBlob(value)), _awaitAsyncGenerator);
            }

            yield CRLF_BYTES;
          })();
        }

        static escapeName(name) {
          return String(name).replace(/[\r\n"]/g, match => ({
            '\r': '%0D',
            '\n': '%0A',
            '"': '%22'
          })[match]);
        }

      };

      formDataToStream = (form, headersHandler, options) => {
        var {
          tag = 'form-data-boundary',
          size = 25,
          boundary = tag + '-' + utils.generateString(size, BOUNDARY_ALPHABET)
        } = options || {};

        if (!utils.isFormData(form)) {
          throw TypeError('FormData instance required');
        }

        if (boundary.length < 1 || boundary.length > 70) {
          throw Error('boundary must be 10-70 characters long');
        }

        var boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
        var footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF + CRLF);
        var contentLength = footerBytes.byteLength;
        var parts = Array.from(form.entries()).map(_ref2 => {
          var [name, value] = _ref2;
          var part = new FormDataPart(name, value);
          contentLength += part.size;
          return part;
        });
        contentLength += boundaryBytes.byteLength * parts.length;
        contentLength = utils.toFiniteNumber(contentLength);
        var computedHeaders = {
          'Content-Type': "multipart/form-data; boundary=" + boundary
        };

        if (Number.isFinite(contentLength)) {
          computedHeaders['Content-Length'] = contentLength;
        }

        headersHandler && headersHandler(computedHeaders);
        return Readable.from(_wrapAsyncGenerator(function* () {
          for (var part of parts) {
            yield boundaryBytes;
            yield* _asyncGeneratorDelegate(_asyncIterator(part.encode()), _awaitAsyncGenerator);
          }

          yield footerBytes;
        })());
      };

      _export("default", formDataToStream);
    }
  };
});
//# sourceMappingURL=043c4741ce68eb0b8d5bac735e2b9b84076b1777.js.map