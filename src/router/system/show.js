import { AppMain } from '@/views/layout/components'

import { System } from '@/views'

export default {
  path: 'show',
  component: AppMain,
  children: [{
    path: 'index',
    name: '系统首页',
    meta: { title: '展示页', icon: 'example' },
    component: System.Show
  }]
}
