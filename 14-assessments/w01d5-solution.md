# Assessment W1/D5

## JS Part I
1. String, Integer, Float, Boolean
1. `Math.pow(2, 2)` and `Math.sqrt(4)`
1. `Math.floor(n)` and `Math.ceil(n)`
1. `.indexOf()`, `.split()` more at [here](http://www.w3schools.com/jsref/jsref_obj_string.asp)
1. `.pop()`, `.join()` more at [here](http://www.w3schools.com/jsref/jsref_obj_array.asp)
1. `undefined` means that a value was not declared, while `null` is defined specifically to equal to nothing.

## Bonus

```js
// question 1
  var cuteAnimals = ["cat", "dog", "hedgehog"]

  // forEach
  cuteAnimals.forEach(function(animal){
    console.log("I love " + animal);
  })

  // Classic for loop
  for (var i=0; i<cuteAnimals.length; i++){
    console.log("I love " + cuteAnimals[i]);
  }


// question 2
  var x = [1,2,3,4,5];
  var swap = function (array, index1, index2) {
    var tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
  };

  swap(x, 0, 4);

  console.log(x);  // should be evaluated as [5,2,3,4,1]
```

## JS Part II
1. `x[0]`
1. `x[x.length-1]`
1. `x[(x.length-1)/2]`
1. The code block of a `do-while` loop will be executed at least once even though the loop condition starts out as false. The code block in `while` loop will not be executed at all if the loop condition starts out as false.
1. Replacing for loop with while loop as follow

  ```javascript
   var array = "h,e,l,l,o, ,w,o,r,l,d".split(',');
   var i = 1;
   while (i < array.length) {
     var t = array[i-1];
     array[i-1] = array[i];
     array[i] = t;
     i += 3;
  }
  ```

## Bonus

```javascript
var n = 5;
var result = 1;
while (n > 0) {
  result *= n;
  n--;
}
console.log(result);
```
