import { taskListResponseType } from "../invite/inviteModel"

class GlobalData {
    isProduction: boolean = true
    token: any
    inviteCode: any
    taskData: taskListResponseType
    wallet_address: string
    username: string
    avatar: string
}
export default new GlobalData()