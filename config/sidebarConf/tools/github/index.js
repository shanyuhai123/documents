const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.tools.github;

module.exports = [
  genSidebar('Github', children, false),
];