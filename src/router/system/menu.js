
import { Home } from 'layout/'

import { System } from 'views'

export default {
  path: 'menu',
  icon: 'inbox',
  component: Home,
  redirect: '/system/menu/index',
  children: [{
    path: 'index',
    name: '菜单管理',
    icon: 'reorder',
    component: System.Menu
  }]
}
