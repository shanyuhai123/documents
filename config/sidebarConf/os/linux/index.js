const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.os.linux;

module.exports = [
  genSidebar('Linux', children, false),
];