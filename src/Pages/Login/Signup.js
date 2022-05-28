import React from "react";
import pic from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../component/SharedComponent/Loading";
import useToken from "../../Hooks/useToken";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);
  let setError;
  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    setError = error.message;
  }
  if (token) {
    navigate("/");
  }
  const handelGoogle = () => {
    signInWithGoogle();
  };
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
  };
  return (
    <div className="min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="hero-content hidden md:block">
          <img src={pic} className="" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full md:max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  pattern: {
                    value: /[a-zA-Z].{2,20}/,
                    message: "Must be at least 3 characters and long",
                  },
                })}
              />
              <label className="">
                {errors.name?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.email.message}
                  </small>
                )}
                {(<errors className="name"></errors>)?.type === "pattern" && (
                  <small className="label-text text-red-500">
                    {errors.email.message}
                  </small>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: { value: true, message: "Email is Required" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please input a valid email",
                  },
                })}
              />
              <label className="">
                {errors.email?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.email.message}
                  </small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className="label-text text-red-500">
                    {errors.email.message}
                  </small>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: { value: true, message: "Password is Required" },
                  pattern: {
                    value: /^(?=.*\d).{6,20}$/,
                    message: "Must be at least 6 characters",
                  },
                })}
              />
              <label className="">
                {errors.password?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.password.message}
                  </small>
                )}
                {errors.password?.type === "pattern" && (
                  <small className="label-text text-red-500">
                    {errors.password.message}
                  </small>
                )}
              </label>
              <p>
                <small className="label-text text-red-500">{setError}</small>
              </p>
            </div>
            <label className="">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Signup" />
            </div>
          </form>
          <div className="px-8 mb-6">
            <small>
              Already have an account?{" "}
              <span className="text-secondary">
                <Link to="/login">Please login</Link>
              </span>
            </small>
            <div className="divider">OR</div>
            <button onClick={handelGoogle} className="btn btn-primary w-full">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
