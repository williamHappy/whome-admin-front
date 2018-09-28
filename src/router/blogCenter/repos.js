
import { Sidebar } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: 'repos',
  icon: 'inbox',
  component: Sidebar,
  redirect: '/blog/repos/details',
  meta: { title: '仓库', icon: 'example' },
  children: [{
    path: 'details',
    name: '博客仓库详情',
    icon: 'reorder',
    meta: { title: '仓库详情', icon: 'example' },
    component: Blog.Repos.Details
  }, {
    path: 'edit',
    name: '博客仓库编辑',
    icon: 'reorder',
    meta: { title: '仓库编辑', icon: 'example' },
    component: Blog.Repos.Edit
  }]
}
