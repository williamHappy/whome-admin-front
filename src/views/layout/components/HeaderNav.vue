<template>
  <div>
    <header class="head-nav">
      <el-row>
        <!-- logo -->
        <el-col :span="4" class="logo-container">
          <router-link to="/">
            <img
              :src="require('@/assets/logo_sm.png')"
              class="logo"
              alt="">
          </router-link>
        </el-col>

        <!-- 模块分类 -->
        <el-col :span="16">
          <el-menu
            :default-active="$store.state.router.headerCurRouter || `/`"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#324057"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router>
            <el-menu-item
              v-for="route in $router.options.routes"
              v-if="!route.hidden"
              :index="route.path"
              :key="route.name">
              {{ route.meta.title }}
            </el-menu-item>
          </el-menu>
        </el-col>

        <!-- todo 放置个人信息 -->
        <el-col :span="4">
          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
              <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
              <router-link class="inlineBlock" to="/">
                <el-dropdown-item>
                  Home
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span style="display:block;" @click="logout">LogOut</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderNav',
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  mounted() {
    // this.setDialogInfo('access');
    // this.onGetSetting();
  },
  created() {
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.logo-container {
  height: 60px;
}

.logo {
  height: 50px;
  width: auto;
  margin-left: 60px;
  margin-top: 5px;
}

.head-nav {
  width: 100%;
  height: 60px;
  background: #324057;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
}

.avatar-container {
  height: 50px;
  display: inline-block;
  position: absolute;
  right: 35px;
  .avatar-wrapper {
    cursor: pointer;
    margin-top: 10px;
    position: relative;
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}

</style>
