System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, GlobalConfig, _dec, _class, _crd, ccclass, property, walletUrls, drawModel;

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAxiosResponse(extras) {
    _reporterNs.report("AxiosResponse", "../login/loginModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "../home/GlobalConfig", _context.meta, extras);
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
      GlobalConfig = _unresolved_3.GlobalConfig;
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
        start() {
          window.bindUxuyWallet = this.bindUxuyWallet;
        }

        update(deltaTime) {}

        async bindUxuyWallet() {
          var _walletInfo$data;

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
              'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
              'Content-Type': 'application/json',
              'authorization': (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig)._instance.token
            }
          });
          return walletInfo == null ? void 0 : (_walletInfo$data = walletInfo.data) == null ? void 0 : _walletInfo$data.code;
        }

        async unBindWallet() {
          var _walletInfo$data2;

          const walletInfo = await window.axios.post(walletUrls.unbindWallet, {}, {
            headers: {
              'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
              'Content-Type': 'application/json',
              'authorization': (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig)._instance.token
            }
          });
          return walletInfo == null ? void 0 : (_walletInfo$data2 = walletInfo.data) == null ? void 0 : _walletInfo$data2.code;
        }

        async getWalletInfo() {
          var _walletInfo$data3;

          const walletInfo = await window.axios.post(walletUrls.queryBindWallet);
          return walletInfo == null ? void 0 : (_walletInfo$data3 = walletInfo.data) == null ? void 0 : _walletInfo$data3.data;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfc19ed2d7683986d1198fc96735106d0ea44d53.js.map