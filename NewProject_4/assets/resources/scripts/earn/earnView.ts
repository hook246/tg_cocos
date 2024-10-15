import {
  _decorator,
  Button,
  Component,
  EventHandler,
  EventTouch,
  instantiate,
  Label,
  Node,
  Prefab,
  ProgressBar,
} from "cc";
import { basePageView } from "../common/basePageView";
import { inviteModel, taskListResponseType } from "../invite/inviteModel";
import GlobalData from "../home/GloabalClass";
import { homeView } from "../home/homeView";
import { taskNodeInfo } from "./taskNodeInfo";
import WebUtils from "../common/WebUtils";
import { profileView } from "../profile/profileView";
const { ccclass, property } = _decorator;

const earnView_arrow = 'earnView_arrow'

export enum ChangeType {
  INIT = 0,
  CLICK = 1,
}

export enum TaskNodeChangeType {
    UP = 0,
    DOWN = 1
}

export enum TaskType {
    SOCIAL = 0,
    DAILY = 1
}

export const twitterTaskId = [9, 10, 11, 12, 104];

export interface TaskData {
  buttonText: string;
  icon: string;
  remark: string;
  showMsg: string;
  taskDesc: string;
  taskId: number;
  taskLink: string;
  taskName: string;
  taskReward: number;
  taskType: number;
  value1: number;
  value2: string;
  status: number;
  unlock: number;
  icon1: string;
  icon2: string;
}

export interface TaskDataList {
  taskResponseList: {
    buttonText: string;
    icon: string;
    remark: string;
    showMsg: string;
    taskDesc: string;
    taskId: number;
    taskLink: string;
    taskName: string;
    taskReward: number;
    taskType: number;
    value1: number;
    value2: string;
    status: number;
    unlock: number;
    icon1: string;
    icon2: string;
  }[];
  taskModelId: number;
  taskModelName: string;
  taskType: string;
}

export interface completeTaskResponse{
    
        code: string,
        message: string
    
}

export const taskUrls = {
  SearchTask:  GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/task/list" : "https://api.infinitytest.cc/api/v1/task/list",
  ClaimReward: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/task/claim" : "https://api.infinitytest.cc/api/v1/task/claim",
  CompleteTask: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/task/complete" : "https://api.infinitytest.cc/api/v1/task/complete",
  CheckIn: GlobalData ? "https://api.infinityg.ai/api/v1/task/checkIn" : "https://api.infinitytest.cc/api/v1/task/checkIn",
  RefreshTwitter: GlobalData ? "https://api.infinityg.ai/api/v1/oauth/refreshTwitterCode" : "https://api.infinitytest.cc/api/v1/oauth/refreshTwitterCode",
};

@ccclass("earnView")
export class earnView extends basePageView {
  @property(Prefab)
  social_prefab: Prefab;

  @property(Prefab)
  daily_prefab: Prefab;

  @property(Node)
  social_parent: Node;

  @property(Node)
  daily_parent: Node;

  @property(Node)
  discoverPage: Node;

  @property(Node)
  homePage: Node;

  @property({ type: [Node] })
  check_btns: Node[] = [];

  start() {
    window['up'] = (index: number)=>{
      this.up(index)
  } 

  window['down'] = (index: number)=>{
      this.down(index)
  } 

  window['up_d'] = (index: number)=>{
    this.up_d(index)
} 

window['down_d'] = (index: number)=>{
    this.down_d(index)
} 
  }

  async refreshTwitterCode(){
    const data = await window.axios.post<completeTaskResponse>(
        taskUrls.RefreshTwitter,
        {

        },
        {
          headers: {
            Authorization: `Bearer ${GlobalData.token}`,
          },
        }
      );
  }

