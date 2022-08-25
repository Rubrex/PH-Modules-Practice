/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
 */

// Original Array
const myArray = [2, 3, 4, 5, 6, 7, 8];
// Solution 1
const sumOfAllSquaredArrays = (arrays) => {
  let newArray = [];
  for (const array of arrays) {
    const double = array * 2;
    newArray.push(double);
  }
  console.log(newArray);
  //   sum of the array of squared elements
  let sum = 0;
  for (const array of newArray) {
    sum += array;
  }
  return sum / newArray.length;
};
// Solution 2
const sumOfAllSquaredArrays1 = (arrays) => {
  let sum = 0;
  for (const array of arrays) {
    sum += array * 2;
  }

  return sum / arrays.length;
};
// Solution 3: Using map method
const sumOfAllSquaredArrays2 = (arrays) => {
  let sum = 0;
  const double = arrays.map((num) => num * 2);
  for (const array of double) {
    sum += array;
  }

  return sum / double.length;
};

console.log(sumOfAllSquaredArrays2(myArray));
