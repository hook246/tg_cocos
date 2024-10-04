import {
    assetManager,
    ImageAsset,
    SpriteFrame,
    Texture2D,
    Sprite,
    Node,
    resources,
    Prefab,
    instantiate,
    Asset,
    error,
    Constructor,
    Layers,
    UITransform,
    Vec2,
  } from "cc";
  export type AssetType<T = Asset> = Constructor<T>;

  
  const TAG = 'WebUtils'
  
  export default class WebUtils {
  
    public static resMap = {}
    static timeoutStack: number;
    static timeoutStream: number;
  
    /**
     * 获取远程图片
     * @param remoteUrl 
     * @param sprite 
     * @param callback 
     * @returns 
     */
    public static getRemoteImg(
      remoteUrl,
      sprite: Node = null,
      callback: Function = null
    ) {
      if(!remoteUrl || typeof("dd") != "string"){
        console.log(TAG, "getRemoteImg::remoteUrl错误:"+remoteUrl);
        return;
      }
      try{
        assetManager.loadRemote<ImageAsset>(remoteUrl,  (err, imageAsset) => {
          const spriteFrame = new SpriteFrame();
          const texture = new Texture2D();
          if (!err && sprite) {
            try {
              if (!sprite.components.length) {
                return;
              }
              (sprite.getComponent(Sprite) as any).spriteFrame = null;
              texture.image = imageAsset;
              spriteFrame.texture = texture;
              if (this.resMap[remoteUrl]) {
                sprite.getComponent(Sprite).spriteFrame = this.resMap[remoteUrl];
              } else {
                this.resMap[remoteUrl] = spriteFrame
                sprite.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            } catch (error) {
              console.log(TAG,error)
            }
          }
          if (callback) {
            callback(err, spriteFrame);
          }
        });
      }catch(err){
        console.log(TAG,"getRemoteImg::remoteUrl错误:",err);
        
      }
  
    }
  
    public static getResouceImg(
      remoteUrl,
      sprite: Node = null,
      callback: Function = null
    ) {
      resources.load(
        remoteUrl + "/spriteFrame",
        SpriteFrame,
        function (err, spriteFrame) {
          if (!err && sprite) {
            // const spriteFrame = new SpriteFrame();
            // spriteFrame.texture = texture;
            try {
              sprite.getComponent(Sprite).spriteFrame = spriteFrame;
            } catch (error) {
              console.log(TAG, error)
            }
            
          } else {
            console.log(TAG," or sprite 为空",remoteUrl);
          }
          if (callback) {
            callback(err, spriteFrame);
          }
        }
      );
    }
  
    public static getResoucePrefab(
      remoteUrl,
      sprite: Node = null,
      callback: Function = null
    ) {
      resources.load(remoteUrl, Prefab, function (err, prefab) {
        let newNode;
        if (sprite) {
          try {
            newNode = instantiate(prefab);
            sprite.addChild(newNode);
          } catch (error) {
           
          }
        } else {
          console.log(TAG,"sprite 为空");
        }
        if (callback) {
          callback(err, newNode);
        }
      });
    }
  
    public static preloadPrefab(
      remoteUrl, 
      callback: Function = null
    ) {
      resources.load(remoteUrl, Prefab, function (err, prefab) {
        let newNode;
        newNode = instantiate(prefab);
        if (callback) {
          callback(err, newNode);
        }
      });
    }
    public static protocal(url) {
      if (!url) return;
      if (url.indexOf("http://") !== -1) {
        return (url as string).replace("http://","https://");
      } else {
        if (url.indexOf("https://") !== -1) {
          return `${url}`;
        } else {
          return `https:${url}`;//  "//"
        }
      }
    }
  
    // public static isMobile(){
    //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //   if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    //     return true
    //   }else{
    //     return false
    //   } 
    // }
  
  
    public static loadRes<T extends Asset>(url: string, type: AssetType<T> | null, cb?: any) {
      if(type){
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
                      cb(err, res as T);
                  }
  
                  return;
              }
  
              if (cb) {
                  cb(err, res as T);
              }
          });
      }
  }
  public static createSprite(width:number = 10,height:number = 10,name?:string){
    let spr:Node = new Node();
    spr.layer = Layers.Enum.UI_2D;//Layer 设置要准确 ui_2d;
    spr.addComponent(Sprite);
    spr.getComponent(UITransform).setAnchorPoint(new Vec2(0,1));
    spr.getComponent(UITransform).width =width;
    spr.getComponent(UITransform).height =height;
    return spr;
  }
  
  // 使用number类型代替NodeJS.Timeout
  
  // 截流函数示例
  public static throttle<T extends (...args: any[]) => any>(
    fn: T,
    limit: number
  ): T {
    return function (...args: any[]) {
      if (WebUtils.timeoutStream === null) {
        WebUtils.timeoutStream = window.setTimeout(() => {
          fn.apply(this, args);
          WebUtils.timeoutStream = null; // 确保在函数执行后重置timeout
        }, limit);
      }
    } as T;
  }
  
  // 防抖函数示例
  public static debounce<T extends (...args: any[]) => any>(
    fn: T,
    wait: number
  ): T {
    return function (...args: any[]) {
      clearTimeout(WebUtils.timeoutStack as number);
      WebUtils.timeoutStack = window.setTimeout(() => {
        fn.apply(this, args);
      }, wait);
    } as T;
  }
}
  
  
  