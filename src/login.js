import React  from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
//const jwt = require('jsonwebtoken');

//import useEffect from 'react';
//var cors = require('cors')
//import {Link} from 'react-router-dom';

import './App.css';

export default  class login extends React.Component {

state ={
email:'',
password:'',
};
handleChange = event => {
  //this.setState({name:event.target.value,email:event.target.value,password:event.target.value});
  this.setState({ [event.target.name]: event.target.value });
 // console.log(this.state,'55555555');
};
handleSubmit = event=>{
  event.preventDefault();
 
  const user ={
    
    email:this.state.email,
    password:this.state.password
  };
  console.log(user,"user")
  axios.post(`http://localhost:4000/api/user/login`,user).then(res=>{
    console.log(res);
    localStorage.setItem('token', res.data['token']);
   // localStorage.setItem('user', JSON.stringify(res.data));
     //localStorage.setItem('user', user)
    
    console.log(res.data);


    console.log('token From local',localStorage.getItem('token'));
    if (jwt_decode(localStorage.getItem('token')).role=='admin')
   {this.props.history.push(`/users`);
   window.location.reload(false);}
   else {this.props.history.push(`/profile`);
   window.location.reload(false);}
    

  }).catch((error) => {
    alert(error.response.data)
   });

  

  
};


render(){
  return (
    
    <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <form noValidate onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
       
      
       
       
        <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
     
      </form>
      </div>
        </div>
      </div>
    
    
    
  );
  
}
     
}