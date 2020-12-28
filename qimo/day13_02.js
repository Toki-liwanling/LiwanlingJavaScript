var lastName = 'global_name';
const func = function(firstName) {
    return firstName + ' ' + this.lastName; 
};
var person = {
    lastName: 'person_name'
};
let a = func.call(undefined, 'student');
console.log(a);

let a = 1;
let b = 2;
(() => {
    const temp = a;
    a = b;
    b = temp;
})();
console.log(b);

function outerFunc(){
    let outerVar = 'I am outside!';
    function innerFunc() {
        console.log(outerVar);
    }
    return innerFunc;
}
const myInnerFunc = outerFunc();
myInnerFunc();

function outerFunc() {
    let outerVar = 'I am outside!';
    function innerFunc() {
        console.log(outerVar);
    }
    return innerFunc;
}
const myInnerFunc = outerFunc();
myInnerFunc();

const studentName = '小明';
const getStudentName = () => {
    console.log('hi');
};
setTimeout(getStudentName, 3000);
console.log(studentName);


var fibonacci = function(n){
    return n < 2 ? n:arguments.callee(n-1) + arguments.callee(n-2);
};

function memoize(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments);
        fn.cache = fn.cache || {};
        return fn.cache[args]
            ?fn.cache[args]
            :(fn.cache[args] = fn.apply(this,args));// 参数调用者
    };
}
/* memoization版本 */
// console.time('begin');
const memFib = memoize(fibonacci);
//时间开始
console.time();
console.log(memFib(30));//102334155
console.timeEnd();//default: 8579.316ms
console.time();
console.log(memFib(30));//102334155
console.timeEnd();//default: 0.065ms

//数组去重：(Set和数组的转换)
const oArray = [1,2,2,3,null,null,undefined,undefined,4,4];//循环读取一个一个判断
const b = new Set(oArray);
console.log(b);// Set { 1, 2, 3, null, undefined, 4 }
const c = [...b];//集合变数组
console.log(c);//[ 1, 2, 3, null, undefined, 4 ]

// 回调应用:数组排序 百度array.sort
const oArray = [1,2,12,10,33,7,9,22];
const a = oArray.sort();
console.log(a);

const num = (a,b) => a-b;
const a1 = oArray.sort(num);
console.log(a1);

const oArray = [0,12,7,8,9,24,1];
const oArray1 = oArray.filter((x) => x%2===0);
console.log(oArray1);
const mean3 = oArray1.reduce(
    (acc,x) => acc + x)
console.log(mean3)