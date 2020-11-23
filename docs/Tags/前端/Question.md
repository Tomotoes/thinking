1. 前端Question: 如何判断一个函数 是箭头函数 还是 function 定义的函数.

   答案是 箭头函数是没有原型链的, 也就是 prototype 属性为空

   还有一种方式，箭头函数无法实例化，可以  在try catch 中 new func() 捕获异常，有异常就是箭头函数