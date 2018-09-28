
import { HeaderNav } from '@/views/layout/components'

import Show from './show'
import Articles from './articles'
import BlogInfo from './blogInfo'
import Repos from './repos'

export default {
  path: '/blog',
  name: '博客中心',
  icon: 'inbox',
  component: HeaderNav,
  redirect: '/blog/show',
  meta: { title: '博客中心', icon: 'example' },
  children: [Show, Articles, BlogInfo, Repos]
}
