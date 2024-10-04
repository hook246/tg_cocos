System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var platform, utils, AxiosError, composeSignals, trackStream, AxiosHeaders, progressEventReducer, progressEventDecorator, asyncDecorator, resolveConfig, settle, isFetchSupported, isReadableStreamSupported, encodeText, test, supportsRequestStream, DEFAULT_CHUNK_SIZE, supportsResponseStream, resolvers, getBodyLength, resolveBodyLength;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_unresolved_) {
      platform = _unresolved_.default;
    }, function (_unresolved_2) {
      utils = _unresolved_2.default;
    }, function (_unresolved_3) {
      AxiosError = _unresolved_3.default;
    }, function (_unresolved_4) {
      composeSignals = _unresolved_4.default;
    }, function (_unresolved_5) {
      trackStream = _unresolved_5.trackStream;
    }, function (_unresolved_6) {
      AxiosHeaders = _unresolved_6.default;
    }, function (_unresolved_7) {
      progressEventReducer = _unresolved_7.progressEventReducer;
      progressEventDecorator = _unresolved_7.progressEventDecorator;
      asyncDecorator = _unresolved_7.asyncDecorator;
    }, function (_unresolved_8) {
      resolveConfig = _unresolved_8.default;
    }, function (_unresolved_9) {
      settle = _unresolved_9.default;
    }],
    execute: function () {
      isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
      isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function'; // used only inside the fetch adapter

      encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? (encoder => str => encoder.encode(str))(new TextEncoder()) : /*#__PURE__*/_asyncToGenerator(function* (str) {
        return new Uint8Array(yield new Response(str).arrayBuffer());
      }));

      test = function test(fn) {
        try {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return !!fn(...args);
        } catch (e) {
          return false;
        }
      };

      supportsRequestStream = isReadableStreamSupported && test(() => {
        var duplexAccessed = false;
        var hasContentType = new Request(platform.origin, {
          body: new ReadableStream(),
          method: 'POST',

          get duplex() {
            duplexAccessed = true;
            return 'half';
          }

        }).headers.has('Content-Type');
        return duplexAccessed && !hasContentType;
      });
      DEFAULT_CHUNK_SIZE = 64 * 1024;
      supportsResponseStream = isReadableStreamSupported && test(() => utils.isReadableStream(new Response('').body));
      resolvers = {
        stream: supportsResponseStream && (res => res.body)
      };
      isFetchSupported && (res => {
        ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
          !resolvers[type] && (resolvers[type] = utils.isFunction(res[type]) ? res => res[type]() : (_, config) => {
            throw new AxiosError("Response type '" + type + "' is not supported", AxiosError.ERR_NOT_SUPPORT, config);
          });
        });
      })(new Response());

      getBodyLength = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(function* (body) {
          if (body == null) {
            return 0;
          }

          if (utils.isBlob(body)) {
            return body.size;
          }

          if (utils.isSpecCompliantForm(body)) {
            var _request = new Request(platform.origin, {
              method: 'POST',
              body
            });

            return (yield _request.arrayBuffer()).byteLength;
          }

          if (utils.isArrayBufferView(body) || utils.isArrayBuffer(body)) {
            return body.byteLength;
          }

          if (utils.isURLSearchParams(body)) {
            body = body + '';
          }

          if (utils.isString(body)) {
            return (yield encodeText(body)).byteLength;
          }
        });

        return function getBodyLength(_x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      resolveBodyLength = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(function* (headers, body) {
          var length = utils.toFiniteNumber(headers.getContentLength());
          return length == null ? getBodyLength(body) : length;
        });

        return function resolveBodyLength(_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }();

      _export("default", isFetchSupported && /*#__PURE__*/_asyncToGenerator(function* (config) {
        var {
          url,
          method,
          data,
          signal,
          cancelToken,
          timeout,
          onDownloadProgress,
          onUploadProgress,
          responseType,
          headers,
          withCredentials = 'same-origin',
          fetchOptions
        } = resolveConfig(config);
        responseType = responseType ? (responseType + '').toLowerCase() : 'text';
        var composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
        var request;

        var unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
          composedSignal.unsubscribe();
        });

        var requestContentLength;

        try {
          if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = yield resolveBodyLength(headers, data)) !== 0) {
            var _request = new Request(url, {
              method: 'POST',
              body: data,
              duplex: "half"
            });

            var contentTypeHeader;

            if (utils.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
              headers.setContentType(contentTypeHeader);
            }

            if (_request.body) {
              var [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
              data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
          }

          if (!utils.isString(withCredentials)) {
            withCredentials = withCredentials ? 'include' : 'omit';
          } // Cloudflare Workers throws when credentials are defined
          // see https://github.com/cloudflare/workerd/issues/902


          var isCredentialsSupported = ("credentials" in Request.prototype);
          request = new Request(url, _extends({}, fetchOptions, {
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : undefined
          }));
          var response = yield fetch(request);
          var isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

          if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
            var options = {};
            ['status', 'statusText', 'headers'].forEach(prop => {
              options[prop] = response[prop];
            });
            var responseContentLength = utils.toFiniteNumber(response.headers.get('content-length'));
            var [_onProgress, _flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
            response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, _onProgress, () => {
              _flush && _flush();
              unsubscribe && unsubscribe();
            }), options);
          }

          responseType = responseType || 'text';
          var responseData = yield resolvers[utils.findKey(resolvers, responseType) || 'text'](response, config);
          !isStreamResponse && unsubscribe && unsubscribe();
          return yield new Promise((resolve, reject) => {
            settle(resolve, reject, {
              data: responseData,
              headers: AxiosHeaders.from(response.headers),
              status: response.status,
              statusText: response.statusText,
              config,
              request
            });
          });
        } catch (err) {
          unsubscribe && unsubscribe();

          if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
            throw Object.assign(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request), {
              cause: err.cause || err
            });
          }

          throw AxiosError.from(err, err && err.code, config, request);
        }
      }));
    }
  };
});
//# sourceMappingURL=1b64c5176ece06b64e21c6975ba3dbe3bae4b5e4.js.map