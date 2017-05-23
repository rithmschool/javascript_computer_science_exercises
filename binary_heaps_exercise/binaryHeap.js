function MaxBinaryHeap(val){
    this.values = [];
}

MaxBinaryHeap.prototype.insert = function(value){
	//insert at the end of the tree

	this.values.push(value);
	//get the position of the leaf
	var pos = this.values.length-1;
	//loop till pos is the root node (0)
	while(pos != 0){
		//check child with parent
		//if bigger, swap
		var parent = Math.floor((pos-1)/2);
		if(this.values[pos] > this.values[parent]){
			[this.values[pos], this.values[parent]] = [this.values[parent], this.values[pos]]
		}
		//pos is now the parent
		pos = Math.floor((pos-1)/2)
	}
}

MaxBinaryHeap.prototype.remove = function(){
	// this.values.shift()
	// this.values = maxHeapify(this.values)
	this.values.shift()
	var index = 0
	var child1 = undefined;
	var child2 = undefined;
	while(this.values[index] !== undefined){
		child1 = (index*2) + 1;
		child2 = (index*2) + 2;
		if(this.values[child1] > this.values[child2]){
			if(this.values[child1] > this.values[index]){
				[this.values[child1],this.values[index]] = [this.values[index],this.values[child1]]
				index = child1;
			} else if(this.values[child2] > this.values[index]){
				[this.values[child2],this.values[index]] = [this.values[index],this.values[child2]]
				index = child2;
			} else {
				break;
			}
		} else {
			if(this.values[child2] > this.values[index]){
				[this.values[child2],this.values[index]] = [this.values[index],this.values[child2]]
				index = child2;
			} else if(this.values[child1] > this.values[index]){
				[this.values[child1],this.values[index]] = [this.values[index],this.values[child1]]
				index = child1;
			} else {
				break;
			}
		}
	}
	console.log(this.values)
}

function maxHeapify(arr){
	var heap = new MaxBinaryHeap;
	while(arr.length !== 0){
		heap.insert(arr.shift());
	}
	return heap.values;
}