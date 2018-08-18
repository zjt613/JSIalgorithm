var BST=require('./binarytree');
var bst=new BST();

//这里想一棵中序二叉树出来
bst.insert(2);
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(3);
// bst.inOrder(bst.root);      //1 2 2 3 3 4 5   管你怎么插入它的答案是不变的
// bst.preOrder(bst.root);     // 2 1 2 3 4 3 5
// bst.nextOrder(bst.root);     //  1 3 5 4 3 2 2

// console.log("最大值：" + bst.getMax());
// console.log("最小值：" + bst.getMin());

// console.log(bst.find(2));       //2
// console.log(bst.find(5));       //5
// console.log(bst.find(10));      //null

bst.remove(5);
// bst.inOrder(bst.root);      //1  2 2 3 3 4
// bst.preOrder(bst.root);    //2 1 2 3 4 3
// bst.nextOrder(bst.root);  // 1 3 4 3 2 2

