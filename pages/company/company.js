// pages/company/company.js

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
    console.log('onLoad', new Date())
    let _this = this;

    if (this.items && this.items.length) {
      return;
    }

    let companys = api.loadItems('companys');

    if (companys && companys.length) {
      _this.setData({
        items: companys
      })
    }

    
    api.listCompany(function(res) {
      if (res.data.success) {
        _this.setData({
          items: res.data.data
        })
        api.storeItems(res.data.data, 'companys')
      }
      console.log(res.data)
    }, function(err) {
      console.error(error)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady', new Date())
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow', new Date())
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide', new Date())
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload', new Date())
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
  
  search: function() {
    wx.navigateTo({
      url: '/pages/search/search',
    });
  }
})