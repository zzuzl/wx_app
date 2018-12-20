const Api = {
  BASE: 'https://www.zzuzl.cn/',
  TOKEN: '',
  checkLogin: function (success, fail) {
    wx.request({
      url: this.BASE + 'rest/checkLogin',
      header: {
        'token': this.loadLocalToken()
      },
      success(res) {
        success && success(res)
      },
      fail(err) {
        fail && fail(err)
      }
    })
  },
  storeToken: function (_token) {
    wx.setStorage({
      key: "token",
      data: _token
    })
    this.TOKEN = _token;
  },
  loadLocalToken: function() {
    try {
      return wx.getStorageSync('token')
    } catch (e) {
      // todo
      // Do something when catch error
    }
  },
  storeMyInfo: function (info) {
    wx.setStorage({
      key: "me",
      data: JSON.stringify(info)
    })
  },
  loadMyInfo: function() {
    try {
      var value = wx.getStorageSync('me')
      if (value && value.length) {
        return JSON.parse(value);
      }
    } catch (e) {
      // todo
      // Do something when catch error
    }
  },
  login: function (email, passwd, success, fail) {
    wx.request({
      url: this.BASE + 'rest/staff/login',
      method: 'POST',
      data: {
        user: email,
        password: passwd
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        success && success(res)
      },
      fail(err) {
        fail && fail(err)
      }
    })
  },
  logout: function () {
    
  },
  listProject: function (success, fail) {
    wx.request({
      url: this.BASE + 'rest/project/list?pid=0',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'token': this.TOKEN
      },
      success(res) {
        success && success(res)
      },
      fail(err) {
        fail && fail(err)
      }
    })
  },
  listCompany: function (success, fail) {
    wx.request({
      url: this.BASE + 'rest/company/list?pid=0',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'token': this.TOKEN
      },
      success(res) {
        success && success(res)
      },
      fail(err) {
        fail && fail(err)
      }
    })
  },
  listStaff: function (page) {
    
  }
};

module.exports = Api;