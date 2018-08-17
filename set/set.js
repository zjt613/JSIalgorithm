function Set() {
    this.dataStore=[];
    this.add=add;
    this.remove=remove;
    this.size=size;
    this.contain=contain;
    this.union=union;       //并集
    this.intersect=intersect;       //交集
    this.subset=subset;
    this.difference=difference;     //补集
    this.show=show;
}

function add(data) {
    if(this.dataStore.indexOf(data)<0){
        this.dataStore.push(data);
        return true;
    }
    else{
        return false;
    }
}

function remove(data) {
    var pos=this.dataStore.indexOf(data);
    if(pos>-1){
        this.dataStore.splice(pos,1);
        return true;
    }else{
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contain(data){
    if(this.dataStore.indexOf(data)>-1){
        return true;
    }else{
        return false;
    }
}

function union(set){
    var tempSet=new Set();
    for(var i=0;i<this.dataStore.length;i++){
        tempSet.add(this.dataStore[i]);
    }
    for(var i=0;i<set.dataStore.length;i++){
        if(!tempSet.contain(set.dataStore[i])){
            tempSet.add(set.dataStore[i]);
        }
    }

    return tempSet;
}

function intersect(set){
    var tempSet=new Set();
    for(var i=0;i<set.dataStore.length;i++){
        if(this.contain(set.dataStore[i])){
            tempSet.add(set.dataStore[i])
        }
    }
    return tempSet;
}

function size(){
    return this.dataStore.length;
}

function subset(set){
    if(this.size()>set.size()){
        return false;
    }
    else{
        this.dataStore.forEach(function (element) {
            if(!set.contain(element)){
                return false;
            }
        })
    }
    return true;
}

function difference(set){
    var tempSet=new Set();
    for(var i=0;i<this.dataStore.length;i++){
        if(!set.contain(this.dataStore[i])){
            tempSet.add(this.dataStore[i])
        }
    }
    return tempSet;
}


module.exports=Set;