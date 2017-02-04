function linearSearch(arr, val){
    function search(arr,val,idx){
        if(idx === arr.length) return -1
        else if(arr[idx] !== val){
            return search(arr, val, idx+1)
        }
        return idx;
    }

    return search(arr, val, 0)
}

function linearSearchRecursive(arr, val, start=0, end=arr.length-1){
    if(start > end){
        return -1
    } else if(arr[start] !== val){
        return linearSearchRecursive(arr, val, start+1, end)
    }
    return start
}

linearSearch([1,2,3,4],1) === search([1,2,3,4],1)


function binarySearch(arr, elem){
    var start = 0;
    var end = arr.length -1
    // currentIndex is half
    var middle = Math.floor((start + end) /2);
    var passes = 0
    // while middle is not the element and start < end
    while(arr[middle] !== elem && start <= end){
        passes++
        //
        if(elem < arr[middle]) {
            end = middle - 1
        }
        else {
            start = middle+1
        }
        middle = Math.floor((start + end) /2);

    }
       return arr[middle] !== elem ? -1 : middle
}

function binarySearchRecursive(array, key, left=0, right=array.length) {
  if (left > right) {
    return -1;
  }
  var middle = Math.floor((right + left) / 2);
  if (array[middle] === key) {
    return middle;
  } else if (array[middle] > key) {
    return binarySearch(array, key, left, middle - 1);
  } else {
    return binarySearch(array, key, middle + 1, right);
  }
}



