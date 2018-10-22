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
export default {
  methods: {
    QQLogin() {
      this.$http
        .get('/social/authorize/qq')
        .then((reponse) => {
          console.log(reponse)
        })
        .catch((err) => {
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
