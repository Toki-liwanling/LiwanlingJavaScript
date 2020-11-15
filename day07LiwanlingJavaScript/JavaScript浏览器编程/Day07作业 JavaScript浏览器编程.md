# 李婉玲 Day07作业 JavaScript浏览器编程

### 作业01 JavaScript网页游戏代码

- 基于平时积累和查找资料对JavaScript掷骰子计分游戏源代码的初步理解

HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- intial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放。 -->
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <!-- X-UA-Compatible用于为IE8指定不同的页面渲染模式,edge模式通知Windows Internet Explorer以最高级别的可用模式显示内容，这实际上破坏了“锁定”模式。 -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>猪骰子Pig Dice Game</title>
    <!-- 使用<link>标记链接外部样式表 -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<div class="wrapper clearfix">
    <div class="player-0-panel active">
        <div class="player-name" id="name-0">玩家 1</div>
        <div class="player-score" id="score-0">43</div>
        <div class="player-current-box">
            <div class="player-current-label">当前得分</div>
            <div class="player-current-score" id="current-0">11</div>
        </div>
    </div>
    <div class="player-1-panel">
        <div class="player-name" id="name-1">玩家 2</div>
        <div class="player-score" id="score-1">72</div>
        <div class="player-current-box">
            <div class="player-current-label">当前得分</div>
            <div class="player-current-score" id="current-1">0</div>
        </div>
    </div>
    <button class="btn-new"><i class="ion-ios-plus-outline"></i>新游戏</button>
    <button class="btn-roll"><i class="ion-ios-loop"></i>掷骰子</button>
    <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>

    <input type="text" placeholder="最终得分" class="final-score">
    <!-- img alt规定在图像无法显示时的替代文本 -->
    <img src="images/dice-5.png" alt="Dice" class="dice" id="dice-1">
    <img src="images/dice-5.png" alt="Dice" class="dice" id="dice-2">
</div>
<!-- 引用外部JavaScript文件 -->
<script src="js/app.js"></script>
</body>
</html>
```

CSS

```css
/**********************************************
*** GENERAL
**********************************************/
/* 最终得分 */
.final-score {
    position: absolute;
    left: 50%;
    /* translateX(n):元素X轴（水平方向）移动。 */
    transform: translateX(-50%);
    top: 520px;
    color: #555;
    font-size: 18px;
    font-family: 'Lato';
    text-align: center;
    /* padding:内边距。 */
    padding: 10px;
    width: 160px;
    /* text-transform:属性控制文本的大小写。uppercase:所有文字大写显示； */
    text-transform: uppercase;
}
/* outline(轮廓)是绘制于元素周围的一条线，位于边框边缘的外围。 */
.final-score:focus { outline: none; }

#dice-1 { top: 120px; }
#dice-2 { top: 250px; }


* {
    /* margin:外边距。 */
    margin: 0;
    padding: 0;
    /* box-sizing:指定两个boxes接壤。border-box指定宽度和高度（最小/最大属性）确定元素边框。 */
    box-sizing: border-box;
    
}

.clearfix::after {
    /* :after 伪元素在元素之后添加内容，这个伪元素允许在元素内容的最后面插入生成内容。 */
    content: "";
    /* diaplay用于定义建立布局时元素生成的显示框类型，此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。 */
    display: table;
    /* clear属性规定元素的左右两侧均不允许浮动元素。 */
    clear: both;
}

body {
    /* linear-gradient()函数用于创建一个表示两种或多种颜色线性渐变的图片。 */
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(../images/back.jpg);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    /* box-shadow 属性向框添加一个或多个阴影。 */
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    /* overflow 属性规定当内容溢出元素框时发生的事情，hidden内容会被修剪，并且其余内容是不可见的。 */
    overflow: hidden;
}

.player-0-panel,
.player-1-panel {
    width: 50%;
    float: left;
    height: 600px;
    padding: 100px;
}



/**********************************************
*** PLAYERS
**********************************************/

.player-name {
    font-size: 40px;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
}

.player-score {
    text-align: center;
    font-size: 80px;
    font-weight: 100;
    color: #EB4D4D;
    margin-bottom: 130px;
}

