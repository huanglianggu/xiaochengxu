// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"你好",
    img:'/images/meizi.jpg',
    arr:['a','b','c','d'],
    list:[{
        name:'周杰伦',
        age:'30'
      }, {
        name: '刘德华',
        age: '60'
      }, {
        name: '刘涛',
        age: '40'
      }],
    isLogin:true,
    count:0
  },

  onTapHandler: function(){
    this.setData({
      count: this.data.count +1
    });
  },

  onTapBoxHandler: function(event){
    console.log('box 点击')
    console.log(event)
  },

  onTapChildHandler: function () {
    console.log('child 点击')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})