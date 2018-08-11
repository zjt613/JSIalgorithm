//这波骚操作过滤奇偶数
function isEven(n) {
    return n%2==0
}
function isOdd(n) {
    return n%2!=0;
}

var arr=[];
for(var i=0;i<20;i++){
    arr.push(i);
}
console.log(arr);

var even=arr.filter(isEven);
console.log("过滤的偶数结果：\n"+even);
var odd=arr.filter(isOdd);
console.log("过滤的奇数结果：\n"+odd);
//奇怪的时答案居然时没用[ ]的，但是这里可以联想到过滤分数、字符串
