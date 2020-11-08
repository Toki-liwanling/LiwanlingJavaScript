# Day06 JavaScript核心语法

- DOM
- 事件

### JavaScript的三种引入方式

1. 在<head></head>标签内。

   ```javascript
   <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <script>
           alert('hello');
       </script>
   </head>
   ```

2. 引用外部JavaScript文件，在<head></head>或<body></body>标签。

   ```javascript
   <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <script src="day06.js"></script>
   </head>
   
   //day06.js
   console.log('hello')//控制台输出
   ```

3. 在<body></body>标签内。

   ```javascript
   <body>
   	<script>
   		console.log('run js in inline script')
   	</script>
   	//事件属性:元素的某一个属性中编写JavaScript程序或调用
   	<div onclick="console.log('hi')">
           <p>test</p>
       </div>
   </body>
   ```

### DOM

#### DOM基础

DOM(Document Object Model)，译为文档对象模型，是W3C（万维网联盟）的标准，定义了访问HTML和XML文档的标准。

> W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。

![1](E:\文档文件\2018级大3上\Java WEB开发\1.png)

#### DOM节点

根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

**DOM节点类型说明**

| 节点类型         | 说明                           |
| ---------------- | ------------------------------ |
| Document         | 表示整个文档，DOM树的根节点。  |
| DocumentFragment | 表示文档碎片，仅包含部分文档。 |
| DocumentType     | 为文档定义的实体提供接口。     |
| Element          | 表示元素。                     |
| Attr             | 表示属性。                     |
| Text             | 表示元素或属性的文本内容。     |
| Comment          | 表示注释。                     |

使用nodeType属性可以判断一个节点的类型，数值说明如表。

**nodeType属性返回值说明**

| 节点类型 | nodeType属性返回值 |
| -------- | :----------------: |
| Element  |         1          |
| Text     |         3          |
| Document |         9          |

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    // 判断Div元素是什么类型
	<div id="test">
        <p>test</p>
    </div>
	<script>
        const oDiv = document.querySelector('#test')//通过document下的querySelector方法得到节点
        console.log(oDiv.nodeType)  //元素节点类型:1
        console.log(oDiv.nodeName)  //元素节点名称:DIV
        console.log(oDiv.nodeValue) //元素节点的值:null
    </script>
</body>
</html>
```

**DOM属性**

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
	<div id="test">
        <p>test</p>
	</div>
	<script>
        //子节点对象属性
        const oChild = oDiv.firstChild;
		console.log(oChild.nodeType);//浏览器可能会把空格当成子节点,类型为3，改为<div id="test"><p>test</p></div>
    </script>
</body>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
	<div id="test"><p>test</p></div>
	<script>
        //最新方式:子元素节点类型
        const oChild1 = oDiv.firstElementChild;
        console.log(oChild1.nodeType)
    </script>
</body>
</html>
```

**访问节点**

DOM为Node类型定义如下属性，以方便JavaScript访问节点。

- parentNode:返回当前节点的父节点。

- childNodes:某个节点的所有的节点。
- children:返回一个节点的所有元素节点。
- firstChild:返回当前节点的第一个子节点。
- lastChild:返回当前节点的最后一个子节点。

缺点：效率慢。



文档节点

- 使用**document.body**可以访问body元素。
- 使用document.images可以访问image对象。
- 使用document.anchors返回所有设置name属性的<a>标签。
- 使用document.forms返回所有forms对象。

元素节点

- 通过id获取元素。

- 通过标记名获取元素。

- 通过类名获取元素。

