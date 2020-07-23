const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPosition = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if(string[i] !== " "){
      if(result[string[i]]){
        result[string[i]].push(i);
      }else{
        result[string[i]] = [i];
      }
    }
  }
  return result;
}

let result1 = letterPosition("lighthouse in the houseee");

console.log(result1);
// assertEqual(result1["l"], 5);
// assertEqual(result1["Z"], undefined);
// assertEqual(result1["o"], 2);