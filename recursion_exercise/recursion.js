function productOfArray(arr){
	if(arr.length === 1) return arr[0];

	return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj){
	var array = [];

	function helper(obj1){
		for(var prop in obj1){
			if(typeof(obj1[prop]) === 'string'){
				array.push(obj1[prop]);
			} else {
				helper(obj1[prop]);
			}
		}
	}
	helper(obj);
	return array;
}

function contains(obj, key){
	for(var prop in obj){
		if(typeof(obj[prop]) === typeof(key)){
			if(obj[prop] === key){
				return true;
			} else {
				return false;
			}
		} else {
			return contains(obj[prop], key);
		}
	}
}

