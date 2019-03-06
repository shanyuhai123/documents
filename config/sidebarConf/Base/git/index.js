const utils = require('../../../../utils/index.js');
const children = ['','01-generate-ssh-key','02-switch-multiple-github-accounts'];

module.exports = [
  utils.genSidebar('Git', children, false),
];