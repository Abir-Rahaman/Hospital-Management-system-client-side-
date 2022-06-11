import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from './../Hooks/useAdmin';
import auth from '../../firebase.init';

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const {Admin}=useAdmin(user)
  console.log(Admin);
    return (
        <div class="drawer drawer-mobile">
        
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  
  <div class="drawer-content flex flex-col items-center">
    {/* <!-- Page content here --> */}
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <h2 className="text-4xl font-bold text-cyan-400 text-center ">WellCome To Dashboard</h2>
  <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li> <Link to='/dashboard' > My Appointments </Link></li>
      <li> <Link to='/dashboard/review' > My Review </Link></li>
     { Admin && <li> <Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>}
     { Admin && <li> <Link to='/dashboard/addDoctor' >Add Doctor</Link></li>}
     { Admin && <li> <Link to='/dashboard/allUser' > All User </Link></li>}

     
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;