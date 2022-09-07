// Set initial value of localStorage
let countValue = localStorage.getItem("count");
countValue === null || isNaN(countValue)
  ? localStorage.setItem("count", "0")
  : countValue;
console.log(countValue);
// Display Value from localStorage
const displayCount = document.getElementById("displayCount");
displayCount.innerText = countValue;
let displayCountValue = parseInt(displayCount.innerText);
const decreaseCount = () => {
  --displayCountValue;
  displayCount.innerText = displayCountValue;
  updateLocalStorage(displayCountValue);
};
const increaseCount = () => {
  ++displayCountValue;
  displayCount.innerText = displayCountValue;
  updateLocalStorage(displayCountValue);
};
// Update Local Storage
const updateLocalStorage = (number) => {
  localStorage.setItem("count", number);
};
