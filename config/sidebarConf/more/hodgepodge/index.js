const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.more.hodgepodge;

module.exports = [
  genSidebar('Hodgepodge', children, false),
];