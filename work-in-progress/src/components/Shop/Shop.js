import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  // States
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // useEffect
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  // Get data from local storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const newCart = [];
    // Looping through id from products and updating quantity from localStorage  to cart object
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        newCart.push(addedProduct);
      }
    }
    setCart(newCart);
  }, [products]);
  // event Handlers
  const addToCardHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCardHandler={addToCardHandler}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
