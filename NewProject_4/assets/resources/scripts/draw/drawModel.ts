import { _decorator, Component, Node } from "cc";
import { basePageModel } from "../common/basePageModel";
import { AxiosResponse } from "../login/loginModel";
import { GlobalConfig } from "../home/GlobalConfig";
import { drawView, QueryDrawRespDTO, QueryDrawRespDTOData } from "./drawView";
import GlobalData from '../home/GloabalClass'
import { PromiseUtils } from "../common/PromiseUtils";
const { ccclass, property } = _decorator;

const local = false
const local_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpblR5cGUiOiJQQVJUSUNMRSIsInVzZXJJZCI6IjE4MjgwMjA3NzY3NzU4NDc5MzYiLCJpYXQiOjE3Mjg5ODgxNDV9.qhV94PwKEKOJI1CtuLpLCqtJq78MOB-6AuHexqRvYTg'

export interface ticketsUsdt {
  data:{
    "tiket": number,
    "usdt": number
  }
}

declare global {
  interface Window {
    axios: {
      post<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        data?: D,
        config?: any
      ): Promise<R>;
      get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: any): Promise<R>;
    };
    startCanvas: any;
    uxuyethereum: any;
    uxuyWalletConnect: any;

    bindUxuyWallet
    TON_CONNECT_UI

  }
}

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

export const drawLuckUrls = {
  claim: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/claim" : "https://api.infinitytest.cc/hall/api/draw/claim",
  config: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/config":
    "https://api.infinitytest.cc/hall/api/draw/config",
  info: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/info":
    "https://api.infinitytest.cc/hall/api/draw/info",
  join:GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/draw/join":
  "https://api.infinitytest.cc/hall/api/draw/join",
  tickets_usdt: GlobalData.isProduction ? "https://api.infinityg.ai/hall/api/user/info":
  "https://api.infinitytest.cc/hall/api/user/info",
}

export const walletUrls = {
  bindWallet: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/user/info/edit/bindWallet" : "https://api.infinitytest.cc/api/v1/user/info/edit/bindWallet",
  unbindWallet: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/user/info/edit/unbindWallet":
    "https://api.infinitytest.cc/api/v1/user/info/edit/unbindWallet",
  queryBindWallet: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/user/info/queryBindWallet":
    "https://api.infinitytest.cc/api/v1/user/info/queryBindWallet",
};

export interface BindWalletData {
  walletAddress: string;
  walletChain: string;
}

export interface BindWalletResponse {
  code: string;
  message: string;
}

export interface UnbindWalletData {}

export interface UnbindWalletResponse {
  code: string;
  message: string;
}

export interface QueryBindWalletData {}

export interface QueryBindWalletResponse {
  code: string;
  data: {
    walletAddress: string;
    walletChain: string;
  };
  message: string;
}

@ccclass("drawModel")
export class drawModel extends basePageModel {
  drawPage: drawView

  account;
  tonConnectUI;

  timer_add = 0

  async start() {
    window.bindUxuyWallet = this.bindUxuyWallet
    this.drawPage = this.view.getComponent(drawView)

    console.log("INIT the tonconnect ", this.tonConnectUI);
    //提供一个manifest的json文件记录一些标题图标等数据用于UI连接时的展示
    const manifest = "https://catoss.s3.ap-southeast-1.amazonaws.com/telegram/manifest.json";
    console.log(manifest);
    //获得TON_CONNECT_UI的实例
    this.tonConnectUI = new window.TON_CONNECT_UI.TonConnectUI({
      manifestUrl: manifest,
      uiPreferences: {
        //这里可以配置主题
        // theme: TON_CONNECT_UI.THEME.DARK,
      },
    });

    window['searchConfig'] = this.searchConfig
    window['getDrawLuckInfo'] = this.getDrawLuckInfo
    window['joinDrawLucy'] = this.joinDrawLucy
    window['usdtInfo'] = this.getUserTicketsUsdtInfo
    //this.claimReward
    // if(this.tonConnectUI.connected) {
    //     //断开连接重新加载
    //     console.log("Disconnect for connection reload")
    //     await this.tonConnectUI.disconnect();
    // }
  }
  
