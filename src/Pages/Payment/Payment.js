import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../component/SharedComponent/Loading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../component/PaymentComponent/CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const { data: orderDetails, isLoading } = useQuery(["order, id"], () =>
    fetch(`https://silver-hammer643.herokuapp.com/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const stripePromise = loadStripe(
    "pk_test_51L47qKCcivjRBDlLs8STZnIfSm9pNfnzaqB36YIiGwHkk7MxwuRqqEjmu00AdixxzR8PQzbl41tbcyePAG1siTX20058XnsKjY"
  );
  const { productName, price } = orderDetails;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Product Name: {productName}</h2>
          <p>Price:${price}</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
