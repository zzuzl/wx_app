// pages/login/login.js

import api from '../../api.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    email: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleClick: function (e) {
    wx.showLoading({
      title: '登录中',
    })

    api.login(e.detail.value.email, e.detail.value.password, function(res) {
      wx.hideLoading()
      if (res.data.success) {
        wx.switchTab({
          url: '/pages/company/company'
        })
        api.storeToken(res.header.token);
        api.storeMyInfo(res.data.data)
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      }
    }, function(err) {
      wx.hideLoading()
      console.log(err)
    });
  }
})