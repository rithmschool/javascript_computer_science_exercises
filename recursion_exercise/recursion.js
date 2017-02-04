function productOfArray(arr){
    if(arr.length === 0){
        return 1
    }
    return arr.shift() * productOfArray(arr)
}

// HELPER METHOD RECURSION
function collectStrings(obj){
    var stringsArr = [];

    function gatherStrings(o){
        for(var key in o){
            if(typeof o[key] === 'string'){
                stringsArr.push(o[key])
            }
            else if(typeof o[key] === 'object'){
                return gatherStrings(o[key])
            }
        }
    }

    gatherStrings(obj)

    return stringsArr;
}

// PURE RECURSION
function collectStrings(obj){
    var stringsArr = [];
    for(var key in obj){
        if(typeof obj[key] === 'string'){
            stringsArr.push(obj[key])
        }
        else if(typeof obj[key] === 'object'){
            stringsArr = stringsArr.concat(collectStrings(obj[key]))
        }
    }

    return stringsArr;
}

function contains(obj, val){
    for(var key in obj){
        if(obj[key] === val){
            return true
        }
        if(typeof obj[key] === 'object'){
            return contains(obj[key], val)
        }
    }
    return false
}

// With helper method recursion
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

function search(arr, val, start=0, end=arr.length-1){
    if(start > end){
        return -1
    } else if(arr[start] !== val){
        return search(arr, val, start+1, end)
    }
    return start
}

// With helper method recursion
function binarySearch(arr, val){

    function binarySearchHelper(array, value, left, right){

        if(left > right) return -1;

        var middle = Math.floor((right + left) / 2);

        if(array[middle] === value) return middle;

        else if(array[middle] > value) {
            return binarySearchHelper(array,value,left,middle-1)
        }

        return binarySearchHelper(array,value,middle+1,right)
    }

    return binarySearchHelper(arr, val, 0, arr.length)
}

function binarySearch(array, key, left=0, right=array.length) {
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

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}