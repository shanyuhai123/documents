const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.more.interview;

module.exports = [
  genSidebar('Interview', children, false),
];