//string 转 array
var str='ataola is a single dog no girl love him';
var arr=str.split(' ');
console.log(arr);
//进行遍历
for(var i=0;i<arr.length;i++){
    console.log("第"+i+"个单词是 "+arr[i]);
}

console.log(arr.indexOf('ataola'));     //0
console.log(arr.indexOf('computer'));       //-1