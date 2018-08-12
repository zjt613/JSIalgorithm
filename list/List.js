//构造函数初始化
function List() {
    this.listSize=0;        //列表的元素个数
    this.pos=0;             //列表的当前
    this.dataStore=[];      //初始化一个空数组来保存列表元素
    this.append=append;         //列表尾端插入
    this.find=find;         //查找列表元素
    this.remove=remove;         //从列表中删除
    this.length=length;         //返回元素个数
    this.toString=toString;     //字符串形式输出
    this.insert=insert;         //当前位置后插入
    this.clear=clear;       //清楚所有列表元素
    this.contains=contains;     //判定给定值是否存在列表
    this.front=front;           //当前位置移动到第一个
    this.end=end;               //当前位置移动到最后一个
    this.prev=prev;             //当前位置往前移
    this.next=next;             //当前位置往后移
    this.currPos=currPos;       //列表当前位置
    this.moveTo=moveTo;         //移动
    this.getElement=getElement;     //返回当前位置的元素
}

//尾端插入实现
function append(element) {
    this.dataStore[this.listSize++]=element;
}

//测试append()方法
var list=new List();
list.append(1);
// console.log(list);
// List {
//     listSize: 1,
//         pos: 0,
//         dataStore: [ 1 ],
//         append: [Function: append] }

//在列表中查找某一个元素
function find(element) {
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i]===element){
            return i;
        }
    }
    return -1;
}

//测试下数据
list.append(2);
// console.log(list.find(2));

//删除某个元素
function remove(element) {
    var foundAt=this.find(element);
    if(foundAt>-1){
        this.dataStore.splice(foundAt,1);
        this.listSize--;
        return true;
    }
    return false;
}

//测试remove（）
// list.append(3);
// list.remove(2);
// console.log(list.dataStore);  //[1,3]


//返回列表中元素个数
function length() {
    return this.listSize;
}
//测试length()函数
// console.log(list.length());//2

//字符串显示
function toString() {
    return this.dataStore.toString();
}

//测试toString()
// console.log(list.toString());   //1,2

//向列表中插入一个元素
function insert(element,after) {
    var insertPos=this.find(element);
    if(insertPos>-1){
        this.dataStore.splice(insertPos+1,0,after);
        return true;
    }
    return false;
}

//测试insert()函数
// list.insert(1,520);
// console.log(list.toString());       //1,520,2

//清除所有元素
function clear() {
    delete this.dataStore;
    this.dataStore=[];
    this.listSize=this.pos=0;
}
//测试下clear()函数
// list.clear();
// console.log(list);
// List {
//     listSize: 0,
//         pos: 0,
//         append: [Function: append],
//     find: [Function: find],
//     remove: [Function: remove],
//     length: [Function: length],
//     toString: [Function: toString],
//     insert: [Function: insert],
//     clear: [Function: clear],
//     dataStore: [] }


//判定给定值是否存在列表
function contains(element) {
    var result=this.find(element);
   if(result){
       console.log("存在元素" + element + "在第" + result + "个位置");
       return true;
   }
    console.log("没有没有");
    return false;
}

//测试contains函数
// list.contains(2);       //存在元素2在第1个位置


//遍历列表
function front() {
    this.pos=0;
}

function end() {
    this.pos=this.listSize-1;
}

function prev() {
    if(this.pos>0){
        this.pos--;
    }
}

function next() {
    if(this.pos<this.listSize-1){
        this.pos++;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(n) {
    this.pos=n;
}

function getElement() {
    return this.dataStore[this.pos];
}

//迭代器遍历的例子
// for(list.front();list.currPos()<list.length();list.next()){
//     console.log(list.getElement());
// }       //这种写法根本 停不下来好嘛 1 2 2 2 2 2 2 .........

// for(list.end();list.currPos()>=0;list.prev()){
//     console.log(list.getElement());
// }       //这种写法根本 停不下来好嘛 2 1 1 1 1 1 1 1 .........


// for(list.front();list.currPos()<list.length();list.next()){
//        console.log(list.getElement());
// }       //这种写法根本 停不下来好嘛 1 2 2 2 2 2 2 .........