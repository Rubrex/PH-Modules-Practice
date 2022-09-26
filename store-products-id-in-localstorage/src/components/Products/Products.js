import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.storerestapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  //   Map Products Object

  return (
    <div className="row row-cols-3 g-4">
      {products.map((product) => {
        return <Product key={product._id} productDetails={product} />;
      })}
    </div>
  );
};

export default Products;
