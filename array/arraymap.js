//这对数字的例子
function add5(n) {
    return n+=5;
}

var arr=[1,2,3,4,5];
var arrresult=arr.map(add5);
console.log(arrresult);     //[6,7,8,9,10]

//针对字符串的例子
function str(n) {
    return n[0];
}
var arr2=['ataola','is','me'];
var arr2result=arr2.map(str);
console.log(arr2result);    //['a','i','m']
console.log(arr2result.toString());    //a,i,m
console.log(arr2result.join(''));    //aim 首字母缩写


