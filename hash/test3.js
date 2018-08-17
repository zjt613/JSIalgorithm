var HashTable=require('./hashtable');

var ht=new HashTable();
var arr1=['zhangsan','lisi','wanger','mazi'];
var arr2=[19970601,19970602,19970603,19970604];
for(var i=0;i<4;i++){
    ht.put(arr1[i],arr2[i]);
}
// console.log(ht);
for(var i=0;i<4;i++){
    console.log(arr1[i]+"'s birth is "+ht.get(arr1[i]));
}
