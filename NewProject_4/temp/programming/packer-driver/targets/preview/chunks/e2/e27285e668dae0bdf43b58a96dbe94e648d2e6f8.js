System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, Prefab, basePageView, GlobalData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, twitterTaskId, taskUrls, earnView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskListResponseType(extras) {
    _reporterNs.report("taskListResponseType", "../invite/inviteModel", _context.meta, extras);
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
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7879v0fj1A5oAZI6DoP+2w", "earnView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventHandler', 'instantiate', 'Label', 'Node', 'Prefab', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("twitterTaskId", twitterTaskId = []);

      _export("taskUrls", taskUrls = {
        SearchTask: "https://api.infinitytest.cc/api/v1/task/list",
        ClaimReward: "https://api.infinitytest.cc/api/v1/task/claim",
        CompleteTask: "https://api.infinitytest.cc/api/v1/task/complete",
        CheckIn: "https://api.infinitytest.cc/api/v1/task/checkIn"
      });

      _export("earnView", earnView = (_dec = ccclass("earnView"), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property({
        type: [Node]
      }), _dec(_class = (_class2 = class earnView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "social_prefab", _descriptor, this);

          _initializerDefineProperty(this, "daily_prefab", _descriptor2, this);

          _initializerDefineProperty(this, "social_parent", _descriptor3, this);

          _initializerDefineProperty(this, "daily_parent", _descriptor4, this);

          _initializerDefineProperty(this, "discoverPage", _descriptor5, this);

          _initializerDefineProperty(this, "check_btns", _descriptor6, this);

          this.taskInfo = void 0;
        }

        start() {}

        completeTask(id) {
          return _asyncToGenerator(function* () {
            var config = {
              method: "post",
              url: taskUrls.CompleteTask,
              headers: {
                "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
                Authorization: "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              },
              params: {
                taskId: id // 添加更多参数

              }
            };
            yield window.axios(config).then(() => {}).catch(error => {
              console.log(error);
            });
          })();
        }

        checkIn(index) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var config = {
              method: "post",
              url: taskUrls.CheckIn,
              headers: {
                "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
                Authorization: "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            };
            yield window.axios(config).then(taskList => {
              if (taskList.data.code === "90000") {
                _this.changeCheckTaskState(index);
              }
            }).catch(error => {
              console.log(error);
            });
          })();
        }

        claimReward(id) {
          return _asyncToGenerator(function* () {
            var config = {
              method: "post",
              url: taskUrls.ClaimReward,
              headers: {
                "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
                Authorization: "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              },
              params: {
                taskId: id // 添加更多参数

              }
            };
            yield window.axios(config).then(taskList => {}).catch(error => {
              console.log(error);
            });
          })();
        }

        initTaskNode(info) {
          var _this2 = this;

          this.taskInfo = info;
          info.data.data.checkInList.forEach((task, index) => {
            this.setCheckTaskNode(task, index);
            this.check_btns[index].on(Button.EventType.CLICK, /*#__PURE__*/_asyncToGenerator(function* () {
              yield _this2.clickCheckTaskNode(index);
            }), this);
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

        initSocialTaskNode(info) {
          var _this3 = this;

          info.taskResponseList.forEach((task, index) => {
            var child = instantiate(this.daily_prefab);
            this.updateSocialTaskUiByState(task, child);
            child.on(Button.EventType.CLICK, /*#__PURE__*/_asyncToGenerator(function* () {
              if (_this3.taskInfo.data.data.taskModelResponses[0].taskList[index].status === 3) {
                return;
              } // if(!(twitterTaskId.indexOf(this.taskInfo.data.taskModelResponses[0].taskList[index].taskId) && GlobalData.taskData.data.twitterUserName)){
              //     return
              // }


              if (_this3.taskInfo.data.data.taskModelResponses[0].taskList[index].status === 1) {
                window.Telegram.WebApp.openLink(task.taskLink, {
                  tryInstantView: true
                });
                yield _this3.completeTask(task.taskId);

                _this3.changeDailyOrSocialTaskState(2, _this3.taskInfo.data.data.taskModelResponses[0].taskList[index], index, child);
              }

              if (_this3.taskInfo.data.data.taskModelResponses[0].taskList[index].status === 2) {
                yield _this3.claimReward(task.taskId);

                _this3.changeDailyOrSocialTaskState(2, _this3.taskInfo.data.data.taskModelResponses[0].taskList[index], index, child);
              }
            }), this);
            this.social_parent.addChild(child);
          });
        }

        initDailyTaskNode(info) {
          var _this4 = this;

          info.taskResponseList.forEach((task, index) => {
            var child = instantiate(this.daily_prefab);
            this.updateDailyTaskUiByState(task, child);
            child.on(Button.EventType.CLICK, /*#__PURE__*/_asyncToGenerator(function* () {
              if (_this4.taskInfo.data.data.taskModelResponses[0].taskList[index].status === 3) {
                return;
              }

              if (_this4.taskInfo.data.data.taskModelResponses[0].taskList[index].status === 1) {
                //跳转大厅
                _this4.discoverPage.setPosition(0, 0);

                _this4.node.setPosition(0, 0);

                yield _this4.completeTask(task.taskId);

                _this4.changeDailyOrSocialTaskState(3, _this4.taskInfo.data.data.taskModelResponses[0].taskList[index], index, child);
              }

              if (_this4.taskInfo.data.data.taskModelResponses[0].taskList[index].status === 2) {
                yield _this4.claimReward(task.taskId);

                _this4.changeDailyOrSocialTaskState(3, _this4.taskInfo.data.data.taskModelResponses[0].taskList[index], index, child);
              }
            }), this);
            this.daily_parent.addChild(child);
          });
        }

        clickCheckTaskNode(index) {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            yield _this5.checkIn(index);
          })();
        }

        setCheckTaskNode(index, info) {
          if (info.status === 1) {
            this.changeCheckTaskState(index);
          }
        }

        changeCheckTaskState(index) {
          this.check_btns[index].getChildByName('count').getComponent(Label).string = String((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).taskData.data.data.checkInList[index].point);
          this.check_btns[index].getChildByName('uncoplete').active = false;
          this.check_btns[index].getChildByName('complete').active = true;
          this.check_btns[index].getChildByName('check').active = true;
          this.check_btns[index].getChildByName('dollar').active = false;
        }

        changeDailyOrSocialTaskState(type, info, index, node) {
          if (type === 2) {
            this.taskInfo.data.data.taskModelResponses[0].taskList[index].status = info.status;
            this.updateSocialTaskUiByState(info, node); //改变ui
          }

          if (type === 3) {
            this.taskInfo.data.data.taskModelResponses[1].taskList[index].status = info.status; //改变ui

            this.updateDailyTaskUiByState(info, node);
          }
        }

        updateDailyTaskUiByState(info, node) {
          node.getChildByName('count').getComponent(Label).string = info.taskReward;
          node.getChildByName('desc').getComponent(Label).string = info.taskDesc; //node.getChildByName('ProgressBar').getComponent(ProgressBar).value = info

          if (info.status === 1) {
            node.getChildByName('un_complete_bg').active = true;
            node.getChildByName('complete').active = false;
            node.getChildByName('dollar').active = true;
            node.getChildByName('count').active = true;
            node.getChildByName('check').active = false; //node.getChildByName('desc')
          }

          if (info.status === 2) {
            node.getChildByName('un_complete_bg').active = false;
            node.getChildByName('complete').active = true;
            node.getChildByName('dollar').active = true;
            node.getChildByName('count').active = true;
            node.getChildByName('check').active = false;
          }

          if (info.status === 3) {
            node.getChildByName('un_complete_bg').active = false;
            node.getChildByName('complete').active = true;
            node.getChildByName('dollar').active = false;
            node.getChildByName('count').active = false;
            node.getChildByName('check').active = true;
          }
        }

        updateSocialTaskUiByState(info, node) {
          node.getChildByName('count').getComponent(Label).string = info.taskReward;
          node.getChildByName('desc').getComponent(Label).string = info.taskDesc;

          if (info.status === 1) {
            node.getChildByName('uncomplete').active = true;
            node.getChildByName('complete').active = false;
            node.getChildByName('dollar').active = true;
            node.getChildByName('count').active = true;
            node.getChildByName('check').active = false; //node.getChildByName('desc')
          }

          if (info.status === 2) {
            node.getChildByName('uncomplete').active = false;
            node.getChildByName('complete').active = true;
            node.getChildByName('dollar').active = true;
            node.getChildByName('count').active = true;
            node.getChildByName('check').active = false;
          }

          if (info.status === 3) {
            node.getChildByName('uncomplete').active = false;
            node.getChildByName('complete').active = true;
            node.getChildByName('dollar').active = false;
            node.getChildByName('count').active = false;
            node.getChildByName('check').active = true;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "check_btns", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e27285e668dae0bdf43b58a96dbe94e648d2e6f8.js.map