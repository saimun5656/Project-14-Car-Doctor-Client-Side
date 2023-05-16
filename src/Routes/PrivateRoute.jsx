import React, { useContext } from 'react';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user,loading} = useContext(AuthContext);
   const location =useLocation()
   console.log(location);
   if(loading){
    return(
        <>Loading</>
    )
   }
   if(user){
    return children
   }
    return <Navigate to='/account/signin' state={{from:location.pathname}} replace ></Navigate>
};

export default PrivateRoute;