System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, macro, EventDispatcher, GameData, LogicCtl, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MainCtl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "./EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicCtl(extras) {
    _reporterNs.report("LogicCtl", "./LogicCtl", _context.meta, extras);
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
      Node = _cc.Node;
      Label = _cc.Label;
      macro = _cc.macro;
    }, function (_unresolved_2) {
      EventDispatcher = _unresolved_2.EventDispatcher;
    }, function (_unresolved_3) {
      GameData = _unresolved_3.GameData;
    }, function (_unresolved_4) {
      LogicCtl = _unresolved_4.LogicCtl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9298a2cHldDZ4EFcmOmVksZ", "MainCtl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'macro']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 主脚本,挂载canvas上
       * @author 一朵毛山
       * Construct 
       */

      _export("MainCtl", MainCtl = (_dec = ccclass('MainCtl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: _crd && LogicCtl === void 0 ? (_reportPossibleCrUseOfLogicCtl({
          error: Error()
        }), LogicCtl) : LogicCtl
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = class MainCtl extends Component {
        constructor(...args) {
          super(...args);

          //home_page 页面
          _initializerDefineProperty(this, "home_page", _descriptor, this);

          //逻辑层
          _initializerDefineProperty(this, "logic_ctl", _descriptor2, this);

          //本局得分
          _initializerDefineProperty(this, "score_label", _descriptor3, this);
        }

        start() {
          var _this$home_page;

          //设置homg page 显示在屏幕中间
          (_this$home_page = this.home_page) == null ? void 0 : _this$home_page.setPosition(0, 0); //注册监听自定义事件 (更新分数)

          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).get_instance().target.on((_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).UPDATE_SCORE_LABEL, this.update_score_label, this); //注册监听自定义事件 (开始游戏)

          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).get_instance().target.on((_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).START_GAME, this.start_game, this); //延迟2秒执行自动跳

          this.schedule(this.auto_play, 2, macro.REPEAT_FOREVER, 2);
        }

        update(deltaTime) {}
        /**
         * 更新本局得分
         */


        update_score_label() {
          this.score_label.string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).get_total_score() + "";
        }
        /**
         * 手动开始游戏
         */


        start_game() {
          var _this$logic_ctl;

          this.unschedule(this.auto_play); //设置默认本局得分0

          this.score_label.string = "" + 0; //重置游戏数据,游戏状态

          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).reset_data(); //移动和隐藏,home page

          this.home_page.setPosition(-1000, 0);
          this.home_page.active = false; //开始游戏,状态为1

          (_this$logic_ctl = this.logic_ctl) == null ? void 0 : _this$logic_ctl.run_game(1);
        }
        /**
         * 自动开始游戏
         */


        auto_play() {
          // 状态合法性判断
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).get_game_state() == -1) {
            //自动跳
            this.logic_ctl.auto_jump();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "home_page", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "logic_ctl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "score_label", [_dec4], {
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
//# sourceMappingURL=4d7ce2c75fe615189939b006a90e7653b9b5fb23.js.map