const utils = require('../../../../utils/index.js');
const children = ['','01-add-user','02-login-with-rsa-key','03-upload-file-to-server','04-clone-project-to-server'];

module.exports = [
  utils.genSidebar('CentOS', children, false),
];