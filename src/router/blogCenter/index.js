
// import { HeaderNav } from '@/views/layout/components'
import Layout from '@/views/layout/Layout'

import Show from './show'
import Articles from './articles'
import BlogInfo from './blogInfo'
import Repos from './repos'

export default {
  path: '/blog',
  name: '博客中心',
  icon: 'inbox',
  component: Layout,
  redirect: '/blog/show/index',
  meta: { title: '博客中心', icon: 'example' },
  children: [Show, Articles, BlogInfo, Repos]
}
