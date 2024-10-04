System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _window, _window$Telegram, _window$Telegram$WebA, _window2, _window2$Telegram, _window2$Telegram$Web, _dec, _class, _crd, ccclass, property, twitterOauthUrl, profileModel;

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
      twitterOauthUrl = "\nhttps://twitter.com/i/oauth2/authorize?client_id=SUQ3NFJDV3NnQ2FQX1gwTF9laFo6MTpjaQ\n&scope=tweet.read+offline.access+tweet.write+tweet.moderate.write+users.read+follows.read+follows.write+like.read+like.write\n&response_type=code\n&redirect_uri=https%3A%2F%2Fwww.infinitytest.cc?tgId=" + ((_window = window) != null && (_window$Telegram = _window.Telegram) != null && (_window$Telegram$WebA = _window$Telegram.WebApp) != null && _window$Telegram$WebA.initData ? (_window2 = window) == null ? void 0 : (_window2$Telegram = _window2.Telegram) == null ? void 0 : (_window2$Telegram$Web = _window2$Telegram.WebApp) == null ? void 0 : _window2$Telegram$Web.initData : 'query_id=AAF7JpQPAwAAAHsmlA8sgKRl&user=%7B%22id%22%3A6703818363%2C%22first_name%22%3A%22fei%22%2C%22last_name%22%3A%22wang%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1727265053&hash=c9d448b5ce4ae47ad145d6f7f60551f73aafd726d508afa86083d6e41f342711') + "\n&state=profile\n&code_challenge=0ioze5m20493ny2\n&code_challenge_method=plain";

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
//# sourceMappingURL=0f2a072cbeb8d49e52c500837a5647856999d374.js.map