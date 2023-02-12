import { getCount, postCount } from "../../utils/request"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        val: ''
    },

    addOne() {
        let data = { "action": "inc" }
        postCount(data, res => {
            console.log("addOne:" + JSON.stringify(res))
            this.setData({
                val: res.data.data
            })
        })
    },

    refreshVal() {
        getCount(res => {
            console.log("refresh:" + JSON.stringify(res))
            this.setData({
                val: res.data.data
            })
        }, err => {
            console.log(JSON.stringify(err))
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.refreshVal()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})