# Queues Exercise

For this exercise you must get the tests to pass.

#### Part I 

- Write a constructor function for a `Queue`
    - it should have a size property initialized to 0   
    - it should have a first property initialized to `null`
    - it should have a last property initialized to `null`   
- Write a constructor function for a `Node`
    - it should have a value property which is assigned to a value passed as a parameter to the constructor function
    - it should have a next property initialized to `null`    


Implement the following methods on the `Queue.prototype`

### enque

This function adds the value to the end of the queue. This should be an O(1) operation and return the size of the queue.

### dequeue

This function removes the value at the beginning of the queue. This should be an O(1) operation and return the value removed.

### peek

This function returns the first value in the queue.

### print

This function console.log's all the values in the queue.

#### Part II 

* Given a doubly linked list, implement a queue
* Implement a stack using 2 queues
* Implement a queue using 2 stacks
* [Evaluate a postfix notation expression](https://www.codewars.com/kata/evaluate-a-postfix-expression)
