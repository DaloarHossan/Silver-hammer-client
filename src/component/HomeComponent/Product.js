import React, { useState } from "react";
import ProductModel from "./ProductModel";

const Product = ({ product }) => {

  const { name, description, img, min_order, quantity ,price} = product;
//   const [modelDescription,setModelDescription]=useState('')

//   const readMore=(des)=>{
//     setModelDescription(des)
//   }
//   console.log(modelDescription);
  const minDescription=description.slice(0,82)

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <div>
		  <p>Price:${price}/piece <br />
		  Min. Order:{min_order}pieces <br />
		  Quantity:{quantity}</p>
		  </div>
		  <div>
			  <p>Description:{minDescription} </p>
		  </div>
        {/* <ProductModel  des={modelDescription}></ProductModel> */}
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;