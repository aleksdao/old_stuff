// var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  return function () {
    // console.log(arguments);
    var message = Array.prototype.slice.apply(arguments).join(' ');
    console.log(namespace + ' ' + message)
  }
}

module.exports = logger
