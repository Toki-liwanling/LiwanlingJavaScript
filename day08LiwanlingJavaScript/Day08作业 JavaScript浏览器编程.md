# 李婉玲 Day08作业 JavaScript浏览器编程

### 作业01 事件委托创建li元素

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>事件委托创建li元素</title>
</head>
<body>
    <!-- 事件委托 -->
    <ul id="oList">
        <li>C</li>
        <li>AI</li>
        <li>Java</li>
        <li>Python</li>
    </ul>
    <input type="text" id="txtCourse" />
    <button id="btnAdd">添加</button>
    <script>
        const oList = document.querySelector('#oList');
        const txtCourse = document.querySelector("#txtCourse");
        const btnAdd = document.querySelector("#btnAdd");

        btnAdd.addEventListener('click',(event) => {
            const oElement = document.createElement('li');// 创建li节点
            const oText = document.createTextNode(txtCourse.value);// 创建文本节点
            oElement.appendChild(oText);// 为li追加文本节点
            oList.appendChild(oElement);// 将li加入ul
            txtCourse.value = "";
        });

    </script>
</body>
</html>
```

运行效果:

![事件委托创建li元素前](E:\文档文件\2018级大3上\Java WEB开发\事件委托创建li元素前.png)

![事件委托创建li元素后](E:\文档文件\2018级大3上\Java WEB开发\事件委托创建li元素后.png)

### 知识点总结（JavaScript浏览器编程）

#### DOM

##### 动态创建标记

| 方法                                 | 语法                                              |
| :----------------------------------- | :------------------------------------------------ |
| 创建元素                             | document.createElement('元素名')                  |
| 创建文本节点                         | document.createTextNode('文本节点的内容')         |
| 添加子节点                           | appendChild('要添加的子节点')，返回追加的节点对象 |
| 插入子节点                           | insertBefore(新节点，要插入到它之前的节点)        |
| 删除子节点                           | removeChild(删除的子节点)                         |
| 替换子元素                           | replaceChild(新子节点, 老子节点)                  |
| 克隆节点                             | cloneNode()——深度复制(true)、浅度复制(false)      |
| 合并相邻的文本节点并删除空的文本节点 | normalize()                                       |

**插入节点:(到父节点的子节点的位置)**

1. 最后或最开始(只适用于元素节点)

   父节点.append():在父节点的最后一个子节点之后插入一组Node对象或DOMString对象。

   父节点.prepend():在父节点ParentNode第一个后代前插入一组Node对象或者DOMString对象。

2. 中间(适用于元素节点和文本节点)

   子节点.before(要插入的节点):在子节点之前插入节点。

   子节点.after(要插入的节点):在子节点之后插入节点。

   ```javascript
   <body>
       <ul>
           <li>Java</li>
           <li>JavaScript</li>
           <li>Python</li>
       </ul>
       <script>
           const oList = document.querySelector('ul');// 通过查询选择器获取元素
           const oE = document.createElement('li');// 创建标签
           oE.append('Swift');// 添加文本
           // or
           // oE.textContent = 'Swift';//文本内容
           console.log("oList节点类型为:",oList.nodeType);// 1
           oList.append(oE);// 添加参数到父节点的子节点列表的末尾
       </script>
   </body>
   ```

   ```javascript
   <body>
       <ul>
           <li>Java</li>
           <li>JavaScript</li>
           <li>Python</li>
       </ul>
       <script>
           const oList = document.querySelector('ul');// 通过查询选择器获取元素
           const oE = document.createElement('li');// 创建标签
           oE.append('Swift');// 添加文本
   		oList.append(oE);
   		oList.prepend(oE);//插入成为第一个节点
       </script>
   </body>
   ```

   ```javascript
   <body>
       <ul>
           <li>Java</li>
           <li>JavaScript</li>
           <li>Python</li>
       </ul>
       <script>
           const oList = document.querySelector('ul');// 通过查询选择器获取元素
           const oE = document.createElement('li');// 创建标签
           oE.append('Swift');// 添加文本
   		oList.lastElementChild.before(oE);//最后一个子节点的前面一个
           oList.firstElementChild.after(oE);//第一个子节点的后面一个
       </script>
   </body>
   ```

**删除节点:**

子节点.remove()，把子节点从它所属的DOM树中删除。

```javascript
<body>
    <ul>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Python</li>
    </ul>
    <script>
        const oList = document.querySelector('ul');// 通过查询选择器获取元素
        const oE = document.createElement('li');// 创建标签
        oE.append('Swift');// 添加文本
		oList.firstElementChild.after(oE);//第一个子节点的后面一个
		oList.firstElementChild.nextElementSibling.remove();// 第一个子节点后下一个元素相邻节点
    </script>