  async completeTask(id: number) {
    const bindData = await window.axios.post<completeTaskResponse>(
      taskUrls.CompleteTask,
      {
        taskId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${GlobalData.token}`,
        },
      }
    );
    return bindData
  }

  freshTasks(){
    this.daily_parent.children.forEach((node)=>{
        const info = node.getComponent(taskNodeInfo).taskInfo
        GlobalData.taskData.data.data.taskModelResponses[1].taskResponseList.find((list)=>{
            if(list.taskId === info.taskId){
                if(list.status === 2 && (info.status === 1 || info.status === 0)){
                  this.setDailyTaskCompleted(node)
                  this.upDaily(this.daily_parent.children.indexOf(node))
                  info.status = list.status
                }
            }
        })
    })

    this.social_parent.children.forEach((node)=>{
      const info = node.getComponent(taskNodeInfo).taskInfo
      GlobalData.taskData.data.data.taskModelResponses[0].taskResponseList.find((list)=>{
          if(list.taskId === info.taskId){
            if(list.status === 2 && (info.status === 1 || info.status === 0)){
              this.setSocialTaskCompleted(node)
              //this.up(this.social_parent.children.indexOf(node))
              this.upSocial(this.social_parent.children.indexOf(node))
              info.status = list.status
            }
          }
      })
  })
  }

  async checkIn(index: number) {
    var config = {
      method: "post",
      url: taskUrls.CheckIn,
      headers: {
        "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
        Authorization: `Bearer ${GlobalData.token}`,
      },
    };

    await (window.axios as any)(config)
      .then(async (taskList: taskListResponseType) => {
        if (taskList.data.code === "90000") {
          this.setCheckInClaimed(index);
          await this.homePage.getComponent(homeView).invitePage.getComponent(inviteModel).initData()
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
  }

  async claimReward(id: number) {
    const bindData = await window.axios.post<any>(
      taskUrls.ClaimReward,
      {
        taskId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${GlobalData.token}`,
        },
      }
    );
    await this.homePage.getComponent(homeView).invitePage.getComponent(inviteModel).initData()
  }

  initTaskNode(info: taskListResponseType) {
    info.data.data.checkInList.forEach((task, index) => {
      this.setCheckInUnable(index)


      const now = new Date();
      const year = now.getFullYear();
      const month =
        now.getMonth() + 1 < 10
          ? `0${now.getMonth() + 1}`
          : now.getMonth() + 1;
      const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();

      const date = `${year}-${month}-${day}`;
      if (date === task.date) {
        this.setCheckInComplete(index);
      }
      this.setCheckTaskNode(task, index);
      this.check_btns[index].on(
        Button.EventType.CLICK,
        async () => {
          const now = new Date();
          const year = now.getFullYear();
          const month =
            now.getMonth() + 1 < 10
              ? `0${now.getMonth() + 1}`
              : now.getMonth() + 1;
          const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();

          const date = `${year}-${month}-${day}`;
          if (date === task.date) {
            await this.clickCheckTaskNode(index);
          } else {
            window.Telegram.WebApp.showAlert("Can only sign in today!", () => {
              // 用户点击关闭按钮后调用的回调函数
              console.log("");
            });
          }
        },
        this
      );
    });

    info.data.data.taskModelResponses.forEach((taskListPart) => {
      if (taskListPart.taskModelName === "Social tasks") {
        this.initSocialTaskNode(taskListPart as unknown as TaskDataList);
      }
      if (taskListPart.taskModelName === "Daily tasks") {
        this.initDailyTaskNode(taskListPart as unknown as TaskDataList);
      }
    });
  }

  sortByStatus(info: TaskDataList) {
    const socialTasks = info.taskResponseList.sort((a, b) => {
      // 如果一个是2，另一个不是2，则2在前
      if (a.status === 2) return -1;
      if (b.status === 2) return 1;

      // 如果一个是3，另一个不是3，则3在后
      if (a.status === 3) return 1;
      if (b.status === 3) return -1;

      // 如果一个是0或1，另一个是3，则0或1在前
      if ((a.status === 0 || a.status === 1) && b.status === 3) return -1;
      if ((b.status === 0 || b.status === 1) && a.status === 3) return 1;

      // 如果一个是0或1，另一个是2，则0或1在后
      if ((a.status === 0 || a.status === 1) && b.status === 2) return 1;
      if ((b.status === 0 || b.status === 1) && a.status === 2) return -1;

      // 否则，保持原始顺序（即0和1的相对位置不变）
      return 0;
    });
    return socialTasks;
  }

  showCheckInfoPopUp(){
    window.Telegram.WebApp.showPopup({
        title: 'Complete',
        message: 'If you have already bound your twitter, please click "OK"!',
        buttons: [
          { id: 'button1', text: 'ok' },
        ]
      }, async (buttonId) => {
        // 弹出窗口关闭时的回调函数
        if (buttonId) {
          switch (buttonId) {
            case 'button1':
              await this.homePage.getComponent(homeView).invitePage.getComponent(inviteModel).initData()
              this.homePage.getComponent(homeView).profile.getComponent(profileView).setTwitterInfo()
              break;
            default:
              console.log('未知的按钮被点击');
          }
        } else {
          console.log('弹出窗口被关闭，没有点击任何按钮');
        }
      });
  }

  setSocialTaskUncompleted(node: Node){
    node.getChildByName('uncomplete').active = true
    node.getChildByName('complete').active = false
    node.getChildByName('claimed').active = false
    node.getChildByName('locked').active = false
  }

  setSocialTaskCompleted(node: Node){
    node.getChildByName('uncomplete').active = false
    node.getChildByName('complete').active = true
    node.getChildByName('claimed').active = false
    node.getChildByName('locked').active = false
  }

  setSocialTaskClaimed(node: Node){
    node.getChildByName('uncomplete').active = false
    node.getChildByName('complete').active = false
    node.getChildByName('claimed').active = true
    node.getChildByName('locked').active = false
  }

  setSocialTaskLock(node: Node){
    node.getChildByName('uncomplete').active = false
    node.getChildByName('complete').active = false
    node.getChildByName('claimed').active = false
    node.getChildByName('locked').active = true
  }

  ////
  setDailyTaskUncompleted(node: Node){

    node.getChildByName('un_complete_bg').active = true
    node.getChildByName('complete_bg').active = false
    node.getChildByName('claimed').active = false
    node.getChildByName('locked').active = false
  }

  setDailyTaskCompleted(node: Node){

    node.getChildByName('un_complete_bg').active = false
    node.getChildByName('complete_bg').active = true
    node.getChildByName('claimed').active = false
    node.getChildByName('locked').active = false
  }

  setDailyTaskClaimed(node: Node){

    node.getChildByName('un_complete_bg').active = false
    node.getChildByName('complete_bg').active = false
    node.getChildByName('claimed').active = true
    node.getChildByName('locked').active = false
  }

  setDailyTaskLock(node: Node){

    node.getChildByName('un_complete_bg').active = false
    node.getChildByName('complete_bg').active = false
    node.getChildByName('claimed').active = false
    node.getChildByName('locked').active = true
  }

  initSocialTaskNode(info: TaskDataList) {
    const socialTasks = this.sortByStatus(info);
    socialTasks.forEach((task, index) => {
      const child = instantiate(this.social_prefab);
      child.getComponent(taskNodeInfo).taskInfo = task;
      child.getComponent(taskNodeInfo).index = index
      this.updateSocialTaskUiByState(child, ChangeType.INIT, index);
      if(task.unlock === 0){
        this.setSocialTaskLock(child)
      }
      child.on(
        Button.EventType.CLICK,
        async () => {
            if(task.unlock === 0){
                window.Telegram.WebApp.showAlert("Coming soon!", () => {
                    console.log("");
                  });
                  return
              }
          if (child.getComponent(taskNodeInfo).taskInfo.status === 3) {
            return;
          }
          
          if (
            twitterTaskId.indexOf(
                child.getComponent(taskNodeInfo).taskInfo.taskId
            ) >= 0 &&
            !GlobalData.taskData.data.data.twitterUserName
          ) {
            this.checkTwitterPre()
            return;
          }
          if (
            child.getComponent(taskNodeInfo).taskInfo.status === 1 ||
            child.getComponent(taskNodeInfo).taskInfo.status === 0
          ) {
            if(task.taskId !== 16){
                //是否是钱包任务
                window.Telegram.WebApp.openLink(task.taskLink, {
                    tryInstantView: true,
                  });
                  const task_response = await this.completeTask(task.taskId);
                  if(task_response?.data.code === '2004'){
                    await this.refreshTwitterCode()
                  }else{
                    this.changeDailyOrSocialTaskState(2, index, child);
                    this.shiftTaskRange(index, TaskNodeChangeType.UP, TaskType.SOCIAL)
                  }

            }else{
                if(!GlobalData.wallet_address){
                    window.Telegram.WebApp.showPopup({
                        title: '',
                        message: 'Please bind wallet first!',
                        buttons: [
                          { id: 'button1', text: 'ok' },
                        ]
                      }, async (buttonId) => {
                        // 弹出窗口关闭时的回调函数
                        if (buttonId) {
                          switch (buttonId) {
                            case 'button1':
                                this.homePage
                                .getComponent(homeView)
                                .shiftCurrentPage(
                                  {
                                    currentTarget:
                                      this.homePage.getComponent(homeView).drawPageBtn,
                                  } as EventTouch,
                                  "3"
                                );
                              break;
                            default:
                          }
                        }
                      });
                }else{
                    const task_response = await this.completeTask(task.taskId);
                    if(task_response?.data.code === '2004'){
                        await this.refreshTwitterCode()
                    }else{
                        this.changeDailyOrSocialTaskState(2, index, child);
                        this.shiftTaskRange(index, TaskNodeChangeType.UP, TaskType.DAILY)
                    }

                }
            }

          }else if (child.getComponent(taskNodeInfo).taskInfo.status === 2) {
            await this.claimReward(task.taskId);
            this.changeDailyOrSocialTaskState(2, index, child);
            this.shiftTaskRange(index, TaskNodeChangeType.DOWN, TaskType.SOCIAL)
          }
        },
        this
      );

      this.social_parent.addChild(child);
    });
  }

  initDailyTaskNode(info: TaskDataList) {
    const dailyTasks = this.sortByStatus(info);
    dailyTasks.forEach((task, index) => {
      const child = instantiate(this.daily_prefab);
      child.getComponent(taskNodeInfo).taskInfo = task;
      child.getComponent(taskNodeInfo).index = index
      this.updateDailyTaskUiByState(child, ChangeType.INIT, index);
      if(task.unlock === 0){
        this.setDailyTaskLock(child)
      }
      child.on(
        Button.EventType.CLICK,
        async () => {
            if(task.unlock === 0){
                window.Telegram.WebApp.showAlert("Coming soon!", () => {
                    console.log("");
                  });
                return
              }

              if (
                twitterTaskId.indexOf(
                    child.getComponent(taskNodeInfo).taskInfo.taskId
                ) >= 0 &&
                !GlobalData.taskData.data.data.twitterUserName
              ) {
                this.checkTwitterPre()
                return;
              }
          if (child.getComponent(taskNodeInfo).taskInfo.status === 3) {
            return;
          }
          if (
            child.getComponent(taskNodeInfo).taskInfo.status === 1 ||
            child.getComponent(taskNodeInfo).taskInfo.status === 0
          ) {
            //跳转大厅
            if(child.getComponent(taskNodeInfo).taskInfo?.remark?.length){
              const gameInitData = new URLSearchParams(window.location.search).get("gameData");
              if(window?.Telegram?.WebApp?.initData){
                window.Telegram.WebApp.openTelegramLink(`${child.getComponent(taskNodeInfo).taskInfo.remark}?startapp=${window.btoa(window?.Telegram?.WebApp?.initData)}`, { tryInstantView: true });
              }else if(gameInitData){
                window.Telegram.WebApp.openTelegramLink(`${child.getComponent(taskNodeInfo).taskInfo.remark}?startapp=${gameInitData}`, { tryInstantView: true });
              }
              
            }else{
              this.homePage
              .getComponent(homeView)
              .shiftCurrentPage(
                {
                  currentTarget:
                    this.homePage.getComponent(homeView).discoverPageBtn,
                } as EventTouch,
                "0"
              );
            }

            // this.discoverPage.setPosition(0, 0);
            // this.node.setPosition(-5000, 0);
            //await this.completeTask(task.taskId);
            this.changeDailyOrSocialTaskState(3, index, child);
          }else if (child.getComponent(taskNodeInfo).taskInfo.status === 2) {
            await this.claimReward(task.taskId);
            this.changeDailyOrSocialTaskState(3, index, child);
            this.shiftTaskRange(index, TaskNodeChangeType.DOWN, TaskType.DAILY)
          }
        },
        this
      );

      this.daily_parent.addChild(child);
    });
  }

  up(index){
    const indexPos = this.social_parent.children[index].getPosition()
    const firstPos = this.social_parent.children[0].getPosition()
    this.social_parent.children[0].setPosition(indexPos)
    this.social_parent.children[index].setPosition(firstPos)

    this.social_parent.children[0].getComponent(taskNodeInfo).index === index
    this.social_parent.children[index].getComponent(taskNodeInfo).index = 0

    const temp = this.social_parent.children[index]
    this.social_parent.children[index] = this.social_parent.children[0]
    this.social_parent.children[0] = temp

    console.log('======up', this.node.children)
}

