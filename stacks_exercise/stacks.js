function Node(value){
    this.value = value;
    this.next = null;
}

function Stack(){
    this.first = null;
    this.last = null;
    this.size = 0;
}

Stack.prototype.push = function(val){

    var node = new Node(val);

    if (!this.first){
      this.first = node;
      this.last = node;
    } else {
      var tmp = this.first;
      this.first=node;
      this.first.next=tmp;
    }

    return ++this.size;
}

Stack.prototype.pop = function(){
    if (!this.first)
      return null;

    var temp = this.first;

    if (this.first==this.last) {
      this.last=null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value
}

Stack.prototype.peek = function(){
    return this.first.value
}
