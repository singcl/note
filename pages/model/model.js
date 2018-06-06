Page({
    data: {
        currentModelIndex: 0,
        curImgSrc: '',
        modelSrc: [
            '../../images/back1.jpg',
            '../../images/back2.jpg',
            '../../images/back3.jpg',
            '../../images/back4.jpg'
        ]
    },

    onLoad: function() {
        //
    },

    select: function(e) {
        var current = e.target.dataset.current;
        if (this.data.currentModelIndex === current) {
            return;
        } else {
            this.setData({
                currentModelIndex: current
            })
        }
    },

    save: function() {
        var idx = this.data.currentModelIndex;
        wx.setStorageSync('modelBack', this.data.modelSrc[idx]);
        wx.redirectTo({
            url: '../index/index'
        })
    },

    onShareAppMessage: function() {
        return {
            title: '炒鸡记事本',
            desc: '一个炒鸡简单的记事本',
            path: '/pages/index/index'
        }
    }
})