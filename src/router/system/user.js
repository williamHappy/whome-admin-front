
import { Home } from 'layout/'

import { System } from 'views'

export default {
  path: 'user',
  icon: 'inbox',
  component: Home,
  redirect: '/system/user/list',
  children: [{
    path: 'list',
    name: '用户列表',
    icon: 'reorder',
    component: System.User.List
  }, {
    path: 'edit',
    name: '用户编辑',
    icon: 'reorder',
    component: System.Use.Edit
  }]
}
