import { _decorator, Component, Node, UITransform } from 'cc';
import _ from 'lodash'
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    start() {
        window['up'] = (index: number)=>{
            this.upTop(index)
        } 

        window['down'] = (index: number)=>{
            this.downBottom(index)
        } 
        const children = this.node.children

    }

    update(deltaTime: number) {
        
    }

    upTop(startIndex){
        for(let index = startIndex; index >= 1; index--){
            this.swap(index, index - 1)
          }
    }

    downBottom(startIndex){
        for(let index = startIndex; index <= this.node.children.length - 2; index++){
            this.swap(index, index + 1)
          }
    }

    swap(from, to){
        const indexPos = this.node.children[from].getPosition()
        const firstPos = this.node.children[to].getPosition()
        this.node.children[to].setPosition(indexPos)
        this.node.children[from].setPosition(firstPos)
        const temp = this.node.children[from]
        this.node.children[from] = this.node.children[to]
        this.node.children[to] = temp
    }

    up(index){
        const indexPos = this.node.children[index].getPosition()
        const firstPos = this.node.children[0].getPosition()
        this.node.children[0].setPosition(indexPos)
        this.node.children[index].setPosition(firstPos)
        const temp = this.node.children[index]
        this.node.children[index] = this.node.children[0]
        this.node.children[0] = temp

        console.log('======up', this.node.children)
    }

    down(index){
        const indexPos = this.node.children[index].getPosition()
        const lastPos = this.node.children[this.node.children.length - 1].getPosition()
        this.node.children[this.node.children.length - 1].setPosition(indexPos)
        this.node.children[index].setPosition(lastPos)

        const temp = this.node.children[index]
        this.node.children[index] = this.node.children[this.node.children.length - 1]
        this.node.children[this.node.children.length - 1] = temp

        console.log('======down', this.node.children)
    }

    // sort(){
    // //    this.node.children.sort((a, b)=>{
    // //         return b.getComponent(UITransform).width - a.getComponent(UITransform).width
    // //    })
    // const array = [0, 1, 2, 3, 0, 1, 2, 3, 0];

    // // 使用 sort 方法进行排序
    // array.sort((a, b) => {
    //   // 如果一个是2，另一个不是2，则2在前
    //   if (a === 2) return -1;
    //   if (b === 2) return 1;
    
    //   // 如果一个是3，另一个不是3，则3在后
    //   if (a === 3) return 1;
    //   if (b === 3) return -1;
    
    //   // 如果一个是0或1，另一个是3，则0或1在前
    //   if ((a === 0 || a === 1) && b === 3) return -1;
    //   if ((b === 0 || b === 1) && a === 3) return 1;
    
    //   // 如果一个是0或1，另一个是2，则0或1在后
    //   if ((a === 0 || a === 1) && b === 2) return 1;
    //   if ((b === 0 || b === 1) && a === 2) return -1;
    
    //   // 否则，保持原始顺序（即0和1的相对位置不变）
    //   return 0;
    // });
    
    // console.log(array);
    // // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
    // // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
    // // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
    // }
}

