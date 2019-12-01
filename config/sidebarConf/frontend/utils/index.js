const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.frontend.utils;

module.exports = [
  genSidebar('Utils', children, false),
];