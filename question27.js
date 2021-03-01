function slasher(arr, howMany){
  arr.splice(0, howMany);
  return arr;
}
slasher([1,2,3], 2);
console.log(slasher([1,2,3], 2));
slasher(["burgers", "fries", "shake"],1)
console.log(slasher(["burgers", "fries", "shakes"], 1));