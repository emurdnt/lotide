const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
