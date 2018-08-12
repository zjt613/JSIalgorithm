// 'use strict';
function Point(x,y) {
    this.x=x;
    this.y=y;
    // this.getX=function () {
    //     console.log(this.x);
    // };
    // this.getY=function () {
    //     console.log(this.y);
    // };
    return this;
}

function displayP(arr) {
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].x+":"+arr[i].y);
    }
}

var p1=new Point(1,2);     //这里new 不 new 好像关系也不是特别大, 但是肯定是有区别的 就是如果你在严格模式下你是取不到x和y的值的，undefined直接报错，非严格下this是window对象
var p2=new Point(2,3);
var p3=new Point(3,4);
var p4=new Point(4,5);

var points=[p1,p2,p3,p4];
for(var i=0;i<points.length;i++){
    console.log("Point "+i+"的横纵坐标："+points[i].x+","+points[i].y);
}

// console.log(p1);        //Point { x: 1, y: 2, getX: [Function], getY: [Function] }
// console.log(p1.getX()+p1.getY()); // 1 换行 2 换行 NaN  很奇怪为什么会有NaN
// console.log(p1.x+":"+p1.y); // 1:2

var p5=new Point(520,613);
points.push(p5);
console.log("After Push");
displayP(points);       //打印出来的结果如下：原因就是没用new的结果，引用了四次内存地址

// 1:2
// 520:613
// 520:613
// 520:613
// 520:613

points.shift();
console.log("After Shift");
displayP(points);