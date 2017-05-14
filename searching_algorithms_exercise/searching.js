function linearSearch(arr,key){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === key) return i
	}
	return -1;
}

function linearSearchRecursive(arr,key,start=0,end=arr.length-1){
	if(start > end) return -1
	if(arr[start] === key) return start;
	return linearSearchRecursive(arr,key,++start,end)
}

function binarySearch(arr,key){
	var start = 0;
	var end = arr.length;
	var mid;
	while(start < end){
		mid = Math.floor((start+end)/2);
		if(arr[mid] === key) return mid
		if(arr[mid] > key){
			end = mid
		} else {
			start = mid + 1
		}
	}
	return -1;
}

function binarySearchRecursive(arr,key,start=0,end=arr.length-1){
	if(start > end) return -1;
	var mid = Math.floor((start+end)/2)
	if(arr[mid] === key){
		return mid;
	} else if(arr[mid] > key){
		return binarySearchRecursive(arr,key,start, mid-1)
	} else if(arr[mid] < key){
		return binarySearchRecursive(arr,key,mid+1, end)
	}
}