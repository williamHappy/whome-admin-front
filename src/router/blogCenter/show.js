
import { Sidebar } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: 'show',
  icon: 'inbox',
  component: Sidebar,
  redirect: '/blog/show/index',
  meta: { title: '展示页', icon: 'example' },
  children: [{
    path: 'index',
    name: '首页',
    icon: 'reorder',
    component: Blog.Show
  }]
}
