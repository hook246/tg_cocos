System.register(["__unresolved_0", "cc", "axios", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, axios, basePageModel, _dec, _class, _crd, ccclass, property, walletType, walletChain, loginUrls, loginPageModel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfaxios(extras) {
    _reporterNs.report("axios", "axios", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_axios) {
      axios = _axios.default;
    }, function (_unresolved_2) {
      basePageModel = _unresolved_2.basePageModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5b7aDXdRpFBYFT9gz3/Al3", "loginPageModel", undefined);

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

      _export("loginPageModel", loginPageModel = (_dec = ccclass("loginPageModel"), _dec(_class = class loginPageModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
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
            var isFirstLogin = yield (_crd && axios === void 0 ? (_reportPossibleCrUseOfaxios({
              error: Error()
            }), axios) : axios).post(loginUrls.firstLoginCheck, {
              id: 0
            });
            return isFirstLogin.data.data.firstLogin;
          })();
        }

        tgLogin() {
          return _asyncToGenerator(function* () {
            var _loginData$data, _loginData$data$data;

            var loginData = yield (_crd && axios === void 0 ? (_reportPossibleCrUseOfaxios({
              error: Error()
            }), axios) : axios).post(loginUrls.tgLogin, {
              id: 0
            });

            if (loginData != null && (_loginData$data = loginData.data) != null && (_loginData$data$data = _loginData$data.data) != null && _loginData$data$data.token) {//登录成功
            }
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e226818febd7469da17a06d72e043484a2a7b79.js.map