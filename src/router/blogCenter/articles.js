
import { Home } from 'layout/'

import { Blog } from 'views'

export default {
  path: 'articles',
  icon: 'inbox',
  component: Home,
  redirect: '/blog/articles/list',
  children: [{
    path: 'list',
    name: '文章列表',
    icon: 'reorder',
    component: Blog.Articles.List
  }, {
    path: 'edit',
    name: '文章编辑',
    icon: 'reorder',
    component: Blog.Articles.Edit
  }]
}
