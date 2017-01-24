# Binary Search Tree Exercise

For this exercise you must get the tests to pass.

### Part I

Given the following constructor functions

```js
function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}
```

Implement the following functions on the `BST.prototype`

#### insertIteratively

This function should insert a node in a binary tree. This should be solved using iteration.

#### insertRecursively

This function should insert a node in a binary tree. This should be solved using recursion.

#### findIteratively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using iteration.

#### findRecursively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using recursion.

#### toArray

This function should convert a binary search tree into an array of nodes from smallest to largest.

### Part II

Implement the following functions on the `BST.prototype`

#### DFSPreOrder

#### DFSInOrder

#### DFSPostOrder

#### BreadthFirstSearch

### Part III

Implement the following function on the `BST.prototype`

#### remove
