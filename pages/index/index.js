//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
      imgUrls:[
        '../../images/1.jpg',
        '../../images/2.jpg',
        '../../images/3.jpg'
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      proList: null
    },
    onLoad:function (){

      // wx.showToast({
      //   title: '成功',
      //   icon: 'success',
      //   duration: 2000
      // })
      
      this.getProList();
    },
    getProList:function (){
      let that = this;
      wx.request({
        url: 'http://www.xzylogic.xyz/wx_Json_Img/bdy.json',
        method: 'GET',
        success:function (res) {
          console.log(res)
          that.setData({
            proList: res.data
          })
        }

      })
    },
    toDetail:function (e){    
      var index = e.currentTarget.dataset.index;
      console.log(index);
      var title = this.data.proList[index].title;
      // wx.setStorage({key:'title',data: title});
      wx.setStorageSync('title',title);
      wx.navigateTo({
        url: '../detail/detail',
      })
    }
})
