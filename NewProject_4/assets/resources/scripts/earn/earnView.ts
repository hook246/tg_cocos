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
  unlock: number
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
    unlock: number
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
  SearchTask: "https://api.infinitytest.cc/api/v1/task/list",
  ClaimReward: "https://api.infinitytest.cc/api/v1/task/claim",
  CompleteTask: "https://api.infinitytest.cc/api/v1/task/complete",
  CheckIn: "https://api.infinitytest.cc/api/v1/task/checkIn",
  RefreshTwitter: "https://api.infinitytest.cc/api/v1/oauth/refreshTwitterCode",
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

  start() {}

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

  freshDailyTask(){
    this.daily_parent.children.forEach((node)=>{
        const info = node.getComponent(taskNodeInfo).taskInfo
        GlobalData.taskData.data.data.taskModelResponses[1].taskResponseList.find((list)=>{
            if(list.taskId === info.taskId){
                info.status = list.status
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
          this.changeCheckTaskState(index);
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

  initSocialTaskNode(info: TaskDataList) {
    const socialTasks = this.sortByStatus(info);
    socialTasks.forEach((task, index) => {
      const child = instantiate(this.social_prefab);
      child.getComponent(taskNodeInfo).taskInfo = task;
      if(task.unlock === 0){
        child.getChildByName('locked').active = true;
      }
      this.updateSocialTaskUiByState(child, ChangeType.INIT, index);
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
      if(task.unlock === 0){
        child.getChildByName('locked').active = true;
      }
      this.updateDailyTaskUiByState(child, ChangeType.INIT, index);
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
            this.homePage
              .getComponent(homeView)
              .shiftCurrentPage(
                {
                  currentTarget:
                    this.homePage.getComponent(homeView).discoverPageBtn,
                } as EventTouch,
                "0"
              );
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

  shiftTaskRange(index: number, type: TaskNodeChangeType, taskType: TaskType){
    // const tasks = taskType === TaskType.SOCIAL ? this.social_parent.children : this.social_parent.children
    // if (index < 0 || index >= tasks.length) {
    //     throw new Error('Index out of bounds');
    // }
    // let taskNodePosY = []
    // tasks.forEach((task, index)=>{
    //     taskNodePosY.push(task.getPosition())
    // })
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
        const twitterOauthUrl = `https://www.infinitytest.cc?tgId=${GlobalData.token}`
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
      this.changeCheckTaskState(index);
    }
  }

  changeCheckTaskState(index: number) {
    this.check_btns[index].getChildByName("uncoplete").active = false;
    this.check_btns[index].getChildByName("complete").active = true;
    this.check_btns[index].getChildByName("check").active = true;
    this.check_btns[index].getChildByName("dollar").active = false;
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
    WebUtils.getRemoteImg(info.icon, node.getChildByName("icon"))
    node.getChildByName("count").getComponent(Label).string = info.taskReward;
    node.getChildByName("desc").getComponent(Label).string = info.taskName;
    //node.getChildByName('ProgressBar').getComponent(ProgressBar).value = info

    if (type === ChangeType.INIT) {
      if (info.status === 1 || info.status === 0) {
        node.getChildByName("un_complete_bg").active = true;
        node.getChildByName("complete_bg").active = false;
        node.getChildByName("dollar").active = true;
        node.getChildByName("count").active = true;
        node.getChildByName("check").active = false;
        node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 0;
      }else if (info.status === 2) {
        node.getChildByName("un_complete_bg").active = false;
        node.getChildByName("complete_bg").active = true;
        node.getChildByName("dollar").active = true;
        node.getChildByName("count").active = true;
        node.getChildByName("check").active = false;
        node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
      }else if (info.status === 3) {
        node.getChildByName("un_complete_bg").active = false;
        node.getChildByName("complete_bg").active = true;
        node.getChildByName("dollar").active = false;
        node.getChildByName("count").active = false;
        node.getChildByName("check").active = true;
        node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
      }
    } else {
      if (info.status === 1 || info.status === 0) {
        // node.getChildByName("un_complete_bg").active = false;
        // node.getChildByName("complete_bg").active = true;
        // node.getChildByName("dollar").active = true;
        // node.getChildByName("count").active = true;
        // node.getChildByName("check").active = false;
        // node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
      }else if (info.status === 2) {
        node.getChildByName("un_complete_bg").active = false;
        node.getChildByName("complete_bg").active = true;
        node.getChildByName("dollar").active = false;
        node.getChildByName("count").active = false;
        node.getChildByName("check").active = true;
        node.getChildByName("ProgressBar").getComponent(ProgressBar).value = 1;
      }
    }
  }

  updateSocialTaskUiByState(node, type: ChangeType, index: number) {
    const info = node.getComponent(taskNodeInfo).taskInfo;
    WebUtils.getRemoteImg(info.icon, node.getChildByName("icon"))
    node.getChildByName("count").getComponent(Label).string = info.taskReward;
    node.getChildByName("desc").getComponent(Label).string = info.taskName;

    if (type == ChangeType.INIT) {
      if (info.status === 1 || info.status === 0) {
        node.getChildByName("uncomplete").active = true;
        node.getChildByName("complete").active = false;
        node.getChildByName("dollar").active = true;
        node.getChildByName("count").active = true;
        node.getChildByName("check").active = false;
      }else if (info.status === 2) {
        node.getChildByName("uncomplete").active = false;
        node.getChildByName("complete").active = true;
        node.getChildByName("dollar").active = true;
        node.getChildByName("count").active = true;
        node.getChildByName("check").active = false;
      }else if (info.status === 3) {
        node.getChildByName("uncomplete").active = false;
        node.getChildByName("complete").active = true;
        node.getChildByName("dollar").active = false;
        node.getChildByName("count").active = false;
        node.getChildByName("check").active = true;
      }
    } else {
      if (info.status === 1 || info.status === 0) {
        node.getChildByName("uncomplete").active = false;
        node.getChildByName("complete").active = true;
        node.getChildByName("dollar").active = true;
        node.getChildByName("count").active = true;
        node.getChildByName("check").active = false;
        info.status = 2;
      }else if (info.status === 2) {
        node.getChildByName("uncomplete").active = false;
        node.getChildByName("complete").active = true;
        node.getChildByName("dollar").active = false;
        node.getChildByName("count").active = false;
        node.getChildByName("check").active = true;
        info.status = 3;
      }
    }
  }

  update(deltaTime: number) {}
}
