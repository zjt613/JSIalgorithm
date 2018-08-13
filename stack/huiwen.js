var Stack=require('./stack');

function huiwen(word) {
    var stack=new Stack();
    for(i=0;i<word.length;i++){
        stack.push(word[i]);
    }
    var rword='';
    while(stack.length()>0){
        rword+=stack.pop();
    }
    if(word===rword){
        return true;
    }else{
        return false;
    }
}

var word='ofo';
console.log(huiwen(word));