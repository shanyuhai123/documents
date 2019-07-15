const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.Base.git;

module.exports = [
  genSidebar('Git', children, false),
];