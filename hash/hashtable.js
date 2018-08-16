//散列表
function HashTable() {
    this.table = new Array(137);        //实验得到137 不易产生碰撞
    this.simpleHash = simpleHash;
    this.betterHash=betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    //开链法
    this.buildChains=buildChains;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + "->" + total);
    return total % this.table.length;
}
function betterHash(data) {
    var N=37;
    var total=0;
    for(var i=0;i<data.length;i++){
        total=total*N+data.charCodeAt(i);
    }
    // console.log("Hash value: " + data + "->" + total);
    return total%this.table.length;
}

function put(key,data) {
    // var pos = this.simpleHash(data);
    var pos = this.betterHash(key);
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log("重新构建的索引："+n + " 散列值:"+i+" 键值:"+ this.table[i]);
            n++;
        }
    }
}
function get(key){
    return this.table[this.betterHash(key)];
}

//开链法
function buildChains(){
    for(var i=0;i<this.table.length;i++){
        this.table[i]=new Array();
    }
}


module.exports=HashTable;