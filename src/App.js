import React from 'react';
import Nav from './Nav';
import register from './register';
import AllUsers from './AllUsers';

import profile from'./profile';
import logout from'./logout';
import PrivateRoute from './PrivateRoute';

import jwt_decode from 'jwt-decode';
import {Redirect }from 'react-router-dom';




 
//var cors = require('cors');

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import login from './login';
//import { Route } from 'react-router-dom';
const Protecadmin = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (localStorage.getItem('token')===null) {
          alert('accesss denied, you must register as admin');
          
          window.location = '/login';
            
            }
        if (jwt_decode(localStorage.getItem('token')).role=='admin') {
          return <Component {...rest} {...props} />
        } 
        
        
        else {alert('accesss denied')
          
        }
      }
    } />
  )
}


function App() {
  return (
    <Router>
    <div className ="App">
   <Nav />
     <Switch>
       <Route path = "/"exact component = {home}/>
       <Route path = "/register"  component = {register}/>
       <Protecadmin path ="/users" exact component ={AllUsers}/>
       <Route path ="/login" exact component ={login}/>
       <PrivateRoute path ="/profile" exact component ={profile}/>
       <Route path ="/logout"  component ={logout}/>


     </Switch>
     
     
     
     </div>
     
    
   </Router>
   
     
   
   
   
  );
  
}
const home = ()=>(
  <div>
    <h1>Welcome Home</h1>
  </div>

);

//app.use(cors());


export default App;
