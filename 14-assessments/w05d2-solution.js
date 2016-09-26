var tripleDouble = function(num1, num2){
  num1Str = num1.toString();
  num2Str = num2.toString();

  if (num1Str.length < 3 || num2Str.length < 2) {
    return 0;
  }

  for (var i = 0; i < num1Str.length - 2; i++) {
    if (num1Str[i] == num1Str[i+1] && num1Str[i+1] == num1Str[i+2]) {
      for (var j = 0; j < num2Str.length - 1; j++) {
        if (num2Str[j] === num1Str[i] && num2Str[j+1] === num1Str[i]) {
          return 1;
        }
      }
    }
  }

  return 0;

};

console.log(tripleDouble(451999277, 41177722899)); // 1
console.log(tripleDouble(451927, 41623422345)); // 0
console.log(tripleDouble(44, 432)); // 0
console.log(tripleDouble(4444, 1)); // 0