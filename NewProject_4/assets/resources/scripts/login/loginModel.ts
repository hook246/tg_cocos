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

const init_id = "query_id=AAF7JpQPAwAAAHsmlA9TXysA&user=%7B%22id%22%3A6703818363%2C%22first_name%22%3A%22fei%22%2C%22last_name%22%3A%22wang%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1727930737&hash=925ce85d0e54a2b4efa6ee5c3ea3644e73318cb4b83f2111a2332645027bca30";
const macSHA_secret =
  "0d42f108fb7d74f3735c61b1ecdeb8662bef043f2afed10fb3cd3aba3007e0ff";

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

export const loginUrls = {
  firstLoginCheck: "https://api.infinitytest.cc/api/v1/user/auth/first_login",
  tgLogin: "https://api.infinitytest.cc/api/v1/user/auth/tg_login/webapp",
  pwdLogin: "https://api.infinitytest.cc/api/v1/user/auth/pwd_login",
};

export const twitterOauth = {
  bindTwitter: "https://api.infinitytest.cc/api/v1/oauth/getTwitterCode",
  unBindTwitter: "https://api.infinitytest.cc/api/v1/oauth/unboundTwitter",
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

  async checkLoginFirst() {
    try {
      const isFirstLogin = await window.axios.post<firstLoginCheckResponseType>(
        loginUrls.firstLoginCheck,
        {
          id: window.Telegram.WebApp.initDataUnsafe.user.id,
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
      const inviteCode = new URLSearchParams(window.location.search).get(
        "tgWebAppStartParam"
      );
      const loginData = await window.axios.post<tgLoginResponseType>(
        loginUrls.tgLogin,
        {
          initData: window?.Telegram?.WebApp?.initData
            ? window?.Telegram?.WebApp?.initData
            : init_id,
          // photoUrl: `${
          //   window.Telegram.WebApp.initDataUnsafe.user.photo_url ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ''
          // }`,
          inviteCode: inviteCode
            ? JSON.parse(window.atob(inviteCode)).inviteCode
            : "",
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
        this.loginView.routeToHome();
        await this.initOtherModel();
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
    const srcData = new URLSearchParams(window.location.search).get(
      "tgWebAppStartParam"
    );
    const srcObject = srcData && JSON.parse(window.atob(srcData))
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
      const loginData = await window.axios.post<pwdLoginResponseType>(
        loginUrls.pwdLogin,
        {
          accountUserName: this.loginView.getAccountInputString(),
          initData: window?.Telegram?.WebApp?.initData
            ? window?.Telegram?.WebApp?.initData
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
        GlobalData.token = loginData?.data?.data?.token;
        GlobalData.username = loginData.data.data.userName
        GlobalData.avatar = loginData.data.data.avatar
        this.loginView.routeToHome();
      }
    } catch (error) {
      console.log(error);
    }
  }

  
}
