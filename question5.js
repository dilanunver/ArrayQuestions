// Swap the case of each character of a string, upper case to lower and vice versa

var str = 'The Quick Brown Fox';
var Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var Lower = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for ( let x = 0; x<str.length; x++){
  if(Upper.includes(str[x ])){
    result.push(str[x].toLowerCase());
  }
  else if(Lower.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));

