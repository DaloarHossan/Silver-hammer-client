import React from 'react';
import pic from '../../assets/login.png'
import { useForm } from "react-hook-form";
import { Link, useNavigate} from 'react-router-dom';
import auth from '../../firebase.config';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../component/SharedComponent/Loading';
import useToken from '../../Hooks/useToken';

const Login = () => {
	const navigate =useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);
	const [token] = useToken(user || gUser)
	
	console.log(gUser);
	
	let setError;
	if(loading || gLoading){
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
  const onSubmit = data => {
   signInWithEmailAndPassword(data.email, data.password)
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
		<label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        <div class="form-control mt-6">
          <input type='submit' class="btn btn-primary" value="Login"/>
        </div>
		
      </form>
	  <div class='px-8 mb-6'>
	  <small>Are you New on Sliver Hammer? <span class="text-secondary"><Link to='/signup'>Create New an Account</Link></span></small>
	  <div class="divider">OR</div>
	   
		<button onClick={handelGoogle} class="btn btn-primary w-full">Continue With Google</button>
		
	  </div>
    </div>
  </div>
</div>
	);
};

export default Login;