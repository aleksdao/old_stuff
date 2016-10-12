function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  return function reduceOne (index, value ) {
    if (index >= arr.length) return value;
    return reduceOne(index + 1, fn(value, arr[index]), index, arr)
  }(0, initial)

}

module.exports = reduce
