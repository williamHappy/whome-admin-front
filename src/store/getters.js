const getters = {
  // 当前路由
  headerCurRouter: state => state.router.headerCurRouter,
  leftCurRouter: state => state.router.leftCurRouter,

  sidebar: state => state.app.sidebar,
  device: state => state.app.device,

  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,

  // 搜索
  active: state => state.search.active,
  hotkey: state => state.search.hotkey,

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
