System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, UITransform, tween, _dec, _class, _crd, ccclass, property, BoxCtl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60a87Y0MpZLtLjAbwmpc2Ww", "BoxCtl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 箱子脚本
       * @author 一朵毛山
       * Construct 
       */

      _export("BoxCtl", BoxCtl = (_dec = ccclass('BoxCtl'), _dec(_class = class BoxCtl extends Component {
        constructor(...args) {
          super(...args);

          /**
           * 本node显示的子节点
           */
          this.cur_box = null;
        }

        start() {}

        update(deltaTime) {}
        /**
         * 随机生成箱子
         * @param parent 箱子的父节点
         * @param pos  箱子随机出来的位置
         */


        random_box(parent, pos) {
          let index = Math.random() * (this.node.children.length - 1); //27

          index = Math.round(index);
          this.cur_box = this.node.children[index];
          this.cur_box.active = true;

          for (let ele of this.node.children) {
            if (ele == this.cur_box) {
              continue;
            }

            ele.active = false;
          }

          this.node.setParent(parent);
          this.node.setPosition(pos);
          this.cur_box.getChildByName("jump_point").active = false;
        }
        /**
         * 获取跳跃的小白点在logic_layer的坐标,该坐标是通过转换获取的
         * @returns 
         */


        get_jump_position() {
          let world_pos = this.cur_box.getChildByName("jump_point").getWorldPosition();
          return this.node.getParent().getComponent(UITransform).convertToNodeSpaceAR(world_pos);
        }
        /**
         * 触控屏幕时候调用,手指不松开开一直调用
         * @param delta_time 帧时间
         */


        touch_start(delta_time) {
          let y = this.node.getScale().y - delta_time / 6;
          this.node.setScale(new Vec3(this.node.getScale().x, y));

          if (this.node.getScale().y <= 0.8) {
            this.node.setScale(new Vec3(this.node.getScale().x, 0.8));
          }
        }
        /**
         * 触控结束后调用,手指松开立即调用,为了恢复箱子,并让箱子实现弹起效果
         */


        touch_end() {
          let scale_y = 1 - this.node.getScale().y;
          let t1 = tween(this.node).to(scale_y / 5, {
            scale: new Vec3(this.node.getScale().x, 1 + scale_y / 2)
          });
          let t2 = tween(this.node).to(scale_y / 8, {
            scale: new Vec3(this.node.getScale().x, 1 - scale_y / 5)
          });
          let t3 = tween(this.node).to(scale_y / 5, {
            scale: new Vec3(this.node.getScale().x, 1)
          });
          tween(this.node).sequence(t1, t2, t3).start();
        }
        /**
         * 获取箱子的高度
         * @returns 
         */


        get_height() {
          return this.cur_box.getChildByName("box").getComponent(UITransform).height;
        }
        /**
         * 箱子初始化到场景的动画,一个简单的弹跳动画
         */


        action_tween() {
          let pos = this.node.getPosition();
          this.node.setPosition(pos.x, pos.y + 100);
          tween(this.node).to(0.2, {
            position: new Vec3(this.node.getPosition().x, pos.y - 10)
          }).to(0.08, {
            position: new Vec3(this.node.getPosition().x, pos.y + 50)
          }).to(0.07, {
            position: new Vec3(this.node.getPosition().x, pos.y - 5)
          }).to(0.06, {
            position: new Vec3(this.node.getPosition().x, pos.y + 10)
          }).to(0.02, {
            position: new Vec3(this.node.getPosition().x, pos.y)
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40dcaf03b51232fc6b82588a36c60a9e44e85ce9.js.map