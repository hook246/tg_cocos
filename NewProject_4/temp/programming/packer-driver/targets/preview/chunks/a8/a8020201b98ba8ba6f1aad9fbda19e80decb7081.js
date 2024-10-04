System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Node, basePageView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, loginView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "444c4Hr6RhNDb//8CYKKw69", "loginView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loginView", loginView = (_dec = ccclass('loginView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(EditBox), _dec6 = property(EditBox), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = class loginView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor() {
          super(...arguments);

          //登录类型的按钮
          _initializerDefineProperty(this, "loginTypeBts", _descriptor, this);

          //账号密码输入的界面
          _initializerDefineProperty(this, "pwdLoginUI", _descriptor2, this);

          //账号或者密码输入问题提示
          _initializerDefineProperty(this, "errorTips", _descriptor3, this);

          _initializerDefineProperty(this, "accountInput", _descriptor4, this);

          _initializerDefineProperty(this, "pwdInput", _descriptor5, this);

          _initializerDefineProperty(this, "loading", _descriptor6, this);

          _initializerDefineProperty(this, "home", _descriptor7, this);

          _initializerDefineProperty(this, "discover", _descriptor8, this);

          _initializerDefineProperty(this, "invite", _descriptor9, this);

          _initializerDefineProperty(this, "earn", _descriptor10, this);

          _initializerDefineProperty(this, "draw", _descriptor11, this);
        }

        start() {}

        update(deltaTime) {}

        routeToHome() {
          this.node.setPosition(-5000, 0);
          this.discover.setPosition(0, 0);
        }

        controlLoginTypeBtnsVisible(visible) {
          this.loginTypeBts.active = visible;
        }

        showVeteran() {
          this.pwdLoginUI.active = true;
          this.controlLoginTypeBtnsVisible(false);
        }

        checkVeteranInput() {
          return this.getAccountInputString() && this.getPasswordInputString();
        }

        getAccountInputString() {
          return this.accountInput.string;
        }

        getPasswordInputString() {
          return this.pwdInput.string;
        }

        showVeteranError(visible) {
          this.errorTips.active = visible;
        }

        closeAccountPage() {
          this.pwdLoginUI.active = false;
          this.controlLoginTypeBtnsVisible(true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loginTypeBts", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pwdLoginUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "errorTips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "accountInput", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pwdInput", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "home", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "discover", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "invite", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "earn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "draw", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8020201b98ba8ba6f1aad9fbda19e80decb7081.js.map