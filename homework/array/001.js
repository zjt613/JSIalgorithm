// 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。

function StudentScore() {
    this.score=[];
    this.add=add;
    this.average=average;
}

function add(temp) {
    this.score.push(temp);
}

function average() {
    var total=0;
    for(var i=0;i<this.score.length;i++){
        total+=this.score[i];
    }
    return total/this.score.length;
}

var stu1=new StudentScore();
stu1.add(100);
stu1.add(60);
stu1.add(80);
stu1.add(77);
stu1.add(63);
console.log("这位选手的平均分是："+stu1.average());