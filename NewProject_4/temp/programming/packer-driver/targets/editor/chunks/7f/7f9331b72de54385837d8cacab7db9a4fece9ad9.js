System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, loginView, GlobalConfig, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, walletType, walletChain, loginUrls, loginModel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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

      _export("loginModel", loginModel = (_dec = ccclass("loginModel"), _dec2 = property(Boolean), _dec(_class = (_class2 = class loginModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isUseMock", _descriptor, this);

          this.loginView = void 0;
        }

        async start() {
          this.loginView = this.view.getComponent(_crd && loginView === void 0 ? (_reportPossibleCrUseOfloginView({
            error: Error()
          }), loginView) : loginView);

          if (this.isUseMock) {
            window.Telegram.WebApp.initDataUnsafe = {
              "query_id": "AAF7JpQPAwAAAHsmlA8spImV",
              "user": {
                "id": 6703818363,
                "first_name": "fei",
                "last_name": "wang",
                "language_code": "zh-hans",
                "allows_write_to_pm": true,
                "photo_url": "https://t.me/i/userpic/320/X12MAmP3LRE86nyBFSTIu7gHQ3DMMFyJG_guP3PXbe1ra9sUBt3UL5wqLO7SUrl6.svg"
              },
              "auth_date": "1726639117",
              "hash": "8346cc12bf427171ceb09f9a75f63d00f37edb017c921641d6036e9758abf134"
            };
          }

          this.view.setPosition(0, 0);
          const isFirst = await this.checkLoginFirst();

          if (isFirst) {
            //展示登录页面
            this.loginView.controlLoginTypeBtnsVisible(true);
          } else {
            await this.tgLogin();
          }
        }

        update(deltaTime) {}

        async checkLoginFirst() {
          const isFirstLogin = await window.axios.post(loginUrls.firstLoginCheck, {
            id: window.Telegram.WebApp.initDataUnsafe.user.id
          });
          return isFirstLogin.data.data.firstLogin;
        }

        async tgLogin() {
          var _loginData$data, _loginData$data$data;

          const loginData = await window.axios.post(loginUrls.tgLogin, {
            authDate: 0,
            firstName: `${this.isUseMock ? 'fei' : window.Telegram.WebApp.initDataUnsafe.user.first_name}`,
            hash: `${this.isUseMock ? '8346cc12bf427171ceb09f9a75f63d00f37edb017c921641d6036e9758abf134' : window.Telegram.WebApp.initDataUnsafe.hash}`,
            id: this.isUseMock ? 6703818363 : window.Telegram.WebApp.initDataUnsafe.user.id,
            lastName: `${this.isUseMock ? 'wang' : window.Telegram.WebApp.initDataUnsafe.user.last_name}`,
            loginChannel: "GAME_LOBBY",
            photoUrl: `${this.isUseMock ? 'https://t.me/i/userpic/320/X12MAmP3LRE86nyBFSTIu7gHQ3DMMFyJG_guP3PXbe1ra9sUBt3UL5wqLO7SUrl6.svg' : window.Telegram.WebApp.initDataUnsafe.user.photo_url}`,
            username: ''
          });

          if (loginData != null && (_loginData$data = loginData.data) != null && (_loginData$data$data = _loginData$data.data) != null && _loginData$data$data.token) {
            var _loginData$data2, _loginData$data2$data;

            //登录成功
            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig)._instance.token = loginData == null ? void 0 : (_loginData$data2 = loginData.data) == null ? void 0 : (_loginData$data2$data = _loginData$data2.data) == null ? void 0 : _loginData$data2$data.token;
            this.loginView.routeToHome();
          }
        }

        async veteranLogin() {
          var _loginData$data3, _loginData$data3$data;

          if (this.loginView.checkVeteranInput()) {
            this.loginView.showVeteranError(true);
          }

          const loginData = await window.axios.post(loginUrls.pwdLogin, {
            accountUserName: this.loginView.getAccountInputString(),
            authDate: 0,
            firstName: `${this.isUseMock ? 'fei' : window.Telegram.WebApp.initDataUnsafe.user.first_name}`,
            hash: `${this.isUseMock ? '8346cc12bf427171ceb09f9a75f63d00f37edb017c921641d6036e9758abf134' : window.Telegram.WebApp.initDataUnsafe.hash}`,
            id: this.isUseMock ? 6703818363 : window.Telegram.WebApp.initDataUnsafe.user.id,
            lastName: `${this.isUseMock ? 'wang' : window.Telegram.WebApp.initDataUnsafe.user.last_name}`,
            loginChannel: "GAME_LOBBY",
            password: this.loginView.getPasswordInputString(),
            photoUrl: `${this.isUseMock ? 'https://t.me/i/userpic/320/X12MAmP3LRE86nyBFSTIu7gHQ3DMMFyJG_guP3PXbe1ra9sUBt3UL5wqLO7SUrl6.svg' : window.Telegram.WebApp.initDataUnsafe.user.photo_url}`,
            username: ''
          });

          if (loginData != null && (_loginData$data3 = loginData.data) != null && (_loginData$data3$data = _loginData$data3.data) != null && _loginData$data3$data.token) {
            var _loginData$data4, _loginData$data4$data;

            (_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig)._instance.token = loginData == null ? void 0 : (_loginData$data4 = loginData.data) == null ? void 0 : (_loginData$data4$data = _loginData$data4.data) == null ? void 0 : _loginData$data4$data.token;
            this.loginView.routeToHome();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isUseMock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f9331b72de54385837d8cacab7db9a4fece9ad9.js.map