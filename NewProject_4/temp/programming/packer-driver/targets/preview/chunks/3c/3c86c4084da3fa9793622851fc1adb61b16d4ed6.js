'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function parseProtocol(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  _export("default", parseProtocol);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=3c86c4084da3fa9793622851fc1adb61b16d4ed6.js.map