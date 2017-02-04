function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(comparator=null) {
  this.root = null;
  this.comparator = comparator;
  this.compare = function(left, right) {
    if (this.comparator !== null) {
      return this.comparator(left, right);
    }

    if (left < right) {
      return -1;
    } else if (right < left) {
      return 1;
    } else {
      return 0;
    }
  }
}

BinarySearchTree.prototype.toString = function() {
  return this.print();
}

BinarySearchTree.prototype.print = function(node=this.root, indentation=0) {
  if (!node) {
    return " ";
  }

  var valueStr;
  if (node.value === null) {
    valueStr = "null";
  } else if (node.value === undefined) {
    valueStr = "undefined";
  } else {
    valueStr = node.value.toString();
  }

  var str = new Array(indentation + 1).join("  ") + valueStr + "\n";
  str += this.print(node.right, indentation + 1);
  str += this.print(node.left, indentation + 1);

  return str;
}

BinarySearchTree.prototype.insertIteratively = function(value) {
  if (this.root === null ) {
    this.root = new Node(value);
    return this;
  }
  else {
    var current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null ) {
          current.left = new Node(value);
          return this;
        }
        else {
          current = current.left;
        }
      }
      else if (value > current.value) {
        if (current.right === null ) {
          current.right = new Node(value);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
}

BinarySearchTree.prototype.insertRecursively = function(value) {
  if (this.root === null) {
    this.root = new Node(value);
    return this;
  }

  return this.__insert(value);
}

BinarySearchTree.prototype.__insert = function(value, node=this.root) {
  if (!node) {
    return this;
  }

  if (this.compare(value, node.value) <= 0) {
    if (node.left === null) {
      node.left = new Node(value);
      return this;
    }

    return this.__insert(value, node.left);
  }

  if (node.right === null) {
    node.right = new Node(value);
    return this;
  }

  return this.__insert(value, node.right);
}

BinarySearchTree.prototype.findRecursively = function(value) {
  return this.__find(value);
}

BinarySearchTree.prototype.__find = function(value, node=this.root, parent=null) {
  if (!node) {
    return undefined;
  }

  if (this.compare(value, node.value) === 0) {
    return node;
  }

  if (this.compare(value, node.value) < 0) {
    return this.__find(value, node.left, node);
  }

  return this.__find(value, node.right, node);
}

BinarySearchTree.prototype.findIteratively = function(value) {
  var start = this.root, found = false;

  if(value === start.value){
    return start
  }

  while (start && !found) {
    if (value < start.value){
      start = start.left;
    } else if (value > start.value){
      start = start.right;
    } else{
      found = true;
    }
  }
  if(!found) return undefined
    return start;
}


BinarySearchTree.prototype.__findNextSmallest = function(node) {
  if (!node || !node.left) {
    return null;
  }

  if (!node.left.right) {
    return node.left;
  }

  var cur = node.left.right;
  while (cur.right !== null) {
    cur = cur.right;
  }

  return cur;
}


BinarySearchTree.prototype.toArray = function(node=this.root) {

  arr = [];

  if (!node) {
    return arr;
  }

  if (node.left) {
    arr = arr.concat(this.toArray(node.left));
  }

  arr.push(node.value);

  if(node.right) {
    arr = arr.concat(this.toArray(node.right));
  }

  return arr;
}

BinarySearchTree.prototype.DFSPreOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    data.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }
  traverse(current);
  return data;
};

BinarySearchTree.prototype.DFSInOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    if (node.left) traverse(node.left);
    data.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(current);
  return data;
}
;

BinarySearchTree.prototype.DFSPostOrder = function() {
  var data = [];
  var current = this.root;
  function traverse(node) {
    if (node.left){
      traverse(node.left);
    }
    if (node.right){
      traverse(node.right);
    }
    data.push(node.value);
  }
  traverse(current);
  return data;
}


BinarySearchTree.prototype.breadthFirstSearch = function() {
  var node = this.root, queue = [], data = [];
  queue.push(node)

  while (queue.length) {
    node = queue.shift()
    data.push(node.value);
    if (node.left){
      queue.push(node.left);
    }
    if (node.right){
      queue.push(node.right);
    }
  }
  return data;
};

BinarySearchTree.prototype.__countChildren = function(node) {
  var count = 0;
  if (node.left !== null) count++;
  if (node.right !== null) count++;
  return count;
};

BinarySearchTree.prototype.remove = function(value){

  var isFound = false, current = this.root, child, parent, tempNode;

  while(current && !isFound){
    if(value < current.value){
      parent = current;
      current = current.left;
    }
    else if(value > current.value){
      parent = current;
      current = current.right;
    }
    else {
      isFound = true;
    }
  }

  if(!isFound) return;

  var childCount = this.__countChildren(current);
  if(childCount === 0){
    if(parent && current.value > parent.value){
      parent.right = null;
    } else if(parent && current.value < parent.value){
      parent.left = null;
    } else{
      this.root = null;
    }
  }

  else if(childCount === 1){
    child = current.right || current.left;

    if(parent && current.value > parent.value){
      parent.right = child;
    } else if(parent && current.value < parent.value) {
      parent.left = child;
    } else {
      this.root = child;
    }
  } else {
    tempNode = current.right;

    while (tempNode.left !== null) {
      tempNode = tempNode.left;
    }

    tempNode.left = current.left;

    if(parent && current.value > parent.value){
      parent.right = current.right
    } else if(parent && current.value < parent.value) {
      parent.left = current.right;
    } else {
      this.root = current.right;
    }
  }
};