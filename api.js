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
  storeItems: function (items, key) {
    wx.setStorage({
      key: key,
      data: JSON.stringify(items)
    })
  },
  loadItems: function (key) {
    try {
      var value = wx.getStorageSync(key)
      if (value && value.length) {
        return JSON.parse(value);
      }
    } catch (e) {
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
    this.TOKEN = ''
    wx.removeStorage({
      key: 'token',
      success: function(res) {},
    })
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
  listStaff: function (page, pid, source, success, fail) {
    wx.request({
      url: this.BASE + 'rest/staff/findByPid?pid=' + pid + '&source=' + source + '&page=' + page,
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
  search: function (key, success, fail) {
    wx.request({
      url: this.BASE + 'rest/search?key=' + key,
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
  findById: function (id, success, fail) {
    wx.request({
      url: this.BASE + 'rest/staff/findById?id=' + id,
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
  }
};

module.exports = Api;