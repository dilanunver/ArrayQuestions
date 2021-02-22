// function confirmEnding(str, target){
  
//   //return str.substr(-target.length) === target;
//   return str.slice(-target.length) === target;
// }
// console.log(confirmEnding('bastian', 'ian'))

// function confirmEnding(str, target){
//   var truthDefiner = [];
//   for(var i = 1; i<=target.length; i++){
//     if(str[str.length-i] === target[target.length-i]){
//       truthDefiner.push(true)
//     }  else {
//       truthDefiner.push(false)
//     }
//   }
//   if((truthDefiner.indexOf(false)) != -1){
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(confirmEnding('bastian', 'ain'))

function confirmEnding(str, target){
  let targetLength = target.length;
  let strLength = str.length;
  console.log(strLength)
  let targetToMatch = str.slice(str.length - targetLength, str.length);
  console.log(targetToMatch);
  if(targetToMatch === target) return true;
    return false;
}
console.log(confirmEnding('Open sesame', 'same'))