- 通过选择器selector的方式获取元素。

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=1200, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  	<style>
          //伪类选择器
          #lstCourse :last-child{
              color: red;
          }
      </style>
  </head>
  <body>
      <ul id="lstCourse">//列表id属性
          <li class="course">Java</li>
          <li class="course">JavaScript</li>
          <li class="course">Python</li>
          <li class="course">C</li>
      </ul>
  	<script>
          //通过id号快速定位唯一的元素   
          const oList = document.getElementById('lstCourse');//id号唯一
          console.log(oList.nodeName);//节点未找到就返回null 节点名称
  
  		//通过标记名获取元素，动态节点
          const oElements = document.getElementsByTagName('li');
          console.log(oElements.length);
  
  		//通过类名获取元素
          const oLis = document.getElementsByClassName('course');//节点列表
          console.log(oLis.length);
  
  		//通过选择器selector的方式获取元素,比以上方法更精确。
  		//文档中匹配作为实参提供的CSS选择器的第一个元素。
          const oLastLi = document.querySelector('#lstCourse :last-child');//CSS找最后一个元素
          console.log(oLastLi.innerHTML);//静态节点内容
  		
          const oAllLi = document.querySelectorAll('.course');
          console.log(oAllLi.length);
      </script>
  </body>
  </html>
  ```

设置元素属性

- getAttribute()返回指定的属性值。
- setAttribute()把指定属性设置或修改为指定的值。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
	//设置style属性
    <style>
        #box1{
            width: 100px;
            height: 100px;
            border: 1px solid  salmon;
        }
        #box2{
            width: 100px;
            height: 100px;
            border: 1px dotted  black;
        }
    </style>
</head>
<body>
    <div id="box1">
        
    </div>
    <script>
        //获取盒子
        const oBox = document.querySelector("#box1")
		//获取元素属性
        console.log(oBox.getAttribute('id'))
		//设置元素属性
        oBox.setAttribute('id','box2')
        //oBox.style.backgroundColor = 'salmon'
    </script>
</body>
</html>
```

创建元素

- createElement()方法能够根据参数指定的标签名称创建一个新的元素，并返回新建元素的引用。
- createTextNode()方法可创建文本节点。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    //创建元素，设置id
    <ul id="lstLanguage">
        <li>JavaScript</li>
        <li>Java</li>
        <li>Python</li>
        <li>AI</li>
    </ul>
    <script>
        // 创建一个文档片段
        const oFrag = document.createDocumentFragment()
        // 创建一个UL元素节点
        const oList = document.createElement('ul')
        // 设值id
        oList.setAttribute("id","lstLanguage")
        // 把UL元素节点添加成为body元素的子节点
        oFrag.appendChild(oList)
        //oList.innerHTML = ""
        // 创建一个li元素节点
        const oItem = document.createElement('li')
        oList.appendChild(oItem)
		// 创建文本节点
        const oText = document.createTextNode('JavaScript')
        oItem.appendChild(oText)
		// 提升性能
        document.body.appendChild(oFrag)
    </script>
</body>
</html>
```

设置CSS

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    //设置id选择器
    <ul id="lstLanguage">
        <li>Java</li>
        <li>Python</li>
        <li>Kolin</li>
        <li>JavaScript</li>
    </ul>
    <button id="btnClick">转换</button>
    <script>
        // 用变量获取ul元素
        const oList = document.querySelector('#lstLanguage')
		// 设置ul属性
        oList.setAttribute('style','border:1px solid grey')
		// 不用可以remove删除掉,不起作用,隐藏
        oList.removeAttribute('style')
        const oButton = document.querySelector('#btnClick')
        // 函数
        oButton.addEventListener('click',(event) =>
            {
                oList.setAttribute('style','border:1px solid grey')
            }
        )
		//通过元素节点style对象属性也可以操作,只针对style对象。
        oList.style.border = '1px solid grey'
        oList.style.backgroundColor = 'salmon' //background-color
		//关键字属性
        oList.style.cssFloat = 'right'
        oList.style.cssText = 'border:1px solid grey;color:salmon;'
		//获取属性
        console.log(oList.style.color)
    </script>
</body>
</html>
```

### 事件 用户和页面交互时发生的行为

网页JavaScript程序使用异步事件驱动编程模型。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    // 点击按钮在控制台输出消息
    <div class="buttons">
        <button>Press 1</button>
        <button>Press 2</button>
        <button>Press 3</button>
    </div>
    <script>
        const buttonContainer = document.querySelector()
    </script>
    <button id="btnClick" onclick='console.log("我在onclick上")'>Click me</button>
    <script>
        const oButton = document.querySelector("#btnClick")
        // function clickMe(){
        //     console.log('you are clicking me')
        // }
        // 事件处理函数
        const clickMe = () => {
            console.log('you are clicking me')
        }
        const click2 = () => {
            console.log('you are clicking me two')
        }
        //绑定属性 oButton.onclick = clickMe;
        oButton.addEventListener('click',clickMe);
        oButton.addEventListener('click',click2);
    </script>
</body>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="child-one">
        <h1>
            Child One
        </h1>
    </div>
    <script>
        //userCapture true
        const childOne = document.getElementsByClassName("child-one");
    </script>
</body>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <ul id="lstBooks">
        <li>Java</li>
        <li>Python</li>
    </ul>
    <input type="text">
    <button id="btnAdd">Add</button>
    <button id="btnDel">Del</button>
    <script>
    </script>
</body>
</html>
```



