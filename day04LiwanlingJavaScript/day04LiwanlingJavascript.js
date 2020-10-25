/*
作业1
小明和他家人在泰国旅游，到3个不同的饭店吃饭。账单(bill)分别是124元、48元和268元。为了给服务员小费(tip)，小明创建了一个简单的小费计算器函数(tipCalculator)。
如果账单小于50元，他会给账单的20%作为小费﹔
如果账单在50到200元之间，他会给账单的15%作为小费﹔
如果账单超过200元，他会给账单的10%作为小费。

小明想要2个数组:
1)一个数组包含所有三个小费(每个账单一个);
2)一个数组包含所有三个最终支付的金额(账单＋小费)。
最后把这2个数组输出到控制台。
*/
//方法一:声明函数
function tipCalculator(bill) {
    let percentage;
    if(bill < 50) {
        percentage = 0.2;
    }else if(bill >= 50 && bill < 200) {
        percentage = 0.15;
    }else {
        percentage = 0.1;
    }
    return percentage * bill;
}
console.log('The tip is $'+tipCalculator(10));//测试函数

const bills = [124,48,268];//账单数组
//将账单数组的值传入函数得出小费
const tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
const cost = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];//账单和消费相加得出最终支付的金额
console.log('The tip is '+ tips,'The cost is ' + cost);//两个数组输出到控制台

//方法二:箭头函数
const tipCalculator = bills => {
    const tips = [];
    const costs = [];
    bills.forEach(bill => {
        let tip;
        if(bill < 50) {
            tip = bill * 0.2;
        }else if(bill >= 50 && bill < 200) {
            tip = bill * 0.15;
        }else {
            tip = bill * 0.1;
        }
        const cost = bill +tip;
        tips.push(tip);
        costs.push(cost);
    })
    console.log('The tip is '+ tips);
    console.log('The cost is ' + costs);
}
tipCalculator([124,48,268]);

/*
作业2
假设有三个数a、b、c，求这三个数的平均值的函数为∶
function mean(a, b, c) {
    return (a + b + c) / 3;
}
1)如果要求任意个数的数字的平均值，该如何改进这个函数呢?
请编写改进的mean1()函数,让该函数可以计算任意个数的数字的平均值。
提示:使用扩展运算符
2)请编写函数mean2(),使用数组的reduce()函数改写mean1(),让代码更加精简。
3)请在第二步的基础上编写函数mean3(),实现只对数组中的偶数求平均值。
提示:使用回调函数和map()
*/
// ... Arguments计算任意个数的数字的平均值
const mean1 = function(...arguments) {
    let sum = 0;
    for (var i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum/arguments.length;
}
avg = mean1(5,9,5,21);
console.log("The average is " + avg);

const mean2 = (...array) => array.reduce((acc,val) => acc + val,0) / array.length;//累计求和除长度
console.log("The average is " + mean2(...[5,9,10,28]));

const oArray1 = [8,10,21,8,10];
const oArray2 = oArray1.filter((x) => x%2===0);//取余 偶数
console.log(oArray2);
const mean3 = oArray2.reduce(
    (acc,x) => acc + x)/ oArray2.length//回调
console.log("The average is " + mean3);