  async setTimerCount(){
    for(let index = Math.round(this.drawPage.drawLuckyInfo.drawTime / 1000); index >= 0; index--){
      await PromiseUtils.wait(1000)
      const current_time = this.formatTimestamp(index)
      this.drawPage.timer.string = current_time
      if(index <= 0){
        const drawLuckyInfo = await this.getDrawLuckInfo()
        this.drawPage.setDrawLuckInfo(drawLuckyInfo.data.data)
        this.drawPage.showDrawLuckRewardInfo(drawLuckyInfo.data.data)
        this.drawPage.setDrawLuckInfo(drawLuckyInfo.data.data)
        if(Number(this.drawPage.tickets.string) < this.drawPage.cost_tickets){
          this.drawPage.setJoinBtnUseAble(false)
          this.drawPage.setJoinTips(Number(this.drawPage.tickets.string) - this.drawPage.cost_tickets)
        }else{
          this.drawPage.setJoinBtnUseAble(true)
        }
        await this.setTimerCount()
      }else if(index <= 5 && index > 0){
        this.drawPage.setJoinBtnUseAble(false)
      }
    }
  }

  async update(deltaTime: number) {

  }

  async bindTonWallet() {
    if(this.tonConnectUI.connected){
      await this.tonConnectUI.disconnect();
    }
    this.tonConnectUI.onStatusChange(async (walletAndwalletInfo) => {
      //连接状态改变监听事件
      if(GlobalData.wallet_address){
        return
      }
      console.log("change : ", walletAndwalletInfo);
      this.account = walletAndwalletInfo;
      this.drawPage.controlConnectWalletBtnsVisible(false)
      this.drawPage.home.getChildByName('tap_btns').active = true
      const walletInfo = await window.axios.post<BindWalletResponse>(
        walletUrls.bindWallet,{
          walletAddress: walletAndwalletInfo.account.address,
          walletChain: walletAndwalletInfo.account.chain,
        },{
          headers: { 
              'Authorization': `Bearer ${GlobalData.token}`
            }
        }
      );
      this.drawPage.setWalletInfo(walletAndwalletInfo.account.address)
    });
    await this.tonConnectUI.openModal();
  }

    //设置当前的倒计时
    formatTimestamp(timestamp: number): string {
      let result = '';
      const days = Math.floor(timestamp / (3600 * 24));
      const hours = Math.floor((timestamp % (3600 * 24)) / 3600);
      const minutes = Math.floor((timestamp % 3600) / 60);
      const seconds = timestamp % 60;
    
      if (days > 0) {
        result += `${days} 天 `;
      }
      if (hours > 0 || result.length > 0) { // 如果已经有天数，即使小时数为0也显示
        result += `${hours} 小时 `;
      }
      if (minutes > 0 || result.length > 0) { // 如果已经有天数或小时数，即使分钟数为0也显示
        result += `${minutes} 分钟 `;
      }
      if (seconds > 0 || result.length > 0) { // 如果已经有天数、小时数或分钟数，即使秒数为0也显示
        result += `${seconds} 秒`;
      }
    
      return result.trim(); // 移除字符串两端的空格
    }

  async initData(){
    const walletInfo = await this.getWalletInfo()
    if(walletInfo?.walletAddress){
      this.drawPage.setWalletInfo(walletInfo?.walletAddress)
    }
    const config = await this.searchConfig()
    this.drawPage.cost_tickets = config.data.data.ticketCost
    const ticketsInfo = await this.getUserTicketsUsdtInfo()
    this.drawPage.setJoinTips(ticketsInfo.data.data.tiket - config.data.data.ticketCost)
    this.drawPage.setCurrentTicketsUsdtCount(ticketsInfo.data)
    const drawLuckyData = await this.getDrawLuckInfo()
    if(drawLuckyData.data.data.join){
      this.drawPage.setJoinBtnUseAble(false)
    }else{
      this.drawPage.setJoinBtnUseAble(true)
    }
    this.drawPage.setDrawLuckInfo(drawLuckyData.data.data)
    this.setTimerCount()
  }

  async bindUxuyWallet() {
    try {
      this.drawPage.controlConnectWalletBtnsVisible(false)
      this.drawPage.home.getChildByName('tap_btns').active = true
      let walletAddress
      let walletChain
      if(window.uxuyethereum._account.address){
        walletAddress = window.uxuyethereum._account.address
        walletChain = window.uxuyethereum._account.chainName
      }else{
        await window.uxuyWalletConnect()
        walletAddress = window.uxuyethereum._account.address
        walletChain = window.uxuyethereum._account.chainName
      }
      console.log('========',walletAddress, walletChain)
      const walletInfo = await window.axios.post<BindWalletResponse>(
        walletUrls.bindWallet,{
          walletAddress: walletAddress,
          walletChain: walletChain,
        },{
          headers: { 
              'Authorization': `Bearer ${GlobalData.token}`
            }
        }
      );
      this.drawPage.setWalletInfo(walletAddress)

    } catch (error) {
      
    }
  }

