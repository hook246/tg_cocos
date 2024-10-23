System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, basePageModel, drawView, GlobalData, PromiseUtils, _dec, _class, _crd, ccclass, property, local, local_token, drawLuckUrls, walletUrls, drawModel;

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

  function _reportPossibleCrUseOfPromiseUtils(extras) {
    _reporterNs.report("PromiseUtils", "../common/PromiseUtils", _context.meta, extras);
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
    }, function (_unresolved_5) {
      PromiseUtils = _unresolved_5.PromiseUtils;
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
        constructor(...args) {
          super(...args);
          this.drawPage = void 0;
          this.account = void 0;
          this.tonConnectUI = void 0;
          this.timer_add = 0;
        }

        async start() {
          window.bindUxuyWallet = this.bindUxuyWallet;
          this.drawPage = this.view.getComponent(_crd && drawView === void 0 ? (_reportPossibleCrUseOfdrawView({
            error: Error()
          }), drawView) : drawView);
          console.log("INIT the tonconnect ", this.tonConnectUI); //提供一个manifest的json文件记录一些标题图标等数据用于UI连接时的展示

          const manifest = "https://catoss.s3.ap-southeast-1.amazonaws.com/telegram/manifest.json";
          console.log(manifest); //获得TON_CONNECT_UI的实例

          this.tonConnectUI = new window.TON_CONNECT_UI.TonConnectUI({
            manifestUrl: manifest,
            uiPreferences: {//这里可以配置主题
              // theme: TON_CONNECT_UI.THEME.DARK,
            }
          });
          window['searchConfig'] = this.searchConfig;
          window['getDrawLuckInfo'] = this.getDrawLuckInfo;
          window['joinDrawLucy'] = this.joinDrawLucy;
          window['usdtInfo'] = this.getUserTicketsUsdtInfo; //this.claimReward
          // if(this.tonConnectUI.connected) {
          //     //断开连接重新加载
          //     console.log("Disconnect for connection reload")
          //     await this.tonConnectUI.disconnect();
          // }
        }

        async setTimerCount() {
          for (let index = Math.round(this.drawPage.drawLuckyInfo.drawTime / 1000); index >= 0; index--) {
            await (_crd && PromiseUtils === void 0 ? (_reportPossibleCrUseOfPromiseUtils({
              error: Error()
            }), PromiseUtils) : PromiseUtils).wait(1000);
            const current_time = this.formatTimestamp(index);
            this.drawPage.timer.string = current_time;

            if (index <= 0) {
              const drawLuckyInfo = await this.getDrawLuckInfo();
              this.drawPage.setDrawLuckInfo(drawLuckyInfo.data.data);
              this.drawPage.showDrawLuckRewardInfo(drawLuckyInfo.data.data);
              this.drawPage.setDrawLuckInfo(drawLuckyInfo.data.data);

              if (Number(this.drawPage.tickets.string) < this.drawPage.cost_tickets) {
                this.drawPage.setJoinBtnUseAble(false);
                this.drawPage.setJoinTips(Number(this.drawPage.tickets.string) - this.drawPage.cost_tickets);
              } else {
                this.drawPage.setJoinBtnUseAble(true);
              }

              await this.setTimerCount();
            } else if (index <= 5 && index > 0) {
              this.drawPage.setJoinBtnUseAble(false);
            }
          }
        }

        async update(deltaTime) {}

        async bindTonWallet() {
          if (this.tonConnectUI.connected) {
            await this.tonConnectUI.disconnect();
          }

          this.tonConnectUI.onStatusChange(async walletAndwalletInfo => {
            //连接状态改变监听事件
            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).wallet_address) {
              return;
            }

            console.log("change : ", walletAndwalletInfo);
            this.account = walletAndwalletInfo;
            this.drawPage.controlConnectWalletBtnsVisible(false);
            this.drawPage.home.getChildByName('tap_btns').active = true;
            const walletInfo = await window.axios.post(walletUrls.bindWallet, {
              walletAddress: walletAndwalletInfo.account.address,
              walletChain: walletAndwalletInfo.account.chain
            }, {
              headers: {
                'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
            this.drawPage.setWalletInfo(walletAndwalletInfo.account.address);
          });
          await this.tonConnectUI.openModal();
        } //设置当前的倒计时


        formatTimestamp(timestamp) {
          let result = '';
          const days = Math.floor(timestamp / (3600 * 24));
          const hours = Math.floor(timestamp % (3600 * 24) / 3600);
          const minutes = Math.floor(timestamp % 3600 / 60);
          const seconds = timestamp % 60;

          if (days > 0) {
            result += `${days} 天 `;
          }

          if (hours > 0 || result.length > 0) {
            // 如果已经有天数，即使小时数为0也显示
            result += `${hours} 小时 `;
          }

          if (minutes > 0 || result.length > 0) {
            // 如果已经有天数或小时数，即使分钟数为0也显示
            result += `${minutes} 分钟 `;
          }

          if (seconds > 0 || result.length > 0) {
            // 如果已经有天数、小时数或分钟数，即使秒数为0也显示
            result += `${seconds} 秒`;
          }

          return result.trim(); // 移除字符串两端的空格
        }

        async initData() {
          const walletInfo = await this.getWalletInfo();

          if (walletInfo != null && walletInfo.walletAddress) {
            this.drawPage.setWalletInfo(walletInfo == null ? void 0 : walletInfo.walletAddress);
          }

          const config = await this.searchConfig();
          this.drawPage.cost_tickets = config.data.data.ticketCost;
          const ticketsInfo = await this.getUserTicketsUsdtInfo();
          this.drawPage.setJoinTips(ticketsInfo.data.data.tiket - config.data.data.ticketCost);
          this.drawPage.setCurrentTicketsUsdtCount(ticketsInfo.data);
          const drawLuckyData = await this.getDrawLuckInfo();

          if (drawLuckyData.data.data.join) {
            this.drawPage.setJoinBtnUseAble(false);
          } else {
            this.drawPage.setJoinBtnUseAble(true);
          }

          this.drawPage.setDrawLuckInfo(drawLuckyData.data.data);
          this.setTimerCount();
        }

        async bindUxuyWallet() {
          try {
            this.drawPage.controlConnectWalletBtnsVisible(false);
            this.drawPage.home.getChildByName('tap_btns').active = true;
            let walletAddress;
            let walletChain;

            if (window.uxuyethereum._account.address) {
              walletAddress = window.uxuyethereum._account.address;
              walletChain = window.uxuyethereum._account.chainName;
            } else {
              await window.uxuyWalletConnect();
              walletAddress = window.uxuyethereum._account.address;
              walletChain = window.uxuyethereum._account.chainName;
            }

            console.log('========', walletAddress, walletChain);
            const walletInfo = await window.axios.post(walletUrls.bindWallet, {
              walletAddress: walletAddress,
              walletChain: walletChain
            }, {
              headers: {
                'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
            this.drawPage.setWalletInfo(walletAddress);
          } catch (error) {}
        }

        async unBindWallet() {
          var _walletInfo$data;

          const walletInfo = await window.axios.post(walletUrls.unbindWallet, {}, {
            headers: {
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          this.drawPage.controlUnbindBtnVisible(false);
          this.drawPage.controlBindBtnVisible(true);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).wallet_address = null;
          return walletInfo == null ? void 0 : (_walletInfo$data = walletInfo.data) == null ? void 0 : _walletInfo$data.code;
        }

        async getWalletInfo() {
          var _walletInfo$data2;

          const walletInfo = await window.axios.post(walletUrls.queryBindWallet, {}, {
            headers: {
              'Authorization': `Bearer ${(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          return walletInfo == null ? void 0 : (_walletInfo$data2 = walletInfo.data) == null ? void 0 : _walletInfo$data2.data;
        }

        async copyAddress() {
          navigator.clipboard.writeText(this.drawPage.address.string).then(function () {
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
        }

        async searchConfig() {
          const config = await window.axios.get(drawLuckUrls.config, {
            headers: {
              'Authorization': `Bearer ${local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          this.drawPage.setTicketsCost(config.data.data.ticketCost);
          return config;
        }

        async getDrawLuckInfo() {
          const drawInfo = await window.axios.get(drawLuckUrls.info, {
            headers: {
              'Authorization': `Bearer ${local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          console.log('=====', drawInfo);
          return drawInfo;
        }

        async joinDrawLucy() {
          try {
            const join = await window.axios.get(drawLuckUrls.join, {
              headers: {
                'Authorization': `Bearer ${local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).token}`
              }
            });
            this.drawPage.join_count.string = join.data.data.count;
            this.drawPage.tickets.string = join.data.data.tiket;
            this.drawPage.setJoinBtnUseAble(false);
            window.Telegram.WebApp.showAlert("join success!", () => {
              console.log("");
            });
          } catch (error) {}
        }

        async claimReward(drawId) {
          const reward = await window.axios.post(drawLuckUrls.claim, {
            "drawId": `${this.drawPage.drawLuckyInfo.openDrawId}`
          }, {
            headers: {
              'Authorization': `Bearer ${local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          this.drawPage.setCurrentTicketsUsdtCount(reward.data);
          this.drawPage.closeDrawLuckRewardInfo();
          window.Telegram.WebApp.showAlert("claim success!", () => {
            console.log("");
          });
        }

        async getUserTicketsUsdtInfo() {
          const info = await window.axios.get(drawLuckUrls.tickets_usdt, {
            headers: {
              'Authorization': `Bearer ${local ? local_token : (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).token}`
            }
          });
          return info;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3da364186a39990fd6db1dc662f33cb56c1df7f5.js.map