import { _decorator, Component, EventTouch, instantiate, Node, Prefab, ScrollView, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('scrollTest')
export class scrollTest extends Component {

    @property(Node)
    content: Node = null;

    @property(Prefab)
    horizontalP: Prefab = null;

    @property(Node)
    contact: Node = null;

    start() {
        this.contact.active = true;
    }

    update(deltaTime: number) {
        
    }

    //切换到水平模式的scrollSelect
    onClickGotoHorizontal() {
        this.contact.active = false;
        this._clearConten();
        let hp = instantiate(this.horizontalP);
        this.content.addChild(hp);
        hp.setPosition(0, 0);
    }

    _clearConten() {
        this.content.removeAllChildren();
    }
}

