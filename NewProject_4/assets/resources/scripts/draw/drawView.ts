import { _decorator, Component, Label, Node } from "cc";
import { basePageView } from "../common/basePageView";
import GlobalData from "../home/GloabalClass";
const { ccclass, property } = _decorator;

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

  async start() {

  }

  update(deltaTime: number) {}

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
  }

  setWalletInfo(address: string) {
    GlobalData.wallet_address = address;
    this.controlBindBtnVisible(false);
    this.controlUnbindBtnVisible(true);
    this.address.string = address;
  }

  copyWalletInfo() {}

  closeBtnConnectWallets() {
    this.controlConnectWalletBtnsVisible(false);
  }
}
