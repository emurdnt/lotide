// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨😨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  /* 
  
  - loop through itemsToCount
    - check if each item in items to count is a truth
 
  -loop through the allItems
    - if the item with truthy value form itemsToCount matches with an element in allItems increment the count, change the boolean flag
    
  -create an object with the truthy keys as keys 
    - add the count
  -reset the flag and count after every iteration of the inner loop
  */
 const results = {};
 let matchFound = false;
 let counter = 0;
 for (const item in itemsToCount) {
    let value = itemsToCount[item]; 
    //accesses the value of the object true or false
    if(value === true){
      //loop through the items
      for(const entry of allItems){
        if( item === entry){
          counter++;
          matchFound = true;
        }
      }
    }
  
   if(matchFound){
    results[item] = counter;
   }

   //reset the values 
   matchFound = false;
   counter = 0;
 }

 return results;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);