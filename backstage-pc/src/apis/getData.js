
import loginData from "../assets/js/Data"

import YuanData from "../assets/js/Data"


export default {
  /**
   * 获取用户量数据
   * @param cb
   */

  _getLoginData(cb) {
    let data=loginData.LoginCount
    cb(data)

  _getUserData(cb) {
    let data=YuanData.userNumber
          cb(data)

  }
}
