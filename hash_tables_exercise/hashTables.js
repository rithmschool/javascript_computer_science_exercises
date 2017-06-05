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


HashTable.prototype.set = function(key, val){
  var hashKey = this._hash(key);
  if(!this.keyMap[hashKey]){
    this.keyMap[hashKey] = [{'key': key, 'value': val}];
  } else {
    this.keyMap[hashKey].push({'key': key, 'value': val});
  }
  
}

HashTable.prototype.get = function(key){
  var hashKey = this._hash(key);
  return this.keyMap[hashKey][0].value;
}

HashTable.prototype.containsKey = function(key){
  var hashKey = this._hash(key);
  if(this.keyMap[hashKey]){
    return true;
  } else {
    return false;
  }
}

HashTable.prototype.remove = function(key){
  var hashKey = this._hash(key);
  this.keyMap[hashKey] = undefined;
}

HashTable.prototype.keys = function(){
  var keyArray = [];
  for(var i = 0; i < this.keyMap.length; i++){
    if(this.keyMap[i]){
      for(var j = 0; j < this.keyMap[i].length; j++){
        keyArray.push(this.keyMap[i][j].key)
      }
    }
  }
  return keyArray;
}

HashTable.prototype.values = function(){
  var keyArray = [];
  for(var i = 0; i < this.keyMap.length; i++){
    if(this.keyMap[i]){
      for(var j = 0; j < this.keyMap[i].length; j++){
        keyArray.push(this.keyMap[i][j].value)
      }
    }
  }
  return keyArray;
}


function Node(key, value){
  this.key = key;
  this.value = value;
  this.next = null;
}

HashTable.prototype.setSeparateChaining = function(key, value){
  var hashKey = this._hash(key);
  var node = new Node(key, value);
  console.log(node);
  if(!this.keyMap[hashKey]){
    this.keyMap[hashKey] = node;
  } else {
    var curr = this.keyMap[hashKey];
    while(curr.next !== null){
      curr=curr.next;
    }
    curr.next = node;
  }
}

HashTable.prototype.getSeparateChaining = function(key){
  var hashKey = this._hash(key);
  if(this.keyMap[hashKey]){
    var curr = this.keyMap[hashKey];
    while(curr !== null){
      if(curr.key === key){
        return curr.value;
      }
      curr=curr.next
    }
  }
  return false;
}

HashTable.prototype.setLinearProbing = function(key, val){
  var hashKey = this._hash(key);
  if(!this.keyMap[hashKey]){
    this.keyMap[hashKey] = [{'key': key, 'value': val}];
  } else {
    this.keyMap[hashKey].push({'key': key, 'value': val});
  }
  
}

HashTable.prototype.getLinearProbing = function(key){
  var hashKey = this._hash(key);
  if(this.keyMap[hashKey]){
    for(var i = 0; this.keyMap[hashKey].length; i++){
      if(this.keyMap[hashKey][i].key == key){
        return this.keyMap[hashKey][i].value;
      }
    }
  }
  return false;
}




