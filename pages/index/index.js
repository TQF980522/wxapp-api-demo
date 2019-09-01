import User from '../../api/user.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempArr: [],

    loading: false, //下拉加载更多

    current: '中国',
    items: [{
        value: '美国'
      },
      {
        value: '中国'
      },
      {
        value: '巴西'
      },
      {
        value: '日本'
      },
      {
        value: '英国'
      },
      {
        value: '法国'
      },
    ],

    show: false,
    itemList: [{
        name: '今日不再出现此类内容',
      },
      {
        name: '屏蔽',
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _this = this;
    _this.login();
  },
  // DEMOMETHOD
  login() {
    let _this = this;
    User.apiLogin({
      // api params
    }).then(res => {
      // handle success
      wx.lin.showMessage({
        type: 'primary',
        // type: 'success',
        icon: 'soud',
        duration: 1500,
        content: '努力加载中...'
      })
      console.log(res, 'sssssssssss');
      let resData = res.data.toMao;
      _this.setData({
        tempArr: resData,
        loading: false
      })
    }).catch(error => {
      // handle error
      // console.log(error, 'sssssssssss');
    })
  },

  showMessage() {
    wx.navigateTo({
      url: '/pages/demo/demo',
    })

  },
  onChangeTap(e) {
    console.log(e)
  },

  toggleActionSheet() {
    this.setData({
      show: true
    })
  },

  // lincancel() {
  //   wx.showToast({
  //     title: '取消',
  //     icon: 'none'
  //   })
  // },

  linitemtap(e) {
    console.log(e, 'haaaaaaaaaaa')
    wx.showToast({
      title: e.detail.item.name,
      icon: 'none',
      duration: 3000,
    })
  },

  showActionSheet() {
    wx.lin.showActionSheet({
      itemList: [{
          name: '今日不再出现此类内容'
        },
        {
          name: '屏蔽'
        }
      ]
    })
  },
})