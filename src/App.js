import React from 'react';
import Nav from './Nav';
import register from './register';
import AllUsers from './AllUsers';

import profile from'./profile';
import logout from'./logout';
import PrivateRoute from './PrivateRoute';

import jwt_decode from 'jwt-decode';
import {Redirect }from 'react-router-dom';
import cover from './image/cover.jpg';

import ReactDOM from 'react-dom';




 
//var cors = require('cors');

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import login from './login';
import transaction from './blockchain/transaction';
import bypoints from './blockchain/bypoints';
import blockList from './blockchain/blockList';
import Detail from './blockchain/Detail';
import Wallet from './blockchain/Wallet';

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
       <Protecadmin path ="/users" exact component ={AllUsers}/>
       <Protecadmin path ="/blocks" exact component ={blockList}/>
       <Protecadmin path ="/detail" exact component ={Detail}/>
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
