const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.Base.interview;

module.exports = [
  genSidebar('Interview', children, false),
];