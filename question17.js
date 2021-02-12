// largest numbers of 4 array (freeCodeCamp)
// function largestOfFour(arr) {
//   var maxes = [];
  
//   for(var i = 0; i<arr.length; i++){
//     var tempMax = arr[i][0]
//     for(var j = 0; j<arr[i].length; j++){
//       var currentElement = arr[i][j]
//       if(currentElement >= tempMax){
//         tempMax = currentElement
//       }
//     }
//     maxes.push(tempMax)
//   }
//   return maxes
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// function largestOfFour(arr) {
//   var maxes = [0,0,0,0];
//   for(var i = 0; i<arr.length; i++){
//     for(var j=0; j<arr[i].length; j++){
//       var currentElement = arr[i][j];
//       if(currentElement >= maxes[i]){
//         maxes[i] = currentElement;
//       }
//     }
//   }
//   return maxes
//   }

function findMax(arr){
  var max = arr[0];
  for(var i = 0; i< arr.length; i++){
    if(arr[i] > max) max = arr[i];
  }
  return max
}

function largestOfFour(arr){
  var maxes = [];
  for(var i = 0; i<arr.length; i++){
    var innerMax = findMax(arr[i])
    maxes.push(innerMax)
  }
  return maxes
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
