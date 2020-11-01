/*
JavaScript运行机制:JavaScript引擎如何执行JavaScript代码
*/
function greeting() {
    return 'hi'//返回字符串
}

function mean (...args) {//函数代码
    let sum = 0;
    for (let arg of args) {
        sum = arg + sum
    }
    return sum / args.length
}
console.log(mean(1,2,3,4,5))//全局代码

// 代码块
if(a==1){
    let b = 2;
    let c = 3;
}
let a = 'Hello World!';

// 执行栈 运行代码的变量存在执行上下文里
function first() {
    console.log('在 first 函数内');
    second();
    console.log('再次在 first 函数内');
}
function second() {
    console.log('在 second 函数内');
}
first();
console.log('在全局执行上下文中');
// 在全局环境下用var声明的变量，直接加入全局对象window里。
// var a = 1;
// console.log(window.a);
console.log(global)

// function foo(){
//     b = 1;//没声明，自动变为一个全局变量
//     return 'hi'
// }
// foo()
// console.log(b)
let c = 2
function foo(){
    b = 1;
    return 'hi' + c
}
foo()
console.log(b)

const person = {
    name: "peter",
    birthYear: 1994,
    calcAge: function () {
      console.log(2020 - this.birthYear);
    },
};
person.calcAge();
// 'this' 指 'person'，因为 'calcAge' 是通过用 'person' 对象引用调用的。
const calculateAge = person.calcAge;
calculateAge();

console.log(this)//
function mean(){

}

// var a = 1;
// var b = 2;
// function foo(){

// }
// window
// a:1
// b:2
// foo:[function()]

let a = 20;
const b = 30;
var c;
function multiply(e, f) {
  var g = 20;
  return e * f * g;
}
c = multiply(20, 30);

function sayHello() {
    return 'Hello, JavaScript!'
}

// 全局上下文
var strMessage;
var sayHi
console.log(sayHello)
console.log(strMessage)
console.log(sayHi)

strMessage = 'Hello, Freshman!'
sayHi = function () {
  return 'Hi, JavaScript'
}

console.log(sayHello);//[Function: sayHello]
console.log(strMessage);//undefined
console.log(sayHi);//undefined

function sayHello() {
  return 'Hello, JavaScript!'
}
// 函数表达式：函数的定义可以放在函数调用之后。
var strMessage = 'Hello, Freshman!'
var sayHi = function () {
  return 'Hi, JavaScript'
}

function foo(){
    console.log(a)
    var a = 1;
    console.log(a)
}
foo();

function foo(){
    var a;
    console.log(a)
    a = 1;
    console.log(a)
}
foo();

function foo(){
    console.log(a);//暂时性死区
    let a = 1;
    console.log(a)
}
foo();//引用错误，a未初始化。

// function foo(){
//     console.log('hi')
// }
// global.foo();

// const foo = function() {
//     console.log("hi");
// }
// global.foo();

// 变量helloExpression的值为undefined，所以该函数不能被调用
helloExpression(); // 抛出一个错误
// 函数声明可以在它声明之前调用
helloDeclaration(); // 返回 'hello' 
// 将函数表达式赋值给一个变量
var helloExpression = function() { 
  console.log('hello')
} 
// 声明一个函数声明
function helloDeclaration() { 
  console.log('hello') 
} 
// 函数表达式只能在赋值后才能被调用 
helloExpression(); // 返回 'hello'


function foo() {
    console.log('hi')
}



const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
  const name = "Sarah";
  const age = 22;
  return `${name} is ${age} and lives in ${city}`;
}
console.log(getPersonInfo());


const age = 21

function checkAge() {
  if (age < 21) {
    const message = "You cannot drink!"
    return message
  } else {
    const message = "You can drink!"
    return message
  }
}

function foo(p1,p2) {
    //return p1 + Path
    console.log(p1+p2)
    console.log(this)
}
foo(1,2);//函数调用形式
foo.call(null,1,2);


