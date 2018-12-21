//index.js
//获取应用实例
const app = getApp();
import api from '../../api.js';

Page({
  data: {
    current: 'homepage'
  },
  onLoad: function (options) {
    api.checkLogin(function(res) {
      if (res.data.success) {
        api.storeToken(res.header.token)
        wx.switchTab({
          url: '/pages/company/company'
        })
      } else {
        wx.reLaunch({
          url: '/pages/login/login',
        })
      }
      console.log(res)
    })
  },
});