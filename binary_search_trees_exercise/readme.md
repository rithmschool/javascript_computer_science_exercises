# Recursion Exercise

## Getting started

For this exercise you **MUST** use recursion to solve these problems. Some of them can be done without, but it is essential that you practice recursion and make the tests pass. 

- Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

```javascript
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
```

- Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

```javascript
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}

contains(nestedObject, 44) // true
contains(nestedObject, "foo") // false
```

Complete the following CodeWars problems:

- [https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript](https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript)
- [https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript](https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript)
- [https://www.codewars.com/kata/recursive-replication](https://www.codewars.com/kata/recursive-replication)

**BONUS**

- Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

```javascript
search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1
```

- Refactor your search function to use a faster algorithm called binary search [https://www.youtube.com/watch?v=JQhciTuD3E8](https://www.youtube.com/watch?v=JQhciTuD3E8). 

```javascript
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],15) // -1
```

- Write a function called `stringifyNumbers` which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

```javascript
var obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
stringifyNumbers()
/*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/
```

Complete [this](https://www.codewars.com/kata/mutual-recursion/train/javascript) codewars problem! 