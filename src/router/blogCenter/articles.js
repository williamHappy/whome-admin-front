
import { Sidebar } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: 'articles',
  icon: 'inbox',
  component: Sidebar,
  redirect: '/blog/articles/list',
  meta: { title: '文章管理', icon: 'example' },
  children: [{
    path: 'list',
    name: '文章列表',
    icon: 'reorder',
    meta: { title: '文章列表', icon: 'example' },
    component: Blog.Articles.List
  }, {
    path: 'edit',
    name: '文章编辑',
    icon: 'reorder',
    meta: { title: '文章编辑', icon: 'example' },
    component: Blog.Articles.Edit
  }]
}
