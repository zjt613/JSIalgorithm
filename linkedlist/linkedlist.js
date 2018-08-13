//设计一个基于对象的链表
//节点
function Node(element) {
    this.element=element;
    this.next=null;
}
//提供链表操作
function LinkedList() {
    this.head=new Node("head");
    this.find=find;
    this.insert=insert;
    this.findPrevious=findPrevious;
    this.remove=remove;
    this.display=display;
}

 function find(item) {
     var currNode=this.head;
     while(currNode.element!==item){
         currNode=currNode.next;
     }
     return currNode;
 }

 function insert(newElement,item) {
     var newNode=new Node(newElement);
     var current=this.find(item);
     newNode.next=current.next;
     current.next=newNode;
 }

 function display() {
     var currNode=this.head;
     while(!(currNode.next==null)){
         console.log(currNode.next.element);
         currNode=currNode.next;
     }
 }

 var cities=new LinkedList();
cities.insert("Hangzhou","head");
cities.insert("BeiJing","Hangzhou");
cities.insert("ShangHai","BeiJing");
cities.insert("GuangZhou","ShangHai");
cities.display();
// console.log(cities);
//
// LinkedList {
//     head:
//         Node {
//         element: 'head',
//             next: Node { element: 'Hangzhou', next: [Node] } },
//     find: [Function: find],
//     insert: [Function: insert],
//     display: [Function: display] }

function findPrevious(item) {
    var currNode=this.head;
    while(!(currNode.next==null)&&(currNode.next.element!==item)){
        currNode=currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode=this.findPrevious(item);
    if(!(prevNode.next==null)){
        prevNode.next=prevNode.next.next;
    }
}

cities.remove("BeiJing");
console.log("移除北京后：");
cities.display();
