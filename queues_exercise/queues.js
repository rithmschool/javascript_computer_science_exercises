function Node(value){
	this.value = value;
	this.next = null;
}

function Queue(){
	this.first = null;
	this.last = null;
	this.size = 0;
}

Queue.prototype.enqueue = function(val){
	var newNode = new Node(val);
	if(this.size === 0){
		this.first = newNode;
		this.last = newNode;
		return ++this.size;
	}
	this.last.next = newNode;
	this.last = newNode;
	return ++this.size;
}

Queue.prototype.dequeue = function(){
	if(this.size === 0) return undefined;
	var node = this.first;
	this.first = this.first.next;
	this.size--;
	return node.value;
}

Queue.prototype.peek = function(){
	return this.first.value;
}

Queue.prototype.print = function(){
	var curr = this.first;
	while(curr != null){
		console.log(curr.value);
		curr = curr.next;
	}
}