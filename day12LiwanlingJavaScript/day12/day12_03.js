// 类声明 词法作用域
class User {

}

let myUser = new User();

// 类表达式
const User = class {

};

let myUser1 = new User();

//不提升：确保子类在父类之后

// constructor()
class User{
    constructor(name){// 初始化参数
        this.name = name;// name就是隐式的字段
    }
}

let myUser = new User('xiao');
console.log(myUser.name);//'xiao'

// 显式定义一个公共字段
class User {
    name = 'unkown';
    constructor(){

    }
}
let myUser = new User();
myUser.name = 'xiao';


//定义一个私有实例字段
class User {
    #name;
    constructor(name){
        this.#name = name;
    }
}
let myUser = new User('li');
console.log(myUser);

// 静态公有字段
class User {
    static TYPE_ADMIN = "admin";
    static TYPE_REGULAR = "regular";
    name;
    type;
}
console.log(admin.TYPE_ADMIN);// undefined

// 静态私有
// 单例模式

// 公有实例方法
class User{
    name;
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    nameContains(str){
        return this.getName().includes(str);
    }
}

// 创建公有静态方法
// 规则:1.只能访问静态字段 2.不能访问实例的字段和方法
class User{
    static takenNames = [];
    static isNameTaken(name1){
        return User.takenNames.includes(name1);
    }
    name = "Unkown";
    constructor(name2){
        this.name = name2;
        User.takenNames.push(name2);
    }
}

const user = new User("Jon");
User.isNameTaken("Jon");

// 子类构造器 super在this之前 super失效