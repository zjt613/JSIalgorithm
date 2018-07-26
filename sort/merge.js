//归并排序算法

function ArrayList() {
    var array=[];
    this.insert=function(item){
        array.push(item);
    };

    this.toString=function(){
        return array.join();        //这里记住要return啊，不return就是一个underfied
    };

    this.mergeSort=function () {
        array = mergeSortRec(array);
    };

    var mergeSortRec=function(array){
        var length=array.length;
        if(length===1){
            return array;
        }
        var mid=Math.floor(length/2);
        var left=array.slice(0,mid);
        var right=array.slice(mid,length);

        return merge(mergeSortRec(left),mergeSortRec(right));
    };
    var merge = function (left, right) {
        var result = [];
        var il = 0;
        var ir = 0;

        while(il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while(il < left.length) {
            result.push(left[il++]);
        }

        while(ir < right.length) {
            result.push(right[ir++])
        }

        return result;
    };

}

var arr=new ArrayList();
arr.insert(3);
arr.insert(9);
arr.insert(7);
arr.insert(4);
arr.insert(2);
arr.insert(5);
arr.insert(8);
arr.insert(1);
arr.insert(10);
arr.insert(6);
//console.dir(arr);
console.log("原测试例数组："+arr.toString());
arr.mergeSort();
console.log("归并排序后数组："+arr.toString());



