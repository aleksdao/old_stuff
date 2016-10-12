function duckCount() {
  // SOLUTION GOES HERE
  return Array.prototype.slice.apply(arguments).reduce(function (prev, curr) {
    console.log(curr);
    if (Object.prototype.hasOwnProperty.call(curr,'quack')) {
      console.log('works')
      prev++;
    }
    return prev;
  }, 0)
}

module.exports = duckCount;
