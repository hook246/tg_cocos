import {
  _decorator,
  Component,
  EventTouch,
  instantiate,
  Label,
  Node,
  Prefab,
  ScrollView,
  Sprite,
  UITransform,
  Vec2,
} from "cc";
import { basePageView } from "../common/basePageView";
import WebUtils from "../common/WebUtils";
import { UIScrollSelectHorizontal } from "./UIScrollSelectHorizontal";
const { ccclass, property } = _decorator;

@ccclass("discoverView")
export class discoverView extends basePageView {
  @property(Node)
  btn_shift_game: Node = null;

  @property(Node)
  btn_shift_ugc: Node = null;

  @property(Node)
  game_part: Node = null;

  @property(Node)
  ugc_part: Node = null;

  @property(Prefab)
  scroll_node: Prefab = null;

  @property(Label)
  game_description: Label = null;

  @property(Label)
  game_tittle: Label = null;

  @property(Label)
  ugc_description: Label = null;

  @property(Label)
  ugc_tittle: Label = null;

  shift_btns: Node[] = [];

  currentGameScrollOffset: any

  current_game_info: {
    desc: string;
    hot: number;
    id: number;
    icon: string;
    name: string;
    position: number;
    sort: number;
    tags: string[];
    type: number;
    url: string;
  }

  current_ugc_info: {
    desc: string;
    hot: number;
    id: number;
    icon: string;
    name: string;
    position: number;
    sort: number;
    tags: string[];
    type: number;
    url: string;
  }

  start() {
    this, (this.shift_btns = [this.btn_shift_game, this.btn_shift_ugc]);
    // this.game_father_node.on(Node.EventType.TOUCH_START, (event) => {
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

  update(deltaTime: number) {}

  shiftCurrentPlayType(btn: EventTouch, data: string) {
    this.shift_btns.forEach((node) => {
      node.getChildByName("selected").active = false;
      node.getChildByName("selected_lable").active = false;
      node.getChildByName("unselected_lable").active = true;
    });
    btn.currentTarget.getChildByName("selected").active = true;
    btn.currentTarget.getChildByName("selected_lable").active = true;
    btn.currentTarget.getChildByName("unselected_lable").active = false;
    if (data === "game") {
      this.game_part.active = true;
      this.ugc_part.active = false;
    } else {
      this.game_part.active = false;
      this.ugc_part.active = true;
    }
  }

  initGameViews(
    gameList: {
      desc: string;
      hot: number;
      id: number;
      icon: string;
      name: string;
      position: number;
      sort: number;
      tags: string[];
      type: number;
      url: string;
    }[]
  ) {
    this.initScrollPrefabs(gameList, this.game_part)
  }

  initUgcViews(
    ugcList: {
      desc: string;
      hot: number;
      id: number;
      icon: string;
      name: string;
      position: number;
      sort: number;
      tags: string[];
      type: number;
      url: string;
    }[]
  ) {
    this.initScrollPrefabs(ugcList, this.ugc_part)
  }

  initScrollPrefabs(list:  {
    desc: string;
    hot: number;
    id: number;
    icon: string;
    name: string;
    position: number;
    sort: number;
    tags: string[];
    type: number;
    url: string;
  }[], father_node: Node){
    let hp = instantiate(this.scroll_node);
    hp.getComponent(UIScrollSelectHorizontal).scrollChildrenCount = list.length
    hp.getComponent(UIScrollSelectHorizontal).scrollChildrenInfo = list
    hp.getComponent(UIScrollSelectHorizontal).discover_view = this.node.getComponent(discoverView)
    father_node.addChild(hp);
    hp.setPosition(0, 0);
    this.setCurrentPlayInfo(list[0])
    list.forEach((play, index) => {

    });
  }

  setCurrentPlayInfo(info:  {
    desc: string;
    hot: number;
    id: number;
    icon: string;
    name: string;
    position: number;
    sort: number;
    tags: string[];
    type: number;
    url: string;
  }){
    if(info.type === 1){
        this.game_description.string = info.desc
        this.game_tittle.string = info.name
        this.current_game_info = info
    }else{
        this.ugc_description.string = info.desc
        this.ugc_tittle.string = info.name
        this.current_ugc_info = info
    }
  }

  openCurrentPlayUrl(event, data:string){
    if(data === '1'){
        window.Telegram.WebApp.openTelegramLink(`${this.current_game_info.url}?startapp=${window?.Telegram?.WebApp?.initDataUnsafe?.user?.id}`, { tryInstantView: true });
    }else{
        window.Telegram.WebApp.openTelegramLink(`${this.current_ugc_info.url}?startapp=${window.btoa(window?.Telegram?.WebApp?.initData)}`, { tryInstantView: true });
        console.log('====Telegram', `${this.current_ugc_info.url}?startapp=${window.btoa(window?.Telegram?.WebApp?.initData)}`)
    }
  }

  currentPageClose() {}
}