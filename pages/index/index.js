//index.js
//获取应用实例
const app = getApp();
import api from '../../api.js';

Page({
  data: {
    current: 'homepage'
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中,请稍后'
    });

    api.checkLogin(function(res) {
      console.log(res)
      wx.hideLoading()
    })
  },
});