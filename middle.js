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
    console.log(`😨😨😨 Assertion Failed: ${array1} !== ${array2}`);
  }
}

const middle = function (arr){
  let middleElements = [];
  //1 or 2 elements return empty
  //odd elements return middle
  //even arrays return 2 of the middle

  //figure out if array is odd or even
  if (arr.length % 2 !== 0 && (arr.length / 2) > 1){
    for(let i = 0; i < arr.length; i++){
      if (i === parseInt(arr.length/ 2)){
        middleElements.push(arr[i]);
        break;
      }
    }
  } else if (arr.length % 2 === 0 && (arr.length / 2) > 2) {
    for(let i = 0; i < arr.length; i++){
      if (i === arr.length/ 2){
        middleElements.push(arr[i-1],arr[i]);
        break;
      }
    }
  }

  return middleElements;
  //divide even arrays by 2 if the answer is > 1 then return empty array
  //if the answer is greater than one add the element at that index and the next one to middle elements
  //loop through elements find the middle index
  //return array
}

// console.log(middle([1])) ;// => [2, 3]
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5,6]))// => [3]

assertEqualArrays(middle([1, 2, 3]),[1,2,3]);