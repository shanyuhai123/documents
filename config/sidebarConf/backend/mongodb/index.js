const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.backend.mongodb;

module.exports = [
  genSidebar('MongoDB', children, false),
];