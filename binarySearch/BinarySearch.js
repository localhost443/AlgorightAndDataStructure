//Learning Leniar Search 

let arr = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
//TODO : DEVIDE THE ARRAY;
//TODO : CEIL THE ARRAY;
//TODO : COMPARE;
//TODO : TAKE WHAT IS WORKING;
function bigSearch(arr, val) {
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 <= p2) {
    console.log('I am in the loop')
    console.log(p1, p2);
    let middle = Math.ceil(p2 / 2);
    console.log(middle);
    if (arr[middle].toLowerCase() === val.toLowerCase()) {
      console.log(`${arr[middle].toLowerCase()} and ${val.toLowerCase()}`);
      console.log(middle);
      return middle;
    }
    if (arr[middle].toLowerCase() > val.toLowerCase()) {
      console.log(`${arr[middle].toLowerCase()} and ${val.toLowerCase()}`);
      p2 = middle;
    }
    if (arr[middle].toLowerCase() < val.toLowerCase()) {
      console.log(`${arr[middle].toLowerCase()} and ${val.toLowerCase()}`);
      p1 = middle;
    }
    if (p1 === 1 || p2 === 1) {
      break;
    }
  }
}
bigSearch(arr, 'Alabama');
// bigSearch(arr, 'Vermont');
// bigSearch(arr, 'Mississippi');