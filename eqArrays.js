// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const eqArrays = function (array1,array2){
  let result = true;
  for (let i = 0; i < array1.length; i++){
    if(array1[i] === array2 [i]){
      if(i === array1.length - 1){
        result = true;
      }
    } else{
      result = false;
      break;
    }
  }
  return result;
}

module.exports = eqArrays;