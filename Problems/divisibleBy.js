/* 
You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. 
*/

// Global Variable
const numbers = [33, 15, 23, 54, 21, 20, 60, 68, 88, 10, 200, 100, 450];

// Solution 1
const divisible = numbers.filter((num) => num % 10 == 0);
// Compare with find() method
const findIt = numbers.find((num) => num % 10 == 0);
// Output
console.log(divisible);
console.log(findIt);

// Conclusions
/* 
    .filter() method returns all the elements which are divisible by 10 using
    .find() method returns only the first matched element which is divisible by 10
*/
