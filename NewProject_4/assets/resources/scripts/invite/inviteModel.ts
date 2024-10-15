import { _decorator, Component, Node } from "cc";
import GlobalData from "../home/GloabalClass";
import { basePageView } from "../common/basePageView";
import { basePageModel } from "../common/basePageModel";
import { inviteView } from "./inviteView";
import { earnView } from "../earn/earnView";
import { homeView } from "../home/homeView";
const { ccclass, property } = _decorator;

export const taskUrls = {
  SearchTask: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/task/list" : "https://api.infinitytest.cc/api/v1/task/list",
  ClaimReward: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/task/claim" : "https://api.infinitytest.cc/api/v1/task/claim",
  CompleteTask: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/task/complete" : "https://api.infinitytest.cc/api/v1/task/complete",
  CheckIn: GlobalData.isProduction ? "https://api.infinityg.ai/api/v1/task/checkIn" : "https://api.infinitytest.cc/api/v1/task/checkIn",
};

export interface taskListResponseType {
    
        data:{
            code: string;
            data: {
              checkInList: {
                checkInNo: string;
                date: string;
                point: number;
                status: number;
              }[];
              gamePoint: number;
              taskModelResponses: {
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
                  status: number
                }[];
                taskModelId: number;
                taskModelName: string;
                taskType: string;
              }[];
              totalInviteNum: number;
              totalPoint: number;
              twitterUserName: string;
              invitePoint: number
            };
            message: string;
        }
}

@ccclass("inviteModel")
export class inviteModel extends basePageModel {
    invitePage: inviteView
    earnPage: earnView
    inviteCode: any;
  start() {
    this.invitePage = this.view.getComponent(inviteView)
  }

  update(deltaTime: number) {}

  async initData(){
    this.inviteCode = GlobalData.inviteCode
    await this.getTaskList()
  }

  async getTaskList() {
        var config = {
            method: 'post',
            url: GlobalData.isProduction ? 'https://api.infinityg.ai/api/v1/task/list' : 'https://api.infinitytest.cc/api/v1/task/list',
            headers: { 
              'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
              'Authorization': `Bearer ${GlobalData.token}`
            },
            params: {
              page: 'GAME_LOBBY',
              // 添加更多参数
            }
          };
        
        const taskList: taskListResponseType = await (window.axios as any)(config)
        this.invitePage.setInviteInfo(taskList.data.data.totalInviteNum, taskList.data.data.invitePoint)
        this.invitePage.home.getComponent(homeView).game_point.string = String(
            taskList.data.data.totalPoint
          );
        GlobalData.taskData = taskList
        // .then(function (taskList: taskListResponseType) {
        //    this.invitePage.setInviteInfo(taskList.data.totalInviteNum, taskList.data.gamePoint)
        //    GlobalData.taskData = taskList
        //    cb(taskList)
        // })
        // .catch(function (error) {
        //    console.log(error);
        // });

    //   const taskList = await window.axios.post<taskListResponseType>(
    //     taskUrls.SearchTask,
    //     {
    //         page: 'GAME_LOBBY',
    //     },{
    //         headers: { 
    //               'Authorization': `Bearer ${GlobalData.token}`
    //         }
    //     }
    //   );

  }
}
