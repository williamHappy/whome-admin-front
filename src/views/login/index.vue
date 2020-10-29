<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('paas.name') }}</h3>
        <lang-select class="set-language"/>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          :placeholder="$t('login.username')"
          v-model="loginForm.username"
          name="username"
          type="text"
          auto-complete="on" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          :placeholder="$t('login.password')"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item prop="validateCode">
        <span class="svg-container">
          <svg-icon icon-class="form" />
        </span>
        <el-input
          :placeholder="$t('login.validateCode')"
          v-model="loginForm.validateCode"
          type="text"
          name="validateCode"
          class="input-validate-code"
          auto-complete="on" />
        <span class="div-image-code">
          <img :src="imageCode" :key="imageCodeKey" @click="getImage">
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          {{ $t('login.login') }}
        </el-button>
      </el-form-item>
      <div class="third-login" flex="dir:top">
        <div class="third-login-label">{{ $t('login.thirdLoginLabel') }}</div>
        <social-login />
      </div>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import SocialLogin from './socialLogin'

export default {
  name: 'Login',
  components: { LangSelect, SocialLogin },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error(this.$t('login.formValid.nameError')))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error(this.$t('login.formValid.passwordLenError')))
      } else {
        callback()
      }
    }
    return {
      deviceId: '',
      loginForm: {
        username: 'admin',
        password: '123456',
        validateCode: ''
      },
      imageCode: '',
      imageCodeKey: '',
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }],
        validateCode: [{ required: true, message: this.$t('login.formValid.codeError'), trigger: 'blur' }]
      },
      loading: false,
      eye: 'closeEye',
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted() {
    this.getImage()
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
        this.eye = 'openEye'
      } else {
        this.pwdType = 'password'
        this.eye = 'closeEye'
      }
    },
    getImage() {
      this.deviceId = new Date().getTime()
      this.$http({
        method: 'GET',
        url: '/auth/code/image',
        headers: {
          'deviceId': this.deviceId
        }
      }).then((res) => {
        this.imageCode = 'data:image/jpg;base64,' + res.data
        this.imageCodeKey = new Date().getTime()
      })
    },
    handleLogin() {
      const deviceId = this.deviceId
      this.$refs.loginForm.validate(valid => {
        if (!valid) return false
        this.deviceId = new Date().getTime()
        this.$http({
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'deviceId': deviceId
          },
          url: '/auth/form',
          auth: {
            username: 'whome-upms',
            password: 'whomeUpmsSecret'
          },
          params: {
            username: this.loginForm.username,
            password: this.loginForm.password,
            imageCode: this.loginForm.validateCode
          }
        }).then(res => {
          this.$store.dispatch('UpdateAuthToken', res.data)
          this.$router.push({ path: this.redirect || '/' })
        // eslint-disable-next-line handle-callback-err
        }).catch(err => {
          this.getImage()
        })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .input-validate-code{
    width: 67%;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .div-image-code {
    margin: 0px auto 20px auto;
  }
  .third-login-label {
    font-size: 14px;
    color: #b9b7b7;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
