localStorage.setItem("name", "Shakib Khan");
localStorage.setItem("age", "40");
// Get the local storage values
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
// Remove the local storage values
localStorage.removeItem("name");
localStorage.removeItem("age");
console.log(name, age);

// Set an object to the local storage values

const myObj = { firstName: "Rubel", lastName: "Hossain" };
const myObjStringified = JSON.stringify(myObj);
localStorage.setItem("person", myObjStringified);

console.log(localStorage.getItem("person"));
