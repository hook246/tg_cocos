System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, SpriteFrame, Texture2D, Sprite, Node, resources, Prefab, instantiate, error, Layers, UITransform, Vec2, WebUtils, _crd, TAG;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      Sprite = _cc.Sprite;
      Node = _cc.Node;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      error = _cc.error;
      Layers = _cc.Layers;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9335G+nOJGqItKuiW/NuiP", "WebUtils", undefined);

      __checkObsolete__(['assetManager', 'ImageAsset', 'SpriteFrame', 'Texture2D', 'Sprite', 'Node', 'resources', 'Prefab', 'instantiate', 'Asset', 'error', 'Constructor', 'Layers', 'UITransform', 'Vec2']);

      TAG = 'WebUtils';

      _export("default", WebUtils = class WebUtils {
        /**
         * 获取远程图片
         * @param remoteUrl 
         * @param sprite 
         * @param callback 
         * @returns 
         */
        static getRemoteImg(remoteUrl, sprite, callback) {
          if (sprite === void 0) {
            sprite = null;
          }

          if (callback === void 0) {
            callback = null;
          }

          if (!remoteUrl || typeof "dd" != "string") {
            console.log(TAG, "getRemoteImg::remoteUrl错误:" + remoteUrl);
            return;
          }

          try {
            assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
              var spriteFrame = new SpriteFrame();
              var texture = new Texture2D();

              if (!err && sprite) {
                try {
                  if (!sprite.components.length) {
                    return;
                  }

                  sprite.getComponent(Sprite).spriteFrame = null;
                  texture.image = imageAsset;
                  spriteFrame.texture = texture;

                  if (this.resMap[remoteUrl]) {
                    sprite.getComponent(Sprite).spriteFrame = this.resMap[remoteUrl];
                  } else {
                    this.resMap[remoteUrl] = spriteFrame;
                    sprite.getComponent(Sprite).spriteFrame = spriteFrame;
                  }
                } catch (error) {
                  console.log(TAG, error);
                }
              }

              if (callback) {
                callback(err, spriteFrame);
              }
            });
          } catch (err) {
            console.log(TAG, "getRemoteImg::remoteUrl错误:", err);
          }
        }

        static getResouceImg(remoteUrl, sprite, callback) {
          if (sprite === void 0) {
            sprite = null;
          }

          if (callback === void 0) {
            callback = null;
          }

          resources.load(remoteUrl + "/spriteFrame", SpriteFrame, function (err, spriteFrame) {
            if (!err && sprite) {
              // const spriteFrame = new SpriteFrame();
              // spriteFrame.texture = texture;
              try {
                sprite.getComponent(Sprite).spriteFrame = spriteFrame;
              } catch (error) {
                console.log(TAG, error);
              }
            } else {
              console.log(TAG, " or sprite 为空", remoteUrl);
            }

            if (callback) {
              callback(err, spriteFrame);
            }
          });
        }

        static getResoucePrefab(remoteUrl, sprite, callback) {
          if (sprite === void 0) {
            sprite = null;
          }

          if (callback === void 0) {
            callback = null;
          }

          resources.load(remoteUrl, Prefab, function (err, prefab) {
            var newNode;

            if (sprite) {
              try {
                newNode = instantiate(prefab);
                sprite.addChild(newNode);
              } catch (error) {}
            } else {
              console.log(TAG, "sprite 为空");
            }

            if (callback) {
              callback(err, newNode);
            }
          });
        }

        static preloadPrefab(remoteUrl, callback) {
          if (callback === void 0) {
            callback = null;
          }

          resources.load(remoteUrl, Prefab, function (err, prefab) {
            var newNode;
            newNode = instantiate(prefab);

            if (callback) {
              callback(err, newNode);
            }
          });
        }

        static protocal(url) {
          if (!url) return;

          if (url.indexOf("http://") !== -1) {
            return url.replace("http://", "https://");
          } else {
            if (url.indexOf("https://") !== -1) {
              return "" + url;
            } else {
              return "https:" + url; //  "//"
            }
          }
        } // public static isMobile(){
        //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        //   if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
        //     return true
        //   }else{
        //     return false
        //   } 
        // }


        static loadRes(url, type, cb) {
          if (type) {
            resources.load(url, type, (err, res) => {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          } else {
            resources.load(url, (err, res) => {
              if (err) {
                error(err.message || err);

                if (cb) {
                  cb(err, res);
                }

                return;
              }

              if (cb) {
                cb(err, res);
              }
            });
          }
        }

        static createSprite(width, height, name) {
          if (width === void 0) {
            width = 10;
          }

          if (height === void 0) {
            height = 10;
          }

          var spr = new Node();
          spr.layer = Layers.Enum.UI_2D; //Layer 设置要准确 ui_2d;

          spr.addComponent(Sprite);
          spr.getComponent(UITransform).setAnchorPoint(new Vec2(0, 1));
          spr.getComponent(UITransform).width = width;
          spr.getComponent(UITransform).height = height;
          return spr;
        } // 使用number类型代替NodeJS.Timeout
        // 截流函数示例


        static throttle(fn, limit) {
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            if (WebUtils.timeoutStream === null) {
              WebUtils.timeoutStream = window.setTimeout(() => {
                fn.apply(this, args);
                WebUtils.timeoutStream = null; // 确保在函数执行后重置timeout
              }, limit);
            }
          };
        } // 防抖函数示例


        static debounce(fn, wait) {
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            clearTimeout(WebUtils.timeoutStack);
            WebUtils.timeoutStack = window.setTimeout(() => {
              fn.apply(this, args);
            }, wait);
          };
        }

      });

      WebUtils.resMap = {};
      WebUtils.timeoutStack = void 0;
      WebUtils.timeoutStream = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fd79f11301cd4f7aabe61a8763d191d96c1bf94.js.map