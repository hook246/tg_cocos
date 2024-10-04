System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, basePageView, GlobalData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, inviteView;

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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02208RC+ahDQI46uK8lbvNC", "inviteView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("inviteView", inviteView = (_dec = ccclass("inviteView"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class inviteView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "points", _descriptor, this);

          _initializerDefineProperty(this, "invite_count", _descriptor2, this);

          _initializerDefineProperty(this, "point_multi", _descriptor3, this);

          _initializerDefineProperty(this, "invite_url", _descriptor4, this);

          _initializerDefineProperty(this, "copy_complete1", _descriptor5, this);

          _initializerDefineProperty(this, "copy_complete2", _descriptor6, this);

          this.copy_link = void 0;
        }

        start() {}

        update(deltaTime) {}

        setInviteInfo(totalInviteNum, totalPoint) {
          //1 10 50 100 500
          this.points.string = String(totalPoint);
          this.invite_count.string = String(totalInviteNum);

          switch (totalInviteNum) {
            case 1:
              this.point_multi.string = "1x";
              break;

            case 10:
              this.point_multi.string = "2x";
              break;

            case 50:
              this.point_multi.string = "3x";
              break;

            case 100:
              this.point_multi.string = "4x";
              break;

            case 500:
              this.point_multi.string = "5x";
              break;

            default:
              break;
          }

          this.setInviteUrl();
        }

        setInviteUrl() {
          this.invite_url.string = `https://t.me/infinity_ground_bot/infinity_ground_app?startapp=${window.btoa(`inviteCode:${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).inviteCode}`)}`;
          this.copy_link = `https://t.me/infinity_ground_bot/infinity_ground_app?startapp=${window.btoa(`inviteCode:${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).inviteCode}`)}`;
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
          const shareText = "invite friend link";
          const shareUrl = this.copy_link; // 构建 Telegram share URL

          const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`; // 使用 window.open 来唤起分享

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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "point_multi", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "invite_url", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "copy_complete1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "copy_complete2", [_dec7], {
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
//# sourceMappingURL=baf4c0f54f06997aed88aff3a7813cc997ab878f.js.map