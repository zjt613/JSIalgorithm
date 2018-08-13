var Stack=require('./stack');

function digui(n) {
    var stack=new Stack();
    while(n>0){
        stack.push(n--);
    }

    var product=1;
    while(stack.length()>0){
        product*=stack.pop();
    }
    return product;
}

console.log(digui(5));      //120

