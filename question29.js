// function mutation(arr){
//   var firstWord = arr[0];
//   var secondWord = arr[1];
//   // for(let i=0; i<secondWord.length; i++){
//   //   if(firstWord.indexOf(secondWord[i]) === -1) return false;
//   // }
//   // for(var word of secondWord){
//   //   if(firstWord.indexOf(word) === -1) return false
//   // }
//   for(var word of secondWord){
//     if(!firstWord.includes(word)) return false; 
//   }
//   return true;

// }

function mutation(arr){
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();
  for(let i = 0; i < secondElement.length; i++){
    let letter = secondElement[i];
    console.log(firstElement.indexOf(letter) === -1)
    if(firstElement.indexOf(letter) === -1) return false
  }
  return true
}
console.log(mutation(["Mary", "Aarmy"]))