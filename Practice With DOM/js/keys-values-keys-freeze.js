const bottle = { color: "Golden", price: 250, isClean: true };
Object.freeze(bottle);
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle);
delete bottle.price;

// Output
console.log(bottle);
console.log(keys);
console.log(values);
console.log(bottle);
