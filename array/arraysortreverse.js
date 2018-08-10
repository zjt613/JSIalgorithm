// var arr1=[1,2,3,4,5];
// arr1.reverse();
// console.log(arr1);      //[5,4,3,2,1]
// arr1.sort();
// console.log(arr1);      //[1,2,3,4,5]

// var arr2=['a','A','c','b','B'];
// arr2.sort();
// console.log(arr2);      //[ 'A', 'B', 'a', 'b', 'c' ]  字典排序效果理想

var arr3=[100,1,2,200,3,4,5];
// arr3.sort();
// console.log(arr3);      //[ 1, 100, 2, 200, 3, 4, 5 ]       //并不是按从大到小排序的

function compare(a,b) {
    return a-b;
}

arr3.sort(compare);     //这里是compare而不是compare()函数传入的时候
console.log(arr3);      //[ 1, 2, 3, 4, 5, 100, 200 ]



