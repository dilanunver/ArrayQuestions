
function getArraySum(a){
  var total= 0;
  for(var i = 0; i<a.length; i++){
    total += a[i]
  }
  console.log(total)
  return total
}
getArraySum([1,4,5,6])