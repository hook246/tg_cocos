System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, earnView, _dec, _class, _crd, ccclass, property, earnModel;

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfearnView(extras) {
    _reporterNs.report("earnView", "./earnView", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskListResponseType(extras) {
    _reporterNs.report("taskListResponseType", "../invite/inviteModel", _context.meta, extras);
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
      basePageModel = _unresolved_2.basePageModel;
    }, function (_unresolved_3) {
      earnView = _unresolved_3.earnView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b302A7QLtNRpCcyFMXotLN", "earnModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("earnModel", earnModel = (_dec = ccclass('earnModel'), _dec(_class = class earnModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor() {
          super(...arguments);
          this.earnView = void 0;
        }

        start() {
          this.earnView = this.view.getComponent(_crd && earnView === void 0 ? (_reportPossibleCrUseOfearnView({
            error: Error()
          }), earnView) : earnView);
        }

        update(deltaTime) {}

        initData(task) {
          this.earnView.initTaskNode(task);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=298842e4e9f38491264c1908a9759cb8a56c2d63.js.map