//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 

const button = document.querySelector('button');
const element = document.querySelector('h1');

var newArray = function(array,n){
  var gettingArray = [];

  if(array.length > 0 && !n ){ 
    return array[array.length-1]
  }
  if(array.length > 0 && n ) {
      for(let i = 0; i<array.length; i++){
      if(n>i) { 
        gettingArray.push(array[i]) 
      } 
    }
  } else { 
    return 'empty value'
  }
  console.log(gettingArray)
};
button.addEventListener('click', ()=>{
  element.innerText = newArray([ 7, 9, 0, -2], 3)
});

// var result = function(lastArray, n){
//   if(lastArray == null) return 'undefined array';
//   if(n == null) return lastArray[lastArray.length-1];
//   return lastArray.slice(Math.max(lastArray.length-n,0));
// }
// button.addEventListener('click', ()=>{
//   element.innerText = result([ 7, 9, 0, -2],6)
// })

