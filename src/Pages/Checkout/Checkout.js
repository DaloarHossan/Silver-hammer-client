import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.config";
import Loading from '../../component/SharedComponent/Loading';


const Checkout = () => {
  const { id } = useParams();
  const [user,loading] = useAuthState(auth);
  // const [quantityError,setQuantityError]=useState({error:' '});
  const [quantityError,setQuantityError]=useState(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if(loading) {
    return <Loading></Loading>
  }
  const { name, price, img, description, min_order, quantity } = product;
  const orderHandel=(e)=> {
    const order = e.target.value;
    
    
    if(order>=product.min_order){
     return setQuantityError(false)
    }
    else{
      return setQuantityError(true);
    }  
   
      
  }
  
console.log(quantityError.error);

  return (
   <div>
	    <div class="hero min-h-screen">
      <div class="hero-content shadow-2xl rounded-lg flex-col lg:flex-row">
        <img src={img} class="max-w-sm rounded-lg" alt={name} />
        <div class='card-body'>
          <h1 class="card-title">{name}</h1>
          <p>
            Price:${price}/piece <br />
            Min. Order:{min_order}pieces <br />
            Quantity:{quantity}
          </p>
          <div>
            <p>Description:{description} </p>
          </div>
        </div>
      </div>
    </div>
	<div class='flex justify-center'>
	<div class="card w-full lg:w-1/2  bg-secondary shadow-xl">
  <div class="card-body">
    <h2 class="card-title justify-center">Purchase</h2>
    <div class="card-actions flex-col justify-center items-center">
    <label class="label">
            <span class="label-text font-bold">Quantity</span>
     </label>
    <input onBlur={orderHandel} name="quantity" type="number" placeholder="Type here" class="input input-bordered w-1/2 max-w-xs" />
    <label>
      <span class="text-center text-red"> {quantityError? 'At least min order purchase' : ' '}</span>
    </label>
    </div>
    
    <label>
            <span class="label-text block">Name</span>
     </label>
    <input type="text" placeholder="Type here" value={user.displayName} disabled class="input input-bordered w-full " />
    <label>
            <span class="label-text">Email</span>
    </label>
    <input type="email" placeholder="Type here" value={user.email} disabled class="input input-bordered w-full" />
    <label>
            <span class="label-text">Address</span>
    </label>
    <input type="text" placeholder="Add Address" class="input input-bordered w-full " />
    <label>
            <span class="label-text">Phone</span>
    </label>
    <input type="text" placeholder="Add Phone" class="input input-bordered w-full " />
    <div class="card-actions justify-center">
      <button disabled={quantityError} class="btn px-12 text-white btn-primary">Order</button>
    </div>
  </div>
</div>
	</div>
   </div>
  );
};

export default Checkout;
