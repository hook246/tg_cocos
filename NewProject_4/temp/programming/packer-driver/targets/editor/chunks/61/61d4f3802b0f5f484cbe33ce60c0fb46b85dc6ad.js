System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, NewComponent;

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

      _cclegacy._RF.push({}, "2d6fdABwwhLmod/7/3bBtuP", "testSortChildren", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewComponent", NewComponent = (_dec = ccclass('NewComponent'), _dec(_class = class NewComponent extends Component {
        start() {
          window['sortChildren'] = () => {
            this.sort();
          };
        }

        update(deltaTime) {}

        sort() {
          //    this.node.children.sort((a, b)=>{
          //         return b.getComponent(UITransform).width - a.getComponent(UITransform).width
          //    })
          this.node.children[0].setPosition(0, -200);
          this.node.children[1].setPosition(0, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61d4f3802b0f5f484cbe33ce60c0fb46b85dc6ad.js.map