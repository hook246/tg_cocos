System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var platform, utils;
  return {
    setters: [function (_unresolved_) {
      platform = _unresolved_.default;
    }, function (_unresolved_2) {
      utils = _unresolved_2;
    }],
    execute: function () {
      _export("default", { ...utils,
        ...platform
      });
    }
  };
});
//# sourceMappingURL=97f604ea78bf6010eaf108221cb88161384df55d.js.map