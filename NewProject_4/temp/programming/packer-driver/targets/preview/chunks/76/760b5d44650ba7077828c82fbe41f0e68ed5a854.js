System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GlobalData, discoverView, basePageModel, _dec, _class, _crd, ccclass, property, gamesUrls, discoverModel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);
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

        initData() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.game_list = yield _this.getGames();
            _this.play_list = yield _this.getUgcs();

            _this.discoverView.initGameViews(_this.game_list);

            _this.discoverView.initUgcViews(_this.play_list);
          })();
        }

        getGames() {
          return _asyncToGenerator(function* () {
            var _walletInfo$data;

            var walletInfo = yield window.axios.post(gamesUrls.paly_list, {
              type: 1
            }, {
              headers: {
                'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            });
            return walletInfo == null ? void 0 : (_walletInfo$data = walletInfo.data) == null ? void 0 : _walletInfo$data.data;
          })();
        }

        getUgcs() {
          return _asyncToGenerator(function* () {
            var _walletInfo$data2;

            var walletInfo = yield window.axios.post(gamesUrls.paly_list, {
              type: 2
            }, {
              headers: {
                'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            });
            return walletInfo == null ? void 0 : (_walletInfo$data2 = walletInfo.data) == null ? void 0 : _walletInfo$data2.data;
          })();
        }

        playCurrentGame(event, type) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _walletInfo$data3;

            var walletInfo = yield window.axios.post(gamesUrls.click, {
              adId: type === '1' ? _this2.discoverView.current_game_info.id : _this2.discoverView.current_ugc_info.id
            }, {
              headers: {
                'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            });
            return walletInfo == null ? void 0 : (_walletInfo$data3 = walletInfo.data) == null ? void 0 : _walletInfo$data3.data;
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=760b5d44650ba7077828c82fbe41f0e68ed5a854.js.map