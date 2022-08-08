// Simple Interest Calculation

function getFutureValue(presentValue, timeInYears, annualRateOfInterest) {
  let r = annualRateOfInterest / 100;
  let t = timeInYears;
  let p = presentValue;
  let futureValue = p * (1 + r * t);
  return `You'll get ${futureValue.toFixed(
    2
  )} Taka after ${t} years at annual Interest of ${annualRateOfInterest}% `;
}
console.log(getFutureValue(15000, 2, 2));

// Compound/Complex Interest Calculation

function getFutureValueOfCompound(
  principal,
  interestRate,
  numOfCompounds,
  timeInYears
) {
  let interest = interestRate / 100;
  let futureValue =
    principal *
    Math.pow(1 + interest / numOfCompounds, numOfCompounds * timeInYears);
  return `You'll get ${futureValue.toFixed(
    2
  )} Taka after ${timeInYears} years at ${numOfCompounds} times Compounds per year and Interest Rate of ${interestRate}%`;
}

console.log(getFutureValueOfCompound(15000, 2, 2, 2));
