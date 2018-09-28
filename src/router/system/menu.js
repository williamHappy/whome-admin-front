
import { Sidebar } from '@/views/layout/components'

import { System } from '@/views'

export default {
  path: 'menu',
  name: '菜单管理',
  icon: 'inbox',
  component: Sidebar,
  redirect: '/system/menu/index',
  meta: { title: '菜单管理', icon: 'example' },
  children: [{
    path: 'index',
    name: '菜单管理',
    icon: 'reorder',
    component: System.Menu
  }]
}
