import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.config";

const Review = () => {
  const [ratingError, setRatingError] = useState(false);
  const [rating, setRatingQuantity] = useState(0);

  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const ratingHandel = (e) => {
    const rating = e.target.value;

    if (rating <= 5 && rating >= 5) {
      setRatingError(false);
      setRatingQuantity(rating);
    } else {
      setRatingError(true);
    }
  };
  const onSubmit = (data) => {
    const reviewsInfo = {
      name: user.displayName,
      ratings: rating,
      comment: data.comment,
    };
    console.log(reviewsInfo);
    fetch("https://silver-hammer643.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,

        "content-type": "application/json",
      },
      body: JSON.stringify(reviewsInfo),
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
    <div className="flex justify-center items-center">
      <h1>review</h1>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="form-control w-full max-w-xs"
          >
            <label class="label">
              <span class="label-text">What is your name?</span>
            </label>
            <input
              type="number"
              onChange={ratingHandel}
              placeholder="input rating"
              class="input input-bordered w-full max-w-xs"
              name="rating"
              required
            />
            <label class="label">
              <span className="text-center text-red-600">
                {ratingError ? "Rating must be set less or equal 5" : " "}
              </span>
            </label>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Comment</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                placeholder="Bio"
                {...register("comment", {
                  required: { value: true, message: "Address is required" },
                })}
              ></textarea>
              <label class="label">
                {errors.comment?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.comment.message}
                  </small>
                )}
              </label>
            </div>
            <div>
              {" "}
              <input
                type="submit"
                placeholder="input rating"
                class="input btn btn-primary input-bordered w-full max-w-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
