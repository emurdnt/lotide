const eqArrays = function (array1,array2){
  let result = true;
  let longerLength = 0;
  if(array1.length > array2.length){
    longerLength = array1.length;
  } else{
    longerLength = array2.length;
  }
  for (let i = 0; i < longerLength; i++){
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

const assertEqualArrays = function(array1,array2){
  let assertionResult = eqArrays(array1,array2);

  if(assertionResult === true){
    console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${array1} !== ${array2}`);
  }
  
}

const takeUntil = function(array, callback) {
  let result =[]
  for (let item of array) {
    if(!callback(item)){
      result.push(item);
    }else{
      break;
    }
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertEqualArrays(results1,[1,2,5,7,2]);
assertEqualArrays(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);