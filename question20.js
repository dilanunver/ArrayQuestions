//Roman Numeral Converter (Freecodecamp)
function convertToRoman(num){
  var roman = '';
  var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX','V', 'IV', 'I']

  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


  for(var i = 0; i<numbers.length; i++){
    while(numbers[i] <= num){
      roman = roman + romanNum[i];
      num = num - numbers[i]
    }
  }
  return roman;
}
console.log(convertToRoman(36))
convertToRoman(36)



// var convertToRoman = function(num) {
//   var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   var romanNumeral = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I"
//   ];

//   var roman = "";

//   for (var i = 0; i < numbers.length; i++) {
//     while (numbers[i] <= num) {
//       roman += romanNumeral[i];
//       num -= numbers[i];
//     }
//   }

//   return roman;
// };

// // test here
// convertToRoman(9);
// console.log(convertToRoman(9))


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