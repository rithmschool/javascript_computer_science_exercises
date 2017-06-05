function Node(value){
	this.value = value;
	this.next = null;
}


function Stack() {
	this.first = null;
	this.last = null;
	this.size = 0;
}

Stack.prototype.push = function(val){
	var newNode = new Node(val);
	if(this.size === 0){
		this.first = newNode;
		this.last = newNode;
		return ++this.size;
	}
	newNode.next = this.first;
	this.first = newNode 
	return ++this.size;
}

Stack.prototype.pop = function(){
	if(this.length === 0) return null;
	var node = this.first;
	this.first = this.first.next;
	this.size--;
	return node.value;
}

Stack.prototype.peek = function(){
	return this.first.value
}

Stack.prototype.print = function(){
	var curr = this.first;
	while(curr != null){
		console.log(curr.value);
		curr = curr.next;
	}
}





