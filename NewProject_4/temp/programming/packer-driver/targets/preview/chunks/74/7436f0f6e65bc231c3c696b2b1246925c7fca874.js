System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var CanceledError, AxiosError, utils, composeSignals;
  return {
    setters: [function (_unresolved_) {
      CanceledError = _unresolved_.default;
    }, function (_unresolved_2) {
      AxiosError = _unresolved_2.default;
    }, function (_unresolved_3) {
      utils = _unresolved_3.default;
    }],
    execute: function () {
      composeSignals = (signals, timeout) => {
        var {
          length
        } = signals = signals ? signals.filter(Boolean) : [];

        if (timeout || length) {
          var controller = new AbortController();
          var aborted;

          var onabort = function onabort(reason) {
            if (!aborted) {
              aborted = true;
              unsubscribe();
              var err = reason instanceof Error ? reason : this.reason;
              controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
            }
          };

          var timer = timeout && setTimeout(() => {
            timer = null;
            onabort(new AxiosError("timeout " + timeout + " of ms exceeded", AxiosError.ETIMEDOUT));
          }, timeout);

          var unsubscribe = () => {
            if (signals) {
              timer && clearTimeout(timer);
              timer = null;
              signals.forEach(signal => {
                signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
              });
              signals = null;
            }
          };

          signals.forEach(signal => signal.addEventListener('abort', onabort));
          var {
            signal
          } = controller;

          signal.unsubscribe = () => utils.asap(unsubscribe);

          return signal;
        }
      };

      _export("default", composeSignals);
    }
  };
});
//# sourceMappingURL=7436f0f6e65bc231c3c696b2b1246925c7fca874.js.map