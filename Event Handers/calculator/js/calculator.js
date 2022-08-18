let display = document.getElementById("display");
const pads = document.getElementById("pads");

pads.addEventListener("click", function (event) {
  if (event.target.tagName !== "SECTION") {
    const targetValue = event.target.innerText;

    if (!isNaN(parseInt(targetValue))) {
      // Prevent detecting outside Buttons
      // Update display with number
      display.innerText += targetValue;
    } else if (targetValue === "=") {
      const result = eval(display.innerText);
      //   display result
      display.innerText = parseFloat(result).toFixed(2);
    } else if (targetValue === "C") {
      //   clear display
      display.innerText = "";
    } else {
      // updating display with +, -, *, /
      display.innerText += targetValue;
    }
  }
});
