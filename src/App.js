import React from 'react';
import Nav from './Nav';
import register from './UsersComponent/register';
import DisplayUsers from './UsersComponent/DisplayUsers';

import profile from'./UsersComponent/profile';
import logout from'./UsersComponent/logout';
import PrivateRoute from './PrivateRoute';

import jwt_decode from 'jwt-decode';
import {Redirect }from 'react-router-dom';
import cover from './image/cover.jpg';

import ReactDOM from 'react-dom';




 
//var cors = require('cors');

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import login from './UsersComponent/login';
import transaction from './blockchainComponent/transaction';
import bypoints from './blockchainComponent/bypoints';
import blockList from './blockchainComponent/blockList';
//import Detail from './blockchainComponent/Detail';
import Wallet from './blockchainComponent/Wallet';

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
const backgroundImage ={width:"100%"}

function App() {
  return (
    <Router>
    <div className ="App"  >
   <Nav />
   
   
  
  
      
     <Switch>
       
     <Route path = "/"exact component = {home}/>
       <Route path = "/register"  component = {register}/>
       <Protecadmin path ="/users" exact component ={DisplayUsers}/>
       <Protecadmin path ="/blocks" exact component ={blockList}/>
       
       <Route path ="/login" exact component ={login}/>
       <PrivateRoute path ="/profile" exact component ={profile}/>
       <PrivateRoute path ="/acheter" exact component ={bypoints}/>
       <PrivateRoute path ="/transaction" exact component ={transaction}/>
       <PrivateRoute path ="/wallet" exact component ={Wallet}/>
       <Route path ="/logout"  component ={logout}/>

      
     </Switch>
    
     
     
     
     </div>
     
    
   </Router>
   
     
   
   
   
  );
  
}


//app.use(cors());

const home = ()=>(
  <div>
   
  </div>

);

export default App;
