// Roman Numeral Converter (Freecodecamp)
function convertToRoman(num){
  var romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90, 
    L: 50,
    XL: 40,
    X: 10,
    V: 5,
    IV: 4,
    I: 1
  };

  var roman = '';

  for(var key in romanToNum){
   // console.log("key: ", key)
   // console.log("value: ", romanToNum[key]);
    while(num >= romanToNum[key]){
      roman += key;
      num -= romanToNum[key]
    }
  }
  return roman;
}
convertToRoman(11)


// function findID(num){ 
//   var arr = [
//     {id: 1, name: 'dilan'},
//     {id: 2, name: 'gokhan'},
//     {id: 3, name: 'emre'}
//   ];
//   var returnValue = ''
//   for(var i = 0; i < arr.length; i++){
//    // console.log(arr[key].id)
//     if(arr[i].id === num){
//       returnValue = arr[i]
//     } 
//   }  
//   return returnValue
// }
// console.log(findID(1))
// findID(1)