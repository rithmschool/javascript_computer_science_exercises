function bubbleSort(arr){
	var sort = 1;
	while(sort !== 0){
		sort = 0;
		for(var i = 0; i < arr.length-1; i++){
			if(arr[i] > arr[i+1]){
				[arr[i],arr[i+1]] = [arr[i+1], arr[i]]
				sort++;
			}
		}
	}
	return arr;
}

function selectionSort(arr){
	var newArr = []
	var min = Number.MAX_SAFE_INTEGER
	var minIndex;
	while(arr.length !== 0){
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < min){
				min = arr[i];
				minIndex = i;
			}
		}
		min = Number.MAX_SAFE_INTEGER
		newArr = newArr.concat(arr.splice(minIndex,1));
	}
	return newArr;
}

function insertionSort(arr){
	if(arr.length === 0) return arr
	var newArr = [arr.pop()]
	var num = 0;
	while(arr.length !== 0){
		num = arr.shift();
		//case1 : 1 smaller than first
		if(num < newArr[0]){
			newArr.unshift(num)
		//case2 : bigger than last
		} else if (num > newArr[newArr.length -1]){
			newArr.push(num)
		} else {
			//case3 : need to insert
			for(var i = 0; i < newArr.length; i++){
				if(newArr[i] < num && newArr[i+1] > num){
					var tmpArr = newArr.splice(i+1);
					newArr.push(num);
					newArr = newArr.concat(tmpArr);
				}
			}
		}
	}
	return newArr;
}

function merge(arr1, arr2){
	var newArr = []
	var len = arr1.length + arr2.length
	while(len > 0){
		if(arr1.length === 0){
			newArr = newArr.concat(arr2);
			break;
		} else if(arr2.length === 0){
			newArr = newArr.concat(arr1);
			break;
		} else {
			if(arr1[0] < arr2[0]){
				newArr.push(arr1.shift())
			} else {
				newArr.push(arr2.shift())
			}
		}
		len--;
	}
	return newArr;
}

function mergeSort(arr){
	if(arr.length === 0) return arr;
	if(arr.length === 1){
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid, arr.length)

	return merge(mergeSort(left), mergeSort(right))
}

function quickSort(arr, left=0, right=arr.length - 1){
  if(left < right){
   let partitionIndex = pivot(arr);
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}


function pivot(arr){
	var pivot = arr[Math.floor(arr.length/2)]
	var i = -1;
	var tmp;
	var tmp2;
	for(var n = 0; n < arr.length; n++){
		if(arr[n] !== pivot){
			if(arr[n] < pivot){
				i++;
				tmp = arr.splice(n,1);
				tmp2 = arr.splice(i,1);
				arr.splice(i,0,...tmp);
				arr.splice(n,0,...tmp2);
			}
		}
	}
	tmp = arr.splice(arr.indexOf(pivot),1);
	arr.splice(++i,0,...tmp);
	return pivot;
}


