/*  JavaScript精华:一等对象。   */
// const getStudent = function(name,gender){// ...扩展运算符 剩余参数rest 不会计算到length
//     return `${name},${gender}`;
// }
// 返回变量名

// const getStudent = function student(name,gender){
//     return `${name},${gender}`;
// }

function getStudent(name,gender){
    return `${name},${gender}`;
}// 函数声明

// 调用方式
getStudent();
getStudent.call(undefined,name,gender);
window.getStudent();

console.log(typeof getStudent);
console.log(getStudent.length);
console.log(getStudent.name);
console.log(getStudent.prototype);// 原型对象getStudent{}
// console.log(getStudent.arguments.length);

