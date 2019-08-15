const genSidebar = require('../../../utils/genSidebar.js');
const filenames = require('../../filenames.json');
const children = filenames.computer;

module.exports = [
  genSidebar('计算机', children, false, 2),
];