const getters = {
  // 当前路由
  headerCurRouter: state => state.router.headerCurRouter,
  leftCurRouter: state => state.router.leftCurRouter,

  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  language: state => state.app.language,

  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
