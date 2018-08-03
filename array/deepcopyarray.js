//深复制

var arrBefore=[];
for(var i=0;i<10;i++){
    arrBefore.push(i);     //这里如过是i++ 那就是取一半偶数了
}
console.log(arrBefore);
var arrAfter=[];
for(var j=0;j<arrBefore.length;j++){
    arrAfter[j]=arrBefore[j];
}

arrBefore[1]=5211314;
console.log("引用数组第二个： "+arrBefore[1]);      //5211314
console.log("赋值数组第二个： "+arrAfter[1]);       //1
