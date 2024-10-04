System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ScrollView, Vec2, _dec, _class, _crd, ccclass, property, scrollTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38f32dVOCNMHrznqE2AmijX", "scrollTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'ScrollView', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("scrollTest", scrollTest = (_dec = ccclass('scrollTest'), _dec(_class = class scrollTest extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_START, event => {});
          this.node.on(Node.EventType.TOUCH_END, event => {
            var startPos = event.touch.getStartLocation();
            var prePos = event.touch.getPreviousLocation();
            var offset;

            if (startPos.x > prePos.x) {
              var scroll = this.node.getComponent(ScrollView);
              console.log('========', scroll.getScrollOffset().x);
              scroll.scrollToOffset(new Vec2(scroll.getScrollOffset().x + 500, 0), 1, true);
            } else {
              var _scroll = this.node.getComponent(ScrollView);

              console.log('========', _scroll.getScrollOffset().x);

              _scroll.scrollToOffset(new Vec2(_scroll.getScrollOffset().x - 500, 0), 1, true);
            }
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=872c25d9829f3d2a69ab133730e7118ea90ec97a.js.map