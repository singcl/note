Page({
    data: {
        list: [],
        index: 0,
        date: '2018-06-06',
        checkStatus: false,
        checkItem: false,
        url: '../../images/check_false.png'
    },

    onLoad: function() {
      var searchLog = wx.getStorageSync('searchLog');
        if (searchLog) {
            this.setData({
                list: JSON.parse(searchLog)
            })
        }
    },

    onShow: function() {
        var searchLog = wx.getStorageSync('searchLog');
        if (searchLog) {
            this.setData({
            list: JSON.parse(searchLog)
            })
        }
    },

    add: function() {
        wx.navigateTo({
            url: '../model/model'
        })
    },

    edit: function() {
        this.setData({
            checkStatus: true
        })
    },
    save: function() {
        this.setData({
            checkStatus: false
        })
    }
});
