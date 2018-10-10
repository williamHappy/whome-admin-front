import Layout from '@/views/layout/Layout'

import { AppMain } from '@/views/layout/components'

import { Blog } from '@/views'

export default {
  path: '/blog',
  name: 'blog',
  component: Layout,
  redirect: '/blog/show/index',
  meta: { title: 'blogCenter', icon: 'blog-show' },
  children: [{
    path: 'show',
    name: 'blog_show',
    component: AppMain,
    children: [{
      path: 'index',
      name: 'blog_show_index',
      meta: { title: 'bolgShow', icon: 'blog-show' },
      component: Blog.Show
    }]
  }, {
    path: 'info',
    name: 'blog_info',
    component: AppMain,
    redirect: '/blog/info/details',
    meta: { title: 'blogInfo', icon: 'blog-info' },
    children: [{
      path: 'details',
      name: 'blog_info_details',
      meta: { title: 'infoDetail', icon: 'blog-info-details' },
      component: Blog.BlogInfo.Details
    }, {
      path: 'edit',
      name: 'blog_info_edit',
      meta: { title: 'infoEdit', icon: 'blog-info-edit' },
      component: Blog.BlogInfo.Edit
    }]
  }, {
    path: 'repos',
    name: 'blog_repos',
    component: AppMain,
    redirect: '/blog/repos/details',
    meta: { title: 'blogRepos', icon: 'blog-repos' },
    children: [{
      path: 'details',
      name: 'blog_repos_details',
      meta: { title: 'reposDetail', icon: 'blog-repos-detail' },
      component: Blog.Repos.Details
    }, {
      path: 'edit',
      name: 'blog_repos_edit',
      meta: { title: 'reposEdit', icon: 'blog-repos-edit' },
      component: Blog.Repos.Edit
    }]
  }, {
    path: 'articles',
    name: 'blog_articles',
    component: AppMain,
    redirect: '/blog/articles/list',
    meta: { title: 'blogArticles', icon: 'blog-articles' },
    children: [{
      path: 'list',
      name: 'blog_articles_list',
      meta: { title: 'articlesList', icon: 'blog-articles-list' },
      component: Blog.Articles.List
    }, {
      path: 'edit',
      name: 'blog_articles_edit',
      meta: { title: 'articlesEdit', icon: 'blog-articles-edit' },
      component: Blog.Articles.Edit
    }]
  }]
}