.active { background-color: #9bb49b; }
.active .player-name { font-weight: 300; }

.active .player-name::after {
    content: "\2022";
    font-size: 47px;
    position: absolute;
    color: #EB4D4D;
    top: -7px;
    right: 10px;
    
}

.player-current-box {
    background-color: #EB4D4D;
    color: #fff;
    width: 40%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
}

.player-current-label {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 12px;
    color: #222;
}

.player-current-score {
    font-size: 30px;
}

button {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: Lato;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}

button:hover { font-weight: 600; }
button:hover i { margin-right: 20px; }

button:focus {
    outline: none;
}

i {
    color: #EB4D4D;
    /* inline-block行内块元素。 */
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    /* vertical-align属性设置元素的垂直对齐方式，把元素的顶端与父元素字体的顶端对齐。 */
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}

.btn-new { top: 45px;}
.btn-roll { top: 403px;}
.btn-hold { top: 467px;}

.dice {
    position: absolute;
    left: 50%;
    top: 178px;
    transform: translateX(-50%);
    height: 100px;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);
}

.winner { background-color: #f7f7f7; }
.winner .player-name { font-weight: 300; color: #EB4D4D; }
```

JavaScript

```javascript
/*
游戏规则：
- 游戏有两位玩家，轮流玩。
- 在每一轮，玩家可以掷骰子任意次。每次的点数添加到当前得分中。
- 不过，如果掷出来点数为1，那么当前得分就变成0。之后，就轮到下一位玩家。
- 玩家可以选择 "Hold"，这意味着他本轮的分数被添加到总分上。之后，就轮到下一位玩家。
- 总分先到100点的玩家赢。
*/
let score,roundScore,activePlayer,gamePlaying;// 声明变量

// 箭头函数
// init game
const init = () => {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    // 通过查询选择器获取元素。
    document.querySelector(".dice").style.display = "none";
    // 通过ID获取元素。
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "玩家1";
    document.getElementById("name-1").textContent = "玩家2";
    // 原生js——操作类名（HTML5新增classList）
    // classList.add( newClassName ):添加新的类名，如已经存在，取消添加。
    // classList.contains( oldClassName ):确定元素中是否包含指定的类名，返回值为true 、false。
    // classList.remove( oldClassName ):移除已经存在的类名。
    // classList.toggle( className ):如果classList中存在给定的值，删除它，否则，添加它。
    // classList.replace( oldClassName，newClassName ):类名替换。
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
};

init();

const roll = () => {
    if(gamePlaying) {
        // 1.随机数
        // Math.floor()返回小于等于x的最大整数。
        const dice = Math.floor(Math.random() * 6) + 1;

        //2.显示结果
        const diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "images/dice-" + dice + ".png";

        //3.如果掷出来的点数不为1，就更新当前分数
        if(dice !== 1) {
            //加分
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }else{
            //下一个玩家
            nextPlayer();
        }
    }
};
// addEventListener() 方法用于向指定元素添加事件句柄。
document.querySelector(".btn-roll").addEventListener("click",roll);

const hold = () => {
    if(gamePlaying){
        //将当前分数加到总分上
        scores[activePlayer] += roundScore;
        //更新UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        //检查玩家是否赢了
        if(scores[activePlayer] >= 100){
            document.querySelector("#name-" + activePlayer).textContent = "赢家!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;
        }else{
            //下一个玩家
            nextPlayer();
        }
    }
};

document.querySelector(".btn-hold").addEventListener("click", hold);

function nextPlayer(){
    activePlayer === 0 ? (activePlayer = 1):(activePlayer = 0);
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", init);
```

### 作业02 静态节点和动态节点的区别(代码表示)

```javascript
<body>
    <ul id="myUl">
        <li id="static1">静态节点1</li>
    </ul>
    <script>
        // 静态节点
        const oList = document.querySelector('ul');
        console.log(oList.childElementCount);
        const oLi = oList.querySelectorAll("li");
        for(var i=0;i<1;i++){
            oList.appendChild(document.createElement('li'));
        }
        console.log(oLi.length);
        // 动态节点
        const oList1 = document.getElementsByTagName('li');
        console.log(oList1.length);
        const oUl = document.getElementById('myUl');
        for(var i=0;i<1;i++){
            oUl.appendChild(document.createElement('li'));
        }
        console.log(oList1.length);
    </script>
</body>

or

<body>
    <script>
        const div1 = document.getElementsByTagName("div");
        const i = 0;
        while(i < div1.length) {
            document.body.appendChild(document.createDocumentFragment("div"));
            i++;
        }

        const div2 = document.getElementsByTagName("div"),i = 0;
        console.log(div2.length);
        while(i < div2.length) {
            document.body.appendChild(document.createElement("div"));
            i++;
        }
        console.log(div2.length);
    </script>
</body>
```

### 知识点总结（JavaScript浏览器编程）

#### 在HTML网页中嵌入JavaScript的方式

- 位置：<head></head>标签部分或<body></body>标签部分。

- 三种方式：

  ```javascript
  <body>
      <!-- 在HTML网页中嵌入JavaScript的方式 -->
      <!-- 1.行内(事件属性)——不推荐，JavaScript代码和html混合修改时较麻烦。 -->
      <button onclick="console.log('hello')"></button>
      <!-- 2.内嵌 -->
      <script>
          console.log('hello');
      </script>
      <!-- 3.引入外部脚本，多个网页可共用一个js文件。 -->
      <script src="day1.js"></script>
  </body>
  ```



> 当打开浏览器时，整个浏览器窗口(或框架)用Window对象表示。在 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。
>
> 当浏览器加载一个Web页面时，它会创建这个页面的模型。这个模型被称为DOM树，它被保存在浏览器的内存中。



**JavaScript用DOM来读取和修改页面。**

**DOM是网页与JavaScript之间的桥梁。**

![JavaScript DOM](E:\文档文件\2018级大3上\Java WEB开发\JavaScript DOM.png)



#### DOM(Document Object Model)文档对象模型

- 版本

  **DOM Level 0**

  非标准，DOM0级指的是IE4和Netscape 4.0这些浏览器最初支持的DHTML，JavaScript通过DOM可以控制页面。

  **DOM Level 1**

  DOM 核心。
  DOM HTML：添加HTML专用的对象与函数对DOM核心进行了扩展。

  

  XML文档：是一种用于标记电子文件使其具有结构性的标记语言，包含SGML（通用标识语言标准，是国际上定义电子文件结构和内容描述的标准）和HTML。

  **DOM Level 2**

  DOM 核心。
  DOM 视图：描述跟踪一个文档的各种视图（使用CSS样式设计文档前后）的接口。
  DOM 事件：描述事件接口。
  DOM 样式：描述处理基于CSS样式的接口。
  DOM 遍历和范围：描述遍历和操作文档树的接口。

  **DOM Level 3**

  进一步扩展：引入统一方式载入和保存文档和文档验证方法对DOM进行进一步扩展，DOM3包含一个名为“DOM载入与保存”的新模块，DOM核心扩展后可支持XML1.0的所有内容，包括XML Infoset、 XPath、和XML Base。

  **DOM Level 4（最高版本）**

  规范很多浏览器目前还不支持。

- Node对象

  **Node对象的属性**

  baseURI:返回该节点所在文档的基URI。

  childNodes:返回一个包含了该节点所有子节点的实时的NodeList。

  firstChild:返回该节点的第一个子节点。

  isConnected:返回一个布尔值用来检测该节点是否已连接(直接或者间接)到一个上下文对象上。

  lastChild:返回该节点的最后一个子节点。

  nextSibling:返回与该节点同级的下一个节点。

  nodeName:返回一个包含该节点名字的DOM字符串。

  nodeType:返回一个与该节点类型对应的无符号短整型的值。

  nodeValue:返回或设置当前节点的值。

  ownerDocument:返回这个元素属于的Document对象。

  parentNode:返回一个当前节点 的父节点 。

  parentElement:返回一个当前节点的父节点Element。

  previousSibling:返回一个当前节点同辈的前一个节点。

  textContent:返回或设置一个元素内所有子节点及其后代的文本内容。

  **Node对象的方法**

  appendChild():将指定的 childNode 参数作为最后一个子节点添加到当前节点。

  cloneNode():克隆一个节点，并且可以选择是否克隆这个节点下的所有内容。默认情况下，节点下的内容会被克隆。

  contains():返回一个  布尔值，来表示传入的节点是否为该节点的后代节点。

  hasChildNodes():返回一个布尔值，来表示该元素是否包含有子节点。

  insertBefore():在当前节点下增加一个子节点，并使该子节点位于参考节点的前面。

  removeChild():移除当前节点的一个子节点。这个子节点必须存在于当前节点中。

  replaceChild():对选定的节点，替换一个子节点 为另外一个节点。

  normalize():对该元素下的所有文本子节点进行整理，合并相邻的文本节点并清除空文本节点。

- 不同的节点类型用不同的对象表示(Node的子类)

  | 节点类型         | 说明                           |
  | ---------------- | ------------------------------ |
  | Document         | 表示整个文档，DOM树的根节点。  |
  | DocumentFragment | 表示文档碎片，仅包含部分文档。 |
  | DocumentType     | 为文档定义的实体提供接口。     |
  | Element          | 表示元素。                     |
  | Attr             | 表示属性。                     |
  | Text             | 表示元素或属性的文本内容。     |
  | Comment          | 表示注释。                     |

  **节点类型用枚举数字代替。**

  | 节点类型 | nodeType属性返回值 |
  | -------- | :----------------: |
  | Element  |         1          |
  | Text     |         3          |
  | Document |         9          |

#### 访问DOM的元素

- 非常规元素的访问:不是在body标记里的元素。

  document.doctype:获取网页的文档类型定义。

  ```javascript
  <script>
          // 直接通过doctype属性访问。
          const doctype = document.doctype;
          console.log(doctype);// 控制台输出:<!DOCTYPE html>
  		console.log(typeof doctype);// 控制台输出:object
  </script>
  ```

  document.documentElement:获取网页的 html 元素（包括整个网页）。

  ```javascript
  <script>
  		// documentElement文档元素:HTML标记里的所有元素。
          const html1 = document.documentElement;
          console.log(html1);//不是html标记,而是HTML元素以及里面所包含的所有节点,没包含文档类型定义.
          console.log(typeof html1);//typeof运算符判断变量类型,返回Object对象,不是字符串.
  </script>
  
  //控制台输出:
  //<html lang="en">
  //<head>
  //    <meta charset="UTF-8">
  //    <meta name="viewport" content="width=1200, initial-scale=1.0">
  //    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //    <title>Document</title>
  //</head>
  //<body>
  //    <!-- img标记 -->
  //    <img src="" alt="">
  //    <script>
  //        // 直接通过doctype属性访问。
  //        const doctype = document.doctype;
  //        console.log(doctype);// 控制台输出:<!DOCTYPE html>
  //		console.log(typeof doctype);// 控制台输出:object
  //
  //        // documentElement文档元素:HTML标记里的所有元素。
  //        const html1 = document.documentElement;
  //        console.log(html1);//不是html标记,而是HTML元素以及里面所包含的所有节点,没包含文档类型定义.
  //       console.log(typeof html1);//typeof运算符判断变量类型,返回Object对象,不是字符串.
  //        
  //        // document.head:获取网页的 head 元素。
  //        console.log(document.head);
  //
  //        //控制台输出:
  //        //<head>
  //        //    <meta charset="UTF-8">
  //        //    <meta name="viewport" content="width=1200, initial-scale=1.0">
  //        //    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //        //    <title>Document</title>
  //        //</head>
  //
  //        // document.body:返回网页的body元素。
  //        console.log(document.body);// body元素的内容和本身.
  //
  //        // document.images:返回文档中所有图像的一个节点列表。
  //        console.log(document.images);
  //        //类型是object,对象的集合转换为数组方法Array.from().
  //    </script>
  //</body>
  //</html>
  //控制台输出:object
  ```

  document.head:获取网页的 head 元素。

  ```javascript
  <script>
  		console.log(document.head);
  </script>
  
  //控制台输出:
  //<head>
  //    <meta charset="UTF-8">
  //    <meta name="viewport" content="width=1200, initial-scale=1.0">
  //    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //    <title>Document</title>
  //</head>
  ```

  document.body:返回网页的body元素。

  ```javascript
  <script>
  		console.log(document.body);
  </script>
  ```

  document.images:返回文档中所有图像的一个节点列表。

  ```javascript
  <body>
      <img src="" alt="">
      <script>
          console.log(document.images);
  		//类型是object,对象的集合转换为数组方法Array.from().
  	</script>
  </body>
  // 控制台输出:html集合(遍历找元素).
  ```

  ![非常规元素 img](E:\文档文件\2018级大3上\Java WEB开发\非常规元素 img.png)

  document.links:返回所有具有href属性的a元素和area元素(热点地图)的一个节点列表。

  document.anchors:返回所有具有name属性的a元素(锚点)的一个节点列表。

  document.forms:返回文档中所有表单的一个节点列表。

- 常规元素的访问(既可以在Document对象，也可以在元素对象。)
  **1.通过 ID 获取元素:getElementById('HTML元素的id属性的值')。**

  返回一个作为实参给出的唯一id属性的元素的引用。如果没找到就返回 null。

  

  **2.通过标记名获取元素:getElementsByTagName ('HTML标记名')。**

  返回具有作为参数指定的标记名的所有元素的动态节点列表（NodeList）。如果文档中没有元素有给出的标记名，就返回一个空节点列表。

  

  **3.通过类名获取元素:getElementsByClassName('HTML元素的class属性的值')。**

  返回具有作为实参提供的类名的所有元素的一个动态节点列表（NodeList）。如果文档中没有元素有给出的类名，就返回一个空节点列表。

  

  **4.通过查询选择器获取元素:(更强大！而且可以在所有节点上使用)。**

  querySelector('CSS选择器')：用CSS语法查找文档中匹配作为实参提供的CSS选择器的第一个元素。如果没有元素匹配，就返回null。
  querySelectAll('CSS选择器')：用CSS语法查找文档中匹配CSS查询选择器的所有元素的一个静态节点列表（NodeList） 。如果没有元素匹配，就返回一个空节点列表。

  

  **getElement()方法和querySelector()方法区别**：

  getElement()方法获得的节点列表是**动态列表**,节点进行增删时,节点列表也会跟着改变。

  querySelector()方法获得的节点列表是**静态列表**,节点进行增删时,节点列表不会跟着改变。

  

  **注意范围:影响性能。**

  ```javascript
  <body>
      <!-- div元素 -->
      <div id="myDiv">
          <p id="myPara">test</p>
      </div>
      <script>
          // 只有document元素具有getElementById()方法。
          const oDiv = document.getElementById('myDiv');//在整个文档里找div元素。
          // oDiv.getElementById
          const oPara = oDiv.getElementById('myPara');//在div元素里找id=myPara。
  		const oPara = oDiv.getElementsByTagName('p');
  		const oPara = oDiv.querySelector("#myDiv #myPara");
  		console.log(oDiv);// 控制台输出:<div id="myDiv"><p id="myPara">test</p></div>.
          console.log(oPara);// 控制台输出:<p id="myPara">test</p>.
      </script>
  </body>
  ```

#### 访问元素的属性

HTML属性分三种

- HTML元素的标准原生属性：style、class、id、src和href等。

语法：元素.属性名。

注意：

1.单个单词的属性名全部小写，多个单词的属性名按照驼峰法则转换。
2.事件属性前面加 `on`，必须小写！
3.有些HTML属性对JavaScript来说是保留关键字。

```javascript
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .test1{
            color: crimson;
        }
    </style>
</head>
<body>
    <div id="myDiv">Test</div>
	//关键字label标记for属性:表明与input绑定。
    <label for="username">test</label><input type="text" name="username">
    <script>
        //html属性都是原生属性。
        const oDiv = document.querySelector("#myDiv");
        console.log(oDiv.id);//输出id属性 控制台输出:myDiv。
        oDiv.className = "test1";//直接赋值属性。
        console.log(oDiv.className);//控制台输出:test1。
    </script>
</body>
```

- 访问元素的类名

1.元素节点.className = '类名' 。

2.classList对象。

元素节点.classList.add('类名'):给一个元素添加类，但是不会覆盖已经存在的其它类。
元素节点.classList.remove('类名'):一个元素中删除指定的类。
元素节点.classList.toggle():如果元素没有给出的类，就添加该类，如果有该类，就删除该类。
元素节点.classList.contains():检查元素是否有指定的类。

```javascript
// 访问div的背景颜色
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 盒模型 */
        .box {
            border: 1px solid coral;
            height: 100px;
            width: 100px;
        }
        .bgColor {
            background-color: darkgray;
        }
        .show {
            /* display: none; */
            /* 位置固定 */
            visibility: hidden;
        }
    </style>
</head>
<body>
    <div id="myDiv">test</div>
    <button id="btnClick">点我</button>
    <script>
        const oDiv = document.querySelector("#myDiv");
        // 设置属性
        // oDiv.className = 'box bgColor' // 类选择器不唯一。
        oDiv.classList.add(['box']);//添加类
        oDiv.classList.add(['bgColor']);
        const btnClick = document.querySelector('#btnClick');
        // 箭头函数 绑定事件
        btnClick.addEventListener('click',() => {
            //oDiv.classList.add('show');//添加类
            oDiv.classList.toggle('show');//切换
            oDiv.classList.remove('bgColor');//删除类
            console.log(oDiv.classList);
        })
    </script>
</body>
```

- 自定义属性：程序员自定义的。

**1.获取属性** 元素节点.getAttribute('属性名')

返回作为实参提供的属性的值。

**2.设置属性** 元素节点.setAttribute('属性名', '属性值')

修改一个元素的属性值，它带有两个参数：第一个参数是要修改的属性，第二个参数是该属性的新值。

**3.删除属性** 元素节点.removeAttribute('属性名')

```javascript
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .test {
            width: 50px;
            height: 50px;
        }
    </style>
</head>
<body>
    <div id="myDiv" class="test">test</div>
    <script>
        // setAttribute()、getAttribute()即可以对原生属性,又可以对自定义属性设置。
        const oDiv = document.querySelector("#myDiv")
        oDiv.setAttribute('class','test');//原生属性
        oDiv.setAttribute('foo','test1');
        console.log(oDiv.getAttribute('id'));    // myDiv
        console.log(oDiv.getAttribute('foo'));   // 自己的属性
        oDiv.removeAttribute('foo');
        console.log(oDiv.getAttribute('foo'));   // null
    </script>
</body>
```

- 访问 HTML5 自定义数据属性：以 “data-” 开头。

1.既不包含与渲染有关的信息，也不包含元素的语义信息。

2.dataset属性是一个DOMStringMap的实例，包含一组键/值对映射。

3.删除属性： delete 运算符

```javascript
<body>
    <!-- 自定义数据属性 -->
    <div data-username="liwanling" data-password="aaa">database</div>
    <!-- 脚本 -->
    <script>
        const oDiv = document.querySelector("div");
        // 自定义的数据属性放在元素的dataset属性（数据集）中，包含一组键值对映射。
        console.log(oDiv.dataset);// DOM字符串映射。对象。
        console.log(oDiv.dataset.username);// data-user-name userName
        console.log(oDiv.dataset.password);
        oDiv.dataset.username = 'li';// 设值
        console.log(oDiv.dataset.username);
    </script>
</body>
// 控制台输出:
```

![访问HTML5](E:\文档文件\2018级大3上\Java WEB开发\访问HTML5.png)

#### 访问元素的内容

- HTML

  元素.innerHTML:把元素内的HTML返回为字符串。
  元素.outerHTML:返回元素本身及其包含的 HTML。
  元素.insertAdjacentHTML():在指定元素附近插入任意 HTML 标记字符串。

- 普通文本

  textContent:只返回普通文本。

  ```javascript
  <body>
      <h1>测试访问元素内容</h1>
      <p>this is <i>a text</i> document</p>
      <script>
          const oPara = document.querySelector("p");
          // 在元素附近可以任意插入html标记
          oPara.insertAdjacentHTML('beforeend','<i>test</i>');//beforebegin <p>前 afterbegin <p> <p>this is <i>a text</i> document<i>test</i></p>
          // 元素节点 元素内容
          console.log(oPara.innerHTML);//this is <i>a text</i> document
          console.log(typeof innerHTML);//类型String
          console.log(oPara.outerHTML);//<p>this is <i>a text</i> document</p>
          console.log(oPara.textContent);//this is a text document
          console.log(oPara.innerText);//IE浏览器,非标准。this is a text document
          oPara.innerHTML = "<b>test</b><i>test1</i>";//设置,替换内容。testtest1
      </script>
  </body>
  ```

#### 导航（DOM节点和元素节点的属性）

- parentNode:元素父节点。

- parentElement:父元素。

- children:只返回一个节点的所有元素节点，所以会忽略所有文本节点。

- childNodes:某个节点的所有子节点列表（包含所有文本节点（空白也是））。

- childElementCount:元素子节点的数目。

- firstChild:第一个元素节点（空白节点也算）。

- lastChild:最后一个元素节点（空白节点也算）。

- firstElementChild:第一个元素节点。

- lastElementChild:最后一个元素节点。

- nextSibling:

- previousSibling:

- nextElementSibling:下一个相邻的元素节点。

- previousElementSibling:前一个相邻的元素节点。

- nodeValue:元素的值。

- nodeName:元素的名字。

- NodeType:元素的类型。


```javascript
<body>
    <div id="myDiv">
        <p id="myPara1">test1</p>
        <p id="myPara2">test2</p>
    </div>
    <script>
        const oDiv = document.querySelector("#myDiv");
        console.log(oDiv.parentNode);//父节点是body,可能会把空白当成一个节点。
        console.log(oDiv.parentElement);//父元素body,安全。
        console.log(oDiv.childElementCount);//元素子节点的数目,
        console.log('子元素的数目为:',oDiv.childElementCount);//2
        console.log('子节点的数目为:',oDiv.childNodes);//NodeList(5)
        console.log(oDiv.children);//元素集合,2个。
        console.log(oDiv.childNodes);//节点列表,5个。遍历。

        console.log(oDiv.firstChild.innerHTML);//第一个节点内容 undefined(空格)。
        console.log(oDiv.lastChild.innerHTML);//最后一个节点内容 undefined(空格)。
        
        console.log(oDiv.firstElementChild.innerHTML);//第一个元素子节点内容test1。
        console.log(oDiv.lastElementChild.innerHTML);//最后一个元素子节点内容test2。

        const oP2 = document.querySelector("#myPara2");
        console.log(oP2.previousElementSibling.textContent);//相邻节点（兄弟元素）文本内容test1。
        //抽象语法树

        console.log("P2节点类型为:",oP2.nodeType,"节点名称为:",oP2.nodeName,"节点值为:",oP2.nodeValue);// 1 P null

    </script>
</body>
```

#### 动态创建标记

- 创建元素:document.createElement('元素名')。
- 创建文本节点:document.createTextNode('文本节点的内容')。
- 添加子节点:appendChild('要添加的子节点')，返回追加的节点对象。
- 插入子节点:insertBefore(新节点，要插入到它之前的节点)。
- 删除子节点:removeChild(要删除的子节点)。
- 替换子元素: replaceChild(新子节点, 老子节点)。
- 克隆节点:cloneNode()——深度复制(true)、浅度复制(false)。
- 合并相邻的文本节点并删除空的文本节点:normalize()。

```javascript
//1.老方法
const oElement = document.createElement('ul');//创建元素节点,还没有到DOM树中
const oElement = document.createElement('ul');//创建元素节点,还没有到DOM树中。
document.body.innerHTML = "<ul></ul>";//省事，但不和常规。
document.body.appendChild(oElement);//添加为某一个节点的子节点。

//2.最流氓方式
// 定义模板字符串
let list = `
<ul>
	<li>Java</li>
	<li>JavaScript</li>
	<li>Python</li>
	<li>Swift</li>
</ul>
`
document.body.innerHTML = list;
document.querySelector("li").textContent = "Java1";//文本内容替换

//3.最古老的方式
const oElement = document.createElement('ul');
const oItem = document.createElement('li');//创建li元素
const oText = document.createTextNode('Java');//创建文本节点
oItem.appendChild(oText);//添加元素
oElement.appendChild(oItem);
let item = createHTML('li','Java');
document.body.appendChild(oElement);
const oFrag = document.createDocumentFragment();//减少reflow
const oElement = document.createElement('ul');
//传入参数,调用。
const createHTML = (elementName,text) => {
	let oItem = document.createElement(elementName);
	let oText = document.createTextNode(text);
	oItem.appendChild(oText);
	oFrag.appendChild(oItem);
	//return oItem
	//document.body.appendChild(oItem)
}
//调用
createHTML('li','Java');
createHTML('li','JavaScript');
createHTML('li','Python');
createHTML('li','Swift');

document.body.appendChild(oFrag);
```













