import { _decorator, Component, Node } from "cc";
import { basePageModel } from "../common/basePageModel";
import { loginView } from "./loginView";
import { GlobalConfig } from "../home/GlobalConfig";
import _ from "lodash";
import GlobalData from "../home/GloabalClass";
import { drawModel } from "../draw/drawModel";
import { discoverModel } from "../discover/discoverModel";
import { homeView } from "../home/homeView";
import { inviteModel, taskUrls } from "../invite/inviteModel";
import { earnView } from "../earn/earnView";
import { earnModel } from "../earn/earnModel";
import { profileModel } from "../profile/profileModel";
const { ccclass, property } = _decorator;

const init_id = "query_id=AAF7JpQPAwAAAHsmlA88_ipa&user=%7B%22id%22%3A6703818363%2C%22first_name%22%3A%22fei%22%2C%22last_name%22%3A%22wang%22%2C%22username%22%3A%22dfgsadsggfdn%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1728999656&hash=c6805e2ff4528066767547caa44115df7f452a54a59bf326841c39e8b60e2fa6";
const id = 6703818363
const macSHA_secret =
  "0d42f108fb7d74f3735c61b1ecdeb8662bef043f2afed10fb3cd3aba3007e0ff";

const startWithSrc = 'srcTG'

const pathMaps = [
  'funking',
]

export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

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
    Telegram: any;
    CryptoJS: any;
  }
}

export enum walletType {}

export enum walletChain {}

export const trackUrl = GlobalData.isProduction ? 'https://api.infinityg.ai/hall/api/telegram/user/src/add' : 'https://api.infinitytest.cc/hall/api/telegram/user/src/add'

export const loginUrls = {
  firstLoginCheck: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/user/auth/first_login" : "https://api.infinitytest.cc/api/v1/user/auth/first_login",
  tgLogin: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/user/auth/tg_login/webapp" : "https://api.infinitytest.cc/api/v1/user/auth/tg_login/webapp",
  pwdLogin: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/user/auth/pwd_login" : "https://api.infinitytest.cc/api/v1/user/auth/pwd_login",
};

export const twitterOauth = {
  bindTwitter: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/oauth/getTwitterCode" : "https://api.infinitytest.cc/api/v1/oauth/getTwitterCode",
  unBindTwitter: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/oauth/unboundTwitter" : "https://api.infinitytest.cc/api/v1/oauth/unboundTwitter",
};

export interface bindTwitterResponse {
  code: string;
  data: {
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
    scope: string;
    tokenType: string;
  };
  message: string;
}

export interface firstLoginCheckDataType {
  id: number;
}

export interface firstLoginCheckResponseType {
  code: string;
  data: {
    firstLogin: true;
  };
  message: string;
}

export interface tgLoginDataType {
  initData: string;
  inviteCode: string;
  loginChannel: string;
}

export interface tgLoginResponseType {
  code: string;
  data: {
    avatar: string;
    email: string;
    expiration: number;
    gamePoint: number;
    inviteCode: string;
    isNewUser: true;
    isSetPwd: true;
    token: string;
    totalPoint: 0;
    userId: number;
    userName: string;
    walletAddress: string;
    walletChain: "ETH";
    walletType: "METAMASK";
  };
  message: string;
}

export interface pwdLoginDataType {
  accountUserName: string;
  password: string;
  initData?: string;
  inviteCode?: string;
  loginChannel?: "GAME_LOBBY";
}

export interface pwdLoginResponseType {
  code: string;
  data: {
    totalPoint: any;
    avatar: string;
    email: string;
    expiration: number;
    gamePoint: number;
    inviteCode: string;
    isNewUser: true;
    isSetPwd: true;
    token: string;
    userId: number;
    userName: string;
    walletAddress: string;
    walletChain: "ETH";
    walletType: "METAMASK";
  };
  message: string;
}

@ccclass("loginModel")
export class loginModel extends basePageModel {
  @property(Boolean)
  isUseMock: boolean = false;

  @property(Node)
  profile: Node = null;

  @property(Node)
  discover: Node = null;

  @property(Node)
  invite: Node = null;

  @property(Node)
  earn: Node = null;

  @property(Node)
  draw: Node = null;

  @property(Node)
  home: Node = null;

  loginView: loginView;
  async start() {
    this.loginView = this.view.getComponent(loginView);
    const tgId = new URLSearchParams(window.location.search).get("tgId");
    const code = new URLSearchParams(window.location.search).get("code");
    const state = new URLSearchParams(window.location.search).get("state");

    if (this.isUseMock) {
    }
    this.view.setPosition(0, 0);
    const isFirst = await this.checkLoginFirst();
    if (isFirst) {
      //展示登录页面
      this.loginView.controlLoading(false);
      this.loginView.controlLoginTypeBtnsVisible(true);
    } else {
      await this.tgLogin();
    }
  }

  update(deltaTime: number) {}

  async trackPath(path: string){
    const track = await window.axios.post<any>(
      trackUrl,
      {
        tgId: window.Telegram.WebApp.initDataUnsafe.user.id,
        source: path,
        name: window.Telegram.WebApp.initDataUnsafe.user.username
      }
    );
  }

  async checkLoginFirst() {
    try {
      const isFirstLogin = await window.axios.post<firstLoginCheckResponseType>(
        loginUrls.firstLoginCheck,
        {
          id: window?.Telegram?.WebApp?.initDataUnsafe?.user?.id ? window?.Telegram?.WebApp?.initDataUnsafe?.user?.id : id,
        }
      );
      return isFirstLogin.data.data.firstLogin;
    } catch (error) {
      console.log(error);
    }
  }

