// falsy bouncer (freeCodeCamp)

// function bouncer(arr){
//   var truthies = [];
//   for(var num of arr){
//     if(num) truthies.push(num)
//   }
//   return truthies

// }

// bouncer([7, 'ate', '', 9, 'hey', undefined])
// console.log(bouncer([7, 'ate', '', 9, 'hey', undefined]))


function bouncer(arr){
  return arr.filter(function(num){
    return num
  })

}

bouncer([7, 'ate', '', 9, 'hey', undefined])
console.log(bouncer([7, 'ate', '', 9, 'hey', undefined]))