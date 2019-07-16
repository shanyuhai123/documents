const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.frontend.webpack;

module.exports = [
  genSidebar('Webpack', children, false),
];