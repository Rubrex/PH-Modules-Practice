import React from "react";
import { addToDb, removeFromDb } from "../../utilities/localstorage";

const Product = (props) => {
  const { title, price, _id } = props.productDetails;

  const handleBuyNow = (id) => {
    addToDb(id);
  };
  const handleRemove = (id) => {
    removeFromDb(id);
  };

  return (
    <div className="col h-100">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            <span className="fw-bold fs-3">$ {price}</span>
          </p>
          <p>Product ID: {_id}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => handleBuyNow(_id)}
            >
              Buy Now
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(_id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
