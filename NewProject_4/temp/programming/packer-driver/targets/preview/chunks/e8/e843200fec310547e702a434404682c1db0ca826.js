System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, drawView, GlobalData, _dec, _class, _crd, ccclass, property, local, local_token, drawLuckUrls, walletUrls, drawModel;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfbasePageModel(extras) {
    _reporterNs.report("basePageModel", "../common/basePageModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAxiosResponse(extras) {
    _reporterNs.report("AxiosResponse", "../login/loginModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdrawView(extras) {
    _reporterNs.report("drawView", "./drawView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueryDrawRespDTOData(extras) {
    _reporterNs.report("QueryDrawRespDTOData", "./drawView", _context.meta, extras);
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
      drawView = _unresolved_3.drawView;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75e1c2jLM1A0K1tsAKAKf7e", "drawModel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      local = false;
      local_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblR5cGUiOiJQQVJUSUNMRSIsInVzZXJJZCI6IjE4MjgwMjA3NzY3NzU4NDc5MzYiLCJpYXQiOjE3Mjg5ODgxNDV9.qhV94PwKEKOJI1CtuLpLCqtJq78MOB-6AuHexqRvYTg';

      // export const drawLuckUrls = {
      //   claim: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/claim" : "http://192.168.184.19:9002/hall/api/draw/claim",
      //   config: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/config":
      //     "http://192.168.184.19:9002/hall/api/draw/config",
      //   info: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/info":
      //     "http://192.168.184.19:9002/hall/api/draw/info",
      //   join:GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/join":
      //   "http://192.168.184.19:9002/hall/api/draw/join",
      //   tickets_usdt: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/user/info":
      //   "http://192.168.184.19:9002/hall/api/user/info",
      // }
      _export("drawLuckUrls", drawLuckUrls = {
        claim: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/hall/api/draw/claim" : "https://api.infinitytest.cc/hall/api/draw/claim",
        config: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/hall/api/draw/config" : "https://api.infinitytest.cc/hall/api/draw/config",
        info: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/hall/api/draw/info" : "https://api.infinitytest.cc/hall/api/draw/info",
        join: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/hall/api/draw/join" : "https://api.infinitytest.cc/hall/api/draw/join",
        tickets_usdt: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/hall/api/user/info" : "https://api.infinitytest.cc/hall/api/user/info"
      });

      _export("walletUrls", walletUrls = {
        bindWallet: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/api/v1/user/info/edit/bindWallet" : "https://api.infinitytest.cc/api/v1/user/info/edit/bindWallet",
        unbindWallet: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/api/v1/user/info/edit/unbindWallet" : "https://api.infinitytest.cc/api/v1/user/info/edit/unbindWallet",
        queryBindWallet: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).isProduction ? "https://api.infinityg.ai/api/v1/user/info/queryBindWallet" : "https://api.infinitytest.cc/api/v1/user/info/queryBindWallet"
      });

      _export("drawModel", drawModel = (_dec = ccclass("drawModel"), _dec(_class = class drawModel extends (_crd && basePageModel === void 0 ? (_reportPossibleCrUseOfbasePageModel({
        error: Error()
      }), basePageModel) : basePageModel) {
        constructor() {
          super(...arguments);
          this.drawPage = void 0;
          this.account = void 0;
          this.tonConnectUI = void 0;
          this.timer_add = 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            window.bindUxuyWallet = _this.bindUxuyWallet;
            _this.drawPage = _this.view.getComponent(_crd && drawView === void 0 ? (_reportPossibleCrUseOfdrawView({
              error: Error()
            }), drawView) : drawView);
            console.log("INIT the tonconnect ", _this.tonConnectUI); //提供一个manifest的json文件记录一些标题图标等数据用于UI连接时的展示

            var manifest = "https://catoss.s3.ap-southeast-1.amazonaws.com/telegram/manifest.json";
            console.log(manifest); //获得TON_CONNECT_UI的实例

            _this.tonConnectUI = new window.TON_CONNECT_UI.TonConnectUI({
              manifestUrl: manifest,
              uiPreferences: {//这里可以配置主题
                // theme: TON_CONNECT_UI.THEME.DARK,
              }
            });
            window['searchConfig'] = _this.searchConfig;
            window['getDrawLuckInfo'] = _this.getDrawLuckInfo;
            window['joinDrawLucy'] = _this.joinDrawLucy;
            window['usdtInfo'] = _this.getUserTicketsUsdtInfo; //this.claimReward
            // if(this.tonConnectUI.connected) {
            //     //断开连接重新加载
            //     console.log("Disconnect for connection reload")
            //     await this.tonConnectUI.disconnect();
            // }
          })();
        }

        update(deltaTime) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this2$drawPage$drawL;

            if (!((_this2$drawPage$drawL = _this2.drawPage.drawLuckyInfo) != null && _this2$drawPage$drawL.drawTime)) {
              return;
            }

            _this2.timer_add = _this2.timer_add + deltaTime;

            if (_this2.timer_add >= 1) {
              _this2.drawPage.drawLuckyInfo.drawTime = _this2.drawPage.drawLuckyInfo.drawTime - 1000;

              if (_this2.drawPage.drawLuckyInfo.drawTime <= 5000 && _this2.drawPage.drawLuckyInfo.drawTime > 0) {
                _this2.drawPage.setJoinBtnUseAble(false);
              } else if (_this2.drawPage.drawLuckyInfo.drawTime <= 0) {// const drawLuckyInfo = await this.getDrawLuckInfo()
                // this.drawPage.setDrawLuckInfo(drawLuckyInfo.data.data)
                // this.drawPage.showDrawLuckRewardInfo(drawLuckyInfo.data.data)
              } else {}

              var current_time = _this2.formatTimestamp(_this2.drawPage.drawLuckyInfo.drawTime);

              _this2.drawPage.timer.string = current_time;
              _this2.timer_add = 0;
            }
          })();
        }

        bindTonWallet() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (_this3.tonConnectUI.connected) {
              yield _this3.tonConnectUI.disconnect();
            }

            _this3.tonConnectUI.onStatusChange( /*#__PURE__*/_asyncToGenerator(function* (walletAndwalletInfo) {
              //连接状态改变监听事件
              if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).wallet_address) {
                return;
              }

              console.log("change : ", walletAndwalletInfo);
              _this3.account = walletAndwalletInfo;

              _this3.drawPage.controlConnectWalletBtnsVisible(false);

              _this3.drawPage.home.getChildByName('tap_btns').active = true;
              var walletInfo = yield window.axios.post(walletUrls.bindWallet, {
                walletAddress: walletAndwalletInfo.account.address,
                walletChain: walletAndwalletInfo.account.chain
              }, {
                headers: {
                  'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).token
                }
              });

              _this3.drawPage.setWalletInfo(walletAndwalletInfo.account.address);
            }));

            yield _this3.tonConnectUI.openModal();
          })();
        } //设置当前的倒计时


        formatTimestamp(timestamp) {
          var date = new Date(timestamp);
          var now = new Date();
          var years = now.getFullYear() - date.getFullYear();
          var months = now.getMonth() - date.getMonth();
          var weeks = Math.floor((now.getTime() - date.getTime()) / (7 * 24 * 60 * 60 * 1000));
          var days = now.getDate() - date.getDate();
          var hours = now.getHours() - date.getHours();
          var minutes = now.getMinutes() - date.getMinutes();
          var seconds = now.getSeconds() - date.getSeconds(); // 处理跨日的情况

          if (seconds < 0) {
            seconds += 60;
            minutes--;
          }

          if (minutes < 0) {
            minutes += 60;
            hours--;
          }

          if (hours < 0) {
            hours += 24;
            days--;
          }

          if (days < 0) {
            days += 7;
            weeks--;
          } // 调整年份和月份，因为年份和月份的计算可能不准确


          if (months < 0 || months === 0 && (days < 0 || days === 0 && hours < 0)) {
            years--;
            months += 12;
          }

          return years + " \u5E74 " + (months + 1) + " \u6708 " + weeks + " \u5468 " + days + " \u5929 " + hours + " \u65F6 " + minutes + " \u5206 " + seconds + " \u79D2";
        }

        initData() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var walletInfo = yield _this4.getWalletInfo();

            if (walletInfo != null && walletInfo.walletAddress) {
              _this4.drawPage.setWalletInfo(walletInfo == null ? void 0 : walletInfo.walletAddress);
            }

            var ticketsInfo = yield _this4.getUserTicketsUsdtInfo();

            _this4.drawPage.setCurrentTicketsUsdtCount(ticketsInfo.data);

            var drawLuckyInfo = yield _this4.getDrawLuckInfo();

            _this4.drawPage.setDrawLuckInfo(drawLuckyInfo.data.data);
          })();
        }

        bindUxuyWallet() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            try {
              _this5.drawPage.controlConnectWalletBtnsVisible(false);

              _this5.drawPage.home.getChildByName('tap_btns').active = true;
              var walletAddress;
              var walletChain;

              if (window.uxuyethereum._account.address) {
                walletAddress = window.uxuyethereum._account.address;
                walletChain = window.uxuyethereum._account.chainName;
              } else {
                yield window.uxuyWalletConnect();
                walletAddress = window.uxuyethereum._account.address;
                walletChain = window.uxuyethereum._account.chainName;
              }

              console.log('========', walletAddress, walletChain);
              var walletInfo = yield window.axios.post(walletUrls.bindWallet, {
                walletAddress: walletAddress,
                walletChain: walletChain
              }, {
                headers: {
                  'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).token
                }
              });

              _this5.drawPage.setWalletInfo(walletAddress);
            } catch (error) {}
          })();
        }

        unBindWallet() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var _walletInfo$data;

            var walletInfo = yield window.axios.post(walletUrls.unbindWallet, {}, {
              headers: {
                'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            });

            _this6.drawPage.controlUnbindBtnVisible(false);

            _this6.drawPage.controlBindBtnVisible(true);

            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).wallet_address = null;
            return walletInfo == null ? void 0 : (_walletInfo$data = walletInfo.data) == null ? void 0 : _walletInfo$data.code;
          })();
        }

        getWalletInfo() {
          return _asyncToGenerator(function* () {
            var _walletInfo$data2;

            var walletInfo = yield window.axios.post(walletUrls.queryBindWallet, {}, {
              headers: {
                'Authorization': "Bearer " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token
              }
            });
            return walletInfo == null ? void 0 : (_walletInfo$data2 = walletInfo.data) == null ? void 0 : _walletInfo$data2.data;
          })();
        }

        copyAddress() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            navigator.clipboard.writeText(_this7.drawPage.address.string).then(function () {
              window.Telegram.WebApp.showPopup({
                title: 'Copy Success',
                // 弹出窗口的标题
                message: 'copy address success！',
                // 弹出窗口的消息内容
                buttons: [{
                  id: 'btn2',
                  text: 'Button 2',
                  type: 'ok'
                }, // 'type' 可以是 'ok', 'close', 'cancel', 'default', 'destructive'
                {
                  id: 'btn3',
                  text: 'Button 3',
                  type: 'cancel'
                }]
              }, buttonId => {
                // 弹出窗口关闭时的回调函数
                if (buttonId) {
                  console.log('User pressed button:', buttonId);
                } else {
                  console.log('Popup was closed without pressing a button');
                }
              });
            }).catch(err => {
              window.Telegram.WebApp.showPopup({
                title: 'Copy failed',
                // 弹出窗口的标题
                message: 'copy address failed',
                // 弹出窗口的消息内容
                buttons: [{
                  id: 'btn2',
                  text: 'Button 2',
                  type: 'ok'
                }, // 'type' 可以是 'ok', 'close', 'cancel', 'default', 'destructive'
                {
                  id: 'btn3',
                  text: 'Button 3',
                  type: 'cancel'
                }]
              }, buttonId => {
                // 弹出窗口关闭时的回调函数
                if (buttonId) {
                  console.log('User pressed button:', buttonId);
                } else {
                  console.log('Popup was closed without pressing a button');
                }
              });
            });
          })();
        }

        searchConfig() {
          return _asyncToGenerator(function* () {
            var config = yield window.axios.get(drawLuckUrls.config, {
              headers: {
                'Authorization': "Bearer " + (local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token)
              }
            });
          })();
        }

        getDrawLuckInfo() {
          return _asyncToGenerator(function* () {
            var drawInfo = yield window.axios.get(drawLuckUrls.info, {
              headers: {
                'Authorization': "Bearer " + (local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token)
              }
            });
            return drawInfo;
          })();
        }

        joinDrawLucy() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            try {
              var join = yield window.axios.get(drawLuckUrls.join, {
                headers: {
                  'Authorization': "Bearer " + (local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).token)
                }
              });

              _this8.drawPage.setJoinBtnUseAble(false);
            } catch (error) {}
          })();
        }

        claimReward(drawId) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            var reward = yield window.axios.post(drawLuckUrls.claim, {
              "drawId": drawId
            }, {
              headers: {
                'Authorization': "Bearer " + (local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token)
              }
            });

            _this9.drawPage.setCurrentTicketsUsdtCount(reward.data);

            _this9.drawPage.closeDrawLuckRewardInfo();
          })();
        }

        getUserTicketsUsdtInfo() {
          return _asyncToGenerator(function* () {
            var info = yield window.axios.get(drawLuckUrls.tickets_usdt, {
              headers: {
                'Authorization': "Bearer " + (local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token)
              }
            });
            return info;
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e843200fec310547e702a434404682c1db0ca826.js.map