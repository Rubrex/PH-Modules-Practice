function argFunction() {
  const arg = arguments;
  const argCopy = [...arg];

  console.log(arg);
}

argFunction(2, 2, 2, 3);

const obj = { 0: 2, 1: 2, 2: 2, 3: 3 };
const objCopy = { ...obj };
console.log(objCopy);
