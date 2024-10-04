import { _decorator, Component, Label, Node } from "cc";
import { basePageView } from "../common/basePageView";
import GlobalData from "../home/GloabalClass";
const { ccclass, property } = _decorator;

@ccclass("inviteView")
export class inviteView extends basePageView {
  @property(Label)
  points: Label;

  @property(Label)
  invite_count: Label;

  @property(Label)
  point_multi: Label;

  @property(Label)
  invite_url: Label;

  @property(Node)
  copy_complete1: Node;

  @property(Node)
  copy_complete2: Node;

  @property(Node)
  home: Node;

  copy_link: string;

  start() {}

  update(deltaTime: number) {}

  setInviteInfo(totalInviteNum: number, totalPoint: number) {
    //1 10 50 100 500
    this.points.string = String(totalPoint);
    this.invite_count.string = String(totalInviteNum);

    if(totalInviteNum < 10){
        this.point_multi.string = "1x";
    }else if(totalInviteNum > 10 && totalInviteNum < 50){
        this.point_multi.string = "2x";
    }else if(totalInviteNum > 50 && totalInviteNum < 100){
        this.point_multi.string = "3x";
    }else if(totalInviteNum > 100 && totalInviteNum < 500){
        this.point_multi.string = "4x";
    }else if(totalInviteNum > 500){
        this.point_multi.string = "5x";
    }
    this.setInviteUrl()
  }

  setInviteUrl() {
    this.invite_url.string = `https://t.me/infinity_ground_bot/infinity_ground_app?startapp=${window.btoa(
      `{"inviteCode":"${GlobalData.inviteCode}"}`
    )}`;
    this.copy_link = `https://t.me/infinity_ground_bot/infinity_ground_app?startapp=${window.btoa(
      `{"inviteCode":"${GlobalData.inviteCode}"}`
    )}`;
  }

  copyInviteLink() {
    navigator.clipboard
      .writeText(this.copy_link)
      .then(() => {
        this.copy_complete1.active = true;
        this.copy_complete2.active = true;
        this.scheduleOnce(() => {
          this.copy_complete1.active = false;
          this.copy_complete2.active = false;
        }, 2);
      })
      .catch(() => {});
  }

  shareInviteToFriend() {
    const shareText = "🔥Join the biggest AI gaming platform on Telegram!\r\n🎮Experience infinite fun of AI Games and Earn Rewards.";
    const shareUrl = this.copy_link;

    // 构建 Telegram share URL
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(shareText)}`;

    // 使用 window.open 来唤起分享
    window.open(telegramShareUrl, "_blank");
  }
}
