System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Vec3, tween, easing, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      easing = _cc.easing;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b62b952oJBULyz0gBi90pt", "JumpTo", undefined);

      __checkObsolete__(['Node', 'Vec3', 'tween', 'easing']);

      /**
       * 实现接口方法
       */
      Node.prototype.jump_to = function (targetPos, height, duration, callback) {
        var new_tween_postion = new Vec3(); //跳高

        var startPosY = 0;
        this.jump_y = 0;
        var y_tween = tween().to(duration / 2, {
          jump_y: height
        }, {
          onStart: my => {
            startPosY = my.position.y;
            my.jump_y = 0;
          },
          onUpdate: my => {
            new_tween_postion.set(my.position);
            new_tween_postion.y = startPosY + my.jump_y;
            my.position = new_tween_postion;
          },
          onComplete: my => {
            my.jump_y = 0;
          },
          easing: 'quadOut'
        }).to(duration / 2, {
          jump_y: height
        }, {
          onStart: my => {
            startPosY = my.position.y;
          },
          onUpdate: my => {
            new_tween_postion.set(my.position);
            new_tween_postion.y = startPosY - my.jump_y;
            my.position = new_tween_postion;
          },
          onComplete: my => {
            my.jump_y = 0;
          },
          easing: 'quadIn'
        }).union(); //修正y落点

        this.jump_offset_y = 0;
        var offsetY = 0;
        var offset_y_tween = tween().to(duration, {
          jump_offset_y: targetPos.y - this.position.y
        }, {
          onStart: my => {
            offsetY = targetPos.y - my.position.y;
            my.jump_offset_y = 0;
          },
          onUpdate: (my, r) => {
            var oy = easing.quadOut(r) * offsetY;
            new_tween_postion.y += oy;
            my.position = new_tween_postion;
          },
          onComplete: my => {
            my.jump_offset_y = 0;
          }
        }); //跳远

        this.jump_x = this.position.x;
        var x_tween = tween().to(duration, {
          jump_x: targetPos.x
        }, {
          onUpdate: my => {
            new_tween_postion.set(my.position);
            ;
            new_tween_postion.x = my.jump_x;
            my.position = new_tween_postion;
            callback == null ? void 0 : callback();
          },
          onComplete: my => {
            my.jump_x = my.position.x;
          }
        });
        return tween(this).parallel(y_tween, offset_y_tween, x_tween);
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26cd3d98b093f1222ee1728ccf53ac2b1c7e4798.js.map