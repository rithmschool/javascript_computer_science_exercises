# Hash Tables Exercise

## Getting started

For this exercise your goal is to make the tests pass.pass. 

### Part I

Given the following constructor functions and hashing function:

```js
function HashTable(length=59, largePrime=122611){
    this.arr = Array(length);
    this.prime = largePrime;
    this.values = [];
}

HashTable.prototype._hash(){

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

