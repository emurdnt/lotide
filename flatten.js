const flatten = function (array){
  let flattenedArray = [];
  for (let item of array){
    let arrayFound = Array.isArray(item);
    if(arrayFound){
      for(let entry of item){
        flattenedArray.push(entry);
      }
    }else{
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
}

