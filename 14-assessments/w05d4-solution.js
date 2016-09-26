// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

var isPalindrome = function (num) {
  num = num.toString();
  return num.split('').reverse().join('') === num ? true : false;
};

var findLargestPalindrome = function (num, squareNum) {
  for (var i = num; i > 0; i--) {
    var product = squareNum ? i * i : num * i ;

    if (isPalindrome(product)) {
      return product;
    }
  }

  return 1;
};

var getLargestPalindrome = function (digits) {
  var limitStr           = "9".repeat(digits);
  var limit              = parseInt(limitStr);

  var largestPalindrome1 = findLargestPalindrome(limit, false);
  var largestPalindrome2 = findLargestPalindrome(limit, true);

  return largestPalindrome1 > largestPalindrome2 ? largestPalindrome1 : largestPalindrome2;
};