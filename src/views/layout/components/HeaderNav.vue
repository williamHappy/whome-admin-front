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
        <el-col :span="4"/>

      </el-row>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  mounted() {
    // this.setDialogInfo('access');
    // this.onGetSetting();
  },
  created() {
  },
  methods: {
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

.fa-user {
  position: relative;
  top: -2px;
  margin-right: 4px;
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

  .logout {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    float: right;
    cursor: pointer;
  }
}

.userinfo {
  text-align: right;
}

.username {
  height: 60px;
  line-height: 60px;
  cursor: pointer;

  .el-dropdown {
    color: #fff;
  }
}
</style>
