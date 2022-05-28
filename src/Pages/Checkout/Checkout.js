import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.config";
import Loading from "../../component/SharedComponent/Loading";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Checkout = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [quantityError, setQuantityError] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  const { name, price, img, description, min_order, quantity } = product;
  const orderHandel = (e) => {
    const orderData = e.target.value;

    if (orderData >= product.min_order && orderData <= quantity) {
      setQuantityError(false);
      setOrderQuantity(orderData);
    } else {
      setQuantityError(true);
    }
  };
  const onSubmit = (data) => {
    const orderInfo = {
      userName: user.displayName,
      email: user.email,
      productName: name,
      productImg: img,
      quantity: orderQuantity,
      price: orderQuantity * price,
      address: data.address,
      phone: data.phone,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,

        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      });

    reset();
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content shadow-2xl rounded-lg flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg" alt={name} />
          <div className="card-body">
            <h1 className="card-title">{name}</h1>
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
      <div className="flex justify-center">
        <div className="card w-full lg:w-1/2  bg-secondary shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Purchase</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-actions flex-col justify-center items-center">
                <label className="label">
                  <span className="label-text font-bold">Quantity</span>
                </label>
                <input
                  onChange={orderHandel}
                  name="quantity"
                  required
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-1/2 max-w-xs"
                />
                <label>
                  <span className="text-center text-red-600">
                    {quantityError ? "At least min order purchase" : " "}
                  </span>
                </label>
              </div>
              <label>
                <span className="label-text block">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={user.displayName}
                readOnly
                className="input input-bordered w-full "
              />
              <label>
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                value={user.email}
                readOnly
                className="input input-bordered w-full"
              />
              <label>
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Add Address"
                className="input input-bordered w-full "
                name="address"
                {...register("address", {
                  required: { value: true, message: "Address is required" },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.address.message}
                  </small>
                )}
              </label>
              <label>
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Add Phone"
                className="input input-bordered w-full "
                name="phone"
                {...register("phone", {
                  required: { value: true, message: "Phone is required" },
                })}
              />
              <label className="">
                {errors.phone?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.phone.message}
                  </small>
                )}
              </label>
              <div className="card-actions justify-center">
                <button
                  disabled={quantityError}
                  className="btn px-12 text-white btn-primary"
                >
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
