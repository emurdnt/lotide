const eqArrays = function (arr1,arr2){
  let result = true;
  for (let i = 0; i < arr1.length; i++){
    if(arr1[i] === arr2 [i]){
      if(i === arr1.length - 1){
        result = true;
      }
    } else{
      result = false;
      break;
    }
  }
  return result;
}

const assertArraysEqual = function(array1,array2){
  let assertionResult = eqArrays(array1,array2);

  if(assertionResult === true){
    console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${array1} === ${array2}`);
  }
}

const without = function (sourceArray, itemsToRemove){
  var vettedArray = [];
  let foundDuplicate = false;

  for(let i = 0; i < sourceArray.length; i++){
    for (let j = 0; j <itemsToRemove.length; j++){
      if(sourceArray[i] === itemsToRemove[j]){
        foundDuplicate = true;
      }
    }
    if(!foundDuplicate){
      vettedArray.push(sourceArray[i]);
    }
    foundDuplicate = false;
  }
  return vettedArray;
}


 console.log(without([1, 2, 3], [1])) // => [2, 3]
 console.log(without(["1", "2", "3"], [1, "2", "3"])); // => ["1", "2"]


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
