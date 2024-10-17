import { _decorator, Animation, AnimationClip, Component, EventTouch, Label, Node, tween, UIOpacity } from 'cc';
import { inviteView } from '../invite/inviteView';
import { inviteModel } from '../invite/inviteModel';
import { profileModel } from '../profile/profileModel';
import { earnView } from '../earn/earnView';
import WebUtils from '../common/WebUtils';
import { PromiseUtils } from '../common/PromiseUtils';
const { ccclass, property } = _decorator;

@ccclass('homeView')
export class homeView extends Component {

    @property(Node)
    discoverPage: Node = null
    @property(Node)
    invitePage: Node = null
    @property(Node)
    earnPage: Node = null
    @property(Node)
    drawPage: Node = null

    @property(Node)
    discoverPageBtn: Node = null
    @property(Node)
    invitePageBtn: Node = null
    @property(Node)
    earnPageBtn: Node = null
    @property(Node)
    drawPageBtn: Node = null
    @property(Node)
    profile: Node = null

    @property(Label)
    game_point: Label = null

    @property(Node)
    inviteBg: Node = null

    @property(Node)
    icon: Node = null

    pageArray: Node[] = [

    ]

    btns: Node[] = [

    ]

    currentPageIndex = 0
    prePageIndex = 0
    
    start() {
        try {
            window?.Telegram?.WebApp.setHeaderColor('#000000')
        } catch (error) {
            
        }

        this.pageArray = [
            this.discoverPage,
            this.invitePage,
            this.earnPage,
            this.drawPage
        ]

        this.btns = [
            this.discoverPageBtn,
            this.invitePageBtn,
            this.earnPageBtn,
            this.drawPageBtn
        ]
    }

    async shiftCurrentPage(btn: EventTouch, data: string){
        this.pageArray.forEach(async (page: Node, index)=>{
            if((this.pageArray[index] as Node).getPosition().x === 0){
                if(Number(data) === index){
                    return
                }
                tween(this.pageArray[index].getComponent(UIOpacity)).to(0.5, { opacity: 0 }).call(()=>{
                    this.pageArray[index].setPosition(-5000, 0);
                    this.pageArray[index].getComponent(UIOpacity).opacity = 255;
                    (this.pageArray[Number(data)] as Node).setPosition(0,0);
                }).start();
            }
        });

        //(this.pageArray[this.prePageIndex] as Node)?.getComponent(Animation)?.play();
        
        if(Number(data) === 1){
            this.inviteBg.active = true
        }else{
            this.inviteBg.active = false
        }
        console.log('======', btn)
        this.btns.forEach((node)=>{
            node.getChildByName('selectBg').active = false
            node.getChildByName('selected').active = false
        })
        btn.currentTarget.getChildByName('selected').active = true
        if(Number(data) === 2){
            await this.invitePage.getComponent(inviteModel).getTaskList()
            this.earnPage.getComponent(earnView).freshTasks()
        }
    }

    setProfile(url: string){
        WebUtils.getResouceImg(url, this.icon)
    }

    async showProfile(){
        await this.invitePage.getComponent(inviteModel).getTaskList()
        this.profile.getComponent(UIOpacity).opacity = 0;
        tween(this.profile.getComponent(UIOpacity)).to(0.5, { opacity: 255 }).call(()=>{
            this.profile.getComponent(profileModel).initData()
            this.profile.setPosition(0, 0)
        }).start();
    }

    update(deltaTime: number) {
        
    }
}

