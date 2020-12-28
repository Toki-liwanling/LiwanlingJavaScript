let a = 'li';
let b = "li";
let c = `${a} + ${b}`;// 模板字面量

console.log(c);

let bHappy = true;

const oStudent = null;// 对象字面量
const oArray = [];// 数组字面量

// let/var/const
var strName = 'li';
window.strName = 'xiaojichao';
var strName;
strName = 1;
// IIFE临时
//1.声明后再声明，修改值类型
//2.提升

//let
//1.不能重复声明
//2.不提升
//3.值可以修改
let strName1 = 'xiao';
//let strName1 = 'li';
strName1 = 'li';

//const
//1.不能重复声明
//2.不提升
//3.值不能修改，原始类型的值
//4.变量声明的同时必须初始化
const str;
const strName2 = 'li';
strName2 = 'li';

const oStudent = {
    name:'li',
    age:49,
};
oStudent.name = 'xiao';

//数据类型
/**
 * 1.原始类型
 * 1)String
 * 2)Number
 * 3)Boolean
 * 4)Undefined
 * 5)null
 * 6)Symbol
 * 7)bigInt
 * 
 * 2.对象类型
 * 1)typeof运算符 判断数据类型
 * 2)instanceof 判断对象的类型
 */
//出现undefined
//1.变量声明了,没有赋值let var
let b;//var
console.log(b);//undefined

//2.调用函数，参数没有赋值，参数的值是undefined
function abc(a){
    return a;
}
console.log(abc());

//3.函数没有return，默认返回的值是undefined
function abc1(a){
    console.log(a);
}
let a = abc1(1);
console.log(a);

//对象的属性没有赋值，该属性的值为undefined
//访问对象不存在的属性，该属性的值为undefined
const oStudent = {
    name:'li',
};
console.log(oStudent.age);

// 对象运算符 in / instanceof /delete
const oStudent = {
    name:'li',
    age:49,
};
console.log('name' in oStudent);

const oArray = ['xiao','li'];
console.log('li' in oArray);

/**
 * for...in
 * 
 * for...of
 */

/**
 * 解构
 */
const oArray = [1,2,3];
let a = oArray[0];
let b = oArray[1];
let c = oArray[2];

const [a,b,c] = [1,2,3];
console.log(a);// 1

// 数组去重
const oArray = [null,null,undefined,1,1,1,2,2,8];
const omySet = new Set(oArray);
console.log(omySet);
const oArray1 = [...omySet];
const oArray2 = Array.from(omySet);//集合转换为数组
console.log(oArray1);






