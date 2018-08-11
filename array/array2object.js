function Point(x,y) {
    this.x=x;
    this.y=y;
}
Point.prototype.getX=function(x){
    return x;
};
Point.prototype.getY=function(y){
    return y;
}

function displayP(arr) {
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].x+":"+arr[i].y);
    }
}

var p1=Point(1,2);
var p2=Point(2,3);
var p3=Point(3,4);
var p4=Point(4,5);

// var points=[p1,p2,p3,p4];
// for(var i=0;i<points.length;i++){
//     console.log("Point "+i+"的横纵坐标："+points[i].getX()+","+points[i].getY());
// }
console.log(p1.getX());

//先放这里 暂时还不知道哪里错了