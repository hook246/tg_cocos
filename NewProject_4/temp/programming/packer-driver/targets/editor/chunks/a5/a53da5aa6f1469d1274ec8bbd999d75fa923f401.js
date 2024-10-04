System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, basePageModel, loginView, GlobalData, drawModel, discoverModel, homeView, inviteModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, tg_token, macSHA_secret, walletType, walletChain, loginUrls, twitterOauth, loginModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginView(extras) {
    _reporterNs.report("loginView", "./loginView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdrawModel(extras) {
    _reporterNs.report("drawModel", "../draw/drawModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdiscoverModel(extras) {
    _reporterNs.report("discoverModel", "../discover/discoverModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhomeView(extras) {
    _reporterNs.report("homeView", "../home/homeView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinviteModel(extras) {
    _reporterNs.report("inviteModel", "../invite/inviteModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      basePageModel = _unresolved_2.basePageModel;
    }, function (_unresolved_3) {
      loginView = _unresolved_3.loginView;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.default;
    }, function (_unresolved_5) {
      drawModel = _unresolved_5.drawModel;
    }, function (_unresolved_6) {
      discoverModel = _unresolved_6.discoverModel;
    }, function (_unresolved_7) {
      homeView = _unresolved_7.homeView;
    }, function (_unresolved_8) {
      inviteModel = _unresolved_8.inviteModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de999qayhBN7IyVld7XQKA4", "loginModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      tg_token = "7293564939:AAE36f_ferIUCKuMrvgZ_dwNmtyh4oKsJ6s";
      macSHA_secret = "0d42f108fb7d74f3735c61b1ecdeb8662bef043f2afed10fb3cd3aba3007e0ff";

      _export("walletType", walletType = /*#__PURE__*/function (walletType) {
        return walletType;
      }({}));

      _export("walletChain", walletChain = /*#__PURE__*/function (walletChain) {
        return walletChain;
      }({}));

      _export("loginUrls", loginUrls = {
        firstLoginCheck: "https://api.infinitytest.cc/api/v1/user/auth/first_login",
        tgLogin: "https://api.infinitytest.cc/api/v1/user/auth/tg_login/webapp",
        pwdLogin: "https://api.infinitytest.cc/api/v1/user/auth/pwd_login"
      });

      _export("twitterOauth", twitterOauth = {
        bindTwitter: "https://api.infinitytest.cc/api/v1/oauth/getTwitterCode",
        unBindTwitter: "https://api.infinitytest.cc/api/v1/oauth/unboundTwitter"
      });

      _export("loginModel", loginModel = (_dec = ccclass("loginModel"), _dec2 = property(Boolean), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class loginModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isUseMock", _descriptor, this);

          _initializerDefineProperty(this, "discover", _descriptor2, this);

          _initializerDefineProperty(this, "invite", _descriptor3, this);

          _initializerDefineProperty(this, "earn", _descriptor4, this);

          _initializerDefineProperty(this, "draw", _descriptor5, this);

          _initializerDefineProperty(this, "home", _descriptor6, this);

          this.loginView = void 0;
        }

        async start() {
          this.loginView = this.view.getComponent(_crd && loginView === void 0 ? (_reportPossibleCrUseOfloginView({
            error: Error()
          }), loginView) : loginView);
          const tgId = new URLSearchParams(window.location.search).get("tgId");
          const code = new URLSearchParams(window.location.search).get("code");
          const state = new URLSearchParams(window.location.search).get("state");

          if (tgId && code) {
            this.bindTwitter(tgId, code, state);
          }

          if (this.isUseMock) {}

          this.view.setPosition(0, 0);
          const isFirst = await this.checkLoginFirst();

          if (isFirst) {
            //展示登录页面
            this.loginView.controlLoading(false);
            this.loginView.controlLoginTypeBtnsVisible(true);
          } else {
            await this.tgLogin();
          }
        }

        update(deltaTime) {}

        async checkLoginFirst() {
          try {
            const isFirstLogin = await window.axios.post(loginUrls.firstLoginCheck, {
              id: window.Telegram.WebApp.initDataUnsafe.user.id
            });
            return isFirstLogin.data.data.firstLogin;
          } catch (error) {
            console.log(error);
          }
        }

        async bindTwitter(initData, code, state) {
          try {
            var _loginData$data, _loginData$data$data;

            const loginData = await window.axios.post(loginUrls.tgLogin, {
              initData: initData
            });

            if (loginData != null && (_loginData$data = loginData.data) != null && (_loginData$data$data = _loginData$data.data) != null && _loginData$data$data.token) {
              var _loginData$data2, _loginData$data2$data, _loginData$data3, _loginData$data3$data;

              //登录成功
              (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token = loginData == null ? void 0 : (_loginData$data2 = loginData.data) == null ? void 0 : (_loginData$data2$data = _loginData$data2.data) == null ? void 0 : _loginData$data2$data.token;
              const bindData = await window.axios.post(loginUrls.tgLogin, {
                code: code,
                state: state
              }, {
                headers: {
                  'Authorization': `Bearer ${loginData == null ? void 0 : (_loginData$data3 = loginData.data) == null ? void 0 : (_loginData$data3$data = _loginData$data3.data) == null ? void 0 : _loginData$data3$data.token}`
                }
              });
            }
          } catch (error) {
            console.log(error);
          }
        }

        async tgLogin() {
          try {
            var _window, _window$Telegram, _window$Telegram$WebA, _window2, _window2$Telegram, _window2$Telegram$Web, _loginData$data4, _loginData$data4$data;

            const inviteCode = new URLSearchParams(window.location.search).get("tgWebAppStartParam");
            const loginData = await window.axios.post(loginUrls.tgLogin, {
              initData: (_window = window) != null && (_window$Telegram = _window.Telegram) != null && (_window$Telegram$WebA = _window$Telegram.WebApp) != null && _window$Telegram$WebA.initData ? (_window2 = window) == null ? void 0 : (_window2$Telegram = _window2.Telegram) == null ? void 0 : (_window2$Telegram$Web = _window2$Telegram.WebApp) == null ? void 0 : _window2$Telegram$Web.initData : "query_id=AAF7JpQPAwAAAHsmlA8sgKRl&user=%7B%22id%22%3A6703818363%2C%22first_name%22%3A%22fei%22%2C%22last_name%22%3A%22wang%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1727265053&hash=c9d448b5ce4ae47ad145d6f7f60551f73aafd726d508afa86083d6e41f342711",
              // photoUrl: `${
              //   window.Telegram.WebApp.initDataUnsafe.user.photo_url ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ''
              // }`,
              inviteCode: inviteCode ? JSON.parse(window.atob(inviteCode)).inviteCode : ""
            });
            console.log("=========", loginData);

            if (loginData != null && (_loginData$data4 = loginData.data) != null && (_loginData$data4$data = _loginData$data4.data) != null && _loginData$data4$data.token) {
              var _loginData$data5, _loginData$data5$data, _loginData$data6, _loginData$data6$data;

              //登录成功
              (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token = loginData == null ? void 0 : (_loginData$data5 = loginData.data) == null ? void 0 : (_loginData$data5$data = _loginData$data5.data) == null ? void 0 : _loginData$data5$data.token;
              (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).inviteCode = loginData == null ? void 0 : (_loginData$data6 = loginData.data) == null ? void 0 : (_loginData$data6$data = _loginData$data6.data) == null ? void 0 : _loginData$data6$data.inviteCode;
              this.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                error: Error()
              }), homeView) : homeView).game_point.string = String(loginData.data.data.gamePoint);
              this.loginView.routeToHome();
              await this.initOtherModel();
            }
          } catch (error) {
            console.log(error);
          }
        }

        async initOtherModel() {
          await this.draw.getComponent(_crd && drawModel === void 0 ? (_reportPossibleCrUseOfdrawModel({
            error: Error()
          }), drawModel) : drawModel).initData();
          await this.discover.getComponent(_crd && discoverModel === void 0 ? (_reportPossibleCrUseOfdiscoverModel({
            error: Error()
          }), discoverModel) : discoverModel).initData();
          await this.invite.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
            error: Error()
          }), inviteModel) : inviteModel).initData();
        }

        async veteranLogin() {
          if (this.loginView.checkVeteranInput()) {
            this.loginView.showVeteranError(true);
          }

          try {
            var _window3, _window3$Telegram, _window3$Telegram$Web, _window4, _window4$Telegram, _window4$Telegram$Web, _loginData$data7, _loginData$data7$data;

            const inviteCode = new URLSearchParams(window.location.search).get("tgWebAppStartParam");
            const loginData = await window.axios.post(loginUrls.pwdLogin, {
              accountUserName: this.loginView.getAccountInputString(),
              initData: (_window3 = window) != null && (_window3$Telegram = _window3.Telegram) != null && (_window3$Telegram$Web = _window3$Telegram.WebApp) != null && _window3$Telegram$Web.initData ? (_window4 = window) == null ? void 0 : (_window4$Telegram = _window4.Telegram) == null ? void 0 : (_window4$Telegram$Web = _window4$Telegram.WebApp) == null ? void 0 : _window4$Telegram$Web.initData : "query_id=AAF7JpQPAwAAAHsmlA8sgKRl&user=%7B%22id%22%3A6703818363%2C%22first_name%22%3A%22fei%22%2C%22last_name%22%3A%22wang%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1727265053&hash=c9d448b5ce4ae47ad145d6f7f60551f73aafd726d508afa86083d6e41f342711",
              loginChannel: "GAME_LOBBY",
              password: this.loginView.getPasswordInputString(),
              inviteCode: inviteCode ? JSON.parse(window.atob(inviteCode)).inviteCode : "" // photoUrl: `${
              //   window.Telegram.WebApp.initDataUnsafe.user.photo_url ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ''
              // }`,
              //username: "",

            });

            if (loginData != null && (_loginData$data7 = loginData.data) != null && (_loginData$data7$data = _loginData$data7.data) != null && _loginData$data7$data.token) {
              var _loginData$data8, _loginData$data8$data;

              (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token = loginData == null ? void 0 : (_loginData$data8 = loginData.data) == null ? void 0 : (_loginData$data8$data = _loginData$data8.data) == null ? void 0 : _loginData$data8$data.token;
              this.loginView.routeToHome();
            }
          } catch (error) {
            console.log(error);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isUseMock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "discover", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "invite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "earn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "draw", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "home", [_dec7], {
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
//# sourceMappingURL=a53da5aa6f1469d1274ec8bbd999d75fa923f401.js.map