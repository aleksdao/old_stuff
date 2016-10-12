function merge(array1, array2) {
	var toReturn = [];
	var sharedLength = Math.min(array1.length, array2.length);
	/*for (var i = 0; i < sharedLength; i++) {
		if(array1[i] < array[2]) {
			toReturn
		}
	}*/
	// while(array1.length || array2.length) {
	// 	var valueToAdd;
	// 	if(array1[0] < array2[0]) {
	// 		valueToAdd = array1.shift();
	// 	}
	// 	else {
	// 		valueToAdd = array2.shift();
	// 	}
	// 	toReturn.push(valueToAdd);
	// }
	while(array1.length && array2.length) {
		if(array1[0] < array2[0]) {
			toReturn.push(array1.shift())
		}
		else {
			toReturn.push(array2.shift());
		}
	}
	if(array1.length) {
		toReturn = toReturn.concat(array1);
	}
	if(array2.length) {
		toReturn = toReturn.concat(array2);
	}
	return toReturn;
}

function mergeSort(array) {
	if(array.length <= 1) {
		return array;
	}
	var middle = Math.floor(array.length / 2);
	var left = array.slice(0, middle);
	var right = array.slice(middle);
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right); 
}

function split(wholeArray) {

    var firstHalf = wholeArray.slice(0, wholeArray.length / 2);
    var secondHalf = wholeArray.slice(wholeArray.length / 2);
    

    /*for(var i = 0; i < half; i++) {
		firstHalf.push(wholeArray[i]);
    }
    for(var i = half; i < wholeArray.length; i++) {
    	secondHalf.push(wholeArray[i]);
    }*/



    /* your code here to define the firstHalf and secondHalf arrays */

    return [firstHalf, secondHalf];
}