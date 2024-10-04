System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GlobalData, basePageModel, _dec, _class, _crd, ccclass, property, taskUrls, inviteModel;

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
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
      basePageModel = _unresolved_3.basePageModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2123b4qZG1JX7p7LxtLbwwE", "inviteModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("taskUrls", taskUrls = {
        SearchTask: "https://api.infinitytest.cc/api/v1/task/list",
        ClaimReward: "https://api.infinitytest.cc/api/v1/task/claim",
        CompleteTask: "https://api.infinitytest.cc/api/v1/task/complete",
        CheckIn: "https://api.infinitytest.cc/api/v1/task/checkIn"
      });

      _export("inviteModel", inviteModel = (_dec = ccclass("inviteModel"), _dec(_class = class inviteModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        start() {}

        update(deltaTime) {}

        async initData() {
          await this.getTaskList();
        }

        async getTaskList() {
          try {
            const taskList = await window.axios.post(taskUrls.SearchTask, {
              page: 'GAME_LOBBY'
            }, {
              headers: {
                'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
            return taskList.data.data;
          } catch (error) {
            console.log(error);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc38befd91adc701833a8faf40b2fed82d03c8cd.js.map