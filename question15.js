//Repeat a String

// function repeatString(str,num){
//   if(num<0) return '';

//   return str.repeat(num)
// }
// repeatString('abc', 3)
// console.log(repeatString('abc', 3));


// function repeatString(str,num){
//   var final = '';
//   if(num<0) return '';

//   for(var i = 0; i<num; i++){
//     final += str
//   }
//   return final
// }
// repeatString('abc', 3)
// console.log(repeatString('abc', 3))

function repeatString(str,num){
  if(num<0) return '';
  if(num === 1) return str;

  return str + repeatString(str, num-1)
}
repeatString('abc', 8)
console.log(repeatString('abc', 8))