const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.frontend.d3js;

module.exports = [
  genSidebar('D3js', children, false),
];