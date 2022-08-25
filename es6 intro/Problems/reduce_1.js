/* 
Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
 */

// Global Variables
const people = [
  { name: "solaiman dukhon", age: 69 },
  { name: "Selmon fishary", age: 59 },
  { name: "Allu Chan", age: 45 },
];

// Soulution 1
const totalAge = people.reduce((acc, currentValue) => {
  acc += currentValue.age;
  return acc;
}, 0);

// Output
console.log(totalAge);
