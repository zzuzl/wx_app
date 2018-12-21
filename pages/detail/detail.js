// pages/detail/detail.js
import api from '../../api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staff: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    if (options.id) {
      api.findById(options.id, function(res) {
        if (res.data.success) {
          _this.setData({
            staff: res.data.data
          })
        }
      }, function(err) {
        console.error(err)
      })
    } else if (options.staff) {
      this.setData({
        staff: JSON.parse(options.staff)
      })
    }
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

  }
})