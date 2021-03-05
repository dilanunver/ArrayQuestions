function countdown(myArray, n){
  if(n  < 1) {
  return []
  }else {
     myArray.push(n);
   countdown(myArray, n-1)
  }

}
console.log(countdown(myArray,5))

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));