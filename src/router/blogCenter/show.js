import { AppMain } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: 'show',
  component: AppMain,
  children: [{
    path: 'index',
    name: '博客首页',
    meta: { title: '展示页', icon: 'example' },
    component: Blog.Show
  }]
}
