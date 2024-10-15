System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, basePageModel, loginView, GlobalData, drawModel, discoverModel, homeView, inviteModel, earnModel, profileModel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, init_id, macSHA_secret, walletType, walletChain, loginUrls, twitterOauth, loginModel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfearnModel(extras) {
    _reporterNs.report("earnModel", "../earn/earnModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprofileModel(extras) {
    _reporterNs.report("profileModel", "../profile/profileModel", _context.meta, extras);
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
    }, function (_unresolved_9) {
      earnModel = _unresolved_9.earnModel;
    }, function (_unresolved_10) {
      profileModel = _unresolved_10.profileModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de999qayhBN7IyVld7XQKA4", "loginModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      init_id = "query_id=AAF7JpQPAwAAAHsmlA8IzQt9&user=%7B%22id%22%3A6703818363%2C%22first_name%22%3A%22fei%22%2C%22last_name%22%3A%22wang%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1728370814&hash=b596ec8bfe1bb55398ab4e78c40bd5c90bdf645694cf80d000b22163f1bac236";
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

      _export("loginModel", loginModel = (_dec = ccclass("loginModel"), _dec2 = property(Boolean), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class loginModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isUseMock", _descriptor, this);

          _initializerDefineProperty(this, "profile", _descriptor2, this);

          _initializerDefineProperty(this, "discover", _descriptor3, this);

          _initializerDefineProperty(this, "invite", _descriptor4, this);

          _initializerDefineProperty(this, "earn", _descriptor5, this);

          _initializerDefineProperty(this, "draw", _descriptor6, this);

          _initializerDefineProperty(this, "home", _descriptor7, this);

          this.loginView = void 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.loginView = _this.view.getComponent(_crd && loginView === void 0 ? (_reportPossibleCrUseOfloginView({
              error: Error()
            }), loginView) : loginView);
            var tgId = new URLSearchParams(window.location.search).get("tgId");
            var code = new URLSearchParams(window.location.search).get("code");
            var state = new URLSearchParams(window.location.search).get("state");

            if (_this.isUseMock) {}

            _this.view.setPosition(0, 0);

            var isFirst = yield _this.checkLoginFirst();

            if (isFirst) {
              //展示登录页面
              _this.loginView.controlLoading(false);

              _this.loginView.controlLoginTypeBtnsVisible(true);
            } else {
              yield _this.tgLogin();
            }
          })();
        }

        update(deltaTime) {}

        checkLoginFirst() {
          return _asyncToGenerator(function* () {
            try {
              var isFirstLogin = yield window.axios.post(loginUrls.firstLoginCheck, {
                id: window.Telegram.WebApp.initDataUnsafe.user.id
              });
              return isFirstLogin.data.data.firstLogin;
            } catch (error) {
              console.log(error);
            }
          })();
        }

        bindTwitter(initData, code, state) {
          return _asyncToGenerator(function* () {
            try {
              //登录成功
              var bindData = yield window.axios.post(twitterOauth.bindTwitter, {
                code: code,
                state: state
              }, {
                headers: {
                  'Authorization': "Bearer " + initData
                }
              });
            } catch (error) {
              console.log(error);
            }
          })();
        }

        tgLogin() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            try {
              var _window, _window$Telegram, _window$Telegram$WebA, _window2, _window2$Telegram, _window2$Telegram$Web, _loginData$data, _loginData$data$data;

              var inviteCode = new URLSearchParams(window.location.search).get("tgWebAppStartParam");
              var loginData = yield window.axios.post(loginUrls.tgLogin, {
                initData: (_window = window) != null && (_window$Telegram = _window.Telegram) != null && (_window$Telegram$WebA = _window$Telegram.WebApp) != null && _window$Telegram$WebA.initData ? (_window2 = window) == null ? void 0 : (_window2$Telegram = _window2.Telegram) == null ? void 0 : (_window2$Telegram$Web = _window2$Telegram.WebApp) == null ? void 0 : _window2$Telegram$Web.initData : init_id,
                // photoUrl: `${
                //   window.Telegram.WebApp.initDataUnsafe.user.photo_url ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ''
                // }`,
                inviteCode: inviteCode ? JSON.parse(window.atob(inviteCode)).inviteCode : ""
              });
              console.log("=========", loginData);

              if (loginData != null && (_loginData$data = loginData.data) != null && (_loginData$data$data = _loginData$data.data) != null && _loginData$data$data.token) {
                var _loginData$data2, _loginData$data2$data, _loginData$data3, _loginData$data3$data;

                //登录成功
                _this2.trackSrc();

                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token = loginData == null ? void 0 : (_loginData$data2 = loginData.data) == null ? void 0 : (_loginData$data2$data = _loginData$data2.data) == null ? void 0 : _loginData$data2$data.token;
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).inviteCode = loginData == null ? void 0 : (_loginData$data3 = loginData.data) == null ? void 0 : (_loginData$data3$data = _loginData$data3.data) == null ? void 0 : _loginData$data3$data.inviteCode;
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).username = loginData.data.data.userName;
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).avatar = loginData.data.data.avatar;

                _this2.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                  error: Error()
                }), homeView) : homeView).setProfile((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).avatar);

                _this2.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                  error: Error()
                }), homeView) : homeView).game_point.string = String(loginData.data.data.totalPoint);

                _this2.loginView.controlLoading(true);

                _this2.loginView.routeToHome();

                yield _this2.initOtherModel();

                _this2.scheduleOnce(() => {
                  _this2.node.setPosition(-5000, 0);

                  _this2.discover.setPosition(0, 0);

                  _this2.loginView.controlLoading(false);

                  console.log('=====close loading');
                }, 3);
              }
            } catch (error) {
              console.log(error);
            }
          })();
        }

        trackSrc() {
          //object 转字符串
          // {
          //   "src": "tiktok",
          //   "id": "1334",
          //   "count": "100",
          // }
          // const src_str = JSON.stringify(
          //   {
          //     "src": "tiktok",
          //     "id": "1334",
          //     "count": "100",
          //   }
          // )
          //然后window.btoa(src_str)
          //拼在https://t.me/infinity_ground_bot/infinity_ground_app?startapp=src_str
          var srcData = new URLSearchParams(window.location.search).get("tgWebAppStartParam");
          var srcObject = srcData && JSON.parse(window.atob(srcData)); //console.log('srcObject===>', srcObject)
        }

        initOtherModel() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            yield _this3.draw.getComponent(_crd && drawModel === void 0 ? (_reportPossibleCrUseOfdrawModel({
              error: Error()
            }), drawModel) : drawModel).initData();
            yield _this3.discover.getComponent(_crd && discoverModel === void 0 ? (_reportPossibleCrUseOfdiscoverModel({
              error: Error()
            }), discoverModel) : discoverModel).initData();
            yield _this3.invite.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
              error: Error()
            }), inviteModel) : inviteModel).initData();

            _this3.earn.getComponent(_crd && earnModel === void 0 ? (_reportPossibleCrUseOfearnModel({
              error: Error()
            }), earnModel) : earnModel).initData();

            _this3.profile.getComponent(_crd && profileModel === void 0 ? (_reportPossibleCrUseOfprofileModel({
              error: Error()
            }), profileModel) : profileModel).initData();
          })();
        }

        veteranLogin() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (_this4.loginView.checkVeteranInput()) {
              _this4.loginView.showVeteranError(true);
            }

            try {
              var _window3, _window3$Telegram, _window3$Telegram$Web, _window4, _window4$Telegram, _window4$Telegram$Web, _loginData$data4, _loginData$data4$data;

              var inviteCode = new URLSearchParams(window.location.search).get("tgWebAppStartParam");
              var loginData = yield window.axios.post(loginUrls.pwdLogin, {
                accountUserName: _this4.loginView.getAccountInputString(),
                initData: (_window3 = window) != null && (_window3$Telegram = _window3.Telegram) != null && (_window3$Telegram$Web = _window3$Telegram.WebApp) != null && _window3$Telegram$Web.initData ? (_window4 = window) == null ? void 0 : (_window4$Telegram = _window4.Telegram) == null ? void 0 : (_window4$Telegram$Web = _window4$Telegram.WebApp) == null ? void 0 : _window4$Telegram$Web.initData : init_id,
                loginChannel: "GAME_LOBBY",
                password: _this4.loginView.getPasswordInputString(),
                inviteCode: inviteCode ? JSON.parse(window.atob(inviteCode)).inviteCode : "" // photoUrl: `${
                //   window.Telegram.WebApp.initDataUnsafe.user.photo_url ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ''
                // }`,
                //username: "",

              });

              if (loginData != null && (_loginData$data4 = loginData.data) != null && (_loginData$data4$data = _loginData$data4.data) != null && _loginData$data4$data.token) {
                var _loginData$data5, _loginData$data5$data, _loginData$data6, _loginData$data6$data, _loginData$data7, _loginData$data7$data;

                _this4.trackSrc();

                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token = loginData == null ? void 0 : (_loginData$data5 = loginData.data) == null ? void 0 : (_loginData$data5$data = _loginData$data5.data) == null ? void 0 : _loginData$data5$data.token;
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).inviteCode = loginData == null ? void 0 : (_loginData$data6 = loginData.data) == null ? void 0 : (_loginData$data6$data = _loginData$data6.data) == null ? void 0 : _loginData$data6$data.inviteCode;
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).username = loginData.data.data.userName;
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).avatar = loginData.data.data.avatar;

                _this4.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                  error: Error()
                }), homeView) : homeView).setProfile((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).avatar);

                _this4.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                  error: Error()
                }), homeView) : homeView).game_point.string = String((_loginData$data7 = loginData.data) == null ? void 0 : (_loginData$data7$data = _loginData$data7.data) == null ? void 0 : _loginData$data7$data.totalPoint);

                _this4.loginView.controlLoading(true);

                _this4.loginView.routeToHome();

                yield _this4.initOtherModel();

                _this4.scheduleOnce(() => {
                  _this4.node.setPosition(-5000, 0);

                  _this4.discover.setPosition(0, 0);

                  _this4.loginView.controlLoading(false);

                  console.log('=====close loading');
                }, 3);
              }
            } catch (error) {
              console.log(error);
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isUseMock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "profile", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "discover", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "invite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "earn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "draw", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "home", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87a99cd149bfecb0b80ed550cd2b346b89e7802b.js.map