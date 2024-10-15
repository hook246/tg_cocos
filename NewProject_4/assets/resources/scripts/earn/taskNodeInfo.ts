import { _decorator, Component, Node } from 'cc';
import { TaskData } from './earnView';
const { ccclass, property } = _decorator;

@ccclass('taskNodeInfo')
export class taskNodeInfo extends Component {
    taskInfo: TaskData
    index: number
    start() {

    }

    update(deltaTime: number) {
        
    }
}

