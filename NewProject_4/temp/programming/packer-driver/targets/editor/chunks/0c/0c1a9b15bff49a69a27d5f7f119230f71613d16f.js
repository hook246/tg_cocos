System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, EventType, gamesScrollControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa166tXaL5BNoaF7jrQ+UN2", "gamesScrollControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventHandler', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventType", EventType = /*#__PURE__*/function (EventType) {
        EventType[EventType["SCROLL_START"] = 0] = "SCROLL_START";
        EventType[EventType["SCROLL_ING"] = 1] = "SCROLL_ING";
        EventType[EventType["SCROLL_END"] = 2] = "SCROLL_END";
        return EventType;
      }({}));

      _export("gamesScrollControl", gamesScrollControl = (_dec = ccclass('gamesScrollControl'), _dec2 = property(Node), _dec3 = property({
        type: Number,
        tooltip: '单个控件之间的距离'
      }), _dec4 = property({
        type: Number,
        tooltip: '中心点的缩放比例'
      }), _dec5 = property({
        type: Number,
        tooltip: '边缘点的缩放比例'
      }), _dec6 = property({
        type: Number,
        tooltip: '滚动时的速度'
      }), _dec7 = property({
        type: Component.EventHandler,
        tooltip: "选择后的回调"
      }), _dec(_class = (_class2 = class gamesScrollControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "content", _descriptor, this);

          _initializerDefineProperty(this, "deltaX", _descriptor2, this);

          //x间隔距离
          _initializerDefineProperty(this, "centerScale", _descriptor3, this);

          _initializerDefineProperty(this, "minScale", _descriptor4, this);

          _initializerDefineProperty(this, "scrollSpeed", _descriptor5, this);

          _initializerDefineProperty(this, "selectEvents", _descriptor6, this);

          this.childs = [];
          this.isTouching = false;
          this.hasTouchMove = false;
          this.isTestX = false;
          this._touchId = null;
          this.currentIndex = 0;
          this._toMoveX = 1;
          //移动方向
          this.dx = 0;
          this.moveAim = 0;
        }

        onLoad() {
          this.childs = [];

          for (var i = 0; i < this.content.children.length; i++) {
            this.childs[i] = this.content.children[i];
            this.childs[i].setPosition(this.deltaX * (i - 1), this.childs[i].getPosition().y); //this.childs[i].getPosition().x = this.deltaX * (i - 1);
          }

          this.isTouching = false;
          this.hasTouchMove = false;
          this.isTestX = false;
          this._touchId = null; //this.currentIndex = 0;

          this.scrollTo(0, false);
        }

        start() {
          this.content.on(Node.EventType.TOUCH_START, this._onTouch, this);
          this.content.on(Node.EventType.TOUCH_MOVE, this._onTouch, this);
          this.content.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
          this.content.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        }
        /** 滚动到指定节点 
        * @param anim 是否带移动动画
        */


        scrollTo(idx, anim = true) {
          if (idx < 0 && idx >= this.childs.length) {
            return console.error(this.node.name + '->移动超出边界面');
          }

          this.currentIndex = idx;
          this.moveAim = idx;

          if (!anim) {
            for (var i = 0; i < this.childs.length; i++) {
              this._checkChildX(this.childs[i], (i - idx) * this.deltaX);
            }
          } else {
            this.isTestX = true;
            Component.EventHandler.emitEvents(this.selectEvents, {
              target: this,
              type: EventType.SCROLL_START,
              index: this.currentIndex
            });
          }
        }
        /** 向左滚一个点 */


        scrollToLeft() {
          this._toMoveX = 1;
          this.scrollTo((this.currentIndex - 1 + this.childs.length) % this.childs.length);
        }
        /** 向左滚一个点 */


        scrollToRight() {
          this._toMoveX = -1;
          this.scrollTo((this.currentIndex + 1 + this.childs.length) % this.childs.length);
        }

        _checkChildX(child, x) {
          if (x > this.childs.length / 2 * this.deltaX) {
            x -= this.childs.length * this.deltaX;
          } else if (x < -this.childs.length / 2 * this.deltaX) {
            x += this.childs.length * this.deltaX;
          }

          child.x = x;
          let dx = Math.min(Math.abs(x), this.deltaX);
          child.scale = (1 - dx / this.deltaX) * (this.centerScale - this.minScale) + this.minScale;
        }

        _onTouch(event) {
          if (this._touchId != null && event.touch != this._touchId) {
            return;
          }

          if (event.type == Node.EventType.TOUCH_START) {
            this.isTouching = true;
            this.hasTouchMove = false;
            this.isTestX = false;
            this._touchId = event.touch;
            this.dx = event.getStartLocation().x;
            let evt = {
              target: this,
              type: EventType.SCROLL_START,
              index: this.currentIndex
            };
            Component.EventHandler.emitEvents(this.selectEvents, evt);
            return;
          }

          this.hasTouchMove = true;
          var dx = event.getLocation().x - this.dx;

          this._move(dx);

          this.dx = event.getLocation().x;
          var evt = {
            target: this,
            type: EventType.SCROLL_ING,
            dx: this.dx
          };
          Component.EventHandler.emitEvents(this.selectEvents, evt);
        }

        _onTouchEnd(event) {
          if (this._touchId != null && event.touch != this._touchId) {
            return;
          }

          this.isTouching = false;

          if (event.type == Node.EventType.TOUCH_END || event.type == Node.EventType.TOUCH_CANCEL) {
            this._touchId = null;
          }

          let lo = this.node.getComponent(UITransform).convertToNodeSpaceAR(event.getLocation());

          if (!this.hasTouchMove) {
            let mx = Math.ceil((lo.x - this.deltaX / 2) / this.deltaX);

            if (mx === 0) {
              var event1 = {
                target: this,
                type: EventType.SCROLL_END,
                index: this.currentIndex
              }; //Component.EventHandler.emitEvents(this.selectEvents, event1);
            } else {
              this.moveAim = (this.currentIndex + mx + this.childs.length) % this.childs.length;
              this._toMoveX = mx > 0 ? -1 : 1;
              this.isTestX = true;
            }

            return;
          }

          let max = this.deltaX;
          let minidx = 0;

          for (let i = 0; i < this.childs.length; i++) {
            if (Math.abs(this.childs[i].getPosition().x) <= max) {
              max = Math.abs(this.childs[i].getPosition().x);
              minidx = i;
            }
          }

          this.moveAim = minidx;
          this._toMoveX = this.childs[minidx].getPosition().x >= 0 ? -1 : 1;
          this.isTestX = true;
        }

        _move(dt) {
          for (var i = 0; i < this.childs.length; i++) {
            this._checkChildX(this.childs[i], this.childs[i].getPosition().x + dt);
          }
        }

        update(deltaTime) {
          if (this.isTouching || !this.isTestX) {
            return;
          }

          var stepx = this._toMoveX * deltaTime * this.scrollSpeed;
          let lx = this.childs[this.moveAim].getPosition().x;

          for (var i = 0; i < this.childs.length; i++) {
            this._checkChildX(this.childs[i], this.childs[i].getPosition().x + stepx);
          }

          var x = this.childs[0].getPosition().x;
          var idx = Math.round(x / this.deltaX);
          var tox = this.deltaX * idx;
          let cx = this.childs[this.moveAim].getPosition().x;

          if (lx * cx < 0 && Math.abs(cx) < this.deltaX) {
            this.isTestX = false;

            for (let i = 0; i < this.childs.length; i++) {
              if (Math.abs(this.childs[i].getPosition().x) <= Math.abs(stepx)) {
                this.currentIndex = i;
                break;
              }
            }

            for (var i = 0; i < this.childs.length; i++) {
              this._checkChildX(this.childs[i], this.childs[i].getPosition().x + tox - x);
            }

            var event = {
              target: this,
              type: EventType.SCROLL_END,
              index: this.currentIndex
            };
            Component.EventHandler.emitEvents(this.selectEvents, event);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "deltaX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "centerScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollSpeed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 300;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectEvents", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c1a9b15bff49a69a27d5f7f119230f71613d16f.js.map