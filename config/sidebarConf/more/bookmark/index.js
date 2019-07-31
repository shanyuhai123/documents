const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.more.bookmark;

module.exports = [
  genSidebar('Bookmark', children, false),
];