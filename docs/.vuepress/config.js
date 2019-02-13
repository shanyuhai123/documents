module.exports = {
  title: '飞跃高山与大洋的鱼',
  themeConfig: {
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