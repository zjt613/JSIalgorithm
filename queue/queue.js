function Queue() {
    this.dataStore=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.front=front;
    this.back=back;
    this.toString=toString;
    this.empty=empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr='';
    for(var i=0;i<this.dataStore.length;i++){
        retStr+=this.dataStore[i]+'\n';
    }
    return retStr;
}

function empty() {
    if(this.dataStore.length===0){
        return true;
    }else{
        return false;
    }
}
//
// var queue=new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue.toString());
// queue.dequeue();
// console.log(queue.toString());
// console.log(queue.front());
// console.log(queue.back());
module.exports=Queue;


