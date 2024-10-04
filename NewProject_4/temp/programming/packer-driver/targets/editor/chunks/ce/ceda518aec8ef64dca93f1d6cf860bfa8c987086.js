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
          const array = [0, 1, 2, 3, 0, 1, 2, 3, 0];
          array.sort((a, b) => {
            // 定义一个排序优先级数组
            const priority = [2, 0, 1]; // 获取 a 和 b 在优先级数组中的索引

            let indexA = priority.indexOf(a);
            let indexB = priority.indexOf(b); // 比较索引，确定排序

            if (indexA === -1) indexA = 3; // 如果找不到，放在最后

            if (indexB === -1) indexB = 3; // 如果找不到，放在最后

            return indexA - indexB;
          });
          console.log(array); // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ceda518aec8ef64dca93f1d6cf860bfa8c987086.js.map