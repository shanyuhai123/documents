const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.os.ubuntu;

module.exports = [
  genSidebar('Ubuntu', children, false),
];