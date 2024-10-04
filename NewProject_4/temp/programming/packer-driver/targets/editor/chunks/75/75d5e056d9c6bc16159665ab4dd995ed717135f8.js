System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*!
         * mime-db
         * Copyright(c) 2014 Jonathan Ong
         * Copyright(c) 2015-2022 Douglas Christopher Wilson
         * MIT Licensed
         */

        /**
         * Module exports.
         */
        module.exports = require('./db.json'); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './db.json': _req
      }));
    }
  };
});
//# sourceMappingURL=75d5e056d9c6bc16159665ab4dd995ed717135f8.js.map