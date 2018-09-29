
import { AppMain } from '@/views/layout/components'

import { System } from '@/views'

export default {
  path: 'menu',
  icon: 'inbox',
  component: AppMain,
  redirect: '/system/menu/index',
  meta: { title: '菜单管理', icon: 'example' },
  children: [{
    path: 'index',
    name: '菜单管理',
    icon: 'reorder',
    meta: { title: '菜单管理', icon: 'example' },
    component: System.Menu
  }]
}
