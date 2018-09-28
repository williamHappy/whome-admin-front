<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#ffd04b"
    >
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      var child_routes = []
      var route = this.$route
      console.log(route)
      if (route.matched.length) {
        var rootPath = route.matched[0].path
        // var fullPath = route.path
        // this.$store.dispatch('set_cur_route', {
        //   rootPath,
        //   fullPath
        // })
        var routes = this.$router.options.routes
        for (var i = 0; i < routes.length; i++) {
          if (routes[i].path === rootPath && !routes[i].hidden) {
            child_routes = routes[i].children
            break
          }
        }
      }
      console.log(child_routes)
      return child_routes
      // return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
