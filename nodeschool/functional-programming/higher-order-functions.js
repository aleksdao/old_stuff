function repeat(operation, num) {
     // SOLUTION GOES HERE
     if (num === 0) return;
     num--;
     operation();
     return repeat(operation, num);
   }

   // Do not remove the line below
   module.exports = repeat
