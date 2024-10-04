System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _window, _window$Telegram, _window$Telegram$WebA, _dec, _class, _crd, ccclass, property, twitterOauthUrl, profileModel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a590agMIXBPmb+Q+FQPO9im", "profileModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      twitterOauthUrl = "\nhttps://twitter.com/i/oauth2/authorize?client_id=SUQ3NFJDV3NnQ2FQX1gwTF9laFo6MTpjaQ\n&scope=tweet.read+offline.access+tweet.write+tweet.moderate.write+users.read+follows.read+follows.write+like.read+like.write\n&response_type=code\n&redirect_uri=https%3A%2F%2Fwww.infinitytest.cc?tgId=" + ((_window = window) == null ? void 0 : (_window$Telegram = _window.Telegram) == null ? void 0 : (_window$Telegram$WebA = _window$Telegram.WebApp) == null ? void 0 : _window$Telegram$WebA.initData) + "\n&state=profile\n&code_challenge=0ioze5m20493ny2\n&code_challenge_method=plain";

      _export("profileModel", profileModel = (_dec = ccclass('profileModel'), _dec(_class = class profileModel extends Component {
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
//# sourceMappingURL=a7bd3babd04a7db81353fa12cbeddb8ee10fdb8b.js.map