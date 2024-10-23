System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, basePageView, GlobalData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, openRewardPos, drawView_arrow, drawView;

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
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fe2bjsdu5ORLnQRkR6WYvo", "drawView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);
      openRewardPos = 1000;
      drawView_arrow = 'drawView_arrow';

      _export("drawView", drawView = (_dec = ccclass("drawView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec(_class = (_class2 = class drawView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor(...args) {
          super(...args);

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

          this.timer_add = 0;
          this.drawLuckyInfo = void 0;
        }

        async start() {
          if (localStorage.getItem(drawView_arrow)) {
            this.arrow.active = false;
            this.arrow_s.active = true;
          }
        }

        setJoinBtnUseAble(use) {
          if (use) {} else {}
        }

        update(deltaTime) {
          this.timer_add = this.timer_add + deltaTime;

          if (this.timer_add >= 1) {
            this.drawLuckyInfo.drawTime = this.drawLuckyInfo.drawTime - 1000;

            if (this.drawLuckyInfo.drawTime <= 5000) {
              this.joinBtn.active = false;
            }

            const current_time = this.formatTimestamp(this.drawLuckyInfo.drawTime);
            this.timer.string = current_time;
            this.timer_add = 0;
          }
        }

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
          this.address.string = `${address.substring(0, 6)}...${address.substring(address.length - 6)}`;
        } //设置当前的倒计时


        formatTimestamp(timestamp) {
          const date = new Date(timestamp);
          const now = new Date();
          let years = now.getFullYear() - date.getFullYear();
          let months = now.getMonth() - date.getMonth();
          let weeks = Math.floor((now.getTime() - date.getTime()) / (7 * 24 * 60 * 60 * 1000));
          let days = now.getDate() - date.getDate();
          let hours = now.getHours() - date.getHours();
          let minutes = now.getMinutes() - date.getMinutes();
          let seconds = now.getSeconds() - date.getSeconds(); // 处理跨日的情况

          if (seconds < 0) {
            seconds += 60;
            minutes--;
          }

          if (minutes < 0) {
            minutes += 60;
            hours--;
          }

          if (hours < 0) {
            hours += 24;
            days--;
          }

          if (days < 0) {
            days += 7;
            weeks--;
          } // 调整年份和月份，因为年份和月份的计算可能不准确


          if (months < 0 || months === 0 && (days < 0 || days === 0 && hours < 0)) {
            years--;
            months += 12;
          }

          return `${years} 年 ${months + 1} 月 ${weeks} 周 ${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
        } //设置当前获奖的信息


        setDrawLuckRewardInfo() {} //设置当前开奖情况的信息


        setDrawLuckInfo(rewardInfo) {
          this.drawLuckyInfo = rewardInfo;
          this.join_count.string = `${rewardInfo.count}`;
        } //展示当前的开奖信息


        showOpenRewardInfo() {} //设置当前的门票和usdt的信息


        setCurrentTicketsUsdtCount(info) {
          this.tickets.string = `${info.tiket}`;
          this.usdt.string = `${info.usdt}`;
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

          console.log('=====scroll', scroll, data);
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c810c92847ed655f4d8a1cca38222cdf53f9167.js.map