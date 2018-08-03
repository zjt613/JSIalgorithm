//浅复制
// var arr1=[];
// for(var i=0;i<10;++i){
//     arr1[i]+=i+1;
// }
// console.log(arr1);//这种写法打印出来的都是NaN

var arrBefore=[];
for(var i=0;i<10;i++){
    arrBefore.push(i);     //这里如过是i++ 那就是取一半偶数了
}
console.log(arrBefore);
var arrAfter=arrBefore;
arrBefore[1]=5211314;
console.log("引用数组第二个： "+arrBefore[1]);      //5211314
console.log("赋值数组第二个： "+arrAfter[1]);       //5211314