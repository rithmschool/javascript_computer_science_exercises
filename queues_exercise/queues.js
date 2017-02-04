function Node(value){
    this.value = value;
    this.next = null;
}

function Queue(){
    this.first = null;
    this.last = null;
    this.size = 0;
}


Queue.prototype.enqueue = function(data) {
  var node = new Node(data);

  if (!this.first){
    this.first = node;
    this.last = node;
  } else {
    this.last.next=node;
    this.last=node;
  }

  return ++this.size;
};

Queue.prototype.dequeue = function() {
  if (!this.first) return null;

  var temp = this.first;
  if (this.first==this.last) {
    this.last=null;
  }
  this.first = this.first.next;
  this.size--;
  return temp.value
};


Queue.prototype.peek = function(){
    return this.first.value
}