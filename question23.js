//titleCase (FreeCodeCamp)

// function titleCase(str){
//   var words = str.toLowerCase().split(' ');
//   for(var i = 0 ; i<words.length; i++){
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(' ')
 
// }
// console.log(titleCase('I\'m a little tea pot'))
// titleCase('I\'m a little tea pot')

// function titleCase(str){
//   var titled = str.toLowerCase().split(' ').map(function(elem){
//     return elem[0].toUpperCase() + elem.slice(1)
//   })

//   return titled.join(' ')

// }
// console.log(titleCase('I\'m a little tea pot'))
// titleCase('I\'m a little tea pot')

function titleCase(str){

  let result = '';
  let words = str.split(' ');

  for(let i = 0; i<words.length; i++){
    let word = words[i];
    console.log(word)
    for(let j = 0; j<word.length; j++){
      if(j === 0){
        result += word[j].toUpperCase();
      } else {
        result += word[j].toLowerCase()
      }
    }
    result += ' '
  }
  return result.slice(0, result.length -1)

}
console.log(titleCase('I\'m a little tea pot'));
titleCase('I\'m a little tea pot')