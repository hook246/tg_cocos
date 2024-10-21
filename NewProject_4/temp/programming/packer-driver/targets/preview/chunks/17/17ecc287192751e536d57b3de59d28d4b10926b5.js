System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, executeInEditMode, property, SpriteStandard;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14523eB6X9M15f4bDozRQdQ", "SpriteStandard", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'director']);

      ({
        ccclass,
        executeInEditMode,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = SpriteStandard
       * DateTime = Sun Aug 21 2022 15:59:37 GMT+0800 (中国标准时间)
       * Author = leehong
       * FileBasename = SpriteStandard.ts
       * FileBasenameNoExtension = SpriteStandard
       * URL = db://assets/00SpriteStandard/SpriteStandard.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("SpriteStandard", SpriteStandard = (_dec = ccclass('SpriteStandard'), _dec(_class = executeInEditMode(_class = class SpriteStandard extends Component {
        start() {}

        onClick() {
          director.loadScene("Main");
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17ecc287192751e536d57b3de59d28d4b10926b5.js.map