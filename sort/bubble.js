//创建一个数组
function ArrayList() {
    var array = [];
    this.insert = function (item) {
        array.push(item);
    }
    this.toString = function () {
        return array.join();
    }

    var swap=function(index1,index2) {              //以后就这么写方法var fn=function(){}  因为JavaScript没有类这个概念 所有为了规范 以后 创建对象”类“ 才function A(){}
        var temp=array[index1];
        array[index1]=array[index2];
        array[index2]=temp;

    }

    //冒泡排序
    this.bubbleSort=function(){
        var length=array.length;
        for(var i=0;i<length;i++){
            for (var j=0;j<length-i-1;j++){     //这里减不减1 答案是一样的唉  不过这个好
                if(array[j]>array[j+1]){
                    swap(j,j+1);
                }
            }
        }
    }

}
 
    //生成数组
function createNorSortArray(size) {
    var array=new ArrayList();
    for(var i=size;i>0;i--){
        array.insert(i);
    }
    return array;
}






//创建一个数组并且初始化
var array=new createNorSortArray(10);
console.log("原数组: "+array.toString());
array.bubbleSort();
console.log("冒泡排序数组: "+array.toString());

//  这里思考我如何创建一个随机数组  思路是给个随机数，然后把这个随机数放大10倍截取第一位


//冒泡排序算法 i和j近似相等 所有复杂度是 O(n^2)
















// console.log(createNorSortArray(5).toString());
// var arr1=[];
// for(i=0;i<10;i++){
//     arr1.push(i);
// }
// console.log(arr1);