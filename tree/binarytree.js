//节点
function Node(data,left,right) {
    this.data=data;
    this.left=left;
    this.right=right;
    this.show=show;
}

function show() {
    return this.data;
}

function BST() {
    this.root=null;
    this.insert=insert;
    this.inOrder=inOrder;
}

//二叉树插入函数
function insert(data) {
    //插入元素节点化
    var n=new Node(data,null,null);
    //如果根节点是null的话，设根节点为当前插入节点
    if(this.root==null){
        this.root=n;
    }
    else{
        //把根节点赋值给当前节点
        var current=this.root;
        //父节点
        var parent;
        while (true){
            //把当前节点赋值给父节点
            parent=current;
            //如果插入的节点数据小于当前节点数据的话，设新的当前节点为原节点的左节点
            if(data<current.data){
                current=current.left;
                //如果当前节点的左节点为null，那么新节点插入这个位置，退出循环
                if(current==null){
                    parent.left=n;
                    break;
                }
            }else {
                //否则，设当前节点为原节点的右节点
                current=current.right;
                //如果当前节点的右节点为null，呢么新节点插入这个位置，退出循环
                if(current==null){
                    parent.right=n;
                    break;
                }
            }
        }
    }
}

//中序遍历

function inOrder(node) {
    if(!(node==null)){
        inOrder(node.left);
        console.log(node.show()+" ");
        inOrder(node.right);
    }
}

module.exports=BST;