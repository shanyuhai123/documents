const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.tools.vscode;

module.exports = [
  genSidebar('VSCode', children, false),
];