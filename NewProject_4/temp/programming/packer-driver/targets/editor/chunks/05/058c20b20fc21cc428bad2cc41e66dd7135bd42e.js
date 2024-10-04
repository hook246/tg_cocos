System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, taskNodeInfo;

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "./earnView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04d334+W6NC/Ikq26/daJkd", "taskNodeInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("taskNodeInfo", taskNodeInfo = (_dec = ccclass('taskNodeInfo'), _dec(_class = class taskNodeInfo extends Component {
        constructor(...args) {
          super(...args);
          this.taskInfo = void 0;
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=058c20b20fc21cc428bad2cc41e66dd7135bd42e.js.map