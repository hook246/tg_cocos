import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export const PagesPosOutSet = {
    login:{
        x: -3219.321,
        y: 0
    },
    discover: {
        x: -4150.868,
        y: 0
    },
    invite: {
        x: -5129.802,
        y: 0
    },
    earn: {
        x: -6084.654,
        y: 0
    },
    draw: {
        x: -7063.518,
        y: 0
    },
}

@ccclass('homeModel')
export class homeModel extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}

