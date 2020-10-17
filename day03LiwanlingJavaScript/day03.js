/*
基本类型：
String	Boolean	Number	Null	Undefined	Symbol	Bigint
引用类型：
Object：存储属性和属性值	Function

数组(Array):有序的值的列表。
集合(Set):唯一值的集合。
(WeakSet):特殊Set。
(Map):键值对。
(WeakMap):特殊Map。
*/

/*
对象:存储属性和属性值。
定义对象:
    Object构造器:尽量不使用这种方法。
    对象字面量。
*/
// Object构造器

//声明对象
let person = new Object();
//构造器方式定义属性
person.name = 'liwanling';
person.age = 18;
//引用
console.log(person.name)

// 对象字面量

let person1 = {};
//赋值,设置属性
person1.name = 'liwanling';
person1.age = 18;
console.log(person1.name);

let person2 = {};
//赋值
let person2 = {
    name:'liwanling',
    age:18,
    //可以加行为
    getUserName:function(){
    }
};
console.log(person2.name);
console.log(typeof person2);//Object

//模板字符串，可换行
let s = `
    <div>
        <h1>dasda</h1>
    </div>
`;
//字符串常量
let a = '';

/*
数组:有序的值的列表。
(与其他编程语言相比)区别：
    数组的每个槽位可以存储任意类型的数据。
    动态大小——影响性能。
*/
// 定义数组:(声明)
//数组构造器
const oArray = new Array();
//数组字面量
const oArray = [];
console.log(typeof oArray); //Object

// 数组初始化
const heroes = [];//未赋值
console.log(heroes[0]);//Undefined

const heroes = [];
heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
heroes[2] = '闪电侠';
heroes[5] = '水行侠';//表示六个元素，其他元素为Undefined
console.log(heroes);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
console.log(avengers);

//删除数组元素:元素个数没变
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
delete avengers[0];
console.log(avengers);

//数组里可以是任意元素类型
let person2 = {
    name:'liwanling',
    age:18,
};
const a = [0,undefined,'123112',null,person2];
console.log(a);

// 解构数组：将数组中的元素取出来赋值给变量。
const array1 = [1,2,3];
let a = array1[0];
let b = array1[1];
let c = array1[2];

const [a,b,c] = [1,2,3];
console.log(`a=${a},b=${b},c=${c}`);

const [a,b] = [1,2,3];//两个变量a，b
console.log(a);

// 数组的属性和方法
//1.length属性：数组的长度。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
console.log(avengers.length);

//通过设置length属性改变数组元素(不可逆转的改变，无副本)
avengers.length = 1;
console.log(avengers);//[ '美国队长' ]
avengers.length = 5;
console.log(avengers);//<1 empty item> Undefined

//不改变数组元素：将length设为只读属性get。

//2.pop()方法：删掉数组中最后一个元素。
//声明数组
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
//数组维数缩小
console.log(avengers.pop());
console.log(avengers);

//delete运算符:元素个数没变，删掉元素变为Undefined
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
delete avengers[0];
console.log(avengers);
//pop()方法和delete运算符的区别:pop数组元素个数减少，delete运算符元素个数没变。

//3.push()方法：将新值添加到数组的末尾。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
avengers.push('蝙蝠侠');
console.log(avengers);

//4.shift()方法：删除数组中的第一个元素。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
avengers.shift();
console.log(avengers);//[ '钢铁侠', '雷神', '绿巨人' ]
console.log(avengers.shift());//输出删除元素 钢铁侠

//5.unshift()方法：将新值添加到数组的开头。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
avengers.unshift('小超人');
console.log(avengers);
console.log(avengers.unshift());

//6.concat()方法：数组合并。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠','水行侠'];
const oArray = avengers.concat(heroes);//赋值给变量，变量是新生成的数组。
console.log(avengers);
console.log(oArray);//新建数组，进行合并。

//扩展运算符:ES6新增。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠','水行侠'];
const oArray = [...avengers,...heroes];//元素扁平化
console.log(oArray);

//7.join()方法：数组变成组合了数组所有元素的字符串。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const a = avengers.join(`&`);//变量
console.log(a);

//8.slice()方法：从原始数组中切掉一片，从而创建一个子数组。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const b = avengers.slice(2,3); //从第二个元素开始到第三个元素结束(不包含)
console.log(b);//[ '雷神' ]
console.log(avengers);

//9.splice()方法：从一个数组中删除元素，然后将新元素插入在被删除的元素的位置上。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const c = avengers.splice(2,2,['liwanling','li']);//加入数组
const cc = avengers.splice(2,2,'liwanling','li');//从第二个元素开始，删除两个元素，加入字符串
const ccc = avengers.splice(2,2,'liwanling','li','wang');//[ '美国队长', '钢铁侠', 'liwanling', 'li', 'wang' ]
console.log(c);//[ [ 'liwanling', 'li' ] ]
console.log(cc);//返回切掉的两个元素 [ '雷神', '绿巨人' ]
console.log(ccc);
console.log(avengers);

