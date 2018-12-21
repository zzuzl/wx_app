// pages/search/search.js

import api from '../../api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    searchResults: [],
    init: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*wx.getStorage({
      key: 'search_his',
      success(res) {
        console.log(res.data)
      }
    })*/
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
  
  search: function (event) {
    let _this = this;
    console.log(event.detail.value);

    if (event.detail.value) {
      wx.showLoading({
        title: '查询中',
      })
      api.search(event.detail.value, function(res) {
        console.log(res.data)
        if (res.data.success) {
          if (res.data.data && res.data.data.length) {
            res.data.data.forEach(function(item) {
              if (item.type === 1) {
                item.url = '/pages/detail/detail?id=' + item.id
              } else if (item.type === 2) {
                item.url = "/pages/staff_list/staff_list?type=0&name=" + item.title + "&id=" + item.id
              } else if (item.type === 3) {
                item.url = "/pages/staff_list/staff_list?type=1&name=" + item.title + "&id=" + item.id
              }
              
            })
          }

          _this.setData({
            searchResults: res.data.data,
            init: true
          })
        } else {

        }
        wx.hideLoading()
      }, function(err) {
        console.error(err)
        wx.hideLoading()
      })
    }
  }
})