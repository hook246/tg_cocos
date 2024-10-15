import {
  _decorator,
  Color,
  Component,
  Label,
  Node,
  ScrollView,
  UITransform,
} from "cc";
import { basePageView } from "../common/basePageView";
import GlobalData from "../home/GloabalClass";
const { ccclass, property } = _decorator;

const inviteView_arrow = "inviteView_arrow";

@ccclass("inviteView")
export class inviteView extends basePageView {
  @property(Label)
  points: Label;

  @property(Label)
  invite_count: Label;

  @property(Label)
  point_multi1: Label;

  @property(Label)
  point_multi2: Label;

  @property(Label)
  point_multi3: Label;

  @property(Label)
  point_multi4: Label;

  @property(Label)
  point_multi5: Label;

  @property(Label)
  point_multi1_c: Label;

  @property(Label)
  point_multi2_c: Label;

  @property(Label)
  point_multi3_c: Label;

  @property(Label)
  point_multi4_c: Label;

  @property(Label)
  point_multi5_c: Label;

  @property(Node)
  progress_point: Node;

  @property(Node)
  progress_bar: Node;

  @property(Label)
  invite_url: Label;

  @property(Node)
  copy_complete1: Node;

  @property(Node)
  copy_complete2: Node;

  @property(Node)
  home: Node;

  @property(Node)
  arrow: Node;

  @property(Node)
  arrow_s: Node;

  copy_link: string;

  start() {
    // this.node.getComponent(ScrollView).scrollToBottom()
    // this.node.getComponent(ScrollView).scrollToTop()
    if (localStorage.getItem(inviteView_arrow)) {
      this.arrow.active = false;
      this.arrow_s.active = true;
    }
  }

  update(deltaTime: number) {}

  setInviteInfo(totalInviteNum: number, totalPoint: number) {
    //1 10 50 100 500
    this.points.string = String(totalPoint);
    this.invite_count.string = String(totalInviteNum);
    this.progress_point.active = true;
    if (totalInviteNum < 10) {
      this.point_multi1.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi1.getComponent(Label).fontSize = 40;
      this.point_multi1_c.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi1_c.getComponent(Label).fontSize = 40;
      this.progress_point.setPosition(-316.604, 11.582);
      this.progress_bar.getComponent(UITransform).width = 0;
    } else if (totalInviteNum >= 10 && totalInviteNum < 50) {
      this.point_multi2.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi2.getComponent(Label).fontSize = 40;
      this.point_multi2_c.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi2_c.getComponent(Label).fontSize = 40;
      this.progress_point.setPosition(-157.125, 11.582);
      this.progress_bar.getComponent(UITransform).width = 161.7;
    } else if (totalInviteNum >= 50 && totalInviteNum < 100) {
      this.point_multi3.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi3.getComponent(Label).fontSize = 40;
      this.point_multi3_c.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi3_c.getComponent(Label).fontSize = 40;
      this.progress_point.setPosition(-2.941, 11.582);
      this.progress_bar.getComponent(UITransform).width = 313.2;
    } else if (totalInviteNum >= 100 && totalInviteNum < 500) {
      this.point_multi4.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi4.getComponent(Label).fontSize = 40;
      this.point_multi4_c.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi4_c.getComponent(Label).fontSize = 40;
      this.progress_point.setPosition(155.661, 11.582);
      this.progress_bar.getComponent(UITransform).width = 460;
    } else if (totalInviteNum >= 500) {
      this.point_multi5.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi5.getComponent(Label).fontSize = 40;
      this.point_multi5_c.getComponent(Label).color = new Color("#ac84fa");
      this.point_multi5_c.getComponent(Label).fontSize = 40;
      this.progress_point.setPosition(320.623, 11.582);
      this.progress_bar.getComponent(UITransform).width = 620;
    }
    this.setInviteUrl();
  }

  setInviteUrl() {
    this.invite_url.string = GlobalData.isProduction
      ? `https://t.me/InfinityGround_bot/Infinityg?startapp=${window.btoa(
          `{"inviteCode":"${GlobalData.inviteCode}"}`
        )}`
      : `https://t.me/infinity_ground_bot/infinity_ground_app?startapp=${window.btoa(
          `{"inviteCode":"${GlobalData.inviteCode}"}`
        )}`;
    this.copy_link = GlobalData.isProduction
      ? `https://t.me/InfinityGround_bot/Infinityg?startapp=${window.btoa(
          `{"inviteCode":"${GlobalData.inviteCode}"}`
        )}`
      : `https://t.me/infinity_ground_bot/infinity_ground_app?startapp=${window.btoa(
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
    const shareText =
      "🔥Join the first AI gaming and meme creation platform on Telegram!\n🎮Experience infinite fun of AI games and memes and earn rewards.";
    const shareUrl = this.copy_link;

    // 构建 Telegram share URL
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(shareText)}`;

    // 使用 window.open 来唤起分享
    window.open(telegramShareUrl, "_blank");
  }

  markArrow() {
    localStorage.setItem(inviteView_arrow, "inviteView_arrow");
    this.arrow.active = false;
    this.arrow_s.active = true;
  }
}
