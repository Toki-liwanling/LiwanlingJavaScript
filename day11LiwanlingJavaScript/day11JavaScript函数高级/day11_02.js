/* call() */
function add(c,d){
    console.log(this.a  + this.b + c + d);// this全局对象
}
add(3,4);// NaN

let num = {a:1,b:2};// this变为num对象
add.call(num,3,4);// num调用全局对象的add方法 10 num.add(3,4)
// add.call();// 全局

// 方法借用
// const person = {
//     name:"liwanling",
// }

// 常规方式调用
var lastName = "global_name";// 定义全局变量
const func = function (firstName){
    return firstName + " " + this.lastName;// this的值根据如何调用函数
}
var person = {
    // 该对象作为第一个参数传给call()
    lastName:"person_name",
};

// let a = 

/* apply() */
let array = ['a','b'];
let elements = [0,1,2];

// 创建新数组，原来数组不变
let a = [...array,...elements];
console.log(a);

// 不创建新数组，原来数组改变



//数组 函数列表

let obj = {
    a:1,
    b:2,
    set:function(a,b){
        this.a = a;
        this.b = b;
    }
};
obj.set(3,7);// 常规语法
obj.set.call(obj,3,7);// 等于上面的语法
obj.set.apply(obj,[3,7]);// 同上,不过参数是数组
console.log(obj);// {a:3,b:5,set:[Function:set]}
let myObj = {};
//myObj.set(5,4);// 失败:因为myObj没有set方法
obj.set.call(myObj,5,4);
obj.set.apply(myObj,[5,4]);
console.log(myObj);// {a:5,b:4}

// 借用方法模式
function f(){
    let args = [].slice.call(arguments,1,3);// 数组字面量
    return args;
}
let a = (1,21,13,4,5,6);
console.log(a);

/* bind() */
var small = {
    a:1,
    go:function (b,c,d){
        console.log(this.a + b + c + d);// this在对象中this指对象本身，不是在函数
    },
};
var large = {
    a:100,
};
small.go(2,3,4);// go.call(small,2,3,4)
//bind 绑定函数 绑定再创建副本 现在不知道参数后面调用参数

const person = {
    age:49,
    getNameAndAge:function (name){
        return name + " " + this.age;
    },
};
person.getNameAndAge("liwanling");// liwanling 20
// 将方法的引用赋值给变量nameAndAge
const nameAndAge = person.getNameAndAge;
// 通过引用nameAndAge，调用赋值给它的函数
nameAndAge("liwanling");// liwanling undefined (函数在全局作用域)

/* toString() */
function getName(){
    return 'li';
}
console.log(getName.toString());
console.log(Math.max.toString());//没改写toString方法自定义就可以看到源代码，原生[native code]

/* memoization版本 */
// console.time('begin');
console.time();
const fina = function(n){
    fina.cache = fina.cache || {};
    if(!fina.cache[n]){
        fina.cache[n] = n < 2 ? n : fina(n - 1) + fina(n - 2);
    }
    return fina.cache;
    //return n < 2 ? n : arguments.callee(n - 1) + (arguments.callee(n - 2));// 参数调用者
    //return n < 2 ? n : fina(n - 1) + fina(n - 2);// 递归调用    
}
console.log(fina(40));//高级算法：伪递归调用 计算量大时
console.timeEnd();
console.time();
console.log(fina(40));
console.timeEnd();

