import loginData from "../assets/js/Data"

export default {
  /**
   * 获取用户量数据
   * @param cb
   */
  _getLoginData(cb) {
    let data=loginData.LoginCount
    cb(data)
  }
}
