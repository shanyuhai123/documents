const utils = require('../../../../utils/index.js');
const children = ['','Class 的基本语法','Class 的继承','Promise 对象','Set 和 Map 数据结构','async 函数','let 和 const 命令','函数的扩展','变量的解构赋值','字符串的扩展','对象的扩展','对象的新增方法','数值的扩展','数组的扩展','正则的扩展'];

module.exports = [
  utils.genSidebar('JavaScript', children, false),
];