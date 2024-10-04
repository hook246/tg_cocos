System.register(["__unresolved_0", "cc", "axios"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, axios, _decorator, Component, _dec, _class, _crd, ccclass, property, walletType, walletChain, loginUrls, loginModel;

  function _reportPossibleCrUseOfaxios(extras) {
    _reporterNs.report("axios", "axios", _context.meta, extras);
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
    }, function (_axios) {
      axios = _axios.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de999qayhBN7IyVld7XQKA4", "loginModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("walletType", walletType = /*#__PURE__*/function (walletType) {
        return walletType;
      }({}));

      _export("walletChain", walletChain = /*#__PURE__*/function (walletChain) {
        return walletChain;
      }({}));

      _export("loginUrls", loginUrls = {
        firstLoginCheck: "https://api.infinitytest.cc/api/v1/user/auth/first_login",
        tgLogin: "https://api.infinitytest.cc/api/v1/user/auth/tg_login",
        pwdLogin: "https://api.infinitytest.cc/api/v1/user/auth/pwd_login"
      });

      _export("loginModel", loginModel = (_dec = ccclass('loginModel'), _dec(_class = class loginModel extends Component {
        async start() {// const isFirst = await this.checkLoginFirst()
          // if(isFirst){
          //     //展示登录页面
          // }else{
          //    await this.tgLogin()
          // }
        }

        update(deltaTime) {}

        async checkLoginFirst() {
          const isFirstLogin = await (_crd && axios === void 0 ? (_reportPossibleCrUseOfaxios({
            error: Error()
          }), axios) : axios).post(loginUrls.firstLoginCheck, {
            id: 0
          });
          return isFirstLogin.data.data.firstLogin;
        }

        async tgLogin() {// const loginData = await axios.post<tgLoginResponseType>(loginUrls.tgLogin, {
          //     id: 0
          // })
          // if(loginData?.data?.data?.token){
          //     //登录成功
          // }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5a57c0e5932539cccee8fd591db7a5649441dee.js.map