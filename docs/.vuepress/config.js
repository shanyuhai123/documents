module.exports = {
  title: '飞跃高山与大洋的鱼',
  description: '飞跃高山与大洋的鱼的文档, vuepress 文档',
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  serviceWorker: true,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'shanyuhai123/documents',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: { 
        message: "内容已更新", 
        buttonText: "刷新" 
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          { text: '亚洲', items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' },
          ] },
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/css/': [
        '',     /* /foo/ */
        'css1',  /* /foo/one.html */
        'css2'   /* /foo/two.html */
      ],

      '/javascript/': [
        '',      /* /bar/ */
        'javascript1', /* /bar/three.html */
        'javascript2'   /* /bar/four.html */
      ],

      // fallback deny all
      '/': [
        '',        /* / */
        '/about/', /* /contact.html */
        '/about/test'    /* /about.html */
      ]
    }
  }
}