  async bindTwitter(initData, code, state) {
    try {
        //登录成功
        const bindData = await window.axios.post<bindTwitterResponse>(
          twitterOauth.bindTwitter,
          {
            code: code,
            state: state,
          },{
            headers: { 
                  'Authorization': `Bearer ${initData}`
            }
        })
    } catch (error) {
      console.log(error);
    }
  }

  async tgLogin() {
    try {
      const gameInitData = new URLSearchParams(window.location.search).get("gameData");
      const inviteCode = new URLSearchParams(window.location.search).get(
        "tgWebAppStartParam"
      );
      console.log("initData", window?.Telegram?.WebApp?.initData);
      console.log('gameData',gameInitData)
      const loginData = await window.axios.post<tgLoginResponseType>(
        loginUrls.tgLogin,
        {
          initData: window?.Telegram?.WebApp?.initData
            ? window?.Telegram?.WebApp?.initData : gameInitData ? window.atob(gameInitData)
            : init_id,
          // photoUrl: `${
          //   window.Telegram.WebApp.initDataUnsafe.user.photo_url ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ''
          // }`,
          inviteCode: !inviteCode?.startsWith(startWithSrc) && pathMaps.indexOf(inviteCode) < 0 && inviteCode
            ? JSON.parse(window.atob(inviteCode))?.inviteCode
            : "",
          //!tg登录来源
          source: inviteCode?.startsWith(startWithSrc) ? inviteCode?.substring(startWithSrc.length) : pathMaps?.indexOf(inviteCode) >= 0 ? inviteCode : ''
        }
      );
      console.log("=========", loginData);
      if (loginData?.data?.data?.token) {
        //登录成功
        this.trackSrc()
        GlobalData.token = loginData?.data?.data?.token;
        GlobalData.inviteCode = loginData?.data?.data?.inviteCode;
        GlobalData.username = loginData.data.data.userName
        GlobalData.avatar = loginData.data.data.avatar
        this.home.getComponent(homeView).setProfile(GlobalData.avatar)
        this.home.getComponent(homeView).game_point.string = String(
          loginData.data.data.totalPoint
        );
        this.loginView.controlLoading(true);
        this.loginView.routeToHome();
        await this.initOtherModel();
        this.scheduleOnce(()=>{
          this.node.setPosition(-5000 ,0)
          this.discover.setPosition(0, 0)
          this.loginView.controlLoading(false);
          console.log('=====close loading')
        }, 3)

        const path = new URLSearchParams(window.location.search).get(
          "tgWebAppStartParam"
        );
        if(pathMaps?.indexOf(path) >= 0){
          this.trackPath(path)
        }
        if(path?.startsWith(startWithSrc)){
          this.trackPath(path.substring(startWithSrc.length))
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  trackSrc(){
    //object 转字符串
    // {
    //   "src": "tiktok",
    //   "id": "1334",
    //   "count": "100",
    // }
    // const src_str = JSON.stringify(
    //   {
    //     "src": "tiktok",
    //     "id": "1334",
    //     "count": "100",
    //   }
    // )
    //然后window.btoa(src_str)
    //拼在https://t.me/infinity_ground_bot/infinity_ground_app?startapp=src_str
    // const srcData = new URLSearchParams(window.location.search).get(
    //   "tgWebAppStartParam"
    // );
    // const srcObject = srcData && JSON.parse(window.atob(srcData))
    //console.log('srcObject===>', srcObject)
  }

  async initOtherModel() {
    await this.draw.getComponent(drawModel).initData();
    await this.discover.getComponent(discoverModel).initData();
    await this.invite.getComponent(inviteModel).initData();
    this.earn.getComponent(earnModel).initData();
    this.profile.getComponent(profileModel).initData();
  }
  async veteranLogin() {
    if (this.loginView.checkVeteranInput()) {
      this.loginView.showVeteranError(true);
    }

    try {
      const inviteCode = new URLSearchParams(window.location.search).get(
        "tgWebAppStartParam"
      );
      
      const gameInitData = new URLSearchParams(window.location.search).get("gameData");
      console.log("initData", window?.Telegram?.WebApp?.initData);
      console.log('gameData',gameInitData)
      const loginData = await window.axios.post<pwdLoginResponseType>(
        loginUrls.pwdLogin,
        {
          accountUserName: this.loginView.getAccountInputString(),
          initData: window?.Telegram?.WebApp?.initData
            ? window?.Telegram?.WebApp?.initData : gameInitData ? window.atob(gameInitData)
            : init_id,
          loginChannel: "GAME_LOBBY",
          password: this.loginView.getPasswordInputString(),
          inviteCode: inviteCode
            ? JSON.parse(window.atob(inviteCode)).inviteCode
            : "",
          // photoUrl: `${
          //   window.Telegram.WebApp.initDataUnsafe.user.photo_url ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ''
          // }`,
          //username: "",
        }
      );

      if (loginData?.data?.data?.token) {
        this.trackSrc()
        GlobalData.token = loginData?.data?.data?.token;
        GlobalData.inviteCode = loginData?.data?.data?.inviteCode;
        GlobalData.username = loginData.data.data.userName
        GlobalData.avatar = loginData.data.data.avatar
        this.home.getComponent(homeView).setProfile(GlobalData.avatar)
        this.home.getComponent(homeView).game_point.string = String(
          loginData.data?.data?.totalPoint
        );
        this.loginView.controlLoading(true);
        this.loginView.routeToHome();
        await this.initOtherModel();
        this.scheduleOnce(()=>{
          this.node.setPosition(-5000 ,0)
          this.discover.setPosition(0, 0)
          this.loginView.controlLoading(false);
          console.log('=====close loading')
        }, 3)
      }
    } catch (error) {
      console.log(error);
    }
  }

  
}
