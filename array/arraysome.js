//some()方法的例子
function isEVen(n) {
    return n%2==0;
}

var  arr=[1,2,3,5,7,9];

var even=arr.some(isEVen);
if(even){
    console.log("Some Even in Here");
}else{
    console.log("None Even in Here");
}