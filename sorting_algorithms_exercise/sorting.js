function swap(arr, idx1, idx2) {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

function bubbleSort(arr){

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}


function insertionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }

  return arr;
}

function merge(arr1, arr2) {
  var results = [];
  var i = 0, j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (j === arr2.length || arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  return results;
}


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(left, right);
}


function quickSort(arr, left=0, right=arr.length - 1){
  if(left < right){
   let partitionIndex = partition(arr, left, right);
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, start, end) {
  // We are assuming the pivot is always the last element
  var pivot = arr[end];
  var swapPoint = start;

  for (var i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, swapPoint);
      swapPoint++;
    }
  }

  // Swap the pivot from the end to the swapPoint
  swap(arr, swapPoint, end);
  return swapPoint;
}

