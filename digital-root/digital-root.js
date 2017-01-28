// Description:
//
// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  let sum = 0;
  sum = n.toString().split('').map(function(sDigit) {
      return parseInt(sDigit);
  }).reduce(function(a, b) {
    return a + b;
  })
  if (sum.toString().length > 1) {
    return digital_root(sum);
  } else {
    console.log(sum);
    return sum;
  }
}
digital_root(12); // output 3
digital_root(99); // output 9
