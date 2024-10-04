System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Label, Node, basePageView, GlobalData, WebUtils, homeView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, avatars, profileView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../common/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhomeView(extras) {
    _reporterNs.report("homeView", "../home/homeView", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.default;
    }, function (_unresolved_4) {
      WebUtils = _unresolved_4.default;
    }, function (_unresolved_5) {
      homeView = _unresolved_5.homeView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b1eb1XLIlHg73RXN26qK7y", "profileView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'EventTouch', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      avatars = ['images/avatar/1', 'images/avatar/2', 'images/avatar/3', 'images/avatar/4', 'images/avatar/5'];

      _export("profileView", profileView = (_dec = ccclass('profileView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(EditBox), _dec(_class = (_class2 = class profileView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bindBtn", _descriptor, this);

          _initializerDefineProperty(this, "unbindBtn", _descriptor2, this);

          _initializerDefineProperty(this, "twitterUserName", _descriptor3, this);

          _initializerDefineProperty(this, "user_name", _descriptor4, this);

          _initializerDefineProperty(this, "tgId", _descriptor5, this);

          _initializerDefineProperty(this, "user_proto", _descriptor6, this);

          _initializerDefineProperty(this, "home", _descriptor7, this);

          _initializerDefineProperty(this, "edit_page", _descriptor8, this);

          _initializerDefineProperty(this, "user_avatar", _descriptor9, this);

          _initializerDefineProperty(this, "select_circle", _descriptor10, this);

          _initializerDefineProperty(this, "current_select_avatar", _descriptor11, this);

          _initializerDefineProperty(this, "edit_username", _descriptor12, this);

          this.avatar = void 0;
        }

        start() {}

        update(deltaTime) {}

        showEditPage() {
          this.edit_page.active = true;
        }

        closeEditPage() {
          this.edit_page.active = false;
        }

        resetBindUi() {
          this.bindBtn.active = true;
          this.unbindBtn.active = false;
          this.twitterUserName.node.active = false;
        }

        setTwitterInfo() {
          var _window, _window$Telegram, _window$Telegram$WebA, _window$Telegram$WebA2, _window$Telegram$WebA3, _window2, _window2$Telegram, _window2$Telegram$Web, _window2$Telegram$Web2, _window2$Telegram$Web3, _window3, _window3$Telegram, _window3$Telegram$Web, _window3$Telegram$Web2, _window3$Telegram$Web3;

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).taskData.data.data.twitterUserName) {
            this.bindBtn.active = false;
            this.unbindBtn.active = true;
            this.twitterUserName.node.active = true;
            this.twitterUserName.string = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).taskData.data.data.twitterUserName;
          } else {
            this.bindBtn.active = true;
            this.unbindBtn.active = false;
            this.twitterUserName.node.active = false;
          }

          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getRemoteImg((_window = window) == null ? void 0 : (_window$Telegram = _window.Telegram) == null ? void 0 : (_window$Telegram$WebA = _window$Telegram.WebApp) == null ? void 0 : (_window$Telegram$WebA2 = _window$Telegram$WebA.initDataUnsafe) == null ? void 0 : (_window$Telegram$WebA3 = _window$Telegram$WebA2.user) == null ? void 0 : _window$Telegram$WebA3.photo_url, this.user_proto);
          this.tgId.string = `${(_window2 = window) == null ? void 0 : (_window2$Telegram = _window2.Telegram) == null ? void 0 : (_window2$Telegram$Web = _window2$Telegram.WebApp) == null ? void 0 : (_window2$Telegram$Web2 = _window2$Telegram$Web.initDataUnsafe) == null ? void 0 : (_window2$Telegram$Web3 = _window2$Telegram$Web2.user) == null ? void 0 : _window2$Telegram$Web3.id}`;
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).avatar, this.user_avatar);

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).username) {
            this.user_name.string = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).username;
          } else if ((_window3 = window) != null && (_window3$Telegram = _window3.Telegram) != null && (_window3$Telegram$Web = _window3$Telegram.WebApp) != null && (_window3$Telegram$Web2 = _window3$Telegram$Web.initDataUnsafe) != null && (_window3$Telegram$Web3 = _window3$Telegram$Web2.user) != null && _window3$Telegram$Web3.username) {
            var _window4, _window4$Telegram, _window4$Telegram$Web, _window4$Telegram$Web2, _window4$Telegram$Web3;

            this.user_name.string = `${(_window4 = window) == null ? void 0 : (_window4$Telegram = _window4.Telegram) == null ? void 0 : (_window4$Telegram$Web = _window4$Telegram.WebApp) == null ? void 0 : (_window4$Telegram$Web2 = _window4$Telegram$Web.initDataUnsafe) == null ? void 0 : (_window4$Telegram$Web3 = _window4$Telegram$Web2.user) == null ? void 0 : _window4$Telegram$Web3.username}`;
          } else {
            var _window5, _window5$Telegram, _window5$Telegram$Web, _window5$Telegram$Web2, _window5$Telegram$Web3, _window6, _window6$Telegram, _window6$Telegram$Web, _window6$Telegram$Web2, _window6$Telegram$Web3;

            this.user_name.string = `${(_window5 = window) == null ? void 0 : (_window5$Telegram = _window5.Telegram) == null ? void 0 : (_window5$Telegram$Web = _window5$Telegram.WebApp) == null ? void 0 : (_window5$Telegram$Web2 = _window5$Telegram$Web.initDataUnsafe) == null ? void 0 : (_window5$Telegram$Web3 = _window5$Telegram$Web2.user) == null ? void 0 : _window5$Telegram$Web3.first_name}_${(_window6 = window) == null ? void 0 : (_window6$Telegram = _window6.Telegram) == null ? void 0 : (_window6$Telegram$Web = _window6$Telegram.WebApp) == null ? void 0 : (_window6$Telegram$Web2 = _window6$Telegram$Web.initDataUnsafe) == null ? void 0 : (_window6$Telegram$Web3 = _window6$Telegram$Web2.user) == null ? void 0 : _window6$Telegram$Web3.last_name}`;
          }
        }

        selectAvatar(event, data) {
          this.avatar = avatars[data];
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg(this.avatar, this.current_select_avatar);
          this.select_circle.setPosition(event.currentTarget.getPosition());
        }

        async editUserInfo() {
          try {
            const url = 'https://api.infinitytest.cc/api/v1/user/info/edit';
            const userInfo = await window.axios.post(url, {
              avatar: this.avatar,
              userName: this.edit_username.string
            }, {
              headers: {
                'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
            (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
              error: Error()
            }), WebUtils) : WebUtils).getResouceImg(this.avatar, this.user_avatar);
            this.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
              error: Error()
            }), homeView) : homeView).setProfile(this.avatar);
            this.user_name.string = this.edit_username.string;
            window.Telegram.WebApp.showAlert("success!", () => {
              console.log("");
            });
          } catch (error) {
            window.Telegram.WebApp.showPopup({
              title: '',
              message: '*This username already exists, please reset.',
              buttons: [{
                id: 'button1',
                text: 'ok'
              }]
            }, async buttonId => {});
          }
        }

        closeProfile() {
          this.node.setPosition(-5000, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bindBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "unbindBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "twitterUserName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "user_name", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tgId", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "user_proto", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "home", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "edit_page", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "user_avatar", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "select_circle", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "current_select_avatar", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "edit_username", [_dec13], {
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
//# sourceMappingURL=2640b339604f62937c2aa503ab5f276abd0b387d.js.map