System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, CCInteger, CCFloat, EventHandler, log, UITransform, error, instantiate, WebUtils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _crd, ccclass, property, dataUrl, EventType, UIScrollSelectHorizontal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWebUtils(extras) {
    _reporterNs.report("WebUtils", "../common/WebUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdiscoverView(extras) {
    _reporterNs.report("discoverView", "./discoverView", _context.meta, extras);
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
      Node = _cc.Node;
      CCInteger = _cc.CCInteger;
      CCFloat = _cc.CCFloat;
      EventHandler = _cc.EventHandler;
      log = _cc.log;
      UITransform = _cc.UITransform;
      error = _cc.error;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      WebUtils = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ff0apPph9HJ5vB4UGmFzYQ", "UIScrollSelectHorizontal", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CCInteger', 'CCFloat', 'EventHandler', 'log', 'UITransform', 'error', 'instantiate', 'sp', 'math']);

      ({
        ccclass,
        property
      } = _decorator);
      dataUrl = {
        game: ['images/avatar/cat', 'images/avatar/btrump', 'images/avatar/cat'],
        ugc: ['images/avatar/ugc']
      };

      _export("EventType", EventType = /*#__PURE__*/function (EventType) {
        EventType[EventType["SCROLL_START"] = 0] = "SCROLL_START";
        EventType[EventType["SCROLL_ING"] = 1] = "SCROLL_ING";
        EventType[EventType["SCROLL_END"] = 2] = "SCROLL_END";
        return EventType;
      }({}));

      _export("UIScrollSelectHorizontal", UIScrollSelectHorizontal = (_dec = ccclass('UIScrollSelectHorizontal'), _dec2 = property(Node), _dec3 = property({
        type: CCInteger,
        tooltip: '单个控件之间的距离'
      }), _dec4 = property({
        type: CCFloat,
        tooltip: '中心点的缩放比例'
      }), _dec5 = property({
        type: CCFloat,
        tooltip: '边缘点的缩放比例'
      }), _dec6 = property({
        type: CCFloat,
        tooltip: '滚动时的速度'
      }), _dec7 = property({
        type: EventHandler,
        tooltip: "选择后的回调"
      }), _dec8 = property({
        type: Node,
        tooltip: '初始化的child'
      }), _dec(_class = (_class2 = (_class3 = class UIScrollSelectHorizontal extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "content", _descriptor, this);

          _initializerDefineProperty(this, "deltaX", _descriptor2, this);

          //x间隔距离
          _initializerDefineProperty(this, "centerScale", _descriptor3, this);

          _initializerDefineProperty(this, "minScale", _descriptor4, this);

          _initializerDefineProperty(this, "scrollSpeed", _descriptor5, this);

          _initializerDefineProperty(this, "selectEvents", _descriptor6, this);

          _initializerDefineProperty(this, "instantiate_node", _descriptor7, this);

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
          this.discover_view = void 0;
          this.scrollChildrenCount = void 0;
          this.scrollChildrenInfo = void 0;
          this.currentCenterNode = 0;
        }

        onLoad() {
          for (var i = 0; i < this.scrollChildrenCount; i++) {
            var node_child = instantiate(this.instantiate_node); //WebUtils.getRemoteImg(this.scrollChildrenInfo[i].icon,node_child.getChildByName('icon'))

            if (this.scrollChildrenInfo[i].type === 1) {
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg(dataUrl.game[i], node_child.getChildByName('icon'));
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg(dataUrl.game[i], node_child.getChildByName('icon'));

              if (i === 0) {
                node_child.on(Node.EventType.TOUCH_START, () => {
                  this.scrollToLeft();
                });
              }

              if (i === 1) {
                node_child.on(Node.EventType.TOUCH_START, () => {
                  this.scrollToRight();
                });
              }
            } else {
              (_crd && WebUtils === void 0 ? (_reportPossibleCrUseOfWebUtils({
                error: Error()
              }), WebUtils) : WebUtils).getResouceImg(dataUrl.ugc[i], node_child.getChildByName('icon'));
            }

            node_child.active = true;
            this.content.addChild(node_child);
          }

          this.childs = [];

          for (var i = 0; i < this.content.children.length; i++) {
            this.childs[i] = this.content.children[i];
            this.childs[i].setPosition(this.deltaX * (i - 1), this.childs[i].getPosition().y);
            log("第" + i + "个预制体" + "，坐标为:" + this.childs[i].getPosition());
          }

          this.isTouching = false;
          this.hasTouchMove = false;
          this.isTestX = false;
          this._touchId = null; // this.currentIndex = 0;

          this.scrollTo(1, false);
          this.scrollToLeft();
        }
        /** 滚动到指定节点 
         * @param anim 是否带移动动画
        */


        scrollTo(idx, anim) {
          if (anim === void 0) {
            anim = true;
          }

          if (idx < 0 && idx >= this.childs.length) {
            return error(this.node.name + '->移动超出边界面');
          }

          this.currentCenterNode = idx;
          this.currentIndex = idx;
          this.discover_view.setCurrentPlayInfo(this.scrollChildrenInfo[this.currentIndex]);
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
          this.scrollTo(1); //this.scrollTo((this.currentIndex - 1 + this.childs.length) % this.childs.length)
        }
        /** 向左滚一个点 */


        scrollToRight() {
          this._toMoveX = -1;
          this.scrollTo(0); //this.scrollTo((this.currentIndex + 1 + this.childs.length) % this.childs.length)
        }

        _checkChildX(child, x) {
          if (x > this.childs.length / 2 * this.deltaX) {
            x -= this.childs.length * this.deltaX;
          } else if (x < -this.childs.length / 2 * this.deltaX) {
            x += this.childs.length * this.deltaX;
          }

          child.setPosition(x, child.position.y);
          var dx = Math.min(Math.abs(x), this.deltaX);
          var scaleX = (1 - dx / this.deltaX) * (this.centerScale - this.minScale) + this.minScale;
          child.setScale(scaleX, scaleX);
        }

        start() {
          if (this.scrollChildrenInfo[0].type === 1) {// this.content.on(Node.EventType.TOUCH_START, this._onTouch, this);
            // this.content.on(Node.EventType.TOUCH_MOVE, this._onTouch, this);
            // this.content.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
            // this.content.on(Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
          }
        }

        _onTouch(event) {
          if (this._touchId != null && event.touch._startPoint.x != this._touchId._startPoint.x && event.touch._startPoint.y != this._touchId._startPoint.y) {
            return;
          }

          if (event.type == Node.EventType.TOUCH_START) {
            this.isTouching = true;
            this.hasTouchMove = false;
            this.isTestX = false;
            this._touchId = event.touch;
            this.dx = event.getStartLocation().x;
            log("触碰", event.getStartLocation());
            var _evt = {
              target: this,
              type: EventType.SCROLL_START,
              index: this.currentIndex
            };
            Component.EventHandler.emitEvents(this.selectEvents, _evt);
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
          if (this._touchId != null && event.touch._startPoint.x != this._touchId._startPoint.x && event.touch._startPoint.y != this._touchId._startPoint.y) {
            return;
          }

          this.isTouching = false;

          if (event.type == Node.EventType.TOUCH_END || event.type == Node.EventType.TOUCH_CANCEL) {
            this._touchId = null;
          }

          var lo = this.node.getComponent(UITransform).convertToNodeSpaceAR(event.getLocation());

          if (!this.hasTouchMove) {
            var mx = Math.ceil((lo.x - this.deltaX / 2) / this.deltaX);

            if (mx === 0) {
              var event1 = {
                target: this,
                type: EventType.SCROLL_END,
                index: this.currentIndex
              };
              Component.EventHandler.emitEvents(this.selectEvents, event1);
            } else {
              this.moveAim = (this.currentIndex + mx + this.childs.length) % this.childs.length;
              this._toMoveX = mx > 0 ? -1 : 1;
              this.isTestX = true;
            }

            return;
          }

          var max = this.deltaX;
          var minidx = 0;

          for (var i = 0; i < this.childs.length; i++) {
            if (Math.abs(this.childs[i].position.x) <= max) {
              max = Math.abs(this.childs[i].position.x);
              minidx = i;
            }
          }

          this.moveAim = minidx;
          this._toMoveX = this.childs[minidx].position.x >= 0 ? -1 : 1;
          this.isTestX = true;
        }

        _move(dt) {
          for (var i = 0; i < this.childs.length; i++) {
            this._checkChildX(this.childs[i], this.childs[i].position.x + dt);
          }
        }

        update(dt) {
          if (this.isTouching || !this.isTestX || Number.isNaN(this.moveAim)) {
            return;
          }

          var stepx = this._toMoveX * dt * this.scrollSpeed;
          var lx = this.childs[this.moveAim].position.x; //!2个child 先这么写过😧

          if (Math.abs(this.childs[this.currentCenterNode].getPosition().x) <= 20) {
            return;
          }

          for (var i = 0; i < this.childs.length; i++) {
            this._checkChildX(this.childs[i], this.childs[i].position.x + stepx);
          }

          var x = this.childs[0].position.x;
          var idx = Math.round(x / this.deltaX);
          var tox = this.deltaX * idx;
          var cx = this.childs[this.moveAim].position.x; //!2个child 先这么写过😧
          // if (lx * cx < 0 && Math.abs(cx) < this.deltaX) {
          // 	this.isTestX = false;
          // 	for (let i = 0; i < this.childs.length; i++) {
          // 		if (Math.abs(this.childs[i].position.x) <= Math.abs(stepx)) {
          // 			this.currentIndex = i;
          // 			this.discover_view.setCurrentPlayInfo(this.scrollChildrenInfo[this.currentIndex])
          // 			break;
          // 		}
          // 	}
          // 	for (var i = 0; i < this.childs.length; i++) {
          // 		this._checkChildX(this.childs[i], this.childs[i].position.x + tox - x)
          // 	}
          // 	var event = {
          // 		target: this,
          // 		type: EventType.SCROLL_END,
          // 		index: this.currentIndex
          // 	}
          // 	Component.EventHandler.emitEvents(this.selectEvents, event);
          // }
        }

        scrolling() {
          log("scrolling");
        }

      }, _class3.EventType = EventType, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "deltaX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "centerScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollSpeed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "selectEvents", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "instantiate_node", [_dec8], {
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
//# sourceMappingURL=c93a99813c78e9cc92b557a2748c489ec77f2569.js.map