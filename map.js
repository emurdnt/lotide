const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
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

const results1 = map(words, word => word[0]);
console.log(results1);

const ages = [18,23,12,34,15,90,76,34];
const result2 = map(ages, age => 'age:'+ age);


const nums = [18,23,12,34,15,90,76,34];
const result3 = map(nums, num => num%2);
console.log(result3);


assertEqualArrays(result2,[ 'age:18',
'age:23',
'age:12',
'age:34',
'age:15',
'age:90',
'age:76',
'age:34' ]);
assertEqualArrays(result3,[1,2,3,4]);
assertEqualArrays(result2,[ 'g', 'c', 't', 'm', '4' ]);