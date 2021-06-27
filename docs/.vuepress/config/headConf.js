require('dotenv').config();

module.exports = [
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'google-site-verification', content: process.env.GOOGLE_SEARCH_CONSOLE}],
];