
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
    name: '博客首页',
    icon: 'reorder',
    meta: { title: '展示页', icon: 'example' },
    component: Blog.Show
  }]
}
