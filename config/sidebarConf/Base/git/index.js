const utils = require('../../../../utils/index.js');
const children = ['', 'Generate SSH key', 'Switch multiple github accounts'];

module.exports = [
  utils.genSidebar('Git 使用', children, false),
];