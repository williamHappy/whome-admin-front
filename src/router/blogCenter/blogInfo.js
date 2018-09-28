
import { Sidebar } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: 'blogInfo',
  icon: 'inbox',
  component: Sidebar,
  redirect: '/blog/blogInfo/details',
  meta: { title: '博客信息', icon: 'example' },
  children: [{
    path: 'details',
    name: '博客信息详情',
    icon: 'reorder',
    meta: { title: '信息详情', icon: 'example' },
    component: Blog.BlogInfo.Details
  }, {
    path: 'edit',
    name: '博客信息编辑',
    icon: 'reorder',
    meta: { title: '信息编辑', icon: 'example' },
    component: Blog.BlogInfo.Edit
  }]
}
