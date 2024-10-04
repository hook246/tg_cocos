System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GameData, _crd, ccclass, property;

  _export("GameData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fb90s8g1lNlLKudeixR6UY", "GameData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 游戏数据
       * @author 一朵毛山
       * Construct 
       */

      _export("GameData", GameData = class GameData {
        //0=没开始,1=游戏中,2=按下,3=弹起状态,4=游戏结束
        //本局得分
        //每次跳跃得分

        /**
         * 获取游戏状态
         * @returns 
         */
        static get_game_state() {
          return GameData.game_state;
        }
        /**
         * 设置游戏状态
         * @param value 
         */


        static set_game_state(value) {
          GameData.game_state = value;
        }
        /**
         * 重置数据,每次开始游戏调用
         */


        static reset_data() {
          GameData.game_state = 0;
          GameData.total_score = 0;
          GameData.step_score = 0;
        }
        /**
         * 计算最终得分,最终得分要根据上一步得分来计算(step_score*2)
         * @param score 
         * @returns 
         */


        static computed_step_score(score) {
          // 0 ,-1,1,2
          if (score == 0 || score == -1) {
            GameData.step_score = 0;
            return score;
          }

          if (score == 1) {
            GameData.step_score = 1;
            GameData.total_score += score;
            return score;
          }

          if (GameData.step_score == 0) {
            GameData.step_score = 1;
          }

          GameData.step_score = GameData.step_score * score;
          GameData.total_score += GameData.step_score;
          return GameData.step_score;
        }

        static record_history_score() {
          if (GameData.total_score > 0) {
            let history_score = localStorage.getItem("history_score");

            if (!history_score) {
              localStorage.setItem("history_score", GameData.total_score + "");
            } else {
              let hs = Number(history_score);

              if (hs < GameData.total_score) {
                localStorage.setItem("history_score", GameData.total_score + "");
              }
            }
          }
        }
        /**
         * 获取本局总分数
         * @returns 
         */


        static get_total_score() {
          return GameData.total_score;
        }

      });

      GameData.game_state = 0;
      GameData.total_score = 0;
      GameData.step_score = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39840473218ef5c681374e47d4ff93205147cd6c.js.map