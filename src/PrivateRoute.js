import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

// Utils
//import auth from '../../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    localStorage.getItem('token') !== null ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: "/login",
        
        }}
      />
    )
  )} />
);

export default PrivateRoute;