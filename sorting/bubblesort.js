function bubbleSort(array, count) {
	var swapped = false;
	var count = count || 0;
	for (var i = 0; i < array.length - 1 - count; i++) {
		if (array[i] > array[i + 1]) {
			swap.call(array, i, i + 1);
			swapped = true;
			console.log(array);
		}
	}
	if(!swapped) {
		return array;
	}
	count++;
	return bubbleSort(array, count);
}

function swap(index, nextIndex) {
	var holder = this[index];
	this[index] = this[index + 1];
	this[index + 1] = holder;
}