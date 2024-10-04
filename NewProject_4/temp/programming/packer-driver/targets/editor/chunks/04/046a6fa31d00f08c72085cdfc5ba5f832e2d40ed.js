System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, walletType, walletChain, loginUrls, loginModel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
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

        async checkLoginFirst() {// const isFirstLogin = await axios.post<firstLoginCheckResponseType>(loginUrls.firstLoginCheck, {
          //     id: 0
          // })
          // return isFirstLogin.data.data.firstLogin
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
//# sourceMappingURL=046a6fa31d00f08c72085cdfc5ba5f832e2d40ed.js.map