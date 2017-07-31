# Big O Notation Exercises

### Part 1

Simplify the following big O expressions as much as possible:
constant, logarithmic, linear, quadratic, exponential

1. `O(n + 10)`          
 O(n) - (or linear time) - The runtime grows on the order of the size of 'n' or the size of the input
2. `O(100 * n)`  
 O(n) - (or linear time) - The runtime grows linear relative to the input as the input gets arbitrarily large,
3. `O(25)`  
 O(1) - (or "constant time") - An one step operation runs constant time relative to it's input. 
4. `O(n^2 + n^3)`   
 O(n^3) - ("cubic time") - represents an algorithm whose runtime is directly proportional to the third degree("cube") of the input.
5. `O(n + n + n + n)`
 O(n) - (or linear time) - The runtime grows on the order of the size of the input.

6. `O(1000 * log(n) + n)`   
 O(log(n)) (or logarithmic time) - The runtime grows linearly on the order of the size of the input. 

7. `O(1000 * n * log(n) + n)`
 O(n*log(n)) (or linearithmic time) 

8. `O(2^n + n^2)`
 O(2^n)  (or exponential time) - The runtime grows exponentially 

9. `O(5 + 3 + 1)` 
 O(1) - (or "constant time") - An one step operation runs constant time relative to it's input. 
 
10. `O(n + n^(1/2) + n^2 + n * log(n)^10)` => O(n^2) (or quadratic)

### Part 2

Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!


```js
// 1.

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
Time: O(n)  Space complexity:  O(1) //no allocation of new variables/additional space,

// 2. 

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
Time: O(n)  Space complexity:  O(1) //no new variables
// 3. 

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// 4.

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
Time: O(n)  Space complexity:  O(1) 
// 5. 

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
```
