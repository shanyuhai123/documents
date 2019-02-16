const css = require('./css/index.js');
const javascript = require('./javascript/index.js');

module.exports = {
  '/css/': css,

  '/javascript/': javascript,

  // fallback deny all
  '/': [
    '',        /* / */
    '/about/', /* /contact.html */
    '/about/test'    /* /about.html */
  ]
};