System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, Prefab, ProgressBar, basePageView, inviteModel, GlobalData, homeView, taskNodeInfo, WebUtils, profileView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ChangeType, twitterTaskId, taskUrls, earnView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinviteModel(extras) {
    _reporterNs.report("inviteModel", "../invite/inviteModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskListResponseType(extras) {
    _reporterNs.report("taskListResponseType", "../invite/inviteModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../home/GloabalClass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhomeView(extras) {
    _reporterNs.report("homeView", "../home/homeView", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskNodeInfo(extras) {
    _reporterNs.report("taskNodeInfo", "./taskNodeInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../common/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprofileView(extras) {
    _reporterNs.report("profileView", "../profile/profileView", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }, function (_unresolved_3) {
      inviteModel = _unresolved_3.inviteModel;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.default;
    }, function (_unresolved_5) {
      homeView = _unresolved_5.homeView;
    }, function (_unresolved_6) {
      taskNodeInfo = _unresolved_6.taskNodeInfo;
    }, function (_unresolved_7) {
      WebUtils = _unresolved_7.default;
    }, function (_unresolved_8) {
      profileView = _unresolved_8.profileView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7879v0fj1A5oAZI6DoP+2w", "earnView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventHandler', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChangeType", ChangeType = /*#__PURE__*/function (ChangeType) {
        ChangeType[ChangeType["INIT"] = 0] = "INIT";
        ChangeType[ChangeType["CLICK"] = 1] = "CLICK";
        return ChangeType;
      }({}));

      _export("twitterTaskId", twitterTaskId = [9, 10, 11, 12]);

      _export("taskUrls", taskUrls = {
        SearchTask: "https://api.infinitytest.cc/api/v1/task/list",
        ClaimReward: "https://api.infinitytest.cc/api/v1/task/claim",
        CompleteTask: "https://api.infinitytest.cc/api/v1/task/complete",
        CheckIn: "https://api.infinitytest.cc/api/v1/task/checkIn"
      });

      _export("earnView", earnView = (_dec = ccclass("earnView"), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property({
        type: [Node]
      }), _dec(_class = (_class2 = class earnView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "social_prefab", _descriptor, this);

          _initializerDefineProperty(this, "daily_prefab", _descriptor2, this);

          _initializerDefineProperty(this, "social_parent", _descriptor3, this);

          _initializerDefineProperty(this, "daily_parent", _descriptor4, this);

          _initializerDefineProperty(this, "discoverPage", _descriptor5, this);

          _initializerDefineProperty(this, "homePage", _descriptor6, this);

          _initializerDefineProperty(this, "check_btns", _descriptor7, this);
        }

        start() {}

        async completeTask(id) {
          const bindData = await window.axios.post(taskUrls.CompleteTask, {
            taskId: id
          }, {
            headers: {
              Authorization: `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
        }

        freshDailyTask() {
          this.daily_parent.children.forEach(node => {
            const info = node.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
              error: Error()
            }), taskNodeInfo) : taskNodeInfo).taskInfo;
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).taskData.data.data.taskModelResponses[1].taskResponseList.find(list => {
              if (list.taskId === info.taskId) {
                info.status = list.status;
              }
            });
          });
        }

        async checkIn(index) {
          var config = {
            method: "post",
            url: taskUrls.CheckIn,
            headers: {
              "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
              Authorization: `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          };
          await window.axios(config).then(async taskList => {
            if (taskList.data.code === "90000") {
              this.changeCheckTaskState(index);
              await this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                error: Error()
              }), homeView) : homeView).invitePage.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
                error: Error()
              }), inviteModel) : inviteModel).initData();
            }
          }).catch(error => {
            console.log(error);
          });
        }

        async claimReward(id) {
          const bindData = await window.axios.post(taskUrls.ClaimReward, {
            taskId: id
          }, {
            headers: {
              Authorization: `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          await this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
            error: Error()
          }), homeView) : homeView).invitePage.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
            error: Error()
          }), inviteModel) : inviteModel).initData();
        }

        initTaskNode(info) {
          info.data.data.checkInList.forEach((task, index) => {
            this.setCheckTaskNode(task, index);
            this.check_btns[index].on(Button.EventType.CLICK, async () => {
              const now = new Date();
              const year = now.getFullYear();
              const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
              const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
              const date = `${year}-${month}-${day}`;

              if (date === task.date) {
                await this.clickCheckTaskNode(index);
              } else {
                window.Telegram.WebApp.showAlert("Can only sign in today!", () => {
                  // 用户点击关闭按钮后调用的回调函数
                  console.log("");
                });
              }
            }, this);
          });
          info.data.data.taskModelResponses.forEach(taskListPart => {
            if (taskListPart.taskModelName === "Social tasks") {
              this.initSocialTaskNode(taskListPart);
            }

            if (taskListPart.taskModelName === "Daily tasks") {
              this.initDailyTaskNode(taskListPart);
            }
          });
        }

        sortByStatus(info) {
          const socialTasks = info.taskResponseList.sort((a, b) => {
            // 如果一个是2，另一个不是2，则2在前
            if (a.status === 2) return -1;
            if (b.status === 2) return 1; // 如果一个是3，另一个不是3，则3在后

            if (a.status === 3) return 1;
            if (b.status === 3) return -1; // 如果一个是0或1，另一个是3，则0或1在前

            if ((a.status === 0 || a.status === 1) && b.status === 3) return -1;
            if ((b.status === 0 || b.status === 1) && a.status === 3) return 1; // 如果一个是0或1，另一个是2，则0或1在后

            if ((a.status === 0 || a.status === 1) && b.status === 2) return 1;
            if ((b.status === 0 || b.status === 1) && a.status === 2) return -1; // 否则，保持原始顺序（即0和1的相对位置不变）

            return 0;
          });
          return socialTasks;
        }

        showCheckInfoPopUp() {
          window.Telegram.WebApp.showPopup({
            title: 'Complete',
            message: 'You have already bound your Twitter!',
            buttons: [{
              id: 'button1',
              text: 'ok'
            }]
          }, async buttonId => {
            // 弹出窗口关闭时的回调函数
            if (buttonId) {
              switch (buttonId) {
                case 'button1':
                  await this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                    error: Error()
                  }), homeView) : homeView).invitePage.getComponent(_crd && inviteModel === void 0 ? (_reportPossibleCrUseOfinviteModel({
                    error: Error()
                  }), inviteModel) : inviteModel).initData();
                  this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                    error: Error()
                  }), homeView) : homeView).profile.getComponent(_crd && profileView === void 0 ? (_reportPossibleCrUseOfprofileView({
                    error: Error()
                  }), profileView) : profileView).setTwitterInfo();
                  break;

                default:
                  console.log('未知的按钮被点击');
              }
            } else {
              console.log('弹出窗口被关闭，没有点击任何按钮');
            }
          });
        }

        initSocialTaskNode(info) {
          const socialTasks = this.sortByStatus(info);
          socialTasks.forEach((task, index) => {
            const child = instantiate(this.social_prefab);
            child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
              error: Error()
            }), taskNodeInfo) : taskNodeInfo).taskInfo = task;

            if (task.unlock === 0) {
              child.getChildByName('locked').active = true;
            }

            this.updateSocialTaskUiByState(child, ChangeType.INIT, index);
            child.on(Button.EventType.CLICK, async () => {
              if (task.unlock === 0) {
                window.Telegram.WebApp.showAlert("Coming soon!", () => {
                  console.log("");
                });
                return;
              }

              if (child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 3) {
                return;
              }

              if (twitterTaskId.indexOf(child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.taskId) >= 0 && !(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).taskData.data.data.twitterUserName) {
                const twitterOauthUrl = `https://www.infinitytest.cc?tgId=${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`; //this.profileView.closeProfile()

                window.Telegram.WebApp.showPopup({
                  title: 'Please bind your twitter',
                  message: 'Bind your twitter and start the exploration!',
                  buttons: [{
                    id: 'button1',
                    text: 'bind now'
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

                      default:
                        console.log('');
                    }
                  } else {
                    console.log('');
                  }
                });
                return;
              }

              if (child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 1 || child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 0) {
                if (task.taskId !== 16) {
                  //是否是钱包任务
                  window.Telegram.WebApp.openLink(task.taskLink, {
                    tryInstantView: true
                  });
                  await this.completeTask(task.taskId);
                  this.changeDailyOrSocialTaskState(2, index, child);
                } else {
                  if (!(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).wallet_address) {
                    window.Telegram.WebApp.showAlert("Please bind wallet first!", () => {
                      // 用户点击关闭按钮后调用的回调函数
                      this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                        error: Error()
                      }), homeView) : homeView).shiftCurrentPage({
                        currentTarget: this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                          error: Error()
                        }), homeView) : homeView).drawPageBtn
                      }, "3");
                      console.log("");
                    });
                  } else {
                    await this.completeTask(task.taskId);
                    this.changeDailyOrSocialTaskState(2, index, child);
                  }
                }
              } else if (child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 2) {
                await this.claimReward(task.taskId);
                this.changeDailyOrSocialTaskState(2, index, child);
              }
            }, this);
            this.social_parent.addChild(child);
          });
        }

        initDailyTaskNode(info) {
          const dailyTasks = this.sortByStatus(info);
          dailyTasks.forEach((task, index) => {
            const child = instantiate(this.daily_prefab);
            child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
              error: Error()
            }), taskNodeInfo) : taskNodeInfo).taskInfo = task;

            if (task.unlock === 0) {
              child.getChildByName('locked').active = true;
            }

            this.updateDailyTaskUiByState(child, ChangeType.INIT, index);
            child.on(Button.EventType.CLICK, async () => {
              if (task.unlock === 0) {
                window.Telegram.WebApp.showAlert("Coming soon!", () => {
                  console.log("");
                });
                return;
              }

              if (child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 3) {
                return;
              }

              if (child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 1 || child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 0) {
                //跳转大厅
                this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                  error: Error()
                }), homeView) : homeView).shiftCurrentPage({
                  currentTarget: this.homePage.getComponent(_crd && homeView === void 0 ? (_reportPossibleCrUseOfhomeView({
                    error: Error()
                  }), homeView) : homeView).discoverPageBtn
                }, "0"); // this.discoverPage.setPosition(0, 0);
                // this.node.setPosition(-5000, 0);
                //await this.completeTask(task.taskId);

                this.changeDailyOrSocialTaskState(3, index, child);
              } else if (child.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
                error: Error()
              }), taskNodeInfo) : taskNodeInfo).taskInfo.status === 2) {
                await this.claimReward(task.taskId);
                this.changeDailyOrSocialTaskState(3, index, child);
              }
            }, this);
            this.daily_parent.addChild(child);
          });
        }

        async clickCheckTaskNode(index) {
          await this.checkIn(index);
        }

        setCheckTaskNode(info, index) {
          this.check_btns[index].getChildByName("count").getComponent(Label).string = String((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).taskData.data.data.checkInList[index].point);

          if (info.status === 1) {
            this.changeCheckTaskState(index);
          }
        }

        changeCheckTaskState(index) {
          this.check_btns[index].getChildByName("uncoplete").active = false;
          this.check_btns[index].getChildByName("complete").active = true;
          this.check_btns[index].getChildByName("check").active = true;
          this.check_btns[index].getChildByName("dollar").active = false;
        }

        changeDailyOrSocialTaskState(type, index, node) {
          if (type === 2) {
            this.updateSocialTaskUiByState(node, ChangeType.CLICK, index); //改变ui
          }

          if (type === 3) {
            //改变ui
            this.updateDailyTaskUiByState(node, ChangeType.CLICK, index);
          }
        }

        async updateDailyTaskUiByState(node, type, index) {
          const info = node.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
            error: Error()
          }), taskNodeInfo) : taskNodeInfo).taskInfo;
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getRemoteImg(info.icon, node.getChildByName("icon"));
          node.getChildByName("count").getComponent(Label).string = info.taskReward;
          node.getChildByName("desc").getComponent(Label).string = info.taskName; //node.getChildByName('ProgressBar').getComponent(ProgressBar).value = info

          if (type === ChangeType.INIT) {
            if (info.status === 1 || info.status === 0) {
              node.getChildByName("un_complete_bg").active = true;
              node.getChildByName("complete_bg").active = false;
              node.getChildByName("dollar").active = true;
              node.getChildByName("count").active = true;
              node.getChildByName("check").active = false;
              node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 0;
            } else if (info.status === 2) {
              node.getChildByName("un_complete_bg").active = false;
              node.getChildByName("complete_bg").active = true;
              node.getChildByName("dollar").active = true;
              node.getChildByName("count").active = true;
              node.getChildByName("check").active = false;
              node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
            } else if (info.status === 3) {
              node.getChildByName("un_complete_bg").active = false;
              node.getChildByName("complete_bg").active = true;
              node.getChildByName("dollar").active = false;
              node.getChildByName("count").active = false;
              node.getChildByName("check").active = true;
              node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
            }
          } else {
            if (info.status === 1 || info.status === 0) {// node.getChildByName("un_complete_bg").active = false;
              // node.getChildByName("complete_bg").active = true;
              // node.getChildByName("dollar").active = true;
              // node.getChildByName("count").active = true;
              // node.getChildByName("check").active = false;
              // node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
            } else if (info.status === 2) {
              node.getChildByName("un_complete_bg").active = false;
              node.getChildByName("complete_bg").active = true;
              node.getChildByName("dollar").active = false;
              node.getChildByName("count").active = false;
              node.getChildByName("check").active = true;
              node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
            }
          }
        }

        updateSocialTaskUiByState(node, type, index) {
          const info = node.getComponent(_crd && taskNodeInfo === void 0 ? (_reportPossibleCrUseOftaskNodeInfo({
            error: Error()
          }), taskNodeInfo) : taskNodeInfo).taskInfo;
          (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
            error: Error()
          }), WebUtils) : WebUtils).getRemoteImg(info.icon, node.getChildByName("icon"));
          node.getChildByName("count").getComponent(Label).string = info.taskReward;
          node.getChildByName("desc").getComponent(Label).string = info.taskName;

          if (type == ChangeType.INIT) {
            if (info.status === 1 || info.status === 0) {
              node.getChildByName("uncomplete").active = true;
              node.getChildByName("complete").active = false;
              node.getChildByName("dollar").active = true;
              node.getChildByName("count").active = true;
              node.getChildByName("check").active = false;
            } else if (info.status === 2) {
              node.getChildByName("uncomplete").active = false;
              node.getChildByName("complete").active = true;
              node.getChildByName("dollar").active = true;
              node.getChildByName("count").active = true;
              node.getChildByName("check").active = false;
            } else if (info.status === 3) {
              node.getChildByName("uncomplete").active = false;
              node.getChildByName("complete").active = true;
              node.getChildByName("dollar").active = false;
              node.getChildByName("count").active = false;
              node.getChildByName("check").active = true;
            }
          } else {
            if (info.status === 1 || info.status === 0) {
              node.getChildByName("uncomplete").active = false;
              node.getChildByName("complete").active = true;
              node.getChildByName("dollar").active = true;
              node.getChildByName("count").active = true;
              node.getChildByName("check").active = false;
              info.status = 2;
            } else if (info.status === 2) {
              node.getChildByName("uncomplete").active = false;
              node.getChildByName("complete").active = true;
              node.getChildByName("dollar").active = false;
              node.getChildByName("count").active = false;
              node.getChildByName("check").active = true;
              info.status = 3;
            }
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "social_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "daily_prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "social_parent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "daily_parent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "discoverPage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "homePage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "check_btns", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a83a2e700ce9c22f065d99f4ff7e91731c2ec403.js.map