down(index){
  console.log('======down',index, this.node.children)
    let lengthUnclaimed = 0
    this.social_parent.children.forEach((node)=>{
      if(node.getComponent(taskNodeInfo).taskInfo.status !== 3){
        lengthUnclaimed = lengthUnclaimed + 1
      }
    })
    const indexPos = this.social_parent.children[index].getPosition()
    const lastPos = this.social_parent.children[lengthUnclaimed - 1].getPosition()
    this.social_parent.children[lengthUnclaimed - 1].setPosition(indexPos)
    this.social_parent.children[index].setPosition(lastPos)

    this.social_parent.children[index].getComponent(taskNodeInfo).index === lengthUnclaimed - 1
    this.social_parent.children[lengthUnclaimed - 1].getComponent(taskNodeInfo).index = index

    const temp = this.social_parent.children[index]
    this.social_parent.children[index] = this.social_parent.children[lengthUnclaimed - 1]
    this.social_parent.children[lengthUnclaimed - 1] = temp

    console.log('======down',index, this.node.children)
}

up_d(index){
  const indexPos = this.daily_parent.children[index].getPosition()
  const firstPos = this.daily_parent.children[0].getPosition()
  this.daily_parent.children[0].setPosition(indexPos)
  this.daily_parent.children[index].setPosition(firstPos)
  const temp = this.daily_parent.children[index]
  this.daily_parent.children[index] = this.daily_parent.children[0]
  this.daily_parent.children[0] = temp

  console.log('======up',index, this.node.children)
}

