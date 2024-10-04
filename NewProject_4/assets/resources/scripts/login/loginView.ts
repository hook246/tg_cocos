import { _decorator, Component, EditBox, Label, Node } from 'cc';
import { basePageView } from '../common/basePageView';
const { ccclass, property } = _decorator;

@ccclass('loginView')
export class loginView extends basePageView {

    //登录类型的按钮
    @property(Node)
    loginTypeBts: Node

    //账号密码输入的界面
    @property(Node)
    pwdLoginUI: Node

    //账号或者密码输入问题提示
    @property(Node)
    errorTips: Node

    @property(EditBox)
    accountInput: EditBox

    @property(EditBox)
    pwdInput: EditBox

    @property(Node)
    loading: Node

    @property(Node)
    home: Node

    @property(Node)
    discover: Node

    @property(Node)
    invite: Node

    @property(Node)
    earn: Node

    @property(Node)
    draw: Node

    start() {

    }

    update(deltaTime: number) {
        
    }

    routeToHome(){
        this.node.setPosition(-5000 ,0)
        this.discover.setPosition(0, 0)
    }

    controlLoading(visible: boolean){
        this.loading.active = visible
    }

    controlLoginTypeBtnsVisible(visible: boolean){
        this.loginTypeBts.active = visible
    }

    showVeteran(){
        this.pwdLoginUI.active = true
        this.controlLoginTypeBtnsVisible(false)
    }

    checkVeteranInput(){
        return this.getAccountInputString() && this.getPasswordInputString()
    }

    getAccountInputString(){
        return this.accountInput.string
    }

    getPasswordInputString(){
        return this.pwdInput.string
    }

    showVeteranError(visible: boolean){
        this.errorTips.active = visible
    }

    closeAccountPage() {
        this.pwdLoginUI.active = false
        this.controlLoginTypeBtnsVisible(true)
    }
}

