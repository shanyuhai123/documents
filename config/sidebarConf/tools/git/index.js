const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.tools.git;

module.exports = [
  genSidebar('Git', children, false),
];