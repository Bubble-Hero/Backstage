import YuanData from "../assets/js/Data"

export default {
  /**
   * 获取用户量数据
   * @param cb
   */
  _getUserData(cb) {
    let data=YuanData.userNumber
          cb(data)
  }
}
