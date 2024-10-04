'use strict';

System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var utils;

  function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
  }

  _export("default", isAxiosError);

  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=90833f006c1ef859abeb7123899c8053ba0c9740.js.map