// const eqArrays = function (array1,array2){
//   let result = true;
//   let longerLength = 0;

//   if(array1.length > array2.length){
//     longerLength = array1.length;
//   } else{
//     longerLength = array2.length;
//   }

//   for (let i = 0; i < longerLength; i++){
//     if(array1[i] === array2 [i]){
//       if(i === array1.length - 1){
//         result = true;
//       }
//     } else{
//       result = false;
//       break;
//     }
//   }

//   return result;
// }

const eqArrays = require('./eqArrays');

const assertEqualArrays = function(array1,array2){
  let assertionResult = eqArrays(array1,array2);

  if(assertionResult === true){
    console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${array1} !== ${array2}`);
  }
}

module.exports = assertEqualArrays;


