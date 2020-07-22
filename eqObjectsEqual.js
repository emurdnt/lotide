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
const eqObjects = function(object1, object2) {
  let equalFlag = false;
  if(Object.keys(object1).length === Object.keys(object2).length){
    for(let entry in object1){
      if(Array.isArray(object1[entry]) && Array.isArray(object2[entry])){
        equalFlag = eqArrays(object1[entry],object2[entry]);
        // console.log(entry);
      }else{
        if(object1[entry] === object2[entry]){
          equalFlag = true;
        }
      }
    }
  } else {
    equalFlag = false;
  }
  return equalFlag;
};

const assertObjectsEqual = function(obj1,obj2) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  // ...
  let assertionResult = eqObjects(obj1,obj2);
  
  if(assertionResult === true){
    console.log(`✔️✔️✔️ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }

};


 const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd,dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);