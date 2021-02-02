// Write a JavaScript program which prints the elements of the following array. 

// var array = [[1,2,1,24], [8,11,9,4],[7,0,7,27], [7,4,28,14], [3,10,26,73]];
// for(let i = 0; i<array.length; i++){
//   console.log('"' + 'row '+ i + '"')
//   for(let j = 0; j<array[i].length; j++){
//     console.log('"' + array[i][j] + '"')
// }
// }

var a = [[1,2,1,24], [8,11,9,4], [7,0,7,27], [7,4,28,14], [3,10,26,73]];

for(var i in a){
  console.log('row ' + i);
  for(var j in a[i]){
    console.log('' + a[i][j])
  }
}