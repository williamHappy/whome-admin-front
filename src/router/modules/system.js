import Layout from '@/views/layout/Layout'

import { AppMain } from '@/views/layout/components'

import { System } from '@/views'

export default {
  path: '/system',
  name: 'system',
  component: Layout,
  redirect: '/system/show/index',
  meta: { title: '系统中心', icon: 'example' },
  children: [{
    path: 'show',
    name: 'system_show',
    component: AppMain,
    children: [{
      path: 'index',
      name: 'system_show_index',
      meta: { title: '展示页', icon: 'example' },
      component: System.Show
    }]
  }, {
    path: 'user',
    name: 'system_user',
    component: AppMain,
    redirect: '/system/user/list',
    meta: { title: '用户管理', icon: 'example' },
    children: [{
      path: 'list',
      name: 'system_user_list',
      meta: { title: '用户列表', icon: 'example' },
      component: System.User.List
    }, {
      path: 'edit',
      name: 'system_user_edit',
      meta: { title: '用户编辑', icon: 'example' },
      component: System.User.Edit
    }]
  }, {
    path: 'menu',
    name: 'system_menu',
    component: AppMain,
    redirect: '/system/menu/index',
    children: [{
      path: 'index',
      name: 'system_menu_index',
      meta: { title: '菜单管理', icon: 'example' },
      component: System.Menu
    }]
  }, {
    path: 'role',
    name: 'system_role',
    component: AppMain,
    redirect: '/system/role/index',
    children: [{
      path: 'index',
      name: 'system_role_index',
      meta: { title: '角色管理', icon: 'example' },
      component: System.Role
    }]
  }]
}
