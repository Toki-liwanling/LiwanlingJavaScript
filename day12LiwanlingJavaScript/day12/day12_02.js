function Dog(name,breed,color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function(){
        return '汪汪!';
    }
}
let Dog1 = new Dog('豆豆','泰迪','棕色');
let Dog2 = new Dog('毛毛','拉布拉多','白色');
console.log(Dog1);

// ES5
function Dog(name,breed,color){
    this.name = name;
    this.breed = breed;
    this.color = color;
}

Dog.prototype.bark = function(){//dog实例方法
    return '汪汪!'
}
// =
// class Dog{
//     // 构造器函数
//     constructor(name,breed,color){
//         this.name = name;
//         this.breed = breed;
//         this.color = color;
//     }
//     bark(){
//         return '汪汪!';
//     }
// }

let dog1 = new Dog('豆豆','泰迪','棕色');
dog1.bark();

// dog继承方法
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark(){
        return '汪汪!';
    }
}

class ChiWaWa extends Dog{
    constructor(name){
        super(name);
    }
    smallBark(){
        return '哇哇！';
    }
}

let myPet = new ChiWaWa('小狗');
myPet.smallBark();// 哇哇
myPet.bark();// 汪汪
console.log(myPet.name);// 小狗
console.log(myPet.a);// undefined









