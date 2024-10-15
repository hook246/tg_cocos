System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, Vec3, instantiate, Input, input, UITransform, tween, BoxCtl, EventDispatcher, GameData, HeroCtl, SoundCtl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, LogicCtl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBoxCtl(extras) {
    _reporterNs.report("BoxCtl", "./BoxCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "./EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "./GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroCtl(extras) {
    _reporterNs.report("HeroCtl", "./HeroCtl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundCtl(extras) {
    _reporterNs.report("SoundCtl", "./SoundCtl", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      Input = _cc.Input;
      input = _cc.input;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BoxCtl = _unresolved_2.BoxCtl;
    }, function (_unresolved_3) {
      EventDispatcher = _unresolved_3.EventDispatcher;
    }, function (_unresolved_4) {
      GameData = _unresolved_4.GameData;
    }, function (_unresolved_5) {
      HeroCtl = _unresolved_5.HeroCtl;
    }, function (_unresolved_6) {
      SoundCtl = _unresolved_6.SoundCtl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00d56IUUelFPb2kNXAFxpom", "LogicCtl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec3', 'instantiate', 'Input', 'input', 'EventTouch', 'UITransform', 'tween', 'Sprite', 'Color', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 逻辑脚本
       * @author 一朵毛山
       * Construct 
       */

      _export("LogicCtl", LogicCtl = (_dec = ccclass('LogicCtl'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: _crd && SoundCtl === void 0 ? (_reportPossibleCrUseOfSoundCtl({
          error: Error()
        }), SoundCtl) : SoundCtl
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = class LogicCtl extends Component {
        constructor(...args) {
          super(...args);

          //箱子预制体
          _initializerDefineProperty(this, "box_pre", _descriptor, this);

          //英雄预制体
          _initializerDefineProperty(this, "hero_pre", _descriptor2, this);

          //声音脚本
          _initializerDefineProperty(this, "sound_ctl", _descriptor3, this);

          //hero脚本
          this.hero_ctl = null;
          //logic_layer中的所有箱子信息
          this.box_arr = [];
          //跳跃的时间
          this.touch_time = 0;

          //小白球预制体
          _initializerDefineProperty(this, "ball_pre", _descriptor4, this);

          //屏幕移动的参考点
          _initializerDefineProperty(this, "light_house", _descriptor5, this);
        }

        start() {
          //注册触控事件
          input.on(Input.EventType.TOUCH_START, this.touch_start, this);
          input.on(Input.EventType.TOUCH_END, this.touch_end, this); //默认游戏状态为自动跳,并且初始化2个箱子一个英雄

          this.run_game(-1);
        }
        /**
         * 触控开始
         * @param e 
         * @returns 
         */


        touch_start(e) {
          //合法性判断
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).get_game_state() != 1) {
            return;
          } //设置为按下


          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).set_game_state(2); //重置时间

          this.touch_time = 0; //播放声音

          this.sound_ctl.play_start();
        }
        /**
         * 触控结束
         * @param e 
         * @returns 
         */


        touch_end(e) {
          // 合法性判断
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).get_game_state() != 2) {
            return;
          } //设置为按下


          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).set_game_state(3); //停止播放声音

          this.sound_ctl.play_stop(); //英雄恢复身高

          this.hero_ctl.touch_end(); //箱子弹起

          this.box_arr[this.box_arr.length - 2].touch_end(); //设置英雄显示层级为最上层

          this.hero_ctl.set_sibling(this.node.children.length); //重置英雄旋转的欧拉角

          this.hero_ctl.reset_angle(); //根据目标箱子实现跳跃

          this.hero_ctl.jump_by_box(this.box_arr[this.box_arr.length - 1], this.touch_time, (score, collider_node) => {
            //判断是否发生碰撞
            if (collider_node) {
              // 没有踏空
              //判断碰撞的箱子是脚下的箱子还是目标箱子
              if (this.box_arr[this.box_arr.length - 1].node != collider_node) {
                //脚下的箱子
                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).set_game_state(1);
              } else {
                // 这里是目标箱子
                //播放得分声音,或是失败声音
                this.sound_ctl.play_score(score); //根据得分判断滑倒/踏空

                switch (score) {
                  case -1:
                    this.hero_ctl.slip();
                    break;

                  case 0:
                    this.hero_ctl.miss(this.box_arr[this.box_arr.length - 1].node, this.box_arr[this.box_arr.length - 2].node);
                    break;
                } //计算真实得分


                score = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).computed_step_score(score); //统计历史最高分

                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).record_history_score(); //分数大于0,可以继续游戏

                if (score > 0) {
                  //英雄身上飘分
                  this.hero_ctl.show_score(score); //播放英雄落地小球飞溅特效

                  this.hero_ctl.jump_end_effect(); //发送事件,更新住屏幕上的本局总分数

                  (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                    error: Error()
                  }), EventDispatcher) : EventDispatcher).get_instance().target.emit((_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                    error: Error()
                  }), EventDispatcher) : EventDispatcher).UPDATE_SCORE_LABEL); //产生新的箱子

                  this.next_box(); //根据参考点进行屏幕移动

                  this.move(); //设置状态为1,解锁触控

                  (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                    error: Error()
                  }), GameData) : GameData).set_game_state(1);
                } else {
                  //发送游戏结束事件,用以打开over_page面板
                  (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                    error: Error()
                  }), EventDispatcher) : EventDispatcher).get_instance().target.emit((_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                    error: Error()
                  }), EventDispatcher) : EventDispatcher).SHOW_OVER_WINDOW); //游戏状态设置为4(游戏结束)

                  (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                    error: Error()
                  }), GameData) : GameData).set_game_state(4);
                }
              }
            } else {
              //踏空了
              //播放失败声音
              this.sound_ctl.play_score(score); //执行踏空动画

              this.hero_ctl.miss(this.box_arr[this.box_arr.length - 1].node, this.box_arr[this.box_arr.length - 2].node); //发送游戏结束事件,用以打开over_page面板

              (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                error: Error()
              }), EventDispatcher) : EventDispatcher).get_instance().target.emit((_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                error: Error()
              }), EventDispatcher) : EventDispatcher).SHOW_OVER_WINDOW); //游戏状态设置为4(游戏结束)

              (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).set_game_state(4);
            } //清理不需要显示的箱子


            this.step_clear();
          });
        }
        /**
         * 产生新的箱子
         */


        next_box() {
          //获取当前最后一个箱子坐标
          let last_position = this.box_arr[this.box_arr.length - 1].node.getPosition(); //计算获取向量

          let nor_v3 = last_position.clone().subtract(this.box_arr[this.box_arr.length - 2].node.getPosition()).normalize(); //随机,x,y

          let r_x_y = Math.random() * 150 + 300; //随机箱子方向

          if (Math.random() < 0.5) {
            nor_v3.x = nor_v3.x * -1;
          } //根据以上数据,获取新箱子坐标


          let new_position = new Vec3(last_position.x + nor_v3.x * r_x_y, last_position.y + nor_v3.y * r_x_y); //创建箱子,并且执行箱子初始动画

          this.create_box(new_position).action_tween();
        }
        /**
         * 屏幕移动
         */


        move() {
          //获取倒数一箱子坐标
          let first = this.box_arr[this.box_arr.length - 1].node.getPosition(); //获取倒数二箱子坐标

          let second = this.box_arr[this.box_arr.length - 2].node.getPosition(); //向量计算

          let mid_position = first.subtract(second); //计算出两个箱子的中心点

          mid_position.x = mid_position.x / 2 + second.x;
          mid_position.y = mid_position.y / 2 + second.y; //获取对应的世界坐标

          let world_position = this.node.getComponent(UITransform).convertToWorldSpaceAR(mid_position); //根据世界坐标转换成canvas下的坐标

          let canvas_position = this.node.getParent().getComponent(UITransform).convertToNodeSpaceAR(world_position); //根据目标点坐标,计算出来差值

          let pos = this.light_house.getPosition().subtract(canvas_position); //执行移动动画

          tween(this.node).by(0.5, {
            position: new Vec3(pos.x, pos.y)
          }).start(); // this.hero_ctl.set_sibling(this.node.children.length);
        }
        /**
         * 帧频更新
         * @param deltaTime 
         * @returns 
         */


        update(deltaTime) {
          //合法性判断
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).get_game_state() != 2) {
            return;
          } //触控事件++


          this.touch_time++; //让英雄执行变矮胖子动画

          this.hero_ctl.touch_start(deltaTime, this.box_arr[this.box_arr.length - 2].get_height()); //让箱子压扁

          this.box_arr[this.box_arr.length - 2].touch_start(deltaTime);
        }
        /**
         * 清理logic_layer的子元素
         */


        clear_all() {
          this.node.removeAllChildren();
          this.box_arr.splice(0, this.box_arr.length);
        }
        /**
         * 根据坐标创建箱子,随机的
         * @param pos 坐标
         * @returns 
         */


        create_box(pos) {
          //实例化箱子
          let ctl = instantiate(this.box_pre).getComponent(_crd && BoxCtl === void 0 ? (_reportPossibleCrUseOfBoxCtl({
            error: Error()
          }), BoxCtl) : BoxCtl); //随机箱子

          ctl.random_box(this.node, pos);
          this.box_arr.push(ctl);
          return ctl;
        }
        /**
         * 初始化游戏
         * @param game_state 状态,1,-1
         */


        run_game(game_state) {
          //状态设置
          (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).set_game_state(game_state); //logic_layer 给与默认位置0,0

          this.node.setPosition(0, 0); //清理全部子节点

          this.clear_all(); //创建2个箱子

          let box_1 = this.create_box(new Vec3(-133, -207));
          this.create_box(new Vec3(169, -44)); //create hero

          this.hero_ctl = instantiate(this.hero_pre).getComponent(_crd && HeroCtl === void 0 ? (_reportPossibleCrUseOfHeroCtl({
            error: Error()
          }), HeroCtl) : HeroCtl);
          this.hero_ctl.init_hero(this.node, box_1.get_jump_position()); //屏幕移动一下,根据箱子和参考点

          this.move();
        }
        /**
         * 自动跳跃
         * @returns 
         */


        auto_jump() {
          //合法性判断
          if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
            error: Error()
          }), GameData) : GameData).get_game_state() != -1) {
            return;
          } //重置英雄的欧拉角


          this.hero_ctl.reset_angle(); //获取英雄坐标

          let pos_hero = this.hero_ctl.node.getPosition(); //获取目标箱子坐标

          let pos_box = this.box_arr[this.box_arr.length - 1].get_jump_position().subtract(pos_hero).normalize(); //执行跳跃

          this.hero_ctl.jump_by_postion(this.box_arr[this.box_arr.length - 1].get_jump_position(), pos_box.x, () => {
            //合法性判断
            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).get_game_state() != -1) {
              return;
            } //跳跃完毕后,产生新的箱子


            this.next_box(); //跳跃完毕后,屏幕移动

            this.move(); //跳跃完毕后,设置英雄的显示层级,最高

            this.hero_ctl.set_sibling(this.node.children.length); //跳跃完毕后,清理不需要渲染的箱子

            this.step_clear();
          });
        }
        /**
         * 清理不需要渲染的箱子,用于提高性能(draw call)
         */


        step_clear() {
          //默认只留5个箱子,其他的都remove掉
          while (this.box_arr.length > 5) {
            //从数组前面弹出来一个
            let box = this.box_arr.shift();

            if (box) {
              box.node.removeFromParent();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "box_pre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hero_pre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sound_ctl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ball_pre", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "light_house", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d21e28557c117b8b6bb9474ffb6340c6a2c9b66.js.map