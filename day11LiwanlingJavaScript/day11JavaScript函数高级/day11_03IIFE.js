/* IIFE const和let原理*/
(function(){
    const temp = "World";//创建临时作用域 块级作用域 执行没了
    console.log(`Hello${temp}`);
})();//立即运行的函数表达式
console.log(temp);

/* 创建自包含的代码块 —— 模式 */

myModule.myPublicFuction();//调用

