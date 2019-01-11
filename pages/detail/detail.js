Page({
    data:{
        title:null
    },
    onLoad: function (options) {
      // let that = this;
      //   wx.getStorage({
      //     key: 'title',
      //     success: function(res) {
      //       let title=res.data;
      //       console.log('获取的值： '+title);
      //       that.setData({
      //         title: title
      //       })
      //     },
      //   })
      let title = wx.getStorageSync('title');
      console.log('获取的值： '+title);
      this.setData({
        title: title
      })
      }
})