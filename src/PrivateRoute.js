import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


// Utils
//import auth from '../../utils/auth';

  

  
  

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (localStorage.getItem('token')===null) {
          alert('accesss denied, you must register ');
          
          window.location = '/login';
            
            }
        if ((jwt_decode(localStorage.getItem('token')).role=='user')&&(jwt_decode(localStorage.getItem('token')).isactive==true)) {
          return <Component {...rest} {...props} />
         
        } 
        
        
        else {alert('accesss denied')
        window.location = '/login';
          
        }
      }
    } />
  )
}




export default PrivateRoute;
