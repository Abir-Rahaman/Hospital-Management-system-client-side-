import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
  } from "react-router-dom";
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';


const RequireAuth = ({children}) => {
  const navigate = useNavigate()
    const location = useLocation()
    const [user,loading] = useAuthState(auth)

    if(loading){
       return <Loading></Loading>
    }
    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
    return children;
};

export default RequireAuth;