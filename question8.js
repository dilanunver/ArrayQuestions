// Write a JavaScript program to find duplicate values in a JavaScript array

function findDuplicate(array1){
  var object = {};
  var result = [];

  array1.forEach(element => {
    if(!object[element]){
      object[element] = 1; 
      
    } else {
      object[element] += 1; 
    } 
  
  });
  for(var prop in object){
    console.log(prop)
    if(object[prop] >= 2){
      console.log(object[prop])
      result.push(prop)
    }
  }
  return result;
}
console.log(findDuplicate(['a','a','a','b','c','d','e','e','e','e']))
