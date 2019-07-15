const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.BackEnd.koa;

module.exports = [
  genSidebar('Koa', children, false),
];