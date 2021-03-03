let person = {
  firstname: 'Steven',
  lastname: 'Hancock',
  email: 'shancock@allthings.com',
  type: {
    type1: 'admin',
    type2: 'user',
  },
  active: true,
  address: {
    street: {
      street1: '100 N. Main',
      street2: 'Apt. 5 '
    } ,
    city: 'Lehi',
    zip: 10001
  }
};

const isObject = function(val){
  if(val === null){
    return false;
  }
  return (typeof val === 'object')
};

const objProps = function(obj){
  for(let val in obj){
    if(isObject(obj[val])){
      objProps(obj[val]);
      } else {
        console.log(val, obj[val]);
      }
    }
  };
objProps(person);


// function makeItem(){
//   return {
//     data: {
//       item:{
//         name: 'shoes',
//         size : {
//           US: 10,
//           EU: 44
//         }
//       }
//     },
//     status: 'live'
//   }
// }

// function makeArrayOfItems(){
//   return {
//     data: {
//       items: [
//         {name: 'shoes', price: 100},
//         {name: 'shirt', price: 250},
//       ]
//     },
//     status: 'live'
//   }
// }

// const {data, status} = makeItem();
// console.log({data, status})