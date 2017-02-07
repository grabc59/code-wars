// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array:
// The passed array should NOT be changed. Read more here.

// input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// return [10, -65].
'use strict';
function countPositivesSumNegatives(input) {
  let output = [];
    if (input && input.length) {
    let posCount = 0;
    let negSum = 0;
    input.forEach(function(val) {
      if (val > 0) {
        posCount++;
      } else if (val < 0) {
        negSum += val;
      }
    });
    output.push(posCount);
    output.push(negSum);
  }
  console.log(output);
  return output;
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPositivesSumNegatives([]);
countPositivesSumNegatives(null);
