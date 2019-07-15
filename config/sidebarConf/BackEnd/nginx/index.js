const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.BackEnd.nginx;

module.exports = [
  genSidebar('Nginx', children, false),
];