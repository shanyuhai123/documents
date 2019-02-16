module.exports = [
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
];