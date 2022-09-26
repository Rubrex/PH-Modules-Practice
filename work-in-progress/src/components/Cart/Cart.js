import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  return (
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
  );
};

export default Cart;
