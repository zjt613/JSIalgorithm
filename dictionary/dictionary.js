function Dictionary() {
    this.dataStore=new Array();
    this.add=add;
    this.find=find;
    this.remove=remove;
    this.showAll=showAll;
    this.showAllR=showAllR;
    this.count=count;
    this.clear=clear;
}

function add(key,value) {
    this.dataStore[key]=value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

// function showAll() {
//     for(var key in Object.keys(this.dataStore).sort()){
//         console.log(key + "->" + this.dataStore[key]);
//     }
// }

function showAll() {
    for(var key in Object.keys(this.dataStore).sort()){     //这个sort（）感觉没什么卵用
        console.log(Object.keys(this.dataStore)[key]+ "->" + this.dataStore[Object.keys(this.dataStore)[key]]);
    }
}

function showAllR() {
    for(var key in this.dataStore){
        console.log(key + "->" + this.dataStore[key]);
    }
}

//思考下为什么不用length
function count() {
    var n=0;
    for(var key in Object.keys(this.dataStore)){
        n++;
    }
    return n;
}

function clear() {
    // foreach(var key in Object.keys(this.dataStore)){
    //     delete this.dataStore[key];
    // }
    delete this.dataStore;
    this.dataStore=new Array();
}

var person=new Dictionary();
person.add('test','test');
person.add('name',"ataola");
person.add("sex","男");
person.add("age","21");
person.showAll();
console.log("注意看前后变化");
person.showAllR();

//答案是这个卧槽
// 0->undefined
// 1->undefined
// 2->undefined

console.log(person);
// Dictionary {
//     dataStore: [ name: 'ataola', sex: '男', age: '21' ],
//     add: [Function: add],
//     find: [Function: find],
//     remove: [Function: remove],
//     showAll: [Function: showAll] }

console.log(person.count());    //3

person.clear();
person.showAllR();
console.log(person.count());//0

