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

    check: function(e) {
        var newList = this.data.list;
        var idx = +e.currentTarget.dataset.index;
        newList[idx].check = newList[idx].check ? false : true;
        this.setData({
            list: newList
        })
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
    },

    showListDetail: function(e) {
        var idx = +e.currentTarget.dataset.index;
        var detailBoj = this.data.list[idx];
        wx.setStorageSync('msgDetail', JSON.stringify(detailBoj));
        wx.navigateTo({
            url: '../edit/edit'
        })
    }
});
