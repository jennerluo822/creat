var jade = require('jade');

//此函数的接受和处理方法自己写,是res.render的原型
o2c.runtime.engine = function(filepath,config){
  filepath = o2c.runtime.viewpath + filepath;
  var html = jade.renderFile(filepath,config);
};