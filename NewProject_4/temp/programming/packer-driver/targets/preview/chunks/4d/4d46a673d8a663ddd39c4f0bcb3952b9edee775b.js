'use strict';

System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var utils, buildURL, InterceptorManager, dispatchRequest, mergeConfig, buildFullPath, validator, AxiosHeaders, Axios, validators;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      buildURL = _unresolved_2.default;
    }, function (_unresolved_3) {
      InterceptorManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      dispatchRequest = _unresolved_4.default;
    }, function (_unresolved_5) {
      mergeConfig = _unresolved_5.default;
    }, function (_unresolved_6) {
      buildFullPath = _unresolved_6.default;
    }, function (_unresolved_7) {
      validator = _unresolved_7.default;
    }, function (_unresolved_8) {
      AxiosHeaders = _unresolved_8.default;
    }],
    execute: function () {
      validators = validator.validators;
      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       *
       * @return {Axios} A new instance of Axios
       */

      Axios = class Axios {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */


        request(configOrUrl, config) {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              return yield _this._request(configOrUrl, config);
            } catch (err) {
              if (err instanceof Error) {
                var dummy;
                Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error(); // slice off the Error: ... line

                var stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';

                try {
                  if (!err.stack) {
                    err.stack = stack; // match without the 2 top stack lines
                  } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                    err.stack += '\n' + stack;
                  }
                } catch (e) {// ignore the case where "stack" is an un-writable property
                }
              }

              throw err;
            }
          })();
        }

        _request(configOrUrl, config) {
          /*eslint no-param-reassign:0*/
          // Allow for axios('example/url'[, config]) a la fetch API
          if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }

          config = mergeConfig(this.defaults, config);
          var {
            transitional,
            paramsSerializer,
            headers
          } = config;

          if (transitional !== undefined) {
            validator.assertOptions(transitional, {
              silentJSONParsing: validators.transitional(validators.boolean),
              forcedJSONParsing: validators.transitional(validators.boolean),
              clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
          }

          if (paramsSerializer != null) {
            if (utils.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator.assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
              }, true);
            }
          } // Set config.method


          config.method = (config.method || this.defaults.method || 'get').toLowerCase(); // Flatten headers

          var contextHeaders = headers && utils.merge(headers.common, headers[config.method]);
          headers && utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
            delete headers[method];
          });
          config.headers = AxiosHeaders.concat(contextHeaders, headers); // filter out skipped interceptors

          var requestInterceptorChain = [];
          var synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
              return;
            }

            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          var responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          var promise;
          var i = 0;
          var len;

          if (!synchronousRequestInterceptors) {
            var chain = [dispatchRequest.bind(this), undefined];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);

            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }

            return promise;
          }

          len = requestInterceptorChain.length;
          var newConfig = config;
          i = 0;

          while (i < len) {
            var onFulfilled = requestInterceptorChain[i++];
            var onRejected = requestInterceptorChain[i++];

            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }

          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }

          i = 0;
          len = responseInterceptorChain.length;

          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }

          return promise;
        }

        getUri(config) {
          config = mergeConfig(this.defaults, config);
          var fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }

      }; // Provide aliases for supported request methods

      utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        /*eslint func-names:0*/
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                'Content-Type': 'multipart/form-data'
              } : {},
              url,
              data
            }));
          };
        }

        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
      });

      _export("default", Axios);
    }
  };
});
//# sourceMappingURL=4d46a673d8a663ddd39c4f0bcb3952b9edee775b.js.map