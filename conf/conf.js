var creativision = require('creativision');
var creat = creativision();

//配置区

//传输此文件的filepath
o2c.confdir(__dirname);
//配置单核 ->s;多核->m;默认多核
creat.set('core','m');
//设置监听端口;默认80
creat.set('port','80');
//设置静态文件目录->仅可设置一个，重复设置会导致被后者覆盖。
o2c.static('/public');
//设置渲染文件目录
o2c.viewdir('../view');
//加载路由表
require('../router');
//加载渲染引擎=>里面的处理方法什么都自己写。此行只是一个开源API实例。
require('../lang/jade.js');

exports = module.exports = creat;