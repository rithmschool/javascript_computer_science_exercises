function productOfArray(arr) {
  if(arr.length === 1) return arr[0];
  else {
    return productOfArray(arr.slice(1)) * arr[0];
  }
}

function collectStrings(obj) {
    var strlist = [];

    for(let key in obj){
      if(typeof obj[key] === 'string') strlist.push(obj[key]);
      else if(typeof obj[key] === 'object') {
        strlist = strlist.concat(collectStrings(obj[key]));
      }
    }

  return strlist;
}

function contains(obj, val) {

    for(let key in obj){
      if(obj[key] === val) return true;
      else if(typeof obj[key] === 'object') {
        if(contains(obj[key], val)) return true;
      }
    }

  return false;
}

function search(arr, val) {
  if(arr[0] === val) return 0;
  else if(arr.length > 1){
    let index = search(arr.slice(1), val);
    if(index > -1) return index + 1;
  }

  return -1
}

function binarySearch(arr, val) {

  function bihelp(a, v, lo, hi) {
    if(hi < lo) return -1;

    let mid = Math.floor((hi-lo)/2) + lo;
    if(val < a[mid]) return bihelp(a, v, lo, mid-1);
    else if(val > a[mid]) return bihelp(a, v, mid+1, hi);
    else return mid;

  }

  return bihelp(arr, val, 0, arr.length-1);
}

function stringifyNumbers(obj) {
  var newObj = {};
  if(Array.isArray(obj)) newObj = [];

  for(let key in obj){

    if(typeof obj[key] === 'number') {
      newObj[key] = ('' + obj[key]);
    } else if(typeof obj[key] === 'object') {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }

  }

  return newObj;
}
