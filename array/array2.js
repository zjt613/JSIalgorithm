// var arr=[];
// for(var i=0;i<5;i++){
//     arr[i]=[];
// }
// console.log(arr);   //这种方法不好，但是了解下， [ [], [], [], [], [] ]

Array.matrix=function (numrows,numcols,initial) {
    var arr=[];
    for(var i=0;i<numrows;i++){
        var columns=[];
        for(var j=0;j<numcols;j++){
            columns[j]=initial;
        }
        arr[i]=columns;
    }
    return arr;
};

var nums=Array.matrix(5,5,1);
console.log(nums);      //5*5的矩阵 值为1
console.log(nums[2][2]);        //1
