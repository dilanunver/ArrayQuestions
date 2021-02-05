// two sum 
// const twoSum = (arr, sum)=>{
//   let count = 0;
//   for(let i = 0; i<arr.length; i++){
//     for(let j = 1; j<arr.length; j++){
//       if(arr[i] + arr[j] === sum) {
//         return [arr[i], arr[j]]
//       }
//       count++
//     }
//   }
//   console.log(count)
//   return 'not found'
// }

const twoSum = (arr,sum) => {
  const pastNumbers = [];
  for(let i = 0; i<arr.length; i++){
    let current = arr[i];
    let neededNumber = sum-current;
    if(!pastNumbers.includes(neededNumber)){
      pastNumbers.push(current);
    } else {
      return [neededNumber, current]
    }
  }
  return 'not found'
}

const arr = [1,4,2,5,3]
const sum = 9;
console.log(twoSum(arr,sum))