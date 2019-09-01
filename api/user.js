import request from '../utils/request.js';
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl;
/**
 * user.js 
 * 用户部分api接口管理 
 */

// demoMethod 示例方法 登录  该方法在页面index中使用
function apiLogin(data) {
  return request({
    url: `${baseUrl}/api/version/test`,
    method: 'post',
    data
  })
}

module.exports = {
  apiLogin: apiLogin
}