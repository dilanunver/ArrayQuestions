//find the differences of two arrays  (freeCodeCamp)

// function differArray(arr1,arr2){
//   var newArr = arr1.concat(arr2);
//   return newArr.filter(function(value, index, array){
//     if(array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1){
  
//       return value;
//     }
//   })
// }
// console.log(differArray([1,2,3,5], [1,2,3,4,5]))

function differenceOf2Arrays(arr1, arr2){
  var combo = arr1.concat(arr2);

  return combo.filter(function(num){
    console.log(num)
    if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1){
      console.log(num)
      return num
    }
  })
  // var temp = [];
  // arr1 = arr1.toString().split(',').map(Number);
  // arr2 = arr2.toString().split(',').map(Number);

  // for(var i in arr1) {
  //   if(arr2.indexOf(arr1[i]) === -1) temp.push(arr1[i])
  // }
  // for(i in arr2){
  //   if(arr1.indexOf(arr2[i]) === -1) temp.push(arr2[i])
  // }

  // return temp
}

differenceOf2Arrays([1, 2, 6, 4, 5], [1,2,3,9,5,7]);