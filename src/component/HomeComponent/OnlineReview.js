import React from "react";
import { useQuery } from "react-query";
import avatar from "../../assets/avatar.png";

const OnlineReview = () => {
  const { data: reviews } = useQuery("reviews", () =>
    fetch("https://silver-hammer643.herokuapp.com/reviews", {
      method: "Get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div className="my-24">
      <div className="mb-8">
        <h1 className="text-center text-secondary text-4xl font-bold">
          Online Buyer Reviews
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
        {reviews?.map((review) => (
          <div class="card w-96 bg-base-100 shadow-xl">
            <div>
              <div className="flex">
                <div class="avatar">
                  <div class="w-24 rounded-full">
                    <img src={avatar} alt="avatar" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="card-title">{review.name}</h1>
                  <p>{review.ratings} out of 5.0</p>
                </div>
              </div>
            </div>
            <div class="card-body items-center text-center">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineReview;
