import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.config";

const Navbar = ({children}) => {
  const [user] = useAuthState(auth);
  console.log(user)
  const signout=()=>{
    signOut(auth)
  }
  const navLinks = (
    <>
      <li>
        <NavLink className='rounded-lg mr-2' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink className='rounded-lg mr-2' to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink className='rounded-lg mr-2' to='/nav'>Navbar Item 2</NavLink>
      </li>
      <li>
        <NavLink className='rounded-lg mr-2' to='/no'>Navbar Item 2</NavLink>
      </li>
      <li>
        { user?<button onClick={signout} className='font-semibold rounded-lg mr-2'>Signout</button>:<NavLink className='rounded-lg mr-2' to='/login'>Login</NavLink>}
      </li>
    </>
  );
  return (
    <div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <div class="w-full navbar bg-base-100">
      
      <div class="flex-1 px-2 mx-2 font-bold text-primary uppercase">silver hammer</div>
	  <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal font-semibold">
       {navLinks}
        </ul>
      </div>
    </div>
   { children}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
    {navLinks}
    </ul>
  </div>
</div>
  );
};

export default Navbar;
