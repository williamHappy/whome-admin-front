<template>
  <section class="app-main">
    <!-- 搜索 -->
    <transition v-show="searchActive" name="fade-transform" mode="out-in">
      <d2-panel-search
        ref="panelSearch"
        @close="searchPanelClose"/>
    </transition>
    <transition v-show="!searchActive" name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <router-view/>
    </transition>
  </section>
</template>

<script>
import mixinSearch from '.././mixin/search'
export default {
  name: 'AppMain',
  mixins: [
    mixinSearch
  ],
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  },
  watch: {
    // 可以通过watch监听vuex中的text，数据变动时能够执行对应的函数
    '$store.state.search.active'(active) {
      console.log(active)
      if (active) {
        this.$refs.panelSearch.focus()
      }
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>
