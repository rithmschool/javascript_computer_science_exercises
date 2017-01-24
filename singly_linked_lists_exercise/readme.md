# Singly Linked List Exercise

For this exercise you must get the tests to pass.

### Part I 

Given the following constructor functions:

```js
function Node(val){
    this.val = val
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
```

Implement the following on the `SinglyLinkedList.prototype`

### push

This function should add a node to the end of the SinglyLinkedList. It should return the new length of the list.

### pop

This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.

### unshift

This function should add a node to the beginning of the SinglyLinkedList. It should return the new length of the list.

### shift

This function should remove a node at the beginning of the SinglyLinkedList. It should return the node removed.

### set

This function should insert a node at the beginning of the SinglyLinkedList. It should return the node removed.

### _get

This internal/helper function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

### _insert

This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return the new length of the SinglyLinkedList.

### toString

This function should convert the SinglyLinkedList into a string

### remove

This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node.

### reverse

This function should reverse all of the nodes in a SinglyLinkedList. It should return the reversed SinglyLinkedList.
