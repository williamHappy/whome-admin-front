
import { Home } from 'layout/'

import { Blog } from 'views'

export default {
  path: 'show',
  icon: 'inbox',
  component: Home,
  redirect: '/blog/show/index',
  children: [{
    path: 'index',
    name: '首页',
    icon: 'reorder',
    component: Blog.Show
  }]
}