</body>
```

**替换节点:**

子节点.replaceWith()，用一套Node对象或者DOMString对象，替换了该节点父节点下的子节点。

```javascript
<body>
    <ul>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Python</li>
    </ul>
    <script>
        const oList = document.querySelector('ul');// 通过查询选择器获取元素
        const oE = document.createElement('li');// 创建标签
		oE.append('Swift');// 添加文本
        oList.lastElementChild.replaceWith(oE);// 替换了父节点下的最后一个子节点
    </script>
</body>
```

##### 操作CSS

**操作行内样式**



**设置元素的 class 属性(最简单的方式)**

1. 先设置好class样式选择器。

2. 然后通过classList.add()、classList.remove()、classList.toggle()切换。

   ```javascript
   <!DOCTYPE html>
   <html lang="en">
   <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=1200, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <style>
              .hidden {
                  display: none;
              }
          </style>
   </head>
   <body>
   <input type="text"><i id="tooltip">请在这里输入电话号码</i>
   <script>
   	const tooltip = document.querySelector("#tooltip");// 通过查询选择器获取元素
   	tooltip.classList.add("hidden");// 加入
   	tooltip.classList.remove("hidden");// 删除
   	tooltip.classList.toggle("hidden");// 切换
   </script>
   </body>
   </html>
   ```
   
   **通过元素节点的style属性对象(行内样式)**
   
   style对象的属性与CSS规则一一对应，但是CSS属性的名字可能要改写。
   
   1. 去掉横杠，横杠后第一个字母大写。
   
   2. 如果属性名是JS保留字，属性名前面就必须加上字符串`CSS`(cssFloat)。
   
   3. 设置时必须包含单位。
   
      ```javascript
      <body>
      	<ul id="lstBooks">
      		<li>JavaScript高级程序设计</li>
      		<li>JavaScript权威指南</li>
      	</ul>
      	<script>
              const oStyle = document.querySelector("#lstBooks").style;// 设置style属性对象
      		oStyle.color = 'red';
      		oStyle.border = '1px solid black';
      	</script>
      </body>
      ```

**操作非行内样式**



**window.getComputedStyle()**:返回一个对象，包含所有计算值。

1. 获得的值是只读的绝对值。

2. 简写属性得不到。

3. cssText为undefined。

   ```javascript
   <body>
       <div id="myDiv">test</div>
       <script>
           const oDiv = document.querySelector('#myDiv');
           const styles = window.getComputedStyle(oDiv);// 返回一个对象
           console.log(styles);
           console.log(styles.backgroundColor);
           styles.backgroundColor = 'red'; // 抛出异常
       </script>
   </body>
   ```



#### 事件

##### 事件驱动编程三要素

- 事件类型:一个字符串，指定发生的事件类型。

  如:"click",  "dblclick"，"mouseover"，"mouseup",  "keydown",  "keyup"....

  

  两种类型

  浏览器事件:预定义的内置事件,浏览器自动触发。

  合成事件:程序员自定义的事件,自己定义、自己触发。

- 事件目标:这是发生事件或与事件关联的对象。

- 事件处理程序或者事件监听器:一个函数，用于处理或响应事件。

  注册事件处理程序:

  1.在目标对象上设置事件处理程序属性。

  ```javascript
  <body>
      <button id="btnTest1">click me</button>
      <script>
          // 获取事件目标
          const myButton = document.querySelector('#btnTest1');
          myButton.onclick = function() {
              console.log('onclick');
          }
          // 通过这种方式只能设置一个事件处理程序。
          myButton.onclick = function() {
              console.log('hello');
          }
          myButton.onclick = null;// 去掉绑定的事件处理程序。
      </script>
  </body>
  ```

  2.在目标HTML文档元素上设置事件处理程序属性。(不推荐使用!)

  ```javascript
  <body>
      <button id="btnTest2" onclick='console.log("test")'>click me2</button>
  </body>
  ```

  3.目标对象.addEventListener('事件类型', 事件处理程序, {})。

  ​	第一个参数:事件类型。事件类型（或名称）是一个字符串，不包括设置事件处理程序属性时使用的on前缀。

  ​	第二个参数:事件处理程序，即在发生指定类型的事件时应调用的函数(箭头函数、函数声明、函数表达式等)。

  ​	第三个参数:布尔值、对象。

  ​		布尔值:true表示在捕获阶段调用事件处理程序，false（默认值）表示在冒泡阶段调用事件处理程序。

  ​		对象:{ }
  ​			capture:设置该事件是否在捕获阶段触发监听函数（默认为false）。 
  ​			once:设置监听函数是否只触发一次，然后就自动移除（默认为false）。
  ​			passive:设置监听函数不会调用事件的preventDefault方法（默认为false）。

  ```javascript
  <body>
      <button id="btnTest1">click me</button>
      <script>
          // 获取事件目标
          const myButton = document.querySelector('#btnTest1');
  		// 事件处理程序 箭头函数
          myButton.addEventListener('click',() => {
              console.log('I am in addEventListener');
          })
      </script>
  </body>
  ```

  ```javascript
  <body>
      <button id="btnTest1">click me</button>
      <script>
          // 获取事件目标
          const myButton = document.querySelector('#btnTest1');
  		// 事件处理程序 回调函数
          const callback = () => {
              console.log('callback1');// 控制台输出
          }
          const callback2 = () => {
              console.log('callback2');
          }
          const callback3 = () => {
              console.log('callback3');
          }
          myButton.addEventListener('click',callback,false);// 同一个click事件,addEventListener可以绑定多个事件处理程序,性能会受影响。
          myButton.addEventListener('click',callback2);
          myButton.addEventListener('click',callback3);
  		myButton.removeEventListener('click',callback);// 解除事件绑定
      </script>
  </body>
  ```

  4.removeEventListener(事件类型，事件处理程序，{}):解除事件绑定

  注意:必须与addEventListener的参数完全一样,否则不起作用。

##### 事件驱动编程步骤

1. 获取事件目标。

2. 在事件目标上为指定事件类型注册事件处理程序。

3. 浏览器监听事件目标上的事件。

4. 当事件目标上发生指定类型的事件时，浏览器将调用处理程序函数。

   ```javascript
   <body>
       <!-- 点击按钮 -->
       <button>click</button>
   
       <script>
           // 为按钮添加click事件
           // 1.获取事件目标
           const oButton = document.querySelector('button');
           // 函数声明
           function callback() {
               console.log('Hello,Event');
           }
           // or
           // 函数表达式 回调函数
           const callback = function() {
               console.log('Hello,Event');
           }
           //注册事件处理程序:同一事件addEventListener可以绑定多个事件处理程序
           oButton.addEventListener('click',callback);
           oButton.addEventListener('click',()=>{
               console.log('hello,event1');
           },true)
       </script>
   </body>
   ```

##### 事件传播机制

1.事件传播:确定在哪些对象上触发事件处理程序。

2.事件流:描述了页面接收事件的顺序，分三个阶段:（先捕获，再冒泡）

- 捕获阶段:从根元素开始(Window->Document)，向下传播到触发事件的元素。
- 到达目标阶段。
- 冒泡阶段:从触发事件的元素开始，向上传播到根元素。

![事件传播机制](E:\文档文件\2018级大3上\Java WEB开发\事件传播机制.png)

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>事件传播机制</title>
    <style>
        #box {
           width: 200px;
           height: 200px;
           border: 1px solid gray; 
           background-color: silver;
        }
    </style>
</head>
<body>
    <!-- div盒子 -->
    <div id="box">box</div>
    <!-- 每个元素对象绑定事件处理程序,相当于从window对象->document文档对象->html对象->body对象->box对象(每个阶段) -->
    <script>
        // 简便方法:Event对象 函数
        // const callback = function(event){
        // }
        const oBox = document.querySelector('#box');// 查询字符串
        // 事件监听器默认对象第一个参数是Event对象,Event对象事件发生时的一种快照。
        window.addEventListener('click',(e) => {
            console.log('==> window 捕获阶段');
        },true)// 第三个参数默认是false,true表示在捕获阶段调用事件处理程序
        document.addEventListener('click',() => {
            console.log('==> document 捕获阶段');
        },true)
        // html捕获阶段:获取html节点
        document.documentElement.addEventListener('click',() => {
            console.log('==> html 捕获阶段');
        },true)
        document.body.addEventListener('click',() => {
            console.log('==> body 捕获阶段');
        },true)
        // 目标节点:浏览器处理方式不一样,一般是捕获不了的。
        oBox.addEventListener('click',() => {
            console.log('==> box 捕获阶段')
        },true)

        // false（默认值）表示在冒泡阶段调用事件处理程序
        window.addEventListener('click',() => {
            console.log('==> window 冒泡阶段');
        },false)
        document.addEventListener('click',() => {
            console.log('==> document 冒泡阶段')
        },false)
        document.documentElement.addEventListener('click',() => {
            console.log('==> html 冒泡阶段')
        },false)
        document.body.addEventListener('click',() => {
            console.log('==> body 冒泡阶段')
        },false)
        // 目标元素的上一个子元素截止
        oBox.addEventListener('click',() => {
            console.log('==> box 冒泡阶段')
        },false)
    </script>
</body>
</html>
```

