// pages/staff_list/staff_list.js

import api from '../../api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    source: 0,
    pid: 0,
    pname: '',
    loading: true,
    end: false,
    page: 1,
    height: 200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })

    let _this = this;
    this.setData({
      pname: options.name,
      pid: options.id,
      source: options.type
    })

    api.listStaff(this.data.page, this.data.pid, this.data.source, function(res) {
      console.log(res.data)
      if (res.data.success) {
        if (res.data.data && res.data.data.length) {
          res.data.data.forEach(function (item) {
            item._json = JSON.stringify(item)
            item.avatar = item.name.charAt(0)
          })
        }

        _this.setData({
          list: res.data.data,
          loading: false,
          end: res.data.data.length !== 20
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      }
    }, function(err) {
      console.error(err)
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

  },

  loadMore () {
    if (this.dada.end) {
      return;
    }
    let _this = this;

    this.setData({
      loading: true
    })

    api.listStaff(this.data.page + 1, this.data.pid, this.data.source, function (res) {
      console.log(res.data)
      if (res.data.success) {
        if (res.data.data && res.data.data.length) {
          res.data.data.forEach(function(item) {
            item._json = JSON.stringify(item)
            item.avatar = item.name.charAt(0)
            _this.dada.list.push(item)
          })
        }

        _this.setData({
          list: res.data.data,
          page: res.data.data.length !== 20 ? _this.dada.page : _this.dada.page + 1,
          loading: false,
          end: res.data.data.length !== 20
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      }
    }, function (err) {
      console.err(err)
    })
  }
})