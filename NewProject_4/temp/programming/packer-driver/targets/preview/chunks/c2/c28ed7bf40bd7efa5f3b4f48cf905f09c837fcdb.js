System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePage, _dec, _class, _crd, ccclass, property, inviteView;

  function _reportPossibleCrUseOfbasePage(extras) {
    _reporterNs.report("basePage", "../common/basePage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      basePage = _unresolved_2.basePage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02208RC+ahDQI46uK8lbvNC", "inviteView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("inviteView", inviteView = (_dec = ccclass('inviteView'), _dec(_class = class inviteView extends (_crd && basePage === void 0 ? (_reportPossibleCrUseOfbasePage({
        error: Error()
      }), basePage) : basePage) {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c28ed7bf40bd7efa5f3b4f48cf905f09c837fcdb.js.map