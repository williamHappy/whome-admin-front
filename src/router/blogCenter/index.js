
import { Home } from 'layout/'

import show from './show'
import articles from './articles'
import blogInfo from './blogInfo'
import repos from './repos'

export default {
  path: '/blog',
  name: '博客中心',
  icon: 'inbox',
  component: Home,
  redirect: '/blog/show',
  children: [show, articles, blogInfo, repos]
}
