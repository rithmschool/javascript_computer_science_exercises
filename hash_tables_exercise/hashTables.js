function HashTable(size=53) {
  this.keyMap = new Array(size);
}


// Large prime number
HashTable.prototype.RANDOM_VAL = 18539;

HashTable.prototype.__hash = function(key) {
  var hashFunction = (numericKey, multiple, size) => {
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

HashTable.prototype.set = function(key, val) {
  var index = this.__hash(key);

  if (!this.keyMap[index]) {
    this.keyMap[index] = [];
  }
  this.keyMap[index].push([key, val]);
}

HashTable.prototype.get = function(key) {
  var keyVal = this.__keyExists(key);
  if (keyVal) {
    return keyVal[1];
  }
  return undefined;
}

HashTable.prototype.containsKey = function(key) {
  var keyVal = this.__keyExists(key);
  return keyVal ? true : false
}

HashTable.prototype.__keyExists = function(key) {
  var index = this.__hash(key);

  if (this.keyMap[index]) {
    for (var i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i];
      }
    }
  }
  return false;
}

HashTable.prototype.remove = function(key) {
  var keyVal = this.__keyExists(key);
  return keyVal ? true : false
}

HashTable.prototype.keys = function(key) {
  var keyArr = [];

  for (var i = 0; i < this.keyMap.length; i++) {
    if (this.keyMap[i]) {
      for(var j =0; j < this.keyMap[i].length; j++){
        if(!keyArr.includes(this.keyMap[i][j][0])){
          keyArr.push(this.keyMap[i][j][0])
        }
      }
    }
  }
  return keyArr
}

HashTable.prototype.values = function(values) {
  var valuesArr = [];

  for (var i = 0; i < this.keyMap.length; i++) {
    if (this.keyMap[i]) {
      for(var j =0; j < this.keyMap[i].length; j++){
        if(!valuesArr.includes(this.keyMap[i][j][1])){
          valuesArr.push(this.keyMap[i][j][1])
        }
      }
    }
  }
  return valuesArr
}

HashTable.prototype.remove = function(key) {
  var keyVal = this.__keyExists(key);
  for (var i = 0; i < this.keyMap.length; i++) {
    if (this.keyMap[i] && this.keyMap[i].includes(keyVal)) {
      this.keyMap[i].splice(this.keyMap[i].indexOf(keyVal))
    }
  }
}

HashTable.prototype.setSeparateChaining = function(key, val) {
  return this.set(key,val)
}

HashTable.prototype.getSeparateChaining = function(key) {
  return this.get(key)
}

// Adding an additional nested array for this to work with the original contains key
HashTable.prototype.setLinearProbing = function(key, val) {
  var index = this.__hash(key);
  if (this.keyMap[index] == undefined) {
      this.keyMap[index] = [];
      this.keyMap[index] = [[key, val]];
  } else {
      while (this.keyMap[index] !== undefined) {
          index++;
      }
      this.keyMap[index] = [key, val];
  }
}

HashTable.prototype.getLinearProbing = function(key,value) {
  var index = this.__hash(key);
  if (index > -1) {
      for (var i = index; this.keyMap[index][0] !== undefined; i++) {
          if (this.keyMap[index][0][0] === key) {
              return this.keyMap[index][0][1];
          }
      }
  }
}