#### Event对象

- 事件发生时的一个快照：所有相关信息(环境等)都被收集到 Event 对象中。
- 只有事件发生时，该对象才会存在；事件不发生时，该对象不存在。
- 作为事件处理程序的一个参数，隐式传递。

```javascript
<body>
    <div>my div</div>
    <script>
        const myDiv = document.querySelector('div');
        // 事件处理函数里(默认对象)第一个参数是Event对象,Event对象事件发生时的一种快照(瞬间状态),是隐式的(可以不传任何参数)。
        myDiv.addEventListener('click',(event) => {//event代表事件对象,事件对象是鼠标点击事件(mouseevent)
            console.log(`${event.type}`);// 控制台输出事件类型click
        })
    </script>
</body>
```

##### Event对象创建自定义事件(合成事件)

Event对象本身就是一个**构造函数**，可以用来生成新的实例。

```javascript
event = new Event(type, options); 
```

- 第一个参数type是字符串，表示事件的名称；
- 第二个参数options是一个对象，表示事件对象的配置。该对象主要有下面两个属性:
  - bubbles：布尔值，可选，默认为false，表示事件对象是否冒泡（默认是不冒泡！）。
  - cancelable：布尔值，可选，默认为false，表示事件是否可以被取消，即能否用Event.preventDefault()取消这个事件。一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。

