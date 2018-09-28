
import { Home } from 'layout/'

import { System } from 'views'

export default {
  path: 'role',
  icon: 'inbox',
  component: Home,
  redirect: '/system/role/index',
  children: [{
    path: 'index',
    name: '角色管理',
    icon: 'reorder',
    component: System.Role
  }]
}
