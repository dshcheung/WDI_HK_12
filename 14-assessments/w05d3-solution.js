// Write a function to find the multiplicative persistence of a number. You must use recursion.

// Shared Function for Version 1 & 2
var multiply = function (numStr) {
  var total = 1;

  for (var i = 0; i < numStr.length; i++) {
    total = total * Number(numStr[i]);
  }

  return total;
};

// Version 1
var multiplicativePersistenceWithTimes = function (num, times) {
  var numStr = String(num);
  var newNum;

  if (num <= 9) {
    return times;
  }

  newNum = multiply(numStr); // 27
  return multiplicativePersistenceWithTimes(newNum, times + 1);
};

var multiplicativePersistence = function (num) {
  return multiplicativePersistenceWithTimes(num, 0);
};

multiplicativePersistence(39);
// Logic
// multiplicativePersistenceWithTimes(39, 0); //fn1
// multiplicativePersistenceWithTimes(27, 1); //fn2
// multiplicativePersistenceWithTimes(14, 2); //fn3
// multiplicativePersistenceWithTimes( 4, 3); //fn4
// result -> 3


// Version 2
var multiplicativePersistence2 = function (num) {
  var numStr = String(num);
  var newNum = multiply(numStr);

  if (newNum === num) {
    return 0;
  } else if (num < 9) {
    return 1;
  } else {
    return 1 + multiplicativePersistence2(newNum);
  }
};

multiplicativePersistence2(39);
// Logic
// multiplicativePersistence2(39);    //fn1
// 1 + multiplicativePersistence2(27) // fn2
// 1 + multiplicativePersistence2(14) // fn3
// 1 + multiplicativePersistence2(14) // fn3
// result -> 3
