'use strict';

System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var utils, AxiosError, transitionalDefaults, toFormData, toURLEncodedForm, platform, formDataToJSON, defaults;

  /**
   * It takes a string, tries to parse it, and if it fails, it returns the stringified version
   * of the input
   *
   * @param {any} rawValue - The value to be stringified.
   * @param {Function} parser - A function that parses a string into a JavaScript object.
   * @param {Function} encoder - A function that takes a value and returns a string.
   *
   * @returns {string} A stringified version of the rawValue.
   */
  function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }

    return (encoder || JSON.stringify)(rawValue);
  }

  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      AxiosError = _unresolved_2.default;
    }, function (_unresolved_3) {
      transitionalDefaults = _unresolved_3.default;
    }, function (_unresolved_4) {
      toFormData = _unresolved_4.default;
    }, function (_unresolved_5) {
      toURLEncodedForm = _unresolved_5.default;
    }, function (_unresolved_6) {
      platform = _unresolved_6.default;
    }, function (_unresolved_7) {
      formDataToJSON = _unresolved_7.default;
    }],
    execute: function () {
      defaults = {
        transitional: transitionalDefaults,
        adapter: ['xhr', 'http', 'fetch'],
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || '';
          const hasJSONContentType = contentType.indexOf('application/json') > -1;
          const isObjectPayload = utils.isObject(data);

          if (isObjectPayload && utils.isHTMLForm(data)) {
            data = new FormData(data);
          }

          const isFormData = utils.isFormData(data);

          if (isFormData) {
            return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
          }

          if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data) || utils.isReadableStream(data)) {
            return data;
          }

          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }

          if (utils.isURLSearchParams(data)) {
            headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
            return data.toString();
          }

          let isFileList;

          if (isObjectPayload) {
            if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }

            if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
              const _FormData = this.env && this.env.FormData;

              return toFormData(isFileList ? {
                'files[]': data
              } : data, _FormData && new _FormData(), this.formSerializer);
            }
          }

          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType('application/json', false);
            return stringifySafely(data);
          }

          return data;
        }],
        transformResponse: [function transformResponse(data) {
          const transitional = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          const JSONRequested = this.responseType === 'json';

          if (utils.isResponse(data) || utils.isReadableStream(data)) {
            return data;
          }

          if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional && transitional.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;

            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === 'SyntaxError') {
                  throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                }

                throw e;
              }
            }
          }

          return data;
        }],

        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform.classes.FormData,
          Blob: platform.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
          }
        }
      };
      utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], method => {
        defaults.headers[method] = {};
      });

      _export("default", defaults);
    }
  };
});
//# sourceMappingURL=24dfaf7a2ae52601e1d2f88b71e61a322c9dff21.js.map