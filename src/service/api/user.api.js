import http from 'src/service/common/http'
// import helper from 'src/service/common/helper'
import local from 'src/service/common/local'
import {
    md5
} from 'zkui' // md5 函数

export default {
    //  用户登录
    async login (data) {
        var param = data
        param.password = md5(param.password)
        var response = await http.post('/user/login', param)
        data.password = ''
        return response
    },
    // 使用openId登录
    async loginByOpenId (openId) {
        var user = {
            openId: openId
        }
        var response = await http.post('/user/loginByOpenId', user)
        return response
    },
    //  获取当前登录用户
    loginUser () {
        var store = local.getStore('user')
        return store
    },
    //  获取当个用户
    async getSingUser (userId) {
        var response = await http.get('/user/getSingUser', userId)
        return response
    },

    //  用户退出
    async logout (data) {
        var response = await http.post('/user/logout', data)
        return response
    },

    //  用户注册
    async reg (data) {
        console.dir(data)
        var response = await http.post('/user/reg', data)
        return response
    },
    // 会员资料更新
    async update (data) {
        var response = await http.putLogin('/user/update', data)
        return response
    },
    // 修改密码
    async changePassword (data) {
        var response = await http.putLogin('/user/changePassword', data)
        return response
    },
    // 修改密码
    async findPassword (data) {
        console.dir(data)
        var response = await http.put('/user/findPassword', data)
        return response
    },
    //  获取用户列表
    async userList (data) {
        var response = await http.get('/user/list', data)
        return response
    },
    //  会员明细
    async view (data) {
        var response = await http.getLogin('/user/view', data)
        return response
    },
    //  加入购物车、足迹、加入收藏夹等相关操作
    async addAction (data) {
        var response = await http.postLogin('/user/addAction', data)
        return response
    },
    //  获取购物车、足迹、加入收藏夹等相关操作记录
    async getAction (data) {
        var response = await http.getLogin('/user/getAction', data)
        return response
    },
    //  移除购物车、足迹、加入收藏夹等相关操作记录
    async removeAction (data) {
        var response = await http.deleteLogin('/user/removeAction', data)
        return response
    },
    //  加入购物车
    async AddCart (data) {
        var response = await http.postLogin('/Cart/AddCart', data)
        return response
    },
    //  获取购物车
    async GetCart (data) {
        var response = await http.getLogin('/Cart/GetCart', data)
        return response
    },
    // 删除购物车
    async RemoveCart (data) {
        var response = await http.deleteLogin('/Cart/RemoveCart', data)
        return response
    },
    // 二维码
    async QrCode (data) {
        var response = await http.getLogin('/UserDetail/QrCode', data)
        return response
    },
    // 组织架构图
    async Tree (data) {
        var response = await http.getLogin('/UserDetail/Tree', data)
        return response
    },
    // 添加地址
    async AddAddress (data) {
        var response = await http.postLogin('/UserAddress/add', data)
        return response
    },
    // 获取地址
    async GetAddress (data) {
        var response = await http.getLogin('/UserAddress/get', data)
        return response
    },
    // 删除地址
    async DeleteAddress (data) {
        var response = await http.deleteLogin('/UserAddress/delete', data)
        return response
    },
    // 设置默认地址
    async setDefault (data) {
        var response = await http.postLogin('/UserAddress/SetDefault', data)
        return response
    },
    // 修改地址
    async UpdateAddress (data) {
        var response = await http.putLogin('/UserAddress/update', data)
        return response
    },
    // 获取单个地址
    async SingleAddress (data) {
        var response = await http.getLogin('/UserAddress/single', data)
        return response
    },
    // 获取头条
    async topline (data) {
        var response = await http.get('/diy/GetList', data)
        return response
    },
    // 工单
    async WorkOrder (data) {
        var response = await http.postLogin('/UserWorkOrder/FeedBack', data)
        return response
    },
    // 实名认证
    async Identity (data) {
        var response = await http.postLogin('/UserDetail/Identity', data)
        return response
    },
    // 获取实名认证信息
    async getIdentity (data) {
        var response = await http.getLogin('/UserDetail/GetIdentity', data)
        return response
    },
    // 获取是否实名认证
    async Identitys (data) {
        var response = await http.getLogin('/UserDetail/StateJudgment', data)
        return response
    },
    async Rate (data) {
        var response = await http.postLogin('/Order/Rate', data)
        return response
    }

}
