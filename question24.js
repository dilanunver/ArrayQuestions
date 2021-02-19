// function chunkArrayInGroups(arr, size){
//   let result = [];
//   for(let i = 0; i<arr.length; i+=size){
//     result.push(arr.slice(i, i+size))
//   }
//   return result;
// }
// console.log(chunkArrayInGroups([0,1,2,3,4,5,6,7,8],4))
// chunkArrayInGroups([0,1,2,3,4,5,6,7,8],4)

function chunkArrayInGroups(arr, size){
  var result = [];
   while (arr.length > 0){
    groups.push(arr.slice(0, size));
    arr = arr.slice(size)
  }
  return result
}
console.log(chunkArrayInGroups([0,1,2,3,4,5,6,7,8],4))
 chunkArrayInGroups([0,1,2,3,4,5,6,7,8],4)