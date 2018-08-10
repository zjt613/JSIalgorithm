//every()方法用来判断偶数的例子

function isEven(n) {        //一个Boolean类型的函数
    return n%2==0;
}

var arr=[2,4,6,8,10];
var even=arr.every(isEven);
if(even){
    console.log("They are all Even");
}else{
    "None is Even";
}

