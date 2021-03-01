// function truncateString(str, num){
//   if(num>str.length) return str;
//     return str.slice(0, num) + '...'
// }
// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8))

function nextInLine(arr, item) {
  console.log('arr ' + arr)
  console.log('item ' + item)
  arr.push(item);
  
  return arr.shift()
  // Only change code above this line
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));