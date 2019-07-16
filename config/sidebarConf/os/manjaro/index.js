const genSidebar = require('../../../../utils/genSidebar.js');
const filenames = require('../../../filenames.json');
const children = filenames.os.manjaro;

module.exports = [
  genSidebar('Manjaro', children, false),
];