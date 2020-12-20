/*
JavaScript原型，对象不是面向对象。
*/
// 对象字面量
const dog = {
    name:'豆豆',
    breed:'泰迪',
    color:'棕色',
    // break:function(){
    //     return '汪汪!';
    // }
    // =
    break(){
        return '汪汪!';
    }
}
console.log(dog.toString());//隐式继承：原型
console.log(dog.constructor);
console.log(dog.constructor.prototype);// null对象 Object

// ES5 构造函数
function Dog(name,breed,color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function(){
        return '汪汪!';
    }
}

let dog = new Dog('豆豆','泰迪','棕色');
dog.bark();
console.log(dog.constructor);
console.log(dog.constructor.prototype);// Dog对象

// Object.create();
const dog = {// 封装
    name:'豆豆',
    breed:'泰迪',
    color:'棕色',
    bark(){
        return '汪汪!';
    }
}

let dog1 = Object.create(dog);//内置对象 继承 以dog为模板创建对象
let a = dog1.bark();
console.log(a);
console.log(dog1.constructor);
console.log(dog1.constructor.prototype);// {} null对象 Object

// ES6 类
class Dog{
    // 构造器函数
    constructor(name,breed,color){
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
    bark(){
        return '汪汪!';
    }
}

let dog2 = new Dog('豆豆','泰迪','棕色');
console.log(dog2.constructor);// 构造器属性prototype 对象属性constructor
console.log(dog2.constructor.prototype);
// dog2.constructor();