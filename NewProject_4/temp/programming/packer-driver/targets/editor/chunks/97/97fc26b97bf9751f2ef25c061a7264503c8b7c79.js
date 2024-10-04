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
          const array = [0, 1, 2, 3, 0, 1, 2, 3, 0]; // 使用 sort 方法进行排序

          array.sort((a, b) => {
            // 如果两个元素都是2，或者两个元素都不是2，保持相对位置不变
            if (a === 2 && b === 2 || a !== 2 && b !== 2) {
              return 0;
            } // 如果元素a是2，它应该在前面


            if (a === 2) {
              return -1;
            } // 如果元素b是2，它应该在后面


            if (b === 2) {
              return 1;
            } // 对于0和1，以及0和3，1和3的情况，我们希望保持它们的相对位置
            // 所以如果a是3，它应该在后面


            if (b === 3) {
              return -1;
            } // 如果a是3，它应该在后面


            if (a === 3) {
              return 1;
            } // 对于0和1之间的排序，我们希望保持它们的相对位置


            return 0;
          });
          console.log(array); // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
          // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97fc26b97bf9751f2ef25c061a7264503c8b7c79.js.map