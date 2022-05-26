import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
	
	return (
		<div>
			<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content bg-base-200 flex flex-col">
    {/* <!-- Page content here --> */}
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	<div>
		<h1>My Dashboard</h1>
		
	</div>
	<Outlet/>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>OrderList</Link></li>
      <li><Link to='/dashboard/review'>Review</Link></li>
    </ul>
  
  </div>
</div>
		</div>
	);
};

export default Dashboard;