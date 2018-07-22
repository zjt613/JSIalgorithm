//插入排序

function ArrayList(){
    var arr=[];//等价于var arr=new Array()
    this.insert=function(item){
        arr.push(item);
    };

    this.toString=function(){
        return arr.join();
    };

    //只要变量j比0大并且数组中的前面的值比待比较的值大， 我们就把这个值移到当前位置上并减小j
    this.insertSort=function(){
        var length=arr.length;
        var j;
        var temp;
        for(var i=0;i<length;i++){
            j=i;
            temp=arr[i];
            while(j>0&&arr[j-1]>temp){
                arr[j]=arr[j-1];
                j--;
            }
            arr[j]=temp;
        }
    };
}


function createNonSortedArray(size) {
    var array = new ArrayList();
    for (var i = size; i > 0; i--) {
        array.insert(i);
    }
    return array;
}

var arr=new createNonSortedArray(5);
console.log("自动化测试用例1原例："+arr.toString());
arr.insertSort();
console.log("自动化测试用例1排序后："+arr.toString());
//这里做过这样一个事情 直接createNonSortedArray(5).insertSort().toString() 不能读取toString typeof一下发现createNonSortedArray(5)是object

//手动来测试一个用例

var arr2=new ArrayList();
arr2.insert(2);
arr2.insert(4);
arr2.insert(1);
arr2.insert(3);
arr2.insert(5);
arr2.insertSort();
console.log("随机测试用例排序结果： "+arr2.toString());


