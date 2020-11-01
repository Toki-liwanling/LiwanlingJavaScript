# Day05 JavaScript运行机制

### 目录

- JavaScript引擎

- 执行上下文和执行栈

- 提升

- 作用域与作用域链

  

### PATR 1：JavaScript引擎如何执行JavaScript代码

```javascript
function greeting() {
    return 'hi'//返回字符串
}
```



#### 过程

![图片1](E:\文档文件\2018级大3上\Java WEB开发\图片1.jpg)

#### 总结

1. 从网络、浏览器缓存或 service worker **加载脚本**为UTF-16编码的字节流。
2. 字节流解码器将字节流解析成 **token**。
3. 解析器将 token 解析成**抽象语法树**（abstract syntax tree，AST）。
4. 解释器**将抽象语法树**解释**成**字节码。
5. **（可能）将字节码与类型反馈**编译成高度优化过的机器码。

### PATR 2：执行上下文和执行栈

#### ECMAScript代码有四种类型

- 全局代码

- 函数代码

- eval代码

- 模块代码

  ```javascript
  function mean (...args) {//函数代码
      let sum = 0;
      for (let arg of args) {
          sum = arg + sum
      }
      return sum / args.length
  }
  
  console.log(mean(1,2,3,4,5))//全局代码
  
  //代码块
  {
      let b = 2;
      let c =3;
  }
  ```

为执行JS代码，并跟踪其运行时求值，ECMAScript规范定义了执行上下文的概念。



**执行上下文**：表示 JavaScript 代码的**执行环境**。

#### 执行上下文的四种类型

- 全局执行上下文： 默认或者基础的执行上下文。只要代码不在函数内，那么就是在全局执行上下文中。(**运行创建**、唯一)
- 函数执行上下文：每次**调用**一个函数时，就会创建一个新的执行上下文。
- Eval函数执行上下文：不讨论。
- 模块执行上下文：讲模块化编程时候再讨论。

#### 执行上下文的创建

创建阶段

1. 作用：JS引擎只是扫描整个代码，但是不执行；它创建作用域链，并且为其作用域内每个变量和函数分配内存；初始化 this 的值。

   创建词法环境和变量环境

2. 环境：一种存储标识符到变量映射的结构。

3. 词法环境：用于定义出现在上下文中的标识符与其值之间的关联的结构。

   - 环境记录：存储变量和函数声明的地方。

     - 声明式环境记录：存储变量声明和函数声明。

     - 对象环境记录：除了变量和函数声明外，对象环境记录还存储一个全局绑定对象（在浏览器中是 window 对象）。

       ```javascript
       var a = 1;
       var b = 2;
       function foo() {
       
       }
       
       window
       a:1
       b:2
       foo: [function()]
       ```

     - 对于**函数代码**，环境记录还包含一个arguments对象，这个对象包含传递给函数的索引和实参之间的映射，以及传递给该函数的实参的长度(个数)。

   - 对外层环境的引用：它可以访问其外层词法环境，如果在当前词法环境中找不到变量，那么 JavaScript 引擎就可以到外层环境中查找。

     ```javascript
     let c = 2;
     function foo() {
         return 'hi' + c;
     }
     foo();
     ```

   - this绑定

     - 全局执行上下文中，this 的值指全局对象（浏览器中，指 window 对象；Node 中，指 global 对象）。 

       ```javascript
       console.log(this);//全局对象
       ```

     - 函数执行上下文中，this 取决于函数的调用方式。

       - 如果函数是通过一个对象引用来调用，那么 this 的值就是该对象；

       - 否则，this 就是全局对象或者 undefined(严格模式下)。

         ```javascript
         // 对象字面量
         const person = {
             name: "peter",
             birthYear: 1994,
             calcAge: function () {
               console.log(2020 - this.birthYear);// NAN
             },
         };
         person.calcAge();
         //'this'指'person'，因为'calcAge'是通过用'person'对象引用调用的。
         const calculateAge = person.calcAge;
         calculateAge();
         ```

     ![图片3](E:\文档文件\2018级大3上\Java WEB开发\图片3.png)

     注意

   ```javascript
   // 在全局环境下用var声明的变量，直接加入全局对象window里。
   var a = 1;
   console.log(window.a);
   
   let b = 2;
   console.log(window.b);//Undefined
   
   function foo() {
       b = 1;//没声明，自动变为一个全局变量
   }
   foo();
   console.log(b);
   ```

4.变量环境：其环境记录保存该执行上下文内由var 声明语句创建的绑定。

在 ES6 中，词法环境组件与变量环境组件之间的一个区别是：

