import { _decorator, Component, InstanceMaterialType, Node } from 'cc';
import GlobalData from '../home/GloabalClass';
import { discoverView } from './discoverView';
import { basePageModel } from '../common/basePageModel';
const { ccclass, property } = _decorator;

export const gamesUrls = {
    paly_list: GlobalData.isProduction ? 'https://api.infinityg.ai/hall/api/discover/list' : 'https://api.infinitytest.cc/hall/api/discover/list',
    click : GlobalData.isProduction ?'https://api.infinityg.ai/hall/api/discover/click' : 'https://api.infinitytest.cc/hall/api/discover/click'
}

export interface GamesDataType{
    code: string;
    data: {
        desc:string,
        hot: number,
        id: number,
        icon: string,
        name: string,
        position: number,
        sort: number,
        tags: string[],
        type: number,
        url: string
    }[]
    message: string;
}



@ccclass('discoverModel')
export class discoverModel extends basePageModel {

    game_list: {
        desc:string,
        hot: number,
        id: number,
        icon: string,
        name: string,
        position: number,
        sort: number,
        tags: string[],
        type: number,
        url: string
    }[]
    play_list: any
    discoverView: discoverView

    start() {
        this.discoverView = this.view.getComponent(discoverView)
    }

    update(deltaTime: number) {
        
    }

    async initData(){
        this.game_list = await this.getGames()
        this.play_list = await this.getUgcs()
        this.discoverView.initGameViews(this.game_list.reverse())
        this.discoverView.initUgcViews(this.play_list)
    }

    async getGames(){
        const walletInfo = await window.axios.post<GamesDataType>(
            gamesUrls.paly_list
          ,{
            type: 1
          },{
              headers: { 
                    'Authorization': `Bearer ${GlobalData.token}`
                }
          });
          return walletInfo?.data?.data;
    }

    async getUgcs(){
        const walletInfo = await window.axios.post<GamesDataType>(
            gamesUrls.paly_list
          ,{
            type: 2
          },{
              headers: { 
                    'Authorization': `Bearer ${GlobalData.token}`
                }
          });
          return walletInfo?.data?.data;
    }

    async playCurrentGame(event, type: string){
        const walletInfo = await window.axios.post<any>(
            gamesUrls.click
          ,{
            adId: type === '1' ? this.discoverView.current_game_info.id : this.discoverView.current_ugc_info.id
          },{
              headers: { 
                    'Authorization': `Bearer ${GlobalData.token}`
                }
          });
          return walletInfo?.data?.data;
    }
}

