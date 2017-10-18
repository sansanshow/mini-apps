// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:{
      title: '心灵的焦灼',
      author: '[奥]斯台芬 / 上海译文出版社',
      intro: '这是斯台芬生前面世的唯一的一部长篇小说。',
      desc: '“这本书我很喜欢，最近搬家实在是没办法，希望有缘人能将它带走好好保管。”',
      imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503291631679&di=cdd486899f08c882c4d11fa8e028456d&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-27%2F010910579.jpg'
    },
    type:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.mtype
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 一键复制号码
   */
  doCopyLink(e){
    let copy = e.currentTarget.dataset.copy;
    wx.setClipboardData({
      data: copy,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})