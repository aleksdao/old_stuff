module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  return arr.reduce(function (prev, next) {
    prev.push(fn(next));
    return prev;
  }, []);


}
