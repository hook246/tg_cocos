System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RankCtl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8694fyd9ZFFXYNV1m+7qh+c", "RankCtl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 排行榜界面,脚本
       * @author 一朵毛山
       * Construct 
       */

      _export("RankCtl", RankCtl = (_dec = ccclass('RankCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class RankCtl extends Component {
        constructor(...args) {
          super(...args);

          //预制体,排行榜你的
          _initializerDefineProperty(this, "pre_rank_item", _descriptor, this);

          //排行数据容器
          _initializerDefineProperty(this, "content", _descriptor2, this);
        }

        start() {
          //默认不显示
          this.node.active = false;
        }

        update(deltaTime) {}
        /**
         * 显示该页面
         */


        show() {
          this.node.setPosition(0, 0);
          this.node.active = true;
          this.content.removeAllChildren(); //制造假数据

          for (let i = 0; i < 15; i++) {
            let item = instantiate(this.pre_rank_item);
            item.setParent(this.content);
            item.setPosition(-7, i * -72 - 35); //假数据哦

            item.getChildByName("order").getComponent(Label).string = i + 1 + "";
            item.getChildByName("nick_name").getComponent(Label).string = "北门👌🏻" + i + "";
            item.getChildByName("score").getComponent(Label).string = Math.round(Math.random() * 100) + "";
          }
        }
        /**
         * 关闭该页面
         */


        close() {
          this.node.setPosition(-1000, 0);
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_rank_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=876c5f74dd39dace147ed67d9ac895aa2a597aa4.js.map