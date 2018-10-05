import Layout from '@/views/layout/Layout'

import { AppMain } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: '/blog',
  name: 'blog',
  component: Layout,
  redirect: '/blog/show/index',
  meta: { title: 'blogCenter', icon: 'inbox' },
  children: [{
    path: 'show',
    name: 'blog_show',
    component: AppMain,
    children: [{
      path: 'index',
      name: 'blog_show_index',
      meta: { title: 'bolgShow', icon: 'example' },
      component: Blog.Show
    }]
  }, {
    path: 'info',
    name: 'blog_info',
    component: AppMain,
    redirect: '/blog/info/details',
    meta: { title: 'blogInfo', icon: 'example' },
    children: [{
      path: 'details',
      name: 'blog_info_details',
      meta: { title: 'infoDetail', icon: 'example' },
      component: Blog.BlogInfo.Details
    }, {
      path: 'edit',
      name: 'blog_info_edit',
      meta: { title: 'infoEdit', icon: 'example' },
      component: Blog.BlogInfo.Edit
    }]
  }, {
    path: 'repos',
    name: 'blog_repos',
    component: AppMain,
    redirect: '/blog/repos/details',
    meta: { title: 'blogRepos', icon: 'example' },
    children: [{
      path: 'details',
      name: 'blog_repos_details',
      meta: { title: 'reposDetail', icon: 'example' },
      component: Blog.Repos.Details
    }, {
      path: 'edit',
      name: 'blog_repos_edit',
      meta: { title: 'reposEdit', icon: 'example' },
      component: Blog.Repos.Edit
    }]
  }, {
    path: 'articles',
    name: 'blog_articles',
    component: AppMain,
    redirect: '/blog/articles/list',
    meta: { title: 'blogArticle', icon: 'example' },
    children: [{
      path: 'list',
      name: 'blog_articles_list',
      meta: { title: 'articlesList', icon: 'example' },
      component: Blog.Articles.List
    }, {
      path: 'edit',
      name: 'blog_articles_edit',
      meta: { title: 'articlesEdit', icon: 'example' },
      component: Blog.Articles.Edit
    }]
  }]
}
