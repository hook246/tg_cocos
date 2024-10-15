System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Label, Node, UITransform, basePageView, GlobalData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, inviteView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02208RC+ahDQI46uK8lbvNC", "inviteView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'ScrollView', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("inviteView", inviteView = (_dec = ccclass("inviteView"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec(_class = (_class2 = class inviteView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "points", _descriptor, this);

          _initializerDefineProperty(this, "invite_count", _descriptor2, this);

          _initializerDefineProperty(this, "point_multi1", _descriptor3, this);

          _initializerDefineProperty(this, "point_multi2", _descriptor4, this);

          _initializerDefineProperty(this, "point_multi3", _descriptor5, this);

          _initializerDefineProperty(this, "point_multi4", _descriptor6, this);

          _initializerDefineProperty(this, "point_multi5", _descriptor7, this);

          _initializerDefineProperty(this, "point_multi1_c", _descriptor8, this);

          _initializerDefineProperty(this, "point_multi2_c", _descriptor9, this);

          _initializerDefineProperty(this, "point_multi3_c", _descriptor10, this);

          _initializerDefineProperty(this, "point_multi4_c", _descriptor11, this);

          _initializerDefineProperty(this, "point_multi5_c", _descriptor12, this);

          _initializerDefineProperty(this, "progress_point", _descriptor13, this);

          _initializerDefineProperty(this, "progress_bar", _descriptor14, this);

          _initializerDefineProperty(this, "invite_url", _descriptor15, this);

          _initializerDefineProperty(this, "copy_complete1", _descriptor16, this);

          _initializerDefineProperty(this, "copy_complete2", _descriptor17, this);

          _initializerDefineProperty(this, "home", _descriptor18, this);

          this.copy_link = void 0;
        }

        start() {// this.node.getComponent(ScrollView).scrollToBottom()
          // this.node.getComponent(ScrollView).scrollToTop()
        }

        update(deltaTime) {}

        setInviteInfo(totalInviteNum, totalPoint) {
          //1 10 50 100 500
          this.points.string = String(totalPoint);
          this.invite_count.string = String(totalInviteNum);
          this.progress_point.active = true;

          if (totalInviteNum < 10) {
            this.point_multi1.getComponent(Label).color = new Color('#000000DA');
            this.point_multi1.getComponent(Label).fontSize = 40;
            this.point_multi1_c.getComponent(Label).color = new Color('#000000DA');
            this.point_multi1_c.getComponent(Label).fontSize = 40;
            this.progress_point.setPosition(-304.808, 11.582);
            this.progress_bar.getComponent(UITransform).width = 15;
          } else if (totalInviteNum > 10 && totalInviteNum < 50) {
            this.point_multi2.string = "2x";
            this.point_multi2.getComponent(Label).color = new Color('#000000DA');
            this.point_multi2.getComponent(Label).fontSize = 40;
            this.point_multi2.node.setPosition(this.point_multi2.node.getPosition().x, this.point_multi2.node.getPosition().y + 20);
            this.progress_point.setPosition(-304.808, 11.582);
            this.progress_bar.getComponent(UITransform).width = 15;
          } else if (totalInviteNum > 50 && totalInviteNum < 100) {
            this.point_multi3.string = "3x";
            this.point_multi2.getComponent(Label).color = new Color('#000000DA');
            this.point_multi2.getComponent(Label).fontSize = 40;
            this.point_multi2.node.setPosition(this.point_multi2.node.getPosition().x, this.point_multi2.node.getPosition().y + 20);
            this.progress_point.setPosition(-106.933, 11.582);
            this.progress_bar.getComponent(UITransform).width = 210;
          } else if (totalInviteNum > 100 && totalInviteNum < 500) {
            this.point_multi4.string = "4x";
            this.point_multi2.getComponent(Label).color = new Color('#000000DA');
            this.point_multi2.getComponent(Label).fontSize = 40;
            this.point_multi2.node.setPosition(this.point_multi2.node.getPosition().x, this.point_multi2.node.getPosition().y + 20);
            this.progress_point.setPosition(138, 11.582);
            this.progress_bar.getComponent(UITransform).width = 450;
          } else if (totalInviteNum > 500) {
            this.point_multi5.string = "5x";
            this.point_multi2.getComponent(Label).color = new Color('#000000DA');
            this.point_multi2.getComponent(Label).fontSize = 40;
            this.point_multi2.node.setPosition(this.point_multi2.node.getPosition().x, this.point_multi2.node.getPosition().y + 20);
            this.progress_point.setPosition(314.842, 11.582);
            this.progress_bar.getComponent(UITransform).width = 620;
          }

          this.setInviteUrl();
        }

        setInviteUrl() {
          this.invite_url.string = "https://t.me/infinity_ground_bot/infinity_ground_app?startapp=" + window.btoa("{\"inviteCode\":\"" + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).inviteCode + "\"}");
          this.copy_link = "https://t.me/infinity_ground_bot/infinity_ground_app?startapp=" + window.btoa("{\"inviteCode\":\"" + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).inviteCode + "\"}");
        }

        copyInviteLink() {
          navigator.clipboard.writeText(this.copy_link).then(() => {
            this.copy_complete1.active = true;
            this.copy_complete2.active = true;
            this.scheduleOnce(() => {
              this.copy_complete1.active = false;
              this.copy_complete2.active = false;
            }, 2);
          }).catch(() => {});
        }

        shareInviteToFriend() {
          var shareText = "🔥Join the biggest AI gaming platform on Telegram!\n🎮Experience infinite fun of AI Games and Earn Rewards.";
          var shareUrl = this.copy_link; // 构建 Telegram share URL

          var telegramShareUrl = "https://t.me/share/url?url=" + encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(shareText); // 使用 window.open 来唤起分享

          window.open(telegramShareUrl, "_blank");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "points", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "invite_count", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "point_multi1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "point_multi2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "point_multi3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "point_multi4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "point_multi5", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "point_multi1_c", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "point_multi2_c", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "point_multi3_c", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "point_multi4_c", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "point_multi5_c", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "progress_point", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "progress_bar", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "invite_url", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "copy_complete1", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "copy_complete2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "home", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f017db1839cb8e7c5f7fdf4a6b294e78f67982a.js.map