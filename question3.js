// Write a simple JavaScript program to join all elements of the following array into a string.
const button = document.querySelector('button');
const element = document.querySelector('h1');


var arrayJoin = function(array, joinString){
  var newString = '';
  if(!joinString) {
    joinString = ',';
  }
  for(let i = 0; i<array.length; i++){
    if(i == array.length-1){
      newString += array[i]
    } else {
      newString += array[i] + joinString
    } 
  }
  
  return newString
};
button.addEventListener('click', ()=>{
  element.innerText = arrayJoin(['green','red','blue','yellow'])
});
// var adding = '';
// var myNumber = ['green','red','blue','yellow'];

// for(let i = 0; i<myNumber.length; i++){
//   if(i == myNumber.length-1){
//     adding += myNumber[i]
//   } else {
//     adding += myNumber[i]+ '-';
//   }
// }
// console.log(adding)





