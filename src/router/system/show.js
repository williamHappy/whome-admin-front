
import { Home } from 'layout/'

import { System } from 'views'

export default {
  path: 'show',
  icon: 'inbox',
  component: Home,
  redirect: '/system/show/index',
  children: [{
    path: 'index',
    name: '首页',
    icon: 'reorder',
    component: System.Show
  }]
}
