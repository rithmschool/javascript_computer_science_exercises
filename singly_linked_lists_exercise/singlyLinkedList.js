function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(arr=[]) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(arr) && arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
  }
}

SinglyLinkedList.prototype.push = function(val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;

  return this;
};

// HELPER METHOD TO REMOVE
SinglyLinkedList.prototype.remove = function(index) {
  if (index < 0 || index >= this.length) {
    return undefined;
  }

  var tmp;
  if (index === 0) {
    tmp = this.head;
    this.head = this.head.next;
    this.length--;
    return tmp.val;
  }

  var prev = this.__get(index-1);
  tmp = prev.next;
  prev.next = prev.next.next;
  this.length--;
  return tmp.val;

}

SinglyLinkedList.prototype.pop = function() {
    return this.remove(this.length - 1);
}

SinglyLinkedList.prototype.shift = function() {
    return this.remove(0);
}

SinglyLinkedList.prototype.unshift = function(val) {
  if (this.head === null) {
    this.head = new Node(val);
  } else {

    var newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
  }
  this.length++;
  return this;
}


SinglyLinkedList.prototype.set = function(index, val) {
  var cur = this.__get(index);
  if (cur !== null) {
    cur.val = val;
    return true;
  }

  return false;
}

SinglyLinkedList.prototype.get = function(index) {
  var cur = this.__get(index);
  if (cur !== null) {
    return cur.val;
  }
  return null;
}

SinglyLinkedList.prototype.__get = function(index) {
  if (index >= this.length || index < 0) {
    return null;
  }

  cur = this.head;
  var count = 0;
  for (var cur = this.head; cur !== null && count != index; cur = cur.next) {
    count++
  }

  return cur;
}

SinglyLinkedList.prototype.insert = function(index, val) {
  var tmp;
  if (index < 0 || index > this.length) {
    return false;
  }

  if (index === 0) {
    tmp = null;
    if (this.head !== null) {
      tmp = this.head;
    }

    this.head = new Node(val);
    this.head.next = tmp;
    this.length++;
    return true;
  }

  var prev = this.__get(index - 1);

  if (prev === null) {
    return false;
  }

  tmp = prev.next;
  prev.next = new Node(val);
  prev.next.next = tmp;
  this.length++;
  return true;
}

SinglyLinkedList.prototype.reverse = function () {
  var next, prev = null, cur = this.head;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  this.head = prev;
}


SinglyLinkedList.prototype.toString = function() {
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
