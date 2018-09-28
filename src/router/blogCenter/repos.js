
import { Home } from 'layout/'

import { Blog } from 'views'

export default {
  path: 'repos',
  icon: 'inbox',
  component: Home,
  redirect: '/blog/repos/details',
  children: [{
    path: 'details',
    name: '博客仓库详情',
    icon: 'reorder',
    component: Blog.Repos.Details
  }, {
    path: 'edit',
    name: '博客仓库编辑',
    icon: 'reorder',
    component: Blog.Repos.Edit
  }]
}
