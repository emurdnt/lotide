const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let equalFlag = false;
  if(Object.keys(object1).length === Object.keys(object2).length){
    for(let entry in object1){
      if(Array.isArray(object1[entry]) && Array.isArray(object2[entry])){
        equalFlag = eqArrays(object1[entry],object2[entry]);
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

// else{
//   equalFlag = false;
//   // if(Array.isArray(object1[entry]) && Array.isArray(object2[entry])){
    
//   //   equalFlag = eqArrays(object1[entry],object2[entry]);
//   // }
// }

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),false); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);