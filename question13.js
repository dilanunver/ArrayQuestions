//finding longest word in array

function findLongestWordLength(str) {

    let longestWord= str.split('').sort((a,b) => b.length - a.length)[0];
    return longestWord.length
    

  
  // var longest = str.split(' ');
  // var name = '';
  // for(var long of longest){
  //   if(long.length > name.length) name = long
  // }
  // return name.length;
 
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");