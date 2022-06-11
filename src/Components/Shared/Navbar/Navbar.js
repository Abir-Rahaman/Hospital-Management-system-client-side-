import React from 'react';
import './Navbar.css'
import logo from '../../../assets/images/doctor-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('token')
  };
  
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 100 50" stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Reviews</a></li>
        <li><a>Appointment</a></li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost h-32 normal-case text-xl ml-24"><img className='w-20 hidden lg:block' src={logo} alt="" /> </a>
  </div>
  <div className="navbar hidden lg:flex navbar-menu mx-0">
    <ul className="menu menu-horizontal p-0 text-xl font-bold ">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Reviews</a></li>
      <Link to="/appointment"> <li><a>Appointment</a></li></Link>
      {
        user && <Link to="/dashboard"> <li><a>Dashboard</a></li></Link>
      }
   
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="lg:navbar login">
    {
      user? <button onClick={() => logout(auth)} className="btn btn-outline btn-error"> Sign Out</button>: <button><Link to="/login" className="btn"> Log In</Link></button>
    }
    
    
  </div>
</div>
    );
};

export default Navbar;