
import { AppMain } from '@/views/layout/components'

import { System } from '@/views'

export default {
  path: 'role',
  icon: 'inbox',
  component: AppMain,
  redirect: '/system/role/index',
  meta: { title: '角色管理', icon: 'example' },
  children: [{
    path: 'index',
    name: '角色管理',
    icon: 'reorder',
    meta: { title: '角色管理', icon: 'example' },
    component: System.Role
  }]
}
