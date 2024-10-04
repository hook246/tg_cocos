System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, basePageView, UIScrollSelectHorizontal, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, discoverView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbasePageView(extras) {
    _reporterNs.report("basePageView", "../common/basePageView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIScrollSelectHorizontal(extras) {
    _reporterNs.report("UIScrollSelectHorizontal", "./UIScrollSelectHorizontal", _context.meta, extras);
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
    }, function (_unresolved_3) {
      UIScrollSelectHorizontal = _unresolved_3.UIScrollSelectHorizontal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea5710/PvRIEKZu8FeAWJnG", "discoverView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("discoverView", discoverView = (_dec = ccclass("discoverView"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec(_class = (_class2 = class discoverView extends (_crd && basePageView === void 0 ? (_reportPossibleCrUseOfbasePageView({
        error: Error()
      }), basePageView) : basePageView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btn_shift_game", _descriptor, this);

          _initializerDefineProperty(this, "btn_shift_ugc", _descriptor2, this);

          _initializerDefineProperty(this, "game_part", _descriptor3, this);

          _initializerDefineProperty(this, "ugc_part", _descriptor4, this);

          _initializerDefineProperty(this, "scroll_node", _descriptor5, this);

          this.shift_btns = [];
          this.currentGameScrollOffset = void 0;
        }

        start() {
          this, this.shift_btns = [this.btn_shift_game, this.btn_shift_ugc]; // this.game_father_node.on(Node.EventType.TOUCH_START, (event) => {
          //     this.currentGameScrollOffset = this.game_father_node.getComponent(ScrollView).getScrollOffset()
          // });
          // this.game_father_node.on(Node.EventType.TOUCH_END, (event: EventTouch) => {
          //   const startPos = event.touch.getStartLocation();
          //   const prePos = event.touch.getPreviousLocation();
          //   let offset;
          //   if (startPos.x > prePos.x) {
          //     offset = -500;
          //   } else {
          //     offset = 500;
          //   }
          //   const scroll = this.game_father_node.getComponent(ScrollView);
          //   console.log('========',scroll.getScrollOffset().x,this.currentGameScrollOffset.x )
          //   scroll.scrollToOffset(
          //     new Vec2(
          //       this.currentGameScrollOffset.x + 100,
          //       0
          //     ),
          //     1,
          //     true
          //   );
          //   this.currentGameScrollOffset.x = this.currentGameScrollOffset.x +100 
          // });
        }

        update(deltaTime) {}

        shiftCurrentPlayType(btn, data) {
          this.shift_btns.forEach(node => {
            node.getChildByName("selected").active = false;
            node.getChildByName("selected_lable").active = false;
            node.getChildByName("unselected_lable").active = true;
          });
          btn.currentTarget.getChildByName("selected").active = true;
          btn.currentTarget.getChildByName("selected_lable").active = true;

          if (data === "game") {
            this.game_part.active = true;
            this.ugc_part.active = false;
          } else {
            this.game_part.active = false;
            this.ugc_part.active = true;
          }
        }

        initGameViews(gameList) {
          var hp = instantiate(this.scroll_node);
          hp.getComponent(_crd && UIScrollSelectHorizontal === void 0 ? (_reportPossibleCrUseOfUIScrollSelectHorizontal({
            error: Error()
          }), UIScrollSelectHorizontal) : UIScrollSelectHorizontal).scrollChildrenCount = gameList.length;
          this.game_part.addChild(hp);
          hp.setPosition(0, 0);
          gameList.forEach((game, index) => {});
        }

        initUgcViews(ugcList) {
          var hp = instantiate(this.scroll_node);
          hp.getComponent(_crd && UIScrollSelectHorizontal === void 0 ? (_reportPossibleCrUseOfUIScrollSelectHorizontal({
            error: Error()
          }), UIScrollSelectHorizontal) : UIScrollSelectHorizontal).scrollChildrenCount = ugcList.length;
          this.ugc_part.addChild(hp);
          hp.setPosition(0, 0);
          ugcList.forEach((ugc, index) => {});
        }

        currentPageClose() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn_shift_game", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_shift_ugc", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "game_part", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ugc_part", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scroll_node", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b21ee6080dd386a7b28d4710346ec5a41d744ab.js.map