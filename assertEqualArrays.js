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

const assertEqualArrays = function(array1,array2){
  let assertionResult = eqArrays(array1,array2);

  if(assertionResult === true){
    console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${array1} === ${array2}`);
  }
}

