var HashTable=require('./hashtable');

//产生一个随机成绩
function getRadomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

function genStuData(arr) {
    for(var i=0;i<arr.length;i++){
        var num="";
        for(var j=1;j<=9;j++){
            num+=Math.floor(Math.random()*10);
        }
        num+=getRadomInt(50,100);
        arr[i]=num;
    }
}

var numStu=10;
var arrSize=97;
var idLen=9;

var stu=new Array(numStu);
genStuData(stu);
console.log("Student data:\n");
for(var i=0;i<stu.length;i++){
    console.log(stu[i].substring(0, 8) + " " + stu[i].substring(9));
    console.log(stu[i]);
}
console.log("\n\n Data distribution: \n");
var hTable=new HashTable();
for(var i=0;i<stu.length;i++){
    hTable.put(stu[i]);
}
hTable.showDistro();
// Student data:
//
// 80307329 78
// 04777157 87
// 05075679 78
// 56499573 56
// 05748600 65
// 93515628 70
// 65766059 80
// 94584236 51
// 15206473 53
// 40931358 53
//
//
// Data distribution:
//
//     Hash value: 80307329078->275702726295973000
// Hash value: 04777157187->237768612583600770
// Hash value: 05075679078->237873982186333600
// Hash value: 56499573756->262061115763055140
// Hash value: 05748600065->237898292430483840
// Hash value: 93515628470->280908310855094900
// Hash value: 65766059680->266749982991063600
// Hash value: 94584236851->281038934276705950
// Hash value: 15206473053->242688929421253860
// Hash value: 40931358953->256489733089882140
// 重新构建的索引：0 散列值:4 键值:15206473053
// 重新构建的索引：1 散列值:8 键值:56499573756
// 重新构建的索引：2 散列值:38 键值:94584236851
// 重新构建的索引：3 散列值:50 键值:40931358953
// 重新构建的索引：4 散列值:51 键值:80307329078
// 重新构建的索引：5 散列值:82 键值:65766059680
// 重新构建的索引：6 散列值:88 键值:05748600065
// 重新构建的索引：7 散列值:89 键值:05075679078
// 重新构建的索引：8 散列值:104 键值:04777157187