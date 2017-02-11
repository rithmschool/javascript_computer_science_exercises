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

Implement the following functions on the `BinarySearchTree.prototype`

#### insertIteratively

This function should insert a node in a binary tree. This should be solved using iteration.

#### insertRecursively

This function should insert a node in a binary tree. This should be solved using recursion.

#### findIteratively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using iteration. The tests for this method assume that insertIteratively has been implemented correctly.

#### findRecursively

This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using recursion. The tests for this method assume that insertIteratively has been implemented correctly.

#### toArray

This function should convert a binary search tree into an array of nodes from smallest to largest. The tests for this method assume that insertIteratively has been implemented correctly.

### Part II

Implement the following functions on the `BinarySearchTree.prototype`

#### DFSPreOrder

This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.

#### DFSInOrder

This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.

#### DFSPostOrder

This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.

#### BreadthFirstSearch

This function should search through each node in the binary search tree using breadth first search and return an array containing each node's value.

### Part III

Implement the following function on the `BinarySearchTree.prototype`

#### remove

This function should remove a node from a binary search tree. Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. The function should return the node removed.