**步骤**

1. 创建自定义事件：自定义事件对象 = new Event('自定义事件类型字符串', options)。
2. 绑定到目标：事件目标.addEventListener('自定义事件类型的字符串', 事件程序程序，options)。
3. 分派事件：事件目标.dispatchEvent(自定义事件对象)。

```javascript
<body>
    <div>my div</div>
    <script>
        const myDiv = document.querySelector('div');
        //对象本身是一个构造函数,可以自定义事件。
        //                           事件名字,事件对象(bubbles:是否冒泡(往复传递),cancelable:是否可取消。)
        const helloEvent = new Event('hello',{bubbles:true,cancelable:false});// 1.创建事件:事件类型hello
        myDiv.addEventListener('hello',() => {// 2.目标添加监听器,不同事件对象进行操作可以不传任何参数也能执行代码
            myDiv.style.backgroundColor = "blue";// 事件发生改变背景颜色
            console.log(event.isTrusted);
        })
        myDiv.dispatchEvent(helloEvent);//3.目标没办法自动触发,只有手动触发事件,触发用创建的对象。
    </script>
</body>
```

##### Event对象的属性

```javascript
<body>
    <button>click me</button>
    <script>
        const oButton = document.querySelector('button');
        oButton.addEventListener('click',(event) => {// 为按钮添加事件监听器
            // for循环:of是遍历迭代器,in遍历所有属性。
            for(let prop in event) {// 遍历Event对象属性
                console.log(prop);
            }
        })
    </script>
</body>
```

