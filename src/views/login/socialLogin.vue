<template>
  <div class="social-container" flex="main: center cross: center">
    <el-tooltip :content="$t('login.socialWechat')" effect="light" placement="bottom">
      <div class="social-btn">
        <svg-icon icon-class="wechat" class="icon-social"/>
      </div>
    </el-tooltip>
    <el-tooltip :content="$t('login.socialQQ')" effect="light" placement="top">
      <div
        class="social-btn"
        @click="QQLogin">
        <svg-icon icon-class="qq" class="icon-social"/>
      </div>
    </el-tooltip>
    <el-tooltip :content="$t('login.socialGithub')" effect="light" placement="bottom">
      <div class="social-btn">
        <svg-icon icon-class="github" class="icon-social"/>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import { getUrlParam } from '@/utils'
import CookieUtil from '@/utils/cookieUtil.js'

export default {
  data() {
    return {
      redirect: undefined
    }
  },
  mounted() {
    this.socialLogin()
  },
  methods: {
    QQLogin() {
      this.$http
        .get('/social/authorize/qq')
        .then((res) => {
          // console.log(res)
          window.location.href = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    socialLogin() {
      const qqKey = CookieUtil.get('SOCIAL_QQKEY')
      console.log(qqKey)
      if (!qqKey) {
        return
      }
      const code = getUrlParam('code')
      if (!code) {
        return
      }
      this.$http({
        mounted: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'deviceId': qqKey
        },
        url: '/socialLogin/qq',
        auth: {
          username: 'whome-uac',
          password: 'whomeUacSecret'
        },
        params: {
          code: getUrlParam('code'),
          state: getUrlParam('state')
        }
      }).then((res) => {
        console.log(res)
        this.$store.dispatch('UpdateAuthToken', res.data)
        this.$router.push({ path: this.redirect || '/' })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.social-container {
  margin: 20px;
  .social-btn {
    width: 40px;
    height: 40px;
    margin: 0 8px;
    display: inline-block;
    cursor: pointer;
    border-radius: 50%;
    background-color: #e1e5e8;
    text-align: center;
    .icon-social {
      color: #000;
      font-size: 28px;
      margin-top: 6px
    }
  }
}
</style>
