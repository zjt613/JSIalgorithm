function WeekTemps() {
    this.dataStore=[];
    this.add=add;
    this.average=average;
}
function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    var total=0;
    for(var i=0;i<this.dataStore.length;i++){
        total+=this.dataStore[i];
    }
    return total/this.dataStore.length;
}

var week=new WeekTemps();
week.add(10);
week.add(20);
week.add(30);
week.add(40);
week.add(50);
week.add(60);
week.add(70);
console.log(week.average());