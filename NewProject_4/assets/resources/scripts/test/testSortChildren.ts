import { _decorator, Component, Node, UITransform } from 'cc';
import _ from 'lodash'
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    start() {
        window['sortChildren'] = ()=>{
            this.sort()
        } 
    }

    update(deltaTime: number) {
        
    }

    sort(){
    //    this.node.children.sort((a, b)=>{
    //         return b.getComponent(UITransform).width - a.getComponent(UITransform).width
    //    })
    const array = [0, 1, 2, 3, 0, 1, 2, 3, 0];

    // 使用 sort 方法进行排序
    array.sort((a, b) => {
      // 如果一个是2，另一个不是2，则2在前
      if (a === 2) return -1;
      if (b === 2) return 1;
    
      // 如果一个是3，另一个不是3，则3在后
      if (a === 3) return 1;
      if (b === 3) return -1;
    
      // 如果一个是0或1，另一个是3，则0或1在前
      if ((a === 0 || a === 1) && b === 3) return -1;
      if ((b === 0 || b === 1) && a === 3) return 1;
    
      // 如果一个是0或1，另一个是2，则0或1在后
      if ((a === 0 || a === 1) && b === 2) return 1;
      if ((b === 0 || b === 1) && a === 2) return -1;
    
      // 否则，保持原始顺序（即0和1的相对位置不变）
      return 0;
    });
    
    console.log(array);
    // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
    // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
    // 输出: [2, 2, 0, 0, 1, 1, 3, 3, 3]
    }
}

