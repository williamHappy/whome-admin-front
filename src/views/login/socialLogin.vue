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
import CookieUtil from '@/utils/cookieUtil.js'

export default {
  mounted() {
    this.socialLogin()
  },
  methods: {
    QQLogin() {
      this.$http
        .get('/social/authorize/qq')
        .then((res) => {
          console.log(res)
          window.location.href = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    socialLogin() {
      const wxKey = CookieUtil.get('SOCIAL_WXKEY')
      console.log(wxKey)
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