  async unBindWallet() {
    const walletInfo = await window.axios.post<UnbindWalletResponse>(
      walletUrls.unbindWallet
    ,{},{
        headers: { 
              'Authorization': `Bearer ${GlobalData.token}`
          }
    });
    this.drawPage.controlUnbindBtnVisible(false)
    this.drawPage.controlBindBtnVisible(true)
    GlobalData.wallet_address = null
    return walletInfo?.data?.code;
  }

  async getWalletInfo() {
    const walletInfo = await window.axios.post<QueryBindWalletResponse>(
      walletUrls.queryBindWallet
    ,{},{
        headers: { 
              'Authorization': `Bearer ${GlobalData.token}`
          }
    });
    return walletInfo?.data?.data;
  }

  async copyAddress(){
    navigator.clipboard.writeText(this.drawPage.address.string).then(function() {
      window.Telegram.WebApp.showPopup({
        title: 'Copy Success', // 弹出窗口的标题
        message: 'copy address success！', // 弹出窗口的消息内容
        buttons: [
          { id: 'btn2', text: 'Button 2', type: 'ok' }, // 'type' 可以是 'ok', 'close', 'cancel', 'default', 'destructive'
          { id: 'btn3', text: 'Button 3', type: 'cancel' }
        ]
      }, (buttonId) => {
        // 弹出窗口关闭时的回调函数
        if (buttonId) {
          console.log('User pressed button:', buttonId);
        } else {
          console.log('Popup was closed without pressing a button');
        }
      });
    }).catch(err => {
      window.Telegram.WebApp.showPopup({
        title: 'Copy failed', // 弹出窗口的标题
        message: 'copy address failed', // 弹出窗口的消息内容
        buttons: [
          { id: 'btn2', text: 'Button 2', type: 'ok' }, // 'type' 可以是 'ok', 'close', 'cancel', 'default', 'destructive'
          { id: 'btn3', text: 'Button 3', type: 'cancel' }
        ]
      }, (buttonId) => {
        // 弹出窗口关闭时的回调函数
        if (buttonId) {
          console.log('User pressed button:', buttonId);
        } else {
          console.log('Popup was closed without pressing a button');
        }
      });
    });
  }

  async searchConfig(){
    const config = await window.axios.get(drawLuckUrls.config, {
      headers: { 
          'Authorization': `Bearer ${local ? local_token : GlobalData.token}`
        }
    })
    this.drawPage.setTicketsCost(config.data.data.ticketCost)
    return config
  }

  async getDrawLuckInfo(){
    const drawInfo = await window.axios.get<QueryDrawRespDTOData>(drawLuckUrls.info, {
      headers: { 
          'Authorization': `Bearer ${local ? local_token : GlobalData.token}`
        }
    })
    console.log('=====', drawInfo)
    return drawInfo
  } 

  async joinDrawLucy(){
    try {
      const join = await window.axios.get(drawLuckUrls.join, {
        headers: { 
            'Authorization': `Bearer ${local ? local_token : GlobalData.token}`
          }
      })
      this.drawPage.join_count.string = join.data.data.count
      this.drawPage.tickets.string = join.data.data.tiket
      this.drawPage.setJoinBtnUseAble(false)
      window.Telegram.WebApp.showAlert("join success!", () => {
        console.log("");
      });
    } catch (error) {
      
    }

  }

  async claimReward(drawId: string){
    const reward = await window.axios.post<ticketsUsdt>(drawLuckUrls.claim,{
       "drawId": `${this.drawPage.drawLuckyInfo.openDrawId}`
    }, {
      headers: {
          'Authorization': `Bearer ${local ? local_token : GlobalData.token}`
        }
    })
    this.drawPage.setCurrentTicketsUsdtCount(reward.data)
    this.drawPage.closeDrawLuckRewardInfo()
    window.Telegram.WebApp.showAlert("claim success!", () => {
      console.log("");
    });
  }

  async getUserTicketsUsdtInfo(){
    const info = await window.axios.get<ticketsUsdt>(drawLuckUrls.tickets_usdt, {
      headers: {
          'Authorization': `Bearer ${local ? local_token : GlobalData.token}`
        }
    })
    return info
  }
}
