/*
    Problem : 1
    You are given an array:var fruits=['Apple','Banana','Orange'];

    a)Find the index of'Banana'and replace'Banana'with'Mango'.
    b)Remove'Orange'and add'Watermelon'.
*/
// Solution for Problem 1 section : a
var fruits = ["Apple", "Banana", "Orange"];
var bananaIndex = fruits.indexOf("Banana"); // Index of Banana
fruits[bananaIndex] = "Mango"; // Replaced Banana with Mango
console.log(fruits);
// Solution for Problem 1 section : b
fruits.pop(); // Removes Orange
fruits.push("Watermelon"); // Adds Watermelon
console.log(fruits);
/*
    Problem : 2
    You and your friends Tom,Jane,Peter and John got their final exam results.Your total
    score is 85,Tom's total score is 66,Jane's total score is 95,Peter's total score is 56
    and John's total score is 40. The grading chart is
                            80 or above A grade
                            60 or above B grade
                            50 or above C grade
                            40 or above D grade
                            39 or less> F grade
    Write a program to find you and your friends'grades using if-else.
*/
var Rubel = 85,
  Tom = 66,
  Jane = 95,
  Peter = 56,
  John = 40;

function getGrade(name, yourGrade) {
  if (yourGrade >= 80) {
    console.log(
      "Hi " + name + "! You got " + yourGrade + " and your grade is " + "A"
    );
  } else if (yourGrade >= 60 && yourGrade < 80) {
    console.log(
      "Hi " + name + "! You got " + yourGrade + " and your grade is " + "B"
    );
  } else if (yourGrade >= 50 && yourGrade < 60) {
    console.log(
      "Hi " + name + "! You got " + yourGrade + " and your grade is " + "C"
    );
  } else if (yourGrade >= 40 && yourGrade < 50) {
    console.log(
      "Hi " + name + "! You got " + yourGrade + " and your grade is " + "F"
    );
  }
}
getGrade("Rubel", Rubel);
getGrade("Tom", Tom);
getGrade("Jane", Jane);
getGrade("Peter", Peter);
getGrade("John", John);
/*
    Problem : 3
    You are given three numbers 13,79,and 45. Writeaprogram that will print the
    largest number using if-else.

*/
var number1 = 13,
  number2 = 46,
  number3 = 52;
if (number1 > number2 && number1 > number3) {
  console.log(number1 + " is the largest number");
}
if (number2 > number1 && number2 > number3) {
  console.log(number2 + " is the largest number");
}
if (number3 > number1 && number3 > number2) {
  console.log(number3 + " is the largest number");
}
/*
    Problem : 4

    You are given a triangle with the sides 9,8,9. Write a program to check whether a
    triangle is Isosceles or not using if-else.
                                Isosceles>two sides are equal
*/
var side1 = 9,
  side2 = 8,
  side3 = 9;

if (side1 == side2 || side2 == side3 || side3 == side1) {
  console.log("The Triangle is Isosceles");
} else {
  console.log("The Triangle is not Isosceles");
}
