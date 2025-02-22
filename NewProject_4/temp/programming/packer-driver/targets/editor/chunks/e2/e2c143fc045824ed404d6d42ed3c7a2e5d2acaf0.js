'use strict';

System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var utils, defaults, AxiosHeaders;

  function transformData(fns, response) {
    const config = this || defaults;
    const context = response || config;
    const headers = AxiosHeaders.from(context.headers);
    let data = context.data;
    utils.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
  }

  _export("default", transformData);

  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }, function (_unresolved_2) {
      defaults = _unresolved_2.default;
    }, function (_unresolved_3) {
      AxiosHeaders = _unresolved_3.default;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=e2c143fc045824ed404d6d42ed3c7a2e5d2acaf0.js.map