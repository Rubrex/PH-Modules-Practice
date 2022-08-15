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
  const amount = parseFloat(depositeInput.value);
  let newDeposite = parseFloat(depositeText.innerText);
  newDeposite += amount;
  depositeText.innerText = newDeposite.toFixed(1);
  let newBalance = parseFloat(balanceText.innerText);
  newBalance += amount;
  balanceText.innerText = newBalance.toFixed(1);
  depositeInput.value = "";
});
withdrawBtn.addEventListener("click", () => {
  if (withdrawInput.value.length == 0) {
    return alert("Please Enter amount in Taka");
  }
  const amount = parseFloat(withdrawInput.value);
  let withdraw = parseFloat(withdrawText.innerText);
  withdraw += amount;
  withdrawText.innerText = withdraw.toFixed(1);
  let newBalance = parseFloat(balanceText.innerText);
  newBalance -= amount;
  balanceText.innerText = newBalance.toFixed(1);
  withdrawInput.value = "";
});
