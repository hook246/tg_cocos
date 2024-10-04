import { _decorator, Component, EventTouch, Label, Node } from 'cc';
import { inviteView } from '../invite/inviteView';
import { inviteModel } from '../invite/inviteModel';
import { profileModel } from '../profile/profileModel';
import { earnView } from '../earn/earnView';
import WebUtils from '../common/WebUtils';
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
    
    start() {
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
        this.pageArray.forEach((page: Node, index)=>{
            if(Number(data) === index){
                (this.pageArray[index] as Node).setPosition(0,0)
            }else{
                (this.pageArray[index] as Node).setPosition(-5000, 0)
            }
        })
        if(Number(data) === 1){
            this.inviteBg.active = true
        }else{
            this.inviteBg.active = false
        }
        console.log('======', btn)
        this.btns.forEach((node)=>{
            node.getChildByName('selectBg').active = false
        })
        btn.currentTarget.getChildByName('selectBg').active = true
        if(Number(data) === 2){
            await this.invitePage.getComponent(inviteModel).getTaskList()
            this.earnPage.getComponent(earnView).freshDailyTask()
        }
    }

    setProfile(url: string){
        WebUtils.getResouceImg(url, this.icon)
    }

    async showProfile(){
        await this.invitePage.getComponent(inviteModel).getTaskList()
        this.profile.getComponent(profileModel).initData()
        this.profile.setPosition(0, 0)
    }

    update(deltaTime: number) {
        
    }
}

