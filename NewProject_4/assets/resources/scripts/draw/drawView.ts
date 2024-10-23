import { _decorator, Component, Label, Node, RichText, ScrollView, Sprite, tween, UIOpacity, Vec3 } from "cc";
import { basePageView } from "../common/basePageView";
import GlobalData from "../home/GloabalClass";
import { ticketsUsdt } from "./drawModel";
const { ccclass, property } = _decorator;

const openRewardPos = 1000
const drawView_arrow = 'drawView_arrow'

export interface QueryDrawRespDTOData{
  data:{
    confirm: boolean;
    example: false;
    //开奖信息是否确认：false:未确认,true:已确认
  
    count: number;
    //当前参加抽奖人数
  
    drawId: number;
    //当前奖池ID
  
    drawTime: number;
    //当前抽奖剩余开奖时间，时间戳
  
    join: boolean;
    openDrawId: number;
    //已开奖的奖池ID
  
    usdt: number;
    //中奖奖品
  
    win: boolean;
  }
}

export interface QueryDrawRespDTO {
  confirm: boolean;
  example: false;
  //开奖信息是否确认：false:未确认,true:已确认

  count: number;
  //当前参加抽奖人数

  drawId: number;
  //当前奖池ID

  drawTime: number;
  //当前抽奖剩余开奖时间，时间戳

  join: boolean;
  openDrawId: number;
  //已开奖的奖池ID

  usdt: number;
  //中奖奖品

  win: boolean;
}

@ccclass("drawView")
export class drawView extends basePageView {
  @property(Node)
  walletConnectBtns: Node;

  @property(Node)
  unBindWalletInfo: Node;

  @property(Node)
  bindWalletInfo: Node;

  @property(Label)
  address: Label;

  @property(Node)
  home: Node;

  @property(Node)
  joinBtn: Node;

  @property(Node)
  arrow: Node;

  @property(Node)
  arrow_s: Node;

  @property(Label)
  tickets_cost: Label;

  //门票和usdt数量设置
  @property(Label)
  tickets: Label;

  @property(Label)
  usdt: Label;

  //开奖信息
  @property(Label)
  join_count: Label;

  @property(Label)
  timer: Label;

  @property(Node)
  draw_lucky_result: Node;

  @property(Node)
  good_result: Node;

  @property(Node)
  bad_result: Node;

  @property(RichText)
  join_tips: RichText;

  @property(RichText)
  reward_info: RichText;

  drawLuckyInfo: QueryDrawRespDTO;
  drawLuckyClose: boolean;
  cost_tickets: any;

  async start() {
    if(localStorage.getItem(drawView_arrow)){
      this.arrow.active = false
      this.arrow_s.active = true
    }
  }

  setJoinBtnUseAble(use: boolean){
    use ? this.joinBtn.active = true : this.joinBtn.active = false
  }

  update(deltaTime: number) {

  }

  controlUnbindBtnVisible(visible: boolean) {
    this.unBindWalletInfo.active = visible;
  }

  controlBindBtnVisible(visible: boolean) {
    this.bindWalletInfo.active = visible;
  }

  controlConnectWalletBtnsVisible(visible: boolean) {
    this.walletConnectBtns.active = visible;
  }

  showConnectWalletBtns() {
    this.controlConnectWalletBtnsVisible(true);
    this.home.getChildByName("tap_btns").active = false;
  }

  setTicketsCost(cost: number){
    this.tickets_cost.string = `${cost}`
  }

  setJoinTips(lessTickets){
    if(lessTickets < 0){
      this.join_tips.string = `<color=#000000>More entries boost your winning chances</color>
<color=#000000A3><size=25>Collect ${lessTickets} <img src='ic'  /> more to enter the draw</size></color>`
      this.setJoinBtnUseAble(false)
    }else{
      this.join_tips.node.active = false
      this.setJoinBtnUseAble(true)
    }
  }

  setWalletInfo(address: string) {
    GlobalData.wallet_address = address;
    this.controlBindBtnVisible(false);
    this.controlUnbindBtnVisible(true);
    this.address.string = `${address.substring(0, 6)}...${address.substring(
      address.length - 6
    )}`;
  }

  //弹窗展示当前获奖的信息
  showDrawLuckRewardInfo(rewardInfo :QueryDrawRespDTO) {
    if(rewardInfo.join){
      this.draw_lucky_result.active = true
      tween(this.draw_lucky_result.getComponent(UIOpacity)).to(0.5, { opacity: 255 }).call(()=>{
  
      }).start();

      if(rewardInfo.win){
        this.good_result.active = true
        this.bad_result.active = false
        this.reward_info.string = `<b><color=#00ff00><size=60>${rewardInfo.usdt}</size></color><color=#00ff00><size=35> USDT</size></color></b>`
      }else{ 
        this.good_result.active = false
        this.bad_result.active = true
      }

    }else{

    }

  }

  //关闭领奖弹窗
  closeDrawLuckRewardInfo(){
    this.draw_lucky_result.active = false
    this.good_result.active = false
    this.bad_result.active =false
    this.draw_lucky_result.getComponent(UIOpacity).opacity = 0
  }

  //设置当前开奖情况的信息
  setDrawLuckInfo(rewardInfo :QueryDrawRespDTO) {
    this.drawLuckyInfo = rewardInfo
    this.join_count.string = `${rewardInfo.count}`
  }

  //展示当前的开奖信息
  showOpenRewardInfo(){

  }

  //设置当前的门票和usdt的信息
  setCurrentTicketsUsdtCount(info: ticketsUsdt){
    this.tickets.string = `${info.data.tiket}`
    this.usdt.string = `${info.data.usdt}`
  }

  closeBtnConnectWallets() {
    this.controlConnectWalletBtnsVisible(false);
    this.home.getChildByName("tap_btns").active = true;
  }

  markArrow(scroll: ScrollView, data){
    localStorage.setItem(drawView_arrow, 'drawView_arrow')
    this.arrow.active = false
    this.arrow_s.active = true

    if(scroll.getScrollOffset().y >= openRewardPos){
      if(this.drawLuckyInfo.openDrawId && !this.drawLuckyInfo.confirm){
        this.showDrawLuckRewardInfo(this.drawLuckyInfo)
      }
    }
    
  }
}
