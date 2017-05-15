function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function(val){
	var newNode = new Node(val)
	if(!this.head){
		this.head = newNode;
		this.tail = newNode;
	} else {
		this.tail.next = newNode;
		this.tail = newNode;
	}
	this.length++;

	return this; 
}

SinglyLinkedList.prototype.pop = function(){
	if(this.length === 0) return undefined
	var curr = this.head;
	var prev = null;
	while(curr.next !== null){
		prev = curr;
		curr = curr.next;
	}
	this.tail = prev;
	this.tail.next = null;
	this.length--;
	return curr.val;
}

SinglyLinkedList.prototype.unshift = function(val){
	var newNode = new Node(val);
	newNode.next = this.head;
	this.head = newNode;
	this.length++;
	return this;
}

SinglyLinkedList.prototype.shift = function(){
	if(this.length === 0) return undefined
	var returnNode = this.head;
	this.head = this.head.next;
	this.length--;
	return returnNode.val;
}

SinglyLinkedList.prototype.set = function(index, val){
	if(index > this.length-1 || index < 0) return false;
	var curr = this.head;
	var counter = 0;
	while(counter < index){
		curr = curr.next;
		counter++;
	}
	curr.val = val;
	return true;
}

SinglyLinkedList.prototype.get = function(index){
	if(index > this.length-1 || index < 0) return null;
	var curr = this.head;
	for(var i = 0; i < index; i++){
		curr = curr.next;
	}
	return curr.val;
}

SinglyLinkedList.prototype.insert = function(index,val){
	if(index > this.length-1 || index < 0) return undefined;
	//if list is empty
	if(this.length === 0){
		var newNode = new Node(val);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
		return this.length;
	}
	//if first index
	if(index === 0){
		this.unshift(val);
		return this.length;
	}
	//if last index (tail)
	if(index === length-1){
		this.push(val);
		return this.length;
	}
	//else
	var newNode = new Node(val);
	var curr = this.head;
	var prev = null;
	for(var i = 0; i < index; i++){
		prev = curr;
		curr = curr.next
	}
	prev.next = newNode;
	newNode.next = curr;
	this.length++;
	return this.length;
}

SinglyLinkedList.prototype.remove = function(index){
	if(index > this.length-1 || index < 0) return undefined;
	var curr = this.head;
	var prev = null;
	for(var i = 0; i < index; i++){
		prev = curr;
		curr = curr.next;
	}
	prev.next = curr.next;
	this.length--;
	return curr;
}

SinglyLinkedList.prototype.reverse = function(){
	//case1: 1 node
	if(this.length === 1) return this;
	//case2: two nodes
	if(this.length === 2){
		this.tail.next = this.head;
		this.head.next = null;
		this.head = this.tail
		this.tail = this.head.next;
		return this;
	}
	//case3: 3 or more
	var curr = this.head;
	var prev = null;
	var next = this.head.next;
	this.tail = this.head;
	while(next != null){
		prev = curr;
		curr = next;
		next = next.next;
		curr.next = prev;
	}
	this.head = curr;
	this.tail.next = null;
}


