function Stack() {
    this.dataStore=[];
    this.top=0;
    this.push=push;
    this.pop=pop;
    this.peek=peek;
    this.clear=clear;
    this.length=length;
}

function push(element) {
    this.dataStore[this.top++]=element;
}

//测试push()
// var stack=new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack);//Stack { dataStore: [ 1, 2 ], top: 2, push: [Function: push] }

function pop() {
    return this.dataStore[--this.top];
}

//测试pop()
// console.log(stack.pop());
// console.log(stack);

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

// console.log(stack.length());

function clear() {
    this.top=0;
}

module.exports=Stack;