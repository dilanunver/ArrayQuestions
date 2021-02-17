// Palindrome Checker (freecodecamp)

function palindrome(str){
  var reg = /[\W_]/g;
  var smallStr = str.toLowerCase().replace(reg, '');
  console.log(smallStr)

  var reversed = smallStr.split('').reverse().join('');
  console.log(reversed)

  if(reversed === smallStr) return true;

  return false
}
palindrome('not a poligrom')
console.log(palindrome('not a poligrom'))