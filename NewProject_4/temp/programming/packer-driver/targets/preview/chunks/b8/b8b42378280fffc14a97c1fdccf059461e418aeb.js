System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePage, _dec, _class, _crd, ccclass, property, earnView;

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

      _cclegacy._RF.push({}, "e7879v0fj1A5oAZI6DoP+2w", "earnView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("earnView", earnView = (_dec = ccclass('earnView'), _dec(_class = class earnView extends (_crd && basePage === void 0 ? (_reportPossibleCrUseOfbasePage({
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
//# sourceMappingURL=b8b42378280fffc14a97c1fdccf059461e418aeb.js.map