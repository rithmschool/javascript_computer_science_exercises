function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.insertIteratively = function(val){
	var newNode = new Node(val);
	if(this.root === null){
		this.root = newNode;
	} else {
		var left = false;
		var prev = null;
		var curr = this.root;
		while(curr !== null){
			if(val > curr.value){
				prev = curr;
				curr = curr.right;
				left = false;
			} else {
				prev = curr;
				curr = curr.left;
				left = true;
			}
		}
		left ? prev.left = newNode : prev.right = newNode;
	}
	return this;
}