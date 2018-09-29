
// import { HeaderNav } from '@/views/layout/components'
import Layout from '@/views/layout/Layout'

import Show from './show'
import Menu from './menu'
import Role from './role'
import User from './user'

export default {
  path: '/system',
  name: '系统中心',
  icon: 'inbox',
  component: Layout,
  redirect: '/system/show/index',
  meta: { title: '系统中心', icon: 'example' },
  children: [Show, Menu, Role, User]
}
