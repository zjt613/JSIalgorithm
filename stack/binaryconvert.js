//二至九进制转换
var Stack=require('./stack.js');

function convertB(num,base) {
    var stack=new Stack();
    do{
        stack.push(num%base);
        num=Math.floor(num/=base);
    }while (num>0);
    var converted='';
    while(stack.length()>0){
        converted+=stack.pop();
    }
    return converted;
}

console.log(convertB(8, 2));        //1000  把十进制的8转换位二进制的1000





