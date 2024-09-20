// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user, setRedirectAfterLogin } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        if (!user) {
          // Save the route the user was trying to access
          setRedirectAfterLogin(props.location.pathname);
          return <Redirect to='/login' />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
