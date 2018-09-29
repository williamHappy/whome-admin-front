
import { AppMain } from '@/views/layout/components'

import { System } from '@/views'

export default {
  path: 'user',
  icon: 'inbox',
  component: AppMain,
  redirect: '/system/user/list',
  meta: { title: '用户管理', icon: 'example' },
  children: [{
    path: 'list',
    name: '用户列表',
    icon: 'reorder',
    meta: { title: '用户列表', icon: 'example' },
    component: System.User.List
  }, {
    path: 'edit',
    name: '用户编辑',
    icon: 'reorder',
    meta: { title: '用户编辑', icon: 'example' },
    component: System.User.Edit
  }]
}
