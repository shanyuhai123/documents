const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.Base.clean;

module.exports = [
  genSidebar('Clean', children, false),
];