//10.reverse()方法：反转数组中元素的次序（永久性改变）。
const d = ['a','b','c','d'];
const e = d.reverse();//赋值给变量
console.log(e,d);//[ 'd', 'c', 'b', 'a' ] [ 'd', 'c', 'b', 'a' ]

//11.sort()方法：对数组中的元素按字母顺序进行排序（永久性改变）。
const f = [1,2,10,1,2];//ASCII排列
const g = f.sort();
console.log(g,f);//[ 1, 1, 10, 2, 2 ] [ 1, 1, 10, 2, 2 ]

//12.indexOf()：检测数组中是否包含一个特定值，如果找到了，就返回该值在数组中第一次出现的索引号，否则，就返回-1。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const a1 = avengers.indexOf('美国队长1');
console.log(a1);//0

//13.includes()：检测数组中是否包含特定值，如果找到了，就返回true，否则就返回false。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const a2 = avengers.includes('美国队长2');
console.log(a2);//false

/*
多维数组：
作用：坐标系统(二维数组)以及复杂算法。
*/
const ma = [[1,2],[3,4]];
console.log(ma[0][0]);//访问元素

const summer = ['Jun','Jul','Aug'];
const winter = ['Dec','Jan','Feb'];
const nested = [summer,winter];
console.log(nested);//[ [ 'Jun', 'Jul', 'Aug' ], [ 'Dec', 'Jan', 'Feb' ] ]
//扩展运算符扁平化为字符串
const summer = ['Jun','Jul','Aug'];
const winter = ['Dec','Jan','Feb'];
const flat = [...summer,...winter];
console.log(flat);//[ 'Jun', 'Jul', 'Aug', 'Dec', 'Jan', 'Feb' ]

//数组去重：(Set和数组的转换)
const a = [1,2,12,1,2,3,4,5];//循环读取一个一个判断
const b = new Set(a);
console.log(b);//Set { 1, 2, 12, 3, 4, 5 }
const c = [...b];//集合变数组
console.log(c);

/*集合:唯一值的集合。
定义集合:
    构造函数，无字面量。
*/
//数字
const list = new Set();
list.add(1);
list.add(2).add(3).add(4).add(5);//链式存储
list.add(5);//不能有重复值，直接忽略。
console.log(list);

//初始化时用数组
const list = new Set([1,2,3,4,5]);
console.log(list);

//字符
const c = new Set('Hello');
console.log(c);

//链式操作，返回的一定是创建的本身
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4);

//属性和方法:
//1.size属性：获取集合中值的数目。（只读属性）
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
list4.size = 3;
console.log(list4);

//2.has()方法：用于检测一个值是否在集合中，返回true或者false。
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.has('brown'));

//3.delete()方法：从集合中删除一个值。
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
list4.delete('the');
console.log(list4);

//4.clear()方法：删掉集合中的所有值。
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
list4.clear();
console.log(list4);

//5.Set和数组的转换：数组去重也用到了。
//扩展运算符    Array.from() 方法
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const oArray = [...list4]; //集合转数组
console.log(oArray);

//数组方法
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const oArray = Array.from(list4);
console.log(oArray);

// WeakSet弱集合
//当对象添加到Set中时，只要Set存在，它们就会一直存储在Set中，即使对对象的原始引用被删除了依然如此。用技术术语来说，就是对象阻止被垃圾回收，而这会导致内存泄漏。
//WeakSet 通过垃圾回收任何引用原始引用已经被删掉的“死对象”，从而可以避免这种情况。
//WeakSet 只能添加非基本类型数据，否则会抛出一个类型错误（TypeError）。

// Set强集合 内存泄漏
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const strong = new Set().add(array1).add(array2); //建集合,添加数组。
console.log(strong.has(array1));
array1 = null; //删除对原始对象的引用
array2 = null; //原来数组设置为空
array3 = [...strong][0]; //1
array4 = [...strong][1];
console.log(array3);
console.log(array4);//数组还在

// WeakSet 避免内存泄漏
let array1 = [1,2,3];
let array2 = [3,4,5];
const weak = new WeakSet().add(array1).add(array2);//扁平化
console.log(weak);
array1 = null; //垃圾回收
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];
//抛出异常
console.log(array3);
console.log(array4);//类型错误，对象消失，不能引用

/*
Map 存储键值对列表
*/
//创建Map
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals);//Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }

//方法和属性:
//1.size属性：获取键和值的数量。（只读属性）
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals.size);//5

//2.get(key)：通过键获取值。
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals.get(3));//III

//3.has(key)：检测一个特定键是否在映射中。
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(romanNumerals.has(5));//true

//4.delete(key)：从映射中删除一个键值对。
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
romanNumerals.delete(5);
console.log(romanNumerals);//Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV' }

//5.clear()：从映射中删除所有键值对。
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
romanNumerals.clear();
console.log(romanNumerals);

