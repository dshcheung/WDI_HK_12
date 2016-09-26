// Write a function to find the multiplicative persistence of a number. You must use recursion.

function multiply(numStr) {
  var total = 1;

  for (var i = 0; i < numStr.length; i++) {
    total = total * Number(numStr[i]);
  }

  return total;
}

function multiplicativePersistenceWithTimes(num, times) {
  var numStr = String(num);
  var newNum;

  if (num <= 9) {
    return times;
  }

  newNum = multiply(numStr); // 27
  return multiplicativePersistenceWithTimes(newNum, times + 1);
}

function multiplicativePersistence(num) {
  return multiplicativePersistenceWithTimes(num, 0);
}

multiplicativePersistence(39); //fn1
// multiplicativePersistence(27, 1); //fn2
// multiplicativePersistence(14, 2); //fn3
// multiplicativePersistence(4, 3);  //fn4
// // ---> 3