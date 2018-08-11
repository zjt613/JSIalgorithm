//一个统计平均分的例子
var arr=[[90,80],[70,45,29],[99,100,70]];
var total=0;
var average=0.0;
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        total+=arr[i][j];
    }
    average=total/arr[i].length;
    console.log("学生 "+i+"的平均成绩是："+average.toFixed(2));      //toFixed(n) 取小数点后n位
    total=0;
    average=0.0;
}