System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var URLSearchParams, FormData;
  return {
    setters: [function (_unresolved_) {
      URLSearchParams = _unresolved_.default;
    }, function (_unresolved_2) {
      FormData = _unresolved_2.default;
    }],
    execute: function () {
      _export("default", {
        isNode: true,
        classes: {
          URLSearchParams,
          FormData,
          Blob: typeof Blob !== 'undefined' && Blob || null
        },
        protocols: ['http', 'https', 'file', 'data']
      });
    }
  };
});
//# sourceMappingURL=dd9181cbd7b6d5e85a45e500ce56bec91a42be81.js.map