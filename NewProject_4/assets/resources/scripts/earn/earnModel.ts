import { _decorator, Component, Node } from 'cc';
import { basePageView } from '../common/basePageView';
import { basePageModel } from '../common/basePageModel';
import { earnView } from './earnView';
import { taskListResponseType } from '../invite/inviteModel';
import GlobalData from '../home/GloabalClass';
const { ccclass, property } = _decorator;

@ccclass('earnModel')
export class earnModel extends basePageModel {
    earnView: earnView
    start() {
        this.earnView = this.view.getComponent(earnView)
    }

    update(deltaTime: number) {
        
    }

    initData(){
        this.earnView.initTaskNode(GlobalData.taskData)
    }
}

