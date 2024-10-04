System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, GlobalData, profileView, _dec, _class, _crd, ccclass, property, profileModel;

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprofileView(extras) {
    _reporterNs.report("profileView", "./profileView", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a590agMIXBPmb+Q+FQPO9im", "profileModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

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

        bindTwitter() {
          const twitterOauthUrl = `
        https://twitter.com/i/oauth2/authorize?client_id=SUQ3NFJDV3NnQ2FQX1gwTF9laFo6MTpjaQ
        &scope=tweet.read+offline.access+tweet.write+tweet.moderate.write+users.read+follows.read+follows.write+like.read+like.write
        &response_type=code
        &redirect_uri=https%3A%2F%2Fwww.infinitytest.cc?tgId=${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).token}
        &state=profile
        &code_challenge=0ioze5m20493ny2
        &code_challenge_method=plain`;
          window.Telegram.WebApp.openLink(`${twitterOauthUrl}`, {
            tryInstantView: true
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
//# sourceMappingURL=2b03e534e24634673293369e3053b9d49baa59c3.js.map