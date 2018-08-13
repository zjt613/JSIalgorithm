function Node(element) {
    this.element=element;
    this.prev=null;
    this.next=null;
}

function DoubleLinkedList() {
    this.head=new Node("head");
    this.find=find;
    this.insert=insert;
    this.findLast=findLast;
    this.remove=remove;
    this.display=display;
    this.dispReverse=dispReverse;
}

function find(item) {
    var currNode=this.head;
    while(currNode.element!==item){
        currNode=currNode.next;
    }
    return currNode;
}

function findLast() {
    var currNode=this.head;
    while(!(currNode.next==null)){
        currNode=currNode.next;
    }
    return currNode;
}
function dispReverse() {
    var currNode=this.head;
    currNode=this.findLast();
    while(!(currNode.prev==null)){
        console.log(currNode.element);
        currNode=currNode.prev;
    }
}

function remove(item) {
    var currNode=this.find(item);
    if(!(currNode.next==null)){
        currNode.prev.next=currNode.next;
        currNode.next.prev=currNode.prev;
        currNode.next=null;
        currNode.prev=null;
    }
}

function display() {
    var currNode=this.head;
    while(!(currNode.next==null)){
        console.log(currNode.next.element);
        currNode=currNode.next;
    }
}

function insert(newElement,item) {
    var newNode=new Node(newElement);
    var current=this.find(item);
    newNode.next=current.next;
    newNode.prev=current;
    current.next=newNode;
}

var cities=new DoubleLinkedList();
cities.insert("Hangzhou","head");
cities.insert("BeiJing","Hangzhou");
cities.insert("ShangHai","BeiJing");
cities.insert("GuangZhou","ShangHai");
cities.display();
cities.remove("ShangHai");
console.log("移除上海后");
cities.display();
console.log(cities);
//
// DoubleLinkedList {
//     head:
//         Node {
//         element: 'head',
//             prev: null,
//             next: Node { element: 'Hangzhou', prev: [Circular], next: [Node] } },
//     find: [Function: find],
//     insert: [Function: insert],
//     findLast: [Function: findLast],
//     remove: [Function: remove],
//     display: [Function: display],
//     dispReverse: [Function: dispReverse] }