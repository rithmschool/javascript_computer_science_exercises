function Node(val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoublyLinkedList.prototype.push = function(val){
	var newNode = new Node(val);
	if(this.head === null){
		this.head = newNode
		this.tail = newNode
		this.length++;
		return this;
	}
	this.tail.next = newNode;
	newNode.prev = this.tail;
	this.tail = newNode;
	this.length++;
	return this;
}

DoublyLinkedList.prototype.pop = function(){
	if(this.length === 0) return undefined;
	var node = this.tail
	this.tail.prev.next = null;
	this.length--;
	return node.val;
}

DoublyLinkedList.prototype.unshift = function(val){
	var newNode = new Node(val);
	if(this.length === 0){
		this.head = newNode;
		this.length++;
		return this;
	}
	newNode.next = this.head;
	this.head.prev = newNode;
	this.length++;
	this.head = newNode;
	return this;
}

DoublyLinkedList.prototype.shift = function(){
	if(this.length === 0) return undefined;
	if(this.length === 1){
		var node = this.head;
		this.head === null;
		this.tail === null;
		this.length--;
		return node.val;
	}
	this.head.next.prev = null;
	var node = this.head;
	this.head = this.head.next;
	this.length--;
	return node.val;
}

DoublyLinkedList.prototype.set = function(index, val){
	if(index > this.length-1 || index < 0) return undefined;
	//from back
	if(index > this.length/2){
		var curr = this.tail;
		for(var i = this.length-1; i > index; i--){
			curr = curr.prev;
		}
		curr.val = val;
	//from front
	} else {
		var curr = this.head;
		for(var i = 0; i < index; i++){
			curr = curr.next;
		}
		curr.val = val;
	}	
}

DoublyLinkedList.prototype.get = function(index){
	if(index > this.length-1 || index < 0) return null;
	//from back
	if(index > this.length/2){
		var curr = this.tail;
		for(var i = this.length-1; i > index; i--){
			curr = curr.prev;
		}
		return curr.val;
	//from front
	} else {
		var curr = this.head;
		for(var i = 0; i < index; i++){
			curr = curr.next;
		}
		return curr.val;
	}	
}

DoublyLinkedList.prototype.insert = function(index,val){
	if(index > this.length-1 || index < 0) return null;
	var newNode = new Node(val);
	this.length++;
	//from back
	if(index > this.length/2){
		var curr = this.tail;
		var prev = null;
		for(var i = this.length-1; i > index; i--){
			prev = curr;
			curr = curr.prev;
		}
		newNode.prev = curr;
		curr.next = newNode;
		prev.prev = newNode;
		newNode.next = prev;
	//from front
	} else {
		var curr = this.head;
		var prev = null;
		for(var i = 0; i < index; i++){
			prev = curr;
			curr = curr.next;
		}
		newNode.prev = prev;
		prev.next = newNode;
		curr.prev = newNode;
		newNode.next = curr;

	}	
}

DoublyLinkedList.prototype.remove = function(index){
	if(index > this.length-1 || index < 0) return undefined;
	//from front
	if(index < this.length/2){
		var curr = this.head;
		var prev = null;
		for(var i = 0; i < index; i++){
			prev = curr;
			curr = curr.next;
		}
		prev.next = curr.next;
		prev.next.prev = prev;
		this.length--;
		return curr;
	} else {
		var curr = this.tail;
		var prev = null;
		for(var i = this.length-1; i > index; i--){
			prev = curr;
			curr = curr.prev;
		}
		prev.prev = curr.prev;
		prev.prev.next = prev;
		this.length--;
		return ;
	}
}

DoublyLinkedList.prototype.reverse = function(){
	var curr = this.head;
	var prev = null;
	var next = this.head.next;
	this.tail = this.head;
	while(next != null){
		prev = curr;
		curr = next;
		next = next.next;
		curr.next = prev;
		prev.prev = curr;
	}
	this.head = curr;
	this.tail.next = null;
}

