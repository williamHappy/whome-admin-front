import Layout from '@/views/layout/Layout'

import { AppMain } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: '/blog',
  name: 'blog',
  component: Layout,
  redirect: '/blog/show/index',
  meta: { title: '博客中心', icon: 'inbox' },
  children: [{
    path: 'show',
    name: 'blog_show',
    component: AppMain,
    children: [{
      path: 'index',
      name: 'blog_show_index',
      meta: { title: '展示页', icon: 'example' },
      component: Blog.Show
    }]
  }, {
    path: 'info',
    name: 'blog_info',
    component: AppMain,
    redirect: '/blog/info/details',
    meta: { title: '博客信息', icon: 'example' },
    children: [{
      path: 'details',
      name: 'blog_info_details',
      meta: { title: '信息详情', icon: 'example' },
      component: Blog.BlogInfo.Details
    }, {
      path: 'edit',
      name: 'blog_info_edit',
      meta: { title: '信息编辑', icon: 'example' },
      component: Blog.BlogInfo.Edit
    }]
  }, {
    path: 'repos',
    name: 'blog_repos',
    component: AppMain,
    redirect: '/blog/repos/details',
    meta: { title: '仓库', icon: 'example' },
    children: [{
      path: 'details',
      name: 'blog_repos_details',
      meta: { title: '仓库详情', icon: 'reorder' },
      component: Blog.Repos.Details
    }, {
      path: 'edit',
      name: 'blog_repos_edit',
      meta: { title: '仓库编辑', icon: 'example' },
      component: Blog.Repos.Edit
    }]
  }, {
    path: 'articles',
    name: 'blog_articles',
    component: AppMain,
    redirect: '/blog/articles/list',
    meta: { title: '文章管理', icon: 'example' },
    children: [{
      path: 'list',
      name: 'blog_articles_list',
      meta: { title: '文章列表', icon: 'example' },
      component: Blog.Articles.List
    }, {
      path: 'edit',
      name: 'blog_articles_edit',
      meta: { title: '文章编辑', icon: 'example' },
      component: Blog.Articles.Edit
    }]
  }]
}
