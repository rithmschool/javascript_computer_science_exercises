# Singly Linked List Exercise

For this exercise you must get the tests to pass.

### Part I 

Given the following constructor functions:

```js
function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
```

Implement the following on the `SinglyLinkedList.prototype`

### push

This function should add a node to the end of the SinglyLinkedList. It should return the list so that the method can be chained.

### pop

This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.

### unshift

This function should add a node to the beginning of the SinglyLinkedList. It should return the list so that the method can be chained.

### shift

This function should remove a node at the beginning of the SinglyLinkedList. It should return the node removed.

### set

This function should update the value of a node at a given index of the SinglyLinkedList. It should return true if the node is updated successfully, or false if an invalid index is passed in.

### _get

This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

### _insert

This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return the new length of the SinglyLinkedList.

### remove

This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node.

### reverse

This function should reverse all of the nodes in a SinglyLinkedList. It should return the reversed SinglyLinkedList.
