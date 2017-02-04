function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList(arr=[]) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(arr) && arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
  }
}

DoublyLinkedList.prototype.insert = function(index, val) {
  if (index < 0 || index > this.length) {
    return false;
  }

  var node = new Node(val);
  if (index === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return true;
  }

  var prev = this.__get(index - 1);

  if (prev === null) {
    return false;
  }

  node.prev = prev;
  node.next = prev.next;
  if (this.tail === prev) {
    this.tail = node;
  }
  prev.next = node;
  this.length++;
  return true;
}

DoublyLinkedList.prototype.unshift = function(val) {
  if (!this.head) {
    return this.push(val);
  }

  var newNode = new Node(val);

  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
  this.length++;

  return this;
};

DoublyLinkedList.prototype.shift = function() {
  return this.remove(0)
};


DoublyLinkedList.prototype.set = function(index, val) {
  var cur = this.__get(index);
  if (cur !== null) {
    cur.val = val;
    return true;
  }

  return false;
}

DoublyLinkedList.prototype.get = function(index) {
  var cur = this.__get(index);
  if (cur !== null) {
    return cur.val;
  }
  return null;
}


DoublyLinkedList.prototype.__get = function(index) {
  if (index < 0 || index >= this.length) {
    return null;
  }

  var el = null;
  var count;

  if (index <= Math.floor(this.length/2)) {
    count = 0;
    for (el = this.head; el !== null && count != index; el = el.next) {
      count++;
    }
  } else {
    count = this.length - 1;
    for (el = this.tail; el !== null && count != index; el = el.prev) {
      count--;
    }
  }

  return el;
}

DoublyLinkedList.prototype.push = function(val) {
  var node = new Node(val);
  if (this.head === null) {
    this.head = node;
    this.tail = this.head;
    this.length++;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }
  return this;
}

DoublyLinkedList.prototype.remove = function(index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  var tmp;
  if (index === 0) {
    tmp = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length = 0;
      return tmp.val;
    }

    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
    }
    this.length--;
    return tmp.val;
  }

  if (index === this.length - 1) {
    tmp = this.tail;
    this.tail = this.tail.prev;
    if (this.tail !== null) {
      this.tail.next = null;
    }
    this.length--;
    return tmp.val;
  }

  var prev = this.__get(index-1);
  tmp = prev.next;
  prev.next = prev.next.next;
  if (prev.next !== null) {
    prev.next.prev = prev;
  }
  this.length--;
  return tmp.val;
}

DoublyLinkedList.prototype.pop = function() {
  return this.remove(this.length - 1);
}


DoublyLinkedList.prototype.toString = function() {
  if (this.head === null) {
    return '[]';
  }

  var str = '[';
  for (var cur = this.head; cur !== null; cur = cur.next) {
    if (cur.val === null) {
      str += 'null';
    } else if (cur.val === undefined) {
      str += 'undefined';
    } else {
      str += cur.val.toString();
    }

    if (cur.next !== null) {
      str += ',';
    }
  }
  str += ']';

  return str;
}


DoublyLinkedList.prototype.reverse = function(){
  var current = this.head;
  var tail = this.tail;
  var temp;
  while(current){
    temp = current.next;
    current.next = current.prev;
    current.prev = temp;
    if(!temp){
      this.tail = this.head
      this.head = current
    }
    current = temp;
  }
  return this;
}
