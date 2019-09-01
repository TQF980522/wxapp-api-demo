/**
 * @desc    API请求接口类封装
 * @author  734131533@qq.com
 * @date    2018-11-20
 */

// request.js
const request = options => {
  return new Promise((resolve, reject) => {
    const {
      data,
      method
    } = options
    if (data && method !== 'get') {
      options.data = JSON.stringify(data)
    }
    wx.showLoading({
      title: '请求中...',
    })
    wx.request({
      header: {
        'Content-Type': 'application/json'
      },
      ...options,
      success: function(res) {
        if (res.data.status == 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
        wx.hideLoading()
      },
      fail: function(res) {
        reject(res.data)
      }
    })
  })
}
export default request //ES6语法导出request方法