System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, EventDispatcher, GameData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, OverCtl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "./EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      EventDispatcher = _unresolved_2.EventDispatcher;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7651KgvmNEgK3fQctlfShH", "OverCtl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 游戏结束界面,脚本
       * @author 一朵毛山
       * Construct 
       */

      _export("OverCtl", OverCtl = (_dec = ccclass('OverCtl'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = class OverCtl extends Component {
        constructor() {
          super(...arguments);

          //本局分数
          _initializerDefineProperty(this, "total_score", _descriptor, this);

          //历史最高分
          _initializerDefineProperty(this, "history_score", _descriptor2, this);
        }

        start() {
          //注册打开游戏结束界面事件
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).get_instance().target.on((_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).SHOW_OVER_WINDOW, this.show, this);
          this.node.active = false;
        }
        /**
         * 显示游戏结束界面
         */


        show() {
          this.scheduleOnce(() => {
            this.node.setPosition(0, 0);
            this.node.active = true;
            this.total_score.string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).get_total_score() + "";
            var histroy = localStorage.getItem("history_score");

            if (!histroy) {
              histroy = "0";
            }

            this.history_score.string = histroy;
          }, 0.5);
        }

        update(deltaTime) {}
        /**
         * 重新开始游戏
         */


        restart() {
          //隐藏该界面
          this.node.setPosition(-1000, 0);
          this.node.active = false; //发送游戏开始事件

          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).get_instance().target.emit((_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).START_GAME);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "total_score", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "history_score", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07b63fa79addf7a8cf7fa0340721213ed14c1a47.js.map