/*
1. O(n)
2. O(log(n))
3. O(1)
4. O(n^3)
5. O(n)
6. O(log(n))
7. O(n * log(n))
8. O(2^n)
9. O(1)
10. O(n2)
*/

//1 O(n)
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

//2 O(1)
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

//3 O(n)
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

//4 O(log(n))
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

//5 O(n^2)
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
