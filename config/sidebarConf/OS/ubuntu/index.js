const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.OS.ubuntu;

module.exports = [
  genSidebar('Ubuntu', children, false),
];