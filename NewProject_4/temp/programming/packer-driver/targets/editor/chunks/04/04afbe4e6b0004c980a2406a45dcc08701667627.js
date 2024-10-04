System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var utils, callbackify;
  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }],
    execute: function () {
      callbackify = (fn, reducer) => {
        return utils.isAsyncFn(fn) ? function (...args) {
          const cb = args.pop();
          fn.apply(this, args).then(value => {
            try {
              reducer ? cb(null, ...reducer(value)) : cb(null, value);
            } catch (err) {
              cb(err);
            }
          }, cb);
        } : fn;
      };

      _export("default", callbackify);
    }
  };
});
//# sourceMappingURL=04afbe4e6b0004c980a2406a45dcc08701667627.js.map