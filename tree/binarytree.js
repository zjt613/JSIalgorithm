//节点
function Node(data,left,right) {
    this.data=data;
    this.count=1;
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
    //中序遍历
    this.inOrder=inOrder;
    //先序遍历
    this.preOrder=preOrder;
    //后序遍历
    this.nextOrder=nextOrder;
    //最小值
    this.getMin=getMin;
    //最大值
    this.getMax=getMax;
    //查找给定值
    this.find=find;
    this.remove=remove;
    this.removeNode=removeNode;
    this.getRightSmallest=getRightSmallest;
    this.update=update;
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

function preOrder(node){
    if(!(node==null)){
        console.log(node.show()+" ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function nextOrder(node){
    if(!(node==null)){
        nextOrder(node.left);
        nextOrder(node.right);
        console.log(node.show()+" ");
    }
}

function getMin(){
    var current=this.root;
    while(!(current.left==null)){
        current=current.left;
    }
    return current.data;
}

function getMax(){
    var current=this.root;
    while(!(current.right==null)){
        current=current.right;
    }
    return current.data;
}

function find(data){
    var current=this.root;
    while(current!=null){
        if(current.data===data){
            return current.data;
        }
        else if(data<current.data){
            current=current.left;
        }
        else{
            current=current.right;
        }
    }
    return null;
}

function getRightSmallest(node) {
    var current=node;
    while(!(current.left==null)){
        current=current.left;
    }
    return current.data;
}

function removeNode(node,data){
    if(node==null){
        return null;
    }
    if(data===node.data){
        //没有子节点的节点
        if(node.left==null&&node.right==null){
            return null;
        }
        //没有左子节点的节点
        if(node.left==null){
            return node.right;
        }
        //没有右子节点
        if(node.right==null){
            return node.left;
        }
        //有两个子节点的节点
        var tempNode=getRightSmallest(node.right);
        node.data=tempNode.data;
        node.right=removeNode(node.right,tempNode.data);
        return node;

    }else if(data<node.data){
        node.left=removeNode(node.left,data);
        return node;
    }else{
        node.right=removeNode(node.right,data);
        return node;
    }
}

function remove(data){
    this.root=removeNode(this.root,data);
}

function update(data){
    var grade=this.find(data);
    grade.count++;
    return grade;
}




module.exports=BST;