import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.config";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const signout = () => {
    signOut(auth);
  };
  const navLinks = (
    <>
      <li>
        <NavLink className="rounded-lg mr-2" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg mr-2" to="/about">
          About
        </NavLink>
      </li>

      <li>
        {user && (
          <NavLink className="rounded-lg mr-2" to="/dashboard">
            Dashboard
          </NavLink>
        )}
      </li>
      <li>
        <NavLink className="rounded-lg mr-2" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg mr-2" to="/portfolio">
          My Portfolio
        </NavLink>
      </li>
      <li>
        {user ? (
          <>
            <small>{user.displayName}</small>
            <button onClick={signout} className="font-semibold rounded-lg mr-2">
              Signout
            </button>
          </>
        ) : (
          <NavLink className="rounded-lg mr-2" to="/login">
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-100">
          <div className="flex-1 px-2 mx-2 font-bold text-primary uppercase">
            silver hammer
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal font-semibold">{navLinks}</ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
