'use strict';
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

System.register([], function (_export, _context) {
  "use strict";

  function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  _export("default", isAbsoluteURL);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=cf840c7a7b91cc71718d1fa8a1ce089519ab8ecb.js.map