![event对象属性](E:\文档文件\2018级大3上\Java WEB开发\event对象属性.png)

1. 坐标系统相关(六套)——浏览器不支持，兼容性问题。

   | 属性             | 描述                                 |
   | ---------------- | ------------------------------------ |
   | clientX与clientY | More Actions相对于视口左上角的坐标。 |
   | screenX与screenY | 相对于用于屏幕左上角的坐标。         |
   | pageX与pageY     | 相对于页面左上角的坐标(body)。       |
   | offsetX与offsetY | 相对于事件目标左上角的坐标。         |
   | x与y             | 相对于父元素左上角的坐标。           |
   | layerX与layerY   | 相对于定位父元素左上角的坐标。       |

   ![event坐标](E:\文档文件\2018级大3上\Java WEB开发\event坐标.png)

   ```javascript
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Document</title>
       <style>
           #box1 {
               width: 200px;
               height: 200px;
               background: lightblue;
               padding: 20px;
           }
           #box2 {
               width: 100px;
               height: 100px;
               background: lightcoral;
               padding: 5px;
           }
       </style>
   </head>
   <body>
       <!-- div嵌套div -->
       <div id="box1">
           <div id="box2"></div>
       </div>
       <script>
           // const box1 = document.querySelector('#box1');
           const box = document.querySelector('#box2');
           box.addEventListener('click',(event) => {// 绑定事件处理程序
               console.clear();// 清理控制台内容
               console.log(`clientX=${event.clientX},clientY=${event.clientY}`);// 有变量,用模板字符串。
               console.log(`screenX=${event.screenX},screenY=${event.screenY}`);
               console.log(`pageX=${event.pageX},pageY=${event.pageY}`);
               console.log(`offsetX=${event.offsetX},offsetY=${event.offsetY}`);
               console.log(`x=${event.x},y=${event.y}`);
               console.log(`layerX=${event.layerX},layerY=${event.layerY}`);
           },true)
       </script>
   </body>
   </html>
   ```

