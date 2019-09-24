const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.tools.chrome;

module.exports = [
  genSidebar('Chrome Developer Tools', children, false),
];