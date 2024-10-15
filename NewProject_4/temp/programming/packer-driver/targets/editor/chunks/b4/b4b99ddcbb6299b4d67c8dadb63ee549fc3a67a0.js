System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, drawView, GlobalData, _dec, _class, _crd, ccclass, property, walletUrls, drawModel;

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAxiosResponse(extras) {
    _reporterNs.report("AxiosResponse", "../login/loginModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdrawView(extras) {
    _reporterNs.report("drawView", "./drawView", _context.meta, extras);
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
    }, function (_unresolved_2) {
      basePageModel = _unresolved_2.basePageModel;
    }, function (_unresolved_3) {
      drawView = _unresolved_3.drawView;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75e1c2jLM1A0K1tsAKAKf7e", "drawModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("walletUrls", walletUrls = {
        bindWallet: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://infinityg.ai/api/v1/user/info/edit/bindWallet" : "https://api.infinitytest.cc/api/v1/user/info/edit/bindWallet",
        unbindWallet: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://infinityg.ai/api/v1/user/info/edit/unbindWallet" : "https://api.infinitytest.cc/api/v1/user/info/edit/unbindWallet",
        queryBindWallet: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://infinityg.ai/api/v1/user/info/queryBindWallet" : "https://api.infinitytest.cc/api/v1/user/info/queryBindWallet"
      });

      _export("drawModel", drawModel = (_dec = ccclass("drawModel"), _dec(_class = class drawModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor(...args) {
          super(...args);
          this.drawPage = void 0;
          this.account = void 0;
          this.tonConnectUI = void 0;
        }

        async start() {
          window.bindUxuyWallet = this.bindUxuyWallet;
          this.drawPage = this.view.getComponent(_crd && drawView === void 0 ? (_reportPossibleCrUseOfdrawView({
            error: Error()
          }), drawView) : drawView);
          console.log("INIT the tonconnect ", this.tonConnectUI); //提供一个manifest的json文件记录一些标题图标等数据用于UI连接时的展示

          const manifest = "https://catoss.s3.ap-southeast-1.amazonaws.com/telegram/manifest.json";
          console.log(manifest); //获得TON_CONNECT_UI的实例

          this.tonConnectUI = new window.TON_CONNECT_UI.TonConnectUI({
            manifestUrl: manifest,
            uiPreferences: {//这里可以配置主题
              // theme: TON_CONNECT_UI.THEME.DARK,
            }
          }); // if(this.tonConnectUI.connected) {
          //     //断开连接重新加载
          //     console.log("Disconnect for connection reload")
          //     await this.tonConnectUI.disconnect();
          // }
        }

        update(deltaTime) {}

        async bindTonWallet() {
          if (this.tonConnectUI.connected) {
            await this.tonConnectUI.disconnect();
          }

          this.tonConnectUI.onStatusChange(async walletAndwalletInfo => {
            //连接状态改变监听事件
            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).wallet_address) {
              return;
            }

            console.log("change : ", walletAndwalletInfo);
            this.account = walletAndwalletInfo;
            this.drawPage.controlConnectWalletBtnsVisible(false);
            this.drawPage.home.getChildByName('tap_btns').active = true;
            const walletInfo = await window.axios.post(walletUrls.bindWallet, {
              walletAddress: walletAndwalletInfo.account.address,
              walletChain: walletAndwalletInfo.account.chain
            }, {
              headers: {
                'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
            this.drawPage.setWalletInfo(walletAndwalletInfo.account.address);
          });
          await this.tonConnectUI.openModal();
        }

        async initData() {
          const walletInfo = await this.getWalletInfo();

          if (walletInfo != null && walletInfo.walletAddress) {
            this.drawPage.setWalletInfo(walletInfo == null ? void 0 : walletInfo.walletAddress);
          }
        }

        async bindUxuyWallet() {
          try {
            this.drawPage.controlConnectWalletBtnsVisible(false);
            this.drawPage.home.getChildByName('tap_btns').active = true;
            let walletAddress;
            let walletChain;

            if (window.uxuyethereum._account.address) {
              walletAddress = window.uxuyethereum._account.address;
              walletChain = window.uxuyethereum._account.chainName;
            } else {
              await window.uxuyWalletConnect();
              walletAddress = window.uxuyethereum._account.address;
              walletChain = window.uxuyethereum._account.chainName;
            }

            console.log('========', walletAddress, walletChain);
            const walletInfo = await window.axios.post(walletUrls.bindWallet, {
              walletAddress: walletAddress,
              walletChain: walletChain
            }, {
              headers: {
                'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
            this.drawPage.setWalletInfo(walletAddress);
          } catch (error) {}
        }

        async unBindWallet() {
          var _walletInfo$data;

          const walletInfo = await window.axios.post(walletUrls.unbindWallet, {}, {
            headers: {
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          this.drawPage.controlUnbindBtnVisible(false);
          this.drawPage.controlBindBtnVisible(true);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).wallet_address = null;
          return walletInfo == null ? void 0 : (_walletInfo$data = walletInfo.data) == null ? void 0 : _walletInfo$data.code;
        }

        async getWalletInfo() {
          var _walletInfo$data2;

          const walletInfo = await window.axios.post(walletUrls.queryBindWallet, {}, {
            headers: {
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          return walletInfo == null ? void 0 : (_walletInfo$data2 = walletInfo.data) == null ? void 0 : _walletInfo$data2.data;
        }

        async copyAddress() {
          navigator.clipboard.writeText(this.drawPage.address.string).then(function () {
            window.Telegram.WebApp.showPopup({
              title: 'Copy Success',
              // 弹出窗口的标题
              message: 'copy address success！',
              // 弹出窗口的消息内容
              buttons: [{
                id: 'btn2',
                text: 'Button 2',
                type: 'ok'
              }, // 'type' 可以是 'ok', 'close', 'cancel', 'default', 'destructive'
              {
                id: 'btn3',
                text: 'Button 3',
                type: 'cancel'
              }]
            }, buttonId => {
              // 弹出窗口关闭时的回调函数
              if (buttonId) {
                console.log('User pressed button:', buttonId);
              } else {
                console.log('Popup was closed without pressing a button');
              }
            });
          }).catch(err => {
            window.Telegram.WebApp.showPopup({
              title: 'Copy failed',
              // 弹出窗口的标题
              message: 'copy address failed',
              // 弹出窗口的消息内容
              buttons: [{
                id: 'btn2',
                text: 'Button 2',
                type: 'ok'
              }, // 'type' 可以是 'ok', 'close', 'cancel', 'default', 'destructive'
              {
                id: 'btn3',
                text: 'Button 3',
                type: 'cancel'
              }]
            }, buttonId => {
              // 弹出窗口关闭时的回调函数
              if (buttonId) {
                console.log('User pressed button:', buttonId);
              } else {
                console.log('Popup was closed without pressing a button');
              }
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b4b99ddcbb6299b4d67c8dadb63ee549fc3a67a0.js.map