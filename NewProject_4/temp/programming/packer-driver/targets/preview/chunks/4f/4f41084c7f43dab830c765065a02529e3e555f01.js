System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, loginView, GlobalConfig, _dec, _class, _crd, ccclass, property, walletType, walletChain, loginUrls, loginModel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloginView(extras) {
    _reporterNs.report("loginView", "./loginView", _context.meta, extras);
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
      loginView = _unresolved_3.loginView;
    }, function (_unresolved_4) {
      GlobalConfig = _unresolved_4.GlobalConfig;
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

      _export("loginModel", loginModel = (_dec = ccclass("loginModel"), _dec(_class = class loginModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var isFirst = yield _this.checkLoginFirst();

            if (isFirst) {//展示登录页面
            } else {
              yield _this.tgLogin();
            }
          })();
        }

        update(deltaTime) {}

        checkLoginFirst() {
          return _asyncToGenerator(function* () {
            var isFirstLogin = yield window.axios.post(loginUrls.firstLoginCheck, {
              id: window.Telegram.WebApp.initDataUnsafe.id
            });
            return isFirstLogin.data.data.firstLogin;
          })();
        }

        tgLogin() {
          return _asyncToGenerator(function* () {
            var _loginData$data, _loginData$data$data;

            var loginData = yield window.axios.post(loginUrls.tgLogin, {
              authDate: 0,
              firstName: "" + window.Telegram.WebApp.initDataUnsafe.firstName,
              hash: "" + window.Telegram.WebApp.initDataUnsafe.hash,
              id: window.Telegram.WebApp.initDataUnsafe.id,
              lastName: "" + window.Telegram.WebApp.initDataUnsafe.lastName,
              loginChannel: "GAME_LOBBY",
              photoUrl: '',
              username: ''
            });

            if (loginData != null && (_loginData$data = loginData.data) != null && (_loginData$data$data = _loginData$data.data) != null && _loginData$data$data.token) {
              var _loginData$data2, _loginData$data2$data;

              //登录成功
              (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig)._instance.token = loginData == null ? void 0 : (_loginData$data2 = loginData.data) == null ? void 0 : (_loginData$data2$data = _loginData$data2.data) == null ? void 0 : _loginData$data2$data.token;
            }
          })();
        }

        veteranLogin() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _loginData$data3, _loginData$data3$data;

            if (_this2.view.getComponent(_crd && loginView === void 0 ? (_reportPossibleCrUseOfloginView({
              error: Error()
            }), loginView) : loginView).accountInput.string.length || _this2.view.getComponent(_crd && loginView === void 0 ? (_reportPossibleCrUseOfloginView({
              error: Error()
            }), loginView) : loginView).pwdInput.string.length) {}

            var loginData = yield window.axios.post(loginUrls.pwdLogin, {
              accountUserName: _this2.view.getComponent(_crd && loginView === void 0 ? (_reportPossibleCrUseOfloginView({
                error: Error()
              }), loginView) : loginView).accountInput.string,
              authDate: 0,
              firstName: "" + window.Telegram.WebApp.initDataUnsafe.firstName,
              hash: "" + window.Telegram.WebApp.initDataUnsafe.hash,
              id: window.Telegram.WebApp.initDataUnsafe.id,
              lastName: window.Telegram.WebApp.initDataUnsafe.lastName,
              loginChannel: "GAME_LOBBY",
              password: _this2.view.getComponent(_crd && loginView === void 0 ? (_reportPossibleCrUseOfloginView({
                error: Error()
              }), loginView) : loginView).pwdInput.string,
              photoUrl: '',
              username: ''
            });

            if (loginData != null && (_loginData$data3 = loginData.data) != null && (_loginData$data3$data = _loginData$data3.data) != null && _loginData$data3$data.token) {
              var _loginData$data4, _loginData$data4$data;

              (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
                error: Error()
              }), GlobalConfig) : GlobalConfig)._instance.token = loginData == null ? void 0 : (_loginData$data4 = loginData.data) == null ? void 0 : (_loginData$data4$data = _loginData$data4.data) == null ? void 0 : _loginData$data4$data.token; //this.view.getComponent(loginView)
              //跳转到
            }
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f41084c7f43dab830c765065a02529e3e555f01.js.map