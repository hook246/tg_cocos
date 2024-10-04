System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePage, _dec, _class, _crd, ccclass, property, loginView;

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

      _cclegacy._RF.push({}, "444c4Hr6RhNDb//8CYKKw69", "loginView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loginView", loginView = (_dec = ccclass('loginView'), _dec(_class = class loginView extends (_crd && basePage === void 0 ? (_reportPossibleCrUseOfbasePage({
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
//# sourceMappingURL=0b2c1adaeb7efc47e1695090f9659476e8bb1cdc.js.map