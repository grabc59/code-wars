// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
//
// You have to write the function findMissing (list) , list will always be atleast 3 numbers. The missing term will never be the first or last one.
//
// Example :
//
// findMissing([1,3,5,9,11]) == 7
// PS: This is a sample question of the facebook engeneer challange on interviewstreet. I found it quite fun to solve on paper using math , derive the algo that way. Have fun!
'use strict';
var findMissing = function (list) {
  // 3 - 1 = 2
  // hop is 2
  // from 1, add 2 is 3, if next is 3...
  // let diff = list[1] - list[0];
  // let currentVal = list[0];
  // let result;
  //
  // for (var i = 0; i < list.length; i++) {
  //   if (list[i] === currentVal) {
  //     result.push(list[i]);
  //     currentVal += diff;
  //   } else {
  //     // insert currentVal
  //     // result.push(currentVal);
  //     result = currentVal
  //   }
  // }
  // return result;

//////////////////////////////////////////
  // let diff = findDiff(list);
  // let expectedArray = makeExpectedArray(list, diff);
  //
  // function findDiff(list) {
  //   let first2Diff = list[1] - list[0];
  //   let last2Diff = list[list.length - 1] - list[list.length - 2];
  //   if (first2Diff < last2Diff) {
  //     return first2Diff;
  //   } else {
  //     return last2Diff;
  //   }
  // }
  //
  // function makeExpectedArray(list, diff) {
  //   let result = [list[0]];
  //   let currentValue = list[0]
  //   for (var i = 0; i < list.length; i++) {
  //     result.push(currentValue)
  //     currentValue += diff;
  //   }
  // }
/////////////////////////////////////////////////
  let diff = findDiff(list);

  function findDiff(list) {
    let first2Diff = list[1] - list[0];
    let last2Diff = list[list.length - 1] - list[list.length - 2];

    if (list[0] > list[list.length - 1]) { // descending list
      if (first2Diff > last2Diff) {
        return first2Diff;
      } else {
        return last2Diff;
      }
    } else { // ascending list
      if (first2Diff < last2Diff) {
        return first2Diff;
      } else {
        return last2Diff;
      }
    }
  }

  list.filter((element, index, array) => {
    return element
  })
};
