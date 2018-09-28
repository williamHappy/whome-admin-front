import { Sidebar } from '@/views/layout/components'

import { System } from '@/views'

export default {
  path: 'show',
  icon: 'inbox',
  component: Sidebar,
  redirect: '/system/show/index',
  meta: { title: '展示页', icon: 'example' },
  children: [{
    path: 'index',
    name: '系统首页',
    icon: 'reorder',
    meta: { title: '展示页', icon: 'example' },
    component: System.Show
  }]
}
