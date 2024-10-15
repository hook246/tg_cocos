System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, PagesPosOutSet, homeModel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff2e3E0+HhKYYVW+CJq2teZ", "homeModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PagesPosOutSet", PagesPosOutSet = {
        login: {
          x: -3219.321,
          y: 0
        },
        discover: {
          x: -4150.868,
          y: 0
        },
        invite: {
          x: -5129.802,
          y: 0
        },
        earn: {
          x: -6084.654,
          y: 0
        },
        draw: {
          x: -7063.518,
          y: 0
        }
      });

      _export("homeModel", homeModel = (_dec = ccclass('homeModel'), _dec(_class = class homeModel extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ea07b0c276571504850925d21cf4ca497c1dde0.js.map