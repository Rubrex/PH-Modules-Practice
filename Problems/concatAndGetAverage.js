/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the 
result
 */

// Array variables
const firstArray = [1, 2, 3, 4, 5, 6, 7, 8];
const secondArray = [9, 10, 11, 12, 20, 13, 14, 15];
// Solution 1: Using Concat, Math.max,rest operator
const findMaximumFromArray = (array1, array2) => {
  const combined = array1.concat(array2);
  return Math.max(...combined);
};
// Solution 2: Using rest operator Math.max
const findMaximumFromArray1 = (array1, array2) => {
  const combined = [...array1, ...array2];
  return Math.max(...combined);
};

// Output
console.log(findMaximumFromArray(firstArray, secondArray));
console.log(findMaximumFromArray1(firstArray, secondArray));
