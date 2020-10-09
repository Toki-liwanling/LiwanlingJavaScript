# Day02 作业



## 作业02

John 和 Mike 都在不同的队打篮球。在最近的3场比赛中，John 的队得了89分、120分和103分，而 Mike 的队得了116分、94分和123分。

用 JavaScript 编写程序，存为 `ball.js`，完成以下任务：

1. 计算每队的平均分；
2. 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
3. 然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
5. 像前面一样，改变分数以产生不同的赢家，记住可能会有平局。

```
//1. 4.计算John Mike Mary的平均分
var john = (89 + 120 + 103) / 3;
var mike = (116 + 94 + 123) / 3;
var mary = (97 + 134 + 105) / 3;
console.log("johnScore: " + john, "mikeScore: " + mike, "maryScore: "+ mary + ". ");

//2.判断获胜队伍
if (john > mike && john > mary) {
    console.log("John's team wins with " + john + " points!")
} else if (mike > john && mike > mary) {
    console.log("Mike's team wins with " + mike + " points!")
} else if (mary > john && mary> mike) {
    console.log("Mary's team wins with " + mary + " points!")
} else {
    //平局
    console.log("There is a draw!")
}
```

