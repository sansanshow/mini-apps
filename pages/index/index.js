//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    show: false,
    selectItems: [
      { text: '新上架' },
      { text: '教辅教材' },
      { text: '科技商业' },
      { text: '小说' },
      { text: '工具书' },
      { text: '人文社科' },
      { text: '居家育儿' },
      { text: '其他' }
    ],
    headText: '松开刷新',
    indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //下拉刷新
  onPullDownRefresh(){
    this.setData({
      headText: '刷新中'
    });
    let _this = this;
    setTimeout(function(){
      wx.stopPullDownRefresh();
      _this.setData({
        headText: '上次刷新'+ new Date().toLocaleTimeString()
      });
    }, 2000);
  },
  // 上拉加载
  // onReachBottom(){
  //   console.log("onReachBottom");
  //   let newArr = this.data.indexList;
  //   for(let i = 1; i <= 5; i++){
  //     newArr.push(this.data.indexList.length + i);
  //   }
  //   this.setData({
  //     indexList: newArr
  //   })
  // },
  // onPageScroll(){
  //   if (this.data.show == true){
  //     console.log(1);
  //     this.setData({
  //       show: false
  //     });
  //   }
  // },
  // 加载数据
  load(){
    console.log("load----");
    let newArr = this.data.indexList;
    for(let i = 1; i <= 5; i++){
      newArr.push(this.data.indexList.length + i);
    }
    this.setData({
      indexList: newArr
    })
  },
  //点击跳转详情
  goDetail: function (event) {
    var gotype = event.currentTarget.dataset.type;
    console.log(gotype);
    var url = './detail/detail?type=' + (gotype % 2);
    console.log(url);
    wx.navigateTo({
      url: './detail/detail?type=' + (gotype % 2)
    })
  },
  //
  toggleSelect() {
    this.setData({
      show: !this.data.show
    });
  },
  // 筛选
  doFilter(e) {
    let index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      show: !this.data.show
    });
  },
})
