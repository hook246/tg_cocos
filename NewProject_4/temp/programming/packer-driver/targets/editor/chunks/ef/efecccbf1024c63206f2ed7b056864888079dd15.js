System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GlobalData, _crd;

  function _reportPossibleCrUseOftaskListResponseType(extras) {
    _reporterNs.report("taskListResponseType", "../invite/inviteModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7614dKsq8BFK7fnDTJl8V43", "GloabalClass", undefined);

      GlobalData = class GlobalData {
        constructor() {
          this.isProduction = false;
          this.token = void 0;
          this.inviteCode = void 0;
          this.taskData = void 0;
          this.wallet_address = void 0;
          this.username = void 0;
          this.avatar = void 0;
        }

      };

      _export("default", new GlobalData());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=efecccbf1024c63206f2ed7b056864888079dd15.js.map