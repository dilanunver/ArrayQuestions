// Reversing a string

function reverseString(str) {
  var arr = [];
  
  var space = str.split('');
  var reverseArray = space.reverse()
  var joinArray = reverseArray.join('');
  arr.push(joinArray)
  console.log(joinArray)
  return joinArray;
}

reverseString("hello");