# Day02作业



## 作业01

Mark和John在PK他们的BMI（Body Mass Index，体重指数）。

体重指数是用这个公式计算的：
$$
BMI = mass / height^2 = mass / (height * height)。
$$
其中，mass是体重，单位为kg；height为身高，单位为米。

请用 JavaScript 编写一个程序，命名为 `bmi.js` ，完成如下任务：

1. 用变量存储Mark和John的体重以及身高；
2. 计算二人的BMI；
3. 创建一个布尔变量，用来包含Mark的BMI是否比John更高；
4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）

```
//1.变量存储Mark和John的体重以及身高
var markMass = 54,markHeight = 180;
var johnMass = 51,johnHeight = 172;
//2. 计算二人的BMI
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log("markBMI: " + markBMI, "johnBMI: " + johnBMI + ". ");
//3.布尔变量包含Mark的BMI是否比John更高,三元运算符
var high = (johnBMI > markBMI) ? true : false;
console.log(high);
//4.字符串
console.log("Mark的BMI是否比John更高？"+String(high));
```





