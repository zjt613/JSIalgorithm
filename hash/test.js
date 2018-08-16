var HashTable=require('./hashtable');
var ht=new HashTable();
var testArr=['A','C','B','b','a','c','ab','AB','ad','da'];
for(var i=0;i<testArr.length;i++){
    ht.put(testArr[i]);
}
ht.showDistro();

// 重新构建的索引：0 散列值:58 键值:ab
// 重新构建的索引：1 散列值:65 键值:A
// 重新构建的索引：2 散列值:66 键值:B
// 重新构建的索引：3 散列值:67 键值:C
// 重新构建的索引：4 散列值:97 键值:a
// 重新构建的索引：5 散列值:98 键值:b
// 重新构建的索引：6 散列值:99 键值:c
// 重新构建的索引：7 散列值:131 键值:AB
