import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation,Navigate} from "react-router-dom";
import useAdmin from './../Hooks/useAdmin';


const RequireAdmin = ({children}) => {
    const {adminLoading} = useAdmin()
    const location = useLocation()
    const [user] = useAuthState(auth)

    
    if (!user || !adminLoading) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
    return children;
};

export default RequireAdmin;