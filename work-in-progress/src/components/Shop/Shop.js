import React, { useEffect, useState } from "react";
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
  // event Handlers
  const addToCardHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container container">
      {console.log(cart)}
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
        <div className="cart">
          <h3>Order Summary</h3>
          <div className="cart-info">
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h2>Grand Total: </h2>
          </div>
          <div className="btn-group">
            <button className="clear-btn">Clear Cart</button>
            <button className="review-btn">Review Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
