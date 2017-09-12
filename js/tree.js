/**
 * Created by alikomarhan on 2017/9/10.
 */
function BinaryTree() {

    //Class Node init
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };
    //init root Node
    var root = null;

    //enter
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    //中序遍历(顺序排序)LDR
    var LDR_Node = function (node, cb) {
        if (node !== null) {
            LDR_Node(node.left, cb);
            cb(node.key);
            LDR_Node(node.right, cb);
        }
    };
    this.LDR = function (cb) {
        cb('--LDR---');
        LDR_Node(root, cb);
        cb('------');
    };

    //前序遍历(复制二叉树)DLR
    var DLR_Node = function (node, cb) {
        if (node !== null) {
            cb(node.key);
            DLR_Node(node.left, cb);
            DLR_Node(node.right, cb);
        }
    };
    this.DLR = function (cb) {
        cb('---DLR---');
        DLR_Node(root, cb);
        cb('------');
    };

    //后序遍历RLD
    var RLD_Node = function (node, cb) {
        if (node !== null) {
            cb(node.key);
            RLD_Node(node.left, cb);
            RLD_Node(node.right, cb);
        }
    };
    this.RLD = function (cb) {
        cb('---RLD---');
        RLD_Node(root, cb);
        cb('------');
    };

    //search node

    var findNode = function (mode, node) {
        if (node && mode == "min") {
            while (node && node.left !== null) {
                node = node.left;
            }
            console.log(node.key);
            return node.key;
        } else if (node && mode == "max") {
            while (node && node.right !== null) {
                node = node.right;
            }
            console.log(node.key);
            return node.key;
        }

        return null;
    };

    this.min = function () {
        return findNode('min', root)
    };

    this.max = function () {
        return findNode('max', root)
    };

    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        } else if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    this.search = function (key) {
        return searchNode(root, key);
    };

    //Delete Node
    var deleteNode = function (node, key) {
        if (key < node.key) {
            deleteNode(node.left, key);
        } else if (key > node.key) {
            deleteNode(node.right, key);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            }
            if(node.left === null){
                node = node.right;
            }
            if(node.right === null){
                node = node.left;
            }
        }

    };

    this.delete = function (key) {
        if(binariTree.search(key)){
            console.log('Find');
            deleteNode(root, key);
        }
    }
}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binariTree = new BinaryTree();

nodes.forEach(function (key) {
    binariTree.insert(key);
});

//init print function
var print = function (key) {
    console.log(key);
};

/*-----------------
 -----注入--并启动-----
 ------------------*/

// binariTree.LDR(print);
// binariTree.DLR(print);
// binariTree.RLD(print);
// binariTree.min();
// binariTree.max();
// console.log(binariTree.search(1000) ? 'Have' : 'Not');
binariTree.delete(10);
binariTree.RLD(print);

