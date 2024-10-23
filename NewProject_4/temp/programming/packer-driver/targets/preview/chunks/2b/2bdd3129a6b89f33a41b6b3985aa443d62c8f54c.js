System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, tween, UIOpacity, basePageView, GlobalData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, openRewardPos, drawView_arrow, drawView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfticketsUsdt(extras) {
    _reporterNs.report("ticketsUsdt", "./drawModel", _context.meta, extras);
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
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fe2bjsdu5ORLnQRkR6WYvo", "drawView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ScrollView', 'Sprite', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      openRewardPos = 1000;
      drawView_arrow = 'drawView_arrow';

      _export("drawView", drawView = (_dec = ccclass("drawView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = (_class2 = class drawView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "walletConnectBtns", _descriptor, this);

          _initializerDefineProperty(this, "unBindWalletInfo", _descriptor2, this);

          _initializerDefineProperty(this, "bindWalletInfo", _descriptor3, this);

          _initializerDefineProperty(this, "address", _descriptor4, this);

          _initializerDefineProperty(this, "home", _descriptor5, this);

          _initializerDefineProperty(this, "joinBtn", _descriptor6, this);

          _initializerDefineProperty(this, "arrow", _descriptor7, this);

          _initializerDefineProperty(this, "arrow_s", _descriptor8, this);

          //门票和usdt数量设置
          _initializerDefineProperty(this, "tickets", _descriptor9, this);

          _initializerDefineProperty(this, "usdt", _descriptor10, this);

          //开奖信息
          _initializerDefineProperty(this, "join_count", _descriptor11, this);

          _initializerDefineProperty(this, "timer", _descriptor12, this);

          _initializerDefineProperty(this, "draw_lucky_result", _descriptor13, this);

          _initializerDefineProperty(this, "good_result", _descriptor14, this);

          _initializerDefineProperty(this, "bad_result", _descriptor15, this);

          this.drawLuckyInfo = void 0;
          this.drawLuckyClose = void 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (localStorage.getItem(drawView_arrow)) {
              _this.arrow.active = false;
              _this.arrow_s.active = true;
            }
          })();
        }

        setJoinBtnUseAble(use) {
          use ? this.joinBtn.active = false : this.joinBtn.active = true;
        }

        update(deltaTime) {}

        controlUnbindBtnVisible(visible) {
          this.unBindWalletInfo.active = visible;
        }

        controlBindBtnVisible(visible) {
          this.bindWalletInfo.active = visible;
        }

        controlConnectWalletBtnsVisible(visible) {
          this.walletConnectBtns.active = visible;
        }

        showConnectWalletBtns() {
          this.controlConnectWalletBtnsVisible(true);
          this.home.getChildByName("tap_btns").active = false;
        }

        setWalletInfo(address) {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).wallet_address = address;
          this.controlBindBtnVisible(false);
          this.controlUnbindBtnVisible(true);
          this.address.string = address.substring(0, 6) + "..." + address.substring(address.length - 6);
        } //弹窗展示当前获奖的信息


        showDrawLuckRewardInfo(rewardInfo) {
          if (rewardInfo.join) {
            this.draw_lucky_result.active = true;
            tween(this.draw_lucky_result.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).call(() => {}).start();

            if (rewardInfo.win) {
              this.good_result.active = true;
              this.bad_result.active = false;
            } else {
              this.good_result.active = false;
              this.bad_result.active = true;
            }
          } else {}
        } //关闭领奖弹窗


        closeDrawLuckRewardInfo() {
          this.draw_lucky_result.active = false;
          this.good_result.active = false;
          this.bad_result.active = false;
          this.draw_lucky_result.getComponent(UIOpacity).opacity = 0;
        } //设置当前开奖情况的信息


        setDrawLuckInfo(rewardInfo) {
          this.drawLuckyInfo = rewardInfo;
          this.join_count.string = "" + rewardInfo.count;
        } //展示当前的开奖信息


        showOpenRewardInfo() {} //设置当前的门票和usdt的信息


        setCurrentTicketsUsdtCount(info) {
          this.tickets.string = "" + info.data.tiket;
          this.usdt.string = "" + info.data.usdt;
        }

        closeBtnConnectWallets() {
          this.controlConnectWalletBtnsVisible(false);
          this.home.getChildByName("tap_btns").active = true;
        }

        markArrow(scroll, data) {
          localStorage.setItem(drawView_arrow, 'drawView_arrow');
          this.arrow.active = false;
          this.arrow_s.active = true;

          if (scroll.getScrollOffset().y >= openRewardPos) {}
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "walletConnectBtns", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "unBindWalletInfo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bindWalletInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "address", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "home", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "joinBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrow", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "arrow_s", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "tickets", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "usdt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "join_count", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "timer", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "draw_lucky_result", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "good_result", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "bad_result", [_dec16], {
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
//# sourceMappingURL=2bdd3129a6b89f33a41b6b3985aa443d62c8f54c.js.map