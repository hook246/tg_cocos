System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, GlobalData, profileView, homeView, inviteModel, _dec, _class, _crd, ccclass, property, profileModel;

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprofileView(extras) {
    _reporterNs.report("profileView", "./profileView", _context.meta, extras);
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
    }, function (_unresolved_2) {
      basePageModel = _unresolved_2.basePageModel;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.default;
    }, function (_unresolved_4) {
      profileView = _unresolved_4.profileView;
    }, function (_unresolved_5) {
      homeView = _unresolved_5.homeView;
    }, function (_unresolved_6) {
      inviteModel = _unresolved_6.inviteModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a590agMIXBPmb+Q+FQPO9im", "profileModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("profileModel", profileModel = (_dec = ccclass('profileModel'), _dec(_class = class profileModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor(...args) {
          super(...args);
          this.profileView = void 0;
        }

        start() {
          this.profileView = this.view.getComponent(_crd && profileView === void 0 ? (_reportPossibleCrUseOfprofileView({
            error: Error()
          }), profileView) : profileView);
        }

        update(deltaTime) {}

        async unBindTwitter() {
          const unbindTwitterUrl = 'https://api.infinitytest.cc/api/v1/oauth/unboundTwitter';

          try {
            //登录成功
            const bindData = await window.axios.post(unbindTwitterUrl, {}, {
              headers: {
                'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
          } catch (error) {
            console.log(error);
          }

          this.profileView.resetBindUi();
        }

        bindTwitter() {
          const twitterOauthUrl = `https://www.infinitytest.cc?tgId=${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).token}`; //this.profileView.closeProfile()

          window.Telegram.WebApp.showPopup({
            title: '请选择一个选项',
            message: '你想要做什么？',
            buttons: [{
              id: 'button1',
              text: 'bind now'
            }, {
              id: 'button2',
              text: 'bind later',
              type: 'cancel'
            }]
          }, buttonId => {
            // 弹出窗口关闭时的回调函数
            if (buttonId) {
              switch (buttonId) {
                case 'button1':
                  window.Telegram.WebApp.openLink(`${twitterOauthUrl}`, {
                    tryInstantView: true
                  });
                  this.scheduleOnce(() => {
                    this.showCheckInfoPopUp();
                  }, 2);
                  break;

                case 'button2':
                  // 如果是取消按钮，通常不需要执行任何操作，因为它默认会关闭弹出窗口
                  break;

                default:
                  console.log('未知的按钮被点击');
              }
            } else {
              console.log('弹出窗口被关闭，没有点击任何按钮');
            }
          });
        }

        showCheckInfoPopUp() {
          window.Telegram.WebApp.showPopup({
            title: 'Success',
            message: 'If you have already bound your twitter, please click "OK"!',
            buttons: [{
              id: 'button1',
              text: 'ok'
            }]
          }, async buttonId => {
            // 弹出窗口关闭时的回调函数
            if (buttonId) {
              switch (buttonId) {
                case 'button1':
                  await this.profileView.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                    error: Error()
                  }), homeView) : homeView).invitePage.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
                    error: Error()
                  }), inviteModel) : inviteModel).initData();
                  this.profileView.setTwitterInfo();
                  break;

                default:
                  console.log('未知的按钮被点击');
              }
            } else {
              console.log('弹出窗口被关闭，没有点击任何按钮');
            }
          });
        }

        initData() {
          this.profileView.setTwitterInfo();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28a138bea707a6592030f2c7976d2ccd7b4c880a.js.map