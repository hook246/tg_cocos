import { log, Node } from "cc";
//import { network, WalletResponse } from "../../model/RequestData";
//import { modelMgr } from "../App";
//import { catCfgD } from "./DataStruct";

export class GlobalConfig {
    static _instance: GlobalConfig;
    /**
     * 保存项目运行时状态
     */

    isProduction: boolean = false

    jsonData: {};
    public hasLogin: boolean = false;
    hasInitGame: boolean = false;

    hasJsonsLoad: boolean = false;
    haSelect: boolean;
    currentChatTimes: number = 0

    public nickName = "";
    public playername = "";
    public userId = "";

    testTools: boolean = false;
    token: any;
    //walletResponse: WalletResponse;
    static get instance() {
        if (this._instance) {
            return this._instance;
        }

    this._instance = new GlobalConfig();
        this._instance.start();
       this._instance.nickName = this._instance.playername = this._instance.userId = "jack13";
        return this._instance;
    }
    start() {
        this.jsonData = {
            "userId": ""
        };
    }
    getGlobalData(key: string) {
        return this.jsonData[key];
    }
    setGlobalData(key: string, value: any) {
        this.jsonData[key] = value;
    }
    
}