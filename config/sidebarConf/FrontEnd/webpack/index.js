const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.FrontEnd.webpack;

module.exports = [
  genSidebar('Webpack', children, false),
];