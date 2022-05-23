import React from "react";

const Product = ({ product }) => {
  const { name, description, img, min_order, quantity ,price} = product;
  console.log(product);

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
			  <p>{description}</p>
		  </div>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
