System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, GlobalData, _dec, _class, _crd, ccclass, property, twitterOauthUrl, profileModel;

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a590agMIXBPmb+Q+FQPO9im", "profileModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      twitterOauthUrl = "\nhttps://twitter.com/i/oauth2/authorize?client_id=SUQ3NFJDV3NnQ2FQX1gwTF9laFo6MTpjaQ\n&scope=tweet.read+offline.access+tweet.write+tweet.moderate.write+users.read+follows.read+follows.write+like.read+like.write\n&response_type=code\n&redirect_uri=https%3A%2F%2Fwww.infinitytest.cc?tgId=" + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
        error: Error()
      }), GlobalData) : GlobalData).token + "\n&state=profile\n&code_challenge=0ioze5m20493ny2\n&code_challenge_method=plain";

      _export("profileModel", profileModel = (_dec = ccclass('profileModel'), _dec(_class = class profileModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        start() {}

        update(deltaTime) {}

        bindTwitter() {
          window.Telegram.WebApp.openLink("" + twitterOauthUrl, {
            tryInstantView: true
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=698652bdcc6bc3beb61ddb909fc4113f5d37b002.js.map