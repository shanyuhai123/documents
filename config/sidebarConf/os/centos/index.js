const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.os.centos;

module.exports = [
  genSidebar('CentOS', children, false),
];