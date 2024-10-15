System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CircleCollider2D, Contact2DType, PolygonCollider2D, _dec, _class, _crd, ccclass, property, HeroColliderCtl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CircleCollider2D = _cc.CircleCollider2D;
      Contact2DType = _cc.Contact2DType;
      PolygonCollider2D = _cc.PolygonCollider2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfcde1rknpCubO1yzWC/Vq9", "HeroColliderCtl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CircleCollider2D', 'Contact2DType', 'PolygonCollider2D', 'Collider2D']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 英雄的碰撞体脚本
       * @author 一朵毛山
       * Construct 
       */

      _export("HeroColliderCtl", HeroColliderCtl = (_dec = ccclass('HeroColliderCtl'), _dec(_class = class HeroColliderCtl extends Component {
        constructor() {
          super(...arguments);
          //0=踏空,1=分,2=分, -1=滑倒
          this.step_score = 0;
          //碰撞发生的箱子node
          this.collider_node = null;
        }

        start() {
          var _this$node$getCompone, _this$node$getCompone2;

          //注册碰撞事件
          (_this$node$getCompone = this.node.getComponent(CircleCollider2D)) == null ? void 0 : _this$node$getCompone.on(Contact2DType.BEGIN_CONTACT, this.on_begin_contact, this); //注册碰撞事件

          (_this$node$getCompone2 = this.node.getComponent(PolygonCollider2D)) == null ? void 0 : _this$node$getCompone2.on(Contact2DType.BEGIN_CONTACT, this.on_begin_contact, this);
        }
        /**
         * 碰撞回调,用于处理碰撞后的逻辑
         * @param hero_collier 
         * @param box_collier 
         */


        on_begin_contact(hero_collier, box_collier) {
          if (hero_collier.tag == 1 && box_collier.tag == 11) {
            this.step_score = 2;
          } else if (hero_collier.tag == 1 && box_collier.tag == 12) {
            if (this.step_score < 1) {
              this.step_score = 1;
            }
          } else if (hero_collier.tag == 2 && box_collier.tag == 12) {
            if (this.step_score == 0) {
              this.step_score = -1;
            }
          }

          this.collider_node = box_collier.node.parent;
        }
        /**
         * 重置数据,每次跳跃时候调用
         */


        reset_data() {
          this.step_score = 0;
          this.collider_node = null;
        }
        /**
         * 获取本次跳跃得分
         * @returns 
         */


        get_step_score() {
          return this.step_score;
        }
        /**
         * 获取本次跳跃发生碰撞的node
         * @returns 
         */


        get_collider_node() {
          return this.collider_node;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d03d51a32050c726038f1e8603b3531f2d88a01.js.map