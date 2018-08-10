//插入数组 push() 或者unshift

//一般插入数组到第一个 如果自己写是这样的，缺点就是数组多了效率低下
// var arr=[2,3,4,5];
// var newnum=1;
// var N=arr.length;
// for(var i=N;i>=0;i--){
//     arr[i]=arr[i-1];
// }

// arr[0]=newnum;
// console.log(arr);       //[1,2,3,4,5]

var nums=[2,3,4,5];
var newnum=1;
nums.unshift(newnum);
console.log(nums);      //[1,2,3,4,5]

var nums=[3,4,5];
nums.unshift(newnum,1,2);
console.log(nums);      //[1,1,2,3,4,5]

nums.pop();
console.log(nums);      //[1,1,2,3,4]
nums.shift();
console.log(nums);      //[1,2,3,4]

//源方法实现
var arr=[1,9,9,7,0,6,1,3];
var N=arr.length;
for(var i=0;i<N;i++){
    arr[i]=arr[i+1];
}
console.log(arr);   //[ 9, 9, 7, 0, 6, 1, 3, undefined ] 可以看到长度还是不变的，就是变成了undefined
