Page({
    openToast: function () {
        wx.showToast({
            title: '已完成',
            icon: 'success',
            duration: 3000
        });
    },
    openLoading: function () {
      wx.showLoading({
        title: '加载中',
        mask: true
      })

      setTimeout(function () {
        wx.hideLoading()
        wx.navigateTo({
          url: 'test?id=1'
        })
      }, 2000)
    }
});