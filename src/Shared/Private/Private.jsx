import React, { useContext } from 'react';
import { authProvider } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {loading,user} = useContext(authProvider);
   if (loading) {
    return (
        <progress className="progress w-56"></progress>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>;
};


export default Private;