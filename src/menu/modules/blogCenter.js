
export default {
  path: '/blog',
  title: 'blogCenter',
  icon: 'blog-show',
  children: (pre => [
    { path: `${pre}index`, title: 'bolgShow', icon: 'blog-show' },
    {
      path: `${pre}info`,
      title: 'blogInfo',
      icon: 'blog-info',
      children: [
        {
          path: `${pre}info/details`,
          title: 'infoDetail',
          icon: 'blog-info-details'
        },
        {
          path: `${pre}info/edit`,
          title: 'infoEdit',
          icon: 'blog-info-edit'
        }
      ]
    },
    {
      path: `${pre}repos`,
      title: 'blogRepos',
      icon: 'blog-repos',
      children: [
        {
          path: `${pre}repos/details`,
          title: 'reposDetail',
          icon: 'blog-repos-detail'
        },
        {
          path: `${pre}repos/edit`,
          title: 'reposEdit',
          icon: 'blog-repos-edit'
        }
      ]
    },
    {
      path: `${pre}articles`,
      title: 'blogArticles',
      icon: 'blog-articles',
      children: [
        {
          path: `${pre}articles/list`,
          title: 'articlesList',
          icon: 'blog-articles-list'
        },
        {
          path: `${pre}articles/edit`,
          title: 'articlesEdit',
          icon: 'blog-articles-edit'
        }
      ]
    }
  ])('/blog/')
}
