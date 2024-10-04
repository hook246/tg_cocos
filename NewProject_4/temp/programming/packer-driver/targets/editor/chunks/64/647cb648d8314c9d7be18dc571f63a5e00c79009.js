'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  _export("default", bind);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=647cb648d8314c9d7be18dc571f63a5e00c79009.js.map