down_d(index){
  console.log('======down',index, this.node.children)
    let lengthUnclaimed = 0
    this.daily_parent.children.forEach((node)=>{
      if(node.getComponent(taskNodeInfo).taskInfo.status !== 3){
        lengthUnclaimed = lengthUnclaimed + 1
      }
    })
    const indexPos = this.daily_parent.children[index].getPosition()
    const lastPos = this.daily_parent.children[lengthUnclaimed - 1].getPosition()
    this.daily_parent.children[lengthUnclaimed - 1].setPosition(indexPos)
    this.daily_parent.children[index].setPosition(lastPos)

    this.daily_parent.children[index].getComponent(taskNodeInfo).index === lengthUnclaimed - 1
    this.daily_parent.children[lengthUnclaimed - 1].getComponent(taskNodeInfo).index = index

    const temp = this.daily_parent.children[index]
    this.daily_parent.children[index] = this.daily_parent.children[lengthUnclaimed - 1]
    this.daily_parent.children[lengthUnclaimed - 1] = temp

    console.log('======down',index, this.node.children)
}

upSocial(startIndex: number){
  for(let index = startIndex; index >= 1; index--){
    this.swapSocial(index, index - 1)
  }
}

downSocial(startIndex: number){
  // let lengthUnclaimed = 0
  // this.social_parent.children.forEach((node)=>{
  //   if(node.getComponent(taskNodeInfo).taskInfo.status !== 3){
  //     lengthUnclaimed = lengthUnclaimed + 1
  //   }
  // })
  for(let index = startIndex; index <= this.social_parent.children.length - 2; index++){
    this.swapSocial(index, index + 1)
  }
}

