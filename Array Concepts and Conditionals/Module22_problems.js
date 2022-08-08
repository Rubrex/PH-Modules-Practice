function calcArea(side1, side2, side3) {
  let s = (side1 + side2 + side3) / 2;
  let calcArea = s * (s - side1) * (s - side2) * (s - side3);
  let area = Math.sqrt(calcArea);
  return `The area of a triangle is ${area.toFixed(2)}`;
}
console.log(calcArea(2, 3, 4));

function findPrime(number) {
  if (number < 2) {
    return `${number} is not a prime number`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(findPrime(52));
