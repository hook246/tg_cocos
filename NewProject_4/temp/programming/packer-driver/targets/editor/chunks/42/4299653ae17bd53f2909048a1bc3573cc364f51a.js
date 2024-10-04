'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  _export("default", parseProtocol);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=4299653ae17bd53f2909048a1bc3573cc364f51a.js.map