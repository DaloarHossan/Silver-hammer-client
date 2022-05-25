import React from 'react';
import pic from '../../assets/login.png'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../component/SharedComponent/Loading';
import useToken from '../../Hooks/useToken';

const Signup = () => {
	const navigate =useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	  const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useCreateUserWithEmailAndPassword(auth);
	  const [updateProfile, updating] = useUpdateProfile(auth);
	  const [token] = useToken(user || gUser)
	let setError;
	if(loading || gLoading || updating){
		return <Loading></Loading>
	}
	if(error || gError){
		setError =error.message;
	}
	if(token){
      navigate('/')
	}
	const handelGoogle=()=>{
		signInWithGoogle();
	}
  const onSubmit = async (data) => {
   await createUserWithEmailAndPassword(data.email, data.password)
   await updateProfile({displayName:data.name})
  };
	return (
		<div class="min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <div class="hero-content hidden md:block">
	<img src={pic} class="" alt="" />
    </div>
    <div class="card flex-shrink-0 w-full md:max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} class="card-body" >
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" 
		  name="name" placeholder="Name" class="input input-bordered" {...register("name", { required:{value:true, message: 'Name is required'} ,
		  pattern: {
			  value:  /[a-zA-Z].{2,20}/,
			  message: 'Must be at least 3 characters and long' 
			}})} />
		<label class="">
            {errors.name?.type === 'required' &&  <small className="label-text text-red-500">{errors.email.message}</small>}
			{<errors className="name"></errors>?.type === 'pattern' &&  <small className="label-text text-red-500">{errors.email.message}</small>}
          </label>
		  
        </div>
        <div class="form-control">
          <label class="">
            <span class="label-text">Email</span>
          </label>
          <input type="email" 
		  name="email" placeholder="email" class="input input-bordered" {...register("email", { required:{value:true, message: 'Email is Required'} ,
		  pattern: {
			  value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			  message: 'Please input a valid email' 
			}})} />
		<label class="">
            {errors.email?.type === 'required' &&  <small className="label-text text-red-500">{errors.email.message}</small>}
			{errors.email?.type === 'pattern' &&  <small className="label-text text-red-500">{errors.email.message}</small>}
          </label>
		  
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" class="input input-bordered" {...register("password", { required:{value:true, message: 'Password is Required'},
				pattern: {
					value:/^(?=.*\d).{6,20}$/,
					message: 'Must be at least 6 characters' 
			}})}/>
		  <label class="">
		  {errors.password?.type === 'required' &&  <small className="label-text text-red-500">{errors.password.message}</small>}
			{errors.password?.type === 'pattern' &&  <small className="label-text text-red-500">{errors.password.message}</small>}
          </label>
		  <p><small className="label-text text-red-500">{setError}</small></p>
        </div>
		<label class="">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        <div class="form-control mt-6">
          <input type='submit' class="btn btn-primary" value="Signup"/>
        </div>
		
      </form>
	  <div class='px-8 mb-6'>
	  <small>Already have an account? <span class="text-secondary"><Link to='/login'>Please login</Link></span></small>
	  <div class="divider">OR</div>
		<button onClick={handelGoogle} class="btn btn-primary w-full">Continue With Google</button>
	  </div>
    </div>
  </div>
</div>
	);
};

export default Signup;