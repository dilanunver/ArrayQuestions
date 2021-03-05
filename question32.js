// var data = [[1,2,3], [4,5,6], [7,8,9]];

// var flatten = function (arr){
//   var flatMap = [];
//   arr.forEach(function(value){
//     if(Array.isArray(value)){
//       flatMap = flatMap.concat(flatten(value))
//     } else {
//       flatMap.push(value)
//     };
//   });
//   return flatMap;
// }
// var result = flatten(data);
// console.log(result)


// var numbers = [[1,2,3], [4,5,6],[7,8,9]];

// function flatten(arr){
//   var flatMap = [];
//   for(var i = 0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//       flatMap = flatMap.concat(flatten(arr[i]));
//     }else {
//       flatMap.push(arr[i])
//     }
//   }
//   return flatMap
// };
// console.log(flatten(numbers))
// flatten(numbers)

function sum(arr, n) {
  // Only change code below this line
  if(n<=0){
    return 0;
  } else {
    console.log( arr[n-1])
    return sum(arr, n-1)+arr[n-1]
  }

  // Only change code above this line
}
console.log(sum([2, 3, 4, 5], 3))