const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.backend.koa;

module.exports = [
  genSidebar('Koa', children, false),
];