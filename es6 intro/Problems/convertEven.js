/* 
You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. 
*/
// Variable
const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15];
// Solution 1
const evenNumber = oddNumbers.map((num) => num + 1);
// Solution 2
const evenNumber2 = [];
for (const num of oddNumbers) {
  evenNumber2.push(num + 1);
}
// Output
console.log(evenNumber2);
