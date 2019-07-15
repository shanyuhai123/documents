const genSidebar = require('../../../utils/genSidebar.js');
const filenames = require('../../filenames.json');
const children = filenames.guide;

module.exports = [
  genSidebar('关于文档', children, false, 2),
];