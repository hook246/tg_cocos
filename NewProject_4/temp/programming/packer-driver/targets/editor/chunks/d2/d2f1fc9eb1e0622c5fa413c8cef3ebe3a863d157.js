System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GlobalData, discoverView, basePageModel, _dec, _class, _crd, ccclass, property, gamesUrls, discoverModel;

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdiscoverView(extras) {
    _reporterNs.report("discoverView", "./discoverView", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GlobalData = _unresolved_2.default;
    }, function (_unresolved_3) {
      discoverView = _unresolved_3.discoverView;
    }, function (_unresolved_4) {
      basePageModel = _unresolved_4.basePageModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53070o5oMNMlZkADsQtHAxB", "discoverModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'InstanceMaterialType', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gamesUrls", gamesUrls = {
        paly_list: 'https://api.infinitytest.cc/hall/api/discover/list',
        click: 'https://api.infinitytest.cc/hall/api/discover/click'
      });

      _export("discoverModel", discoverModel = (_dec = ccclass('discoverModel'), _dec(_class = class discoverModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor(...args) {
          super(...args);
          this.game_list = void 0;
          this.play_list = void 0;
          this.discoverView = void 0;
        }

        start() {
          this.discoverView = this.view.getComponent(_crd && discoverView === void 0 ? (_reportPossibleCrUseOfdiscoverView({
            error: Error()
          }), discoverView) : discoverView);
        }

        update(deltaTime) {}

        async initData() {
          this.game_list = await this.getGames();
          this.play_list = await this.getUgcs();
          this.discoverView.initGameViews(this.game_list);
          this.discoverView.initUgcViews(this.play_list);
        }

        async getGames() {
          var _walletInfo$data;

          const walletInfo = await window.axios.post(gamesUrls.paly_list, {
            type: 1
          }, {
            headers: {
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          return walletInfo == null ? void 0 : (_walletInfo$data = walletInfo.data) == null ? void 0 : _walletInfo$data.data;
        }

        async getUgcs() {
          var _walletInfo$data2;

          const walletInfo = await window.axios.post(gamesUrls.paly_list, {
            type: 2
          }, {
            headers: {
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          return walletInfo == null ? void 0 : (_walletInfo$data2 = walletInfo.data) == null ? void 0 : _walletInfo$data2.data;
        }

        async playCurrentGame(event, type) {
          var _walletInfo$data3;

          const walletInfo = await window.axios.post(gamesUrls.click, {
            adId: gameId
          }, {
            headers: {
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          return walletInfo == null ? void 0 : (_walletInfo$data3 = walletInfo.data) == null ? void 0 : _walletInfo$data3.data;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2f1fc9eb1e0622c5fa413c8cef3ebe3a863d157.js.map