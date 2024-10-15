import { _decorator, Component, Node } from "cc";
import { basePageModel } from "../common/basePageModel";
import { AxiosResponse } from "../login/loginModel";
import { GlobalConfig } from "../home/GlobalConfig";
import { drawView } from "./drawView";
import GlobalData from '../home/GloabalClass'
const { ccclass, property } = _decorator;

declare global {
  interface Window {
    axios: {
      post<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        data?: D,
        config?: any
      ): Promise<R>;
    };
    startCanvas: any;
    uxuyethereum: any;
    uxuyWalletConnect: any;

    bindUxuyWallet
    TON_CONNECT_UI

  }
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

    // if(this.tonConnectUI.connected) {
    //     //断开连接重新加载
    //     console.log("Disconnect for connection reload")
    //     await this.tonConnectUI.disconnect();
    // }
  }

  update(deltaTime: number) {}

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

  async initData(){
    const walletInfo = await this.getWalletInfo()
    if(walletInfo?.walletAddress){
      this.drawPage.setWalletInfo(walletInfo?.walletAddress)
    }
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
}
