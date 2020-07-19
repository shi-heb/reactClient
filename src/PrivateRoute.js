import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


// Utils
//import auth from '../../utils/auth';

  

  
  

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    localStorage.getItem('token')  ? (
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
