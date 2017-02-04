function bubbleSort(arr) {
  var len = arr.length;
  var lastSwap;
  var temp
  while (len != 0) {
    lastSwap = 0;
    for (var i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap the two elements
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        lastSwap = i;
      }
    }
    len = lastSwap;
  }
}

function selectionSort(arr){

}

function insertionSort(arr){

}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var l = mergeSort(arr.slice(0, mid));
  var r = mergeSort(arr.slice(mid));

  return merge(l, r);

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

function quickSort(arr, start=0, end=arr.length-1) {
  if (start < end) {
    var pivotInd = partition(arr, start, end);
    quickSort(arr, start, pivotInd - 1);
    quickSort(arr, pivotInd + 1, end);
  }
}

function partition(arr, start, end) {
  // We are assuming the pivot is always the last element
  var pivot = arr[end];
  var swapPoint = start;

  for (var i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swapVals(arr, i, swapPoint);
      swapPoint++;
    }
  }

  // Swap the pivot from the end to the swapPoint
  swapVals(arr, swapPoint, end);
  return swapPoint;
}

function swapVals(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

