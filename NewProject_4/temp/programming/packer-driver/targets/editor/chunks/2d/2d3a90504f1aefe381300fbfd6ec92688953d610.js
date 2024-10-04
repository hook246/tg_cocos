System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventTarget, EventDispatcher, _crd, ccclass, property, event_target;

  _export("EventDispatcher", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b9ab69vlVLsYC9JmQrIy1n", "EventDispatcher", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['EventTarget']);

      ({
        ccclass,
        property
      } = _decorator);
      event_target = new EventTarget();
      /**
       * 自定义事件
       * @author 一朵毛山
       * Construct 
       */

      _export("EventDispatcher", EventDispatcher = class EventDispatcher {
        /**
         * 单利对象
         */

        /**
         * 更新面板分数
         */

        /**
         * 打开游戏结束界面
         */

        /**
         * 开始游戏(在玩一次)
         */

        /**
         * 获取单利
         * @returns 
         */
        static get_instance() {
          if (!EventDispatcher.instance) {
            EventDispatcher.instance = new EventDispatcher();
          }

          return EventDispatcher.instance;
        }
        /**
         * 获取event
         */


        get target() {
          return event_target;
        }

      });

      EventDispatcher.instance = void 0;
      EventDispatcher.UPDATE_SCORE_LABEL = "UPDATE_SCORE_LABEL";
      EventDispatcher.SHOW_OVER_WINDOW = "SHOW_OVER_WINDOW";
      EventDispatcher.START_GAME = "START_GAME";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d3a90504f1aefe381300fbfd6ec92688953d610.js.map