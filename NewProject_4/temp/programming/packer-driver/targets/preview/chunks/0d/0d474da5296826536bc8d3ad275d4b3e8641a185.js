System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, basePageView, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, earnView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  function _reportPossibleCrUseOftaskListResponseType(extras) {
    _reporterNs.report("taskListResponseType", "../invite/inviteModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      basePageView = _unresolved_2.basePageView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7879v0fj1A5oAZI6DoP+2w", "earnView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("earnView", earnView = (_dec = ccclass('earnView'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class earnView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "social_prefab", _descriptor, this);

          _initializerDefineProperty(this, "daily_prefab", _descriptor2, this);

          _initializerDefineProperty(this, "social_parent", _descriptor3, this);

          _initializerDefineProperty(this, "daily_parent", _descriptor4, this);
        }

        start() {}

        initTaskNode(info) {
          info.data.checkInList.forEach(() => {
            this.setCheckTaskNode();
          });
          info.data.taskModelResponses.forEach(taskList => {
            if (taskList.taskModelName === 'Social tasks') {
              this.initSocialTaskNode();
            }

            if (taskList.taskModelName === 'Daily tasks') {
              this.initDailyTaskNode();
            }
          });
        }

        initSocialTaskNode() {
          var child = instantiate(this.social_prefab);
          this.social_parent.addChild(child);
        }

        initDailyTaskNode() {
          var child = instantiate(this.daily_prefab);
          this.daily_parent.addChild(child);
        }

        clickDailyOrSocialTaskNode() {}

        clickCheckTaskNode() {}

        setCheckTaskNode() {}

        changeCheckTaskState() {}

        changeDailyOrSocialTaskState() {}

        updateTaskState(type, info) {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "social_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "daily_prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "social_parent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "daily_parent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d474da5296826536bc8d3ad275d4b3e8641a185.js.map