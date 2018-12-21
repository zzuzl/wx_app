// pages/project/project.js

import api from '../../api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;

    if (this.items && this.items.length) {
      return;
    }

    let projects = api.loadItems('projects');

    if (projects && projects.length) {
      _this.setData({
        items: projects
      })
    }

    api.listProject(function (res) {
      if (res.data.success) {
        _this.setData({
          items: res.data.data
        })
        api.storeItems(res.data.data, 'projects')
      }
      console.log(res.data)
    }, function (err) {
      console.error(error)
    })
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
    wx.hideLoading();
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

  }
})