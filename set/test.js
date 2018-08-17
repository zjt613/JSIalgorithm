var Set = require('./set');
var set = new Set();

set.add('ataola');
set.add('jiangtao');
set.add('zhengshuaishuai');
console.log(set.show());
if(set.add('ataola')){
    console.log("ataola添加成功！");
}else{
    console.log("ataola已经有了,不知道集合是互斥的啊！23333");
}
if(set.remove('zhengshuaishuai')){
    console.log('zhengshuaishuai 已删除！');
}else{
    console.log('没添加删个球啊！');
}
console.log(set.show());
var setunion=new Set();
setunion.add(1);
setunion.add(2);
setunion.add(3);
setunion.add('ataola');
console.log(set.union(setunion).show());    //[ 'ataola', 'jiangtao', 1, 2, 3 ]

console.log(set.intersect(setunion).show());        //[ 'ataola' ]

var setsubset=set.intersect(setunion);
console.log(setsubset.subset(set));     //ture;
console.log(set.difference(setsubset).show());     // ['jiangtao' ]



