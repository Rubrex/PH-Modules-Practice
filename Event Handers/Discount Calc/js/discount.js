const totalPrice = getInnerNumberById("totalPrice");
document.getElementById("couponBtn").addEventListener("click", () => {
  const inputData = getInputData("couponField");
  if (inputData === "DOM") {
    document.getElementById("discountedPrice").innerText =
      totalPrice - (totalPrice * 30) / 100;
    document.getElementById("couponField").value = "";
  } else {
    document.getElementById("couponField").classList.add("shake");
    setTimeout(() => {
      document.getElementById("couponField").classList.remove("shake");
      console.log("executed delay");
    }, 500);
    document.getElementById("discountedPrice").innerText = "";
    document.getElementById("couponField").value = "";
  }
});