//Map转换为数组:
//扩展运算符    Array.from()方法
//map to array
const romanNumerals = new Map();
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');// 链式
const oArray1 = [...romanNumerals];
const oArray2 = Array.from(romanNumerals);
console.log(oArray1);
console.log(oArray2);
// [ [ 1, 'I' ], [ 2, 'II' ], [ 3, 'III' ], [ 4, 'IV' ], [ 5, 'V' ] ]
// [ [ 1, 'I' ], [ 2, 'II' ], [ 3, 'III' ], [ 4, 'IV' ], [ 5, 'V' ] ]

/*
WeakMap
键不能是基本数据类型的值，并且在对原始对象的引用被删除时，垃圾回收会自动删除所有死条目。
*/
// 内存泄漏
let array5 = [1, 'I'];
let array6 = [2, 'II'];
strong1 = new Map().set(array5).set(array6); // 创建映射，添加数组。
console.log(strong1.has(array5));
array5 = null;
array6 = null;
array7 = [...strong1][0];
array8 = [...strong1][1];
console.log(array7);// [ [ 1, 'I' ], undefined ]
console.log(array8);// [ [ 2, 'II' ], undefined ]

let array9 = [1, 'I'];
let array10 = [2, 'II'];
weak1 = new WeakMap().set(array9).set(array10); // 创建映射，添加数组。
console.log(weak1.has(array9));
array9 = null;
array10 = null;
array11 = [...Weak1][0];
array12 = [...Weak1][1];
console.log(array11);
console.log(array12);

/*
总结:
1.数据类型
基础类型：String Number Boolean Symbol undefined null。
引用类型：Object/Function。
2.对象
创建对象的两种方式
*/
//构造器
let oStudent = new Object();
//对象字面量
let oStudent = {
    name: 'xaaaa',
    age: 21
};
oStudent.name   //引用属性

//Array
//1.创建数组的两种方式:
//构造器
const oArray = new Array();
//数组字面量
let person1 = {};

//2.初始化
//逐个赋值
const heroes = [];
heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
//数组字面量
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];

//3.删除数组元素
delete avengers[0];

//4.解构数组
const [a,b,c] = [1,2,3];
console.log(`a=${a},b=${b},c=${c}`);

//5.数组的属性和方法
//length属性：数组的长度。
console.log(avengers.length);
//pop()方法：删掉数组中最后一个元素。
console.log(avengers.pop());
//push()方法：将新值添加到数组的末尾。
avengers.push('蝙蝠侠');
//shift()方法：删除数组中的第一个元素。
avengers.shift();
//unshift()方法：将新值添加到数组的开头。
avengers.unshift('小超人');
//concat()方法：数组合并。
const oArray = avengers.concat(heroes);
//扩展运算符
const oArray = [...avengers,...heroes];
//join()方法：数组变成组合了数组所有元素的字符串。
const a = avengers.join(`&`);
//slice()方法：从原始数组中切掉一片，从而创建一个子数组。
const b = avengers.slice(2,3);
//splice()方法：从一个数组中删除元素，然后将新元素插入在被删除的元素的位置上。
const cc = avengers.splice(2,2,'liwanling','li');
//reverse()方法：反转数组中元素的次序（永久性改变）。
const e = d.reverse();
//sort()方法：对数组中的元素按字母顺序进行排序（永久性改变）。
const g = f.sort();
//indexOf()：检测数组中是否包含一个特定值，如果找到了，就返回该值在数组中第一次出现的索引号，否则，就返回-1。
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const a1 = avengers.indexOf('美国队长1');
console.log(a1);// 0
//includes()：检测数组中是否包含特定值，如果找到了，就返回true，否则就返回false。
const a2 = avengers.includes('美国队长2');

/*
Set：没有重复值。
创建Set：构造器
*/
let oSet = new Set();
//添加元素
oSet.add(1).add(2)
//Set的属性和方法
//1.size属性：获取集合中值的数目。
console.log(list4.size);
//2.has()方法：用于检测一个值是否在集合中，该方法会返回true或者false。
console.log(list4.has('brown'));
//3.delete()方法：从集合中删除一个值。
list4.delete('the');
//4.clear()：删掉集合中的所有值。
list4.clear();

//Set和数组的转换:扩展运算符 Array.from()方法
const oArray = [...list4]; 
const oArray = Array.from(list4);
//let oSet = new Set([1,2,3]); // 数组 迭代对象
//5.WeakSet
const weak = new WeakSet().add(array1).add(array2);
console.log(weak);
array1 = null; 
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];

/*
Map
创建Map
*/
const romanNumerals = new Map();
//方法和属性
//1.size属性：获取键和值的数量。
console.log(romanNumerals.size);
//2.get(key)：通过键获取值。
console.log(romanNumerals.get(3));
//3.has(key)：检测一个特定键是否在映射中。
console.log(romanNumerals.has(5));
//4.delete(key)：从映射中删除一个键值对。
romanNumerals.delete(5);
//5. clear()：从映射中删除所有键值对。
console.log(romanNumerals);

//Map转换为数组;扩展运算符 Array.from()方法
const oArray1 = [...romanNumerals];
const oArray2 = Array.from(romanNumerals);