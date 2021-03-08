// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// let result = numbers.splice(startIndex,amountToDelete, 13, 14);
// console.log(result)
// console.log(numbers)


// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr])
   

//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine(["it works"], 3));



// function filteredArray(arr, elem,elem2) {
//   let newArr = [];
//   // Only change code below this line
//   for(let i = 0; i<arr.length; i++){
//     console.log(arr[i].indexOf(elem2))
//     if(arr[i].indexOf(elem) === -1) {
//         newArr.push(arr[i])     
//   }
// }
//   // Only change code above this line
//   return newArr;

//  }

// console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2,4));

let nestedArray = [
  ['deep'], // an array with an array, 2 levels of depth
  [
    ['deeper'], ['deeper']  // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];

console.log(nestedArray[2][1]);