# Day04 函数

### 目录

- ##### 函数的定义和调用

- ##### 函数参数

- ##### 箭头函数

- ##### 回调

### 函数 有助于降低代码重复，让代码更容易读懂。

#### 定义函数：

- 函数声明

  ​     关键字     函数名      {函数体}

  ```javascript
  // 声明函数 函数字面量
  function hello() {
      console.log('Hello, function!');//控制台输出
  }
  // 直接调用
  hello();
  console.log(hello);//[Function: hello] 引用函数名
  
  // 字面量
  let a = "xiao", b = 'xiao1', c = `adadas`;//字符串字面量
  const oArray = [];//数组字面量
  const oObject = {};//对象字面量
  const oReg = \abc\;//正则表达式字面量,校验用户输入信息的格式
  ```

- 函数表达式

  ```javascript
  // 匿名函数
  const hello = function() {//函数赋值给变量
      console.log('hello, javascript!');
  };
  hello();
  
  // 命名函数
  const hello = function sayHello(){
      console.log('hello.js6');
  };
  hello();
  
  console.log(typeof hello);// function
  ```

- Function()构造器

  ```javascript
  const hello = new Function("console.log('hello,javascript!')");
  ```

- 箭头函数(ES6新增语法)

  ```javascript
  const hello = () => {
      console.log('hello,js');
  };
  ```

#### 返回值：所有函数都有返回值，函数赋值给一个变量。

- 显式指定，返回值用return语句。
- 没有显式指定，返回undefined。

```javascript
// 如果没有return,或者return后面为空，函数的返回值就为undefined。
let sayHello = function() {
    return;
};
console.log(sayHello());//undefined

let sayHello2 = function() {
    let a = 1;
    return a;
};
console.log(sayHello2());
```

### 参数

- 形式参数(形参，parameter):函数定义时提供的参数。
- 实际参数(实参，argument):函数调用时提供的参数。

```javascript
// 如果调用的时候不提供实际参数，那么形参就会被赋值为undefined
let add = function(a,b) {
    return a+b;
};
console.log(add());//NaN

const add = function(a,b){
    return a+b;
}
console.log(add(1,2,3,4,5));
```

#### **Arguments**:

- 函数被调用时，所有**实参**都会被收集到这个变量中。
- Arguments.length确定传进来多少个实参。
- 函数是用箭头函数定义的，函数内部是不能访问 Arguments 的。

```javascript
// arguments是对象，不是数组
const add1 = function(){
    if (arguments.length == 0){
        return 0;
    } else if (arguments.length == 1){
        return arguments[0];
    } else if (arguments.length == 2){
        return arguments[0] + arguments[1];
    }
};
console.log(add1(5,9));

const add3 = function(){
    let sum = 0;
    console.log(typeof arguments)
    console.log(arguments instanceof Array)//false
    for (const num of arguments){
        sum = num + sum;
    }
    return sum;
}
b = add3(1,2);
console.log(b);
```

#### **扩展运算符:**

```javascript
// ...数组
const add2 = function(...numbers){
    let sum = 0;
    console.log(typeof numbers)
    console.log(numbers instanceof Array)//true
    for (const num of numbers){//声明number里的每个元素
        sum = num + sum;
    }
    return sum;
}
a = add2(1,2,2,3,3,4,4,5);
console.log(a);
```

#### **默认参数:**ES6 新增语法

默认形参应该总是出现在非默认形参之后，否则默认值就必须总是要输入。

```javascript
const myName = function(b,a = 'li'){//定义时赋初值
    return b + a;//+在字符串之间是连接作用
}
console.log(myName('hello'));
```

### 箭头函数:ES6新增语法 定义简洁

```javascript
const sayHello = () => {
    return 'hello,JavaScript';
}
console.log(sayHello());
```

#### 定义箭头函数：

- 如果只有一个参数，可以不用括号。
- 只有没有参数，或者有多个参数，需要用括号。

```javascript
const sayHello1 = () => 'hello,JavaScript';//一条语句{}return可以省略
console.log(sayHello1());

const sayHello2 = a => {
    return 'hello' + a;
}

const sayHello3 = (a,b) => {
    return a + b;
}
console.log(sayHello3());//调用

const sayHello4 = (a,b) => a + b;
console.log(sayHello4());
```

