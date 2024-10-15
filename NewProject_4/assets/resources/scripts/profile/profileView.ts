import { _decorator, Component, EditBox, EventTouch, Label, Node, tween, UIOpacity } from 'cc';
import { basePageModel } from '../common/basePageModel';
import { basePageView } from '../common/basePageView';
import GlobalData from '../home/GloabalClass';
import WebUtils from '../common/WebUtils';
import { homeView } from '../home/homeView';
import { profileModel } from './profileModel';
const { ccclass, property } = _decorator;

const avatars =[
    'images/avatar/1',
    'images/avatar/2',
    'images/avatar/3',
    'images/avatar/4',
    'images/avatar/5'
]

@ccclass('profileView')
export class profileView extends basePageView {

    @property(Node)
    bindBtn: Node

    @property(Node)
    unbindBtn: Node

    @property(Label)
    twitterUserName: Label

    @property(Label)
    user_name: Label

    @property(Label)
    tgId: Label

    @property(Node)
    user_proto: Node

    @property(Node)
    home: Node

    @property(Node)
    edit_page: Node

    @property(Node)
    user_avatar: Node

    @property(Node)
    select_circle: Node

    @property(Node)
    current_select_avatar: Node

    @property(EditBox)
    edit_username: EditBox

    avatar:string

    start() {

    }

    update(deltaTime: number) {
        
    }

    showEditPage(){
        this.edit_page.active = true
    }

    closeEditPage(){
        this.edit_page.active = false
    }

    resetBindUi(){
        this.bindBtn.active = true
        this.unbindBtn.active = false
        this.twitterUserName.node.active = false
    }

    setTwitterInfo(){
        if(GlobalData.taskData.data.data.twitterUserName){
            this.bindBtn.active = false
            this.unbindBtn.active = true
            this.twitterUserName.node.active = true
            this.twitterUserName.string = GlobalData.taskData.data.data.twitterUserName
        }else{
            this.bindBtn.active = true
            this.unbindBtn.active = false
            this.twitterUserName.node.active = false
        }

        WebUtils.getRemoteImg(window?.Telegram?.WebApp?.initDataUnsafe?.user?.photo_url, this.user_proto)

        this.tgId.string = `${window?.Telegram?.WebApp?.initDataUnsafe?.user?.id}`
        WebUtils.getResouceImg(GlobalData.avatar,this.user_avatar)
        if(GlobalData?.username?.length){
            this.user_name.string = GlobalData.username

        }else if(window?.Telegram?.WebApp?.initDataUnsafe?.user?.username){
            this.user_name.string = `${window?.Telegram?.WebApp?.initDataUnsafe?.user?.username}`
        }else{
            this.user_name.string = `${window?.Telegram?.WebApp?.initDataUnsafe?.user?.first_name}_${window?.Telegram?.WebApp?.initDataUnsafe?.user?.last_name}`   
        }
    }

    selectAvatar(event: EventTouch, data: string){
        this.avatar = avatars[data]
        WebUtils.getResouceImg(this.avatar,this.current_select_avatar)
        this.select_circle.setPosition(event.currentTarget.getPosition())
    }

    async editUserInfo(){
        try {
            const url = GlobalData.isProduction ? 'https://api.infinityg.ai/api/v1/user/info/edit' : 'https://api.infinitytest.cc/api/v1/user/info/edit'
            const userInfo = await window.axios.post<any>(
                url
              ,{
                avatar: this.avatar,
                userName: this.edit_username.string ? this.edit_username.string : GlobalData.username
              
              },{
                  headers: { 
                        'Authorization': `Bearer ${GlobalData.token}`
                    }
              });
              WebUtils.getResouceImg(this.avatar,this.user_avatar)
              this.home.getComponent(homeView).setProfile(this.avatar)
              this.user_name.string = this.edit_username.string ? this.edit_username.string : GlobalData.username
              window.Telegram.WebApp.showAlert("success!", () => {
                console.log("");
              });
        } catch (error) {
            window.Telegram.WebApp.showPopup({
                title: '',
                message: '*This username already exists, please reset.',
                buttons: [
                  { id: 'button1', text: 'ok' },
                ]
              }, async (buttonId) => {
              });
        }

    }


    closeProfile(){
        tween(this.node.getComponent(UIOpacity)).to(0.5, { opacity: 0 }).call(()=>{
            this.node.setPosition(-5000, 0)
        }).start();

    }
}

