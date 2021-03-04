let data = [
  {
    'name' : 'Nazmus',
    'job' : 'Software Enginer',
    'location': {
      'city': 'Boston',
      'state': 'Massachusetts'
    }
  },
  {
    'name' : 'Bill',
    'job': 'Ceo',
    'city': 'Seattle',
    'state': 'Washington'
  },
  {
    'name': 'Bob',
    'job': 'Engineer',
    'location': {
      'address': {
        'state': 'New York',
        'city': 'New York City',
        'zip': '11323'
      }
    }
  }
];

data.filter( item => {
  iterateObjects(item);
})

function iterateObjects(obj){
  for(prop in obj){
    if(typeof (obj[prop]) === 'object'){
      iterateObjects(obj[prop])
    } else {
      if(prop == 'name' || prop == 'city'){
        console.log(prop.toUpperCase() + ': ', obj[prop])
      }
    }
  }

}