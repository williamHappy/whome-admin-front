
export default {
  path: '/system',
  title: 'systemCenter',
  icon: 'system-show',
  children: (pre => [
    { path: `${pre}index`, title: 'systemShow', icon: 'system-show' },
    {
      path: `${pre}user`,
      title: 'systemUser',
      icon: 'system-user',
      children: [
        {
          path: `${pre}user/list`,
          title: 'userList',
          icon: 'system-user-list'
        },
        {
          path: `${pre}user/eidt`,
          title: 'userEdit',
          icon: 'system-user-edit'
        }
      ]
    }, {
      path: `${pre}menu`,
      title: 'systemMenu',
      icon: 'system-menu'
    }, {
      path: `${pre}role`,
      title: 'systemRole',
      icon: 'system-role'
    }
  ])('/system/')
}
