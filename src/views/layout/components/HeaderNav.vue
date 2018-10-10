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
              {{ generateTitle(route.meta.title) }}
            </el-menu-item>
          </el-menu>
        </el-col>

        <!-- todo 放置个人信息 -->
        <el-col :span="4">
          <el-menu
            class="right-menu"
            background-color="#324057">
            <template v-if="device!=='mobile'">
              <el-tooltip :content="$t('navbar.search')" effect="dark" placement="bottom">
                <header-search class="header-search right-menu-item" @click.native="handleSearchClick"/>
              </el-tooltip>

              <el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">
                <screenfull class="screenfull right-menu-item"/>
              </el-tooltip>

              <el-tooltip :content="$t('navbar.lang')" effect="dark" placement="bottom">
                <lang-select class="international right-menu-item"/>
              </el-tooltip>

              <el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">
                <theme-picker class="theme-switch right-menu-item"/>
              </el-tooltip>
            </template>

            <el-dropdown class="avatar-container right-menu-item" trigger="click">
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
          </el-menu>

          <!-- 对话框 -->
          <el-dialog
            :visible.sync="dialogActive"
            :append-to-body="true"
            width="40%"
            class="search-dialog"
            title="搜索"
            center
            @close="handleEsc">
            <div class="dialog-body">
              <el-autocomplete
                ref="input"
                :fetch-suggestions="querySearch"
                :trigger-on-focus="false"
                :clearable="true"
                v-model="searchText"
                class="panel-search__input"
                suffix-icon="el-icon-search"
                placeholder="搜索页面"
                @keydown.esc.native="handleEsc"
                @select="handleSelect">
                <panel-search-item
                  slot-scope="{ item }"
                  :item="item"/>
              </el-autocomplete>
              <div class="panel-search__tip">
                您可以使用快捷键
                <span class="panel-search__key">{{ searchHotkey.open }}</span>
                唤醒搜索面板，按
                <span class="panel-search__key">{{ searchHotkey.close }}</span>
                关闭
              </div>
            </div>
            <div slot="footer" class="dialog-footer" />
          </el-dialog>
        </el-col>
      </el-row>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Fuse from 'fuse.js'

import { generateTitle } from '@/utils/i18n'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'
import Screenfull from '@/components/Screenfull'
import HeaderSearch from '@/components/HeaderSearch'

import PanelSearchItem from '@/components/PanelSearch'

import mixinSearch from '.././mixin/search'

export default {
  name: 'HeaderNav',
  components: {
    Screenfull,
    LangSelect,
    ThemePicker,
    HeaderSearch,
    PanelSearchItem
  },
  mixins: [
    mixinSearch
  ],
  data() {
    return {
      searchText: '',
      results: []
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'avatar',
      'pool'
    ])
  },
  mounted() {
    // this.setDialogInfo('access');
    // this.onGetSetting();
  },
  created() {
  },
  methods: {
    generateTitle,
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },

    /**
     * @description 过滤选项 这个方法在每次输入框的值发生变化时会触发
     */
    querySearch(queryString, callback) {
      var pool = this.pool
      const results = this.query(queryString ? pool : [], queryString)
      this.results = results
      callback(results)
    },
    /**
     * @description 指定的数据源中根据指定的查询字符串过滤数据
     * @param {Object} pool 需要过滤的数据
     * @param {String} queryString 查询字符串
     */
    query(pool, queryString) {
      return new Fuse(pool, {
        shouldSort: true,
        tokenize: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          'fullTitle',
          'path'
        ]
      })
        .search(queryString)
        .map(e => ({
          value: e.fullTitle,
          ...e
        }))
    },

    /**
     * @augments 关闭输入框的下拉菜单
     */
    closeSuggestion() {
      if (this.$refs.input.activated) {
        this.$refs.input.suggestions = []
        this.$refs.input.activated = false
      }
    },

    /**
     * @augments 接收用户触发的关闭
     */
    handleEsc() {
      this.closeSuggestion()
      this.$nextTick(() => {
        this.$emit('close')
      })
    },

    /**
     * @description 接收用户在下拉菜单中选中事件
     */
    handleSelect({ path }) {
      // 如果用户选择的就是当前页面 就直接关闭搜索面板
      if (path === this.$route.path) {
        this.handleEsc()
        return
      }
      // 用户选择的是其它页面
      this.$nextTick(() => {
        this.handleMenuSelect(path)
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

.right-menu {
  height: 60px;
  line-height: 60px;
  // float: right;
  .right-menu-item {
    display: inline-block;
    margin: 0 8px;
  }

  .header-search {
    vertical-align: middle;
  }

  .screenfull {
    vertical-align: middle;
  }

  .international{
    vertical-align: middle;
  }

  .theme-switch {
    vertical-align: middle;
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
}

// 搜索dialog start

// 禁止用户选中 鼠标变为手形
%unable-select {
  user-select: none;
  cursor: pointer;
}

.search-dialog {
  .dialog-body {
    text-align: center;
    .panel-search__input {
      width: 500px;
    }
    .panel-search__tip {
      @extend %unable-select;
      margin-top: 20px;
      margin-bottom: 40px;
      font-size: 12px;
      color: #909399;
      .panel-search__key {
        padding: 1px 5px;
        margin: 0px 2px;
        border-radius: 2px;
        background-color: #606266;
        color: #f8f8f9;
      }
    }
  }
}

// 搜索dialog end

</style>
