
import { HeaderNav } from '@/views/layout/components'

import Show from './show'
import Menu from './menu'
import Role from './role'
import User from './user'

export default {
  path: '/system',
  name: '系统中心',
  icon: 'inbox',
  component: HeaderNav,
  redirect: '/system/show',
  meta: { title: '系统中心', icon: 'example' },
  children: [Show, Menu, Role, User]
}
