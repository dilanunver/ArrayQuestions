//Write a JavaScript program to find the most frequent item of an array.


function mostFrequent (arr){
  let mf = arr[0];
  let maxCount = 0;
  for(let i = 0 ; i<arr.length; i++){
    let count = 0;
    for(let j = i+1; j<arr.length; j++){
      if(arr[i] == arr[j]){
        count++;
      }
    }
    if(maxCount < count){
      maxCount = count;
      mf = arr[i];
    }
  }
  return mf;
}
console.log(mostFrequent([3,3,3,5,5,5,5,5,7]));