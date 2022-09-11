/* let number1 = "one";

function passByValue(number) {
  number = "two";
}

console.log(number1);
passByValue(number1);
console.log(number1);

const xbox = { model: "xbox one", price: 699 };
xbox.price = 999;
xbox.cpu = "ARM";
// xbox = { newModel: "xbox y" };

function passByReference(device) {
  device.price = 999;
}

console.log(xbox);
// passByReference(xbox);
console.log(xbox);
 */

document.getElementById("btn").addEventListener("click", () => {
  let btnValue = document.getElementById("inputField").valueAsNumber;
  //   btnValue = btnValue.valueAsNumber;
  //   btnValue = parseInt(btnValue);
  console.log(btnValue, typeof btnValue);
});
