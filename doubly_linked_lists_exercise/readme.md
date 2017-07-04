# Doubly Linked List Exercise

For this exercise you must get the tests to pass.

### Part I 

Given the following constructor functions:

```js
function Node(val){
    this.val = val;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}
```

Implement the following on the `DoublyLinkedList.prototype`

### push

This function should add a node to the end of the DoublyLinkedList. It should return the new the list so that the method can be chained.

### pop

This function should remove a node at the end of the DoublyLinkedList. It should return the node removed.

### unshift

This function should add a node to the beginning of the DoublyLinkedList. It should return the list so that the method can be chained.

### shift

This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.

### set

This function should find a node and replace its val or return undefined if the node is not found.

### _get

This internal/helper function should find a node at a specified index in a DoublyLinkedList. It should return the found node.

### _insert

This internal/helper function should insert a node at a specified index in a DoublyLinkedList. It should return the new length of the DoublyLinkedList.

### remove

This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node.

### reverse

This function should reverse all of the nodes in a DoublyLinkedList. It should return the reversed DoublyLinkedList.

### Part II

Complete the following codewars problems

* [Linked Lists - Push & BuildOneTwoThree](http://www.codewars.com/kata/linked-lists-push-and-buildonetwothree)
* [Linked Lists - Get Nth Node](https://www.codewars.com/kata/linked-lists-get-nth-node/train/javascript)
* [Linked Lists - Length & Count](http://www.codewars.com/kata/linked-lists-length-and-count)
* [Linked Lists - Sorted Insert](http://www.codewars.com/kata/linked-lists-sorted-insert)
* [Doubly Linked Lists - Remove](https://www.codewars.com/kata/doubly-linked-list-remove)
