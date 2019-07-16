const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.more.algorithm;

module.exports = [
  genSidebar('Algorithm', children, false),
];