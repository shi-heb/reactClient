import React from 'react';
import Nav from './Nav';
import register from './register';
import AllUsers from './AllUsers';
import Footer from './Footer';
import profile from'./profile';
import logout from'./logout';
import PrivateRoute from './PrivateRoute';

 
//var cors = require('cors');

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import login from './login';
//import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className ="App">
   <Nav />
     <Switch>
       <Route path = "/"exact component = {home}/>
       <Route path = "/register"  component = {register}/>
       <Route path ="/users" exact component ={AllUsers}/>
       <Route path ="/login" exact component ={login}/>
       <PrivateRoute path ="/profile" exact component ={profile}/>
       <Route path ="/logout"  component ={logout}/>


     </Switch>
     
     <Footer />
     
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
