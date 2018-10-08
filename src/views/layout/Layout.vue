<template>
  <div :class="classObj" class="app-wrapper">
    <header-nav/>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
    <!-- 主体 -->
    <div class="app-container-main">
      <!-- 搜索 -->
      <transition name="fade-scale">
        <div v-show="searchActive" class="main-container">
          <d2-panel-search
            ref="panelSearch"
            @close="searchPanelClose"/>
        </div>
      </transition>
      <!-- 内容 -->
      <transition name="fade-scale">
        <div v-show="!searchActive" class="main-container" >
          <navbar/>
          <tags-view/>
          <app-main/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { HeaderNav, Navbar, Sidebar, AppMain, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import mixinSearch from './mixin/search'

export default {
  name: 'Layout',
  components: {
    HeaderNav,
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin, mixinSearch],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  watch: {
    // 可以通过watch监听vuex中的text，数据变动时能够执行对应的函数
    '$store.state.search.active'(active) {
      if (active) {
        this.$refs.panelSearch.focus()
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
