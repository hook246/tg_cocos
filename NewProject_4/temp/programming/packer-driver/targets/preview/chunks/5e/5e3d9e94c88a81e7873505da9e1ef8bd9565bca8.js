'use strict';

System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var isAbsoluteURL, combineURLs;

  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }

    return requestedURL;
  }

  _export("default", buildFullPath);

  return {
    setters: [function (_unresolved_) {
      isAbsoluteURL = _unresolved_.default;
    }, function (_unresolved_2) {
      combineURLs = _unresolved_2.default;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=5e3d9e94c88a81e7873505da9e1ef8bd9565bca8.js.map