- 前者用于存储函数声明以及用 let 和 const 声明的变量绑定。
- 后者只用于存储用 var 声明的变量绑定。



执行阶段：在本阶段 JS 引擎再次扫描代码，完成所有变量赋值，最终执行代码。

```javascript
let x = 10;
let y = 20;
function foo(z) {
  let x = 100;
  return x + y + z;
}
foo(30); //150
```



```javascript
let a = 20;
const b = 30;
var c;
function multiply(e, f) {
  var g = 20;
  return e * f * g;
}
c = multiply(20, 30);
```



（管理机制）

#### 执行栈(调用栈)

一种 LIFO（后进先出）的栈结构，用于存储代码执行期间所创建的执行上下文，维护控制流程和执行顺序。

- 调用其它上下文的上下文称为调用者（Caller）。
- 被调用的上下文称为被调用者（Callee）。
- 全局执行上下文总是在执行栈的底部。

```javascript
// 运行代码的变量存在执行上下文里
let a = 'Hello World!';

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
```

![图片2](E:\文档文件\2018级大3上\Java WEB开发\图片2.jpg)



### PATR 3：提升

```javascript
console.log(sayHello)
console.log(strMessage)
console.log(sayHi)
function sayHello() {
  return 'Hello, JavaScript!'
}
var strMessage = 'Hello, Freshman!'
var sayHi = function () {
  return 'Hi, JavaScript'
}

// 全局上下文
function sayHello() {
    return 'Hello, JavaScript!'
}

var strMessage;
var sayHi;
console.log(sayHello);//[Function: sayHello]
console.log(strMessage);//undefined
console.log(sayHi);//undefined
// 函数表达式：函数的定义可以放在函数调用之后。
strMessage = 'Hello, Freshman!'
sayHi = function () {
  return 'Hi, JavaScript';
}
```

创建阶段:提升(Hoisting)是一种 JavaScript 解释器的行为，就是将所有变量声明和函数声明移到当前作用域的顶部，不管它们是在哪里定义的。

- 函数提升：使用函数声明定义的函数被自动提升，也就是说它们可以在它们被定义的位置之前被调用。

- 变量提升：使用var关键字的变量声明自动移到当前作用域的顶部。变量赋值不提升。

  ```javascript
  function foo() {
      console.log(a);//undefined
      var a = 1
      console.log(a);//1
  }
  foo();
  
  function foo(){
      var a;
      console.log(a)
      a = 1;
      console.log(a)
  }
  foo();
  
  function foo() {
      console.log(a);//暂时性死区
      let a = 1;
      console.log(a);
  }
  foo();//引用错误，a未初始化。
  ```

  如果函数表达式是用 var 声明的，那么声明会被提升，不过实际的函数是不会提升的！

  ```javascript
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
  
  // 全局对象方法
  function foo() {
      console.log('hi');
  }
  global.foo();
  ```

总结：

- 在执行代码之前，将函数和变量存储在内存中以用于执行上下文。这称为变量提升（hoisting）。
- 函数被存储为一个对整个函数的引用，用var关键字声明的变量的值为undefined，而用let和const关键字声明的变量未被初始化。

### PATR 4：作用域与作用域链

指变量可见性 、可访问性。变量的作用域是该变量可以被访问的程序区域。

#### 作用域

是通过词法环境实现的。由两个组件组成

- 环境记录：把变量名映射到变量值。这里是 JS 存储变量的地方。在环境记录中的一个键值条目就称为绑定（binding）。
- 对外层环境的引用。

类型

- 全局作用域。
- 函数作用域。
- 块作用域。

#### 词法作用域

作用域是在词法分析时（编译时）而不是运行时确定的。与之对应的是动态作用域。

```javascript
const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
  const name = "Sarah";
  const age = 22;
  return `${name} is ${age} and lives in ${city}`;
}
console.log(getPersonInfo());
```

#### 块作用域

```javascript
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
```

可以把作用域链看作是对我们可以在当前执行上下文中可以访问的值的一个引用链。

### PATR 5：this值的确定

全局作用域下，this 永远是全局对象。

函数中：根据函数调用的形式来确定。

- 函数调用模式：this 为全局对象
- 方法调用模式：点运算符前面的那个对象
- 构造函数模式：new foo()  返回的对象
- Apply 模式： foo.call(thisObject)、foo.apply(thisObject)： 第一个参数就是this。如果thisObject是null或undefined，那么会变成Global对象。

箭头函数不提供自身的 this 绑定（this 的值将保持为外层词法上下文的值）。

```javascript
function foo(p1,p2) {
    console.log(p1+p2);
    console.log(this);
}

foo(1,2);//函数调用形式
foo.call(null, 1,2);
```

