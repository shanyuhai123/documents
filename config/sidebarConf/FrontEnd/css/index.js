const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.FrontEnd.css;

module.exports = [
  genSidebar('CSS', children, false),
];