const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.os.windows;

module.exports = [
  genSidebar('Windows', children, false),
];