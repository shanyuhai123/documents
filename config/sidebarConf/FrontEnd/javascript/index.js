const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.FrontEnd.javascript;

module.exports = [
  genSidebar('JavaScript', children, false),
];