upDaily(startIndex: number){
  for(let index = startIndex; index >= 1; index--){
    this.swapDaily(index, index - 1)
  }
}

downDaily(startIndex: number){
  // let lengthUnclaimed = 0
  // this.social_parent.children.forEach((node)=>{
  //   if(node.getComponent(taskNodeInfo).taskInfo.status !== 3){
  //     lengthUnclaimed = lengthUnclaimed + 1
  //   }
  // })
  for(let index = startIndex; index <= this.daily_parent.children.length - 2; index++){
    this.swapDaily(index, index + 1)
  }
}

swapDaily(indexFrom, indexTo){
  const indexPos = this.daily_parent.children[indexFrom].getPosition()
  const firstPos = this.daily_parent.children[indexTo].getPosition()
  this.daily_parent.children[indexTo].setPosition(indexPos)
  this.daily_parent.children[indexFrom].setPosition(firstPos)
  const temp = this.daily_parent.children[indexFrom]
  this.daily_parent.children[indexFrom] = this.daily_parent.children[indexTo]
  this.daily_parent.children[indexTo] = temp
}

swapSocial(indexFrom, indexTo){
  const indexPos = this.social_parent.children[indexFrom].getPosition()
  const firstPos = this.social_parent.children[indexTo].getPosition()
  this.social_parent.children[indexTo].setPosition(indexPos)
  this.social_parent.children[indexFrom].setPosition(firstPos)
  const temp = this.social_parent.children[indexFrom]
  this.social_parent.children[indexFrom] = this.social_parent.children[indexTo]
  this.social_parent.children[indexTo] = temp
}

  shiftTaskRange(index: number, type: TaskNodeChangeType, taskType: TaskType){

    const nodes = taskType === TaskType.SOCIAL ? this.social_parent.children : this.daily_parent.children

    // if(type === TaskNodeChangeType.UP){
    //   const indexPos = nodes[index].getPosition()
    //   const firstPos = nodes[0].getPosition()
    //   this.node.children[0].setPosition(indexPos)
    //   this.node.children[index].setPosition(firstPos)
    //   const temp = nodes[index]
    //   this.node.children[index] = nodes[0]
    //   nodes[0] = temp
    // }else{
    //   const indexPos = nodes[index].getPosition()
    //   const lastPos = nodes[this.node.children.length - 1].getPosition()
    //   nodes[this.node.children.length - 1].setPosition(indexPos)
    //   nodes[index].setPosition(lastPos)
    //   const temp = this.node.children[index]
    //   nodes[index] = nodes[nodes.length - 1]
    //   nodes[nodes.length - 1] = temp
    // }






    // const tasks = taskType === TaskType.SOCIAL ? this.social_parent.children : this.social_parent.children
    // if (index < 0 || index >= tasks.length) {
    //     throw new Error('Index out of bounds');
    // }
    // let taskNodePosY = []
    // tasks.forEach((task, index)=>{
    //     taskNodePosY.push(task.getPosition())
    // })
    // const indexPos = taskNodePosY[index]
    // const firstPos = taskNodePosY[0]
    // const lastPos = taskNodePosY[tasks.length - 1]
    // const nodes = taskType === TaskType.SOCIAL ? this.social_parent.children : this.daily_parent.children
    // if(type === TaskNodeChangeType.UP){
    //   nodes[0].setPosition(indexPos)
    //   nodes[index].setPosition(firstPos)
    //   const temp = nodes[index]
    //   nodes[index] = nodes[0]
    //   nodes[0] = temp
    // }else{
    //   nodes[tasks.length - 1].setPosition(indexPos)
    //   nodes[index].setPosition(lastPos)
    //   const temp = nodes[index]
    //   nodes[index] = nodes[tasks.length - 1]
    //   nodes[tasks.length - 1] = temp
    // }



    // if(type === TaskNodeChangeType.UP){
    //   // 将指定索引的元素移动到数组的最后面
    //   const [pointToMove] = taskNodePosY.splice(index, 1); // 移除指定索引的元素
    //   taskNodePosY.push(pointToMove); // 将该元素添加到数组的末尾
    // }else{
    //     const [pointToMove] = taskNodePosY.splice(index, 1); // 移除指定索引的元素
    //     taskNodePosY.push(pointToMove); // 将该元素添加到数组的末尾
    // }
    // this.social_parent.children.forEach((node, index)=>{
    //     node.setPosition(taskNodePosY[index])
    //   })
  }

  checkTwitterPre(){
        const twitterOauthUrl = GlobalData.isProduction ? `https://www.infinityg.ai?tgId=${GlobalData.token}` : `https://www.infinitytest.cc?tgId=${GlobalData.token}`
        //this.profileView.closeProfile()
        window.Telegram.WebApp.showPopup({
            title: 'Please bind your twitter',
            message: 'Bind your twitter and start the exploration!',
            buttons: [
              { id: 'button1', text: 'bind now' },
            ]
          }, (buttonId) => {
            // 弹出窗口关闭时的回调函数
            if (buttonId) {
              switch (buttonId) {
                case 'button1':
                  window.Telegram.WebApp.openLink(`${twitterOauthUrl}`, { tryInstantView: false });
                  this.scheduleOnce(()=>{
                    this.showCheckInfoPopUp()
                  }, 2)
                  break;
                default:
                  console.log('');
              }
            } else {
              console.log('');
            }
          });
  }

  async clickCheckTaskNode(index: number) {
    await this.checkIn(index);
  }

  setCheckTaskNode(info, index) {
    this.check_btns[index].getChildByName("count").getComponent(Label).string =
      String(GlobalData.taskData.data.data.checkInList[index].point);
    if (info.status === 1) {
      this.setCheckInClaimed(index);
    }
  }

  changeCheckTaskState(index: number) {
    this.check_btns[index].getChildByName("uncoplete").active = true;
    this.check_btns[index].getChildByName("complete").active = false;
    this.check_btns[index].getChildByName("clam").active = false;
  }

  setCheckInUnable(index: number){
    this.check_btns[index].getChildByName("uncoplete").active = true;
    this.check_btns[index].getChildByName("complete").active = false;
    this.check_btns[index].getChildByName("clam").active = false;
  }

  setCheckInComplete(index: number){
    this.check_btns[index].getChildByName("uncoplete").active = false;
    this.check_btns[index].getChildByName("complete").active = true;
    this.check_btns[index].getChildByName("clam").active = false;
  }

  setCheckInClaimed(index: number){
    this.check_btns[index].getChildByName("uncoplete").active = false;
    this.check_btns[index].getChildByName("complete").active = false;
    this.check_btns[index].getChildByName("clam").active = true;
  }

  changeDailyOrSocialTaskState(type, index, node: Node) {
    if (type === 2) {
      this.updateSocialTaskUiByState(node, ChangeType.CLICK, index);
      //改变ui
    }
    if (type === 3) {
      //改变ui
      this.updateDailyTaskUiByState(node, ChangeType.CLICK, index);
    }
  }

  async updateDailyTaskUiByState(node, type: ChangeType, index: number) {
    const info = node.getComponent(taskNodeInfo).taskInfo;
    WebUtils.getRemoteImg(info.icon1, node.getChildByName("icon"))
    WebUtils.getRemoteImg(info.icon2, node.getChildByName('complete_bg').getChildByName("icon"))
    node.getChildByName("count").getComponent(Label).string = info.taskReward;

    node.getChildByName("desc").getComponent(Label).string = info.taskName;
    node.getChildByName('complete_bg').getChildByName("count").getComponent(Label).string = info.taskReward;

    node.getChildByName('complete_bg').getChildByName("desc").getComponent(Label).string = info.taskName;
    //node.getChildByName('ProgressBar').getComponent(ProgressBar).value = info

    if (type === ChangeType.INIT) {
      if (info.status === 1 || info.status === 0) {
        this.setDailyTaskUncompleted(node)
        node.getChildByName("ProgressBar").getComponent(ProgressBar).progress = info.value1 / info.totalValue1;
        node.getChildByName('progress_text').getComponent(Label).string = `${info.value1 / info.totalValue1 * 100}%`
      }else if (info.status === 2) {
        this.setDailyTaskCompleted(node)
        node.getChildByName("ProgressBar").getComponent(ProgressBar).progress = info.value1 / info.totalValue1;
                node.getChildByName('progress_text').getComponent(Label).string = `${info.value1 / info.totalValue1 * 100}%`
      }else if (info.status === 3) {
        this.setDailyTaskClaimed(node)
        node.getChildByName("ProgressBar").getComponent(ProgressBar).progress = info.value1 / info.totalValue1;
                node.getChildByName('progress_text').getComponent(Label).string = `${info.value1 / info.totalValue1 * 100}%`
      }
    } else {
      if (info.status === 1 || info.status === 0) {

      }else if (info.status === 2) {
        this.setDailyTaskClaimed(node)
        this.downDaily(this.daily_parent.children.indexOf(node))
        node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
      }
    }
  }

  updateSocialTaskUiByState(node, type: ChangeType, index: number) {
    const info = node.getComponent(taskNodeInfo).taskInfo;
    WebUtils.getRemoteImg(info.icon1, node.getChildByName("icon"))
    WebUtils.getRemoteImg(info.icon2, node.getChildByName('complete').getChildByName("icon"))
    node.getChildByName("count").getComponent(Label).string = info.taskReward;
    node.getChildByName("desc").getComponent(Label).string = info.taskName;
    node.getChildByName('complete').getChildByName("count").getComponent(Label).string = info.taskReward;
    node.getChildByName('complete').getChildByName("desc").getComponent(Label).string = info.taskName;
    if (type == ChangeType.INIT) {
      if (info.status === 1 || info.status === 0) {
        this.setSocialTaskUncompleted(node)
      }else if (info.status === 2) {
        this.setSocialTaskCompleted(node)

      }else if (info.status === 3) {
        this.setSocialTaskClaimed(node)

      }
    } else {
      if (info.status === 1 || info.status === 0) {
        this.setSocialTaskCompleted(node)
        // this.up(this.social_parent.children.indexOf(node))
        this.upSocial(this.social_parent.children.indexOf(node))
        info.status = 2;
      }else if (info.status === 2) {
        this.setSocialTaskClaimed(node)
        this.downSocial(this.social_parent.children.indexOf(node))
        info.status = 3;
      }
    }
  }

  update(deltaTime: number) {}
}
