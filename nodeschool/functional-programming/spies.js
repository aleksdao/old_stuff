function Spy(target, method) {
  // SOLUTION GOES HERE
  var obj = {
    count: 0
  }
  var originalFunc = target[method];
  target[method] = function () {
    // var args = [].slice.call(arguments);
    obj.count++;
    // console.log(obj)
    return originalFunc.apply(this, arguments);
  }
  var count1 = obj.count;
  console.log(count1)
  return count1;
}

module.exports = Spy;
