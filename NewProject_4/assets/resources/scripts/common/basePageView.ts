import { _decorator, Component, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('basePageView')
export class basePageView extends Component {

    @property(Vec2)
    pageClosedPos: Vec2 = new Vec2(0, 0)
    start() {

    }

    update(deltaTime: number) {
        
    }

    closePage(){
        this.node.setPosition(this.pageClosedPos.x, this.pageClosedPos.y)
    }
}

