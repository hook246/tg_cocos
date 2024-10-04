import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('basePageModel')
export class basePageModel extends Component {
    @property(Node)
    view: Node = null

    start() {

    }

    update(deltaTime: number) {
        
    }
}

