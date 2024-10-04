System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GlobalConfig, _crd;

  _export("GlobalConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fbec2ULLMxOJolBU4NL2gJe", "GlobalConfig", undefined);

      __checkObsolete__(['log', 'Node']);

      //import { network, WalletResponse } from "../../model/RequestData";
      //import { modelMgr } from "../App";
      //import { catCfgD } from "./DataStruct";
      _export("GlobalConfig", GlobalConfig = class GlobalConfig {
        constructor() {
          /**
           * 保存项目运行时状态
           */
          this.isProduction = false;
          this.jsonData = void 0;
          this.hasLogin = false;
          this.hasInitGame = false;
          this.hasJsonsLoad = false;
          this.haSelect = void 0;
          this.currentChatTimes = 0;
          this.nickName = "";
          this.playername = "";
          this.userId = "";
          this.testTools = false;
        }

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

        getGlobalData(key) {
          return this.jsonData[key];
        }

        setGlobalData(key, value) {
          this.jsonData[key] = value;
        }

      });

      GlobalConfig._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35beffdde975b3e954db439a4c20d773d7255d40.js.map