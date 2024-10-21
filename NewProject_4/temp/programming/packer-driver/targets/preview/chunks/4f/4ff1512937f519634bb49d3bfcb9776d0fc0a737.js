System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, tween, UIOpacity, inviteModel, profileModel, earnView, WebUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, homeView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinviteModel(extras) {
    _reporterNs.report("inviteModel", "../invite/inviteModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprofileModel(extras) {
    _reporterNs.report("profileModel", "../profile/profileModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfearnView(extras) {
    _reporterNs.report("earnView", "../earn/earnView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../common/WebUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      inviteModel = _unresolved_2.inviteModel;
    }, function (_unresolved_3) {
      profileModel = _unresolved_3.profileModel;
    }, function (_unresolved_4) {
      earnView = _unresolved_4.earnView;
    }, function (_unresolved_5) {
      WebUtils = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "afa9dZNSCBMxLsePO6d3tJ/", "homeView", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationClip', 'Button', 'Component', 'EventTouch', 'Label', 'Node', 'tween', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("homeView", homeView = (_dec = ccclass('homeView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Button), _dec16 = property(Node), _dec17 = property(Button), _dec18 = property(Node), _dec19 = property(Button), _dec20 = property(Node), _dec(_class = (_class2 = class homeView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "discoverPage", _descriptor, this);

          _initializerDefineProperty(this, "invitePage", _descriptor2, this);

          _initializerDefineProperty(this, "earnPage", _descriptor3, this);

          _initializerDefineProperty(this, "drawPage", _descriptor4, this);

          _initializerDefineProperty(this, "discoverPageBtn", _descriptor5, this);

          _initializerDefineProperty(this, "invitePageBtn", _descriptor6, this);

          _initializerDefineProperty(this, "earnPageBtn", _descriptor7, this);

          _initializerDefineProperty(this, "drawPageBtn", _descriptor8, this);

          _initializerDefineProperty(this, "profile", _descriptor9, this);

          _initializerDefineProperty(this, "game_point", _descriptor10, this);

          _initializerDefineProperty(this, "inviteBg", _descriptor11, this);

          _initializerDefineProperty(this, "icon", _descriptor12, this);

          _initializerDefineProperty(this, "public_text", _descriptor13, this);

          _initializerDefineProperty(this, "go", _descriptor14, this);

          _initializerDefineProperty(this, "public_text1", _descriptor15, this);

          _initializerDefineProperty(this, "go1", _descriptor16, this);

          _initializerDefineProperty(this, "public_text2", _descriptor17, this);

          _initializerDefineProperty(this, "go2", _descriptor18, this);

          _initializerDefineProperty(this, "public_elements", _descriptor19, this);

          this.pageArray = [];
          this.btns = [];
          this.currentPageIndex = 0;
          this.prePageIndex = 0;
        }

        start() {
          try {
            var _window, _window$Telegram;

            (_window = window) == null ? void 0 : (_window$Telegram = _window.Telegram) == null ? void 0 : _window$Telegram.WebApp.setHeaderColor('#000000');
          } catch (error) {}

          this.pageArray = [this.discoverPage, this.invitePage, this.earnPage, this.drawPage];
          this.btns = [this.discoverPageBtn, this.invitePageBtn, this.earnPageBtn, this.drawPageBtn];
        }

        jumpToCommunity() {
          window.Telegram.WebApp.openTelegramLink("https://t.me/InfinityGroundAnn", {
            tryInstantView: true
          });
        }

        shiftCurrentPage(btn, data) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.pageArray.forEach( /*#__PURE__*/_asyncToGenerator(function* (page, index) {
              if (_this.pageArray[index].getPosition().x === 0) {
                if (Number(data) === index) {
                  return;
                }

                tween(_this.pageArray[index].getComponent(UIOpacity)).to(0.5, {
                  opacity: 0
                }).call(() => {
                  _this.pageArray[index].setPosition(-5000, 0);

                  _this.pageArray[index].getComponent(UIOpacity).opacity = 255;

                  _this.pageArray[Number(data)].setPosition(0, 0);
                }).start();
              }
            })); //(this.pageArray[this.prePageIndex] as Node)?.getComponent(Animation)?.play();


            if (Number(data) === 1) {
              _this.inviteBg.active = true;
              _this.public_elements.active = false;
            } else {
              _this.inviteBg.active = false;
              _this.public_elements.active = true;
            }

            console.log('======', btn);

            _this.btns.forEach(node => {
              node.getChildByName('selectBg').active = false;
              node.getChildByName('selected').active = false;
            });

            btn.currentTarget.getChildByName('selected').active = true;

            if (Number(data) === 2) {
              yield _this.invitePage.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
                error: Error()
              }), inviteModel) : inviteModel).getTaskList();

              _this.earnPage.getComponent(_crd && earnView === void 0 ? (_reportPossibleCrUseOfearnView({
                error: Error()
              }), earnView) : earnView).freshTasks();
            }
          })();
        }

        setProfile(url) {
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getResouceImg(url, this.icon);
        }

        showProfile() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield _this2.invitePage.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
              error: Error()
            }), inviteModel) : inviteModel).getTaskList();
            _this2.profile.getComponent(UIOpacity).opacity = 0;
            tween(_this2.profile.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).call(() => {
              _this2.profile.getComponent(_crd && profileModel === void 0 ? (_reportPossibleCrUseOfprofileModel({
                error: Error()
              }), profileModel) : profileModel).initData();

              _this2.profile.setPosition(0, 0);
            }).start();
          })();
        }

        update(deltaTime) {
          //-600
          if (this.public_text.getPosition().x > -450) {
            this.public_text.setPosition(this.public_text.getPosition().x - deltaTime * 100, 0);
          } else {
            this.public_text.setPosition(450, 0);
          }

          if (this.public_text1.getPosition().x > -450) {
            this.public_text1.setPosition(this.public_text1.getPosition().x - deltaTime * 100, 0);
          } else {
            this.public_text1.setPosition(450, 0);
          }

          if (this.public_text2.getPosition().x > -450) {
            this.public_text2.setPosition(this.public_text2.getPosition().x - deltaTime * 100, 0);
          } else {
            this.public_text2.setPosition(450, 0);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "discoverPage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "invitePage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "earnPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "drawPage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "discoverPageBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "invitePageBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "earnPageBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "drawPageBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "profile", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "game_point", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "inviteBg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "public_text", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "go", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "public_text1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "go1", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "public_text2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "go2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "public_elements", [_dec20], {
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
//# sourceMappingURL=4ff1512937f519634bb49d3bfcb9776d0fc0a737.js.map