import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';
import Loading from '../SharedComponent/Loading';

const Profile = () => {
	const [user]=useAuthState(auth)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	  } = useForm();
	  const onSubmit = (data) => {
     const profileInfo={
		 email:user.email,
          education:data.education,
		  location: data.location,
		  number: data.number,
		  account:data.account
	 }
	 console.log(profileInfo);
	 fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,

        "content-type": "application/json",
      },
      body: JSON.stringify(profileInfo),
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
	
	 
	  }
	
	  const {data:profile, isLoading,refetch} =useQuery('profile',()=>fetch(`http://localhost:5000/profile/${user.email}`,{
		  method: 'GET',
		  headers: {
			authorization: `Bearer ${localStorage.getItem("accessToken")}`,

			"content-type": "application/json", 
		  }
	  }).then((res) => res.json()))
	  refetch()
	  if(isLoading){
		  return <Loading></Loading>
	  }
	  const {education,location,number,account}=profile;
	return (
		<div className='grid lg:grid-cols-2 gap-5 m-12'>
			<div>
			<div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
	  <div>
		  <h4>Email :{user.email}</h4>
		  <h4>Education :{education
			  }</h4>
		  <h4>Location :{location}</h4>
		  <h4>Phone Number :{number}</h4>
		  <h4>Social Account :{account}</h4>
	  </div>
  </div>
</div>
			</div>
			<div>
			<div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
	  <h1>Update Your Profile</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
	<input type="text"
                placeholder="Education"
                className="input input-bordered w-full "
                {...register("education", {
                  required: { value: true, message: "education is required" },
                })}
              />
              <label className="label">
                {errors.education?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.education.message}
                  </small>
                )}
              </label>
	<input type="text"
                placeholder="Location/City"
                className="input input-bordered w-full "
                {...register("location", {
                  required: { value: true, message: "Address is required" },
                })}
              />
              <label className="label">
                {errors.location?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.location.message}
                  </small>
                )}
              </label>
	<input type="text"
                placeholder="Number"
                className="input input-bordered w-full "
                {...register("number", {
                  required: { value: true, message: "Address is required" },
                })}
              />
              <label className="label">
                {errors.number?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.number.message}
                  </small>
                )}
              </label>
	<input type="text"
                placeholder="Social Account Link"
                className="input input-bordered w-full "
                {...register("account", {
                  required: { value: true, message: "Address is required" },
                })}
              />
              <label className="label">
                {errors.account?.type === "required" && (
                  <small className="label-text text-red-500">
                    {errors.account.message}
                  </small>
                )}
              </label>
			  
<div>  <input type="submit" value='Update' placeholder="input rating" class="input btn btn-primary input-bordered w-full max-w-xs" />
</div>
	</form>
  </div>
</div>
			</div>
		</div>
	);
};

export default Profile;