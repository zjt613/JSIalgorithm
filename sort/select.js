//选择排序

function ArrayList(){
    var array=[];
    this.insert=function (item) {
        array.push(item);
    }
    this.toString=function(){
       return array.join();     //这里要把它返回    不返回就是undefined
    }

    var swap=function(index1,index2){      //两个数组索引交换
        var temp=array[index1];
        array[index1]=array[index2];
        array[index2]=temp;
    }
    
    this.selectSort=function () {       //选择排序
        var length=array.length;
        var indexMin;
        for(var i=0;i<length-1;i++){        //这里为什么是length-1 而不是length  因为它默认第一个最小
            indexMin=i;
            for(var j=i;j<length;j++){      //第二个从i开始排，入宫后面的小于前面的 那么把后面的索引赋值给indexMin
                if(array[indexMin]>array[j]){
                    indexMin=j;
                }
            }

            if(i!==indexMin){       //如果还有比它小的换位置
                swap(i,indexMin);
            }
        }
    }
}

function createNoSortArray(size) {
    var array=new ArrayList();
    for(var i=size;i>0;i--){
        array.insert(i);
    }

    return array;
}

//测试
var arr=new createNoSortArray(10);
console.log("初始化的数组："+arr.toString());
arr.selectSort();
console.log("选择排序后的数组："+arr.toString());


