// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


//remember the path if they exist in the same directory

const tail = function(array) {
  let newArray = [];
  if (array.length === 0 || array.length === 1) {
    return newArray;
  } else {
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  
};

module.exports = tail;
//since we are not checking it
//should still have 3 elements!
