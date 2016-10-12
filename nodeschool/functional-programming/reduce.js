function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function (prev, next) {
    if (!prev[next]) prev[next] = 0;
    prev[next]++;
    return prev;
  }, {})
}

module.exports = countWords
