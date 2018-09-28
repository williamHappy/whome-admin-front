
import { HeaderNav } from '@/views/layout/components'

import show from './show'
import articles from './articles'
import blogInfo from './blogInfo'
import repos from './repos'

export default {
  path: '/blog',
  name: '博客中心',
  icon: 'inbox',
  component: HeaderNav,
  redirect: '/blog/show',
  meta: { title: '博客中心', icon: 'example' },
  children: [show, articles, blogInfo, repos]
}
