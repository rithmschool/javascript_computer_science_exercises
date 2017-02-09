# Hash Tables Exercise

## Getting started

For this exercise your goal is to make the tests pass. 

### Part I

Given the following constructor functions and prototype methods and properties:

```js
function HashTable(size=5){
    this.keyMap = new Array(size);
}
HashTable.prototype.RANDOM_VAL = 18539;

HashTable.prototype._hash = function(key) {
  var hashFunction = function(numericKey, multiple, size) {
    return (numericKey * multiple) % size;
  }

  if (Number.isFinite(key)) {
    return hashFunction(key);
  }

  if (typeof key === 'string' && !isNaN(Number(key))) {
    return hashFunction(Number(key), this.RANDOM_VAL, this.keyMap.length);
  }
  
  var tempKey = key; 
  if (key === null) {
    tempKey = "null";
  }

  if (key === undefined) {
    tempKey = "undefined";
  }

  if (isNaN(key) || !isFinite(key)) {
    tempKey = "NaN";
  }

  if (typeof tempKey === 'string') {
    var numKey = 0;
    for (var i = 0; i < tempKey.length && i < 5; i++) {
      numKey += tempKey.charCodeAt(i);
    }

    return hashFunction(numKey, this.RANDOM_VAL, this.keyMap.length)
  }
}
```

Implement the following on the `HashTable.prototype`

#### set

This function should set a value in the hashTable based on a specified key.

#### get

This function return a value in the hashTable based on a specified key.

#### containsKey

This function should return true if the key specified exists in the hash table

#### remove

This function should remove a value from the hash table

#### keys

This function should return all of the keys in the hash table

#### values

This function should return all of the values

### Part II

#### setSeparateChaining

This function should set a value in the hashTable based on a specified key. It should handle collisions using separate chaining.

#### getSeparateChaining

This function return a value in the hashTable based on a specified key. It should handle collisions using separate chaining.

#### setLinearProbing

This function should set a value in the hashTable based on a specified key. It should handle collisions using linear probing.

#### getLinearProbing

This function return a value in the hashTable based on a specified key. It should handle collisions using linear probing.

