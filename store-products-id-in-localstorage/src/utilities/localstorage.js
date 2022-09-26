const addToDb = (id) => {
  let shoppingCart = {};

  //   Update shoppingCart from localStorage
  let storedCart = localStorage.getItem("cart-items");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  //   Set quantity
  let quantity = shoppingCart[id];
  if (quantity) {
    quantity = +quantity + 1;
    shoppingCart[id] = quantity;
  }
  //   if the id is not present
  else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("cart-items", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  //   check id cart-items exist
  const shoppingCart = localStorage.getItem("cart-items");
  if (shoppingCart) {
    let carts = localStorage.getItem("cart-items");
    carts = JSON.parse(carts);
    // Check if id exists in cart-items
    if (id in carts) {
      delete carts[id];
      localStorage.setItem("cart-items", JSON.stringify(carts));
    }
  }
};
export { addToDb, removeFromDb };
