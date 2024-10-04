System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioClip, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, SoundCtl;

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
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8727fTpyYVJ+qVMHFCL9p5A", "SoundCtl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioClip', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 声音,脚本,挂载到canvas
       * @author 一朵毛山
       * Construct 
       */

      _export("SoundCtl", SoundCtl = (_dec = ccclass('SoundCtl'), _dec2 = property({
        type: AudioClip
      }), _dec3 = property({
        type: AudioClip
      }), _dec4 = property({
        type: AudioClip
      }), _dec5 = property({
        type: AudioClip
      }), _dec6 = property({
        type: AudioClip
      }), _dec7 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = class SoundCtl extends Component {
        constructor(...args) {
          super(...args);

          //跳跃声音,开始
          _initializerDefineProperty(this, "jump_start", _descriptor, this);

          //跳跃声音,循环
          _initializerDefineProperty(this, "jump_loop", _descriptor2, this);

          //失败声音
          _initializerDefineProperty(this, "fail", _descriptor3, this);

          //得分1
          _initializerDefineProperty(this, "score_1", _descriptor4, this);

          //得分>=2
          _initializerDefineProperty(this, "score_more", _descriptor5, this);

          //弹出,没用到这个
          _initializerDefineProperty(this, "pop", _descriptor6, this);

          //定时器的回调函数
          this.play_call_back = null;
        }

        start() {}

        update(deltaTime) {}
        /**
         * 播放触控声音
         */


        play_start() {
          let as = this.node.getComponent(AudioSource);
          as.clip = this.jump_start;
          as.play();

          this.play_call_back = () => {
            as.stop();
            as.clip = this.jump_loop;
            as.play();
            as.loop = true;
          };

          this.scheduleOnce(this.play_call_back, 2);
        }
        /**
         * 停止播放触控声音
         */


        play_stop() {
          var _this$node$getCompone;

          (_this$node$getCompone = this.node.getComponent(AudioSource)) == null ? void 0 : _this$node$getCompone.stop();

          if (this.play_call_back) {
            this.unschedule(this.play_call_back);
          }
        }
        /**
         * 根据得分播放声音
         * @param score 
         */


        play_score(score) {
          let as = this.node.getComponent(AudioSource);

          switch (score) {
            case -1:
            case 0:
              as.playOneShot(this.fail);
              break;

            case 1:
              as.playOneShot(this.score_1);
              break;

            default:
              as.playOneShot(this.score_more);
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "jump_start", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jump_loop", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fail", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "score_1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "score_more", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pop", [_dec7], {
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
//# sourceMappingURL=a981637c7591c681b97667cba72522376068cb31.js.map