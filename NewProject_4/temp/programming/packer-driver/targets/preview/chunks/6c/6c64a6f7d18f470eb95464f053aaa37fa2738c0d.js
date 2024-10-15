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
          window['up'] = () => {
            this.up(2);
          };

          window['down'] = () => {
            this.up(3);
          };

          var children = this.node.children;
        }

        update(deltaTime) {}

        up(index) {
          var temp = this.node.children[index];
          this.node.children[index] = this.node.children[0];
          this.node.children[index].setPosition(this.node.children[0].getPosition());
          this.node.children[0] = temp;
          this.node.children[0].setPosition(temp.getPosition());
        }

        down(index) {
          var temp = this.node.children[index];
          this.node.children[index] = this.node.children[this.node.children.length - 1];
          this.node.children[index].setPosition(this.node.children[this.node.children.length - 1].getPosition());
          this.node.children[this.node.children.length - 1] = temp;
          this.node.children[this.node.children.length - 1].setPosition(temp.getPosition());
        } // sort(){
        // //    this.node.children.sort((a, b)=>{
        // //         return b.getComponent(UITransform).width - a.getComponent(UITransform).width
        // //    })
        // const array = [0, 1, 2, 3, 0, 1, 2, 3, 0];
        // // 使用 sort 方法进行排序
        // array.sort((a, b) => {
        //   // 如果一个是2，另一个不是2，则2在前
        //   if (a === 2) return -1;
        //   if (b === 2) return 1;
        //   // 如果一个是3，另一个不是3，则3在后
        //   if (a === 3) return 1;
        //   if (b === 3) return -1;
        //   // 如果一个是0或1，另一个是3，则0或1在前
        //   if ((a === 0 || a === 1) && b === 3) return -1;
        //   if ((b === 0 || b === 1) && a === 3) return 1;
        //   // 如果一个是0或1，另一个是2，则0或1在后
        //   if ((a === 0 || a === 1) && b === 2) return 1;
        //   if ((b === 0 || b === 1) && a === 2) return -1;
        //   // 否则，保持原始顺序（即0和1的相对位置不变）
        //   return 0;
        // });
        // console.log(array);
        // // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
        // // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
        // // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c64a6f7d18f470eb95464f053aaa37fa2738c0d.js.map