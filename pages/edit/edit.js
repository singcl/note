Page({
    data: {
        bg: '',
        date: '2018-06-07',
        title: '',
        content: ''
    },

    onLoad: function() {
        var bg = wx.getStorageSync('modelBack');
        var msg = wx.getStorageSync('msgDetail');
        if (bg) {
            this.setData({
                bg: bg
            })
        }

        if (msg) {
            msgObj = JSON.parse(msg);
            this.setData({
                date: msgObj.date,
                title: msgObj.title,
                content: msgObj.content,
                bg: msgObj.bg
            })
        }
    },

    back: function() {
        wx.navigateBack({
            delta: 1
        })
    },

    bindDateChange: function(e) {
        this.setData({
            date: e.detail.value
        })
    },

    editFormSubmit: function(e) {
        var nowStr = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        var obj = [];
        var searchLogStr = wx.getStorageSync('searchLog');
        if (searchLogStr) {
            obj = JSON.parse(searchLogStr);
        }

        obj.push({
            title: e.detail.value.title,
            content: e.detail.value.content, 
            time: this.data.date,
            createTime: nowStr,
            check:false,
            bg: this.data.bg
        })
        
        wx.setStorageSync('searchLog', JSON.stringify(obj));  
        wx.removeStorageSync('msgDetail');  
        wx.navigateBack({ changed: true}); //返回上一页  
    },

    onShareAppMessage: function() {
        return {
            title: '炒鸡记事本',
            desc: '一个炒鸡简单的记事本',
            path: '/pages/index/index'
        }
    }
})