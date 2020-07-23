const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, val){
  let key = undefined;
  for(let entry in object){
    let value = object[entry]; 
    console.log(val, value);
    if(val === value){
      key = entry;
    }
  }
  return key;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),"sci-fi");

const findKey = function (obj,callback){
  let result = "";
  for(let info in obj){
    if(callback(obj[info])){
      result = info;
      break;
    }
  }
  return result;
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"elBulli") // => "noma"
