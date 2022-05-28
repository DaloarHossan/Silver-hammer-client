import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://silver-hammer643.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-12">
      <h1>Tools</h1>
      <div className="grid lg:grid-cols-3 gap-5 md:mx-12">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
    </div>
  );
};

export default Products;
