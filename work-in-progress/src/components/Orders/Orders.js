import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      This is out Orders page
      <h2>Products: {products.length}</h2>
    </div>
  );
};

export default Orders;
