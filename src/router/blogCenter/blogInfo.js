
import { Home } from 'layout/'

import { Blog } from 'views'

export default {
  path: 'blogInfo',
  icon: 'inbox',
  component: Home,
  redirect: '/blog/blogInfo/details',
  children: [{
    path: 'details',
    name: '博客信息详情',
    icon: 'reorder',
    component: Blog.BlogInfo.Details
  }, {
    path: 'edit',
    name: '博客信息编辑',
    icon: 'reorder',
    component: Blog.BlogInfo.Edit
  }]
}
