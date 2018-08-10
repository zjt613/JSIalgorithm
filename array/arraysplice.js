//splice()的例子
var arr1=[1,2,3,7,8,9];
var arr2=[4,5,6];
arr1.splice(3,0,arr2);
console.log(arr1);      // [1,2,3,[4,5,6],7,8,9]
console.log(arr1.toString());      // 1,2,3,4,5,6,7,8,9

arr1.splice(3,0,6,1,3);
console.log(arr1);      //[1,2,3,6,1,3,[4,5,6],7,8,9]