**函数体**：函数体也可以不用大括号，但这样会改变函数的行为。

- 只能有一行代码。
- 省略大括号会隐式返回这行代码的值。
- 如果return是唯一的语句，可以省略return。

**箭头函数**：

- 箭头函数不能使用arguments、super和new.target，也不能用作构造函数。此外，箭头函数也没有prototype属性。

- this对象。


### 回调(callback)

JavaScript中的函数可以像其它数据类型一样使用，一个函数也可以作为另一个函数的形参给出。

```javascript
// 用命名函数作为回调
function dance(){//定义函数dance()
    console.log('我在跳舞！');
};
const dance = () => {
    console.log('我在跳舞！');
};

function sing(song,callback){
    console.log('我在唱'+ song);
    if ((typeof callback) == 'function'){
        callback();
    }
};
const sing = (song, callback) => {
    console.log('我在唱' + song);
    if ((typeof callback) == 'function') {
        callback();
    }
};
sing('国歌',dance);//dance()作为实参传入sing()函数
//我在唱国歌 我在跳舞！

// 用箭头函数作为回调
const sing = (song, callback) => {
    console.log('我在唱' + song);
    callback();//显式调用
};

sing('生日快快乐歌', () => {console.log('我在跳舞！')});//我在唱生日快快乐歌 我在跳舞！
```

**应用:**

#### 1.数组排序 Array.sort()

```javascript
const a1 = [1,3,2,10,22,8];
const a2 = a1.sort();//没有参数，字母表排序后赋值给另一个数组
console.log(a2);//[ 1, 10, 2, 22, 3, 8 ]


//定义函数
const num = (a,b) => a-b;//回调函数:用于说明这两个值的相对顺序的数字
const a3 = a1.sort(num);
console.log(a3);//[ 1, 2, 3, 8, 10, 22 ]
//若a小于b，在排序后的数组中a应该出现在b之前，则返回一个小于0的值。
//若a等于b，则返回0。
//若a大于b，则返回一个大于0的值。
```

#### 2.数组迭代

-  forEach()函数

  作用：对数组中的每个元素执行一次给定的函数。

  语法：arr.forEach(callback(currentValue [, index [, array]])[, thisArg])。

  ```javascript
  const oArray1 = [1,2,2,4];
  for (let i = 0; i < oArray1.length; i++) {//数组中每个元素遍历输出
      console.log(oArray[i]);
  }
  
  const oArray2 = [1,2,2,4];
  for (const i of oArray2) {
      console.log(i);
  }
  
  const oArray3 = [1,2,2,4];
  oArray3.forEach((arr1) => {console.log(arr1)});//函数式编程
  ```

- map()函数

  作用：创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
  语法：const new_array = arr.map(function callback(currentValue[, index[, array]]) { // Return element for new_array }[, thisArg])。

  ```javascript
  const oArray4 = [1,2,2,4];
  const sum = (a) => a * a;
  const oArray5 = oArray4.map(sum);//把一个数组的元素映射到另一个数组
  console.log(oArray5);
  ```

- reduce()函数:统计

  作用：对数组中的每个元素执行一个提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
  语法：arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])。

  ```javascript
  const oArray1 = [1,2,3,4,5].reduce((acc,val) => acc + val);//累加求和
  console.log(oArray1);
  
  const oArray1 = [1,2,3,4,5]
  //回调函数
  const oArray2 = oArray1.reduce(
      (acc,curVal) => acc + curVal
  )
  console.log(oArray2);
  
  const oArray3 = [1,2,3,4,5].reduce((acc,val) => acc + val, 10);//初始值
  console.log(oArray3);
  
  //统计字符
  const sentence = 'The quick brown fox jumped over the lazy dog';
  const words = sentence.split(" ");
  console.log(words);
  const total = words.reduce((acc, word) => acc + word.length, 0);
  console.log(total);
  ```

- filter()函数:过滤

  作用：创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
  语法： var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])。

  ```javascript
  const a1 = [1,2,3,12,8];
  const a2 = a1.filter((x) => x%2===0);//取余 偶数 回调
  console.log(a2);
  console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ));//链式迭代器
  ```

  #### 链式迭代器

  所有迭代器函数都返回一个数组，这就意味着可以把另一个迭代器函数链在末尾，并将其应用到新数组上。