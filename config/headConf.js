const secretKeyConf = require('./secretKeyConf.js');

module.exports = [
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'google-site-verification', content: secretKeyConf.googleSearchConsole}],
];