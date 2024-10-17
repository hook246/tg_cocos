import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('welcome')
export class welcome extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    close(){
        this.node.active = false
    }
}

