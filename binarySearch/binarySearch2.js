//Learning Leniar Search 

let arr = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
//TODO : DEVIDE THE ARRAY;
//TODO : CEIL THE ARRAY;
//TODO : COMPARE;
//TODO : TAKE WHAT IS WORKING;
/************************************
 * FIXME: I user comparesion operator bcoz I know javascript check it by default
 * But I can use ASCII values TOO, But I am still too lazy <3 :# 
 * I need to add another function so that I can check if values is number or string;
 * But who cares about that for now
 * FIXME: IT can be done with recursion , And for loop too <3 , But I am too lazy ;
 */
function bigSearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.ceil((start + end) / 2);

    while (start <= end) {
        console.log(start, end, middle);
        if (arr[middle].toLowerCase() === val.toLowerCase()) {
            console.log('found Ya!')
            return middle;
        }
        if (arr[middle].toLowerCase() > val.toLowerCase()) {
            end = middle - 1;
            middle = Math.ceil((start + end) / 2);
        }
        if (arr[middle].toLowerCase() < val.toLowerCase()) {
            start = middle + 1;
            middle = Math.ceil((start + end) / 2);
        }

    }
    return -1
}
bigSearch(arr, 'West Virginia');
// bigSearch(arr, 'Vermont');