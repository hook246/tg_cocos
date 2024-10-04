System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, drawView, GlobalData, _dec, _class, _crd, ccclass, property, walletUrls, drawModel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        bindWallet: "https://api.infinitytest.cc/api/v1/user/info/edit/bindWallet",
        unbindWallet: "https://api.infinitytest.cc/api/v1/user/info/edit/unbindWallet",
        queryBindWallet: "https://api.infinitytest.cc/api/v1/user/info/queryBindWallet"
      });

      _export("drawModel", drawModel = (_dec = ccclass("drawModel"), _dec(_class = class drawModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor() {
          super(...arguments);
          this.drawPage = void 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            window.bindUxuyWallet = _this.bindUxuyWallet;
            _this.drawPage = _this.view.getComponent(_crd && drawView === void 0 ? (_reportPossibleCrUseOfdrawView({
              error: Error()
            }), drawView) : drawView);
          })();
        }

        update(deltaTime) {}

        initData() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var walletInfo = yield _this2.getWalletInfo();

            if (walletInfo.walletAddress) {
              _this2.drawPage.setWalletInfo(walletInfo.walletAddress);
            }
          })();
        }

        bindUxuyWallet() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            try {
              _this3.drawPage.controlConnectWalletBtnsVisible(false);

              var walletAddress;
              var walletChain;

              if (window.uxuyethereum._account.address) {
                walletAddress = window.uxuyethereum._account.address;
                walletChain = window.uxuyethereum._account.chainName;
              } else {
                yield window.uxuyWalletConnect();
                walletAddress = window.uxuyethereum._account.address;
                walletChain = window.uxuyethereum._account.chainName;
              }

              console.log('========', walletAddress, walletChain);
              var walletInfo = yield window.axios.post(walletUrls.bindWallet, {
                walletAddress: walletAddress,
                walletChain: walletChain
              }, {
                headers: {
                  'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).token
                }
              });

              _this3.drawPage.setWalletInfo(walletAddress);
            } catch (error) {}
          })();
        }

        unBindWallet() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var _walletInfo$data;

            var walletInfo = yield window.axios.post(walletUrls.unbindWallet, {}, {
              headers: {
                'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            });

            _this4.drawPage.controlUnbindBtnVisible(false);

            _this4.drawPage.controlBindBtnVisible(true);

            return walletInfo == null ? void 0 : (_walletInfo$data = walletInfo.data) == null ? void 0 : _walletInfo$data.code;
          })();
        }

        getWalletInfo() {
          return _asyncToGenerator(function* () {
            var _walletInfo$data2;

            var walletInfo = yield window.axios.post(walletUrls.queryBindWallet, {}, {
              headers: {
                'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            });
            return walletInfo == null ? void 0 : (_walletInfo$data2 = walletInfo.data) == null ? void 0 : _walletInfo$data2.data;
          })();
        }

        copyAddress() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            navigator.clipboard.writeText(_this5.drawPage.address.string).then(function () {
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
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2233cfd425a29bf6208de76040b6fbe3777839ee.js.map