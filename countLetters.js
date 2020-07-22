const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  let result = {};
  //loop through the string
    //ignore the spaces
    //look for other letters that are the same
    //record count
    //create the keys
  //reset counter
  let count = 0;
  for (let letter of string){
    if(letter !== " "){
      for(let duplicate of string){
        if(letter === duplicate){
          count++;
        }
      }
      result[letter] = count;
    }
    count = 0;
  }

  return result;
}

let result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 5);
assertEqual(result1["Z"], undefined);
assertEqual(result1["o"], 2);