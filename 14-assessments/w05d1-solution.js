var solution = function (x, arr) {
  var passable  = new Array(x);
  var uncovered = x;

  for (var minutes = 0; minutes < arr.length; minutes++) {
    var position = arr[minutes];

    if (!passable[position - 1]) {
      passable[position - 1] = true;
      uncovered -= 1;

      if (uncovered === 0) {
        return minutes;
      }
    }
  }

  return -1;
};

console.log(solution(5, [1,3,1,4,2,3,5,4]));