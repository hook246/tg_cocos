System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GlobalData, basePageModel, inviteView, homeView, _dec, _class, _crd, ccclass, property, taskUrls, inviteModel;

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinviteView(extras) {
    _reporterNs.report("inviteView", "./inviteView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfearnView(extras) {
    _reporterNs.report("earnView", "../earn/earnView", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GlobalData = _unresolved_2.default;
    }, function (_unresolved_3) {
      basePageModel = _unresolved_3.basePageModel;
    }, function (_unresolved_4) {
      inviteView = _unresolved_4.inviteView;
    }, function (_unresolved_5) {
      homeView = _unresolved_5.homeView;
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
        constructor(...args) {
          super(...args);
          this.invitePage = void 0;
          this.earnPage = void 0;
          this.inviteCode = void 0;
        }

        start() {
          this.invitePage = this.view.getComponent(_crd && inviteView === void 0 ? (_reportPossibleCrUseOfinviteView({
            error: Error()
          }), inviteView) : inviteView);
        }

        update(deltaTime) {}

        async initData() {
          this.inviteCode = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).inviteCode;
          await this.getTaskList();
        }

        async getTaskList() {
          var config = {
            method: 'post',
            url: 'https://api.infinitytest.cc/api/v1/task/list',
            headers: {
              'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            },
            params: {
              page: 'GAME_LOBBY' // 添加更多参数

            }
          };
          const taskList = await window.axios(config);
          this.invitePage.setInviteInfo(taskList.data.data.totalInviteNum, taskList.data.data.invitePoint);
          this.invitePage.home.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
            error: Error()
          }), homeView) : homeView).game_point.string = String(taskList.data.data.totalPoint);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).taskData = taskList; // .then(function (taskList: taskListResponseType) {
          //    this.invitePage.setInviteInfo(taskList.data.totalInviteNum, taskList.data.gamePoint)
          //    GlobalData.taskData = taskList
          //    cb(taskList)
          // })
          // .catch(function (error) {
          //    console.log(error);
          // });
          //   const taskList = await window.axios.post<taskListResponseType>(
          //     taskUrls.SearchTask,
          //     {
          //         page: 'GAME_LOBBY',
          //     },{
          //         headers: { 
          //               'Authorization': `Bearer ${GlobalData.token}`
          //         }
          //     }
          //   );
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=271422f5617e2e782aa925ce1a00059934bf7436.js.map