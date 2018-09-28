
import { Home } from 'layout/'

import show from './show'
import Menu from './menu'
import Role from './role'
import User from './user'

export default {
  path: 'system',
  name: '系统中心',
  icon: 'inbox',
  component: Home,
  redirect: '/system/show',
  children: [show, Menu, Role, User]
}