2. 事件类型、事件目标相关属性

   | 属性          | 描述                                                         |
   | ------------- | ------------------------------------------------------------ |
   | currentTarget | 当前事件处理程序所在的元素。                                 |
   | target        | 事件目标。                                                   |
   | type          | 事件类型。                                                   |
   | isTrusted     | true表示事件是由浏览器生成的。false表示事件是开发者通过JavaScript创建的（DOM3 Events中新增）。 |

   ```javascript
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Document</title>
       <style>
           #box1 {
               width: 200px;
               height: 200px;
               background: lightblue;
               padding: 20px;
           }
           #box2 {
               width: 100px;
               height: 100px;
               background: lightcoral;
               padding: 5px;
           }
       </style>
   </head>
   <body>
       <!-- div嵌套div -->
       <div id="box1">
           <div id="box2"></div>
       </div>
       <script>
           const box = document.querySelector('#box2');
           box.addEventListener('click',(event) => {// 绑定事件处理程序
               console.clear();// 清理控制台内容
               console.log(`event.type=${event.type}`);// 事件类型click
               console.log(`event.target=${event.target}`);// 事件目标html对象div元素
               console.log(`event.currentTarget=${event.currentTarget}`);// 当前目标div元素
           },true)
       </script>
   </body>
   </html>
   
   <body>
       <div>my div</div>
       <script>
           const myDiv = document.querySelector('div');
           const helloEvent = new Event('hello',{bubbles:true,cancelable:false});
           myDiv.addEventListener('hello',() => {
               myDiv.style.backgroundColor = "red";
               console.log(event.isTrusted);
           })
           myDiv.dispatchEvent(helloEvent);// true表示事件是由浏览器生成的。false表示事件是自己创建的。
       </script>
   </body>
   ```

   ```javascript
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Document</title>
       <style>
           #box1 {
               width: 200px;
               height: 200px;
               background: lightblue;
               padding: 20px;
           }
           #box2 {
               width: 100px;
               height: 100px;
               background: lightcoral;
               padding: 5px;
           }
       </style>
   </head>
   <body>
       <div id="box1">
           <div id="box2"></div>
       </div>
       <script>
           const box = document.querySelector('#box2');
           const callback = function(event) {
               switch (event.type){// 判断事件类型
                   case "mouseover":// 什么数据类型都可以
                       event.target.style.backgroundColor = "yellow";// 事件目标
                       break;
                   case "mouseout": 
                       event.target.style.backgroundColor = "grey";
                       break;
               }
           }
           box.addEventListener('mouseover',callback);
           box.addEventListener('mouseout',callback);
       </script>
   </body>
   </html>
   ```

3. 事件传播相关属性

   | 属性             | 描述                                                         |
   | ---------------- | ------------------------------------------------------------ |
   | bubbles          | 用来表示该事件是否会在 DOM 中冒泡。                          |
   | cancelBubble     | 在事件处理器函数返回之前，将此属性的值设置为 true，也可以可阻止事件继续冒泡。 |
   | cancelable       | 表示事件是否可以取消。                                       |
   | defaultPrevented | 表示 event.preventDefault() 方法是否取消了事件的默认行为。   |
   | eventPhase       | 表示事件流正被处理到了哪个阶段：1代表捕获阶段，2代表到达目标，3代表冒泡阶段。 |

   ```javascript
   <body>
       <div>
           <p>这是一个段落</p>
       </div>
       <script>
           const oDiv = document.querySelector('div');
           const oPara = document.querySelector('p');
           const oPhase = {// 对象字面量
               1:'捕获阶段',
               2:'目标阶段',
               3:'冒泡阶段'
           }
           // 回调:事件当前的标记和事件当前的传播阶段
           const callback = (event) => {
               console.log(`元素:${event.currentTarget.tagname},传播阶段:${oPhase[event.eventPhase]}`);
           }
           oDiv.addEventListener('click',callback,true);// 用callback处理事件。
           oPara.addEventListener('click',callback,true);
           oDiv.addEventListener('click',callback,false);
           oPara.addEventListener('click',callback,false);
       </script>
   </body>
   ```

##### Event对象的方法—阻止事件的默认行为

preventDefault()：用于阻止特定事件的默认动作，相当于在事件处理程序中：return false;

常见用法：表单校验中，如果表单字段校验失败，就阻止表单的提交。

```javascript
<body>
    <a id="link" href="http://www.microsoft.com">Microsoft HomePage</a>
    <input type="text">
    <script>
        const oLink = document.querySelector('#link');
        oLink.addEventListener('click',(event) => {
            if (event.cancelable) {
                event.preventDefault();//老方法return false
            }
            console.log(event.defaultPrevented);// 控制台输出
            console.log('hello,link');
        })

        const oText = document.querySelector('input')
        oText.addEventListener('keypress',(event) => {
            if (event.charCode < 97 || event.charCode > 122){
                event.preventDefault();
            }
        })
    </script>
</body>
```

stopPropagation()：用于取消所有后续事件捕获或事件冒泡。
stopImmediatePropagation()：用于取消所有后续事件捕获或事件冒泡，并阻止调用任何后续事件处理程序，适用于绑定了多个事件处理程序。











