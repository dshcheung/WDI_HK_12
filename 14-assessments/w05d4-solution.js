// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

var isPalindrome = function (num) {
  num = num.toString();
  return num.split('').reverse().join('') === num ? true : false;
};

var getLargestPalindrome = function (digits) {
  var limitStr           = "9".repeat(digits);
  var limit              = parseInt(limitStr);
  var largest            = 0;

  for (var i = limit; i > 0; i--) {
    for (var k = limit; k > 0; k--) {
      var product = i * k;

      if (product < largest) {
        k = 0;
      } else if (isPalindrome(product) && product > largest) {
        largest = product;
      }
    }
  }

  return largest;
};

var start = new Date();
console.log(getLargestPalindrome(5));
var end   = new Date();
console.log(end - start);
