import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.config";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [admin]=useAdmin(user)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-200 flex flex-col">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <div>
            <h1>My Dashboard</h1>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Ad A Review</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">My Profile</Link>
            </li>
            
               { admin && <>
                <li><Link to="/dashboard/orders">Manage All Orders</Link></li>
                <li><Link to="/dashboard/addProduct">Add A Product</Link></li>
                <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>
                <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
            </>}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
