<template>
  <section class="zkui-user-reg">

    <zk-head title='注册' goBack='返回'></zk-head>
    <group title="推荐人信息" v-if="showParent">
      <x-input title="推荐人" required :min="2" :max="12" v-model="user.parentUserName"></x-input>
    </group>
    <group gap="2rem 0.2rem" id="form">
      <x-input title="用户名" required placeholder="请输入您的用户名( 字母数字组合)" :min="2" :max="12" v-model="user.username"></x-input>
      <x-input title="手机号" required placeholder="请输入您的手机号" mask="99999999999" v-model="user.mobile" :max="13" is-type="mobile"></x-input>
      <zk-phone-verifiy v-model="user.mobileVerifiyCode" :mobile="user.mobile"></zk-phone-verifiy>
      <x-input title="密码" required type="password" :min="6" :max="16" v-model="user.password"></x-input>
      <x-input title="确认密码" required type="password" :min="6" :max="16" class="border-bottom" v-model="user.confirmPassword"></x-input>
    </group>
    <label role="checkbox" class="el-checkbox " :class="{'is-checked':checkeded}">
      <span aria-checked="mixed" class="el-checkbox__input " :class="{'is-checked':checkeded}">
        <span class="el-checkbox__inner"></span><input type="checkbox" class="el-checkbox__original" value=""></span>
      <span class="el-checkbox__label">
        已阅读并同意
        <router-link to="/user/agreement" class="">《服务条款》</router-link>
      </span>
      <div class="close-box" @click="checker"></div>
    </label>

    <box gap="3rem 1rem">
      <x-button @click.native="reg" type="primary" action-type="button" :disabled="disabledB">注册会员</x-button>
    </box>
    <div class="weui-msg__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="/user/login">会员登录</a>
          <a href="/user/findpassword">重置密码</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import apiUser from 'src/service/api/user.api'
  import { Group, XInput, Agree, Box, XButton } from 'zkui'
  import { ZkPhoneVerifiy } from 'widgets'
  export default {
    components: {
      Group,
      XInput,
      Agree,
      Box,
      ZkPhoneVerifiy,
      XButton
    },
    data () {
      return {
        disabledB: true, // 判断是否同意了条框
        user: {
          username: '',
          password: '',
          agree: true,
          confirmPassword: '',
          mobileVerifiyCode: '',
          parentUserName: '',
          openId: '', // 微信openId
          mobile: ''
        },
        checkeded: false,
        showParent: false
      }
    },
    mounted () {
      this.GetData()
    },
    methods: {
      checker () {
        this.checkeded = !this.checkeded
        if (this.checkeded === true) {
          this.disabledB = false
        } else {
          this.disabledB = true
        }
      },
      GetData () {
        if (this.$route.query.userName !== undefined) {
          window.localStorage.setItem('qrcode_username', this.$route.query.userName)
        }
        let qrcodeUserName = window.localStorage.getItem('qrcode_username')
        // console.info('推荐人', qrcodeUserName)
        if (qrcodeUserName !== '' && qrcodeUserName !== 'undefined') {
          this.user.parentUserName = qrcodeUserName
          this.showParent = true
        }
      },
      async reg () {
        this.user.mobile = this.user.mobile.replace(/\s+/g, '')
        this.user.openId = window.localStorage.getItem('wechat_openId')
        var response = await apiUser.reg(this.user)
        if (response.data.status === 1) {
          this.$vux.toast.success('注册成功')
          window.localStorage.setItem('wechat_autoLoginByOpenId', true)
          this.$router.push({
            name: 'user_login'
          }
          )
        } else {
          this.$vux.toast.warn(response.data.message)
        }
      }
    }
  }
</script>

<style   lang="less">
  .zkui-user-reg {
    .el-checkbox {
      padding: 0.5em 1.25rem;
      position: relative;
      .close-box {
        width: 55%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: @brand;
      border-color: @brand;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: @brand;
    }
    .el-checkbox__inner:hover {
      border-color: @brand;
    }
    .weui-btn {
      height: 3rem;
      font-size: @h4-font-size;
    }
    .weui-msg__extra-area {
      width: 100%;
      .weui-footer {
        margin: 0 auto;
        .weui-footer__links {
          margin: 15 * @rem 10 * @rem 0 0;
          text-align: right;
        }
      }
    }
  }
</style>


