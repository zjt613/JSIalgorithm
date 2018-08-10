//这个是reduce()方法的 累加案例

function add(pre,next) {
    return pre+next;
}

var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.reduce(add));       //55

function concat(a,b) {
    return a+' '+b;
}

var arr2=['ataola','is','me'];
console.log(arr2.reduce(concat)); //ataola is me
console.log(arr2.reduceRight(concat)); //me is ataola
