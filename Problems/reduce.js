/* 
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

// Global Variables
const myArray = [1, 9, 17, 22];

// Solution 1
const totalPlus = myArray.reduce((acc, currentValue) => {
  acc += currentValue;
  return acc;
}, 0);

// Output
console.log(totalPlus);
