// Accounts elements
const depositeText = document.getElementById("depositeText");
const withdrawText = document.getElementById("withdrawText");
const balanceText = document.getElementById("balanceText");
// Input elements
const depositeBtn = document.getElementById("depositeBtn");
const depositeInput = document.getElementById("depositeInput");
const withdrawBtn = document.getElementById("withdrawBtn");
const withdrawInput = document.getElementById("withdrawInput");
// Initial Balance
let initialBalance = 420;
balanceText.innerText = initialBalance;

depositeBtn.addEventListener("click", () => {
  if (depositeInput.value.length == 0) {
    return alert("Please Enter amount in Taka");
  }
  const amount = parseInt(depositeInput.value);
  let newDeposite = parseInt(depositeText.innerText);
  newDeposite += amount;
  depositeText.innerText = newDeposite;
  let newBalance = parseInt(balanceText.innerText);
  newBalance += amount;
  balanceText.innerText = newBalance;
  depositeInput.value = "";
});
withdrawBtn.addEventListener("click", () => {
  if (withdrawInput.value.length == 0) {
    return alert("Please Enter amount in Taka");
  }
  const amount = parseInt(withdrawInput.value);
  let withdraw = parseInt(withdrawText.innerText);
  withdraw += amount;
  withdrawText.innerText = withdraw;
  let newBalance = parseInt(balanceText.innerText);
  newBalance -= amount;
  balanceText.innerText = newBalance;
  withdrawInput.value = "";
});
