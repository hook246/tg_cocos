import { _decorator, Component, Label, Node } from 'cc';
import { basePageModel } from '../common/basePageModel';
import GlobalData from '../home/GloabalClass';
import { profileView } from './profileView';
import { homeView } from '../home/homeView';
import { inviteView } from '../invite/inviteView';
import { inviteModel } from '../invite/inviteModel';
const { ccclass, property } = _decorator;

@ccclass('profileModel')
export class profileModel extends basePageModel {
    profileView: profileView


    start() {
        this.profileView = this.view.getComponent(profileView)
    }

    update(deltaTime: number) {
        
    }

    async unBindTwitter(){
        const unbindTwitterUrl = 'https://api.infinitytest.cc/api/v1/oauth/unboundTwitter'
        try {
            //登录成功
            const bindData = await window.axios.post<any>(
                unbindTwitterUrl,
              {

              },{
                headers: { 
                      'Authorization': `Bearer ${GlobalData.token}`
                }
            })
        } catch (error) {
          console.log(error);
        }
        this.profileView.resetBindUi()
    }

    bindTwitter(){
        const twitterOauthUrl = `https://www.infinitytest.cc?tgId=${GlobalData.token}`
        //this.profileView.closeProfile()
        window.Telegram.WebApp.showPopup({
            title: 'Please select an option',
            message: 'Bind your twitter and start the exploration!',
            buttons: [
              { id: 'button1', text: 'bind now' },
              { id: 'button2', text: 'bind later', type: 'cancel' }
            ]
          }, (buttonId) => {
            // 弹出窗口关闭时的回调函数
            if (buttonId) {
              switch (buttonId) {
                case 'button1':
                  window.Telegram.WebApp.openLink(`${twitterOauthUrl}`, { tryInstantView: false });
                  this.scheduleOnce(()=>{
                    this.showCheckInfoPopUp()
                  }, 2)

                  break;
                case 'button2':
                  // 如果是取消按钮，通常不需要执行任何操作，因为它默认会关闭弹出窗口
                  break;
                default:
                  console.log('未知的按钮被点击');
              }
            } else {
              console.log('弹出窗口被关闭，没有点击任何按钮');
            }
          });
    }

    showCheckInfoPopUp(){
        window.Telegram.WebApp.showPopup({
            title: 'Complete',
            message: 'If you have already bound your twitter, please click "OK"!',
            buttons: [
              { id: 'button1', text: 'ok' },
            ]
          }, async (buttonId) => {
            // 弹出窗口关闭时的回调函数
            if (buttonId) {
              switch (buttonId) {
                case 'button1':
                  await this.profileView.home.getComponent(homeView).invitePage.getComponent(inviteModel).initData()
                  this.profileView.setTwitterInfo()
                  break;
                default:
                  console.log('未知的按钮被点击');
              }
            } else {
              console.log('弹出窗口被关闭，没有点击任何按钮');
            }
          });
    }

    initData(){
        this.profileView.setTwitterInfo()
    }
}

